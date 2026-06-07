import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

test.describe('DatePicker', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'date-picker')
  })

  test('点击输入框打开日历面板', async ({ page }) => {
    const input = page.locator('.hmfw-date-picker input, .hmfw-date-picker .hmfw-date-picker-input input').first()
    await input.click()
    const panel = page.locator('.hmfw-date-picker-panel')
    await expect(panel).toBeVisible()
  })

  test('日历面板出现在输入框下方', async ({ page }) => {
    const input = page.locator('.hmfw-date-picker input, .hmfw-date-picker .hmfw-date-picker-input input').first()
    await input.click()
    const panel = page.locator('.hmfw-date-picker-panel')
    const inputBox = await input.boundingBox()
    const panelBox = await panel.boundingBox()
    expect(panelBox!.y).toBeGreaterThanOrEqual(inputBox!.y + inputBox!.height - 2)
  })

  test('点击日期后选择回填并关闭面板', async ({ page }) => {
    const input = page.locator('.hmfw-date-picker input, .hmfw-date-picker .hmfw-date-picker-input input').first()
    await input.click()
    // 点击第一个可用的日期
    const cell = page
      .locator('.hmfw-date-picker-panel .hmfw-date-picker-day:not(.hmfw-date-picker-day-disabled)')
      .first()
    await cell.click()
    await expect(page.locator('.hmfw-date-picker-panel')).not.toBeVisible({ timeout: 3000 })
    // 输入框应有值
    const value = await input.inputValue()
    expect(value).toBeTruthy()
  })

  test('Escape 关闭面板', async ({ page }) => {
    const input = page.locator('.hmfw-date-picker input, .hmfw-date-picker .hmfw-date-picker-input input').first()
    await input.click()
    await expect(page.locator('.hmfw-date-picker-panel')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('.hmfw-date-picker-panel')).not.toBeVisible({ timeout: 3000 })
  })

  test('月份切换按钮可用', async ({ page }) => {
    const input = page.locator('.hmfw-date-picker input, .hmfw-date-picker .hmfw-date-picker-input input').first()
    await input.click()
    const nextBtn = page.locator('.hmfw-date-picker-panel-header-btn').last()
    const prevTitle = await page.locator('.hmfw-date-picker-panel-header-title-btn').first().textContent()
    await nextBtn.click()
    const newTitle = await page.locator('.hmfw-date-picker-panel-header-title-btn').first().textContent()
    expect(newTitle).not.toEqual(prevTitle)
  })
})
