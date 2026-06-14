import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Table 表格', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'table')
  })

  test('基础表格渲染表头与数据行', async ({ page }) => {
    const table = page.locator('.hmfw-table').first()
    await expect(table).toBeVisible()

    const headers = table.locator('.hmfw-table-thead th')
    await expect(headers).toHaveCount(3)
    await expect(headers.nth(0)).toContainText('姓名')
    await expect(headers.nth(1)).toContainText('年龄')
    await expect(headers.nth(2)).toContainText('住址')

    const rows = table.locator('.hmfw-table-tbody .hmfw-table-row')
    await expect(rows).toHaveCount(2)
    await expect(rows.nth(0)).toContainText('胡彦斌')
    await expect(rows.nth(0)).toContainText('西湖区湖底公园1号')
  })

  test('点击可排序列按年龄升序排列', async ({ page }) => {
    // 含排序列的表格（TableSorter）
    const table = page
      .locator('.hmfw-table')
      .filter({ has: page.locator('.hmfw-table-column-has-sorters') })
      .first()

    const sortHeader = table.locator('.hmfw-table-column-has-sorters').first()
    await sortHeader.click()

    // 升序：年龄列升序后第一行为 28（李明）
    const firstRow = table.locator('.hmfw-table-tbody .hmfw-table-row').first()
    await expect(firstRow).toContainText('李明')

    // 再次点击切换为降序，第一行为 42（胡彦祖）
    await sortHeader.click()
    await expect(table.locator('.hmfw-table-tbody .hmfw-table-row').first()).toContainText('胡彦祖')
  })

  test('行选择勾选复选框后行高亮并更新已选', async ({ page }) => {
    // 含行选择的表格（TableRowSelection）
    const table = page
      .locator('.hmfw-table')
      .filter({ has: page.locator('.hmfw-table-selection-column') })
      .first()

    const firstRow = table.locator('.hmfw-table-tbody .hmfw-table-row').first()
    await firstRow.locator('.hmfw-checkbox-wrapper').click()

    await expect(firstRow).toHaveClass(/hmfw-table-row-selected/)
    // demo 中展示已选 key
    await expect(page.getByText('已选择：1', { exact: false })).toBeVisible()
  })
})
