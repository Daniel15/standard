import {
  getStandardESLintConfig,
  type Settings,
} from '@daniel15/standard/eslint';
import type {ConfigWithExtendsArray} from '@eslint/config-helpers';
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
      files: ['**/*.astro', '**/*.astro/*.ts'],
      extends: [tseslint.configs.disableTypeChecked],
      languageOptions: {
        parserOptions: {
          projectService: false,
        },
      },
    },
  ];
}
