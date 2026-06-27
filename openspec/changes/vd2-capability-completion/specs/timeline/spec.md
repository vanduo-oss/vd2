# Timeline

## Purpose

A vertical (or horizontal) spine of dated entries. Markers, icons, and
entry cards are independently styleable. Reveal animations are
scroll-driven.

## Requirements

### Requirement: Mount-time init

The system SHALL call `VanduoTimeline.init(root)` on mount.

#### Scenario: useTimeline wires on mount
- **WHEN** `useTimeline(root)` runs and the component mounts
- **THEN** every `.vd-timeline` container inside `root.value` is registered

### Requirement: Unmount cleanup

The system SHALL call `VanduoTimeline.destroyAll()` on unmount.

### Requirement: Vertical default

A `.vd-timeline` container SHALL render entries vertically (default).

### Requirement: Horizontal variant

A `.vd-timeline-horizontal` container SHALL render entries horizontally.

### Requirement: Item structure

Each entry is a `.vd-timeline-item` containing a `.vd-timeline-marker` and
a `.vd-timeline-content`.

#### Scenario: Item structure
- **WHEN** a `.vd-timeline-item` contains the marker and content elements
- **THEN** both are positioned correctly on the spine

### Requirement: Marker color

The marker accepts any color utility class (e.g. `vd-bg-primary`,
`vd-bg-success`).

### Requirement: Per-item side override

`data-vd-timeline-side="left|right"` on an item SHALL override the default
alternating placement.

### Requirement: Scroll-driven reveal

Items SHALL animate in (reveal) as they enter the viewport.

### Requirement: Reduced-motion compliance

Reveal animations SHALL be skipped when `prefers-reduced-motion: reduce`
is set.

### Requirement: Accessibility

The spine is decorative (`aria-hidden="true"`). Each item is a `<section>`
with a heading providing the accessible name.

## Out of Scope

- Dynamic data loading (timeline is markup-driven).
- Timeline-tooltip connectors (entry cards stand alone).