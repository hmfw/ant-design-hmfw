import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Checkbox 多选框', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'checkbox')
  })

  test('基础复选框点击勾选与取消', async ({ page }) => {
    const wrapper = page.locator('.hmfw-checkbox-wrapper').filter({ hasText: '普通复选框' }).first()
    const checkbox = wrapper.locator('.hmfw-checkbox')
    await expect(checkbox).not.toHaveClass(/hmfw-checkbox-checked/)

    await wrapper.click()
    await expect(checkbox).toHaveClass(/hmfw-checkbox-checked/)

    await wrapper.click()
    await expect(checkbox).not.toHaveClass(/hmfw-checkbox-checked/)
  })

  test('禁用复选框点击无效', async ({ page }) => {
    const disabled = page.locator('.hmfw-checkbox-wrapper-disabled').filter({ hasText: '禁用复选框' }).first()
    await expect(disabled).toBeVisible()
    await disabled.click({ force: true })
    await expect(disabled.locator('.hmfw-checkbox')).not.toHaveClass(/hmfw-checkbox-checked/)
  })

  test('全选复选框初始为半选，点击后全选', async ({ page }) => {
    // CheckboxCheckAll demo：初始 checkedList=['A','B']，全选项为 indeterminate
    const checkAll = page.locator('.hmfw-checkbox-wrapper').filter({ hasText: '全选' }).first()
    await expect(checkAll.locator('.hmfw-checkbox')).toHaveClass(/hmfw-checkbox-indeterminate/)

    // 点击全选
    await checkAll.click()
    await expect(checkAll.locator('.hmfw-checkbox')).toHaveClass(/hmfw-checkbox-checked/)
    await expect(checkAll.locator('.hmfw-checkbox')).not.toHaveClass(/hmfw-checkbox-indeterminate/)

    // 组内全部选中（CheckAll demo 的分组：选项 A/B/C/D）
    const group = page
      .locator('.hmfw-checkbox-group')
      .filter({ has: page.locator('.hmfw-checkbox-label', { hasText: '选项 D' }) })
      .first()
    const checkedItems = group.locator('.hmfw-checkbox-checked')
    await expect(checkedItems).toHaveCount(4)
  })
})
