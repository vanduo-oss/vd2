## ADDED Requirements

### Requirement: button-component
`VdButton` MUST render a `<button>` element with framework `.vd-btn` classes and accept a `variant` prop selecting `primary`, `secondary`, `ghost`, or `danger`.

#### Scenario: variant primary applies vd-btn-primary
- **WHEN** the consumer passes `variant="primary"`
- **THEN** the rendered button includes the `vd-btn-primary` class

#### Scenario: click event fires
- **WHEN** the consumer clicks the button and `disabled` is false
- **THEN** a `click` event is emitted with the original event payload

### Requirement: modal-component
`VdModal` MUST teleport to `body`, render a backdrop, expose `v-model:open` two-way binding, and trap focus while open.

#### Scenario: opening sets is-open class
- **WHEN** the consumer sets the v-model to true
- **THEN** the modal renders with `vd-modal-open` and `role="dialog"`

#### Scenario: escape closes the modal
- **WHEN** the modal is open and the user presses Escape
- **THEN** the modal emits `update:open` with `false`

### Requirement: toast-imperative-api
`useToast()` MUST expose `show(message, opts)` returning a dismiss handle and add the toast to a queue rendered by `VdToastContainer`.

#### Scenario: show adds toast to queue
- **WHEN** `useToast().show('Saved')` is called
- **THEN** a toast appears in the container and auto-dismisses after the configured duration

### Requirement: tabs-component
`VdTabs` MUST accept a `tabs` prop array of `{ id, label }` and a `v-model` for the active tab id, emitting `update:modelValue` on change.

#### Scenario: clicking a tab updates v-model
- **WHEN** the consumer clicks the second tab
- **THEN** the v-model value becomes the second tab's id

### Requirement: accordion-component
`VdAccordion` MUST render each item as a header + collapsible content section with `aria-expanded` reflecting the open state.

#### Scenario: exclusive accordion closes others
- **WHEN** `exclusive` is true and the user opens a second item
- **THEN** the previously-open item collapses and only the new item is expanded

### Requirement: components-compose-vd-classes-only
Every component under `src/components/` MUST NOT contain a `<style>` block; all visual classes MUST come from the framework CSS bundle.

#### Scenario: lint rule blocks scoped styles
- **WHEN** a contributor adds a `<style>` block to a component
- **THEN** the build fails or the lint rule fires a warning