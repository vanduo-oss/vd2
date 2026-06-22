# Tasks

## 1. Components

- [ ] 1.1 Add `src/components/VdButton.vue` (variant: primary/secondary/ghost/danger, size: sm/md/lg, loading, disabled; emits `click`).
- [ ] 1.2 Add `src/components/VdBadge.vue` (variant: default/success/warning/danger).
- [ ] 1.3 Add `src/components/VdAlert.vue` (variant: info/success/warning/danger, dismissible, emits `dismiss`).
- [ ] 1.4 Add `src/components/VdCard.vue` (slots: header, default, footer).
- [ ] 1.5 Add `src/components/VdModal.vue` (v-model:open, title, size: sm/md/lg, emits `close`).
- [ ] 1.6 Add `src/components/VdToast.vue` (single toast visual).
- [ ] 1.7 Add `src/components/VdToastContainer.vue` + `src/composables/useToast.ts` (imperative API).
- [ ] 1.8 Add `src/components/VdTooltip.vue` (text prop, position prop).
- [ ] 1.9 Add `src/components/VdTabs.vue` (v-model activeId, tabs prop, emits `update:modelValue`).
- [ ] 1.10 Add `src/components/VdAccordion.vue` (v-model openIds, exclusive prop, emits `update:modelValue`).
- [ ] 1.11 Add `src/components/VdProgress.vue` (value, max, indeterminate).
- [ ] 1.12 Add `src/components/VdSpinner.vue` (size, label).
- [ ] 1.13 Add `src/components/VdCodeSnippet.vue` (code prop, language, copyable).
- [ ] 1.14 Update `src/components/VdIcon.vue` if needed (already shipped in app-shell — verify coverage).

## 2. Layout primitives

- [ ] 2.1 Add `src/components/primitives/VdBox.vue`.
- [ ] 2.2 Add `src/components/primitives/VdStack.vue` (gap prop).
- [ ] 2.3 Add `src/components/primitives/VdInline.vue` (gap, align).
- [ ] 2.4 Add `src/components/primitives/VdCenter.vue`.
- [ ] 2.5 Add `src/components/primitives/VdFrame.vue` (aspect-ratio prop).
- [ ] 2.6 Add `src/components/primitives/VdCover.vue`.
- [ ] 2.7 Add `src/components/primitives/VdSwitcher.vue` (threshold prop).

## 3. Toast store

- [ ] 3.1 Add `src/stores/toast.ts` Pinia setup store exposing
      `show(message, opts)` and `dismiss(id)`.

## 4. Tests

- [ ] 4.1 Add one Vitest spec per component in `tests/unit/components/`
      asserting props/events.
- [ ] 4.2 Add `tests/unit/primitives.spec.ts` for the layout primitives.

## 5. Verification

- [ ] 5.1 `pnpm run typecheck` passes.
- [ ] 5.2 `pnpm run lint` passes.
- [ ] 5.3 `pnpm test` passes.
- [ ] 5.4 `pnpm run build` succeeds.