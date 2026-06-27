# Search

## Purpose

Catalog page for the framework's `VanduoSearch` registry. Documents how
consumers register named data sources and how overlays consume them.

## Requirements

### Requirement: Registry global

`VanduoSearch` SHALL be exposed as a global with `register`, `unregister`,
`list`, and `query` methods (provided by framework `1.6.0`).

### Requirement: Source shape

A registered source SHALL have `name`, optional `label`, optional `icon`,
optional `limit`, and a `fetch(query, opts) => Promise<Result[]>` function.

### Requirement: Result shape

A result SHALL have `title`, optional `subtitle`, `href`, optional `group`,
and optional `icon`.

### Requirement: Source registration validation

`register(source)` SHALL throw on duplicate `name`, missing `name`, or
missing `fetch`.

### Requirement: Query fan-out

`query(text)` SHALL run every registered source in parallel and resolve to
`{ text, sources }` where each source's `results` array contains the
results from that source.

### Requirement: Empty-query short-circuit

When the trimmed query is empty, `query()` SHALL resolve without calling
any source's `fetch`.

### Requirement: Per-source error capture

A source's `fetch` rejection SHALL be captured as `sources[i].error`
without rejecting the whole `query()` promise (except for `AbortError`).

### Requirement: Per-source limit

The system SHALL pass `limit` to each `fetch` call. The limit defaults to
the source's `limit` (or 10 if unset). `options.limitPerSource` overrides
per-query.

### Requirement: Lifecycle integration

`useSearch(root)` SHALL warm up the global on mount and be a no-op on
unmount (registry is process-global).

### Requirement: Documentation-only

The search page SHALL document the registry and source shape but SHALL NOT
ship its own overlay UI (vd2's `GlobalSearchModal` is the canonical
consumer).

## Out of Scope

- Search overlay UI (overlay lives in vd2's overlay layer).
- Result deduplication across sources.
- Async result streaming.