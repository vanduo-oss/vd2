# Tasks

## 1. Composables

- [ ] 1.1 Add `src/composables/useTheme.ts`: typed `ThemePreference`,
      `useTheme()` returning `{ theme, primary, neutral, radius, font,
      setTheme, setPrimary, setNeutral, setRadius, setFont, reset }`.
      `onMounted` reads `localStorage.vanduo-theme-preference` and
      applies all five data attributes; setters write back.
- [ ] 1.2 Add `src/composables/useGlobalSearch.ts`: builds the search
      index lazily from a passed-in `NavTree`, exposes `query`,
      `results`, `open`, `close`, `select(id)`.
- [ ] 1.3 Add `src/composables/useScrollspy.ts`: returns the active
      section id from a list of observed headings.
- [ ] 1.4 Add `src/composables/useFocusTrap.ts`: traps Tab/Shift+Tab
      inside a container ref.
- [ ] 1.5 Add `src/composables/useKeyboardNav.ts`: roving focus
      (ArrowUp/Down/Left/Right/Home/End) for a list ref.

## 2. Stores

- [ ] 2.1 Add `src/stores/theme.ts` Pinia setup store wrapping
      `useTheme`.
- [ ] 2.2 Add `src/stores/search.ts` Pinia setup store for global
      search (query, results, isOpen).
- [ ] 2.3 Add `src/stores/nav.ts` Pinia setup store for the active
      section id and sidebar filter query.

## 3. Components

- [ ] 3.1 Add `src/components/VdIcon.vue` — `<i class="ph ph-{name}">`
      with optional `filled` prop toggling `ph-fill`.
- [ ] 3.2 Add `src/layout/VdNavbar.vue` — `.vd-navbar vd-navbar-glass
      vd-glass-contrast` shell containing brand, nav links, theme
      switcher trigger, and global search trigger.
- [ ] 3.3 Add `src/layout/VdNavbarBrand.vue`.
- [ ] 3.4 Add `src/layout/VdFooter.vue`.
- [ ] 3.5 Add `src/layout/DocsLayout.vue` — sidebar + main column for
      `/components/*` and `/guides/*` routes.
- [ ] 3.6 Add `src/layout/VdSidebar.vue` — category headings + section
      links.
- [ ] 3.7 Add `src/layout/VdSidebarFilter.vue` — text input that
      filters sidebar items.
- [ ] 3.8 Add `src/layout/VdBreadcrumb.vue` — category → section trail.
- [ ] 3.9 Add `src/layout/DocSectionNav.vue` — in-page section TOC
      driven by `useScrollspy`.

## 4. Overlays

- [ ] 4.1 Add `src/overlays/VdThemeSwitcher.vue` (menu variant only).
- [ ] 4.2 Add `src/overlays/VdThemeCustomizer.vue`.
- [ ] 4.3 Add `src/overlays/GlobalSearchModal.vue` using
      `useFocusTrap` + `useKeyboardNav` + `useGlobalSearch`.

## 5. Styles

- [ ] 5.1 Add `src/styles/tokens.css` re-exporting framework tokens
      (just `@import '@vanduo-oss/framework/css';` — main entry already
      does this; tokens.css is a placeholder for future overrides).

## 6. App wiring

- [ ] 6.1 Update `src/App.vue` to mount `VdNavbar` and `VdFooter`
      around `<RouterView>`, plus global overlays
      (`GlobalSearchModal`).

## 7. Tests

- [ ] 7.1 Add `tests/unit/useTheme.spec.ts` asserting no
      `localStorage` access during SSR (jsdom with `window` undefined
      is awkward; instead assert `setTheme()` only mutates data attrs
      when `onMounted` has fired).
- [ ] 7.2 Add `tests/unit/useGlobalSearch.spec.ts` asserting the index
      is built lazily and matches by title/keyword.
- [ ] 7.3 Add `tests/unit/nav.spec.ts` asserting the typed `NavTree`
      contract.

## 8. Verification

- [ ] 8.1 `pnpm run typecheck` passes.
- [ ] 8.2 `pnpm run lint` passes.
- [ ] 8.3 `pnpm run build` still emits `dist/index.html` with the
      navbar/footer in the pre-rendered HTML.
- [ ] 8.4 `pnpm test` passes.