# Tasks

## 1. New pages

- [x] 1.1 `src/pages/components/ThemeSwitcher.vue` — embedded
      switcher demo.
- [x] 1.2 `src/pages/components/ThemeCustomizer.vue` — open/close
      customizer demo.

## 2. nav.ts and router.ts

- [x] 2.1 Add `Theme` category to `src/nav.ts` (2 sections).
- [x] 2.2 Add 2 page imports and 2 route entries in
      `src/router.ts`.

## 3. Tests

- [x] 3.1 Extend `tests/e2e/visual-parity.spec.ts` with 2 new
      routes. Refresh baselines.

## 4. OpenSpec change folder

- [x] 4.1 `README.md` — summary.
- [x] 4.2 `proposal.md` — Why / What Changes / Capabilities.
- [x] 4.3 `design.md` — page-by-page layout, cross-cutting
      decisions, cascade convention.
- [x] 4.4 `tasks.md` — this file.
- [x] 4.5 `specs/theme-customizer/spec.md` — R1 acceptance.

## 5. Validation

- [x] 5.1 `pnpm run build` clean.
- [x] 5.2 `pnpm run lint` clean.
- [x] 5.3 `pnpm run typecheck` clean.
- [x] 5.4 `pnpm run test` (unit) — 105/105 passing (no new unit
      tests in this bucket).
- [x] 5.5 `pnpm run test:e2e` (Chromium Desktop) — 60/60
      passing (55 visual-parity + 5 interaction).

## Out of Scope (framework repo)

> No framework work required. The pages use the existing
> `VdThemeSwitcher` and `VdThemeCustomizer` overlay components.
