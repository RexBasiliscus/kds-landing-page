import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";
import process from "node:process";
import { Client } from "ssh2";
import dotenv from "dotenv";

const projectRoot = process.cwd();
const distDirectory = path.join(projectRoot, "dist");
const deployEnvPath = path.join(projectRoot, ".env.deploy");
const checkOnly = process.argv.includes("--check");

if (!existsSync(deployEnvPath)) {
  throw new Error(
    "Missing .env.deploy. Copy .env.deploy.example to .env.deploy and configure authentication.",
  );
}

dotenv.config({ path: deployEnvPath });

const {
  SFTP_HOST,
  SFTP_PORT = "22",
  SFTP_USERNAME,
  SFTP_REMOTE_PATH,
  SFTP_HOST_FINGERPRINT,
  SFTP_PRIVATE_KEY_PATH,
  SFTP_PRIVATE_KEY_PASSPHRASE,
  SFTP_PASSWORD,
} = process.env;

const requiredValues = {
  SFTP_HOST,
  SFTP_USERNAME,
  SFTP_REMOTE_PATH,
  SFTP_HOST_FINGERPRINT,
};

for (const [name, value] of Object.entries(requiredValues)) {
  if (!value) throw new Error(`Missing ${name} in .env.deploy.`);
}

const port = Number.parseInt(SFTP_PORT, 10);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("SFTP_PORT must be a valid TCP port.");
}

const expectedRemotePath = `/home/${SFTP_USERNAME}/public_html`;
if (SFTP_REMOTE_PATH !== expectedRemotePath) {
  throw new Error(
    `Refusing to deploy outside the confirmed production path ${expectedRemotePath}.`,
  );
}

if (!SFTP_HOST_FINGERPRINT.startsWith("SHA256:")) {
  throw new Error("SFTP_HOST_FINGERPRINT must use the SHA256: format.");
}

const resolveHome = (filePath) =>
  filePath.startsWith("~/") || filePath.startsWith("~\\")
    ? path.join(homedir(), filePath.slice(2))
    : path.resolve(filePath);

const connectionOptions = {
  host: SFTP_HOST,
  port,
  username: SFTP_USERNAME,
  hostHash: "sha256",
  hostVerifier: (fingerprintHex) => {
    const fingerprint = Buffer.from(fingerprintHex, "hex")
      .toString("base64")
      .replace(/=+$/, "");
    return `SHA256:${fingerprint}` === SFTP_HOST_FINGERPRINT;
  },
  // Pin both the algorithm and fingerprint so ssh2 verifies the same ED25519
  // host key that was confirmed independently with OpenSSH.
  algorithms: {
    serverHostKey: ["ssh-ed25519"],
  },
  readyTimeout: 20_000,
};

if (SFTP_PRIVATE_KEY_PATH) {
  const privateKeyPath = resolveHome(SFTP_PRIVATE_KEY_PATH);
  if (!existsSync(privateKeyPath)) {
    throw new Error(`SSH private key not found: ${privateKeyPath}`);
  }
  connectionOptions.privateKey = readFileSync(privateKeyPath);
  if (SFTP_PRIVATE_KEY_PASSPHRASE) {
    connectionOptions.passphrase = SFTP_PRIVATE_KEY_PASSPHRASE;
  }
} else if (SFTP_PASSWORD) {
  connectionOptions.password = SFTP_PASSWORD;
} else {
  throw new Error(
    "Set SFTP_PRIVATE_KEY_PATH (recommended) or SFTP_PASSWORD in .env.deploy.",
  );
}

const toRemotePath = (...parts) => path.posix.join(...parts);

const collectLocalFiles = async (directory, relativeDirectory = "") => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    const localPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectLocalFiles(localPath, relativePath)));
    } else if (entry.isFile()) {
      files.push({ localPath, relativePath });
    }
  }

  return files;
};

const connect = (client, options) =>
  new Promise((resolve, reject) => {
    client.once("ready", resolve);
    client.once("error", reject);
    client.connect(options);
  });

const openSftp = (client) =>
  new Promise((resolve, reject) => {
    client.sftp((error, sftp) => (error ? reject(error) : resolve(sftp)));
  });

const sftpStat = (sftp, remotePath) =>
  new Promise((resolve, reject) => {
    sftp.stat(remotePath, (error, attributes) =>
      error ? reject(error) : resolve(attributes),
    );
  });

const sftpReaddir = (sftp, remotePath) =>
  new Promise((resolve, reject) => {
    sftp.readdir(remotePath, (error, entries) =>
      error ? reject(error) : resolve(entries),
    );
  });

const sftpMkdir = (sftp, remotePath) =>
  new Promise((resolve, reject) => {
    sftp.mkdir(remotePath, { mode: 0o755 }, (error) =>
      error ? reject(error) : resolve(),
    );
  });

const sftpFastPut = (sftp, localPath, remotePath) =>
  new Promise((resolve, reject) => {
    sftp.fastPut(localPath, remotePath, { mode: 0o644 }, (error) =>
      error ? reject(error) : resolve(),
    );
  });

const sftpUnlink = (sftp, remotePath) =>
  new Promise((resolve, reject) => {
    sftp.unlink(remotePath, (error) => (error ? reject(error) : resolve()));
  });

const sftpRmdir = (sftp, remotePath) =>
  new Promise((resolve, reject) => {
    sftp.rmdir(remotePath, (error) => (error ? reject(error) : resolve()));
  });

const sftpRename = (sftp, oldPath, newPath) =>
  new Promise((resolve, reject) => {
    const callback = (error) => (error ? reject(error) : resolve());
    if (typeof sftp.ext_openssh_rename === "function") {
      sftp.ext_openssh_rename(oldPath, newPath, callback);
    } else {
      sftp.rename(oldPath, newPath, callback);
    }
  });

const pathExists = async (sftp, remotePath) => {
  try {
    await sftpStat(sftp, remotePath);
    return true;
  } catch (error) {
    if (error.code === 2) return false;
    throw error;
  }
};

const ensureRemoteDirectory = async (sftp, remoteDirectory) => {
  if (await pathExists(sftp, remoteDirectory)) return;
  await ensureRemoteDirectory(sftp, path.posix.dirname(remoteDirectory));
  await sftpMkdir(sftp, remoteDirectory);
};

const replaceRemoteFile = async (sftp, localPath, remotePath) => {
  await ensureRemoteDirectory(sftp, path.posix.dirname(remotePath));
  const temporaryPath = `${remotePath}.uploading-${process.pid}`;
  await sftpFastPut(sftp, localPath, temporaryPath);

  try {
    await sftpRename(sftp, temporaryPath, remotePath);
  } catch (error) {
    if (!(await pathExists(sftp, remotePath))) throw error;
    await sftpUnlink(sftp, remotePath);
    await sftpRename(sftp, temporaryPath, remotePath);
  }
};

const collectRemoteTree = async (sftp, remoteDirectory, relativeDirectory) => {
  if (!(await pathExists(sftp, remoteDirectory))) return { files: [], dirs: [] };

  const files = [];
  const dirs = [];
  const entries = await sftpReaddir(sftp, remoteDirectory);

  for (const entry of entries) {
    const relativePath = path.posix.join(relativeDirectory, entry.filename);
    const remotePath = toRemotePath(remoteDirectory, entry.filename);
    if (entry.attrs.isDirectory()) {
      const nested = await collectRemoteTree(sftp, remotePath, relativePath);
      files.push(...nested.files);
      dirs.push(...nested.dirs, { remotePath, relativePath });
    } else {
      files.push({ remotePath, relativePath });
    }
  }

  return { files, dirs };
};

const validateBuild = async () => {
  const indexPath = path.join(distDirectory, "index.html");
  const assetsPath = path.join(distDirectory, "assets");
  if (!existsSync(indexPath) || !existsSync(assetsPath)) {
    throw new Error("dist is incomplete. Run npm run build before deployment.");
  }

  const localFiles = await collectLocalFiles(distDirectory);
  if (!localFiles.some(({ relativePath }) => relativePath.endsWith(".js"))) {
    throw new Error("dist contains no JavaScript bundle; deployment aborted.");
  }

  const appEnvPath = path.join(projectRoot, ".env");
  if (existsSync(appEnvPath)) {
    const appEnv = dotenv.parse(readFileSync(appEnvPath));
    const expectedService = appEnv.VITE_EMAILJS_SERVICE_ID;
    if (expectedService) {
      const bundles = localFiles.filter(({ relativePath }) =>
        relativePath.endsWith(".js"),
      );
      const serviceWasEmbedded = bundles.some(({ localPath }) =>
        readFileSync(localPath, "utf8").includes(expectedService),
      );
      if (!serviceWasEmbedded) {
        throw new Error(
          `The built bundle does not contain VITE_EMAILJS_SERVICE_ID=${expectedService}.`,
        );
      }
    }
  }

  return localFiles;
};

const client = new Client();

try {
  const localFiles = await validateBuild();
  console.log(
    `${checkOnly ? "Checking" : "Deploying to"} ${SFTP_HOST}:${port}${SFTP_REMOTE_PATH}`,
  );
  await connect(client, connectionOptions);
  const sftp = await openSftp(client);

  const remoteRoot = await sftpStat(sftp, SFTP_REMOTE_PATH);
  if (!remoteRoot.isDirectory()) {
    throw new Error(`${SFTP_REMOTE_PATH} is not a directory.`);
  }

  if (checkOnly) {
    console.log("Connection, host fingerprint, authentication, and path verified.");
  } else {
    const orderedFiles = [...localFiles].sort((a, b) => {
      if (a.relativePath === "index.html") return 1;
      if (b.relativePath === "index.html") return -1;
      return a.relativePath.localeCompare(b.relativePath);
    });

    for (const file of orderedFiles) {
      const remotePath = toRemotePath(SFTP_REMOTE_PATH, file.relativePath);
      await replaceRemoteFile(sftp, file.localPath, remotePath);
      console.log(`Uploaded ${file.relativePath}`);
    }

    const localAssetPaths = new Set(
      localFiles
        .map(({ relativePath }) => relativePath)
        .filter((relativePath) => relativePath.startsWith("assets/")),
    );
    const remoteAssetsPath = toRemotePath(SFTP_REMOTE_PATH, "assets");
    const remoteAssets = await collectRemoteTree(sftp, remoteAssetsPath, "assets");

    for (const file of remoteAssets.files) {
      if (!localAssetPaths.has(file.relativePath)) {
        await sftpUnlink(sftp, file.remotePath);
        console.log(`Removed obsolete ${file.relativePath}`);
      }
    }

    for (const directory of remoteAssets.dirs) {
      try {
        await sftpRmdir(sftp, directory.remotePath);
      } catch {
        // Non-empty directories are intentionally preserved.
      }
    }

    const digest = createHash("sha256")
      .update(readFileSync(path.join(distDirectory, "index.html")))
      .digest("hex")
      .slice(0, 12);
    console.log(`Production deployment completed (index ${digest}).`);
  }
} finally {
  client.end();
}
