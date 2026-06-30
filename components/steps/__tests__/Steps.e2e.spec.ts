import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Steps 步骤条', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'steps')
  })

  test('基础步骤条渲染三步，首步为进行中', async ({ page }) => {
    const steps = page.locator('.hmfw-steps').first()
    const items = steps.locator('.hmfw-steps-item')
    await expect(items).toHaveCount(3)

    await expect(items.nth(0)).toHaveClass(/hmfw-steps-item-process/)
    await expect(items.nth(0).locator('.hmfw-steps-item-title')).toHaveText('第一步')
    await expect(items.nth(0).locator('.hmfw-steps-item-description')).toHaveText('填写基本信息')
    await expect(items.nth(1)).toHaveClass(/hmfw-steps-item-wait/)
    await expect(items.nth(2)).toHaveClass(/hmfw-steps-item-wait/)
  })

  test('点击下一步将首步标记为完成，第二步为进行中', async ({ page }) => {
    // 基础 demo 的「下一步」按钮
    const nextBtn = page.getByRole('button', { name: '下一步' }).first()
    await nextBtn.click()

    const steps = page.locator('.hmfw-steps').first()
    const items = steps.locator('.hmfw-steps-item')
    await expect(items.nth(0)).toHaveClass(/hmfw-steps-item-finish/)
    await expect(items.nth(1)).toHaveClass(/hmfw-steps-item-process/)
  })
})
