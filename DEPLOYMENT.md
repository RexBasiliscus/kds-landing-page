# Production deployment

The project deliberately separates local builds, GitHub Pages deployment, and
the production release:

- `npm run build` builds `dist` locally and does not deploy it.
- A push to `main` triggers the GitHub Pages workflow.
- `npm run release` builds and deploys `dist` to production over SFTP.

## Initial setup

1. Copy `.env.deploy.example` to `.env.deploy`.
2. Enter the production SSH/SFTP host, port, username, verified host-key
   fingerprint, and remote path.
3. Configure either `SFTP_PRIVATE_KEY_PATH` (recommended) or `SFTP_PASSWORD`.
4. Keep `.env.deploy` private; it is excluded by `.gitignore`.

Test authentication, fingerprint verification, and the remote directory without
uploading anything:

```powershell
npm.cmd run deploy:check
```

## Release

Deploy a fresh production build with:

```powershell
npm.cmd run release
```

The release command builds with the local Vite `.env`, verifies the generated
bundle, uploads the contents of `dist`, publishes `index.html` last, and removes
obsolete files only from the generated `assets` directory. It does not delete
or replace unrelated hidden directories in the production root.

After deployment, verify the live site and contact form, then record the date
and deployed commit under the release's `Deployment` section in `CHANGELOG.md`.
