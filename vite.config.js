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
            fileName: (format) => `vue-datepicker.${format}.js`,
        },
        rollupOptions: {
            external: f === 'iife' ? ['vue'] : ['vue', 'date-fns'],
            output: {
                globals: {
                    vue: 'Vue',
                    'date-fns': 'dateFns',
                },
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
});
