# Design: vd-interactive-forms

## Class-by-class migration table

| Vd* component | Framework classes used | SFC structure |
|---|---|---|
| `VdInput` | `.vd-input`, `.vd-input-{sm/lg}`, `.vd-input-{error/success}` | Single `<input>` with size/variant classes; emits `update:modelValue` on input |
| `VdSelect` | `.vd-input` (native select adopts the same skin) | Native `<select>` with options |
| `VdCheckboxGroup` | `.vd-form-check-group`, `.vd-form-check-group-inline`, `.vd-form-check`, `.vd-form-check-{sm/md/lg}`, `.vd-form-check-inline`, `.vd-form-check-input`, `.vd-form-check-label` | Container + repeated check/label pairs |
| `VdRadioGroup` | `.vd-form-radio-group`, `.vd-form-radio-group-inline`, `.vd-form-radio`, `.vd-form-radio-{sm/md/lg}`, `.vd-form-radio-inline`, `.vd-form-radio-input`, `.vd-form-radio-label` | Container + repeated radio/label pairs |
| `VdButtonGroup` | `.vd-btn-group`, `.vd-btn-group-{sm/md/lg}`, `.vd-btn-group-vertical`, `.vd-btn-group-full` | Wrapper div with slot |
| `VdPagination` | `.vd-pagination`, `.vd-pagination-{sm/md/lg}`, `.vd-pagination-{left/center/right}`, `.vd-pagination-prev`, `.vd-pagination-next`, `.vd-pagination-link`, `.vd-pagination-item`, `.vd-pagination-ellipsis` | Nav with computed page window + ellipsis |
| `VdRating` | `.vd-rating`, `.vd-rating-{sm/md/lg}`, `.vd-rating-readonly`, `.vd-rating-star`, `.vd-rating-value` | Container + 5/7 star buttons; hover preview via reactive ref |
| `VdStepper` | `.vd-stepper`, `.vd-stepper-vertical`, `.vd-stepper-item`, `.vd-stepper-clickable`, `.vd-stepper-circle`, `.vd-stepper-content`, `.vd-stepper-label`, `.vd-stepper-description` | Ordered list; each item has a circle + content; clickable items have button circles |
| `VdDatepicker` | `.vd-datepicker`, `.vd-datepicker-popup`, `.vd-datepicker-header`, `.vd-datepicker-prev/next`, `.vd-datepicker-title`, `.vd-datepicker-month-btn`, `.vd-datepicker-year-btn`, `.vd-datepicker-weekdays`, `.vd-datepicker-grid`, `.vd-datepicker-row`, `.vd-datepicker-day`, `.vd-datepicker-months`, `.vd-datepicker-years` | Reimplementation of framework's datepicker.js. Computes calendar grid from `viewYear`/`viewMonth`; emits ISO `YYYY-MM-DD` |
| `VdTimepicker` | (reuses `.vd-datepicker-*` classes for the popup) | Hour and minute column layout; emits `HH:MM` |
| `VdAutocomplete` | `.vd-autocomplete-wrapper`, `.vd-input`, `.vd-dropdown-menu`, `.vd-dropdown-item`, `.vd-dropdown-item.is-active` | Input with reactive filtered list; keyboard nav (ArrowUp/Down/Enter/Escape) |
| `VdTransfer` | `.vd-transfer`, `.vd-transfer-panel`, `.vd-transfer-header`, `.vd-transfer-list`, `.vd-transfer-item`, `.vd-transfer-actions`, `.vd-transfer-btn`, `.vd-transfer-count` | Two-panel layout with center action buttons; v-model:source + v-model:target |
| `VdTree` | `.vd-tree`, `.vd-tree-lines`, `.vd-tree-node`, `.vd-tree-children`, `.vd-tree-node-content`, `.vd-tree-toggle`, `.vd-tree-toggle-placeholder`, `.vd-tree-checkbox`, `.vd-tree-label` | Recursive `<VdTree>` (self-reference) with optional checkbox propagation |

## Naming decisions

### VdTree is recursive (self-referenced in template)

`VdTree` uses `<VdTree :nodes="node.children" />` inside its own
template to render nested children. Vue 3 supports self-referencing
components when their name is set explicitly via the
`defineOptions({ name: 'VdTree' })` pattern, which is not needed
because Vue resolves the component by its file name in the SFC
context.

### VdDatepicker and VdTimepicker share the popup structure

The framework's CSS for datepicker and timepicker use the same
`.vd-datepicker-popup` class for the popup container. VdTimepicker
reuses this for visual consistency; the difference is internal
content (day grid vs hour/minute columns).

### VdTransfer uses v-model:source and v-model:target

Vue 3's multi-v-model pattern is used because transfer is a
two-list component. Each list emits `update:source` /
`update:target` independently. The parent owns both lists.

## Cascade ordering convention

No new CSS rules — all components are pure class consumers.
Cascade remains: framework first, `app.css` (Zone 1 + Zone 2) last.
No Zone 1 or Zone 2 additions in this bucket.

## Open questions (resolved during implementation)

- **Datepicker range validation:** the framework's `min`/`max`
  constraint uses `data-min`/`data-max` attributes on the wrapper.
  vd2's VdDatepicker accepts `min`/`max` as ISO date strings
  (`YYYY-MM-DD`) and applies them to the day grid (cells outside
  the range are disabled with `is-disabled`).
- **Transfer move-all confirmation:** the framework prompts
  before moving all. vd2's VdTransfer moves all without a prompt
  to keep the API simple; confirmations belong in the page.
- **Autocomplete keyboard nav:** the framework's autocomplete
  uses `aria-activedescendant` for screen readers. vd2's
  VdAutocomplete uses `aria-selected` on the active option (same
  semantic result, simpler to implement).
