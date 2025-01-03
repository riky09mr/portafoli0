import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      external: ['@emailjs/browser'], // Marca el paquete como externo
      output: {
        globals: {
          '@emailjs/browser': 'emailjs'
        }
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@emailjs/browser': '/node_modules/@emailjs/browser/dist/email.min.js',
    },
    extensions: ['.js', '.jsx'],
  },
});
