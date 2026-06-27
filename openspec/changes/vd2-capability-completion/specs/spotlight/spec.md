# Spotlight

## Purpose

Click an item to promote it into a fullscreen overlay; click the dimmed
backdrop or press <kbd>Escape</kbd> to dismiss. Useful for image galleries
and detail-on-demand cards.

## Requirements

### Requirement: Mount-time init

The system SHALL call `VanduoSpotlight.init(root)` on mount.

#### Scenario: useSpotlight wires on mount
- **WHEN** `useSpotlight(root)` runs and the component mounts
- **THEN** every `.vd-spotlight` container inside `root.value` is registered

### Requirement: Unmount cleanup

The system SHALL call `VanduoSpotlight.destroyAll()` on unmount.

### Requirement: Click promotes

Clicking a `.vd-spotlight-item` SHALL open a fullscreen overlay containing
the item's content.

#### Scenario: Click opens overlay
- **WHEN** the user clicks a `.vd-spotlight-item`
- **THEN** a fullscreen overlay appears with the item's content

### Requirement: Caption display

When `data-vd-spotlight-caption` is present on an item, the overlay SHALL
display the caption text.

#### Scenario: Caption display
- **WHEN** the item has `data-vd-spotlight-caption="Mountains"`
- **THEN** the overlay displays "Mountains" as the caption

### Requirement: Backdrop dismissal

Clicking the dimmed backdrop SHALL close the overlay.

### Requirement: Escape dismissal

Pressing <kbd>Escape</kbd> SHALL close the overlay.

### Requirement: Focus restoration

When the overlay closes, focus SHALL return to the item that was clicked.

### Requirement: Focus trap

While the overlay is open, focus SHALL be trapped inside the overlay.

## Out of Scope

- Image-specific zoom / pan (the overlay is generic; Image Box delegates).
- Multi-item overlay (only one spotlight at a time).