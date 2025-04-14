import { defineConfig } from 'bunup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'build',
  format: ['esm', 'cjs', 'iife'],
  minify: true,
  target: 'node',
  dts: {
    // entry: {
    //   // Generate types.d.ts from index.ts
    //   types: 'src/index.ts',
    // },
    resolve: true,
  },
});