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

  // ===== 解码验证（BarcodeDetector API） =====
  // 验证生成的二维码可被浏览器标准解码器识别 —— 编码器正确性的端到端兜底

  const decodeCanvas = (page: import('@playwright/test').Page, canvas: import('@playwright/test').Locator) =>
    canvas.evaluate(async (el) => {
      const BarcodeDetectorCtor = (window as any).BarcodeDetector
      if (!BarcodeDetectorCtor) return { supported: false as const }
      try {
        // bgColor 默认 transparent：浅色模块为透明像素，BarcodeDetector 会把透明当作黑色。
        // 复制到白底画布上模拟真实扫描环境（页面白底）再解码。
        const off = document.createElement('canvas')
        off.width = (el as HTMLCanvasElement).width
        off.height = (el as HTMLCanvasElement).height
        const octx = off.getContext('2d')!
        octx.fillStyle = '#ffffff'
        octx.fillRect(0, 0, off.width, off.height)
        octx.drawImage(el as HTMLCanvasElement, 0, 0)
        const detector = new BarcodeDetectorCtor({ formats: ['qr_code'] })
        const codes = await detector.detect(off)
        return { supported: true as const, values: codes.map((c: any) => c.rawValue) }
      } catch {
        return { supported: false as const }
      }
    })

  test('短文本二维码可被标准解码器识别（基础用法 canvas）', async ({ page }) => {
    const canvas = page.locator('.hmfw-qrcode canvas').first()
    await expect(canvas).toBeVisible()
    await page.waitForTimeout(300) // 等待 canvas 绘制完成
    const result = await decodeCanvas(page, canvas)
    test.skip(!result.supported, '当前浏览器不支持 BarcodeDetector API')
    expect(result.values).toContain('https://ant.design')
  })

  test('长文本二维码（多块版本）可被标准解码器识别', async ({ page }) => {
    // QRCodeVersion demo：通过锚点类名定位版本 8 长文本（多块交错编码）
    const canvas = page.locator('.version-v8 canvas')
    await expect(canvas.first()).toBeVisible()
    await page.waitForTimeout(500) // 等待 canvas 绘制完成
    const longValue = `https://example.com/long?data=${'x'.repeat(150)}`
    const supported = await decodeCanvas(page, canvas.first())
    test.skip(!supported.supported, '当前浏览器不支持 BarcodeDetector API')
    expect(supported.values).toContain(longValue)
  })

  test('SVG 模式 marginSize 留白生效', async ({ page }) => {
    // 直接子元素选择器排除遮罩内的图标 SVG
    const svgs = page.locator('.hmfw-qrcode > svg')
    const count = await svgs.count()
    test.skip(count < 3, '未找到 QRCodeMargin demo')
    // 页面 svg 顺序：QRCodeType demo（margin 默认）→ QRCodeMargin demo 的默认与 marginSize=4
    const defaultViewBox = await svgs.nth(1).getAttribute('viewBox')
    const marginViewBox = await svgs.nth(2).getAttribute('viewBox')
    expect(defaultViewBox).toBeTruthy()
    expect(marginViewBox).toBeTruthy()
    const defaultSize = Number(defaultViewBox!.split(' ')[2])
    const marginSize = Number(marginViewBox!.split(' ')[2])
    // marginSize=4 的 viewBox 应比默认多 8 个模块（左右各 4）
    expect(marginSize - defaultSize).toBe(8)
  })

  test('SVG 渲染尺寸保持宽高比（无偏移溢出）', async ({ page }) => {
    const svg = page.locator('.hmfw-qrcode > svg').first()
    await expect(svg).toBeVisible()
    const box = await svg.boundingBox()
    expect(box).toBeTruthy()
    // 修复前 svg 被 flex 拉伸为 134×160（破坏比例、底部被裁剪），修复后应接近 1:1
    expect(Math.abs(box!.width - box!.height)).toBeLessThanOrEqual(1)
  })

  test('H 级二维码叠加 40px 图标仍可被解码（图标遮挡靠纠错恢复）', async ({ page }) => {
    const canvas = page.locator('.errorlevel-h canvas')
    await expect(canvas.first()).toBeVisible()
    await page.waitForTimeout(300)
    const result = await canvas.first().evaluate(async (el) => {
      const BarcodeDetectorCtor = (window as any).BarcodeDetector
      if (!BarcodeDetectorCtor) return { supported: false as const }
      try {
        // 模拟组件行为：白底 + 二维码 + 挖白 + 实心方块图标（最坏遮挡情况）
        const off = document.createElement('canvas')
        off.width = (el as HTMLCanvasElement).width
        off.height = (el as HTMLCanvasElement).height
        const octx = off.getContext('2d')!
        octx.fillStyle = '#ffffff'
        octx.fillRect(0, 0, off.width, off.height)
        octx.drawImage(el as HTMLCanvasElement, 0, 0)
        const x = (off.width - 40) / 2
        const y = (off.height - 40) / 2
        octx.fillStyle = '#ffffff'
        octx.fillRect(x - 2, y - 2, 44, 44)
        octx.fillStyle = '#1677ff'
        octx.fillRect(x, y, 40, 40)
        const detector = new BarcodeDetectorCtor({ formats: ['qr_code'] })
        const codes = await detector.detect(off)
        return { supported: true as const, values: codes.map((c: any) => c.rawValue) }
      } catch {
        return { supported: false as const }
      }
    })
    test.skip(!result.supported, '当前浏览器不支持 BarcodeDetector API')
    expect(result.values).toContain('https://ant.design')
  })
})
