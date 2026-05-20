import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      bundleTypes: true,
      processor: 'vue',
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
      outDirs: './dist',
      staticImport: false,
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
    rolldownOptions: {
      output: {
        assetFileNames: (asset) => {
            return asset.originalFileNames[0]
        },
      },
      external: ['vue', 'date-fns', '@date-fns/tz', '@floating-ui/vue', '@vueuse/core'],
    },
  },
});
