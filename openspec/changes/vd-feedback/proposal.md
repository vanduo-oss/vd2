# Proposal: vd-feedback

## Why

The framework ships three feedback-state CSS modules that vd2 had not
yet wrapped: chip (size, variant, dismissible, outline, clickable,
avatar), skeleton (text, circle, card, button, line, size variants),
and preloader (variant, size, theme, text). The previous P0-2 bucket
(`vd-data-display`) closed the data-display gap; this P0-3 bucket
closes the feedback gap.

## What Changes

### New components

- `src/components/VdChip.vue` — props: `variant` (primary/secondary/
  success/warning/error/info), `size` (sm/md/lg), `outline?`,
  `dismissible?`, `avatar?`, `clickable?`. Emits `dismiss` and
  `click`. Renders `.vd-chip` with the matching modifier classes;
  optional avatar image; optional `.vd-chip-close` dismiss button.
- `src/components/VdSkeleton.vue` — props: `shape` (text/circle/
  rect/card/button), `size` (sm/md/lg/xl), `width?`, `lines?`.
  Renders `.vd-skeleton` with the matching shape/size class; for
  `lines > 1` emits that many text skeletons (last one short).
- `src/components/VdPreloader.vue` — props: `variant`
  (primary/secondary/success/warning/error/info), `size`
  (sm/md/lg/xl), `theme` (light/dark), `text?`. Renders
  `.vd-preloader-container` with the matching variant/size/theme
  classes and an animated `.vd-preloader-spinner`.

### New pages

- `src/pages/components/Chip.vue` — variants, sizes, outline,
  dismissible, usage.
- `src/pages/components/Skeleton.vue` — text, multi-line, circle,
  card, button, usage.
- `src/pages/components/Preloader.vue` — variants, sizes, with text,
  usage.

### nav.ts and router.ts

- `Feedback` category extended with 3 new sections: Chip, Skeleton,
  Preloader.
- `src/router.ts` extended with 3 new page imports and route
  entries.

## Capabilities

### New Capabilities

- `feedback`: 3 new Vd* components plus 3 component pages.

### Modified Capabilities

_None._

## Impact

- vd2's component library grows from 22 to 25 (3 new).
- 3 new pages added; visual-parity spec grows from 30 to 33 routes.
- Unit tests: 75 total (63 prior + 12 new in this bucket).
- No framework bundle changes — all 3 new components use existing
  framework CSS selectors.
- No remote pushes in this session.

## Out of scope

- Framework repo source edits (none required).
- P0-4 (interactive-forms), P1-*, P2-1 buckets.
- Migrating vd2 to `window.Vanduo` runtime.
- Remote pushes.
