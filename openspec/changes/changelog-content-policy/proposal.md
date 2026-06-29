## Why

The aggregated changelog rendered by the vd2 docs site had accumulated ~1,480
lines of documentation-SITE content — new docs pages, the global search modal,
sidebar filters, SEO / sitemap / robots, glass visual upgrades, Playwright / CI
notes, and `vd2 consumes framework at file:../framework` pinning. The changelog
must be a release log for the published **packages**, not a log of the docs site
that renders it. Readers open the changelog to learn what changed in the code
they install; mixing in docs-site churn is noise and erodes trust.

## What Changes

- Establish a single content policy: the changelog documents code / release
  changes to the published packages ONLY — `@vanduo-oss/core`,
  `@vanduo-oss/framework`, `@vanduo-oss/vue`, and the separately-installed
  ecosystem packages `@vanduo-oss/charts`, `@vanduo-oss/hex-grid`,
  `@vanduo-oss/music-player`, `@vanduo-oss/flowchart`. It never documents changes
  to the documentation site (vd2) itself.
- Purge existing docs-site content from `src/pages/changelog-content.html` and
  rewrite the latest card to describe the package release ("Cool Breeze I" —
  framework 1.7.0 / vue 0.3.0 / charts 0.2.0) instead of the docs site.
- State a lightweight scope guideline for guides / documentation prose too:
  teach how to USE the packages; the docs site's own implementation (its CI,
  SEO, build, internal CSS) is out of scope as "release" content.

## Capabilities

### New Capabilities

- `changelog-content` — what the changelog may and may not contain, and how
  release blocks are engine-tagged for the strict per-engine filter.
