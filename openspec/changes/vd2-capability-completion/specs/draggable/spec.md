# Draggable

## Purpose

Pointer-driven drag-and-drop that works on desktop and touch. Dropzones
accept items based on declared data values, and the framework fires bubbling
`draggable:start`, `draggable:move`, and `draggable:drop` events.

## Requirements

### Requirement: Mount-time init

The system SHALL call `VanduoDraggable.init(root)` on mount.

#### Scenario: useDraggable wires on mount
- **WHEN** `useDraggable(root)` runs and the component mounts
- **THEN** every `.vd-draggable` and `[data-vd-draggable]` element inside
  `root.value` is registered

### Requirement: Unmount cleanup

The system SHALL call `VanduoDraggable.destroyAll()` on unmount.

### Requirement: Pointer-driven drag

Pressing and dragging on a `.vd-draggable` element SHALL spawn a drag
ghost and fire `draggable:start`.

#### Scenario: Drag start
- **WHEN** the user pointer-downs on a `.vd-draggable` and moves the pointer
  beyond a threshold
- **THEN** a `draggable:start` CustomEvent fires with `detail.data` set to
  the value of `data-vd-drag-data`

### Requirement: Drag handle

`data-vd-drag-handle` (CSS selector inside the element) SHALL restrict
the drag to clicks that start on the matching element.

#### Scenario: Handle restricts drag
- **WHEN** a `.vd-draggable` has `data-vd-drag-handle=".my-handle"`
- **THEN** pointer-downs outside the handle do NOT start a drag

### Requirement: Dropzones

A `.vd-dropzone` SHALL highlight when a compatible draggable is hovered
over it.

#### Scenario: Dropzone highlight
- **WHEN** a draggable with `data-vd-drag-data="apple"` is dragged over a
  dropzone with `data-vd-dropzone-accept="apple,orange"`
- **THEN** the dropzone receives an active / hover class

### Requirement: Drop emit

Dropping a compatible draggable on a dropzone SHALL fire `draggable:drop`.

#### Scenario: Drop fires event
- **WHEN** the user releases the draggable over an accepted dropzone
- **THEN** a `draggable:drop` CustomEvent fires with `detail.data` and
  `detail.target` (the dropzone element)

### Requirement: Cancel on outside

Releasing the drag outside any accepted dropzone SHALL cancel the drag
without firing `draggable:drop`.

### Requirement: Touch parity

Pointer events (not native HTML5 DnD) SHALL be used so the same code path
works on touch devices.

### Requirement: Keyboard equivalent

Focusing a `.vd-draggable` and pressing <kbd>Space</kbd> "picks it up";
<kbd>Tab</kbd> moves to a dropzone; <kbd>Enter</kbd> drops.

### Requirement: Accessibility

Draggables expose `aria-grabbed` / `aria-pressed`; dropzones expose
`aria-dropeffect="move"` during hover.

## Out of Scope

- Native HTML5 drag-and-drop API (pointer events only).
- Cross-window / cross-document dragging.