import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  // 从项目根开始，匹配分散在各组件的 E2E 文件，以及 e2e 目录下的跨组件冒烟测试
  testDir: '.',
  testMatch: ['components/**/*.e2e.spec.ts', 'e2e/**/*.spec.ts'],

  timeout: 30000,
  expect: { timeout: 10000 },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'playwright-report/test-results.json' }],
  ],
  outputDir: 'test-results/',

  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    // 使用系统 Chrome，避免下载 Playwright Chromium
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
  ],

  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
