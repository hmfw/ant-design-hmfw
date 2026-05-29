import { defineConfig } from 'vitest/config'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['components/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      provider: 'v8',
      include: ['components/**/*.{ts,tsx}'],
      exclude: [
        'components/**/__tests__/**',
        'components/**/*.test.*',
        'components/**/*.spec.*',
        'components/**/index.ts',
        'components/**/types.ts',
      ],
      thresholds: {
        statements: 80,
        branches: 65,
        functions: 65,
        lines: 80,
      },
    },
  },
})

