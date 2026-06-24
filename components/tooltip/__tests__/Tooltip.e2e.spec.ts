import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

test.describe('Tooltip', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'tooltip')
  })

  // 可见的 Tooltip 选择器（过滤 display:none 的隐藏工具提示）
  const getVisibleTooltip = (page: any) =>
    page.locator('.hmfw-tooltip:not(.hmfw-tooltip-hidden)').filter({ hasText: '这是提示文字' }).first()

  test('hover 触发 Tooltip 显示', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    await page.waitForTimeout(500) // 等待 mouseEnterDelay + Vue 响应性
    await expect(getVisibleTooltip(page)).toBeVisible()
  })

  test('Tooltip 有 role="tooltip"', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    await page.waitForTimeout(500)
    const tooltip = getVisibleTooltip(page)
    await expect(tooltip).toBeVisible()
    // role="tooltip" 在内部的 .hmfw-tooltip-content 元素上
    await expect(tooltip.locator('.hmfw-tooltip-content')).toHaveAttribute('role', 'tooltip')
  })

  test('鼠标离开后 Tooltip 消失', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    await page.waitForTimeout(500)
    const tooltip = getVisibleTooltip(page)
    await expect(tooltip).toBeVisible()

    // 鼠标移到页面左上角
    await page.mouse.move(0, 0)
    await page.waitForTimeout(500)
    await expect(tooltip).not.toBeVisible({ timeout: 3000 })
  })
})
