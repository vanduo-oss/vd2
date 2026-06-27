## Why

`docs-pages-1to1` ported the music player page as a single static
`<VdMusicPlayer>` with `showPlaylist: true`. The legacy `docs/` site
(`sections/media/music-player.html`, ~851 lines) had 10 live player
variants plus programmatic-API, events, CSS-variables, accessibility,
and attribution sections. `@vanduo-oss/music-player` supports all of it
via `tracks`/`options` props, 11 emits, and an exposed `player`/
`container` for imperative control (floating, transport, state). This
change restores legacy parity and adds a live event-log demo so the
vd2 docs teach dual-engine integration properly.

## What Changes

- Rebuild `/media/music-player` as a multi-demo page: minimal, progress,
  playlist + progress, compact, small, large, inline-all-features, glass
  (in a gradient wrapper), detachable-fixed + buttons, detachable-draggable
  + buttons.
- Add a programmatic-API demo with buttons calling `play/pause/next/
  previous/setVolume/setTrack` on the exposed instance.
- Add a live event-log demo listening to all 10 player emits.
- Expand the API Reference: Install/Usage (EngineSwitch), Options table
  with Type + Default columns (15 options), Events table, Programmatic
  API list, CSS Variables block, Accessibility notes, Stellardrone CC
  BY 4.0 attribution.
- Extend unit tests to assert the page renders multiple players, variant
  classes (`-lg`, `-compact`, `-inline`), and the programmatic/event-log
  cards.

## Capabilities

### Modified Capabilities

- `interactive-demos` (from `improve-canvas-demos`): the music player
  page now exposes the full variant matrix plus programmatic and
  event-log interactive demos, extending the interactive-demos pattern
  to the Media category.
- `page-parity` (from `docs-pages-1to1`): music player page moves from
  one static demo to full legacy parity-plus.

## Impact

- `src/pages/media/MusicPlayer.vue` — major rewrite of the live demo
  section and reference tables.
- `tests/unit/music-player.spec.ts` — extended with a page-level test.
- No new runtime deps. Validation: `vue-tsc`, `vitest`, `vite-ssg build`.
- Audio assets: Stellardrone `.mp3` files (CC BY 4.0) are now bundled
  in `vd2/public/music/Stellardrone/Invent the Universe/` (copied from
  `docs/music/`) and ship in `dist/music/` on build. Track URLs resolve
  to those files and playback works in dev and prod.
