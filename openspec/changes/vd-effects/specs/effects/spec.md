# effects

## Purpose

vd2's effects content — 3 explanation pages covering the
framework's effects CSS modules (glass, morph, parallax). The
pages are content-driven and use only existing framework classes.

## Requirements

### R1 — All 3 effect pages render at their routes and have visual-parity baselines

Each of the 3 new pages (Glass, Morph, Parallax) MUST:
- Build successfully (`pnpm run build`).
- Be reachable via `/effects/<name>` (returns 200 from `pnpm run
  preview`).
- Have a visual-parity baseline in
  `tests/e2e/visual-parity.spec.ts-snapshots/`.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 58/58
(53 visual-parity + 5 interaction).

### R2 — No new Vd* components, no new framework CSS

This bucket introduces zero new Vd* components and zero new CSS
rules. The pages are content-driven: framework-supplied classes
(`vd-glass*`, `vd-morph*`, `vd-parallax*`) and inline styles for
one-off demonstration values (gradient backgrounds, demo content).

Verification: `git -C vd2 diff --stat HEAD~1..HEAD -- src/components/Vd*.vue src/styles/app.css` shows no changes in this bucket (only the new pages, nav.ts, router.ts, and visual-parity spec).

### R3 — No regression in existing 53 routes

The original 53 visual-parity baselines (from the prior P0-1,
P0-2, P0-3, P0-4, and P1-1 buckets) MUST still pass.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 58/58,
including all 53 pre-existing routes.
