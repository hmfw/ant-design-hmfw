import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Notification 通知提醒框', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'notification')
  })

  test('点击成功按钮显示带标题和描述的通知', async ({ page }) => {
    await page.getByRole('button', { name: '成功' }).first().click()

    const notice = page.locator('.hmfw-notification-notice-success')
    await expect(notice).toBeVisible()
    await expect(notice.locator('.hmfw-notification-notice-message')).toHaveText('操作成功')
    await expect(notice.locator('.hmfw-notification-notice-description')).toHaveText('您的操作已成功完成，请查看详情。')
  })

  test('点击关闭按钮移除通知', async ({ page }) => {
    await page.getByRole('button', { name: '信息' }).first().click()
    const notice = page.locator('.hmfw-notification-notice-info')
    await expect(notice).toBeVisible()

    await notice.locator('.hmfw-notification-notice-close').click()
    await expect(notice).toHaveCount(0, { timeout: 3000 })
  })

  test('不同类型按钮显示对应通知', async ({ page }) => {
    await page.getByRole('button', { name: '错误' }).first().click()
    await expect(page.locator('.hmfw-notification-notice-error')).toContainText('操作失败')

    await page.getByRole('button', { name: '警告' }).first().click()
    await expect(page.locator('.hmfw-notification-notice-warning')).toContainText('警告')
  })
})
