# PORT — Portfolio site plan (session guide + prompts)

Prefix **PORT**. Repo: `ahmadjz.github.io` (this repo). Mirrors the `/plan-feature-nabta`
TASK / PROMPTS / TEST-CASES format. Status glyphs live in each task header below:
`⬜ todo · 🔄 in progress · ✅ done`. Verification model for this surface (web):
`npm run build` + `npx astro check` + `npm run preview` smoke + Lighthouse.

Full rationale + design brief: `/home/ahmadjz/.claude/plans/i-want-to-make-wild-pike.md`.

## Key decisions

| # | Question | Answer |
|---|---|---|
| 1 | Repo / URL | New public `ahmadjz.github.io`, user page, `base:'/'` |
| 2 | Theme | Terminal Violet (zinc + violet→cyan, Geist Sans/Mono) |
| 3 | Languages | Bilingual EN (default `/`) + AR (`/ar/`, RTL) |
| 4 | Ambition | Substance-first + ONE signature (violet pointer-reactive canvas hero) |
| 5 | Reveal engine | CSS-first IntersectionObserver + tiny vanilla script; React/Motion only for the 3 signature islands (perf: minimal hydration) |
| 6 | Project links | HatlakDeals → Play Store; Nabta → live landing; others proprietary (company link or "private/client work") |
| 7 | CV download | Per-locale PDFs copied from the private CV repo into `public/` |

## Waves & dependency lanes

- **Lane A (foundation, serial):** 01 → 02 → 03
- **Lane B (motion):** 04 → 05
- **Lane C (content):** 06 gates all of 07–12 (parallel after 06)
- **Lane D (quality):** 13, 14, 15 after Lane C; 16 last

---

## ✅ TASK-01 — Repo + toolchain + deploy pipeline
Wave 0. Astro 7 + React 19 + Tailwind v4 scaffold; `astro.config.mjs` (site/base/i18n);
`.github/workflows/deploy.yml` (checkout@v6 + withastro/action@v6 → deploy-pages@v4) + `ci.yml`.

## ✅ TASK-02 — Terminal Violet tokens + typography
Wave 0. `src/styles/global.css` `@theme` tokens (OKLCH-ish zinc + violet→cyan), self-hosted
Geist Sans/Mono + IBM Plex Sans Arabic, fluid `clamp()` scale, motion tokens, reduced-motion base.

## ✅ TASK-03 — Base shell + chrome + SEO scaffold
Wave 0. `Base.astro` (fonts, ClientRouter view transitions, JSON-LD Person, OG/Twitter, hreflang),
floating hide-on-scroll `Header`, `Footer`, language toggle, in-page motion toggle, skip link.

## ✅ TASK-04 — Motion primitives
Wave 1. `src/scripts/main.ts`: IO reveal + per-group stagger, rAF count-up, magnetic CTAs
(`pointer:fine`), header behavior, Lenis smooth scroll, motion toggle. All gated by reduced-motion.

## ✅ TASK-05 — Signature hero interaction
Wave 1. `islands/SignatureHero.tsx` (pointer-reactive violet particle canvas, static fallback),
`islands/RotatingRoles.tsx` (Motion role cycler, SR-safe). View-transition crossfades via ClientRouter.

## ✅ TASK-06 — Content model + bilingual dicts
Wave 2 gate. `i18n/content.ts` shape; `i18n/en.ts` + `i18n/ar.ts` encode ALL CV content;
`data/site.ts` neutral data + Nabta architecture graph.

## ✅ TASK-07 — Hero section
Wave 2. Status pill, name `<h1>` (LCP, never hidden), rotating role, value prop, magnetic CTAs.

## ✅ TASK-08 — Featured projects + Nabta anchor
Wave 2. `ProjectCard.astro` + `sections/Work.astro`; Nabta anchor with scroll-reveal
`ArchitectureDiagram` island + count-up metrics; graceful "private/client work" state.

## ✅ TASK-09 — About + Skills
Wave 2. Photo + highlight stats + first-person paragraphs; grouped skill chips (no progress bars).

## ✅ TASK-10 — Experience timeline
Wave 2. Vertical logical-CSS timeline, all 11 roles, STAR bullets, company links, tags.

## ✅ TASK-11 — Community + Education + Awards
Wave 2. WRO highlights + volunteer cards + education block with the two academic projects.

## ✅ TASK-12 — Contact + Footer
Wave 2. CTA card (email + CV), social links, footer with "CV last updated".

## ✅ TASK-13 — SEO / OG / social cards
Wave 3. JSON-LD Person + sameAs, per-locale hreflang + canonical, sitemap, robots.txt, OG image.

## ⬜ TASK-14 — A11y + RTL + reduced-motion audit
Wave 3. Run `web-design-guidelines` skill over the built UI; axe/keyboard/SR pass; confirm RTL
parity + reduced-motion kills all decorative motion. Fix findings.

Prompt:
```
Run /web-design-guidelines against the built portfolio (src/components + src/layouts).
Then keyboard-tab the live preview end to end, toggle OS reduce-motion + the in-page
motion toggle, and verify /ar RTL parity. Fix every CRITICAL/HIGH finding. Re-run astro check.
```

## ⬜ TASK-15 — Performance + Lighthouse
Wave 3. Lighthouse on preview; confirm Perf ≥90 / A11y 100 / BP ≥95 / SEO 100 both locales;
verify LCP hero eager, count-up not blocking, image dims set. Wire Lighthouse CI if desired.

## ⬜ TASK-16 — Copy polish + go-live
Wave 3. Run `/writing-guidelines` on EN + AR copy; confirm Pages Source = GitHub Actions;
verify live URL both locales + CV downloads + deep links + 404. Optional custom domain via `public/CNAME`.

## Decision log (as-built)

- **Reveals are CSS-first, not per-element Motion islands** — minimizes hydration roots for a
  content-heavy page; keeps Lighthouse high. Motion is reserved for the 3 signature islands.
- **Signature adapted to Terminal Violet** — a violet spotlight + reactive dot-grid canvas, not
  the plant motif from the (rejected) Greenhouse theme.
- **Per-locale CV PDFs** copied from the private CV repo's June 2026 build into `public/`.
- **GitHub profile** confirmed as `github.com/ahmadjz` (from local `gh` auth) → used in JSON-LD `sameAs`.
