# Slideo.show Agent Guide

This repository contains the public Slideo product website and release feed. Keep documentation and code grounded in the current static site, not in future product plans.

## Project Shape

- Static site built with Vite and TypeScript.
- Entry point: `src/main.ts`.
- Styling: `src/styles.css`.
- Public assets: `public/`.
- GitHub Pages deployment: `.github/workflows/pages.yml`.
- Custom domain: `public/CNAME` with `slideo.show`.

There is no app backend in this repository. Do not describe server APIs, databases, or runtime services unless they are added to the repo.

## Common Commands

```bash
npm install
npm run dev
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
git diff --check
```

`npm run build` is the minimum verification command for code, copy, layout, and release-link changes because it runs TypeScript checking before the Vite build.

## Content Rules

- Keep public copy focused on the product website: workflow, features, downloads, and release notes.
- Maintain both English and Simplified Chinese copy in `src/main.ts`.
- Update `releaseVersion`, `releaseDate`, download filenames, and changelog entries together when the public release changes.
- Keep the release links pointed at `https://github.com/miclle/slideo.show/releases`.
- Use the real app icon and screenshot from `public/`; do not replace them with decorative placeholders.
- If the Slideo app screenshot changes, verify it is not cropped and still shows a realistic project with slides, narration, and timeline timing.

## Design Rules

- Preserve the quiet product-site style: paper grid background, compact header, strong but not oversized CTA treatment.
- Keep hero and section widths bounded by `--content-max` and `--page-pad` so ultra-wide viewports do not stretch content awkwardly.
- Keep the language control lightweight. It should behave as a utility menu, not a primary button.
- Avoid reintroducing a dedicated limitations/disclaimer section into the main page unless the product narrative explicitly calls for it.

## Deployment Notes

The Pages workflow uses Node.js 24, `npm ci`, `npm run build`, and uploads `dist/`. If the workflow fails with a Pages `404`, verify the repository Pages settings are configured for workflow-based deployment.

Do not commit `dist/` unless the repository policy changes; GitHub Actions builds it from source.
