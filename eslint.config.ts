import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import pluginVitest from '@vitest/eslint-plugin';
import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },

    globalIgnores(['**/dist/**', '**/coverage/**', '**/*.scss', '**/node_modules/**']),

    pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended,

    {
        ...pluginVitest.configs.recommended,
        files: ['src/**/__tests__/*'],
    },

    skipFormatting,

    {
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none', varsIgnorePattern: '^_' }],
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
);
