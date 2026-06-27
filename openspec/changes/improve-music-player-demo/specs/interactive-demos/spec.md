## ADDED Requirements

### Requirement: music-player-variant-matrix-renders
The `/media/music-player` page MUST render all legacy player variants:
minimal, with-progress, playlist+progress, compact, small, large,
inline-all-features, and glass — each as a live `<VdMusicPlayer>` with
the matching options and (where applicable) CSS layout class.

#### Scenario: compact variant applies its layout class
- **WHEN** the page renders the Compact demo
- **THEN** a `.vd-music-player.vd-music-player-compact` element exists

#### Scenario: glass demo sits inside a colored gradient wrapper
- **WHEN** the page renders the Glass demo
- **THEN** the player is wrapped in a div with a `linear-gradient` background and `glass: true` in its options

### Requirement: music-player-detachable-controls
The page MUST include detachable-fixed and detachable-draggable demos
with buttons that call the exposed `player` API to detach, attach,
minimize, and expand.

#### Scenario: detach button floats the player
- **WHEN** the user clicks "Detach bottom-left" on the fixed demo
- **THEN** `player.detach(container, 'bottom-left')` is called and the player floats

#### Scenario: draggable demo minimizes and expands
- **WHEN** the user clicks "Detach & minimize" then "Expand"
- **THEN** the player is detached, minimized, and then expanded via the exposed API

### Requirement: music-player-programmatic-api-demo
The page MUST include a programmatic-API demo with buttons that call
`play/pause/next/previous/setVolume/setTrack` on a captured instance
and display the current `getState()` snapshot.

#### Scenario: setTrack button jumps the player
- **WHEN** the user clicks a "Play track 3" button
- **THEN** `player.setTrack(container, 2)` is called and the state snapshot updates

### Requirement: music-player-event-log-demo
The page MUST include a live event-log demo that listens to all player
emits and renders the most recent events with timestamps.

#### Scenario: track change appears in the log
- **WHEN** the active track changes in the event-log demo player
- **THEN** a `trackchange` entry with `{ index, name, url }` is prepended to the log list

### Requirement: music-player-reference-sections
The page MUST document the full API surface: Install + Usage (Vue 3 and
vanilla via EngineSwitch), an Options table with Type + Default columns,
an Events table, a Programmatic API list, a CSS Variables block, an
Accessibility section, and Stellardrone CC BY 4.0 attribution.

#### Scenario: options table has type and default columns
- **WHEN** the page renders the Options table
- **THEN** the table has columns for Option, Type, Default, and Description and lists all 15 options
