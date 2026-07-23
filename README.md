# Slideo.show

Slideo.show is the public product website and download entry for Slideo. The site is a small Vite + TypeScript static app deployed to GitHub Pages at <https://slideo.show>.

The website presents Slideo as a slides-first narrated video production tool: import an existing PDF, PPTX, or image deck, write or draft page-by-page narration, generate voice, inspect timing, present live, and export MP4 without rebuilding the deck.

## Site Structure

- Hero with the Slideo product positioning, release CTA, and a real Slideo app screenshot.
- Workflow section covering import, narration, timeline review, and presentation/export.
- Feature section covering `.slideo` project state, slide import, narration, voice timing, local OCR, presentation mode, and video export.
- Download section with platform-specific installers from the current GitHub Release.
- Changelog section with recent public release notes.
- Compact language menu for English and Simplified Chinese.

Source files:

- `src/main.ts` contains page rendering, bilingual copy, release constants, download URLs, and the language menu behavior.
- `src/styles.css` contains the responsive layout, product visual treatment, download panel, and language menu styles.
- `public/slideo-app-screenshot.png` is the product screenshot used in the hero.
- `public/slideo-app-icon.svg` is the app icon used in the header.
- `public/CNAME` binds GitHub Pages to `slideo.show`.
- `public/.nojekyll` keeps GitHub Pages from applying Jekyll processing.

## Local Development

```bash
npm install
npm run dev
```

For a production-equivalent local preview:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

## Build

```bash
npm run build
```

The build runs `tsc --noEmit` and `vite build`. Output is written to `dist/`.

## Deployment

`.github/workflows/pages.yml` deploys the site on pushes to `main` and on manual workflow dispatch:

1. Setup Node.js 24.
2. Install with `npm ci`.
3. Run `npm run build`.
4. Upload `dist/` with `actions/upload-pages-artifact`.
5. Deploy with `actions/deploy-pages`.

GitHub Pages must be configured for workflow-based builds, and the custom domain should remain `slideo.show`.

## Internationalization

The site supports English and Simplified Chinese.

- Locale is selected from `localStorage` first.
- If no locale was saved, the browser language is used.
- The language menu writes `slideo-locale` to `localStorage`.
- All page copy is currently stored in the `copy` dictionary in `src/main.ts`.

When updating text, keep both `en` and `zh` entries synchronized.

## Release Feed

The website download links and in-app update feed are based on GitHub Releases in this repository.

Current public release:

- Version: `v0.1.8`
- Published: `2026-07-23`
- Latest release: <https://github.com/miclle/slideo.show/releases/latest>

Installer links currently point to:

- `slideo-0.1.8-arm64.dmg`
- `slideo-0.1.8-x64.dmg`
- `slideo-0.1.8-setup.exe`
- `slideo-0.1.8.AppImage`
- `slideo_0.1.8_amd64.deb`

When publishing a new Slideo release, update `releaseVersion`, `releaseDate`, download filenames, release notes, and both language copies in `src/main.ts`.

## Verification

Before committing website changes, run:

```bash
npm run build
git diff --check
```

For visual changes, also run the preview server and inspect the page in a browser at `http://127.0.0.1:4173/`.

## License

Apache-2.0
