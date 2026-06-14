import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Input 输入框', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'input')
  })

  test('普通输入框输入文本后 value 正确', async ({ page }) => {
    const input = page.locator('input[placeholder="请输入内容"]')
    await expect(input).toBeVisible()
    await input.fill('Hello Kiro')
    await expect(input).toHaveValue('Hello Kiro')
  })

  test('disabled 输入框不可编辑', async ({ page }) => {
    const input = page.locator('input[placeholder="禁用状态"]')
    await expect(input).toBeVisible()
    await expect(input).toBeDisabled()
    await expect(input).not.toBeEditable()
  })

  test('readonly 输入框为只读', async ({ page }) => {
    const input = page.locator('input[placeholder="只读状态"]')
    await expect(input).toBeVisible()
    await expect(input).toHaveAttribute('readonly', '')
    await expect(input).not.toBeEditable()
  })

  test('密码框点击切换图标在 password/text 之间切换 type', async ({ page }) => {
    const passwordInput = page.locator('input[placeholder="请输入密码"]')
    await expect(passwordInput).toBeVisible()
    // 初始为 password 类型
    await expect(passwordInput).toHaveAttribute('type', 'password')

    // 切换图标位于密码包裹层内
    const toggleIcon = page.locator('.hmfw-input-password .hmfw-input-password-icon').first()
    await toggleIcon.click()
    await expect(passwordInput).toHaveAttribute('type', 'text')

    // 再次点击切回 password
    await toggleIcon.click()
    await expect(passwordInput).toHaveAttribute('type', 'password')
  })

  test('带字数统计的输入框输入后显示计数文本', async ({ page }) => {
    const input = page.locator('input[placeholder="带字符计数"]')
    await expect(input).toBeVisible()
    await input.fill('hello')

    // 计数后缀位于 affix 包裹层中，maxLength=50
    const count = page
      .locator('.hmfw-input-affix-wrapper', { has: page.locator('input[placeholder="带字符计数"]') })
      .locator('.hmfw-input-show-count-suffix')
    await expect(count).toHaveText('5 / 50')
  })
})
