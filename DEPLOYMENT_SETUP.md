# Automated Deployment Setup Guide

## ✅ What's Been Set Up

1. **Dynamic Year Footer**: The footer now automatically displays the current year and updates every January 1st
2. **Automated Deployment Scripts**: New npm scripts to build and deploy to cPanel
3. **SFTP Deployment**: Uses secure SFTP to upload files to your cPanel server

## 🚀 Quick Start

### Step 1: Create Deployment Configuration

Copy `.env.deploy.example` to `.env.deploy` and fill in your cPanel credentials:

```bash
cp .env.deploy.example .env.deploy
```

Then edit `.env.deploy` with your actual cPanel details:

```
SFTP_HOST=your.domain.com
SFTP_USERNAME=your_cpanel_username
SFTP_PASSWORD=your_password
SFTP_PORT=22
REMOTE_PATH=/home/cpanel_username/public_html
```

**⚠️ Important**: `.env.deploy` is git-ignored and will never be committed to preserve your credentials.

### Step 2: Find Your cPanel Credentials

1. **SFTP_HOST**: Your domain name or cPanel server IP
   - Usually: `your-domain.com` or `your-domain.com:2222`
   - Check your hosting provider's welcome email

2. **SFTP_USERNAME**: Your cPanel username
   - Often the same as your hosting account username
   - Found in cPanel welcome email or hosting control panel

3. **SFTP_PASSWORD**: Your cPanel password
   - Same password you use to log into cPanel

4. **SFTP_PORT**: Usually `22` (SSH) or `2222` (cPanel alternative)
   - Ask your hosting provider if unsure

5. **REMOTE_PATH**: Path to your public_html
   - Usually: `/home/your_cpanel_username/public_html`
   - Check in cPanel File Manager or SSH connection

### Step 3: Build and Deploy

Once `.env.deploy` is configured, you have two options:

**Option A: Build only (no deployment)**

```bash
npm run build
```

**Option B: Build and deploy automatically** (Recommended)

```bash
npm run build:deploy
```

This will:

1. Run `npm run build` to create production files
2. Automatically upload everything to your cPanel server via SFTP
3. Show progress for each file uploaded

### Step 4: Verify Deployment

1. Open your domain in a browser
2. Check the footer - it should show the current year (2026)
3. Test all navigation and functionality
4. Check that images load correctly

## 📝 Available Commands

```bash
# Build only
npm run build

# Deploy only (requires dist folder)
npm run deploy

# Build + Deploy (recommended)
npm run build:deploy

# Development server
npm run dev

# Check for linting issues
npm run lint
```

## 🔧 Troubleshooting

### "Connection refused" error

- Check SFTP_HOST, SFTP_PORT, and credentials in `.env.deploy`
- Verify your hosting provider allows SSH/SFTP connections
- Try using port `2222` instead of `22`

### "Permission denied" error

- Check SFTP_USERNAME is correct (case-sensitive)
- Verify SFTP_PASSWORD is correct
- Ensure remote path exists on the server

### Files not uploading

- Verify dist folder exists: `npm run build` creates it
- Check file permissions on remote server
- Ensure you have write access to REMOTE_PATH

### Uploaded files aren't visible on website

- Verify files are in the correct `public_html` path
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that `.htaccess` file was uploaded (needed for React Router)

## 🛡️ Security Best Practices

1. **Never commit `.env.deploy`** - it's already in `.gitignore`
2. **Never share your credentials** - keep SFTP_PASSWORD secure
3. **Use a strong password** for your cPanel account
4. **Consider SSH key authentication** for better security:
   - Generate SSH key: `ssh-keygen -t rsa -b 4096`
   - Add public key to authorized_keys on server
   - Leave SFTP_PASSWORD empty in `.env.deploy` (will use key auth)

## 📚 Additional Resources

- [cPanel Documentation](https://docs.cpanel.net/)
- [SFTP Client Recommendations](https://docs.cpanel.net/cpanel/files/file-manager/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## 💡 Tips

- Run `npm run build:deploy` as part of your release process
- Test deployment in a staging environment first if possible
- Keep your cPanel credentials secure - consider using environment-specific configs
- Bookmark your cPanel login URL for quick access

---

**Questions?** Check with your hosting provider's support team for server-specific configuration details.
