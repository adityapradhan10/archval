# Archval

Frontend architecture audit tool — monorepo scaffold.

## Requirements

- [Node.js](https://nodejs.org/) 22+ (see `.nvmrc` and `engines` in `package.json`)
- [pnpm](https://pnpm.io/) 9.15.4 (see `packageManager` in `package.json`)

## Structure

```
apps/          # Future applications (web, docs) — none yet
packages/
  core/        # Publishable `archval` CLI and engine (`npx archval`)
  eslint-config/
  prettier-config/
  ts-config/
```

## CLI

The `archval` package in `packages/core` is published as [`archval`](https://www.npmjs.com/package/archval) and exposes the `archval` bin:

```bash
npx archval audit
npx archval --version
```

During local development:

```bash
pnpm build
pnpm archval audit
```

## Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `pnpm install`      | Install dependencies                |
| `pnpm build`        | Build packages (e.g. eslint-config) |
| `pnpm test`         | Run package tests                   |
| `pnpm archval`      | Run the local CLI                   |
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
