import { defineConfig } from 'vitest/config'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['components/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    // Playwright 用例（功能 E2E、视觉回归）不走 vitest，避免加载 @playwright/test 报错
    exclude: ['**/*.e2e.spec.ts', '**/*.visual.spec.ts'],
    coverage: {
      provider: 'v8',
      // text-summary: 控制台简报；html: 本地查看；lcov: CI/Codecov 等工具消费；json: 程序化读取
      reporter: ['text-summary', 'html', 'lcov', 'json'],
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
