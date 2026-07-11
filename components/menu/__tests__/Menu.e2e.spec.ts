import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Menu', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'menu')
  })

  // MenuInline 是页面上第一个 inline 模式菜单（MenuHorizontal 为 horizontal 模式）
  // 根节点同时带有 hmfw-menu-root 与 hmfw-menu-inline，子菜单列表也带 hmfw-menu-inline，
  // 因此用 .hmfw-menu-root.hmfw-menu-inline 精确限定到根节点。

  test('点击子菜单标题（导航二）展开其子菜单', async ({ page }) => {
    const menu = page.locator('.hmfw-menu-root.hmfw-menu-inline').first()
    const sub2 = menu.locator('.hmfw-menu-submenu', { hasText: '导航二' })
    const sub2Title = sub2.locator('.hmfw-menu-submenu-title')

    // 初始未展开
    await expect(sub2).not.toHaveClass(/hmfw-menu-submenu-open/)

    await sub2Title.click()

    await expect(sub2).toHaveClass(/hmfw-menu-submenu-open/)
    await expect(menu.getByText('选项五')).toBeVisible()
    await expect(menu.getByText('选项六')).toBeVisible()
  })

  test('再次点击已展开的子菜单标题收起', async ({ page }) => {
    const menu = page.locator('.hmfw-menu-root.hmfw-menu-inline').first()
    const sub2 = menu.locator('.hmfw-menu-submenu', { hasText: '导航二' })
    const sub2Title = sub2.locator('.hmfw-menu-submenu-title')

    await sub2Title.click()
    await expect(sub2).toHaveClass(/hmfw-menu-submenu-open/)

    await sub2Title.click()
    await expect(sub2).not.toHaveClass(/hmfw-menu-submenu-open/)
    // 收起后子菜单列表从 DOM 移除，选项五不可见
    await expect(menu.getByText('选项五')).not.toBeVisible()
  })

  test('点击菜单项后该项变为选中态', async ({ page }) => {
    const menu = page.locator('.hmfw-menu-root.hmfw-menu-inline').first()

    // 等待菜单渲染完成
    await menu.waitFor({ state: 'visible', timeout: 5000 })

    // “选项二” 应该已经可见（因为导航一初始就是展开的）
    const item = menu.locator('.hmfw-menu-item').filter({ hasText: '选项二' })
    await expect(item).toBeVisible({ timeout: 5000 })

    // 点击选项二
    await item.click()
    await page.waitForTimeout(300)

    // 验证选项二被选中
    await expect(item).toHaveClass(/hmfw-menu-item-selected/)
  })

  test('初始展开的子菜单（导航一）包含选中项时为选中态', async ({ page }) => {
    const menu = page.locator('.hmfw-menu-root.hmfw-menu-inline').first()
    const sub1 = menu.locator('.hmfw-menu-submenu', { hasText: '导航一' })

    // 导航一初始展开，并且包含选中的”选项一”(key='1')，因此有 selected 类
    await expect(sub1).toHaveClass(/hmfw-menu-submenu-open/)
    await expect(sub1).toHaveClass(/hmfw-menu-submenu-selected/)
    await expect(menu.getByText('选项一')).toBeVisible()
    await expect(menu.getByText('选项三')).toBeVisible()
  })

  test('horizontal 模式点击菜单项切换选中', async ({ page }) => {
    const menu = page.locator('.hmfw-menu-root.hmfw-menu-horizontal').first()
    const userItem = menu.locator('.hmfw-menu-item', { hasText: '用户管理' })

    // 初始选中”首页”，用户管理未选中
    await expect(userItem).not.toHaveClass(/hmfw-menu-item-selected/)

    await userItem.click()

    await expect(userItem).toHaveClass(/hmfw-menu-item-selected/)
  })
})
