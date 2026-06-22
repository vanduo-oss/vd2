## Context

The framework runtime (`framework/js/vanduo.js`) exposes a global
`window.Vanduo` with `init/reinit/destroy/destroyAll/getComponent`.
vd2 deliberately does **not** depend on that runtime — only the CSS
bundle is consumed. Instead, vd2 ships Vue-native versions of every
surface the docs site needs: a glass navbar with brand, a footer, a
sidebar with category filter, an in-page section TOC, a breadcrumb,
the theme switcher (menu variant), the theme customizer, and the
global search modal. The Pinia setup stores wrap composables that
mutate `<html data-*>` attributes and persist preferences in
`localStorage`. Because `vite-ssg` pre-renders the site, every
`localStorage` read MUST be guarded by an SSR check; the composable
applies the persisted theme on `onMounted` to avoid hydration
mismatches.

## Goals / Non-Goals

**Goals:**

- A navbar that matches `docs/index.html` structure (glass contrast
  navbar with brand + nav links + theme switcher trigger + global
  search trigger).
- A footer that mirrors the framework docs footer structure.
- A sidebar (`DocsLayout`) with category headings, section links, and
  a category filter (`VdSidebarFilter`).
- A breadcrumb showing the active category → section trail.
- A `<VdThemeSwitcher>` with the menu variant (cycle + select deferred
  per the plan's v1 cut).
- A `<VdThemeCustomizer>` exposing primary/neutral/radius/font
  controls.
- A `useTheme()` composable that reads/writes
  `vanduo-theme-preference` from `localStorage` and applies five
  `<html>` data attributes: `data-theme`, `data-primary`,
  `data-neutral`, `data-radius`, `data-font`.
- A `GlobalSearchModal` opened by a header trigger, indexing
  `nav.ts`-derived metadata, fuzzy-matched on input, navigable by
  arrow keys + enter.
- `<VdIcon>` that accepts a `name` prop and renders the matching
  Phosphor class (`<i class="ph ph-{name}">`).
- Three small composables: `useScrollspy`, `useFocusTrap`,
  `useKeyboardNav`.

**Non-Goals:**

- Porting the remaining surfaces (sidenav, offcanvas, dropdown,
  autocomplete, date picker, etc.) — those are follow-up changes.
- The full spotlight tour (`VdSpotlight`) — deferred if scope is
  tight. The store is added; the overlay is optional.

## Decisions

- **Pinia setup stores**: each store lives next to its composable
  (`stores/theme.ts` wraps `useTheme`, `stores/search.ts` wraps
  `useGlobalSearch`). Setup-style matches the framework's preference
  for typed, composable-first code.
- **`VdIcon` does no prop validation beyond `name: string`**: the
  framework CSS ships Phosphor font faces, so any class name renders.
  Mismatches surface as missing glyphs, not runtime errors.
- **`<VdThemeSwitcher>` is a menu of `role="menuitemradio"` items**
  with `data-theme-value`, mirroring the `data-theme-ui="menu"` shell
  in `docs/index.html`.
- **`useTheme()` reads `localStorage` only inside `onMounted`**, never
  at module scope, never on the server. The pre-hydration theme is
  whatever the framework's CSS bundle defaults to; the user's saved
  preference is applied once on the client.
- **`useGlobalSearch()` builds its index lazily on first open** so
  `nav.ts` doesn't have to be available synchronously at app boot.
- **`useFocusTrap()` is generic**: it accepts a container `Ref<HTMLElement>`
  and traps Tab/Shift+Tab inside it. `GlobalSearchModal` and any
  future modal uses it.
- **`useKeyboardNav()` is a small utility** for arrow-key roving
  focus inside toolbars, menubars, and the search results list.

## Risks / Trade-offs

- **Hydration mismatch on theme**: the spec for `useTheme` requires
  the `data-theme` attribute be applied only on the client. If a
  contributor tries to set it during setup, Vue will warn and the
  page will flicker. Covered by a unit test in `useTheme.spec.ts`.
- **`VdThemeCustomizer` UX parity is approximate**: the framework's
  customizer is a hand-rolled DOM panel. vd2's version uses a
  `<details>` + native inputs. Visual parity is "good-enough," not
  pixel-for-pixel, matching the plan's explicit scope acceptance.
- **Search index size**: at v1 (~20 entries), an in-memory
  `string.includes` is sufficient. A real fuzzy indexer
  (`fuse.js`/`minisearch`) is deferred until the index crosses
  ~50 entries.