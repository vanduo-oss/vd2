# Tasks

## 1. Dependency

- [ ] 1.1 Point `@vanduo-oss/framework` at `file:../framework` so the new
      palette CSS is served locally.

## 2. Theme plumbing

- [ ] 2.1 Add `palette` to `ThemePreference` in
      `src/composables/useTheme.ts` (default from core `DEFAULTS.PALETTE`,
      apply `data-palette`, persist under `vanduo-palette`).
- [ ] 2.2 Wire `setPalette` through `src/stores/theme.ts`.
- [ ] 2.3 Add a palette selector to `src/overlays/VdThemeCustomizer.vue`
      using `PALETTE_OPTIONS`.

## 3. Docs content

- [ ] 3.1 Rework `src/pages/core/ColorPalette.vue` (Fibonacci default +
      golden track; Open Color optional; driven by core `tokens`).
- [ ] 3.2 Reframe the `#open-color` section in `src/pages/home.vue`.
- [ ] 3.3 Copy consistency in `ThemeCustomizer.vue` and `CssVariables.vue`;
      class renames in `src/styles/docs.css` as needed.

## 4. Tests + validation

- [ ] 4.1 Extend `tests/unit/useTheme.spec.ts` (palette default applied +
      restored).
- [ ] 4.2 Refresh Playwright baselines `vd2-home.png`,
      `vd2-core-color-palette.png`.
- [ ] 4.3 `pnpm typecheck`, `pnpm test`, `pnpm build`, `pnpm test:e2e` green.
