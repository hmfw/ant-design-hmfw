import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

test.describe('Popconfirm', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'popconfirm')
  })

  test('点击触发按钮弹出确认框', async ({ page }) => {
    const trigger = page.getByText('删除').first()
    await trigger.click()
    const popconfirm = page.locator('.hmfw-popconfirm-inner').first()
    await expect(popconfirm).toBeVisible({ timeout: 3000 })
    await expect(popconfirm).toContainText('确定要删除吗')
  })

  test('Escape 关闭确认框', async ({ page }) => {
    const trigger = page.getByText('删除').first()
    await trigger.click()
    await expect(page.locator('.hmfw-popconfirm-inner').first()).toBeVisible({ timeout: 3000 })
    await page.keyboard.press('Escape')
    await expect(page.locator('.hmfw-popconfirm-inner').first()).not.toBeVisible({ timeout: 3000 })
  })

  test('确定和取消按钮存在', async ({ page }) => {
    const trigger = page.getByText('删除').first()
    await trigger.click()
    // 在 Popconfirm 弹层内查找按钮，避免匹配到源码展示区
    const popconfirm = page.locator('.hmfw-popconfirm-inner').first()
    const okBtn = popconfirm.getByText('确定').first()
    const cancelBtn = popconfirm.getByText('取消').first()
    await expect(okBtn).toBeVisible({ timeout: 3000 })
    await expect(cancelBtn).toBeVisible()
  })

  test('点击取消关闭确认框', async ({ page }) => {
    const trigger = page.getByText('删除').first()
    await trigger.click()
    // 在 Popconfirm 弹层内查找取消按钮
    const cancelBtn = page.locator('.hmfw-popconfirm-inner').first().getByText('取消').first()
    await cancelBtn.click()
    await expect(page.locator('.hmfw-popconfirm-inner').first()).not.toBeVisible({ timeout: 3000 })
  })
})
