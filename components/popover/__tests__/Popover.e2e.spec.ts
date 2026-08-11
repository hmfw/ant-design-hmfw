import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

// 可见的 Popover 选择器（排除 PurePanel 和 hidden 状态）
const getVisiblePopover = (page: any) =>
  page
    .locator('.hmfw-popover:not(.hmfw-popover-pure):not(.hmfw-popover-hidden)')
    .filter({ hasText: '这是气泡卡片的内容' })
    .first()

test.describe('Popover', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'popover')
  })

  test('hover 触发 Popover 显示', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    await page.waitForTimeout(200) // 等待 mouseEnterDelay + Vue 响应性
    await expect(getVisiblePopover(page)).toBeVisible()
  })

  test('Popover 有 role="tooltip"', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    await page.waitForTimeout(200)
    const popover = getVisiblePopover(page)
    await expect(popover).toBeVisible()
    // role="tooltip" 在内部的 .hmfw-popover-content 元素上
    await expect(popover.locator('.hmfw-popover-content')).toHaveAttribute('role', 'tooltip')
  })

  test('鼠标离开后 Popover 消失', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    await page.waitForTimeout(200)
    const popover = getVisiblePopover(page)
    await expect(popover).toBeVisible()

    // 鼠标移到页面左上角
    await page.mouse.move(0, 0)
    await page.waitForTimeout(500)
    await expect(popover).not.toBeVisible({ timeout: 3000 })
  })
})
