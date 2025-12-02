# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0]

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
