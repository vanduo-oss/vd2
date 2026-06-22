## Why

vd2 needs Vue-native component primitives that match the visual language
of `@vanduo-oss/framework` without duplicating its runtime. The v1 cut
ships 12–15 components — the most heavily demoed sections in the existing
docs plus the layout primitives that all component pages consume. Locking
the v1 set in a spec prevents "port everything before launch" scope drift
called out in the plan's risks section. Each component composes only
`.vd-*` framework classes; no scoped `<style>` blocks.

## What Changes

- Add `src/components/VdButton.vue`, `VdBadge.vue`, `VdAlert.vue`,
  `VdCard.vue`, `VdModal.vue`, `VdToast.vue`, `VdTooltip.vue`,
  `VdTabs.vue`, `VdAccordion.vue`, `VdProgress.vue`, `VdSpinner.vue`,
  `VdCodeSnippet.vue`, `VdFlow.vue` (carousel) — each `<script setup
  lang="ts">` with typed `defineProps<T>()` and `defineEmits<T>()`. All
  classes come from the framework CSS bundle.
- Add layout primitives under `src/components/primitives/`:
  `VdBox.vue`, `VdStack.vue`, `VdInline.vue`, `VdCenter.vue`,
  `VdFrame.vue`, `VdCover.vue`, `VdSwitcher.vue`.
- Add a Vitest spec per component in `tests/unit/` covering prop
  validation and event emission.
- Add a Playwright spec per component in `tests/e2e/components/`
  covering keyboard navigation and ARIA semantics (when interactive).
- Update `App.vue` to register the new components globally if/when a
  `plugin.ts` is added (this change does not introduce that plugin —
  components are imported per-page).

## Capabilities

### New Capabilities

- `vd-components`: the v1 component surface (12–15 components).
- `layout-primitives`: 7 layout primitives under `src/components/primitives/`.

### Modified Capabilities

_None._

## Impact

- `src/components/` grows by ~20 SFCs.
- `tests/unit/` and `tests/e2e/components/` gain component-specific
  specs.
- Visual parity is enforced by class composition only — no scoped styles
  means any framework CSS update propagates automatically.
- Components not in the v1 list (e.g. `VdDatePicker`, `VdRating`,
  `VdTreeView`, etc.) are tracked as follow-up changes, not silently
  absorbed.