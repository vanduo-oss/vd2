# Proposal: vd-guides

## Why

The docs site has 16 long-form guide articles under
`/docs/sections/guides/` covering everything from getting-started
to security best practices. vd2 had no equivalent — the navbar
linked to placeholder pages. This change moves all 16 guides (plus
one additional "theme customizer" guide unique to vd2) to vd2
SFCs.

## What Changes

### New pages (17)

- `src/pages/guides/GettingStarted.vue` — quickstart from zero.
- `src/pages/guides/FirstLayout.vue` — navbar/main/footer
  composition.
- `src/pages/guides/FrameworkIntegration.vue` — Vue/React/Svelte/
  vanilla integration patterns.
- `src/pages/guides/EsmVsIife.vue` — bundle format selection.
- `src/pages/guides/RuntimeArchitecture.vue` — CSS/JS runtime
  interaction.
- `src/pages/guides/LifecycleManager.vue` — `Vanduo.init/refresh/
  destroy`.
- `src/pages/guides/LazyLoading.vue` — per-component CSS imports.
- `src/pages/guides/CssVariables.vue` — token override patterns.
- `src/pages/guides/ThemeCustomizerGuide.vue` — VdThemeCustomizer
  behavior and persistence.
- `src/pages/guides/Fibonacci.vue` — Fibonacci scale rationale.
- `src/pages/guides/Accessibility.vue` — semantic HTML and ARIA.
- `src/pages/guides/SecurityPractices.vue` — XSS prevention, CSP.
- `src/pages/guides/ProductionBestPractices.vue` — bundle/purge
  patterns.
- `src/pages/guides/MigrationComparison.vue` — Tailwind/Bootstrap/
  Bulma migration maps.
- `src/pages/guides/Troubleshooting.vue` — common issues and fixes.
- `src/pages/guides/UtilitiesCheatSheet.vue` — quick-reference
  tables for spacing/typography/color utilities.
- `src/pages/guides/VanduoEcosystem.vue` — companion projects and
  tools.

### nav.ts and router.ts

- New `Guides` category added with 17 sections.
- `src/router.ts` extended with 17 new page imports and route
  entries.

## Capabilities

### New Capabilities

- `guides`: 17 long-form documentation pages.

### Modified Capabilities

_None._

## Impact

- 17 new pages added; visual-parity spec grows from 60 to 77
  routes.
- No new Vd* components.
- No new framework CSS.
- No remote pushes in this session.

## Out of scope

- Framework repo source edits (none required).
- P2 Canvas/Demos (vd-charts, vd-flowchart, vd-hex, music-player)
  — docs-only, no framework primitives.
- Migrating vd2 to `window.Vanduo` runtime.
- Remote pushes.

## Content scope note

The docs's guides are long (e.g. getting-started is 708 lines).
This change ports the *structure* and *key concepts* of each
guide to a Vue SFC. Full verbatim port of every word is out of
scope; the SFCs serve as a starting point and can be expanded
in follow-up changes.
