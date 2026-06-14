import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Switch 开关', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'switch')
  })

  test('基础开关默认关闭，点击后切换为开启', async ({ page }) => {
    const sw = page.locator('button[role="switch"]').first()
    await expect(sw).not.toHaveClass(/hmfw-switch-checked/)
    await expect(sw).toHaveAttribute('aria-checked', 'false')

    await sw.click()
    await expect(sw).toHaveClass(/hmfw-switch-checked/)
    await expect(sw).toHaveAttribute('aria-checked', 'true')

    // 再次点击切回关闭
    await sw.click()
    await expect(sw).not.toHaveClass(/hmfw-switch-checked/)
  })

  test('禁用开关不可点击切换', async ({ page }) => {
    const disabled = page.locator('button[role="switch"].hmfw-switch-disabled').first()
    await expect(disabled).toBeVisible()
    // 初始为选中态（demo checked2=true）
    await expect(disabled).toHaveClass(/hmfw-switch-checked/)

    await disabled.click({ force: true })
    // 禁用态点击后保持不变
    await expect(disabled).toHaveClass(/hmfw-switch-checked/)
  })
})
