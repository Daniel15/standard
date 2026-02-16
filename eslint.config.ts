import {getStandardESLintConfig} from '@daniel15/standard/eslint';
import {defineConfig} from 'eslint/config';

export default defineConfig(
  getStandardESLintConfig({baseDir: import.meta.dirname}),
);
