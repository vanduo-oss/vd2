# Tasks

Music Player page parity-plus upgrade. Tracked under
`improve-music-player-demo`; reuses the `interactive-demos` capability
introduced by `improve-canvas-demos`.

## 1. Variant matrix (`/media/music-player`)

- [x] 1.1 Rewrite `src/pages/media/MusicPlayer.vue` to render a
      data-driven `variantDemos` array: minimal, progress, playlist +
      progress, compact, small, large, inline-all-features. Size/layout
      via class fallthrough on `<VdMusicPlayer>`.
- [x] 1.2 Add the glass demo inside a gradient wrapper div (replicate
      legacy inline gradient styling); `glass: true`, `showProgress: true`.
- [x] 1.3 Add detachable-fixed demo with `@ready`-captured instance +
      buttons (detach bottom-left / top-right / attach) wired to
      `player.detach/attach`.
- [x] 1.4 Add detachable-draggable demo (small, `draggable`, `showPlaylist`)
      + buttons (detach+minimize / expand / attach) wired to
      `player.detach/minimize/expand/attach`. Unique `persistKey`.
- [x] 1.5 Verify floating cleanup on unmount (no orphaned widget after
      route change while detached).

## 2. Parity-plus interactive demos

- [x] 2.1 Programmatic API demo: buttons calling `play/pause/next/
      previous/setVolume(0.25|0.75)/setTrack(0|2)` on the exposed
      instance; render `getState()` snapshot.
- [x] 2.2 Live event-log demo: bind all 10 emits to a handler that
      unshifts `{ time, type, detail }` into a capped `ref([])` list
      rendered in the card.

## 3. Reference sections

- [x] 3.1 Install (shell) + Usage `EngineSwitch` (Vue 3 `<VdMusicPlayer>`
      and vanilla `initPlayer` / declarative `data-music-player`).
- [x] 3.2 Options table with Type + Default columns (15 options).
- [x] 3.3 Events table (10 `musicplayer:*` events + Vue `@ready`).
- [x] 3.4 Programmatic API list (transport/volume/shuffle/repeat/
      floating/minimize/state methods).
- [x] 3.5 CSS Variables block (`--vd-music-player-*` tokens).
- [x] 3.6 Accessibility notes + Stellardrone CC BY 4.0 attribution.

## 4. OpenSpec + tests

- [x] 4.1 Add `openspec/changes/improve-music-player-demo/` (proposal,
      design, tasks, README, spec delta).
- [x] 4.2 Extend `tests/unit/music-player.spec.ts` — mount the page
      (stubbing `DocsLayout`/`DocCodeSnippet`/`EngineSwitch`) and assert
      multiple `.vd-music-player` instances + variant classes
      (`vd-music-player-lg`, `-compact`, `-inline`) + programmatic and
      event-log cards render.

## 5. Verification

- [x] 5.1 `pnpm run typecheck` green.
- [x] 5.2 `pnpm test` green.
- [x] 5.3 `pnpm run build` green.
- [x] 5.4 SSG output for `/media/music-player` confirmed to contain all
      variant classes (`-compact`, `-sm`, `-lg`, `-inline`, `-glass`) and
      15 `.vd-music-player` instances.
