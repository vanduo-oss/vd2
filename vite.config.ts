import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['@vanduo-oss/framework/css'],
  },
  ssr: {
    noExternal: ['@vanduo-oss/framework'],
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
  },
});