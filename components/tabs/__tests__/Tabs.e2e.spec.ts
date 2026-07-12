import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Tabs', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'tabs')
  })

  test('默认第一个 tab 激活并显示对应内容', async ({ page }) => {
    const tabs = page.locator('.hmfw-tabs').first()
    const activeTab = tabs.locator('.hmfw-tabs-tab-active')
    const activePane = tabs.locator('.hmfw-tabs-tabpane-active')

    await expect(activeTab).toBeVisible()
    await expect(activeTab.locator('.hmfw-tabs-tab-btn')).toHaveText('Tab 1')
    await expect(activePane).toBeVisible()
    await expect(activePane).toHaveText('Content of Tab Pane 1')
  })

  test('点击 Tab 2 切换激活状态并显示对应内容', async ({ page }) => {
    const tabs = page.locator('.hmfw-tabs').first()
    const tab2 = tabs.locator('.hmfw-tabs-tab').filter({ has: page.getByText('Tab 2', { exact: true }) })

    await tab2.click()

    await expect(tab2).toHaveClass(/hmfw-tabs-tab-active/)
    const activePane = tabs.locator('.hmfw-tabs-tabpane-active')
    await expect(activePane).toHaveText('Content of Tab Pane 2')
  })

  test('键盘 ArrowRight 聚焦下一个 tab 并激活', async ({ page }) => {
    const tabs = page.locator('.hmfw-tabs').first()
    const tab1 = tabs.locator('.hmfw-tabs-tab').nth(0)
    const tab2 = tabs.locator('.hmfw-tabs-tab').nth(1)

    await tab1.focus()
    await page.keyboard.press('ArrowRight')

    // ArrowRight 只聚焦，不自动激活，需要点击或 Enter
    await expect(tab2).toBeFocused()

    // 激活 tab2
    await page.keyboard.press('Enter')
    await expect(tab2).toHaveClass(/hmfw-tabs-tab-active/)
    const activePane = tabs.locator('.hmfw-tabs-tabpane-active')
    await expect(activePane).toHaveText('Content of Tab Pane 2')
  })

  test('键盘 ArrowLeft 聚焦上一个 tab', async ({ page }) => {
    const tabs = page.locator('.hmfw-tabs').first()
    const tab2 = tabs.locator('.hmfw-tabs-tab').nth(1)
    const tab1 = tabs.locator('.hmfw-tabs-tab').nth(0)

    // 先激活 tab2
    await tab2.click()
    await expect(tab2).toHaveClass(/hmfw-tabs-tab-active/)

    // 按 ArrowLeft 返回 tab1
    await page.keyboard.press('ArrowLeft')
    await expect(tab1).toBeFocused()

    // 激活 tab1
    await page.keyboard.press('Enter')
    await expect(tab1).toHaveClass(/hmfw-tabs-tab-active/)
    const activePane = tabs.locator('.hmfw-tabs-tabpane-active')
    await expect(activePane).toHaveText('Content of Tab Pane 1')
  })

  test('ink-bar 存在且可见', async ({ page }) => {
    const tabs = page.locator('.hmfw-tabs').first()
    const inkBar = tabs.locator('.hmfw-tabs-ink-bar')

    await expect(inkBar).toBeVisible()
  })

  test('centered 模式下 ink-bar 初始位置与激活 tab 对齐', async ({ page }) => {
    const centeredDemo = page.locator('.hmfw-tabs-centered').first()
    await centeredDemo.waitFor({ state: 'visible' })
    // 等待 requestAnimationFrame + 渲染完成
    await page.waitForTimeout(300)

    const inkBar = centeredDemo.locator('.hmfw-tabs-ink-bar')
    const activeTab = centeredDemo.locator('.hmfw-tabs-tab-active')
    const navWrap = centeredDemo.locator('.hmfw-tabs-nav-wrap')

    const inkBarBox = await inkBar.boundingBox()
    const activeTabBox = await activeTab.boundingBox()
    const navWrapBox = await navWrap.boundingBox()

    expect(inkBarBox).not.toBeNull()
    expect(activeTabBox).not.toBeNull()
    expect(navWrapBox).not.toBeNull()

    // ink-bar 的 left 应该与激活 tab 的 left 一致（相对于 nav-wrap，容差 0.5px）
    const inkBarLeft = inkBarBox!.x - navWrapBox!.x
    const activeTabLeft = activeTabBox!.x - navWrapBox!.x
    expect(Math.abs(inkBarLeft - activeTabLeft)).toBeLessThan(0.5)
    // ink-bar 的 width 应该与激活 tab 的 width 一致（容差 0.5px）
    expect(Math.abs(inkBarBox!.width - activeTabBox!.width)).toBeLessThan(0.5)
  })
})
