import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Form', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'form')
  })

  // 页面同时渲染多个 demo，统一锁定到含「校验」按钮的 FormValidation 表单实例
  const scopeValidationForm = (page: any) =>
    page.locator('form.hmfw-form').filter({ has: page.getByRole('button', { name: '校验', exact: true }) })

  test('必填字段为空时点击校验，出现错误信息', async ({ page }) => {
    const form = scopeValidationForm(page)
    const emailItem = form.locator('.hmfw-form-item').filter({ has: page.getByPlaceholder('请输入邮箱') })

    await form.getByRole('button', { name: '校验', exact: true }).click()

    const explain = emailItem.locator('.hmfw-form-item-explain')
    await expect(explain).toBeVisible()
    await expect(explain).toHaveText('请输入邮箱')
    await expect(emailItem).toHaveClass(/hmfw-form-item-has-error/)
  })

  test('填入合法值后再次校验，错误信息消失', async ({ page }) => {
    const form = scopeValidationForm(page)
    const emailInput = form.getByPlaceholder('请输入邮箱')
    const emailItem = form.locator('.hmfw-form-item').filter({ has: page.getByPlaceholder('请输入邮箱') })

    // 先触发一次空值校验，确认进入错误态
    await form.getByRole('button', { name: '校验', exact: true }).click()
    await expect(emailItem).toHaveClass(/hmfw-form-item-has-error/)

    // 填入合法邮箱后再次校验
    await emailInput.fill('test@example.com')
    await form.getByRole('button', { name: '校验', exact: true }).click()

    await expect(emailItem).not.toHaveClass(/hmfw-form-item-has-error/)
    await expect(emailItem.locator('.hmfw-form-item-explain')).toHaveCount(0)
  })

  test('邮箱格式非法时显示格式错误信息', async ({ page }) => {
    const form = scopeValidationForm(page)
    const emailInput = form.getByPlaceholder('请输入邮箱')
    const emailItem = form.locator('.hmfw-form-item').filter({ has: page.getByPlaceholder('请输入邮箱') })

    await emailInput.fill('not-an-email')
    await form.getByRole('button', { name: '校验', exact: true }).click()

    const explain = emailItem.locator('.hmfw-form-item-explain')
    await expect(explain).toBeVisible()
    await expect(explain).toHaveText('请输入有效的邮箱地址')
    await expect(emailItem).toHaveClass(/hmfw-form-item-has-error/)
  })

  test('点击清除校验按钮后错误信息被清除', async ({ page }) => {
    const form = scopeValidationForm(page)
    const emailItem = form.locator('.hmfw-form-item').filter({ has: page.getByPlaceholder('请输入邮箱') })

    // 先制造错误态
    await form.getByRole('button', { name: '校验', exact: true }).click()
    await expect(emailItem.locator('.hmfw-form-item-explain')).toBeVisible()

    // 清除校验
    await form.getByRole('button', { name: '清除校验', exact: true }).click()

    await expect(emailItem).not.toHaveClass(/hmfw-form-item-has-error/)
    await expect(emailItem.locator('.hmfw-form-item-explain')).toHaveCount(0)
  })

  test('必填项标签显示必填标记', async ({ page }) => {
    const form = scopeValidationForm(page)
    const emailItem = form.locator('.hmfw-form-item').filter({ has: page.getByPlaceholder('请输入邮箱') })

    // 邮箱为必填字段，FormItem 应带 required 类
    await expect(emailItem).toHaveClass(/hmfw-form-item-required/)
    await expect(emailItem.locator('.hmfw-form-item-label')).toBeVisible()
  })
})
