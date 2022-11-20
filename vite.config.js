import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import minimist from 'minimist';

const { f } = minimist(process.argv.slice(2));

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/VueDatePicker', import.meta.url)),
        },
    },
    server: {
        host: true,
        port: 8080,
    },
    build: {
        emptyOutDir: false,
        lib: {
            formats: f === 'iife' ? ['iife'] : ['es', 'umd'],
            entry: resolve(__dirname, 'src', 'entry.ts'),
            name: 'VueDatePicker',
            fileName: 'vue-datepicker',
        },
        rollupOptions: {
            external: f === 'iife' ? ['vue'] : ['vue', 'date-fns', 'date-fns-tz'],
            output: {
                globals: {
                    vue: 'Vue',
                    'date-fns': 'dateFns',
                    'date-fns-tz': 'dateFnsTz',
                },
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            reporter: ['lcov'],
            reportsDirectory: resolve(__dirname, 'coverage'),
        },
    },
});
