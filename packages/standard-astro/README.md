# @daniel15/standard

This package contains opinionated, strict configs that I use in most of my Astro projects. Currently, it includes ESLint and Prettier.

# Usage

Import the desired config into the relevant config file:

ESLint: `eslint.config.ts`:

```ts
import {defineConfig} from 'eslint/config';
import {getStandardESLintAstroConfig} from '@daniel15/standard-astro/eslint';

export default defineConfig(
  getStandardESLintAstroConfig({baseDir: import.meta.dirname}),
);
```

Prettier: `prettier.config.ts`:

```ts
import {standardPrettierAstroConfig} from '@daniel15/standard-astro/prettier';
export default standardPrettierAstroConfig;
```

# Why not X? (Biome, oxc, Deno, etc.)

The standard ESLint + Prettier work well enough for my needs. The main pain point with ESLint is configuring it, which this repo solves. Additionally, ESLint and Prettier support use cases that other systems don't, for example linting and formatting Astro components, including TypeScript embedded within them.
