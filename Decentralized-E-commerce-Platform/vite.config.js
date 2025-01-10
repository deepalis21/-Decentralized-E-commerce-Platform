import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures the root is the current folder where index.html is located
  build: {
    outDir: 'dist', // Output directory for production build
    emptyOutDir: true, // Clears the output directory before building
    rollupOptions: {
      input: 'index.html', // Specifies the entry file for the build process
    },
  },
  server: {
    port: 3000, // Optional: Defines the port for local development
    open: true, // Opens the browser automatically during development
  },
});
