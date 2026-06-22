## ADDED Requirements

### Requirement: project-scaffold
The vd2 package MUST provide a `package.json` declaring it as the
`@vanduo-oss/vd2` package, an ESM module, pnpm-managed via
`packageManager: "pnpm@10.28.2"`, and Node engine `>=20`. It MUST include
the scripts `dev`, `build`, `preview`, `lint`, `typecheck`, `test`,
`test:e2e`, and `format`.

#### Scenario: package.json declares correct metadata
- **WHEN** `pnpm run` is invoked without arguments
- **THEN** it lists the documented scripts (dev, build, preview, lint,
  typecheck, test, test:e2e, format)

#### Scenario: pnpm is the package manager
- **WHEN** a contributor runs `corepack enable && pnpm install`
- **THEN** pnpm 10.28.2 is provisioned and installs succeed without
  prompting

### Requirement: npm-config-mirrors-framework
The `.npmrc` file MUST mirror `framework/.npmrc` verbatim, including:
`registry=https://registry.npmjs.org/`, `save-exact=true`,
`ignore-scripts=true`, `minimum-release-age=1440`,
`trust-policy=no-downgrade`, `block-exotic-subdeps=true`, and
`strict-peer-dependencies=true`.

#### Scenario: hardened install policy
- **WHEN** a contributor runs `pnpm install`
- **THEN** packages younger than 24h are rejected, scripts are not
  executed, and the resolved tree is deterministic to the pinned version

### Requirement: type-checked Vue tooling
The project MUST include a `tsconfig.json` strict enough to catch
null/undefined errors, with `moduleResolution: "bundler"`,
`paths: { "@/*": ["src/*"] }`, and a separate `tsconfig.node.json` for
Vite/Playwright configs.

#### Scenario: vue-tsc passes
- **WHEN** `pnpm run typecheck` runs
- **THEN** `vue-tsc --noEmit` exits with status 0

### Requirement: lint-and-test-configs
The project MUST include flat ESLint config, Stylelint config (scoped to
`src/styles/app.css`), Vitest config (`environment: "jsdom"`), and
Playwright config (preview server on port 8787).

#### Scenario: lint passes
- **WHEN** `pnpm run lint` runs
- **THEN** ESLint exits with status 0

#### Scenario: vitest boots
- **WHEN** `pnpm test` runs
- **THEN** Vitest starts in jsdom mode without configuration errors

#### Scenario: playwright config is valid
- **WHEN** `pnpm exec playwright test --list` runs
- **THEN** it lists the configured projects without errors