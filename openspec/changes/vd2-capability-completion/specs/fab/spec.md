# Floating Action Button

## Purpose

FABs sit above page content and surface a primary action. Pure CSS — drop
`vd-fab` on a `<button>` and pick a position / color / size modifier.

## Requirements

### Requirement: Base FAB class

The system SHALL style `.vd-fab` as a round, elevated, fixed-position
button with the default diameter of 3.5 rem (56 px).

#### Scenario: Default FAB renders
- **WHEN** a `<button class="vd-fab">` is rendered
- **THEN** it appears as a round button, fixed in the bottom-right corner of
  the viewport

### Requirement: Color variants

`.vd-fab-primary`, `.vd-fab-secondary`, `.vd-fab-success`,
`.vd-fab-danger`, and `.vd-fab-warning` SHALL each apply the corresponding
background color.

#### Scenario: Color variants
- **WHEN** a FAB has `class="vd-fab vd-fab-success"`
- **THEN** its background is the success color from the theme

### Requirement: Size variants

`.vd-fab-extended` SHALL produce a wider pill-shaped variant; `.vd-fab-mini`
SHALL produce a 2.5 rem (40 px) variant.

#### Scenario: Extended variant
- **WHEN** a FAB has `class="vd-fab vd-fab-extended"`
- **THEN** it renders as a pill shape with icon + label

#### Scenario: Mini variant
- **WHEN** a FAB has `class="vd-fab vd-fab-mini"`
- **THEN** its diameter is 2.5 rem

### Requirement: Position variants

`.vd-fab-top-left`, `.vd-fab-top-right`, `.vd-fab-bottom-left`, and
`.vd-fab-bottom-right` SHALL position the FAB at the corresponding viewport
corner (default: bottom-right).

#### Scenario: Position override
- **WHEN** a FAB has `class="vd-fab vd-fab-top-left"`
- **THEN** it is fixed to the top-left viewport corner with offset

### Requirement: Glass variant

`.vd-fab-glass` SHALL apply glass styling using `--vd-glass-*` tokens.

#### Scenario: Glass styling
- **WHEN** a FAB has `class="vd-fab vd-fab-glass"`
- **THEN** its background is glass-styled (backdrop-filter blur +
  translucent fill)

### Requirement: Accessibility

A FAB without visible text MUST have `aria-label`. As a real `<button>`
element, focus and keyboard activation work natively.

## Out of Scope

- Multiple primary FABs per page (one primary FAB is the recommended pattern).
- Anchored positioning (FAB is always fixed to the viewport).