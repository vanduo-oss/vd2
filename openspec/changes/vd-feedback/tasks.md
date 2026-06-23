# Tasks

## 1. New Vd* components

- [x] 1.1 Add `src/components/VdChip.vue` (variant, size, outline,
      dismissible, avatar, clickable, dismiss event, click event).
- [x] 1.2 Add `src/components/VdSkeleton.vue` (shape, size, width,
      lines).
- [x] 1.3 Add `src/components/VdPreloader.vue` (variant, size, theme,
      text).

## 2. New pages

- [x] 2.1 `src/pages/components/Chip.vue` — variants, sizes,
      outline, dismissible, usage.
- [x] 2.2 `src/pages/components/Skeleton.vue` — text, multi-line,
      circle, card, button, usage.
- [x] 2.3 `src/pages/components/Preloader.vue` — variants, sizes,
      with text, usage.

## 3. nav.ts and router.ts

- [x] 3.1 Extend `Feedback` category in `src/nav.ts` with 3
      sections (Chip, Skeleton, Preloader).
- [x] 3.2 Add 3 page imports and 3 route entries in
      `src/router.ts`.

## 4. Tests

- [x] 4.1 Add `tests/unit/components/chip.spec.ts` (4 tests).
- [x] 4.2 Add `tests/unit/components/skeleton.spec.ts` (4 tests).
- [x] 4.3 Add `tests/unit/components/preloader.spec.ts` (4 tests).
- [x] 4.4 Extend `tests/e2e/visual-parity.spec.ts` with 3 new
      routes. Refresh baselines.

## 5. OpenSpec change folder

- [x] 5.1 `README.md` — summary.
- [x] 5.2 `proposal.md` — Why / What Changes / Capabilities.
- [x] 5.3 `design.md` — class-by-class migration table, naming
      decisions, cascade convention.
- [x] 5.4 `tasks.md` — this file.
- [x] 5.5 `specs/feedback/spec.md` — R1–R4 acceptance.

## 6. Validation

- [x] 6.1 `pnpm run build` clean.
- [x] 6.2 `pnpm run lint` clean.
- [x] 6.3 `pnpm run typecheck` clean.
- [x] 6.4 `pnpm run test` (unit) — 75/75 passing.
- [x] 6.5 `pnpm run test:e2e` (Chromium Desktop) — 38/38 passing
      (33 visual-parity + 5 interaction).

## Out of Scope (framework repo)

> No framework work required. All three new components use existing
> framework CSS selectors.
