## Contribución

Este repo está en modo mantenimiento.

## Reglas básicas

- Node `>=20`.
- Formato: `npm run format` / `npm run format:check`.
- Lint: `npm run lint` / `npm run lint:fix`.
- Tipos: `npm run build` genera `.d.ts` en `types/`.
- Commits y PRs siguen Convencional Commits: `feat: …`, `fix: …`, `docs: …`.

## Flujo de trabajo

1. Crea una rama desde `main`.
2. Realiza cambios pequeños y enfocados.
3. Ejecuta lint/format y asegúrate de que CI pase.
4. Abre un Pull Request usando la plantilla incluida.

## Alcance en modo mantenimiento

- Se priorizan fixes y mejoras pequeñas de DX.
- Nuevas features solo si no rompen API y tienen impacto claro.

## Publicación

- El publish se realiza vía GitHub Actions con tags `vX.Y.Z`.

Gracias por ayudar a mantener el proyecto saludable.
