import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { resolve } from 'path';

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
            formats: ['es'],
            entry: resolve(__dirname, 'src', 'index.ts'),
            fileName: 'vue-datepicker',
        },
        rollupOptions: {
            external: ['vue', 'date-fns', '@date-fns/tz', '@floating-ui/vue', '@vueuse/core'],
        },
    },
});
