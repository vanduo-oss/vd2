# vd-interactive-forms

P0-4 of the `full-capability-transfer` plan. Adds 11 Vd* components
covering form controls (input, select, checkbox group, radio group),
form interactions (datepicker, timepicker, rating, stepper,
autocomplete, transfer, tree), button groups, pagination, and 12
component pages. All components are Vue-native reimplementations
using existing framework CSS selectors. No framework repo work.

The JS-heavy components (datepicker, timepicker, autocomplete,
transfer, tree, rating) reimplements the corresponding framework JS
behavior in Vue 3 SFCs. The plan's "Reimplement framework JS in Vue"
decision is honored: vd2 does not load `window.Vanduo`.

See `proposal.md`, `design.md`, `tasks.md`, and
`specs/interactive-forms/spec.md`.
