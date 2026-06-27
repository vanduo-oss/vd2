# Dropdown

## Purpose

Toggleable contextual overlay for displaying lists of links, actions, or
custom content. Supports directional placement, glass styling, split buttons,
and dark mode. Backed by the framework's `VanduoDropdown` global; vd2 wraps
it via `useDropdown`.

## Requirements

### Requirement: Mount-time init

The system SHALL call `VanduoDropdown.init(root)` on mount for the root
element passed to `useDropdown(root)`.

#### Scenario: useDropdown wires on mount
- **WHEN** `useDropdown(root)` is called inside a component's `setup()` and the
  component is mounted
- **THEN** every `.vd-dropdown` element inside `root.value` is registered
  with the framework's dropdown component

### Requirement: Unmount cleanup

The system SHALL call `VanduoDropdown.destroyAll()` on unmount so Vue's
patch-driven DOM updates do not leave stale listeners behind.

#### Scenario: Cleanup on unmount
- **WHEN** the component owning `useDropdown(root)` unmounts
- **THEN** every dropdown instance created during the mount cycle is destroyed

### Requirement: Click toggle

A `.vd-dropdown-toggle` inside a `.vd-dropdown` SHALL toggle the menu
visibility on click.

#### Scenario: Click opens
- **WHEN** the user clicks a `.vd-dropdown-toggle` and the menu is hidden
- **THEN** the menu receives `.is-open` and `aria-expanded="true"`

#### Scenario: Click closes (toggle)
- **WHEN** the user clicks a `.vd-dropdown-toggle` and the menu is open
- **THEN** the menu's `.is-open` is removed and `aria-expanded="false"`

### Requirement: Outside-click dismissal

The system SHALL close any open dropdown when the user clicks outside both
the toggle and the menu.

#### Scenario: Outside click closes
- **WHEN** an open dropdown is on screen and the user clicks an unrelated
  element
- **THEN** that dropdown closes

### Requirement: Keyboard navigation

While a dropdown is open, the system SHALL respond to <kbd>↑</kbd>/<kbd>↓</kbd>
to move focus between items, <kbd>Home</kbd>/<kbd>End</kbd> to jump to first/
last, and <kbd>Escape</kbd> to close.

#### Scenario: Arrow down advances
- **WHEN** the dropdown is open and the user presses <kbd>ArrowDown</kbd>
- **THEN** focus moves to the next focusable `.vd-dropdown-item` (wrapping)

#### Scenario: Escape closes
- **WHEN** the dropdown is open and the user presses <kbd>Escape</kbd>
- **THEN** the dropdown closes and focus returns to the toggle

### Requirement: Typeahead

When the user types a printable character while a dropdown is open, the
system SHALL jump focus to the first item whose label starts with the
typed substring. The substring buffer SHALL reset after 500 ms of
inactivity.

#### Scenario: Typeahead jump
- **WHEN** the dropdown is open and the user types `"d"`
- **THEN** focus moves to the first item whose trimmed text starts with `"d"`
  (case-insensitive)

### Requirement: ARIA attributes

The system SHALL set `aria-haspopup="true"` and `aria-expanded` on the
toggle, and `role="menu"` and `aria-hidden` on the menu.

#### Scenario: Initial ARIA
- **WHEN** a dropdown is initialized
- **THEN** its toggle carries `aria-haspopup="true"` and `aria-expanded="false"`,
  and its menu carries `role="menu"` and `aria-hidden="true"`

## Out of Scope

- Custom positioning engines (the framework CSS owns placement).
- Server-side rendering of open state (dropdowns are interactive only).
- Nested dropdowns (menus inside menus).