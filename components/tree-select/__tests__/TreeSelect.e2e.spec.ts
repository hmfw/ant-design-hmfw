import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('TreeSelect 树形选择', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'tree-select')
  })

  test('点击选择器打开下拉并显示根节点', async ({ page }) => {
    const treeSelect = page.locator('.hmfw-tree-select').first()
    await treeSelect.locator('.hmfw-tree-select-selector').click()

    await expect(treeSelect).toHaveClass(/hmfw-tree-select-open/)
    const dropdown = page.locator('.hmfw-tree-select-dropdown').first()
    await expect(dropdown).toBeVisible()
    await expect(dropdown.locator('.hmfw-tree-select-tree-node-content', { hasText: '父节点 1' })).toBeVisible()
    await expect(dropdown.locator('.hmfw-tree-select-tree-node-content', { hasText: '父节点 2' })).toBeVisible()
  })

  test('展开父节点显示子节点', async ({ page }) => {
    const treeSelect = page.locator('.hmfw-tree-select').first()
    await treeSelect.locator('.hmfw-tree-select-selector').click()

    const dropdown = page.locator('.hmfw-tree-select-dropdown').first()
    // 子节点初始不可见
    await expect(dropdown.locator('.hmfw-tree-select-tree-node-content', { hasText: '子节点 1-1' })).toHaveCount(0)

    // 点击父节点 1 的展开图标
    const parent1 = dropdown.locator('.hmfw-tree-select-tree-node').filter({ hasText: '父节点 1' }).first()
    await parent1.locator('.hmfw-tree-select-tree-switcher').click()

    await expect(dropdown.locator('.hmfw-tree-select-tree-node-content', { hasText: '子节点 1-1' })).toBeVisible()
    await expect(dropdown.locator('.hmfw-tree-select-tree-node-content', { hasText: '子节点 1-2' })).toBeVisible()
  })

  test('选择子节点后回填到选择器并关闭下拉', async ({ page }) => {
    const treeSelect = page.locator('.hmfw-tree-select').first()
    await treeSelect.locator('.hmfw-tree-select-selector').click()

    const dropdown = page.locator('.hmfw-tree-select-dropdown').first()
    const parent1 = dropdown.locator('.hmfw-tree-select-tree-node').filter({ hasText: '父节点 1' }).first()
    await parent1.locator('.hmfw-tree-select-tree-switcher').click()

    await dropdown.locator('.hmfw-tree-select-tree-node-content', { hasText: '子节点 1-1' }).click()

    // 下拉关闭，选择器显示选中项
    await expect(treeSelect).not.toHaveClass(/hmfw-tree-select-open/)
    await expect(treeSelect.locator('.hmfw-tree-select-selection-item')).toHaveText('子节点 1-1')
  })
})
