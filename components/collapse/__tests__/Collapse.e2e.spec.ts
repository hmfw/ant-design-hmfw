import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Collapse 折叠面板', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'collapse')
  })

  test('基础折叠面板默认展开第一个面板', async ({ page }) => {
    const collapse = page.locator('.hmfw-collapse').first()
    const items = collapse.locator('.hmfw-collapse-item')
    await expect(items).toHaveCount(3)

    await expect(items.nth(0)).toHaveClass(/hmfw-collapse-item-active/)
    await expect(collapse.locator('.hmfw-collapse-content-box', { hasText: '面板内容 1' })).toBeVisible()
  })

  test('点击面板标题展开与收起', async ({ page }) => {
    const collapse = page.locator('.hmfw-collapse').first()
    const item2 = collapse.locator('.hmfw-collapse-item').nth(1)

    // 初始未展开
    await expect(item2).not.toHaveClass(/hmfw-collapse-item-active/)

    // 点击标题展开
    await item2.locator('.hmfw-collapse-header').click()
    await expect(item2).toHaveClass(/hmfw-collapse-item-active/)
    await expect(collapse.locator('.hmfw-collapse-content-box', { hasText: '面板内容 2' })).toBeVisible()

    // 再次点击收起
    await item2.locator('.hmfw-collapse-header').click()
    await expect(item2).not.toHaveClass(/hmfw-collapse-item-active/)
  })

  test('手风琴模式同时只展开一个面板', async ({ page }) => {
    // CollapseAccordion：accordion 模式（页面中第二个 Collapse）
    const accordion = page.locator('.hmfw-collapse').nth(1)
    await expect(accordion).toBeVisible()

    // 打开第二个面板
    const item2 = accordion.locator('.hmfw-collapse-item').nth(1)
    await item2.locator('.hmfw-collapse-header').click()
    await expect(item2).toHaveClass(/hmfw-collapse-item-active/)

    // 手风琴模式下激活面板始终只有一个
    await expect(accordion.locator('.hmfw-collapse-item-active')).toHaveCount(1)
  })
})
