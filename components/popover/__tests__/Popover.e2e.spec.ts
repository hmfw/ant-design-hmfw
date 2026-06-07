import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

// 必须排除 PurePanel（.hmfw-popover-pure），它是始终可见的内联展示元素，
// 而非实际的弹层 overlay（由 Tooltip 通过 Teleport 渲染到 body）。
const popoverInner = () => '.hmfw-popover:not(.hmfw-popover-pure) .hmfw-popover-inner'

test.describe('Popover', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'popover')
  })

  test('hover 触发 Popover 显示', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    const popover = page.locator(popoverInner()).first()
    await expect(popover).toBeVisible({ timeout: 3000 })
    await expect(popover).toContainText('气泡卡片')
  })

  test('Popover 有 role="tooltip"', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    const popover = page.locator('[role="tooltip"]').filter({ hasText: '气泡卡片' }).first()
    await expect(popover).toBeVisible({ timeout: 3000 })
  })

  test('鼠标离开后 Popover 消失', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    const popover = page.locator(popoverInner()).first()
    await expect(popover).toBeVisible({ timeout: 3000 })
    // 鼠标移到页面左上角
    await page.mouse.move(0, 0)
    await page.waitForTimeout(500)
    await expect(popover).not.toBeVisible({ timeout: 3000 })
  })
})
