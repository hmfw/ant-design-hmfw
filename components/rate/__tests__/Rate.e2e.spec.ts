import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Rate 评分', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'rate')
  })

  test('基础评分默认值为 3，3 颗实心 2 颗空心', async ({ page }) => {
    const rate = page.locator('.hmfw-rate').first()
    await expect(rate.locator('.hmfw-rate-star')).toHaveCount(5)
    await expect(rate.locator('.hmfw-rate-star-full')).toHaveCount(3)
    await expect(rate.locator('.hmfw-rate-star-zero')).toHaveCount(2)
  })

  test('点击第 5 颗星将评分设为 5', async ({ page }) => {
    const rate = page.locator('.hmfw-rate').first()
    const fifthStar = rate.locator('.hmfw-rate-star').nth(4)

    // 滚动到元素可见并等待稳定
    await fifthStar.scrollIntoViewIfNeeded()
    await fifthStar.click()

    await expect(rate.locator('.hmfw-rate-star-full')).toHaveCount(5)
    await expect(page.getByText('评分：5', { exact: false })).toBeVisible()
  })

  test('禁用评分点击无效', async ({ page }) => {
    const disabledRate = page.locator('.hmfw-rate-disabled').first()
    await expect(disabledRate).toBeVisible()
    // 禁用初始值 2.5，应有 2 颗实心
    await expect(disabledRate.locator('.hmfw-rate-star-full')).toHaveCount(2)

    await disabledRate.locator('.hmfw-rate-star').nth(4).locator('.hmfw-rate-star-second').click({ force: true })
    // 点击后仍为 2 颗实心，未改变
    await expect(disabledRate.locator('.hmfw-rate-star-full')).toHaveCount(2)
  })

  test('键盘方向键调整评分', async ({ page }) => {
    // 基础 Rate 默认 keyboard=true，初始值 3
    const rate = page.locator('.hmfw-rate').first()
    await rate.focus()

    await page.keyboard.press('ArrowRight')
    await expect(rate.locator('.hmfw-rate-star-full')).toHaveCount(4)

    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await expect(rate.locator('.hmfw-rate-star-full')).toHaveCount(2)
  })
})
