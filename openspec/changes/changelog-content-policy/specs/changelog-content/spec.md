## ADDED Requirements

### Requirement: changelog-documents-packages-only
The changelog MUST document only code / release changes to the published Vanduo
packages: `@vanduo-oss/core`, `@vanduo-oss/framework`, `@vanduo-oss/vue`,
`@vanduo-oss/charts`, `@vanduo-oss/hex-grid`, `@vanduo-oss/music-player`,
`@vanduo-oss/flowchart`.

#### Scenario: a package feature is logged
- **WHEN** `@vanduo-oss/framework` ships a new component or API
- **THEN** the changelog has an entry under that package describing the API / behaviour change

#### Scenario: a docs-site change is NOT logged
- **WHEN** the vd2 docs site adds a docs page, the search modal, a sidebar filter, an SEO/meta tag, `sitemap.xml`/`robots.txt`, a CI/Playwright job, or a visual upgrade to the docs UI
- **THEN** the changelog has NO entry for it

### Requirement: mixed-entries-keep-only-the-package-part
An entry that references both a package change and a docs-site detail MUST keep
only the package change.

#### Scenario: trimming a docs-site clause
- **WHEN** an entry reads "added X to the framework; see the new X docs page"
- **THEN** the entry keeps "added X to the framework" and drops "see the new X docs page"

### Requirement: release-blocks-are-engine-tagged
Each release block MUST carry a `data-engine` attribute so the strict per-engine
filter shows it in the right view: `vanilla` for framework-engine releases,
`vue3` for `@vanduo-oss/vue`, and a space-separated `vanilla vue3` for shared
releases. Per-package columns within a multi-package card MAY override their
card's tag.

#### Scenario: framework release hidden in the Vue 3 view
- **WHEN** the active engine is Vue 3
- **THEN** a card or column tagged `data-engine="vanilla"` is hidden

#### Scenario: shared release shows in both views
- **WHEN** a card is tagged `data-engine="vanilla vue3"`
- **THEN** it is visible in both the Vanilla and Vue 3 views

### Requirement: docs-and-guides-teach-usage
Guides and documentation prose MUST teach how to USE the packages (API, patterns,
behaviour). The docs site's own implementation (its CI, SEO, build pipeline, or
internal-only CSS) is NOT release content and MUST NOT be presented as such.

#### Scenario: a guide documents a package API
- **WHEN** a guide explains a component or composable
- **THEN** it describes the package's public API and usage, not the docs site's internal wiring
