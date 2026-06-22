## ADDED Requirements

### Requirement: layout-primitives-render-vd-classes
Every primitive under `src/components/primitives/` MUST render a wrapper element with the matching framework utility class (`vd-box`, `vd-stack`, `vd-inline`, `vd-center`, `vd-frame`, `vd-cover`, `vd-switcher`).

#### Scenario: VdStack renders with vd-stack class
- **WHEN** the consumer wraps content in `<VdStack>`
- **THEN** the rendered element has the `vd-stack` class

#### Scenario: VdSwitcher picks inline above threshold
- **WHEN** `threshold="md"` and the viewport is wider than the breakpoint
- **THEN** the rendered element has the `vd-switcher-inline` variant

### Requirement: primitives-accept-gap-prop
`VdStack` and `VdInline` MUST accept a `gap` prop (`sm`, `md`, `lg`, `xl`) that maps to the framework's spacing utility classes.

#### Scenario: VdStack gap md applies vd-stack-md
- **WHEN** the consumer passes `gap="md"`
- **THEN** the rendered element includes the `vd-stack-md` class