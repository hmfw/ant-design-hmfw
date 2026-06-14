import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Slider 滑动输入条', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'slider')
  })

  test('基础滑块渲染单个手柄并带 ARIA 属性', async ({ page }) => {
    const slider = page.locator('.hmfw-slider').first()
    await expect(slider).toBeVisible()

    const handle = slider.locator('.hmfw-slider-handle')
    await expect(handle).toHaveCount(1)
    await expect(handle).toHaveAttribute('role', 'slider')
    await expect(handle).toHaveAttribute('aria-valuenow', '30')
  })

  test('键盘 ArrowRight 增加值，ArrowLeft 减少值', async ({ page }) => {
    const slider = page.locator('.hmfw-slider').first()
    const handle = slider.locator('.hmfw-slider-handle')

    await handle.focus()
    await page.keyboard.press('ArrowRight')
    await expect(handle).toHaveAttribute('aria-valuenow', '31')

    await page.keyboard.press('ArrowLeft')
    await page.keyboard.press('ArrowLeft')
    await expect(handle).toHaveAttribute('aria-valuenow', '29')
  })

  test('点击轨道跳转到对应位置', async ({ page }) => {
    const slider = page.locator('.hmfw-slider').first()
    const rail = slider.locator('.hmfw-slider-rail')
    const handle = slider.locator('.hmfw-slider-handle')

    const box = await rail.boundingBox()
    if (!box) throw new Error('rail 不可见')
    // 点击轨道中点，期望值约为 50
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2)

    const value = Number(await handle.getAttribute('aria-valuenow'))
    expect(value).toBeGreaterThan(40)
    expect(value).toBeLessThan(60)
  })

  test('禁用滑块的手柄不可聚焦（tabindex=-1）', async ({ page }) => {
    const disabled = page.locator('.hmfw-slider-disabled').first()
    await expect(disabled).toBeVisible()
    await expect(disabled.locator('.hmfw-slider-handle')).toHaveAttribute('tabindex', '-1')
  })

  test('范围滑块渲染两个手柄', async ({ page }) => {
    // SliderRange demo 含两个手柄
    const rangeSlider = page
      .locator('.hmfw-slider')
      .filter({ has: page.locator('.hmfw-slider-handle-2') })
      .first()
    await expect(rangeSlider.locator('.hmfw-slider-handle')).toHaveCount(2)
  })
})
