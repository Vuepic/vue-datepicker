import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            rollupTypes: true,
            outDir: './dist',
            tsconfigPath: './tsconfig.app.json',
            logLevel: 'silent',
        }),
    ],
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
            formats: ['es'],
            entry: resolve(import.meta.dirname, 'src', 'index.ts'),
            fileName: 'vue-datepicker',
        },
        rollupOptions: {
            external: ['vue', 'date-fns', '@date-fns/tz', '@floating-ui/vue', '@vueuse/core'],
        },
    },
});
