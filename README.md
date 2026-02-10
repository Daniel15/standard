# @daniel15/standard

This repo contains opinionated, strict configs that I use in most of my projects. Currently, it includes ESLint, Prettier, and tsconfig.

# Usage

See [@daniel15/standard](./packages/standard/README.md) for regular TypeScript projects or [@daniel15/standard-astro](./packages/standard-astro/README.md) for Astro projects.

# Why not X? (Biome, oxc, Deno, etc.)

The standard ESLint + Prettier work well enough for my needs. The main pain point with ESLint is configuring it, which this repo solves. Additionally, ESLint and Prettier support use cases that other systems don't, for example linting and formatting Astro components, including TypeScript embedded within them.
