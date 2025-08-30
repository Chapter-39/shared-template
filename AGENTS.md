# Repository Guidelines

This repo provides shared TypeScript types and SCSS styles with a minimal, CI-friendly setup.

## Project Structure & Module Organization

- Config at root: `.editorconfig`, `eslint.config.js`, `.prettier*`, `.husky/`, `.github/`.
- Types live in `types/**` (emitted `.d.ts`). Styles live in `styles/**` (SCSS).
- Add application sources in `src/` (optional) and tests in `tests/` or colocated as `*.test.(js|ts)`.
- Do not version build artifacts (`node_modules/`, generated `types/**/*.d.ts*`).

## Build, Test, and Development Commands

- `npm ci`: Install exact dependencies (CI parity).
- `npm run prepare`: Install Husky hooks.
- `npm run format` / `npm run format:check`: Prettier formatting and verification.
- `npm run lint` / `npm run lint:fix`: ESLint analysis and autofix; Stylelint runs via `lint-staged` and `stylelint` script.
- `npm run build`: Emit `.d.ts` to `types/` via `tsc -p tsconfig.build.json`.
- `npm run clean`: Remove generated `*.d.ts` and maps.

## Coding Style & Naming Conventions

- Indentation 2 spaces; LF; final newline enforced.
- Prettier width 100, double quotes, semicolons, trailing commas.
- ESLint: `@eslint/js` + `eslint-plugin-import`; Prettier config disables conflicting rules.
- Naming: files/folders kebab-case (`my-module.ts`); classes/types PascalCase; functions/vars camelCase; constants SCREAMING_SNAKE_CASE.

## Testing Guidelines

- Standard: Vitest for unit/integration tests; Playwright for E2E where applicable.
- Place tests in `tests/**` or next to sources (`*.test.ts` / `*.spec.ts`).
- Aim for unit coverage on utilities; add lightweight integration tests as needed.
- Run with `vitest` scripts; ensure CI stays green.

## Commit & Pull Request Guidelines

- Use Conventional Commits for titles and messages: `feat: ...`, `fix: ...`, `docs: ...` (enforced by `pr-title-check.yml`).
- PRs: include summary, change type, test plan, checklist; link issues (`Closes #123`).
- Keep changes focused and reviewable; request CODEOWNERS as reviewers when applicable.

## Security & Configuration Tips

- Require Node 20+. Never commit secrets; `.env` is ignored. Use GitHub Actions secrets.
- Dependabot keeps deps current; merge with CI green.
