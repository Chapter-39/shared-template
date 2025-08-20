# shared-template

Plantilla mínima con ESLint + Prettier + Husky + lint-staged y CI en GitHub Actions. Estado actual: mantenimiento.

## Scripts

- `npm run lint` / `npm run lint:fix`
- `npm run format` / `npm run format:check`
- `npm run build` genera declaraciones `.d.ts` en `types/`
- `npm run clean` borra artefactos `.d.ts` en `types/`

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

## Modo mantenimiento

- Solo se aceptan fixes y mejoras pequeñas que no rompan API.
- Dependabot mantiene dependencias semanalmente; CI exige lint, formato y build de tipos.
- Consulta `SECURITY.md` y `CONTRIBUTING.md` para más detalles.

## Uso en proyectos consumidores

- Estilos (SCSS):
  - Importa el entrypoint o archivos puntuales según necesites.

  ```scss
  // Entry principal (alias corto disponible)
  @use "@chapter-39/shared-template/styles" as *; // alias
  // o explícito
  @use "@chapter-39/shared-template/styles/main" as *;

  // O módulos específicos
  @use "@chapter-39/shared-template/styles/_variables" as vars;
  @use "@chapter-39/shared-template/styles/type/_medium" as type;
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
  } from "@chapter-39/shared-template";
  ```

## Publicación

Para publicar en GitHub Packages:

- Elimina `"private": true` de `package.json`.
- Crea un tag semántico `vX.Y.Z` en `main` y púlsalo.

```bash
git checkout main
git pull --ff-only
# actualiza version en package.json si aplica
git commit -am "chore(release): v0.1.0"
git tag v0.1.0
git push origin main --follow-tags
git push origin v0.1.0
```

El workflow `Publish Package` publicará usando `GITHUB_TOKEN`.

El paquete expone:

- `exports["."]` con `types` y `default` apuntando a `types/index.d.ts` (paquete de solo tipos).
- `exports["./styles/*"]` para acceder a `styles/**` (SCSS sin compilar).
- Campo `style` apuntando a `styles/main.scss` como conveniencia para bundlers que lo soportan.
