# PORT — Test cases

## Environment

- **Dev/preview:** `npm run build && npm run preview` → `http://localhost:4321/` (EN) and `/ar/` (AR).
- **Live:** `https://ahmadjz.github.io/` (EN) and `https://ahmadjz.github.io/ar/` (AR).
- **Type gate:** `npx astro check` must be 0 errors.

## Manual test matrix

| # | Category | Test case | Steps | Expected |
|---|----------|-----------|-------|----------|
| 1 | Build | Static build succeeds | `npm run build` | 3 pages + robots + sitemap, no errors |
| 2 | Types | Type check clean | `npx astro check` | 0 errors / 0 warnings |
| 3 | Hero | Signature canvas renders | Load `/`, move pointer in hero | Violet dot-grid reacts to cursor; text stays crisp |
| 4 | Hero | LCP text never hidden | Load `/` throttled | Name `<h1>` visible immediately (no fade-in) |
| 5 | Motion | Scroll reveals | Scroll page | Sections fade/rise in once, staggered |
| 6 | Motion | Count-up | Scroll to Nabta / project metrics | Numbers count up once on entry |
| 7 | Work | Architecture diagram | Scroll to Nabta card | 8 nodes reveal tier-by-tier (Clients→Contract→Backend→Infra) |
| 8 | Projects | Link states | Inspect cards | HatlakDeals→Play, Nabta→live, Cellusys/PazarPro→company, academic→"private" note |
| 9 | i18n | Language toggle | Click `ع` / `EN` | Switches `/`↔`/ar/`, crossfade, correct dir/lang |
| 10 | RTL | Arabic mirrors | Load `/ar/` | Layout mirrored via logical CSS; nav/timeline/cards flip; no English leaks |
| 11 | A11y | Keyboard nav | Tab through page | Visible focus ring everywhere; skip link works; menu reachable |
| 12 | A11y | Reduced motion (OS) | Enable OS reduce-motion, reload | No reveals/parallax/cycling; content fully visible; hero text shown |
| 13 | A11y | Motion toggle | Click motion toggle | `data-motion=off`, decorative motion stops, persists on reload |
| 14 | CV | Download works | Click Download CV on each locale | EN→English PDF, AR→Arabic PDF |
| 15 | SEO | Meta + JSON-LD | View source | Unique title/description/canonical, hreflang en/ar/x-default, Person JSON-LD, OG image |
| 16 | Routing | 404 + deep link | Visit `/nope` and `/#work` | Styled 404 with home link; anchor scrolls with header offset |
| 17 | Deploy | Live both locales | After Pages deploy | `/` and `/ar/` load, assets from root, CV + OG resolve |

## Re-test guarantees (keep green)

- Lighthouse (preview, throttled mobile): **Perf ≥90 · A11y 100 · Best-Practices ≥95 · SEO 100**, both locales.
- No console errors on load or after a language crossfade.
- Every decorative animation animates transform/opacity only (compositor-friendly).
- No physical `left/right` CSS in components (logical properties only).

## Automated coverage (current)

- `npx astro check` — type safety across `.astro` + `.tsx`.
- `npm run build` — static build smoke (fails on broken imports / bad routes).
- CI (`.github/workflows/ci.yml`) runs both on every PR.

_Future:_ add `test/*.mjs` (token presence, RTL-logical grep, motion-a11y) + a puppeteer
`preview-smoke.mjs`, mirroring the Nabta landing suite.
