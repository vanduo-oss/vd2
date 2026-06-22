## Context

After landing `app-shell` we have the chrome (navbar, footer, sidebar,
search, theme) and a typed `nav.ts` enumerating 13 v1 sections across
four categories: Core (Button, Badge, Alert, Card), Feedback (Modal,
Toast, Tooltip), Interactive (Tabs, Accordion, Flow), and Primitives
(Progress, Spinner, CodeSnippet, Icon). The plan locks this list at v1
to prevent scope drift toward porting all 47+ framework components.

Every component composes only `.vd-*` framework classes from
`@vanduo-oss/framework` (no scoped `<style>` blocks, no Tailwind, no
CSS modules). Props are typed via `defineProps<T>()` and events via
`defineEmits<T>()`. Each component ships with a Vitest spec covering
props and events. Playwright e2e specs for keyboard/ARIA behavior land
as TODO slots for the implementation phase; at minimum, a smoke spec
asserts the component renders.

## Goals / Non-Goals

**Goals:**

- 13 v1 components under `src/components/` with typed props/events
  composing `.vd-*` classes.
- 7 layout primitives under `src/components/primitives/`: VdBox,
  VdStack, VdInline, VdCenter, VdFrame, VdCover, VdSwitcher.
- Each component has a Vitest spec asserting props and emit behavior.
- The component contracts match the visual language of
  `docs/sections/components/*.html` without duplicating the framework
  runtime.

**Non-Goals:**

- Porting the remaining ~30 components (DatePicker, Rating, TreeView,
  Transfer, Spotlight, MusicPlayer, FontSwitcher, GridToggle,
  DocSearch, etc.) — those are follow-up changes.
- Authoring demo pages — those land in `docs-routing-and-content`.
- Authoring Playwright specs beyond a smoke spec for the v1 launch.
  Each component gets a placeholder e2e spec to be filled in.

## Decisions

- **`VdButton`** — primary/secondary/ghost variants via the
  `variant` prop. Uses `<button>` element under the hood.
- **`VdBadge`** — pill rendering with `variant` (default, success,
  warning, danger).
- **`VdAlert`** — wraps framework alert classes; `dismissible` prop
  emits `dismiss`.
- **`VdCard`** — header/body/footer slots.
- **`VdModal`** — teleports to body, uses `useFocusTrap`. `v-model:open`
  two-way binding plus `close` emit.
- **`VdToast`** — imperative API via `provide/inject` with a queue
  store. `show(message, opts)` returns a dismiss handle.
- **`VdTooltip`** — `<span>` wrapper with `data-tooltip` attribute
  matching the framework convention.
- **`VdTabs`** — `v-model` for active tab id, `tabs` prop array.
- **`VdAccordion`** — `v-model` for open ids array (multi) or single
  id (exclusive via `exclusive` prop).
- **`VdFlow`** — carousel with `prev`/`next`/`go(index)` methods
  exposed via `defineExpose`.
- **`VdProgress`** — `value` (0–100), `indeterminate` prop.
- **`VdSpinner`** — `size` prop (sm/md/lg).
- **`VdCodeSnippet`** — wraps a `<pre><code>` with a copy-to-clipboard
  affordance and the framework's `.vd-code-snippet` classes.
- **Layout primitives** — VdBox (block), VdStack (vertical),
  VdInline (horizontal), VdCenter (centered), VdFrame (border),
  VdCover (aspect-ratio cover), VdSwitcher (responsive stack/inline
  based on breakpoint).

## Risks / Trade-offs

- **`VdToast`'s imperative API**: the framework's toast is a
  imperative DOM helper. Recreating that surface in Vue requires a
  small Pinia store and a `<VdToastContainer>` mounted at the app
  root. The store exposes `show(message, opts)` returning a
  dismiss handle, which matches the imperative ergonomics.
- **`VdFlow` keyboard nav**: full carousel keyboard support (arrows,
  Home/End) is non-trivial. v1 ships ArrowLeft/Right only; Home/End
  is a follow-up.
- **Layout primitive contracts** are Vue-specific wrappers around
  `.vd-box`, `.vd-stack`, etc. The plan calls these "primitives
  separate folder" — they're not visual components per se, but
  Vue-flavored shortcuts that compose framework classes.