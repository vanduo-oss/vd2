# vd2 Capability Completion — Tasks

## Phase A — Pages 1, 3, 4, 5, 6, 7, 10, 12 (no framework 1.6.0 dependency)

- [ ] A1. `composables/useDropdown.ts` — wraps `VanduoDropdown.init/destroyAll`.
- [ ] A2. `pages/components/Dropdown.vue` — basic + split + placement demos.
- [ ] A3. `composables/useRipple.ts` — wraps `VanduoRipple.init/destroyAll`.
- [ ] A4. `pages/components/Ripple.vue` — buttons + cards + colored + centered demos.
- [ ] A5. `pages/components/Fab.vue` — pure CSS, no composable needed.
- [ ] A6. `composables/useExpandingCards.ts` — wraps `VanduoExpandingCards`.
- [ ] A7. `pages/components/ExpandingCards.vue`.
- [ ] A8. `composables/useSpotlight.ts` — wraps `VanduoSpotlight`.
- [ ] A9. `pages/components/Spotlight.vue`.
- [ ] A10. `composables/useTimeline.ts` — wraps `VanduoTimeline`.
- [ ] A11. `pages/components/Timeline.vue` — vertical + horizontal.
- [ ] A12. `composables/useDraggable.ts` — wraps `VanduoDraggable`.
- [ ] A13. `pages/interactive/Draggable.vue`.
- [ ] A14. `composables/useImageBox.ts` — wraps `VanduoImageBox`.
- [ ] A15. `pages/media/ImageBox.vue`.
- [ ] A16. `router.ts` — add 8 imports + 8 entries.
- [ ] A17. `nav.ts` — add 8 entries in the correct categories.
- [ ] A18. Unit specs — 6 vitest files (one per composable).
- [ ] A19. Visual baselines — 8 routes added to `visual-parity.spec.ts`.

## Phase B — Pages 2, 11 (framework 1.6.0 dependency)

- [ ] B1. Wait for framework `1.6.0` release.
- [ ] B2. `composables/usePopover.ts` — wraps `VanduoPopover.init/destroyAll`.
- [ ] B3. `pages/components/Popover.vue` — click/hover/focus + placement + size.
- [ ] B4. `composables/useSearch.ts` — lifecycle hook for the global registry.
- [ ] B5. `pages/interactive/Search.vue` — registry + result shape + source examples.
- [ ] B6. `router.ts` + `nav.ts` — 2 entries.
- [ ] B7. Unit specs (2) + visual baselines (2).

## Phase C — Pages 8, 9 (doc-only, no composable)

- [ ] C1. `pages/components/Template.vue` — page skeleton, hero, split, grid, stack.
- [ ] C2. `pages/components/Navigation.vue` — catalog of nav primitives.
- [ ] C3. `router.ts` + `nav.ts` — 2 entries.
- [ ] C4. Visual baselines (2).

## Phase D — OpenSpec specs (per-capability)

- [ ] D1. `specs/dropdown/spec.md` — 6-8 requirements.
- [ ] D2. `specs/popover/spec.md` — 6-8 requirements.
- [ ] D3. `specs/ripple/spec.md` — 5-7 requirements.
- [ ] D4. `specs/fab/spec.md` — 4-6 requirements.
- [ ] D5. `specs/expanding-cards/spec.md` — 5-7 requirements.
- [ ] D6. `specs/spotlight/spec.md` — 5-7 requirements.
- [ ] D7. `specs/timeline/spec.md` — 4-6 requirements.
- [ ] D8. `specs/template/spec.md` — 4-5 requirements.
- [ ] D9. `specs/navigation/spec.md` — 4-5 requirements.
- [ ] D10. `specs/draggable/spec.md` — 6-8 requirements.
- [ ] D11. `specs/search/spec.md` — 5-7 requirements.
- [ ] D12. `specs/image-box/spec.md` — 4-6 requirements.

## Phase E — Validation

- [ ] E1. `pnpm run lint` clean.
- [ ] E2. `pnpm run stylelint` clean.
- [ ] E3. `pnpm run format:check` clean.
- [ ] E4. `pnpm run typecheck` clean.
- [ ] E5. `pnpm test` — 105 + 8 new = 113 specs green.
- [ ] E6. `pnpm run test:e2e` — 77 + 12 new = 89 specs green.
- [ ] E7. `pnpm run test:size` — < 25 KB gzipped growth.
- [ ] E8. `pnpm pack --dry-run` — expected files ship.