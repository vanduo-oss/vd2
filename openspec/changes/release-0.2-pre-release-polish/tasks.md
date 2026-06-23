# Tasks

Numbered checklist of work for this change. Items map 1:1 to the
commit on `vd2-0.2.0-release-prep`.

## vd2/

1. Bump `package.json` `version` from `0.1.0` to `0.2.0`.
2. Update `package.json` `engines.node` from `>=20` to `>=24`.
3. Add `package.json` scripts: `stylelint`, `format:check`,
   `test:size`.
4. Create `CHANGELOG.md` (Keep-a-Changelog format).
5. Update `README.md`: refresh `## Layout`, link to CONTRIBUTING and
   CHANGELOG, add `## License` section.
6. Create `CONTRIBUTING.md`.
7. Create `.github/workflows/ci.yml`.
8. Create `tests/scripts/size.mjs`.
9. Create `LICENSE` (MIT).
10. Create this OpenSpec folder with `proposal.md`, `design.md`,
    `tasks.md`, and `specs/pre-release-polish/spec.md`.
11. Run validation (see `specs/pre-release-polish/spec.md` for
    acceptance criteria).
12. Commit locally on `vd2-0.2.0-release-prep`. **Do not push.**

## framework/

13. Create `openspec/changes/2026-06-23-vd2-0.2.0-ecosystem-update/`
    with `proposal.md`, `tasks.md`, and `specs/.../spec.md`.
14. Add a vd2 reference link to `README.md` in the Release Notes or
    Related projects area.
15. Commit locally on `vd2-0.2.0-release-prep`. **Do not push.**

## docs/

16. Create `openspec/changes/vd2-0.2.0-ecosystem-update/` with
    `proposal.md`, `tasks.md`, and `specs/.../spec.md`.
17. Add a vd2 reference link to `README.md`.
18. Add `"vd2":"0.2.0"` to `release-version.json`.
19. Commit locally on `vd2-0.2.0-release-prep`. **Do not push.**
