# minimal-template

Plantilla mínima con ESLint + Prettier + Husky + lint-staged y CI en GitHub Actions.

## Scripts

- `npm run lint` / `npm run lint:fix`
- `npm run format` / `npm run format:check`
- `npm run build` genera declaraciones `.d.ts` en `types/`

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

El paquete resultante incluirá `types/**` y `styles/**`.

## Uso en proyectos consumidores

- Estilos (SCSS):
  - Importa el entrypoint o archivos puntuales según necesites.

  ```scss
  // Entry principal (re-exporta variables, reset y escalas tipográficas)
  @use "@chapter-37/minimal-template/styles/main" as *;

  // O módulos específicos
  @use "@chapter-37/minimal-template/styles/_variables" as vars;
  @use "@chapter-37/minimal-template/styles/type/_medium" as type;
  ```

  Nota: Al usar `@use`, no incluyas la extensión `.scss`. Asegúrate de que tu bundler tenga soporte para Sass (por ejemplo, Vite/webpack con `sass` instalado).

- Tipos (TypeScript):
  - Importa tipos directamente del paquete. Los `.d.ts` viven en `types/**` y se resuelven vía `exports`.

  ```ts
  import type {
    Settings,
    Theme,
    Language,
    Mode,
  } from "@chapter-37/minimal-template";
  ```

## Publicación

Nota: para publicar en GitHub Packages, elimina `"private": true` en `package.json` y usa un tag `vX.Y.Z` para disparar el workflow `Publish Package`. El paquete expone:

- `exports["."]` con `types` y `default` apuntando a `types/index.d.ts` (paquete de solo tipos).
- `exports["./styles/*"]` para acceder a `styles/**` (SCSS sin compilar).
- Campo `style` apuntando a `styles/main.scss` como conveniencia para bundlers que lo soportan.
