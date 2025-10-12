import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';
import { resolve } from 'node:path';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: fileURLToPath(new URL('./', import.meta.url)),
            coverage: {
                reporter: ['lcov'],
                reportsDirectory: resolve(__dirname, 'coverage'),
                include: ['src/VueDatePicker/**/*.ts', 'src/VueDatePicker/**/*.vue'],
                exclude: ['src/VueDatePicker/types'],
            },
        },
    }),
);
