# Design: three-layer CSS model

## The three layers

The framework's CSS file (`framework/dist/vanduo.min.css`) and vd2's
`src/styles/app.css` together implement a three-layer CSS model. Today,
the boundary between layer 2 and layer 3 is fuzzy because layer 2 (the
framework's layout primitives) is partially missing. This change fills
layer 2 in.

```
┌────────────────────────────────────────────────────────────────┐
│ Layer 3: consumer overrides                                    │
│   vd2/src/styles/app.css (Zone 1)                              │
│   - .vd-app, .vd-app-main, .vd-visually-hidden                 │
│   - .vd-docs-layout, .vd-search-result                         │
└────────────────────────────────────────────────────────────────┘
                            ▲ cascade: app.css loaded last
┌────────────────────────────────────────────────────────────────┐
│ Layer 2: framework layout primitives   ← THIS CHANGE           │
│   framework/css/components/navbar.css                          │
│     .vd-navbar-container, .vd-navbar-nav, .vd-nav-link,        │
│     .vd-navbar-brand, .vd-navbar-brand-mark,                   │
│     .vd-navbar-brand-name                                      │
│   framework/css/components/footer.css                          │
│     .vd-footer-container, .vd-footer-list                      │
│   framework/css/components/dropdown.css                        │
│     .vd-dropdown-menu, .vd-dropdown-item,                      │
│     .vd-dropdown-menu-end                                      │
│   framework/css/core/typography.css                            │
│     .vd-display, .vd-lead                                      │
│   framework/css/utilities/spacing.css (new)                    │
│     .vd-pad-xs, .vd-pad-sm, .vd-pad-md, .vd-pad-lg,            │
│     .vd-pad-xl, .vd-pad-2xl, .vd-pad-3xl,                      │
│     .vd-pad-4xl, .vd-pad-5xl                                   │
└────────────────────────────────────────────────────────────────┘
                            ▲ cascade: framework layer 1
┌────────────────────────────────────────────────────────────────┐
│ Layer 1: framework primitives (existing)                       │
│   framework/css/core/typography.css, framework/css/core/colors │
│   framework/css/components/buttons.css, framework/css/components│
│     /forms.css, /cards.css, /modals.css, /tabs.css, ...        │
│   framework/css/primitives/primitives.css                      │
│     (vd-stack, vd-center, vd-inline, vd-container)             │
│   All tokens: --vd-color-*, --vd-space-*, --vd-radius-*,       │
│               --vd-navbar-*, --vd-footer-*, --vd-font-*        │
└────────────────────────────────────────────────────────────────┘
```

## Cascade ordering convention

1. Framework primitives (layer 1) — already loaded by
   `vd2/src/main.ts:5` via `import '@vanduo-oss/framework/css'`.
2. Framework layout primitives (layer 2) — same single bundle as layer 1
   after Part B lands; vd2 sees no import change.
3. Consumer overrides (layer 3) — `vd2/src/main.ts:6`
   `import './styles/app.css'`. Loaded last, so vd2-specific overrides
   win cascade ties.

The split inside `app.css` (Zone 1 vs Zone 2) reflects a *temporary*
two-layer collapse that this change unwinds: Zone 2 will be deleted once
Part B lands and vd2 bumps the framework dep.

## Impact on `app.css` size

- This PR: `src/styles/app.css` grows from 63 lines (HEAD) to ~142 lines
  because Zone 2 is added (net-new transitional CSS, not a deletion).
  See `tasks.md:1.6` and the W1 review note for the corrected
  framing.
- After Part B ships and vd2 bumps its dep: Zone 2 (~60 lines) is
  deleted, returning the file to roughly its pre-PR size plus Zone 1
  additions for the truly vd2-specific helpers (`vd-app`,
  `vd-app-main`, `vd-visually-hidden`, `vd-docs-layout`,
  `vd-search-result`).

## Migration table

### Part A — Class renames (already done in this PR)

The renames activate framework rules the prior local classes did not
match. See the "Notable cascade changes" subsection in `proposal.md`.
The Playwright visual-parity spec was re-baselined post-rename (Track
2 of the prior planning session).

| vd2 class (was) | Framework class (now) | File edited |
|---|---|---|
| `vd-navbar-inner` | `vd-navbar-container` | `src/layout/VdNavbar.vue:25` |
| `vd-navbar-links` | `vd-navbar-nav` | `src/layout/VdNavbar.vue:29` |
| `vd-navbar-link` | `vd-nav-link` | `src/layout/VdNavbar.vue:35` |
| `vd-footer-inner` | `vd-footer-container` | `src/layout/VdFooter.vue:10` |
| `vd-footer-links` | `vd-footer-list` | `src/layout/VdFooter.vue:14` |
| `vd-menu` | `vd-dropdown-menu` | `src/overlays/VdThemeSwitcher.vue:29` |
| `vd-menu-item` | `vd-dropdown-item` | `src/overlays/VdThemeSwitcher.vue:43` |
| `vd-menu-end` | `vd-dropdown-menu-end` | `src/overlays/VdThemeSwitcher.vue:29` |

### Part B — New framework selectors (cross-repo, Out of Scope)

| New selector | File to add it to | Notes |
|---|---|---|
| `vd-navbar-brand-name` | `framework/css/components/navbar.css` | `font-size: var(--vd-navbar-brand-font-size); font-weight: var(--vd-font-weight-bold); color: var(--vd-navbar-link-color); line-height: 1;` |
| `vd-navbar-brand-mark` (optional) | `framework/css/components/navbar.css` | Square brand badge. vd2 can alternatively refactor `VdNavbarBrand.vue` to render an `<img>` and drop the rule. |
| `vd-display` | `framework/css/core/typography.css` | `font-size: clamp(2.125rem, 4vw + 1rem, 3.4375rem); line-height: 1.15; font-weight: var(--vd-font-weight-bold); letter-spacing: -0.02em;` |
| `vd-lead` | `framework/css/core/typography.css` | `font-size: clamp(1rem, 0.5vw + 0.9rem, 1.3125rem); line-height: 1.5; color: var(--vd-text-secondary);` |
| `vd-pad-xs` … `vd-pad-5xl` | `framework/css/utilities/spacing.css` (new file) | Symmetric padding scale, sized off `--vd-space-fib-{3,5,8,13,21,34,55,89,144}`. |

## Open question (resolved during A.2)

- Does `vd-dropdown-menu-end` exist in the framework bundle? **Yes.**
  Verified via `grep` on `framework/dist/vanduo.min.css`. Part A's
  `vd-menu-end` → `vd-dropdown-menu-end` rename is in scope; no
  framework work needed for that selector.

## Open question (carry into framework work)

- Should `vd-navbar-brand-mark` ship as a new framework selector, or
  should the SFC refactor to use `<img>`? Default to "ship the
  selector" for API symmetry with `vd-navbar-brand-name`; revisit if
  the framework owner prefers the image-only approach.
