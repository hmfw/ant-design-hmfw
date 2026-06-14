import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Transfer 穿梭框', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'transfer')
  })

  test('基础穿梭框渲染左右两栏', async ({ page }) => {
    const transfer = page.locator('.hmfw-transfer').first()
    const sections = transfer.locator('.hmfw-transfer-section')
    await expect(sections).toHaveCount(2)

    // 右栏（已选）初始包含 targetKeys=['1','3','5'] → 选项 2/4/6
    const rightItems = sections.nth(1).locator('.hmfw-transfer-list-content-item')
    await expect(rightItems).toHaveCount(3)
  })

  test('勾选左栏条目后点击右移按钮移动到右栏', async ({ page }) => {
    const transfer = page.locator('.hmfw-transfer').first()
    const left = transfer.locator('.hmfw-transfer-section').nth(0)
    const right = transfer.locator('.hmfw-transfer-section').nth(1)

    const leftItemsBefore = await left.locator('.hmfw-transfer-list-content-item').count()
    const rightItemsBefore = await right.locator('.hmfw-transfer-list-content-item').count()

    // 选中左栏第一个条目
    await left.locator('.hmfw-transfer-list-content-item').first().click()
    await expect(left.locator('.hmfw-transfer-list-content-item-checked')).toHaveCount(1)

    // 点击右移按钮
    await transfer.locator('.hmfw-transfer-actions button').first().click()

    await expect(left.locator('.hmfw-transfer-list-content-item')).toHaveCount(leftItemsBefore - 1)
    await expect(right.locator('.hmfw-transfer-list-content-item')).toHaveCount(rightItemsBefore + 1)
  })

  test('搜索框过滤左栏条目', async ({ page }) => {
    const transfer = page.locator('.hmfw-transfer').first()
    const left = transfer.locator('.hmfw-transfer-section').nth(0)
    const search = left.locator('.hmfw-transfer-list-search input')

    await search.fill('选项 10')
    await expect(left.locator('.hmfw-transfer-list-content-item')).toHaveCount(1)
    await expect(left.locator('.hmfw-transfer-list-content-item')).toContainText('选项 10')
  })
})
