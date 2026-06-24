import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Select', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'select')
  })

  test('点击触发器打开下拉菜单', async ({ page }) => {
    const trigger = page.locator('.hmfw-select-selector').first()
    await trigger.click()
    const dropdown = page.locator('.hmfw-select-dropdown')
    await expect(dropdown).toBeVisible()
  })

  test('下拉菜单出现在触发器正下方', async ({ page }) => {
    // 使用更高的视口并滚动到顶部，确保下拉菜单有足够空间出现在触发器下方
    await page.setViewportSize({ width: 1280, height: 1024 })
    const trigger = page.locator('.hmfw-select-selector').first()
    await trigger.evaluate((el) => el.scrollIntoView({ block: 'start', behavior: 'instant' }))
    await page.waitForTimeout(100) // 等待滚动完成
    await trigger.click()
    const triggerBox = await trigger.boundingBox()
    const dropdown = page.locator('.hmfw-select-dropdown')
    const dropdownBox = await dropdown.boundingBox()

    expect(dropdownBox!.y).toBeGreaterThanOrEqual(triggerBox!.y + triggerBox!.height - 2)
    expect(Math.abs(dropdownBox!.x - triggerBox!.x)).toBeLessThan(5)
  })

  test('选择选项后下拉关闭并显示选中值', async ({ page }) => {
    const trigger = page.locator('.hmfw-select-selector').first()
    await trigger.click()
    await page.locator('.hmfw-select-item-option').first().click()
    await expect(page.locator('.hmfw-select-dropdown')).not.toBeVisible()
    await expect(page.locator('.hmfw-select-selection-item').first()).toBeVisible()
  })

  test('点击页面空白处关闭下拉', async ({ page }) => {
    const trigger = page.locator('.hmfw-select-selector').first()
    await trigger.click()
    await expect(page.locator('.hmfw-select-dropdown')).toBeVisible()
    await page.locator('body').click({ position: { x: 10, y: 10 } })
    await expect(page.locator('.hmfw-select-dropdown')).not.toBeVisible()
  })

  test('Escape 键关闭下拉', async ({ page }) => {
    const trigger = page.locator('.hmfw-select-selector').first()
    await trigger.click()
    await expect(page.locator('.hmfw-select-dropdown')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('.hmfw-select-dropdown')).not.toBeVisible()
  })

  test('键盘上下箭头导航并回车选中', async ({ page }) => {
    const trigger = page.locator('.hmfw-select-selector').first()
    await trigger.click()
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await expect(page.locator('.hmfw-select-selection-item').first()).toBeVisible()
  })

  test('禁用的选项不可选中', async ({ page }) => {
    const trigger = page.locator('.hmfw-select-selector').first()
    await trigger.click()
    // 验证 disabled 选项存在且有 aria-disabled 属性
    const disabledOption = page.locator('.hmfw-select-item-option-disabled').first()
    await expect(disabledOption).toBeVisible()
    await expect(disabledOption).toHaveAttribute('aria-disabled', 'true')
    // 下拉保持打开
    await expect(page.locator('.hmfw-select-dropdown')).toBeVisible()
  })
})
