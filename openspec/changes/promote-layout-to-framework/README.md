# promote-layout-to-framework

This change folder is **proposal-only**. The actual edits to the framework
package live in the `framework` repo and are explicitly listed under
`## Out of Scope (framework repo)` in `tasks.md`.

This vd2-side folder exists to:

1. Document the gap the framework currently has (and that vd2 had to bridge
   locally).
2. Drive a coordinated framework PR that adds the missing primitives.
3. Let vd2 delete its vendored CSS rules once the framework release ships
   and vd2 bumps the `@vanduo-oss/framework` dependency.

See `proposal.md` for the why, `design.md` for the layering, `tasks.md`
for the checklist, and `specs/layout-primitives/spec.md` for the
acceptance criteria.

Branch coordination:

- **vd2** (this repo): work directly on `main` (private repo).
- **framework** and **docs** repos: each gets a local
  `dev-v160-vd2-compatible` branch from latest `main`. No remote pushes
  today.
