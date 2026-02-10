import {includeIgnoreFile} from '@eslint/compat';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import css from '@eslint/css';
import {globalIgnores} from 'eslint/config';
import prettier from 'eslint-config-prettier';
import {resolve} from 'node:path';

import type {ConfigWithExtendsArray} from '@eslint/config-helpers';
import {existsSync} from 'node:fs';

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
    prettier,
    {
      rules: {
        curly: ['error', 'all'],
      },
    },
  ];
}
