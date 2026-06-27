# Expanding Cards

## Purpose

Click a card to expand it to fill the row; the others collapse into a
thumbnail strip. Useful for featured content showcases and galleries.

## Requirements

### Requirement: Mount-time init

The system SHALL call `VanduoExpandingCards.init(root)` on mount.

#### Scenario: useExpandingCards wires on mount
- **WHEN** `useExpandingCards(root)` runs and the component mounts
- **THEN** every `.vd-expanding-cards` container inside `root.value` is
  registered

### Requirement: Unmount cleanup

The system SHALL call `VanduoExpandingCards.destroyAll()` on unmount.

### Requirement: Click expands

Clicking a `.vd-expanding-card` SHALL mark it as the active card and
expand it to fill the row. Other cards SHALL shrink to a thumbnail strip.

#### Scenario: Click expands
- **WHEN** the user clicks a card in a `.vd-expanding-cards` row
- **THEN** that card receives the active class and fills the row

### Requirement: Initial active card

`data-vd-active-index` on the container SHALL set the initially expanded
card (0-based).

#### Scenario: Initial active
- **WHEN** a container has `data-vd-active-index="2"`
- **THEN** the third card is the active one on mount

### Requirement: Single active card

Only one card SHALL be active at a time.

#### Scenario: Single active
- **WHEN** the user clicks a different card
- **THEN** the previously active card loses the active class

### Requirement: Accessibility

Each card is a `<button>` with an accessible label. The active card carries
`aria-pressed="true"`; others carry `aria-pressed="false"`.

### Requirement: Keyboard navigation

Arrow keys SHALL move focus between cards; <kbd>Enter</kbd> / <kbd>Space</kbd>
SHALL expand the focused card.

## Out of Scope

- Multi-card expand mode.
- Touch swipe gestures (click only).