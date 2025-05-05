/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { defineConfig } from 'vite';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: './src/index.ts',
      },
    },
  },
  resolve: {
    alias: {
      '@flop/client': path.resolve(__dirname, './src'),
    },
  },
});
