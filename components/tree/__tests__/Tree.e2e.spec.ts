import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Tree 树形控件', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'tree')
  })

  test('初始展开态下子节点（父节点 1-0、父节点 1-1）可见', async ({ page }) => {
    // 锁定 TreeBasic 第一个 tree 实例
    const tree = page.locator('.hmfw-tree').first()
    await expect(tree).toBeVisible()

    // 根节点可见
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0"]')).toBeVisible()
    // expandedKeys 初始 ['0-0','0-0-0']，父节点 1 已展开，子节点应可见
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0"]')).toBeVisible()
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-1"]')).toBeVisible()
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0"] .hmfw-tree-title')).toHaveText('父节点 1-0')
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-1"] .hmfw-tree-title')).toHaveText('父节点 1-1')
  })

  test('点击父节点 switcher 收起其子节点', async ({ page }) => {
    const tree = page.locator('.hmfw-tree').first()

    // 父节点 1-0(0-0-0) 初始展开，其叶子(0-0-0-0/0-0-0-1)可见
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0-0"]')).toBeVisible()
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0-1"]')).toBeVisible()

    // 点击 0-0-0 的 switcher 收起
    await tree.locator('.hmfw-tree-treenode[data-key="0-0-0"] .hmfw-tree-switcher').click()

    // 收起后子节点从 DOM 移除
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0-0"]')).toHaveCount(0)
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0-1"]')).toHaveCount(0)
  })

  test('再次点击 switcher 重新展开子节点', async ({ page }) => {
    const tree = page.locator('.hmfw-tree').first()
    const switcher = tree.locator('.hmfw-tree-treenode[data-key="0-0-0"] .hmfw-tree-switcher')

    // 先收起
    await switcher.click()
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0-0"]')).toHaveCount(0)

    // 再展开
    await switcher.click()
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0-0"]')).toBeVisible()
    await expect(tree.locator('.hmfw-tree-treenode[data-key="0-0-0-1"]')).toBeVisible()
  })

  test('点击节点内容选中该节点', async ({ page }) => {
    const tree = page.locator('.hmfw-tree').first()
    const node = tree.locator('.hmfw-tree-treenode[data-key="0-0-1"]')
    const content = node.locator('.hmfw-tree-node-content-wrapper')

    // 初始未选中
    await expect(node).not.toHaveClass(/hmfw-tree-treenode-selected/)

    await content.click()

    // 选中后 treenode 与内容包裹层均带选中类
    await expect(node).toHaveClass(/hmfw-tree-treenode-selected/)
    await expect(content).toHaveClass(/hmfw-tree-node-selected/)
  })

  test('键盘 ArrowDown 移动激活节点并 Enter 选中', async ({ page }) => {
    const tree = page.locator('.hmfw-tree').first()
    const first = tree.locator('.hmfw-tree-treenode[data-key="0-0"]')
    const second = tree.locator('.hmfw-tree-treenode[data-key="0-0-0"]')

    // 聚焦首个 treeitem（tabindex=0）
    await first.focus()
    await expect(first).toHaveClass(/hmfw-tree-treenode-active/)

    // ArrowDown 将 active 转移到下一节点
    await first.press('ArrowDown')
    await expect(second).toHaveClass(/hmfw-tree-treenode-active/)
    await expect(first).not.toHaveClass(/hmfw-tree-treenode-active/)

    // Enter 选中当前激活节点
    await second.press('Enter')
    await expect(second).toHaveClass(/hmfw-tree-treenode-selected/)
  })
})
