# feedback

## Purpose

vd2's feedback surface — `VdChip`, `VdSkeleton`, `VdPreloader` —
covers the framework's CSS feedback modules. All three are
Vue-native reimplementations that use the framework CSS bundle
(`framework/dist/vanduo.min.css`) as-is.

## Requirements

### R1 — New Vd* components exist and accept the documented prop API

`src/components/VdChip.vue`, `VdSkeleton.vue`, and `VdPreloader.vue`
MUST exist and accept the props documented in `proposal.md` §"What
Changes" → "New components".

Verification: `git -C vd2 grep -l "name: 'VdChip'\|name: 'VdSkeleton'\|name: 'VdPreloader'" src/components/` returns all 3 files.

### R2 — All 3 new pages render at their routes and have visual-parity baselines

Each of the 3 new pages (Chip, Skeleton, Preloader) MUST:
- Build successfully (`pnpm run build`).
- Be reachable via `/components/<name>` (returns 200 from
  `pnpm run preview`).
- Have a visual-parity baseline in
  `tests/e2e/visual-parity.spec.ts-snapshots/`.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 38/38
(33 visual-parity + 5 interaction).

### R3 — VdChip handles dismiss and click

`VdChip` MUST emit `dismiss` when the close button is clicked, and
`click` when the chip body is clicked (only if `clickable` is true).
The close button click MUST NOT propagate to the chip body.

Verification: `tests/unit/components/chip.spec.ts` covers both
branches.

### R4 — VdSkeleton handles shape, size, and lines

`VdSkeleton` MUST render the correct shape (text, circle, card,
button) with the correct size class. The `lines` prop MUST emit
that many text skeletons (with the last one shortened via
`.vd-skeleton-text-short`).

Verification: `tests/unit/components/skeleton.spec.ts` covers each
shape and the multi-line case.

### R5 — VdPreloader renders container, spinner, and text

`VdPreloader` MUST render `.vd-preloader-container` with the
matching variant/size/theme classes, the spinner child, and an
optional `.vd-preloader-text` span when `text` is set.

Verification: `tests/unit/components/preloader.spec.ts` covers the
structure, variant, text, and theme branches.

### R6 — No regression in existing 30 routes

The original 30 visual-parity baselines (from the prior P0-1 and
P0-2 buckets) MUST still pass.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 38/38,
including all 30 pre-existing routes.
