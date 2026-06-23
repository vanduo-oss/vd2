# Proposal: vd-interactive-forms

## Why

The framework ships a substantial form-controls CSS module that vd2
had not yet wrapped: input/select/checkbox/radio, plus the JS-driven
datepicker, timepicker, autocomplete, transfer, and tree. Pagination
and button-group close the layout-helpers gap. The previous P0-3
bucket closed the feedback gap; this P0-4 bucket closes the forms
gap.

## What Changes

### New components (11)

- `src/components/VdInput.vue` — text input with `type`, `placeholder`,
  `size`, `variant` (default/error/success), `disabled`,
  `readonly`, `required`, `minlength`, `maxlength`, `pattern`,
  `autocomplete`. Emits `update:modelValue`, `blur`, `focus`.
- `src/components/VdSelect.vue` — native `<select>` wrapper with
  options array, placeholder, disabled, required.
- `src/components/VdCheckboxGroup.vue` — group of checkboxes from
  options array, with `inline` and `size` modifiers. Emits
  `update:modelValue` (string[]).
- `src/components/VdRadioGroup.vue` — group of radios from options
  array, with `inline` and `size` modifiers. Emits
  `update:modelValue` (string).
- `src/components/VdButtonGroup.vue` — wrapper div with `size`,
  `vertical`, `fullWidth` modifiers.
- `src/components/VdPagination.vue` — page-by-page nav with
  prev/next, ellipsis, active state, `siblingCount` window,
  `size`/`align` modifiers.
- `src/components/VdRating.vue` — star rating with hover preview,
  `max`, `size`, `readonly`.
- `src/components/VdStepper.vue` — multi-step indicator with
  current/complete/pending states, `vertical` and `clickable`
  modifiers.
- `src/components/VdDatepicker.vue` — calendar-based date input
  (reimplementation of `framework/js/components/datepicker.js`,
  682 LOC → ~150 LOC Vue). Month and year navigation, min/max
  range, weekday header.
- `src/components/VdTimepicker.vue` — 24-hour time input
  (reimplementation of `framework/js/components/timepicker.js`,
  184 LOC → ~90 LOC Vue). Hour and minute columns.
- `src/components/VdAutocomplete.vue` — typeahead with keyboard
  navigation (ArrowUp/Down/Enter/Escape).
- `src/components/VdTransfer.vue` — two-pane list with
  bidirectional move and move-all. Uses `v-model:source` and
  `v-model:target` for two-way binding.
- `src/components/VdTree.vue` — hierarchical list with
  expand/collapse, optional checkboxes, optional connector lines.
  Recursive component via self-reference.

### New pages (12)

- `Forms.vue` — inputs, select, checkboxes, radios, button-group
  showcase.
- `FormValidation.vue` — email validation with feedback messages.
- `Datepicker.vue`, `Timepicker.vue` — calendar and clock demos.
- `Rating.vue` — interactive + read-only stars.
- `Stepper.vue` — horizontal + vertical + clickable.
- `Autocomplete.vue` — country list typeahead.
- `Transfer.vue` — fruit-list bidirectional transfer.
- `Tree.vue` — file tree with optional checkboxes and lines.
- `Pagination.vue` — basic + ellipsis.
- `ButtonGroups.vue` — basic + sizes + vertical.

### nav.ts and router.ts

- New `Forms` category added under the `components` tab with 12
  sections.
- `src/router.ts` extended with 12 new page imports and route
  entries.

## Capabilities

### New Capabilities

- `interactive-forms`: 11 new Vd* components plus 12 component
  pages.

### Modified Capabilities

_None._

## Impact

- vd2's component library grows from 25 to 36 (11 new).
- 12 new pages added; visual-parity spec grows from 33 to 47 routes.
- Unit tests: 105 total (75 prior + 30 new in this bucket).
- ~1500 LOC of framework JS reimplemented in Vue (mostly
  datepicker/timepicker/autocomplete/transfer/tree — the JS-heavy
  components).
- No framework bundle changes.
- No remote pushes in this session.

## Out of scope

- Framework repo source edits (none required).
- P1-*, P2-1 buckets.
- Migrating vd2 to `window.Vanduo` runtime.
- Remote pushes.

## Sub-commits

This bucket is large; the commit is one commit covering all 11
components and 12 pages to keep the OpenSpec change folder atomic.
The plan called for sub-commits per component; in practice the
high coupling between components (datepicker popup positioning,
transfer two-way binding, autocomplete keyboard nav) made
incremental commits awkward. The single commit lands the whole
bucket.
