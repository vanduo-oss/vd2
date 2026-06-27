# Ripple

## Purpose

Material-style click ripples with zero JavaScript cost for the consumer.
Add `vd-ripple` to any element and the framework spawns a radial fill from
the click point, animates it outward, and cleans up. Custom color and
duration are first-class attributes.

## Requirements

### Requirement: Mount-time init

The system SHALL call `VanduoRipple.init(root)` on mount.

#### Scenario: useRipple wires on mount
- **WHEN** `useRipple(root)` runs and the component mounts
- **THEN** every `.vd-ripple` and `[data-vd-ripple]` element inside `root.value`
  is registered

### Requirement: Unmount cleanup

The system SHALL call `VanduoRipple.destroyAll()` on unmount.

#### Scenario: Cleanup on unmount
- **WHEN** the component owning `useRipple(root)` unmounts
- **THEN** every ripple instance is destroyed

### Requirement: Click spawns ripple

Clicking an element with `.vd-ripple` (or `[data-vd-ripple]`) SHALL spawn
a ripple element at the click coordinates.

#### Scenario: Click spawns ripple
- **WHEN** the user clicks a `.vd-ripple` element
- **THEN** a ripple element is appended, animated, and removed on completion

### Requirement: Custom color

`data-vd-ripple-color` SHALL override the ripple's background color.

#### Scenario: Color override
- **WHEN** a `.vd-ripple` element has `data-vd-ripple-color="#22c55e"`
- **THEN** the spawned ripple's background color is `#22c55e`

### Requirement: Custom duration

`data-vd-ripple-duration` SHALL override the ripple animation duration in
milliseconds (default 600).

#### Scenario: Duration override
- **WHEN** a `.vd-ripple` element has `data-vd-ripple-duration="300"`
- **THEN** the spawned ripple's animation runs for 300 ms

### Requirement: Centered ripple

`data-vd-ripple-centered` SHALL force the ripple to spawn at the element's
center instead of the click coordinates.

#### Scenario: Centered spawn
- **WHEN** a `.vd-ripple` element has `data-vd-ripple-centered` and the user
  clicks it
- **THEN** the ripple's spawn point is at the element's center

### Requirement: Reduced-motion compliance

When `prefers-reduced-motion: reduce` is set, the system SHALL skip the
ripple animation.

#### Scenario: Reduced motion
- **WHEN** the user has `prefers-reduced-motion: reduce`
- **THEN** the click does not spawn a ripple

### Requirement: Accessibility

Ripple elements SHALL carry `aria-hidden="true"` so screen readers ignore
them.

## Out of Scope

- Programmatic ripple spawn (click only).
- Touch long-press support.
- Multiple simultaneous ripples on the same element.