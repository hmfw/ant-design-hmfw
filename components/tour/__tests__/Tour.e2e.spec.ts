import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Tour 漫游引导', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'tour')
  })

  test('点击开始引导显示第一步弹层', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()

    const popover = page.locator('.hmfw-tour-popover').first()
    await expect(popover).toBeVisible()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第一步')
    await expect(popover.locator('.hmfw-tour-description')).toContainText('介绍页面的主要功能')

    // 第一步无「上一步」按钮
    await expect(popover.locator('.hmfw-tour-prev-btn')).toHaveCount(0)
  })

  test('下一步与上一步切换引导步骤', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()
    const popover = page.locator('.hmfw-tour-popover').first()

    await popover.locator('.hmfw-tour-next-btn').click()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第二步')

    // 第二个指示点激活
    await expect(popover.locator('.hmfw-tour-indicator-active')).toHaveCount(1)

    await popover.locator('.hmfw-tour-prev-btn').click()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第一步')
  })

  test('最后一步点击完成关闭引导', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()
    const popover = page.locator('.hmfw-tour-popover').first()

    // 推进到最后一步（共 3 步）
    await popover.locator('.hmfw-tour-next-btn').click()
    await popover.locator('.hmfw-tour-next-btn').click()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('完成')

    // 最后一步按钮文本为「完成」，点击后关闭
    const finishBtn = popover.locator('.hmfw-tour-next-btn')
    await expect(finishBtn).toContainText('完成')
    await finishBtn.click()

    await expect(page.locator('.hmfw-tour-popover')).toHaveCount(0)
  })
})
