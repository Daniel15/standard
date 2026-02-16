import type {Config} from 'prettier';

import {standardPrettierConfig} from '@daniel15/standard/prettier';

export const standardPrettierAstroConfig: Config = {
  ...standardPrettierConfig,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-astro'],
};
