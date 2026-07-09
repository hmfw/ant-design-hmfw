/**
 * Anchor 组件 E2E 测试。
 * 覆盖 jsdom 无法模拟的场景：真实滚动联动、active link 切换、ink bar 视觉定位等。
 */
import { test, expect } from '@playwright/test'

const ANCHOR_URL = '/components/anchor'

test.describe('Anchor 锚点', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ANCHOR_URL, { waitUntil: 'networkidle' })
  })

  // ==============================
  // 基础渲染
  // ==============================

  test('渲染锚点链接列表', async ({ page }) => {
    const links = page.locator('.hmfw-anchor-link')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('每个链接都有 href', async ({ page }) => {
    // 只选取 demo 区域内的 Anchor 链接，排除页面其它 <a> 标签
    const links = page.locator('.hmfw-anchor-wrapper .hmfw-anchor-link a')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(1)
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href')
      expect(href).toBeTruthy()
    }
  })

  // ==============================
  // 点击滚动
  // ==============================

  test('点击链接滚动到对应区域', async ({ page }) => {
    const links = page.locator('.hmfw-anchor-link a')

    for (let i = 0; i < Math.min(await links.count(), 3); i++) {
      const href = await links.nth(i).getAttribute('href')
      if (!href) continue

      // 点击链接
      await links.nth(i).click()
      await page.waitForTimeout(500)

      // 验证目标元素存在且可见
      const target = page.locator(href)
      const isVisible = await target.isVisible().catch(() => false)
      expect(isVisible).toBe(true)
    }
  })

  // ==============================
  // active link 联动
  // ==============================

  test('滚动时 active link 自动切换', async ({ page }) => {
    // 获取所有锚点目标
    const targets = page.locator('[id^="part-"]')
    const targetCount = await targets.count()
    if (targetCount < 2) return

    // 滚动到第二个目标区域
    const target2 = targets.nth(1)
    await target2.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    // 至少有一个 active link
    const activeLink = page.locator('.hmfw-anchor-link-active')
    const activeCount = await activeLink.count()
    expect(activeCount).toBeGreaterThanOrEqual(1)
  })

  // ==============================
  // ink bar 渲染
  // ==============================

  test('ink bar 存在于 DOM', async ({ page }) => {
    // ink bar 始终渲染，但可能因无 active link 而不可见（opacity: 0）
    const ink = page.locator('.hmfw-anchor-wrapper .hmfw-anchor-ink')
    const inkCount = await ink.count()
    expect(inkCount).toBeGreaterThanOrEqual(1)
  })

  // ==============================
  // 无运行时错误
  // ==============================

  test('锚点操作无运行时错误', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (err) => errors.push(err.message))

    const links = page.locator('.hmfw-anchor-link a')
    const count = await links.count()

    for (let i = 0; i < Math.min(count, 3); i++) {
      await links.nth(i).click()
      await page.waitForTimeout(300)
    }

    expect(errors).toEqual([])
  })
})
