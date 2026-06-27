# Palette selector (vd2) — Spec

## Requirements

### R1 — Fibonacci is the default palette in the docs

The docs site SHALL apply the Fibonacci palette by default.

#### Scenario: default applied on load
- **Given** no stored `vanduo-palette` preference
- **When** the theme store initializes
- **Then** `document.documentElement` has `data-palette="fibonacci"`
  (core's `DEFAULTS.PALETTE`)

### R2 — Live palette switching

Visitors SHALL be able to switch palettes from the theme customizer.

#### Scenario: switch to Open Color
- **Given** the theme customizer is open
- **When** the visitor selects the Open Color palette
- **Then** `data-palette="open-color"` is set on the root
- **And** the choice persists under `vanduo-palette` across reloads

### R3 — Docs lead with Fibonacci

The color documentation SHALL present Fibonacci as the default and Open
Color as optional.

#### Scenario: color-palette page
- **Given** `/core/color-palette`
- **Then** the primary palette content describes the Fibonacci
  (golden-angle) palette and the golden accent track
- **And** an Open Color section is present and labeled optional

#### Scenario: home page
- **Given** the home page palette section
- **Then** it presents the Fibonacci palette as the framework default
  with Open Color referenced as optional
