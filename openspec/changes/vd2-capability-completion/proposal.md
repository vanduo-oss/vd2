# vd2 Capability Completion — Proposal

## Why

`docs/` (legacy vanilla SPA) documents 12 component / utility pages that vd2
does not yet implement. Until they exist, vd2 cannot fully replace docs at
vanduo.dev. This change transfers the missing pages into vd2 with full Vue 3
support, mirroring the v0.2.0 capability-transfer pattern (see
`openspec/changes/vd-layout-navigation/`, `vd-data-display/`,
`vd-interactive-forms/`).

## What

Twelve new pages:

| # | Page route | New composable | Source framework version |
|---|---|---|---|
| 1 | `/components/dropdown` | `useDropdown.ts` | 1.5.1 |
| 2 | `/components/popover` | `usePopover.ts` | **1.6.0** |
| 3 | `/components/ripple` | `useRipple.ts` | 1.5.1 |
| 4 | `/components/fab` | none (CSS-only) | 1.5.1 |
| 5 | `/components/expanding-cards` | `useExpandingCards.ts` | 1.5.1 |
| 6 | `/components/spotlight` | `useSpotlight.ts` | 1.5.1 |
| 7 | `/components/timeline` | `useTimeline.ts` | 1.5.1 |
| 8 | `/components/template` | none (markup only) | 1.5.1 |
| 9 | `/components/navigation` | none (catalog) | 1.5.1 |
| 10 | `/interactive/draggable` | `useDraggable.ts` | 1.5.1 |
| 11 | `/interactive/search` | `useSearch.ts` | **1.6.0** |
| 12 | `/media/image-box` | `useImageBox.ts` | 1.5.1 |

For pages 2 and 11, vd2 depends on the new `popover` component and the new
`search` helper shipped with framework `1.6.0` (see framework change folders
`framework-popover-component/` and `framework-search-helper/`).

## Scope

In scope:

- The 12 pages, each with: intro + live demo card(s) + code snippet + API table + accessibility notes.
- 8 new composables that wrap the framework globals (`VanduoFoo.init` / `destroyAll`).
- Router + nav wiring.
- Unit specs (vitest, jsdom) for each new composable.
- Visual parity baselines (Playwright) for each new route.
- OpenSpec specs/ folder with per-capability spec.md files.

Out of scope:

- Changes to the framework CSS or JS bundle itself (handled by the framework
  change folders).
- New tokens in `@vanduo-oss/core`.
- Deprecating or removing `docs/` (handled in a separate cutover change).

## Rollout

PR 1 (framework):
- framework `1.6.0` ships `popover` component + `search` helper.
- Land in framework repo; release to CDN.

PR 2 (vd2, no framework 1.6.0 dep):
- Pages 1, 3, 4, 5, 6, 7, 8, 9, 10, 12.
- 6 new composables + 10 router/nav entries + 10 unit specs + 10 visual baselines.

PR 3 (vd2, depends on framework 1.6.0):
- Pages 2 (popover) + 11 (search).

PR 4 (vd2, doc-only):
- Pages 8 (template) + 9 (navigation). Landed after the framework PR.

After all PRs land: bump vd2 to `0.3.0`, run the full Playwright matrix,
verify the bundle-size budget (< 25 KB gzipped growth), and cut over
vanduo.dev to vd2 (separate change).