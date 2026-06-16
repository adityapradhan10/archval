import { defineConfig } from 'eslint/config';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import base from './base.js';

export default defineConfig(
  base,
  reactPlugin.configs.flat.recommended!,
  reactPlugin.configs.flat['jsx-runtime']!,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  reactHooks.configs.flat['recommended-latest']!,
  jsxA11y.flatConfigs.recommended,
);
