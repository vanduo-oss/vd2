# Popover

## Purpose

Multi-trigger popover primitive (click | hover | focus) with auto-placement
flip on viewport overflow. Backed by framework `1.6.0` `VanduoPopover`;
vd2 wraps it via `usePopover`.

## Requirements

### Requirement: Mount-time init

The system SHALL call `VanduoPopover.init(root)` on mount.

#### Scenario: usePopover wires on mount
- **WHEN** `usePopover(root)` runs and the component mounts
- **THEN** every `.vd-popover-trigger` inside `root.value` is registered

### Requirement: Unmount cleanup

The system SHALL call `VanduoPopover.destroyAll()` on unmount.

#### Scenario: Cleanup on unmount
- **WHEN** the component owning `usePopover(root)` unmounts
- **THEN** every popover instance is destroyed

### Requirement: Trigger ARIA

The system SHALL set `aria-haspopup="dialog"`, `aria-expanded="false"`, and
`aria-controls="<panel-id>"` on every `.vd-popover-trigger` during init.

#### Scenario: ARIA on init
- **WHEN** `init()` runs against a trigger with `data-vd-popover-target` pointing
  to an existing element
- **THEN** the trigger has `aria-haspopup="dialog"`, `aria-expanded="false"`,
  and `aria-controls` equal to the resolved panel's `id`

### Requirement: Click trigger

A click-triggered popover SHALL open on first click and close on second
click. The trigger's `aria-expanded` SHALL toggle.

#### Scenario: Click opens / closes
- **WHEN** the user clicks a `data-vd-popover-trigger="click"` trigger
- **THEN** the panel toggles between visible and hidden

### Requirement: Outside-click dismissal

Click-triggered popovers SHALL close when the user clicks outside both
trigger and panel.

#### Scenario: Outside click closes
- **WHEN** a click-triggered popover is open and the user clicks outside
- **THEN** the panel becomes hidden

### Requirement: Escape dismissal

The most recently opened popover SHALL close on <kbd>Escape</kbd>.

#### Scenario: Escape closes visible popover
- **WHEN** a popover is visible and the user presses <kbd>Escape</kbd>
- **THEN** the visible popover becomes hidden

### Requirement: Hover trigger

A hover-triggered popover SHALL open on `mouseenter` and close 80 ms after
the cursor leaves both trigger and panel.

#### Scenario: Hover opens / closes
- **WHEN** the cursor enters a `data-vd-popover-trigger="hover"` trigger
- **THEN** the panel becomes visible
- **WHEN** the cursor leaves both trigger and panel
- **THEN** after 80 ms the panel becomes hidden

### Requirement: Focus trigger

A focus-triggered popover SHALL open on `focus` and close on `blur` (unless
focus moves into the panel).

#### Scenario: Focus opens / blur closes
- **WHEN** the trigger receives focus
- **THEN** the panel becomes visible
- **WHEN** the trigger loses focus to an element outside the panel
- **THEN** the panel becomes hidden

### Requirement: Placement flip on overflow

When `data-vd-popover-flip` is unset or `"true"` and the panel is visible,
the system SHALL flip the placement to the opposite axis if the current
placement would overflow the viewport on resize or scroll.

#### Scenario: Bottom flips to top
- **WHEN** the trigger is in the bottom 20% of the viewport with
  `placement="bottom"` and the user scrolls
- **THEN** the panel's `data-placement` becomes `"top"`

## Out of Scope

- Long-press touch gesture support.
- `prefers-reduced-motion` conditional animations.
- HTML sanitization on panel content.