# Vanduo — Security Audit (Wave 2)

_Date: 2026-06-25. Scope: the **framework** runtime (`framework/js/**`, ~14k LOC, the published JS that executes inside third-party pages) and **vd2**'s mirrored composables/components (`vd2/src/**`)._

## Method & threat model

Static review of every dangerous sink: DOM HTML injection (`innerHTML` / `outerHTML` / `insertAdjacentHTML` / `document.write`), code execution (`eval` / `new Function` / string timers), URL/attribute injection (`javascript:`, `location`/`href`/`src`), prototype pollution (deep merge / `__proto__`), and `postMessage`. Both engines share a DOM/CSS contract; the risk the user flagged is that vd2's re-implementations might **drop a security control** the framework has.

Threat model for a design-system library: the consuming **developer** feeds component inputs that may originate from their end-users (toast messages, tooltip content, autocomplete items, tree/table data, search results). A sink that injects those unescaped is a DOM-XSS hole **in the consumer's app**. So the bar is: caller data must be escaped or sanitized.

## Summary

| # | Finding | Component | Severity | Status |
|---|---|---|---|---|
| 1 | `data-tooltip-html` assigned raw to `innerHTML` (no sanitize) — framework sanitizes the same path | vd2 `useTooltips.ts` | **Medium** | ✅ **Fixed** |
| 2 | `escapeHtml` escapes `< > &` but not quotes, yet is used in **attribute** context | framework `helpers.js` + `doc-search.js`, `theme-customizer.js` | Low (latent) | ✅ **Fixed** (framework `7bb0488`) |
| 3 | `sanitizeHtml` default `allowStyle: true` | framework `helpers.js` | Low | ✅ **Fixed — default-deny** (framework `ca7b1e3`) |

No high-severity / exploitable-today issues found. The framework's security posture is **good** — see "Not vulnerable" below.

## Finding 1 — vd2 useTooltips raw innerHTML (FIXED)

`vd2/src/composables/useTooltips.ts` read the `data-tooltip-html` attribute and did `tip.innerHTML = html` with **no sanitization**. The framework's `tooltips.js` runs the same attribute through `sanitizeHtml(..., { allowStyle: false })`. A consumer binding `:data-tooltip-html` to user-controlled data would be XSS-safe on the framework engine but **vulnerable on vd2** — exactly the "mirror lost a control" risk.

**Fix:** added `vd2/src/utils/sanitizeHtml.ts` (dependency-free TS port of the framework's whitelist sanitizer; SSR-safe — falls back to escaped text when `DOMParser` is absent; `style` denied by default) and routed `useTooltips` through it. Covered by `vd2/tests/unit/sanitize.spec.ts` (strips `<script>`, removes event-handler attrs, neutralizes `<img onerror>`, blocks `javascript:` href, denies `style` by default). The docs site itself was never exploitable (author-controlled attributes), but the published composable now matches the framework.

## Finding 2 — `escapeHtml` is not attribute-safe (recommend)

`framework/js/utils/helpers.js`:

```js
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;             // escapes < > &  —  NOT " or '
}
```

This is correct for **text** context (e.g. toast message between `<div>…</div>` ✓) but it's also used in **attribute** context:

- `doc-search.js:615` — `data-category="' + escapeHtml(result.categorySlug) + '"'`
- `doc-search.js:619` — `class="ph ' + escapeHtml(icon) + '"`
- `theme-customizer.js:575-593` — `title="${esc(value.name)}"`, `data-color="${esc(key)}"`, `value="${esc(key)}"`

A value containing `"` would break out of the attribute. **Not exploitable today** — those values are `slugify()`-ed or come from static config (and the customizer already uses a separate `safeColor()` for the CSS `style` value, correctly). But the escaper is the wrong tool for the job. Recommended one-line hardening that closes the whole class regardless of input:

```js
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
```

**✅ Applied** in framework commit `7bb0488` — hardened both the global `helpers.js` `escapeHtml` (used by theme-customizer) and doc-search's local `escapeHtml` (used for its `data-category=`/`class=` interpolations). Browser-rendered text is unchanged. **Verified in Chromium** (helpers + doc-search + code-snippet specs green). dist bundles were rebuilt + staged by the repo's pre-commit hook.

## Finding 3 — `sanitizeHtml` now denies `style` by default (✅ FIXED, breaking)

`helpers.js` previously defaulted `allowStyle` **on**. Inline `style` can't run JS but enables CSS-based exfiltration / clickjacking on attacker-supplied HTML.

The previous default was deliberate — `helpers.spec.ts` asserted *“preserves inline styles by default for compatibility.”* **Per the security-first decision, we flipped it anyway** (`framework ca7b1e3`): `allowStyle` now defaults to `false`; callers needing rich styling pass `{ allowStyle: true }`. The test was updated to assert the secure default (strips `style`) plus a new case that `{ allowStyle: true }` still keeps it.

- **Breaking:** any external caller relying on default-kept `style` must now opt in. All in-tree callers (`tooltips.js`, `bubble.js`, `toast.js`) already pass `allowStyle: false`; vd2's port already defaulted deny — so the two engines now **agree**.
- **Verified in Chromium:** 73 helpers/doc-search/code-snippet + 45 tooltip/toast/bubble tests pass.

## Not vulnerable (positive assurance)

- **No `eval`, `new Function`, or string `setTimeout`/`setInterval`** anywhere in either codebase.
- **No `postMessage` / message listeners** (no cross-origin message surface).
- **Caller-data sinks escape or use textContent:** `toast` (escapes title/message; sanitizes custom icon), `doc-search` (escapes all fields; `highlight()` escapes then inserts a normalized tag), `suggest` (pure `createTextNode`/`textContent`), `validate` (`textContent`), `tree` (`textContent` labels), `pagination` (`Number(page)` coercion). vd2 mirrors all of these safely.
- **Most `innerHTML` writes are `= ''` (clearing) or static HTML entities** (`&times;`, `&#8249;`).
- **`lazy-load.js` already screens `javascript:` URLs.**
- **vd2 `v-html` uses** are first-party/static only: `VdToast` v-html is a hardcoded `ICONS` map keyed by an enum (message/title use `{{ }}`); `GlobalSearchModal.highlight()` escapes every slice; changelog and docs API-table `v-html` render first-party static strings. A guide (`SecurityPractices.vue`) documents the "trusted v-html only" rule.
- **Supply chain:** every `.npmrc` is hardened (`ignore-scripts`, `minimum-release-age`, `trust-policy`, `block-exotic-subdeps`, `save-exact`); no secrets committed; framework CI runs `pnpm audit`.

## Recommended follow-ups (cheap, defense-in-depth)
- Apply Findings 2 & 3 to the framework (small, with test updates).
- Add a `pnpm audit` gate to vd2 / docs CI (only framework has it today).
- Pin GitHub Actions to commit SHAs; add Dependabot; publish libraries with `--provenance`.
- Consider documenting in the framework/vd2 READMEs that `*-html` inputs are sanitized with a small whitelist (not a full DOMPurify) so consumers calibrate trust.
