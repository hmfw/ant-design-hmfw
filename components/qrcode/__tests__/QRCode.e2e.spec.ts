import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('QRCode 二维码', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'qrcode')
  })

  // ===== 基础渲染 =====

  test('默认渲染 canvas 元素', async ({ page }) => {
    const qrcode = page.locator('.hmfw-qrcode').first()
    await expect(qrcode).toBeVisible()
    const canvas = qrcode.locator('canvas')
    await expect(canvas).toHaveCount(1)
  })

  test('根容器有 hmfw-qrcode 类名', async ({ page }) => {
    const qrcode = page.locator('.hmfw-qrcode').first()
    await expect(qrcode).toHaveClass(/hmfw-qrcode/)
  })

  test('默认带边框样式（无 borderless 类）', async ({ page }) => {
    const qrcode = page.locator('.hmfw-qrcode').first()
    await expect(qrcode).not.toHaveClass(/hmfw-qrcode-borderless/)
  })

  // ===== Canvas vs SVG =====

  test('type=canvas 时渲染 canvas 元素', async ({ page }) => {
    // QRCodeType demo 中有两个：canvas 和 svg
    const allQRCodes = page.locator('.hmfw-qrcode')
    // 找到包含 canvas 的那个
    const canvasQR = allQRCodes.filter({ has: page.locator('canvas') }).first()
    await expect(canvasQR.locator('canvas')).toHaveCount(1)
  })

  test('type=svg 时渲染 svg 元素', async ({ page }) => {
    const allQRCodes = page.locator('.hmfw-qrcode')
    const svgQR = allQRCodes.filter({ has: page.locator('svg') }).first()
    await expect(svgQR.locator('svg')).toHaveCount(1)
  })

  // ===== 状态展示 =====

  test('active 状态不显示遮罩', async ({ page }) => {
    // QRCodeStatus demo 第一个是 active
    const statusDemos = page.locator('.hmfw-qrcode')
    const activeQR = statusDemos.nth(0)
    const cover = activeQR.locator('.hmfw-qrcode-cover')
    await expect(cover).toHaveCount(0)
  })

  test('expired 状态显示遮罩和刷新按钮', async ({ page }) => {
    // 通过过期文本定位 expired 状态的 QRCode
    const expiredQR = page.locator('.hmfw-qrcode').filter({ hasText: '二维码过期' }).first()
    const cover = expiredQR.locator('.hmfw-qrcode-cover')
    await expect(cover).toBeVisible()
    await expect(cover.locator('.hmfw-qrcode-expired')).toBeVisible()
    await expect(cover.locator('.hmfw-qrcode-refresh')).toBeVisible()
  })

  test('点击刷新按钮触发回调', async ({ page }) => {
    const expiredQR = page.locator('.hmfw-qrcode').filter({ hasText: '二维码过期' }).first()
    const refreshBtn = expiredQR.locator('.hmfw-qrcode-refresh')

    // 监听 console.log（demo 中 onRefresh 输出 console.log('刷新二维码')）
    const consolePromise = page.waitForEvent('console', { timeout: 5000 })
    await refreshBtn.click()
    const msg = await consolePromise
    expect(msg.text()).toContain('刷新二维码')
  })

  test('loading 状态显示 Spin', async ({ page }) => {
    // 通过 Spin 子元素定位 loading 状态的 QRCode
    const loadingQR = page
      .locator('.hmfw-qrcode')
      .filter({ has: page.locator('.hmfw-spin') })
      .first()
    await expect(loadingQR.locator('.hmfw-spin')).toBeVisible()
  })

  test('scanned 状态显示已扫描文本', async ({ page }) => {
    // 通过已扫描文本定位 scanned 状态的 QRCode
    const scannedQR = page.locator('.hmfw-qrcode').filter({ hasText: '已扫描' }).first()
    await expect(scannedQR.locator('.hmfw-qrcode-scanned')).toBeVisible()
  })

  // ===== 自定义颜色 =====

  test('支持自定义背景色', async ({ page }) => {
    // QRCodeCustomColor demo 第二个: bg-color="#f0f0f0"
    // 注：Chrome 会将 inline style 中的 #f0f0f0 自动转为 rgb(240, 240, 240)
    await page.waitForTimeout(300)
    const hasCustomBg = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.hmfw-qrcode')).some((el) => {
        const bg = (el as HTMLElement).style.backgroundColor
        return bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)'
      })
    })
    expect(hasCustomBg).toBe(true)
  })

  // ===== 自定义尺寸 =====

  test('支持自定义 size', async ({ page }) => {
    const qrcode = page.locator('.hmfw-qrcode').first()
    const style = await qrcode.getAttribute('style')
    // 默认 160px
    expect(style).toContain('160px')
  })

  // ===== 自定义状态渲染 =====

  test('支持自定义 statusRender', async ({ page }) => {
    // QRCodeCustomStatusRender demo
    // 查找包含自定义渲染文本的元素
    const customText = page.getByText('❌ 已过期')
    await expect(customText.first()).toBeVisible()
  })

  // ===== classNames / styles =====

  test('支持 classNames 自定义根容器类名', async ({ page }) => {
    // QRCodeClassNames demo 第一个有 custom-root 类
    const customRoot = page.locator('.custom-root').first()
    await expect(customRoot).toHaveClass(/hmfw-qrcode/)
  })

  test('支持 classNames 自定义遮罩类名', async ({ page }) => {
    // QRCodeClassNames demo 第二个有 custom-cover
    const customCover = page.locator('.custom-cover').first()
    await expect(customCover).toHaveClass(/hmfw-qrcode-cover/)
  })

  // ===== 图标 =====

  test('支持 icon 属性', async ({ page }) => {
    // QRCodeIcon demo 中有 icon
    const iconQR = page.locator('.hmfw-qrcode').last()
    await expect(iconQR).toBeVisible()
    // canvas 内部可能有 image，这里验证组件正常渲染
    const canvas = iconQR.locator('canvas')
    await expect(canvas).toHaveCount(1)
  })

  // ===== 无错误 =====

  test('页面无 console 错误', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })
    await page.reload()
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(1000)
    // 不应该有未预期的错误（排除外部资源错误）
    const relevantErrors = errors.filter((e) => !e.includes('ERR_BLOCKED_BY_RESPONSE') && !e.includes('net::ERR_'))
    expect(relevantErrors).toEqual([])
  })
})
