import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.join(__dirname, './example'),
  resolve: {
    alias: {
      '@easy-poster': path.resolve(__dirname, 'src-js'),
    },
  },
  build: {
    commonjsOptions: {
      include: 'node_modules',
    },
  },
  plugins: [react()],
});
