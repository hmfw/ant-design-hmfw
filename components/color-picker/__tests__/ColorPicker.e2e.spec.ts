import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('ColorPicker', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'color-picker')
  })

  test('点击触发器打开浮层面板', async ({ page }) => {
    const trigger = page.locator('.hmfw-color-picker-trigger').first()
    await trigger.click()
    await expect(page.locator('.hmfw-color-picker-panel').first()).toBeVisible()
    // 触发器进入打开态
    await expect(trigger).toHaveClass(/hmfw-color-picker-trigger-open/)
  })

  test('面板出现在触发器附近正下方', async ({ page }) => {
    // 使用更高的视口并滚动到顶部，确保弹层有足够空间出现在下方
    await page.setViewportSize({ width: 1280, height: 1024 })
    const trigger = page.locator('.hmfw-color-picker-trigger').first()
    await trigger.evaluate((el) => el.scrollIntoView({ block: 'start', behavior: 'instant' }))
    await page.waitForTimeout(100)
    await trigger.click()
    const panel = page.locator('.hmfw-color-picker-panel').first()
    await expect(panel).toBeVisible()

    const triggerBox = await trigger.boundingBox()
    const panelBox = await panel.boundingBox()

    // 面板位于触发器下方（top = 触发器底部 + 4）
    expect(panelBox!.y).toBeGreaterThanOrEqual(triggerBox!.y + triggerBox!.height - 2)
    // 面板左对齐触发器
    expect(Math.abs(panelBox!.x - triggerBox!.x)).toBeLessThan(5)
  })

  test('点击页面空白处关闭面板', async ({ page }) => {
    const trigger = page.locator('.hmfw-color-picker-trigger').first()
    await trigger.click()
    await expect(page.locator('.hmfw-color-picker-panel').first()).toBeVisible()
    await page.locator('body').click({ position: { x: 5, y: 5 } })
    await expect(page.locator('.hmfw-color-picker-panel').first()).not.toBeVisible()
  })

  test('HEX 输入框输入颜色值后触发器文本更新', async ({ page }) => {
    const trigger = page.locator('.hmfw-color-picker-trigger').first()
    await trigger.click()
    const hexInput = page.locator('.hmfw-color-picker-hex-input')
    await expect(hexInput).toBeVisible()

    await hexInput.fill('#52c41a')
    // showText 展示的文本随 innerValue 更新
    await expect(trigger.locator('.hmfw-color-picker-text')).toHaveText('#52c41a')
    // 面板内的 hex 输入值同步
    await expect(hexInput).toHaveValue('#52c41a')
  })

  test('预设面板点击预设色后该色被选中', async ({ page }) => {
    // 第二个 ColorPicker 为带 presets 的 demo
    const presetsTrigger = page.locator('.hmfw-color-picker-trigger').nth(1)
    await presetsTrigger.click()
    await expect(page.locator('.hmfw-color-picker-presets')).toBeVisible()

    // presets 顺序: #1677ff, #52c41a, ... 选取第二个非当前色
    const targetPreset = page.locator('.hmfw-color-picker-preset-color').nth(1)
    await targetPreset.click()

    // 被点击的预设色进入选中态
    await expect(targetPreset).toHaveClass(/hmfw-color-picker-preset-color-active/)
    // hex 输入框同步为选中色
    await expect(page.locator('.hmfw-color-picker-hex-input')).toHaveValue('#52c41a')
  })
})
