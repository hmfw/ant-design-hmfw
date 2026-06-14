import { test, expect } from '@playwright/test'
import { gotoComponent, demoPreview } from '../../_visual/helpers'

/**
 * Alert 视觉回归试点 — 纯展示组件，无动画/随机内容。
 */
test.describe('Alert 视觉回归', () => {
  test.beforeEach(async ({ page }) => {
    await gotoComponent(page, 'alert')
  })

  test('四种类型', async ({ page }) => {
    await expect(demoPreview(page, '四种类型')).toHaveScreenshot('alert-types.png')
  })

  test('带描述', async ({ page }) => {
    await expect(demoPreview(page, '带描述')).toHaveScreenshot('alert-description.png')
  })

  test('填充样式', async ({ page }) => {
    await expect(demoPreview(page, '填充样式')).toHaveScreenshot('alert-variant.png')
  })
})
