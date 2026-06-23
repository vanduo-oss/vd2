# Tasks

## 1. New pages

- [x] 1.1 `src/pages/effects/Glass.vue` — 4 glass variants.
- [x] 1.2 `src/pages/effects/Morph.vue` — 3 morph variants.
- [x] 1.3 `src/pages/effects/Parallax.vue` — single parallax
      demo.

## 2. nav.ts and router.ts

- [x] 2.1 Add `Effects` category to `src/nav.ts` (3 sections).
- [x] 2.2 Add 3 page imports and 3 route entries in
      `src/router.ts`.

## 3. Tests

- [x] 3.1 Extend `tests/e2e/visual-parity.spec.ts` with 3 new
      routes. Refresh baselines.

## 4. OpenSpec change folder

- [x] 4.1 `README.md` — summary.
- [x] 4.2 `proposal.md` — Why / What Changes / Capabilities.
- [x] 4.3 `design.md` — page-by-page layout, cross-cutting
      decisions, cascade convention.
- [x] 4.4 `tasks.md` — this file.
- [x] 4.5 `specs/effects/spec.md` — R1 acceptance.

## 5. Validation

- [x] 5.1 `pnpm run build` clean.
- [x] 5.2 `pnpm run lint` clean.
- [x] 5.3 `pnpm run typecheck` clean.
- [x] 5.4 `pnpm run test` (unit) — 105/105 passing (no new unit
      tests in this bucket).
- [x] 5.5 `pnpm run test:e2e` (Chromium Desktop) — 58/58
      passing (53 visual-parity + 5 interaction).

## Out of Scope (framework repo)

> No framework work required. All pages use existing framework
> classes (`vd-glass*`, `vd-morph*`, `vd-parallax*`).
