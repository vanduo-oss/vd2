# Image Box

## Purpose

Image containers with hover-reveal captions, optional click-to-zoom
(delegate to Spotlight), and aspect-ratio presets. Use
`.vd-image-box-grid` for an auto-fit layout.

## Requirements

### Requirement: Mount-time init

The system SHALL call `VanduoImageBox.init(root)` on mount.

#### Scenario: useImageBox wires on mount
- **WHEN** `useImageBox(root)` runs and the component mounts
- **THEN** every `.vd-image-box` element inside `root.value` is registered

### Requirement: Unmount cleanup

The system SHALL call `VanduoImageBox.destroyAll()` on unmount.

### Requirement: Hover caption reveal

A `.vd-image-box-caption` element SHALL be revealed on hover of its parent
`.vd-image-box`.

#### Scenario: Hover reveals caption
- **WHEN** the cursor enters a `.vd-image-box`
- **THEN** the `.vd-image-box-caption` becomes visible

### Requirement: Click-to-zoom

`data-vd-image-box-zoom` on the box SHALL enable click-to-zoom, delegating
to the spotlight component when present.

#### Scenario: Click zooms
- **WHEN** the user clicks a `.vd-image-box[data-vd-image-box-zoom]`
- **THEN** the image is promoted to the spotlight overlay

### Requirement: Aspect-ratio presets

`data-vd-image-box-shape="square|portrait|landscape|wide"` SHALL apply the
corresponding aspect ratio.

#### Scenario: Shape preset
- **WHEN** a box has `data-vd-image-box-shape="square"`
- **THEN** its aspect-ratio is 1:1

### Requirement: Grid layout

`.vd-image-box-grid` SHALL be a CSS grid container that arranges child
boxes in an auto-fit layout.

### Requirement: Accessibility

The underlying `<img>` MUST carry `alt`. The caption is decorative. Zoom-
enabled boxes add `role="button"` with a keyboard handler (<kbd>Enter</kbd>
opens the zoom overlay).

### Requirement: Reduced-motion compliance

Hover caption fade SHALL be skipped when `prefers-reduced-motion: reduce`
is set.

## Out of Scope

- Image loading lazy-loading (handled by the framework's lazy-load utility).
- Image cropping / focal point control.