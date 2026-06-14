import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Segmented 分段控制器', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'segmented')
  })

  test('基础分段器默认选中第一项', async ({ page }) => {
    const seg = page.locator('.hmfw-segmented').first()
    const items = seg.locator('.hmfw-segmented-item')
    await expect(items).toHaveCount(5)

    const selected = seg.locator('.hmfw-segmented-item-selected')
    await expect(selected).toHaveText('Daily')
  })

  test('点击其它分段项切换选中', async ({ page }) => {
    const seg = page.locator('.hmfw-segmented').first()
    const weekly = seg.locator('.hmfw-segmented-item').filter({ hasText: 'Weekly' })

    await weekly.click()
    await expect(weekly).toHaveClass(/hmfw-segmented-item-selected/)
    // 选中项唯一
    await expect(seg.locator('.hmfw-segmented-item-selected')).toHaveCount(1)
    await expect(seg.locator('.hmfw-segmented-item-selected')).toHaveText('Weekly')
  })

  test('禁用分段项点击不切换选中', async ({ page }) => {
    // SegmentedDisabled demo：'每周' 禁用，默认选中 '每日'
    const seg = page
      .locator('.hmfw-segmented')
      .filter({ has: page.locator('.hmfw-segmented-item-disabled') })
      .first()
    const disabledItem = seg.locator('.hmfw-segmented-item-disabled')
    await expect(disabledItem).toHaveText('每周')

    await disabledItem.click({ force: true })
    // 选中仍为 '每日'
    await expect(seg.locator('.hmfw-segmented-item-selected')).toHaveText('每日')
  })
})
