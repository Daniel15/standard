import type {ConfigWithExtendsArray} from '@eslint/config-helpers';

import {includeIgnoreFile} from '@eslint/compat';
import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import {globalIgnores} from 'eslint/config';
import globals from 'globals';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import tseslint from 'typescript-eslint';

export type Settings = Readonly<{
  baseDir: string;
  ignore?: string[];
}>;

export function getStandardESLintConfig(
  settings: Settings,
): ConfigWithExtendsArray {
  const gitignoreFile = resolve(settings.baseDir, '.gitignore');
  return [
    existsSync(gitignoreFile) ? includeIgnoreFile(gitignoreFile) : [],
    settings.ignore != null ? globalIgnores(settings.ignore) : [],
    css.configs.recommended,
    json.configs.recommended,
    js.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
      languageOptions: {
        globals: {
          ...globals.browser,
        },
        parserOptions: {
          // Required to enable type-checked rules.
          projectService: true,
          tsconfigRootDir: settings.baseDir,
        },
      },
    },
    perfectionist.configs['recommended-natural'],
    prettier,
    {
      rules: {
        curly: ['error', 'all'],
      },
    },
  ];
}
