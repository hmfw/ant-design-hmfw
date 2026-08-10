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

  // 折叠态菜单项走 Trigger 的 cloneChild：不插入 wrapper，事件与 ref 直接合并到 li 上。
  // 布局与定位必须在真实视口验证 —— 此前 triggerDisplay="contents" 就是为了让 wrapper
  // 不生成盒模型，改用 cloneChild 后需确认几何未发生变化。
  test('折叠态菜单项：无 wrapper，布局与 Tooltip 定位不变', async ({ page }) => {
    // MenuCollapsed demo 初始为展开态，点按钮折叠
    const toggle = page.getByRole('button', { name: '折叠' }).first()
    await toggle.scrollIntoViewIfNeeded()
    await toggle.click()

    const menu = page.locator('.hmfw-menu-inline-collapsed').first()
    await expect(menu).toBeVisible()
    const item = menu.locator('.hmfw-menu-item').first()
    await expect(item).toBeVisible()

    // li 直接挂在 ul 下，祖先链上没有 Trigger wrapper
    expect(await item.evaluate((el) => el.parentElement?.tagName)).toBe('UL')
    expect(await item.evaluate((el) => !!el.closest('.hmfw-trigger'))).toBe(false)

    // 外层容器有 0.2s width 过渡，需等稳定后再测几何
    await expect.poll(async () => Math.round((await menu.boundingBox())!.width), { timeout: 2000 }).toBe(80)

    // 折叠态布局：item 铺满菜单内容宽度（80px 菜单 - 左右各 4px 内边距 = 72px）
    const menuBox = (await menu.boundingBox())!
    const itemBox = (await item.boundingBox())!
    expect(itemBox.width).toBeGreaterThanOrEqual(menuBox.width - 10)
    expect(itemBox.height).toBeGreaterThan(20)

    // hover 弹出 Tooltip，定位在 item 右侧并垂直居中（定位基准正确解析到 li 本身）
    await item.hover()
    const tip = page.locator('.hmfw-tooltip').first()
    await expect(tip).toBeVisible({ timeout: 3000 })
    const tipBox = (await tip.boundingBox())!
    expect(tipBox.x).toBeGreaterThanOrEqual(itemBox.x + itemBox.width)
    expect(Math.abs(tipBox.y + tipBox.height / 2 - (itemBox.y + itemBox.height / 2))).toBeLessThan(30)

    // 事件合并未顶掉菜单项原有 onClick
    await item.click()
    await expect(item).toHaveClass(/hmfw-menu-item-selected/)
  })
})
