import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  base: './',
  root: './',
  build: {
    outDir: 'dist'
  }
});
