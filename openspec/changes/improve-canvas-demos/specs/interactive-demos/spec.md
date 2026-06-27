## ADDED Requirements

### Requirement: hex-demo-sliders-drive-grid-props
The `/canvas/hex` live demo MUST expose range sliders for hex size
(10–50), grid width (5–30), grid height (5–20), and grid rotation
(-180°–180°) that update the mounted `<VdHexGrid>` via reactive props.

#### Scenario: size slider updates the grid
- **WHEN** the user moves the Hex Size slider to 40
- **THEN** the `<VdHexGrid>` receives `:size="40"` and the grid re-renders

#### Scenario: rotation slider updates the grid
- **WHEN** the user sets Grid Rotation to 45°
- **THEN** the `<VdHexGrid>` receives `:rotation` equivalent to 45° in radians

### Requirement: hex-demo-zoom-toolbar
The hex demo canvas MUST display a zoom toolbar overlay with zoom out,
zoom level readout (%), zoom in, and reset-view buttons wired to the
core instance.

#### Scenario: zoom in updates readout
- **WHEN** the user clicks the zoom-in button
- **THEN** the zoom level readout reflects an increased scale percentage

#### Scenario: reset view restores 100%
- **WHEN** the user clicks reset view after zooming
- **THEN** the zoom level readout shows 100%

### Requirement: hex-demo-selection-panel
The hex demo MUST show a Selected Hex info panel after the first hex
click, displaying axial coordinates, pixel position, and adjacent hex
count.

#### Scenario: first hex click reveals panel
- **WHEN** the user clicks a hex on the grid
- **THEN** the Selected Hex panel becomes visible with `(q, r)` coordinates

### Requirement: hex-demo-terrain-showcase
The hex demo MUST expose Generate Terrain and a terrain-type picker that
applies terrain to the selected hex; the info panel MUST show terrain
yields and movement cost when a hex has terrain.

#### Scenario: generate terrain fills the grid
- **WHEN** the user clicks Generate Terrain
- **THEN** hexes receive random terrain types and re-render with terrain colors

#### Scenario: terrain picker paints selected hex
- **WHEN** a hex is selected and the user picks a terrain type
- **THEN** that hex's terrain updates and the info panel shows yields/movement

### Requirement: hex-demo-pathfinding-mode
The hex demo MUST offer a Path mode toggle: first click sets start, second
click sets end, a connected path is computed (terrainless hexes treated as
passable so the empty grid routes), drawn as a highlighted hex chain with a
connector line, and path length is displayed.

#### Scenario: path mode highlights route
- **WHEN** Path mode is on and the user clicks a start hex then an end hex
- **THEN** the path hexes are visually highlighted with a connector line and path length is shown

#### Scenario: unreachable target reports no route
- **WHEN** no passable path exists between the two clicked hexes
- **THEN** the demo shows a "No route found" message instead of a length

### Requirement: hex-demo-coord-labels
The hex demo MUST offer a toggle that draws `q,r` coordinate labels on
every hex via custom render, and clears them when toggled off.

#### Scenario: coord labels toggle on
- **WHEN** the user enables Show coordinates
- **THEN** each hex displays its axial coordinates on the canvas
