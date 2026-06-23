# Tasks

## 1. New Vd* components

- [x] 1.1 `src/components/VdInput.vue` (text input with
      size/variant/disabled/required/pattern/etc).
- [x] 1.2 `src/components/VdSelect.vue` (native select wrapper).
- [x] 1.3 `src/components/VdCheckboxGroup.vue` (checkbox group with
      inline/size).
- [x] 1.4 `src/components/VdRadioGroup.vue` (radio group with
      inline/size).
- [x] 1.5 `src/components/VdButtonGroup.vue` (button group with
      vertical/fullWidth).
- [x] 1.6 `src/components/VdPagination.vue` (pagination with
      ellipsis, sibling window, alignment).
- [x] 1.7 `src/components/VdRating.vue` (star rating with hover
      preview, readonly).
- [x] 1.8 `src/components/VdStepper.vue` (stepper with
      vertical/clickable).
- [x] 1.9 `src/components/VdDatepicker.vue` (calendar datepicker,
      reimplementation of framework's datepicker.js).
- [x] 1.10 `src/components/VdTimepicker.vue` (24-hour timepicker,
      reimplementation of framework's timepicker.js).
- [x] 1.11 `src/components/VdAutocomplete.vue` (typeahead with
      keyboard nav).
- [x] 1.12 `src/components/VdTransfer.vue` (two-pane transfer
      list with v-model:source and v-model:target).
- [x] 1.13 `src/components/VdTree.vue` (recursive tree with
      checkboxes and connector lines).

## 2. New pages

- [x] 2.1 `src/pages/components/Forms.vue` — input/select/checkbox/
      radio/button-group showcase.
- [x] 2.2 `src/pages/components/FormValidation.vue` — email
      validation with feedback.
- [x] 2.3 `src/pages/components/Datepicker.vue`.
- [x] 2.4 `src/pages/components/Timepicker.vue`.
- [x] 2.5 `src/pages/components/Rating.vue`.
- [x] 2.6 `src/pages/components/Stepper.vue`.
- [x] 2.7 `src/pages/components/Autocomplete.vue`.
- [x] 2.8 `src/pages/components/Transfer.vue`.
- [x] 2.9 `src/pages/components/Tree.vue`.
- [x] 2.10 `src/pages/components/Pagination.vue`.
- [x] 2.11 `src/pages/components/ButtonGroups.vue`.

## 3. nav.ts and router.ts

- [x] 3.1 Add `Forms` category to `src/nav.ts` with 12 sections.
- [x] 3.2 Add 12 page imports and 12 route entries in
      `src/router.ts`.

## 4. Tests

- [x] 4.1 `tests/unit/components/input.spec.ts` (4 tests).
- [x] 4.2 `tests/unit/components/select.spec.ts` (4 tests).
- [x] 4.3 `tests/unit/components/checkbox-group.spec.ts` (4
      tests).
- [x] 4.4 `tests/unit/components/radio-group.spec.ts` (3 tests).
- [x] 4.5 `tests/unit/components/button-group.spec.ts` (3 tests).
- [x] 4.6 `tests/unit/components/pagination.spec.ts` (4 tests).
- [x] 4.7 `tests/unit/components/rating.spec.ts` (4 tests).
- [x] 4.8 `tests/unit/components/stepper.spec.ts` (4 tests).
- [x] 4.9 Extend `tests/e2e/visual-parity.spec.ts` with 14 new
      routes. Refresh baselines.

## 5. OpenSpec change folder

- [x] 5.1 `README.md` — summary, no framework work needed.
- [x] 5.2 `proposal.md` — Why / What Changes / Capabilities.
- [x] 5.3 `design.md` — class-by-class migration table, naming
      decisions, cascade convention.
- [x] 5.4 `tasks.md` — this file.
- [x] 5.5 `specs/interactive-forms/spec.md` — R1–R4 acceptance.

## 6. Validation

- [x] 6.1 `pnpm run build` clean.
- [x] 6.2 `pnpm run lint` clean.
- [x] 6.3 `pnpm run typecheck` clean.
- [x] 6.4 `pnpm run test` (unit) — 105/105 passing.
- [x] 6.5 `pnpm run test:e2e` (Chromium Desktop) — 49/49 passing
      (44 visual-parity + 5 interaction).

## Out of Scope (framework repo)

> No framework work required. All 11 new components use existing
> framework CSS selectors. The 6 JS-heavy components (datepicker,
> timepicker, autocomplete, transfer, tree, rating) reimplement the
> framework's JS behavior in Vue 3 SFCs — no `window.Vanduo`
> coupling.
