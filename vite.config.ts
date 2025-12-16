import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Cast process to any to avoid "Property 'cwd' does not exist on type 'Process'" error
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    base: '/', 
    define: {
      // Safely expose process.env.API_KEY to the browser code using values from build time
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY),
      // Prevent "process is not defined" error for other usages
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
  };
});