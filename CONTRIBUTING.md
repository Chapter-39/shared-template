## Contribution

This repo is in maintenance mode.

## Basic rules

- Node `>=20`.
- Formatting: `npm run format` / `npm run format:check`.
- Linting: `npm run lint` / `npm run lint:fix`.
- Types: `npm run build` generates `.d.ts` in `types/`.
- Commits and PRs follow Conventional Commits: `feat: ...`, `fix: ...`, `docs: ...`.

## Workflow

1. Create a branch from `main`.
2. Make small, focused changes.
3. Run lint/format and ensure CI passes.
4. Open a Pull Request using the included template.

## Scope in maintenance mode

- Prioritize fixes and small DX improvements.
- New features only if they do not break the API and have clear impact.

## Publishing

- Publishing is done via GitHub Actions with `vX.Y.Z` tags.

Thanks for helping keep the project healthy.
