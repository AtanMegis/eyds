import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@helper': path.resolve(__dirname, 'src/helper'),
    },
  },
});