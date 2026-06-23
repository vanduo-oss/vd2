# interactive-forms

## Purpose

vd2's interactive-forms surface — `VdInput`, `VdSelect`,
`VdCheckboxGroup`, `VdRadioGroup`, `VdButtonGroup`, `VdPagination`,
`VdRating`, `VdStepper`, `VdDatepicker`, `VdTimepicker`,
`VdAutocomplete`, `VdTransfer`, `VdTree` — covers the framework's
CSS form modules. All components are Vue-native reimplementations
that use the framework CSS bundle (`framework/dist/vanduo.min.css`)
as-is. The 6 JS-heavy components (datepicker, timepicker,
autocomplete, transfer, tree, rating) reimplement the framework's
JS behavior in Vue 3 SFCs.

## Requirements

### R1 — All 11 new Vd* components exist and accept the documented prop API

`src/components/{VdInput,VdSelect,VdCheckboxGroup,VdRadioGroup,
VdButtonGroup,VdPagination,VdRating,VdStepper,VdDatepicker,
VdTimepicker,VdAutocomplete,VdTransfer,VdTree}.vue` MUST exist and
accept the props documented in `proposal.md` §"What Changes" →
"New components".

Verification: `git -C vd2 grep -l "name: 'Vd\(Input\|Select\|CheckboxGroup\|RadioGroup\|ButtonGroup\|Pagination\|Rating\|Stepper\|Datepicker\|Timepicker\|Autocomplete\|Transfer\|Tree\)'" src/components/` returns all 13 files.

### R2 — All 12 new pages render at their routes and have visual-parity baselines

Each of the 12 new pages (Forms, FormValidation, Datepicker,
Timepicker, Rating, Stepper, Autocomplete, Transfer, Tree,
Pagination, ButtonGroups) MUST:
- Build successfully (`pnpm run build`).
- Be reachable via `/components/<name>` (returns 200 from
  `pnpm run preview`).
- Have a visual-parity baseline in
  `tests/e2e/visual-parity.spec.ts-snapshots/`.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 49/49
(44 visual-parity + 5 interaction).

### R3 — VdDatepicker emits ISO YYYY-MM-DD

`VdDatepicker` MUST accept an ISO `YYYY-MM-DD` string as modelValue
and emit ISO `YYYY-MM-DD` strings on day selection. Month and year
navigation MUST work via the prev/next buttons.

Verification: `src/pages/components/Datepicker.vue` demonstrates this
end-to-end; the test passes.

### R4 — VdTransfer uses v-model:source and v-model:target

`VdTransfer` MUST use Vue 3's multi-v-model pattern with two named
emits (`update:source` and `update:target`). Selecting items and
clicking the move buttons MUST update the source/target lists
correctly.

Verification: `src/pages/components/Transfer.vue` demonstrates this
end-to-end; the test passes.

### R5 — VdTree is recursive

`VdTree` MUST be able to render nested children via self-reference
in the template. Optional `checkbox` and `lines` props MUST apply
the matching framework classes.

Verification: `src/pages/components/Tree.vue` renders a 3-level
nested tree; the test passes.

### R6 — No regression in existing 33 routes

The original 33 visual-parity baselines (from the prior P0-1, P0-2,
and P0-3 buckets) MUST still pass.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 49/49,
including all 33 pre-existing routes.
