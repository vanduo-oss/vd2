## Why

`docs-routing-and-content` shipped a v1 scaffold (13 component pages,
simplified demos) and explicitly deferred "the remaining ~65 sections"
to follow-up changes. The product goal, however, is **1-to-1 visual and
UX parity** with the legacy `docs/` site, page by page — full demo card
sets, working "View Code" snippets, and complete API/class-reference
tables, not placeholder examples. This change owns that parity effort and
is the **single source of truth** for which pages are recreated and to
what fidelity. Pages are ported one batch (nav category) at a time; the
spec/tasks here are updated before the page code is written.

## What Changes

- Rebuild the docs-view shell so pages render inside the legacy chrome:
  `DocsLayout` emits `#docs-view.is-active[data-doc-tab]` →
  `vd-container-responsive` → `doc-sidebar` (Components/Guides water
  toggle, filter, categorized `doc-nav`) + `doc-content`. `VdSidebar`
  rewritten to the `doc-nav-list` / `doc-nav-section` / `doc-nav-link`
  structure driven by `nav.ts`.
- Add `src/components/DocCodeSnippet.vue` — the collapsible "View Code"
  block (HTML/CSS tabs, copy, `data-visible` reveal) reproducing the
  framework's `.vd-code-snippet` behavior without the framework JS.
- Recreate each top-level page (`home`, `docs-landing`, `about`,
  `quick-start`, `changelog`, `kilo-oss`) and each docs section page
  (`pages/components/*.vue`, `pages/core/*.vue`, `pages/guides/*.vue`)
  by porting the matching `docs/sections/**/*.html` verbatim: the same
  `vd-*`/docs class names so the ported `docs.css` styles them for free.
- Keep all demo markup as static framework-class HTML; only interactive
  chrome (snippet toggle/tabs/copy, sidebar toggle) is Vue logic.

## Capabilities

### New Capabilities

- `docs-view-shell`: legacy `#docs-view` layout (sidebar + content) as a
  Vue layout, styled by the ported `docs.css`.
- `doc-code-snippet`: framework-faithful collapsible code viewer.
- `page-parity`: 1-to-1 recreations of the docs pages (tracked in
  `tasks.md`, batch by batch).

### Modified Capabilities

- `page-content` (from `docs-routing-and-content`): v1 placeholder pages
  are replaced by full 1-to-1 recreations.
- `app-shell`: `VdSidebar`/`DocsLayout` move from `vd-docs-*` classes to
  the legacy `doc-sidebar`/`doc-content` classes.

## Impact

- `src/layout/DocsLayout.vue`, `src/layout/VdSidebar.vue` rewritten;
  `src/components/DocCodeSnippet.vue` added.
- `src/pages/**/*.vue` rewritten page by page (see `tasks.md`).
- No new runtime deps; parity is enforced by class composition + the
  ported `docs.css`. Each batch ends with `vue-tsc`, `vitest`, and
  `vite-ssg build` green plus a Playwright visual check vs `:8787`.
- Outdated unit specs (footer/search/theme) updated as their pages
  change; component-primitive specs from `core-components` are untouched.
