import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)
}

// 页面上有多个 Dropdown 组件，全部始终渲染在 DOM 中（由 Teleport 到 body），
// 关闭的带 hmfw-dropdown-hidden 类（display:none），必须用 :not(.hmfw-dropdown-hidden) 过滤。
const visibleDropdownContent = () => '.hmfw-dropdown:not(.hmfw-dropdown-hidden) .hmfw-dropdown-content'

test.describe('Dropdown', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'dropdown')
  })

  test('hover 打开下拉菜单', async ({ page }) => {
    // 默认 trigger 是 hover，使用 hover 触发（必须用 getByRole 避免匹配源码展示区）
    const trigger = page.getByRole('button', { name: '下拉菜单' }).first()
    await trigger.hover()
    await page.waitForTimeout(300) // 等待 mouseEnterDelay (0.15s)
    const menu = page.locator(visibleDropdownContent()).first()
    await expect(menu).toBeVisible()
  })

  test('点击触发下拉菜单', async ({ page }) => {
    // 使用 trigger="click" 的按钮
    const trigger = page.getByRole('button', { name: '点击触发' }).first()
    await trigger.click()
    const menu = page.locator(visibleDropdownContent()).first()
    await expect(menu).toBeVisible()
  })

  test('点击菜单项后菜单关闭', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '点击触发' }).first()
    await trigger.click()
    const dropdown = page.locator(visibleDropdownContent()).first()
    await expect(dropdown).toBeVisible()
    // 在 dropdown 内容内查找菜单项，避免匹配源码展示区
    const menuItem = dropdown.getByText('菜单项一').first()
    await menuItem.click()
    await page.waitForTimeout(200)
    await expect(dropdown).not.toBeVisible({ timeout: 3000 })
  })

  test('点击外部关闭下拉', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '点击触发' }).first()
    await trigger.click()
    const dropdown = page.locator(visibleDropdownContent()).first()
    await expect(dropdown).toBeVisible()
    await page.locator('body').click({ position: { x: 10, y: 10 } })
    await expect(dropdown).not.toBeVisible({ timeout: 3000 })
  })

  test('Escape 关闭下拉', async ({ page }) => {
    const trigger = page.getByRole('button', { name: '点击触发' }).first()
    await trigger.click()
    const dropdown = page.locator(visibleDropdownContent()).first()
    await expect(dropdown).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(dropdown).not.toBeVisible({ timeout: 3000 })
  })
})
