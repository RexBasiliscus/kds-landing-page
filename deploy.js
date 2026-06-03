#!/usr/bin/env node

/**
 * Automated cPanel Deployment Script
 * Deploys the built dist folder to your cPanel hosting via SFTP
 *
 * Setup:
 * 1. Create a .env.deploy file in the project root with:
 *    SFTP_HOST=your.domain.com or cpanel-ip.com
 *    SFTP_USERNAME=your_cpanel_username
 *    SFTP_PASSWORD=your_password (or leave blank for key-based auth)
 *    SFTP_PORT=22
 *    REMOTE_PATH=/home/username/public_html
 */

const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env.deploy
const envPath = path.join(process.cwd(), ".env.deploy");
if (!fs.existsSync(envPath)) {
  console.error(
    "❌ .env.deploy file not found. Please create it with your cPanel credentials.",
  );
  console.error(
    "\nTemplate .env.deploy content:\n" +
      "SFTP_HOST=your.domain.com\n" +
      "SFTP_USERNAME=your_username\n" +
      "SFTP_PASSWORD=your_password\n" +
      "SFTP_PORT=22\n" +
      "REMOTE_PATH=/home/username/public_html",
  );
  process.exit(1);
}

dotenv.config({ path: envPath });

const {
  SFTP_HOST,
  SFTP_USERNAME,
  SFTP_PASSWORD,
  SFTP_PORT = 22,
  REMOTE_PATH,
} = process.env;

if (!SFTP_HOST || !SFTP_USERNAME || !REMOTE_PATH) {
  console.error("❌ Missing required environment variables in .env.deploy");
  console.error("Required: SFTP_HOST, SFTP_USERNAME, REMOTE_PATH");
  process.exit(1);
}

const Client = require("ssh2").Client;
const distPath = path.join(process.cwd(), "dist");

if (!fs.existsSync(distPath)) {
  console.error("❌ dist folder not found. Run 'npm run build' first.");
  process.exit(1);
}

console.log("🚀 Starting deployment to cPanel...");
console.log(`📍 Host: ${SFTP_HOST}:${SFTP_PORT}`);
console.log(`👤 Username: ${SFTP_USERNAME}`);
console.log(`📂 Remote path: ${REMOTE_PATH}`);

const conn = new Client();

conn
  .on("ready", () => {
    console.log("✅ Connected to server");
    conn.sftp((err, sftp) => {
      if (err) throw err;

      const uploadDir = (localDir, remoteDir, callback) => {
        fs.readdir(localDir, (err, files) => {
          if (err) return callback(err);

          let completed = 0;

          if (files.length === 0) {
            return callback(null);
          }

          files.forEach((file) => {
            const localPath = path.join(localDir, file);
            const remotePath = `${remoteDir}/${file}`;

            fs.stat(localPath, (err, stats) => {
              if (err) return callback(err);

              if (stats.isDirectory()) {
                sftp.mkdir(remotePath, { mode: 0o755 }, (err) => {
                  // Ignore error if directory exists
                  uploadDir(localPath, remotePath, (err) => {
                    if (err) return callback(err);
                    completed++;
                    if (completed === files.length) {
                      callback(null);
                    }
                  });
                });
              } else {
                const readStream = fs.createReadStream(localPath);
                const writeStream = sftp.createWriteStream(remotePath, {
                  flags: "w",
                  encoding: null,
                  mode: 0o644,
                });

                writeStream.on("close", () => {
                  console.log(`✓ Uploaded: ${remotePath}`);
                  completed++;
                  if (completed === files.length) {
                    callback(null);
                  }
                });

                writeStream.on("error", (err) => {
                  callback(err);
                });

                readStream.pipe(writeStream);
              }
            });
          });
        });
      };

      uploadDir(distPath, REMOTE_PATH, (err) => {
        if (err) {
          console.error("❌ Upload failed:", err);
          conn.end();
          process.exit(1);
        }
        console.log("✅ All files uploaded successfully!");
        conn.end();
        process.exit(0);
      });
    });
  })
  .on("error", (err) => {
    console.error("❌ Connection error:", err.message);
    process.exit(1);
  })
  .connect({
    host: SFTP_HOST,
    port: parseInt(SFTP_PORT),
    username: SFTP_USERNAME,
    password: SFTP_PASSWORD,
  });
