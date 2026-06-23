# Proposal: promote layout primitives into the framework

## Why

vd2 currently ships a `src/styles/app.css` of ~140 lines that defines
layout primitives the framework package does not provide. These rules
were authored in this repo because:

- vd2's SFCs use a layout vocabulary (navbar inner row, footer inner
  row, display heading, lead paragraph, padding scale, dropdown menu)
  that the published `@vanduo-oss/framework@1.5.1` bundle does not
  cover.
- The classes the docs site uses (`vd-navbar-container`, `vd-navbar-nav`,
  `vd-nav-link`, `vd-footer-container`, `vd-footer-list`,
  `vd-dropdown-menu`, `vd-dropdown-item`, `vd-dropdown-menu-end`)
  are similar in spirit but slightly different in name from the
  classes vd2 originally authored.
- `docs/css/app.css` is a docs-specific overlay (dark-mode scrollbars,
  `data-font=*` theme picker, copy-tooltip micro-interaction) and does
  **not** contain the layout primitives either.

Result: any future framework consumer that wants a working shell has to
reverse-engineer vd2's CSS. The framework is not self-sufficient for
the most common docs-and-marketing-site use case.

This change promotes the missing primitives into the framework package
so the framework is self-sufficient, vd2's local CSS shrinks back to
true vd2-specific overrides, and the docs site can clean up its own
overlay.

## What Changes

Two parts, executed in order:

### Part A — Class renames in vd2 (vd2-only)

Renames in vd2 SFCs to use the framework's existing vocabulary. These
are not "pure" renames in the strict sense — switching to the framework
vocabulary activates framework rules the prior local classes did not
match. The Playwright visual-parity spec (Track 2) re-baselines the
post-rename output. Notable cascade changes:

- `vd-navbar-link` → `vd-nav-link` activates the framework rule
  `padding: 0.5rem 1rem; display: block` (navbar nav links gain padding
  and become block-level).
- `vd-footer-links` → `vd-footer-list` activates the framework rule
  `list-style: none; padding: 0; margin: 0` (footer link list loses
  bullet markers and default `<ul>` indentation).

Other renames in the table below are visually equivalent to the prior
local classes (framework rules match the prior intent).

| vd2 class (current) | Framework class (target) |
|---|---|
| `vd-navbar-inner` | `vd-navbar-container` |
| `vd-navbar-links` | `vd-navbar-nav` |
| `vd-navbar-link` | `vd-nav-link` |
| `vd-footer-inner` | `vd-footer-container` |
| `vd-footer-links` | `vd-footer-list` |
| `vd-menu` | `vd-dropdown-menu` |
| `vd-menu-item` | `vd-dropdown-item` |
| `vd-menu-end` | `vd-dropdown-menu-end` |

All eight target classes are already in `framework/dist/vanduo.min.css`.
No framework work required for Part A. **Already implemented in this
PR** (see `tasks.md` Part A).

### Part B — New framework primitives (cross-repo, Out of Scope)

New selectors to author in the framework package:

| New selector | Target file | Notes |
|---|---|---|
| `vd-navbar-brand-name` | `framework/css/components/navbar.css` | Text sibling of the brand mark. |
| `vd-display` | `framework/css/core/typography.css` | Hero heading. |
| `vd-lead` | `framework/css/core/typography.css` | Sub-hero body. |
| `vd-pad-xs` … `vd-pad-5xl` | `framework/css/utilities/spacing.css` (new) | Symmetric padding scale. |
| `vd-navbar-brand-mark` | `framework/css/components/navbar.css` | Square brand badge. (Optional — vd2 could refactor to `<img>`.) |

Part B is **cross-repo work** in the `framework` repo on a
`dev-v160-vd2-compatible` branch. See `tasks.md` `## Out of Scope`.

## Capabilities

- **New:** `layout-primitives`.
- **Modified:** none.

## Impact

- Framework bundle grows by an estimated 5–10 KB gzipped (Part B).
- Existing framework consumers see strictly additive selectors (no
  behavior change for any class that exists today).
- vd2's `src/styles/app.css` grows by ~80 lines in this PR (Zone 2:
  transitional overrides for primitives the framework does not yet
  ship). Once Part B's primitives land and vd2 bumps its dep, the
  file shrinks by ~60 lines as Zone 2 is deleted. Zone 2 carries an
  explicit comment marking it as debt.
- Docs site: a follow-up PR can clean up the redundant layout rules
  in `docs/css/app.css`. Not in scope for this change.
- Cross-repo coordination: Part B requires a framework release (target
  `1.6.0`). Until that lands, vd2 carries the bridge CSS as known debt.
- Visual regression net: vd2's Playwright spec (`tests/e2e/visual-parity.spec.ts`)
  catches any cascade drift at the 3% pixel-diff threshold.

## Out of scope

- Framework-package source edits in this session (Part B). Separate
  repo, separate branch, separate push decision by the user.
- Porting `vanduo-charts.css`, `vanduo-flowchart.css`,
  `vanduo-music-player.css` to vd2.
- Migrating vd2 to the framework's runtime (`window.Vanduo`).
- Remote pushes (any repo). Local-only work until the user signals
  "ready."
