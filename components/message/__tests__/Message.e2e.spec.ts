import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Message 全局提示', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'message')
  })

  test('点击成功按钮显示成功提示', async ({ page }) => {
    await page.getByRole('button', { name: '成功' }).first().click()

    const notice = page.locator('.hmfw-message-notice-success')
    await expect(notice).toBeVisible()
    await expect(notice.locator('.hmfw-message-notice-title')).toHaveText('操作成功！')
  })

  test('不同类型按钮显示对应提示', async ({ page }) => {
    await page.getByRole('button', { name: '错误' }).first().click()
    await expect(page.locator('.hmfw-message-notice-error')).toContainText('操作失败，请重试。')

    await page.getByRole('button', { name: '警告' }).first().click()
    await expect(page.locator('.hmfw-message-notice-warning')).toContainText('请注意此操作的风险。')

    await page.getByRole('button', { name: '信息' }).first().click()
    await expect(page.locator('.hmfw-message-notice-info')).toContainText('这是一条普通提示信息。')
  })

  test('提示在默认时长后自动消失', async ({ page }) => {
    await page.getByRole('button', { name: '成功' }).first().click()
    const notice = page.locator('.hmfw-message-notice-success')
    await expect(notice).toBeVisible()

    // 默认 3s 自动关闭，留足动画时间
    await expect(notice).toHaveCount(0, { timeout: 6000 })
  })
})
