import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Radio 单选框', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'radio')
  })

  test('基础单选框点击后选中', async ({ page }) => {
    const wrapper = page.locator('.hmfw-radio-wrapper').filter({ hasText: '单选框' }).first()
    const radio = wrapper.locator('.hmfw-radio')
    await expect(radio).not.toHaveClass(/hmfw-radio-checked/)

    await wrapper.click()
    await expect(radio).toHaveClass(/hmfw-radio-checked/)
  })

  test('禁用单选框点击无效', async ({ page }) => {
    const disabled = page.locator('.hmfw-radio-wrapper-disabled').filter({ hasText: '禁用单选框' }).first()
    await expect(disabled).toBeVisible()
    await disabled.click({ force: true })
    await expect(disabled.locator('.hmfw-radio')).not.toHaveClass(/hmfw-radio-checked/)
  })

  test('单选组内选项互斥，只能选中一个', async ({ page }) => {
    // RadioGroup demo：value1 初始 'a'（选项 A）
    const group = page.locator('.hmfw-radio-group').first()
    const optionA = group.locator('.hmfw-radio-wrapper').filter({ hasText: '选项 A' })
    const optionB = group.locator('.hmfw-radio-wrapper').filter({ hasText: '选项 B' })

    await expect(optionA.locator('.hmfw-radio')).toHaveClass(/hmfw-radio-checked/)

    // 选中选项 B
    await optionB.click()
    await expect(optionB.locator('.hmfw-radio')).toHaveClass(/hmfw-radio-checked/)
    // 选项 A 取消选中
    await expect(optionA.locator('.hmfw-radio')).not.toHaveClass(/hmfw-radio-checked/)
  })
})
