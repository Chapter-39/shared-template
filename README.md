# minimal-template

Plantilla mínima con ESLint + Prettier + Husky + lint-staged y CI en GitHub Actions.

## Scripts

- `npm run lint` / `npm run lint:fix`
- `npm run format` / `npm run format:check`
- `npm run build` genera declaraciones `.d.ts` en `dist/`

## Requisitos

Node 20+.

## Setup

```bash
npm ci
npm run prepare
```

## Build de tipos

```bash
npm run build
npm pack --dry-run
```

El paquete resultante incluirá `dist/**` y expondrá los tipos desde `dist/index.d.ts`.

Nota: para publicar en GitHub Packages, elimina `"private": true` en `package.json` y usa un tag `vX.Y.Z` para disparar el workflow `Publish Package`.
