import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Cascader', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'cascader')
  })

  test('点击选择器打开下拉级联菜单并显示第一级选项', async ({ page }) => {
    const selector = page.locator('.hmfw-cascader-selector').first()
    await selector.click()
    const dropdown = page.locator('.hmfw-cascader-dropdown').first()
    await expect(dropdown).toBeVisible()
    // 第一级出现 浙江/江苏
    await expect(dropdown.locator('.hmfw-cascader-menu-item', { hasText: '浙江' })).toBeVisible()
    await expect(dropdown.locator('.hmfw-cascader-menu-item', { hasText: '江苏' })).toBeVisible()
  })

  test('点击第一级项展开第二级菜单', async ({ page }) => {
    const selector = page.locator('.hmfw-cascader-selector').first()
    await selector.click()
    const dropdown = page.locator('.hmfw-cascader-dropdown').first()
    await dropdown.locator('.hmfw-cascader-menu-item', { hasText: '浙江' }).click()
    // 第二级出现 杭州/宁波
    await expect(dropdown.locator('.hmfw-cascader-menu-item', { hasText: '杭州' })).toBeVisible()
    await expect(dropdown.locator('.hmfw-cascader-menu-item', { hasText: '宁波' })).toBeVisible()
    // 第一级浙江变为激活态
    await expect(dropdown.locator('.hmfw-cascader-menu-item', { hasText: '浙江' })).toHaveClass(
      /hmfw-cascader-menu-item-active/,
    )
  })

  test('逐级点到叶子后下拉关闭且选择器显示选中文本', async ({ page }) => {
    const selector = page.locator('.hmfw-cascader-selector').first()
    await selector.click()
    const dropdown = page.locator('.hmfw-cascader-dropdown').first()
    await dropdown.locator('.hmfw-cascader-menu-item', { hasText: '浙江' }).click()
    await dropdown.locator('.hmfw-cascader-menu-item', { hasText: '杭州' }).click()
    await dropdown.locator('.hmfw-cascader-menu-item', { hasText: '西湖区' }).click()
    // 叶子点击后下拉关闭
    await expect(page.locator('.hmfw-cascader-dropdown')).toHaveCount(0)
    // 选择器显示完整选中文本
    await expect(selector).toContainText('西湖区')
    await expect(selector).toContainText('浙江')
    await expect(selector).toContainText('杭州')
  })

  test('点击页面空白处关闭下拉', async ({ page }) => {
    const selector = page.locator('.hmfw-cascader-selector').first()
    await selector.click()
    await expect(page.locator('.hmfw-cascader-dropdown').first()).toBeVisible()
    await page.locator('body').click({ position: { x: 5, y: 5 } })
    await expect(page.locator('.hmfw-cascader-dropdown')).toHaveCount(0)
  })

  test('选中后出现清除按钮，点击清除恢复占位文本', async ({ page }) => {
    const selector = page.locator('.hmfw-cascader-selector').first()
    await selector.click()
    const dropdown = page.locator('.hmfw-cascader-dropdown').first()
    await dropdown.locator('.hmfw-cascader-menu-item', { hasText: '浙江' }).click()
    await dropdown.locator('.hmfw-cascader-menu-item', { hasText: '杭州' }).click()
    await dropdown.locator('.hmfw-cascader-menu-item', { hasText: '西湖区' }).click()
    await expect(selector).toContainText('西湖区')
    // 清除按钮出现并点击
    const clear = page.locator('.hmfw-cascader-clear').first()
    await expect(clear).toBeVisible()
    await clear.click()
    // 恢复占位文本
    await expect(page.locator('.hmfw-cascader-selection-placeholder').first()).toBeVisible()
    await expect(selector).toContainText('请选择省市区')
  })

  test('hover 触发模式下悬停展开子菜单', async ({ page }) => {
    // 定位 hover demo 实例（placeholder 为「鼠标悬停展开」）
    const hoverSelector = page.locator('.hmfw-cascader-selector').filter({ hasText: '鼠标悬停展开' })
    await hoverSelector.click()
    const dropdown = page.locator('.hmfw-cascader-dropdown').first()
    await expect(dropdown).toBeVisible()
    await expect(dropdown.locator('.hmfw-cascader-menu-item', { hasText: '前端' })).toBeVisible()
    // 悬停第一级展开第二级，无需点击
    await dropdown.locator('.hmfw-cascader-menu-item', { hasText: '前端' }).hover()
    await expect(dropdown.locator('.hmfw-cascader-menu-item', { hasText: '框架' })).toBeVisible()
    await expect(dropdown.locator('.hmfw-cascader-menu-item', { hasText: '语言' })).toBeVisible()
  })
})
