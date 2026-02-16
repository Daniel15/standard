import type {ConfigWithExtendsArray} from '@eslint/config-helpers';

import {
  getStandardESLintConfig,
  type Settings,
} from '@daniel15/standard/eslint';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export function getStandardESLintAstroConfig(
  settings: Settings,
): ConfigWithExtendsArray {
  return [
    ...getStandardESLintConfig({
      ...settings,
      // Ignore .astro, except for the virtual TypeScript files from <script> tags in Astro
      // components.
      ignore: [...(settings.ignore ?? []), '.astro', '!.astro/**/*.ts'],
    }),

    astro.configs.recommended,
    // `client-side-ts` extracts <script> tags from Astro components.
    {
      files: ['**/*.astro'],
      processor: astro.processors['client-side-ts'],
    },

    // Disable type-checked rules in Astro components.
    // https://github.com/ota-meshi/eslint-plugin-astro/issues/447
    {
      extends: [tseslint.configs.disableTypeChecked],
      files: ['**/*.astro', '**/*.astro/*.ts'],
      languageOptions: {
        parserOptions: {
          projectService: false,
        },
      },
    },
  ];
}
