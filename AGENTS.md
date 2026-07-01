# AGENTS.md — ahmadjz.github.io (portfolio site)

Personal portfolio + CV site for Ahmad Jumaa Zabadneh. Public repo, GitHub Pages.
Sibling of the private CV repo (`../private`, Typst) — this one is PUBLIC, so never
put private personal data (DOB, address, national IDs) here.

## Architecture

- **Astro 7 static + React 19 islands + Tailwind v4.** Zero JS by default; React
  hydrates only in `src/components/islands/*` (SignatureHero, RotatingRoles,
  ArchitectureDiagram). Everything else is `.astro` + a small vanilla motion script
  (`src/scripts/main.ts`).
- **Design tokens** live only in `src/styles/global.css` `@theme` (Terminal Violet:
  zinc surfaces, violet→cyan accent). No `tailwind.config`. Use semantic color
  utilities (`bg-surface`, `text-ink`, `border-line`, `text-gradient`).
- **Content is data-driven + bilingual.** Edit `src/i18n/en.ts` + `src/i18n/ar.ts`
  (shape in `src/i18n/content.ts`); neutral data in `src/data/site.ts`. Both locale
  dicts must stay in lockstep — same keys, translated values.
- **One page component** (`src/components/Portfolio.astro`) renders all sections and is
  used by both `src/pages/index.astro` (en) and `src/pages/ar/index.astro` (ar).

## Rules

- **Motion is CSS-first + gated.** New animation must animate transform/opacity only and
  degrade under `prefers-reduced-motion` AND `[data-motion="off"]`. Never hide the hero
  `<h1>` behind a reveal.
- **RTL is first-class.** Use logical CSS (`ps-*`, `border-s`, `start-*`, `inset-inline`),
  never physical `left/right`. Test `/ar/` after any layout change.
- **Arabic copy conventions** (mirror the CV repo): first-person past verbs, Standard
  Arabic months, Western digits, tech/company names stay English, no em-dashes in prose.
- **CV PDFs** in `public/` come from the private CV repo's build. Refresh both when the
  CV changes and bump `CV_LAST_UPDATED` in `src/data/site.ts`.

## Commands

```sh
npm run dev        # localhost:4321 (astro dev --background to detach)
npm run build      # dist/
npm run preview
npx astro check    # type-check (CI gate)
```

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and ships to Pages. Serves at the
root (`base: '/'`) because the repo is named `ahmadjz.github.io`. Push as `ahmadjz`.
