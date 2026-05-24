import { defineConfig } from 'tsup'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['vue'],
  treeshake: true,
  splitting: true,
  clean: true,
  sourcemap: true,
  outDir: 'dist',
  esbuildOptions(options) {
    options.jsx = 'automatic'
    options.jsxImportSource = 'vue'
  },
  onSuccess: async () => {
    // Copy CSS file to dist
    copyFileSync(
      resolve(__dirname, 'src/style.css'),
      resolve(__dirname, 'dist/style.css')
    )
  },
})
