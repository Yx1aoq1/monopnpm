import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@monopnpm/ui': path.resolve(__dirname, '../ui/src'),
      '@monopnpm/util': path.resolve(__dirname, '../util/src'),
    },
  },
});
