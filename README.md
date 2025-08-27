# shared-template

Minimal template with ESLint + Prettier + Husky + lint-staged and CI in GitHub Actions. Current status: maintenance.

## Scripts

- `npm run lint` / `npm run lint:fix`
- `npm run format` / `npm run format:check`
- `npm run build` generates `.d.ts` declarations in `types/`
- `npm run clean` deletes `.d.ts` artifacts in `types/`

## Requirements

Node 20+.

## Setup

```bash
npm ci
npm run prepare
```

## Type build

```bash
npm run build
npm pack --dry-run
```

The resulting package will include `types/**` and `styles/**`.

## Maintenance mode

- Only fixes and small improvements that don't break the API are accepted.
- Dependabot keeps dependencies updated weekly; CI requires lint, format, and type build.
- See `SECURITY.md` and `CONTRIBUTING.md` for more details.

## Usage in consuming projects

- Styles (SCSS):
  - Import the entrypoint or specific files as needed.

  ```scss
  // Main entry (short alias available)
  @use "@chapter-39/shared-template/styles" as *; // alias
  // or explicit
  @use "@chapter-39/shared-template/styles/main" as *;

  // Or specific modules
  @use "@chapter-39/shared-template/styles/_variables" as vars;
  @use "@chapter-39/shared-template/styles/type/_medium" as type;
  ```

  Note: When using `@use`, do not include the `.scss` extension. Ensure your bundler supports Sass (for example, Vite/webpack with `sass` installed).

- Types (TypeScript):
  - Import types directly from the package. The `.d.ts` files live in `types/**` and resolve via `exports`.

  ```ts
  import type {
    Settings,
    Theme,
    Language,
    Mode,
  } from "@chapter-39/shared-template";
  ```

## Publishing

To publish to GitHub Packages:

- Remove `"private": true` from `package.json`.
- Create a semantic tag `vX.Y.Z` on `main` and push it.

```bash
git checkout main
git pull --ff-only
# update version in package.json if applicable
git commit -am "chore(release): v0.1.0"
git tag v0.1.0
git push origin main --follow-tags
git push origin v0.1.0
```

The `Publish Package` workflow will publish using `GITHUB_TOKEN`.

The package exposes:

- `exports["."]` with `types` and `default` pointing to `types/index.d.ts` (types-only package).
- `exports["./styles/*"]` to access `styles/**` (uncompiled SCSS).
- `style` field pointing to `styles/root.scss` as a convenience for bundlers that support it.
