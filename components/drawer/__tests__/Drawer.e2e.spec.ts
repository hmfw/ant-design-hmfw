import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

test.describe('Drawer', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'drawer')
  })

  test('打开/关闭 Drawer', async ({ page }) => {
    await page.getByText('打开抽屉').first().click()
    const drawer = page.locator('.hmfw-drawer')
    await expect(drawer).toBeVisible()
    // 点击关闭按钮
    await page.locator('.hmfw-drawer-close').click()
    await expect(drawer).not.toBeVisible({ timeout: 3000 })
  })

  test('Escape 键关闭 Drawer', async ({ page }) => {
    await page.getByText('打开抽屉').first().click()
    await expect(page.locator('.hmfw-drawer')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('.hmfw-drawer')).not.toBeVisible({ timeout: 3000 })
  })

  test('点击遮罩关闭 Drawer', async ({ page }) => {
    await page.getByText('打开抽屉').first().click()
    await expect(page.locator('.hmfw-drawer')).toBeVisible()
    const mask = page.locator('.hmfw-drawer-mask')
    if ((await mask.count()) > 0) {
      await mask.click({ position: { x: 10, y: 10 } })
      await expect(page.locator('.hmfw-drawer')).not.toBeVisible({ timeout: 3000 })
    }
  })

  test('打开 Drawer 时背景有遮罩', async ({ page }) => {
    await page.getByText('打开抽屉').first().click()
    const mask = page.locator('.hmfw-drawer-mask')
    await expect(mask).toBeVisible()
  })
})
