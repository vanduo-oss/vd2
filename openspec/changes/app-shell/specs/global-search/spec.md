## ADDED Requirements

### Requirement: global-search-modal-opens
A trigger in `VdNavbar` MUST open the `GlobalSearchModal`. The modal
MUST trap focus, close on Escape, and navigate to the selected result
on Enter.

#### Scenario: search trigger opens modal
- **WHEN** the user clicks the search trigger in the navbar
- **THEN** `GlobalSearchModal` becomes visible and focus moves to
  the input

#### Scenario: escape closes modal
- **WHEN** the modal is open and the user presses Escape
- **THEN** the modal closes and focus returns to the trigger

### Requirement: search-index-from-nav
`useGlobalSearch` MUST build its index from the typed `nav.ts` export
covering every route's `title` and `keywords`.

#### Scenario: search by title
- **WHEN** the user types "but"
- **THEN** results include any section whose title or keywords
  contain "but" (e.g. "Button")

#### Scenario: search by keyword
- **WHEN** the user types a keyword that appears only in a section's
  `meta.keywords` (e.g. "modal", "dialog")
- **THEN** that section appears in the results

### Requirement: search-results-navigable-by-keyboard
Arrow keys MUST move the active result; Enter MUST navigate to that
result's route.

#### Scenario: arrow down moves active result
- **WHEN** the modal is open with 3 results and the active result is
  the first
- **THEN** pressing ArrowDown moves the active result to the second