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

  test('时间列可以用鼠标滚轮自由滚动', async ({ page }) => {
    const picker = page.locator('.hmfw-time-picker').first()
    await picker.locator('.hmfw-time-picker-input-inner').click()

    const panel = page.locator('.hmfw-time-picker-panel').first()
    await expect(panel).toBeVisible()

    // 获取第一列（小时列）
    const hourColumn = panel.locator('.hmfw-time-picker-panel-column').first()

    // 获取初始滚动位置
    const initialScroll = await hourColumn.evaluate((el) => el.scrollTop)

    // 将鼠标移到列上并向下滚动
    const box = await hourColumn.boundingBox()
    if (!box) throw new Error('无法获取列的位置')
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await page.waitForTimeout(200)
    await page.mouse.wheel(0, 200)
    await page.waitForTimeout(500)

    // 验证滚动后位置变化
    const afterScroll = await hourColumn.evaluate((el) => el.scrollTop)
    expect(afterScroll).toBeGreaterThan(initialScroll)
  })
})
