# guides

## Purpose

vd2's long-form guide content — 17 documentation pages covering
onboarding, architecture, integration patterns, accessibility,
security, production deployment, and migration from other
frameworks. All pages are content-driven; no new Vd* components
or CSS rules are introduced.

## Requirements

### R1 — All 17 guide pages render at their routes and have visual-parity baselines

Each of the 17 new pages (Getting started, Your first layout,
Framework integration, ESM vs IIFE, Runtime architecture, Lifecycle
manager, Lazy loading, CSS variables, Theme customizer, Fibonacci
scale, Accessibility, Security, Production, Migration,
Troubleshooting, Utilities cheat sheet, Vanduo ecosystem) MUST:
- Build successfully (`pnpm run build`).
- Be reachable via `/guides/<slug>` (returns 200 from `pnpm run
  preview`).
- Have a visual-parity baseline in
  `tests/e2e/visual-parity.spec.ts-snapshots/`.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 77/77
(72 visual-parity + 5 interaction).

### R2 — No new Vd* components, no new framework CSS

This bucket introduces zero new Vd* components and zero new CSS
rules. The pages are content-driven: framework-supplied classes
(`vd-h1`, `vd-h2`, `vd-lead`, `vd-stack`, `vd-pad-2xl`, `vd-table`,
`vd-card`) and existing Vd* components (e.g. `VdCodeSnippet`,
`VdCard`).

Verification: `git -C vd2 diff --stat HEAD~1..HEAD -- src/components/Vd*.vue src/styles/app.css` shows no changes in this bucket (only the new pages, nav.ts, router.ts, and visual-parity spec).

### R3 — No regression in existing 60 routes

The original 60 visual-parity baselines (from the prior P0-1,
P0-2, P0-3, P0-4, P1-1, P1-2, and P1-3 buckets) MUST still pass.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 77/77,
including all 60 pre-existing routes.

## Content scope

The docs's guides are long (e.g. getting-started is 708 lines).
This change ports the *structure* and *key concepts* of each
guide to a Vue SFC. Full verbatim port of every word is out of
scope; the SFCs serve as a starting point and can be expanded
in follow-up changes.
