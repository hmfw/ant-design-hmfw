import { test, expect } from '@playwright/test'
import { gotoComponent, demoPreview } from '../../_visual/helpers'

/**
 * Tag 视觉回归试点 — 纯展示组件，无动画/随机内容，适合做基线截图。
 */
test.describe('Tag 视觉回归', () => {
  test.beforeEach(async ({ page }) => {
    await gotoComponent(page, 'tag')
  })

  test('基础用法', async ({ page }) => {
    await expect(demoPreview(page, '基础用法')).toHaveScreenshot('tag-basic.png')
  })

  test('预设颜色', async ({ page }) => {
    await expect(demoPreview(page, '预设颜色')).toHaveScreenshot('tag-preset-color.png')
  })

  test('自定义颜色', async ({ page }) => {
    await expect(demoPreview(page, '自定义颜色')).toHaveScreenshot('tag-custom-color.png')
  })
})
