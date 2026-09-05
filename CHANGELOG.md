# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Deployment status is tracked separately for GitHub and the production site. A
release is only marked as deployed to production after the upload has completed
and the live site has been verified.

## [1.1.0] - 2026-09-05

### Deployment

- GitHub: version `1.1.0` source pushed to `origin/main` on 2026-09-05; the configured GitHub Pages workflow was triggered by the push.
- Production: pending deployment; the live site was still running the previous release when inspected on 2026-09-05.

### Added

- Added separate `deploy`, `deploy:check`, and `release` commands while keeping ordinary builds local-only.
- Added a validated SSH/SFTP production deployer with pinned host verification, build checks, atomic file replacement, and cleanup limited to obsolete generated assets.
- Added private deployment-environment handling, a safe public configuration template, and production deployment documentation.
- Added eight client logos for the Slovenski etnografski muzej, Vrtec Jarše, Ministry of Defence, M Sora, Gozdarski inštitut Slovenije, OŠ Ledina, OŠ Karla Destovnika Kajuha, and Narodni muzej Slovenije; added a Barotehna asset for future use.
- Added a dedicated `Politika zasebnosti` page, route, footer link, and sitemap entry.
- Added a privacy-policy notice and link to the contact form.

### Changed

- Updated the client-logo grid with responsive, consistently sized logo containers and centered positioning.
- Restored the original colors of the ZZZS, ZPIZ, and Civilna zaščita logos.
- Reworked the footer into a responsive three-column layout to accommodate the privacy-policy link.
- Removed redundant Google Fonts imports from `index.html`.

### Fixed

- Fixed blank GitHub Pages deployments by building assets under the repository subpath and configuring the router to use Vite's deployment base.
- Added a GitHub Pages SPA fallback so direct navigation to client-side routes loads the application.

## [1.0.0] - 2026-02-20

### Deployment

- Production: initial deployment prepared for `kdstoritve.si`; the exact manual upload time was not recorded in Git.
- Production was subsequently updated by 2026-06-03, based on the inspected live files.

### Features:

- Testimonials carousel now crossfades smoothly between rotations for a better UX.
- Header navigation text size is responsive and slightly larger on large screens.
- Clients/Features/Testimonial data moved to dedicated files under `src/data/` for cleaner structure.
- GitHub Pages automated deployment via Actions: builds on push to `main` and publishes `dist`.

### Code maintenance:

- Refactor: extracted `cardsData`, `testimonialsData`, and `clientLogos` from `App.jsx` into `src/data/cardsData.js`, `src/data/testimonialsData.js`, and `src/data/clientLogos.js`.
- Updated `App.jsx` to import data modules, reducing component size and improving separation of concerns.

### Bug-fixes:

- N/A

## [0.1.0]

### Initial deployment of the project with the first iteration based on the page design and creating all of the components.
