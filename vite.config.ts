import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  // CRITICAL FIX: Defines process.env so accessing it in the browser doesn't throw "ReferenceError: process is not defined"
  define: {
    'process.env': {} 
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  server: {
    port: 3000,
    open: true
  }
});