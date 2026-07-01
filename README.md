# ahmadjz.github.io

Personal portfolio + CV site for **Ahmad Jumaa Zabadneh** — full-stack engineer.
Bilingual (English default at `/`, Arabic at `/ar/` with full RTL), dark-first
"Terminal Violet" theme, tasteful motion, deployed free on GitHub Pages.

Live: <https://ahmadjz.github.io>

## Stack

- **Astro 7** static output + **React 19** islands (only where motion lives)
- **Tailwind v4** (theme tokens in `src/styles/global.css` via `@theme`, no config file)
- **Motion** + a canvas signature hero + **Lenis** smooth scroll (one scroll engine)
- Self-hosted fonts: Geist Sans/Mono (Latin) + IBM Plex Sans Arabic
- Deployed via GitHub Actions → `actions/deploy-pages` (see `.github/workflows/deploy.yml`)

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the built site
npx astro check    # type-check (also runs in CI)
```

## Content

All copy is data-driven and bilingual:

- `src/i18n/en.ts` / `src/i18n/ar.ts` — every string, per locale (implement `src/i18n/content.ts`)
- `src/data/site.ts` — language-neutral constants (identity, links, the Nabta architecture graph)

Edit those two dictionaries to update the site; both locales stay in lockstep by shape.

## CV PDFs

`public/Ahmad-Jumaa-Zabadneh-CV.pdf` (EN) and `-Arabic.pdf` (AR) are the built PDFs
from the private CV repo. Refresh them when the CV changes; the footer shows
`CV_LAST_UPDATED` in `src/data/site.ts`.

## Motion & accessibility

Every animation is gated by `prefers-reduced-motion` **and** an in-page motion toggle
(`data-motion="off"`, persisted to `localStorage`). Decorative motion animates
transform/opacity only; the hero `<h1>` is never hidden. RTL uses logical CSS.

## Deploy

Push to `main` → the Deploy workflow builds and publishes to Pages. One-time setup:
**Settings → Pages → Source → GitHub Actions**. Repo is named `ahmadjz.github.io`
so it serves at the root (`base: '/'`).
