import { test, expect } from '@playwright/test'
import { gotoComponent, demoPreview } from '../../_visual/helpers'

/**
 * Button 视觉回归试点 — 仅覆盖无动画的静态 demo。
 * 刻意排除「加载状态」「延迟加载」（含 spinner 动画，截图不稳定）。
 */
test.describe('Button 视觉回归', () => {
  test.beforeEach(async ({ page }) => {
    await gotoComponent(page, 'button')
  })

  test('按钮类型', async ({ page }) => {
    await expect(demoPreview(page, '按钮类型')).toHaveScreenshot('button-types.png')
  })

  test('按钮尺寸', async ({ page }) => {
    await expect(demoPreview(page, '按钮尺寸')).toHaveScreenshot('button-size.png')
  })

  test('禁用状态', async ({ page }) => {
    await expect(demoPreview(page, '禁用状态')).toHaveScreenshot('button-disabled.png')
  })

  test('按钮形状', async ({ page }) => {
    await expect(demoPreview(page, '按钮形状')).toHaveScreenshot('button-shape.png')
  })
})
