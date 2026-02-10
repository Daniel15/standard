# @daniel15/standard

This package contains opinionated, strict configs that I use in most of my projects. Currently, it includes ESLint, Prettier, and tsconfig.

# Usage

Import the desired config into the relevant config file:

ESLint: `eslint.config.ts`:

```ts
import {defineConfig} from 'eslint/config';
import {getStandardESLintConfig} from '@daniel15/standard/eslint';

export default defineConfig(
  getStandardESLintConfig({baseDir: import.meta.dirname}),
);
```

Prettier: `prettier.config.ts`:

```ts
import {standardPrettierConfig} from '@daniel15/standard/prettier';
export default standardPrettierConfig;
```

TypeScript: `tsconfig.json`:

```json
{
  "extends": ["@daniel15/standard/tsconfig/node.json"],
  "include": ["**/*"],
  "exclude": ["node_modules", "**/dist"]
}
```

# Why not X? (Biome, oxc, Deno, etc.)

The standard ESLint + Prettier work well enough for my needs. The main pain point with ESLint is configuring it, which this repo solves. Additionally, ESLint and Prettier support use cases that other systems don't, for example linting and formatting Astro components, including TypeScript embedded within them.
