## ADDED Requirements

### Requirement: page-content-renders-component
Each `/components/<id>` page MUST render the matching `Vd*` component as a working demo inside `DocsLayout`.

#### Scenario: button page renders VdButton
- **WHEN** the user visits `/components/button`
- **THEN** the page renders `DocsLayout`, the heading "Button", and at least one `<VdButton>` element

#### Scenario: code-snippet page renders VdCodeSnippet
- **WHEN** the user visits `/components/code-snippet`
- **THEN** the page renders a `<VdCodeSnippet>` with sample code

### Requirement: top-level-pages-render
Each top-level page (`/`, `/about`, `/changelog`, `/kilo-oss`, `/docs-landing`, `/quick-start`) MUST render with the navbar and footer.

#### Scenario: about page renders
- **WHEN** the user visits `/about`
- **THEN** the page contains the navbar, an "About" heading, and the footer

### Requirement: section-pre-rendered
Every section page MUST be pre-rendered to a static HTML file by `vite-ssg`.

#### Scenario: dist contains section html
- **WHEN** `pnpm run build` completes
- **THEN** `dist/components/<id>/index.html` exists for every section in `nav.ts`