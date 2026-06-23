# Tasks

## 1. New pages

- [x] 1.1 `src/pages/core/ColorPalette.vue` — 4 palettes with
      shade swatches.
- [x] 1.2 `src/pages/core/Typography.vue` — 7-step scale + 4
      weights.
- [x] 1.3 `src/pages/core/Icons.vue` — 30 Phosphor icon samples.
- [x] 1.4 `src/pages/core/GoldenRatio.vue` — 4 ratios + 3 visual
      examples.
- [x] 1.5 `src/pages/core/GridSystem.vue` — breakpoints table +
      12-column demo.
- [x] 1.6 `src/pages/core/ShadowsGlow.vue` — 5 shadow sizes.

## 2. nav.ts and router.ts

- [x] 2.1 Add `Core` tab to `src/nav.ts` with a `Foundation`
      category (6 sections).
- [x] 2.2 Add 6 page imports and 6 route entries in
      `src/router.ts`.

## 3. Tests

- [x] 3.1 Extend `tests/e2e/visual-parity.spec.ts` with 6 new
      routes. Refresh baselines.

## 4. OpenSpec change folder

- [x] 4.1 `README.md` — summary.
- [x] 4.2 `proposal.md` — Why / What Changes / Capabilities.
- [x] 4.3 `design.md` — page-by-page layout, cross-cutting
      decisions, cascade convention.
- [x] 4.4 `tasks.md` — this file.
- [x] 4.5 `specs/core-foundation/spec.md` — R1–R2 acceptance.

## 5. Validation

- [x] 5.1 `pnpm run build` clean.
- [x] 5.2 `pnpm run lint` clean.
- [x] 5.3 `pnpm run typecheck` clean.
- [x] 5.4 `pnpm run test` (unit) — 105/105 passing (no new
      unit tests in this bucket).
- [x] 5.5 `pnpm run test:e2e` (Chromium Desktop) — 55/55
      passing (50 visual-parity + 5 interaction).

## Out of Scope (framework repo)

> No framework work required. All pages use existing framework
> classes and tokens.
