# core-foundation

## Purpose

vd2's core-foundation content — 6 explanation pages covering the
framework's design-system tokens (color palette, typography, icons,
golden ratio, grid system, shadows & glow). The pages are
long-form, content-driven, and use only existing framework classes
and tokens.

## Requirements

### R1 — All 6 core pages render at their routes and have visual-parity baselines

Each of the 6 new pages (Color palette, Typography, Icons, Golden
ratio, Grid system, Shadows & glow) MUST:
- Build successfully (`pnpm run build`).
- Be reachable via `/core/<topic>` (returns 200 from `pnpm run
  preview`).
- Have a visual-parity baseline in
  `tests/e2e/visual-parity.spec.ts-snapshots/`.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 55/55
(50 visual-parity + 5 interaction).

### R2 — No new Vd* components, no new framework CSS

This bucket introduces zero new Vd* components and zero new CSS
rules. The pages are content-driven: framework-supplied classes
(`vd-table`, `vd-row`, `vd-col-N`, `vd-card`, etc.) and inline
styles for one-off demonstration values.

Verification: `git -C vd2 diff --stat` shows no changes under
`src/components/Vd*.vue` and no changes to `src/styles/app.css`
(this bucket only).

### R3 — No regression in existing 47 routes

The original 47 visual-parity baselines (from the prior P0-1,
P0-2, P0-3, and P0-4 buckets) MUST still pass.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 55/55,
including all 47 pre-existing routes.
