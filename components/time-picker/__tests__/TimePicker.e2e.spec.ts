import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('TimePicker 时间选择框', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'time-picker')
  })

  test('点击输入框打开时间面板并显示三列', async ({ page }) => {
    const picker = page.locator('.hmfw-time-picker').first()
    await picker.locator('.hmfw-time-picker-input-inner').click()

    await expect(picker).toHaveClass(/hmfw-time-picker-open/)
    const panel = page.locator('.hmfw-time-picker-panel').first()
    await expect(panel).toBeVisible()
    // 时、分、秒三列
    await expect(panel.locator('.hmfw-time-picker-panel-column')).toHaveCount(3)
  })

  test('选择时分秒并点击确定后回填到输入框', async ({ page }) => {
    const picker = page.locator('.hmfw-time-picker').first()
    await picker.locator('.hmfw-time-picker-input-inner').click()

    const panel = page.locator('.hmfw-time-picker-panel').first()
    const columns = panel.locator('.hmfw-time-picker-panel-column')

    await columns.nth(0).locator('[data-value="10"]').click()
    await columns.nth(1).locator('[data-value="30"]').click()
    await columns.nth(2).locator('[data-value="45"]').click()

    // 默认 needConfirm=true，需点击确定
    await panel.locator('.hmfw-time-picker-panel-footer-ok').click()

    await expect(picker.locator('.hmfw-time-picker-input-inner')).toHaveValue('10:30:45')
  })

  test('禁用的时间选择框点击不打开面板', async ({ page }) => {
    // 第二个 TimePicker 为禁用态
    const picker = page.locator('.hmfw-time-picker').nth(1)
    await picker.locator('.hmfw-time-picker-input-inner').click({ force: true })
    await expect(picker).not.toHaveClass(/hmfw-time-picker-open/)
  })
})
