import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

test.describe('Tooltip', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'tooltip')
  })

  test('hover 触发 Tooltip 显示', async ({ page }) => {
    // hover 触发按钮（"鼠标移入" 这个 button 在 Tooltip 包裹内）
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    // 等待 tooltip 出现 — Tooltip 渲染在 body 下，通过 role="tooltip" 定位
    const tooltip = page.getByRole('tooltip').filter({ hasText: '这是提示文字' }).first()
    await expect(tooltip).toBeVisible({ timeout: 3000 })
  })

  test('Tooltip 有 role="tooltip"', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    const tooltip = page.getByRole('tooltip').filter({ hasText: '这是提示文字' }).first()
    await expect(tooltip).toBeVisible({ timeout: 3000 })
    await expect(tooltip).toHaveAttribute('role', 'tooltip')
  })

  test('鼠标离开后 Tooltip 消失', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '鼠标移入' }).first()
    await trigger.hover()
    const tooltip = page.getByRole('tooltip').filter({ hasText: '这是提示文字' }).first()
    await expect(tooltip).toBeVisible({ timeout: 3000 })

    // 鼠标移到页面左上角
    await page.mouse.move(0, 0)
    await page.waitForTimeout(500)
    await expect(tooltip).not.toBeVisible({ timeout: 3000 })
  })
})
