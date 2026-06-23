# vd-layout-navigation

This change folder documents the addition of 4 new Vd* components
(`VdSidenav`, `VdSticky`, `VdWaypoint`, `VdOffcanvas`) and V2 upgrades
to `VdNavbar` and `VdFooter`, plus 6 component pages.

See `proposal.md` for the why, `design.md` for the layering and naming
decisions, `tasks.md` for the checklist, and
`specs/layout-navigation/spec.md` for the acceptance criteria.

## Branch coordination

- **vd2** (this repo): work directly on `main` (private repo).
- **framework** and **docs** repos: no edits required by this change.
  All 6 components are Vue-native reimplements that use the framework
  CSS bundle (`framework/dist/vanduo.min.css`) as-is. There is no
  cross-repo work to coordinate.
