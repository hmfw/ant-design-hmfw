import { defineConfig, devices } from '@playwright/test'

/**
 * 视觉回归专用配置（与功能 E2E 分离）
 *
 * - 仅匹配 *.visual.spec.ts，不影响 `pnpm e2e`（其匹配 *.e2e.spec.ts）
 * - 基线快照在本地（macOS）生成并入库；CI(Linux) 像素/字体渲染不同，
 *   暂不在 CI 强制运行视觉回归，详见 ROADMAP。
 * - 截图前禁用动画、固定视口，最大化稳定性。
 */
export default defineConfig({
  testDir: '.',
  testMatch: 'components/**/*.visual.spec.ts',

  timeout: 30000,
  expect: {
    timeout: 10000,
    toHaveScreenshot: {
      // 容忍极少量抗锯齿差异，但仍能捕捉真实视觉回归
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
      scale: 'css',
    },
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: undefined,

  // 基线快照与平台绑定，文件名带 {platform} 便于将来扩展多平台基线
  snapshotPathTemplate: '{testDir}/{testFileDir}/__screenshots__/{arg}-{platform}{ext}',

  reporter: [['html', { outputFolder: 'playwright-report-visual' }]],
  outputDir: 'test-results-visual/',

  use: {
    baseURL: 'http://localhost:5173',
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  },

  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chrome' } }],

  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
