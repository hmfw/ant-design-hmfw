import { test, expect } from '@playwright/test'
import type { Page, Locator } from '@playwright/test'

async function goto(page: Page, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

/**
 * 按 DemoBlock 标题作用域定位，避免依赖页面上 ColorPicker 的绝对序号
 * （新增 demo 会让 nth 索引失效）。
 */
function demoBlock(page: Page, title: string): Locator {
  return page.locator('.demo-block').filter({
    has: page.locator('.demo-block__title', { hasText: new RegExp(`^${title}$`) }),
  })
}

test.describe('ColorPicker', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'color-picker')
  })

  test('点击触发器打开浮层面板', async ({ page }) => {
    const trigger = demoBlock(page, '基础用法').locator('.hmfw-color-picker-trigger')
    await trigger.click()
    await expect(page.locator('.hmfw-color-picker-panel').first()).toBeVisible()
    // 触发器进入打开态
    await expect(trigger).toHaveClass(/hmfw-color-picker-trigger-open/)
  })

  test('面板出现在触发器附近正下方', async ({ page }) => {
    // 使用更高的视口并滚动到顶部，确保弹层有足够空间出现在下方
    await page.setViewportSize({ width: 1280, height: 1024 })
    const trigger = demoBlock(page, '基础用法').locator('.hmfw-color-picker-trigger')
    await trigger.evaluate((el) => el.scrollIntoView({ block: 'start', behavior: 'instant' }))
    await page.waitForTimeout(100)
    await trigger.click()
    const panel = page.locator('.hmfw-color-picker-panel').first()
    await expect(panel).toBeVisible()

    // 两个 rect 必须在同一次 evaluate 内测量：分两次 boundingBox() 时，
    // 若期间页面发生滚动，视口相对坐标会错位，导致断言偶发失败
    const rects = await page.evaluate(() => {
      const t = document.querySelector('.hmfw-color-picker-trigger')!.getBoundingClientRect()
      const p = document.querySelector('.hmfw-color-picker-panel')!.getBoundingClientRect()
      return { t: { x: t.x, y: t.y, h: t.height }, p: { x: p.x, y: p.y } }
    })

    // 面板位于触发器下方（gap 默认 4px，留 2px 容差）
    expect(rects.p.y).toBeGreaterThanOrEqual(rects.t.y + rects.t.h - 2)
    // 面板左对齐触发器
    expect(Math.abs(rects.p.x - rects.t.x)).toBeLessThan(5)
  })

  test('点击页面空白处关闭面板', async ({ page }) => {
    const trigger = demoBlock(page, '基础用法').locator('.hmfw-color-picker-trigger')
    await trigger.click()
    await expect(page.locator('.hmfw-color-picker-panel').first()).toBeVisible()
    await page.locator('body').click({ position: { x: 5, y: 5 } })
    await expect(page.locator('.hmfw-color-picker-panel').first()).not.toBeVisible()
  })

  test('HEX 输入框输入颜色值后触发器文本更新', async ({ page }) => {
    const trigger = demoBlock(page, '基础用法').locator('.hmfw-color-picker-trigger')
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
    const presetsTrigger = demoBlock(page, '预设颜色').locator('.hmfw-color-picker-trigger')
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

  test('禁用态触发器不打开面板', async ({ page }) => {
    const block = demoBlock(page, '禁用状态')
    const disabledTrigger = block.locator('.hmfw-color-picker-disabled .hmfw-color-picker-trigger')
    await disabledTrigger.click({ force: true })
    await expect(page.locator('.hmfw-color-picker-panel')).toHaveCount(0)
  })

  test('三种尺寸触发器高度递增', async ({ page }) => {
    const triggers = demoBlock(page, '三种尺寸').locator('.hmfw-color-picker-trigger')
    await expect(triggers).toHaveCount(3)
    const [small, middle, large] = await Promise.all([
      triggers.nth(0).boundingBox(),
      triggers.nth(1).boundingBox(),
      triggers.nth(2).boundingBox(),
    ])
    expect(small!.height).toBeLessThan(middle!.height)
    expect(middle!.height).toBeLessThan(large!.height)
  })

  test('allowClear 点击清除后颜色被清空', async ({ page }) => {
    const block = demoBlock(page, '清除颜色')
    const trigger = block.locator('.hmfw-color-picker-trigger')
    await trigger.click()

    const clearBtn = page.locator('.hmfw-color-picker-clear-btn')
    await expect(clearBtn).toBeVisible()
    await clearBtn.click()

    // 清除后 demo 中 code 标签内显示 (已清除)
    await expect(block.locator('code').first()).toHaveText('(已清除)')
    // showText 文本回退为占位符 —
    await expect(trigger.locator('.hmfw-color-picker-text')).toHaveText('—')
  })

  /**
   * 回归：面板经 Teleport 挂到 body 后不在 .hmfw-color-picker 子树内，
   * 若把面板消费的组件级 Token 定义在触发器根节点上，var() 会解析失败，
   * 取色画布高度回退为 auto（子元素均绝对定位）导致整个面板塌陷。
   * 因此面板内消费的 Token 必须定义在 .hmfw-color-picker-panel 自身。
   */
  test('面板组件级 Token 在 Teleport 后仍可解析', async ({ page }) => {
    await demoBlock(page, '基础用法').locator('.hmfw-color-picker-trigger').click()
    await expect(page.locator('.hmfw-color-picker-panel').first()).toBeVisible()

    const computed = await page.evaluate(() => {
      const panel = document.querySelector('.hmfw-color-picker-panel')!
      const css = (sel: string) => getComputedStyle(document.querySelector(sel)!)
      return {
        // 前提：面板确实在触发器子树之外，否则本测试失去意义
        outsideTriggerSubtree: !panel.closest('.hmfw-color-picker'),
        panelWidth: css('.hmfw-color-picker-panel').width,
        sbHeight: css('.hmfw-color-picker-sb').height,
        hueHeight: css('.hmfw-color-picker-hue').height,
        sbCursorSize: css('.hmfw-color-picker-sb-cursor').width,
        hueCursorSize: css('.hmfw-color-picker-hue-cursor').width,
        previewSize: css('.hmfw-color-picker-preview').width,
      }
    })

    expect(computed.outsideTriggerSubtree).toBe(true)
    expect(computed.panelWidth).toBe('234px')
    expect(computed.sbHeight).toBe('160px')
    expect(computed.hueHeight).toBe('12px')
    expect(computed.sbCursorSize).toBe('12px')
    expect(computed.hueCursorSize).toBe('14px')
    expect(computed.previewSize).toBe('24px')
  })
})
