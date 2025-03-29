import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults, defaultExclude } from 'vitest/config';
import viteConfig from './vite.config';
import { resolve } from 'path';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: fileURLToPath(new URL('./', import.meta.url)),
            coverage: {
                reporter: ['lcov'],
                reportsDirectory: resolve(import.meta.dirname, 'coverage'),
                exclude: [...defaultExclude, 'dev/**', 'src/entry.ts', 'src/entry.esm.ts', 'docs/**'],
            },
        },
    }),
);
