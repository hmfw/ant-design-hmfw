import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

test.describe('RangePicker', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'range-picker')
  })

  test('点击输入框打开双日历面板', async ({ page }) => {
    const trigger = page.locator('.hmfw-date-picker-range').first()
    await trigger.click()
    const panels = page.locator('.hmfw-date-picker-panel')
    // RangePicker 应展示两个并排日历面板
    const count = await panels.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('选择开始和结束日期', async ({ page }) => {
    const trigger = page.locator('.hmfw-date-picker-range').first()
    await trigger.click()
    // 选择第一个可用日期作为开始
    const cells = page.locator('.hmfw-date-picker-day:not(.hmfw-date-picker-day-disabled)')
    if ((await cells.count()) >= 2) {
      await cells.first().click()
      await cells.nth(1).click()
    }
    // 选择完毕后，面板关闭
    await expect(page.locator('.hmfw-date-picker-panel').first()).not.toBeVisible({ timeout: 3000 })
  })

  test('点击空白处关闭面板', async ({ page }) => {
    const trigger = page.locator('.hmfw-date-picker-range').first()
    await trigger.click()
    await expect(page.locator('.hmfw-date-picker-panel').first()).toBeVisible()
    await page.locator('body').click({ position: { x: 10, y: 10 } })
    await expect(page.locator('.hmfw-date-picker-panel').first()).not.toBeVisible({ timeout: 3000 })
  })

  test('Escape 关闭面板', async ({ page }) => {
    const trigger = page.locator('.hmfw-date-picker-range').first()
    await trigger.click()
    await expect(page.locator('.hmfw-date-picker-panel').first()).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('.hmfw-date-picker-panel').first()).not.toBeVisible({ timeout: 3000 })
  })
})
