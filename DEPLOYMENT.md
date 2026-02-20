# cPanel Deployment Guide for KDS Landing Page

## Prerequisites

- cPanel hosting account with File Manager access
- Domain configured and pointing to your hosting
- FTP/SFTP credentials (optional, but recommended)

## Deployment Steps

### 1. Build the Production Version

Run the following command in your project directory:

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

### 2. Upload Files to cPanel

#### Option A: Using cPanel File Manager

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's document root)
4. Delete any existing files if this is a fresh deployment
5. Upload all contents from the `dist` folder:
   - index.html
   - assets/ folder
   - .htaccess file
   - Any other files in dist/
6. Make sure the `.htaccess` file is uploaded (enable "Show Hidden Files" in File Manager settings if you don't see it)

#### Option B: Using FTP/SFTP (Recommended)

1. Connect to your hosting using an FTP client (FileZilla, WinSCP, etc.)
2. Navigate to `public_html` or your domain's document root
3. Upload all contents from the `dist` folder
4. Ensure file permissions are set correctly (644 for files, 755 for folders)

### 3. Verify Deployment

1. Open your domain in a browser
2. Test all navigation links to ensure React Router is working
3. Check that all images and assets load correctly
4. Test the contact form functionality

## Important Notes

### Base Path Configuration

- The project is now configured with `base: "/"` for root domain deployment
- If deploying to a subdirectory (e.g., example.com/myapp/):
  1. Update `vite.config.js`: `base: "/myapp/"`
  2. Rebuild: `npm run build`
  3. Upload to public_html/myapp/

### Environment Variables

- If you're using environment variables (e.g., API keys), create a `.env.production` file:
  ```
  VITE_API_KEY=your_production_key
  VITE_EMAIL_SERVICE_ID=your_service_id
  ```
- These will be bundled during build (ensure sensitive keys are restricted)

### .htaccess File

- The `.htaccess` file is crucial for React Router to work correctly
- It redirects all routes to index.html for client-side routing
- It includes compression and caching rules for better performance

### Troubleshooting

**Issue: 404 errors on page refresh**

- Ensure `.htaccess` file is present and properly configured
- Check that mod_rewrite is enabled on your hosting (most cPanel hosts have it enabled)

**Issue: Assets not loading**

- Verify the base path in `vite.config.js` matches your deployment location
- Check browser console for 404 errors
- Ensure all files uploaded correctly

**Issue: Blank page**

- Check browser console for JavaScript errors
- Verify that index.html and all asset files are in the correct location
- Clear browser cache and try again

### Updating Your Site

When you make changes:

1. Run `npm run build` locally
2. Upload only the changed files from `dist/` to your server
3. Or upload everything to ensure consistency
4. Clear browser cache to see changes immediately

### HTTPS Setup (Recommended)

Most cPanel hosts offer free SSL certificates:

1. In cPanel, go to **SSL/TLS Status**
2. Enable AutoSSL or install Let's Encrypt certificate
3. Uncomment the HTTPS redirect lines in `.htaccess` to force HTTPS:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

## Quick Checklist

- [ ] Run `npm run build` locally
- [ ] Log in to cPanel
- [ ] Navigate to public_html (or appropriate directory)
- [ ] Upload all files from `dist/` folder
- [ ] Verify `.htaccess` is uploaded
- [ ] Test website in browser
- [ ] Test all routes and navigation
- [ ] Test contact form (EmailJS)

## Additional Resources

- [cPanel File Manager Documentation](https://docs.cpanel.net/cpanel/files/file-manager/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Deployment](https://reactrouter.com/en/main/start/concepts#data-loading)

---

Need help? Check your cPanel hosting provider's documentation or contact their support team for server-specific issues.
