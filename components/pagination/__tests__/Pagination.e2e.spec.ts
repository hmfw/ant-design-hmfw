import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Pagination 分页', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'pagination')
  })

  test('初始第 1 页为 active', async ({ page }) => {
    const pagination = page.locator('.hmfw-pagination').first()
    const active = pagination.locator('.hmfw-pagination-item-active')
    await expect(active).toBeVisible()
    await expect(active).toHaveText('1')
  })

  test('点击页码 2 后第 2 页变 active', async ({ page }) => {
    const pagination = page.locator('.hmfw-pagination').first()
    // PaginationBasic 共 5 页，页码项依次为 1-5，nth(1) 即第 2 页
    await pagination.locator('.hmfw-pagination-item').nth(1).click()
    const active = pagination.locator('.hmfw-pagination-item-active')
    await expect(active).toHaveText('2')
  })

  test('点击下一页当前页 +1', async ({ page }) => {
    const pagination = page.locator('.hmfw-pagination').first()
    await expect(pagination.locator('.hmfw-pagination-item-active')).toHaveText('1')
    await pagination.locator('.hmfw-pagination-next').click()
    await expect(pagination.locator('.hmfw-pagination-item-active')).toHaveText('2')
  })

  test('点击上一页当前页 -1', async ({ page }) => {
    const pagination = page.locator('.hmfw-pagination').first()
    // 先翻到第 2 页
    await pagination.locator('.hmfw-pagination-next').click()
    await expect(pagination.locator('.hmfw-pagination-item-active')).toHaveText('2')
    // 再点上一页回到第 1 页
    await pagination.locator('.hmfw-pagination-prev').click()
    await expect(pagination.locator('.hmfw-pagination-item-active')).toHaveText('1')
  })

  test('首页时上一页禁用，末页时下一页禁用', async ({ page }) => {
    const pagination = page.locator('.hmfw-pagination').first()
    // 第 1 页：上一页禁用
    await expect(pagination.locator('.hmfw-pagination-prev')).toHaveClass(/hmfw-pagination-disabled/)
    // 翻到末页（PaginationBasic 共 5 页，点击页码 5）
    await pagination.locator('.hmfw-pagination-item').nth(4).click()
    await expect(pagination.locator('.hmfw-pagination-item-active')).toHaveText('5')
    // 末页：下一页禁用
    await expect(pagination.locator('.hmfw-pagination-next')).toHaveClass(/hmfw-pagination-disabled/)
  })

  test('快速跳转输入页码按 Enter 跳转', async ({ page }) => {
    // 仅 PaginationMore 开启了 showQuickJumper，定位到包含快速跳转的实例
    const pagination = page
      .locator('.hmfw-pagination')
      .filter({ has: page.locator('.hmfw-pagination-options-quick-jumper') })
      .first()
    await expect(pagination).toBeVisible()
    const jumperInput = pagination.locator('.hmfw-pagination-options-quick-jumper input')
    await jumperInput.fill('3')
    await jumperInput.press('Enter')
    await expect(pagination.locator('.hmfw-pagination-item-active')).toHaveText('3')
  })
})
