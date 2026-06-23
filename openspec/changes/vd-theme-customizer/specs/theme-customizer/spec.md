# theme-customizer

## Purpose

vd2's theme-customizer content — 2 documentation pages for the
existing `VdThemeSwitcher` and `VdThemeCustomizer` overlay
components.

## Requirements

### R1 — All 2 theme pages render at their routes and have visual-parity baselines

Each of the 2 new pages (Theme switcher, Theme customizer) MUST:
- Build successfully (`pnpm run build`).
- Be reachable via `/components/<name>` (returns 200 from
  `pnpm run preview`).
- Have a visual-parity baseline in
  `tests/e2e/visual-parity.spec.ts-snapshots/`.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 60/60
(55 visual-parity + 5 interaction).

### R2 — Pages use existing overlay components

Both pages MUST use the existing `VdThemeSwitcher` and
`VdThemeCustomizer` from `src/overlays/`. No new Vd* components.

Verification: `git -C vd2 grep "import VdThemeSwitcher\|import VdThemeCustomizer" src/pages/components/Theme*.vue` matches both.

### R3 — No regression in existing 56 routes

The original 56 visual-parity baselines (from the prior P0-1,
P0-2, P0-3, P0-4, P1-1, and P1-2 buckets) MUST still pass.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 60/60,
including all 56 pre-existing routes.
