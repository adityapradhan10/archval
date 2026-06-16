# Archval

Frontend architecture audit tool — monorepo scaffold.

## Requirements

- [Node.js](https://nodejs.org/) 22+ (see `.nvmrc` and `engines` in `package.json`)
- [pnpm](https://pnpm.io/) 9.15.4 (see `packageManager` in `package.json`)

## Structure

```
apps/          # Future applications (web, docs) — none yet
packages/
  eslint-config/
  prettier-config/
  ts-config/
```

## Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `pnpm install`      | Install dependencies                |
| `pnpm build`        | Build packages (e.g. eslint-config) |
| `pnpm lint`         | ESLint across the repo              |
| `pnpm lint:fix`     | Auto-fix ESLint issues              |
| `pnpm typecheck`    | TypeScript checks (root + packages) |
| `pnpm format`       | Format with Prettier                |
| `pnpm format:check` | Verify Prettier formatting          |

Run `pnpm build` after install if you skip `prepare` hooks. CI runs `build` before lint.

## Shared config

- **ESLint** — `@archval/eslint-config` (`base`, `node`, `react` entry points)
- **Prettier** — `@archval/prettier-config` (via `prettier` field in root `package.json`)
- **TypeScript** — `@archval/ts-config` (`base.json`, `config-package.json`)

Root `eslint.config.ts` consumes `@archval/eslint-config/node`.
