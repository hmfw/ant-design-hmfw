import { defineConfig, devices } from '@playwright/test'

// 统一配置 Base URL，方便维护和切换环境
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173'

export default defineConfig({
  // 从项目根开始，匹配分散在各组件的 E2E 文件
  testDir: '.',
  testMatch: ['components/**/*.e2e.spec.ts'],

  timeout: 30000,
  expect: { timeout: 10000 },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // 本地默认单 worker：多 worker（实测 2 / 4）在文档站预热后跑完全量用例时，
  // Playwright 的 worker 优雅退出会死锁 —— 主进程与各 worker 互相等待一条永远不会
  // 到达的 IPC 消息，253 个用例全绿也不出汇总、不写报告（上游
  // microsoft/playwright#38276、#39753）。单 worker 实测可稳定退出（约 5.4 分钟）。
  // 确需并行加速时：PW_WORKERS=4 pnpm e2e（可能卡在收尾，卡住直接 Ctrl-C）
  workers: process.env.CI ? 1 : Number(process.env.PW_WORKERS) || 1,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'playwright-report/test-results.json' }],
  ],
  outputDir: 'test-results/',

  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // 添加导航和操作超时，防止卡住
    navigationTimeout: 30000,
    actionTimeout: 10000,
  },

  projects: [
    // 使用系统 Chrome，避免下载 Playwright Chromium
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
  ],

  webServer: {
    command: 'pnpm dev --host 127.0.0.1',
    url: BASE_URL,
    // 智能管理：本地开发复用已有服务器（快速），CI 环境自动管理（干净）
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    stdout: 'ignore',
    stderr: 'ignore',
  },
})
