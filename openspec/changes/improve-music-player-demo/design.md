## Context

The legacy `docs/sections/media/music-player.html` (~851 lines) ships
10 live `<div class="vd-music-player">` instances initialized via
`data-music-player-options` JSON, plus reference sections. vd2 ported
it as a single static `<VdMusicPlayer>`. The package's Vue wrapper
([music-player/src/vue.js](music-player/src/vue.js)) exposes everything
the legacy demos need: `tracks`/`options` props, 11 emits, and
`expose({ player, container })` for imperative control.

## Demo matrix

All demos share one Stellardrone playlist. Variants map 1:1 to legacy:

| Demo | Class | Options |
|------|-------|---------|
| Minimal | — | defaults |
| With progress | — | `showProgress` |
| Playlist + progress | — | `showPlaylist`, `showProgress` |
| Compact | `vd-music-player-compact` | defaults |
| Small | `vd-music-player-sm` | defaults |
| Large | `vd-music-player-lg` | defaults |
| Inline, all features | `vd-music-player-inline` | `showProgress`, `showPlaylist` |
| Glass | — (wrapper gradient) | `glass`, `showProgress` |
| Detachable, fixed | — | `detachable`, `minimizable`, `floatingPosition` |
| Detachable, draggable | `vd-music-player-sm` | `detachable`, `draggable`, `minimizable`, `showPlaylist` |

Parity-plus interactive cards:

- **Programmatic API** — buttons calling `play/pause/next/previous/
  setVolume/setTrack` on the exposed instance.
- **Live event log** — listens to all 10 emits and renders the last N
  events with timestamps.

## Card template

Simple variants are data-driven (`{ key, title, blurb, class?, options }`)
and rendered via `v-for` over a `variantDemos` array, each card holding
one `<VdMusicPlayer>`. Glass, detachable, programmatic, and event-log
demos are bespoke cards (extra wrapper markup or button rows).

## Gotchas (load-bearing)

1. **Class fallthrough**: `VdMusicPlayer` renders a single root
   `<div class="vd-music-player">` with no `inheritAttrs: false`, so
   `<VdMusicPlayer class="vd-music-player-lg">` merges to
   `<div class="vd-music-player vd-music-player-lg">`. Confirmed at
   [music-player/src/vue.js](music-player/src/vue.js) line 78.
2. **Prop changes recreate the player** (deep watcher in the wrapper) —
   keep per-demo `options` static; drive runtime transport/volume/track
   changes through the exposed `player`, not by mutating props.
3. **Capture instance via `@ready`** (payload is the container element);
   the wrapper exposes `{ player, container }`, so call e.g.
   `player.detach(container, 'bottom-left')`. Store containers in a
   keyed `ref` map.
4. **Floating cleanup**: detaching moves the element to `<body>`. On
   route change `onBeforeUnmount` → `MusicPlayer.destroy(el)` runs, but
   a detached widget could be orphaned. Reset to attached on teardown
   if still detached.
5. **Unique `persistKey`** per persistable demo to avoid localStorage
   collisions.
6. **SSR**: player created on mount only; page already renders without
   a window.
7. **Bundled audio**: Stellardrone `.mp3`s now ship in
   `vd2/public/music/Stellardrone/Invent the Universe/`; the page's
   track URLs (`/music/Stellardrone/Invent the Universe/<track>.mp3`)
   resolve in dev and prod. No source-code change needed — the tracks
   array already pointed at those paths.

## Goals / Non-Goals

**Goals:** legacy parity for the 10 variants + reference sections;
parity-plus programmatic and event-log demos; unit test coverage for
the page chrome; consistent with the interactive-demos pattern.

**Non-Goals:** changing the `@vanduo-oss/music-player` package; adding
sample audio assets; extracting a shared demo-card component (each
ecosystem page keeps its own inline structure for now).
