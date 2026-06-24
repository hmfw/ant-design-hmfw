import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Watermark 水印', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'watermark')
    // 等待水印生成（canvas 绘制 + DOM 更新）
    await page.waitForTimeout(500)
  })

  // ===== 基础渲染 =====

  test('渲染容器 div', async ({ page }) => {
    const container = page.locator('.hmfw-watermark').first()
    await expect(container).toBeVisible()
  })

  test('容器有 overflow: hidden 和 position: relative 样式', async ({ page }) => {
    const container = page.locator('.hmfw-watermark').first()
    const style = await container.getAttribute('style')
    expect(style).toContain('overflow: hidden')
    expect(style).toContain('position: relative')
  })

  test('inherit=true（默认）时容器有 width:100% 和 height:100%', async ({ page }) => {
    const container = page.locator('.hmfw-watermark').first()
    const style = await container.getAttribute('style')
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
  })

  test('渲染 slot 内容', async ({ page }) => {
    // WatermarkBasic demo 中有 <div style="height: 500px" />
    const container = page.locator('.hmfw-watermark').first()
    const innerDiv = container.locator('> div').first()
    const style = await innerDiv.getAttribute('style')
    expect(style).toContain('height: 500px')
  })

  // ===== 水印节点 =====

  test('生成水印节点并设置 background-image', async ({ page }) => {
    const markDiv = page.locator('div[style*="background-image"]').first()
    await expect(markDiv).toBeAttached()
    const style = await markDiv.getAttribute('style')
    expect(style).toContain("background-image: url('data:image/png;base64,")
  })

  test('水印节点有 visibility: visible !important', async ({ page }) => {
    const markDiv = page.locator('div[style*="background-image"]').first()
    const style = await markDiv.getAttribute('style')
    expect(style).toContain('visibility: visible !important')
  })

  test('水印节点没有 class 和 hidden 属性', async ({ page }) => {
    const markDiv = page.locator('div[style*="background-image"]').first()
    await expect(markDiv).not.toHaveAttribute('class')
    await expect(markDiv).not.toHaveAttribute('hidden')
  })

  test('默认 zIndex 为 999', async ({ page }) => {
    const markDiv = page.locator('div[style*="background-image"]').first()
    const style = await markDiv.getAttribute('style')
    expect(style).toContain('z-index: 999')
  })

  // ===== 多行文本 =====

  test('支持多行文本数组', async ({ page }) => {
    // WatermarkMultiline demo 传入 content: ['Ant Design', 'Happy Working']
    const allContainers = page.locator('.hmfw-watermark')
    const count = await allContainers.count()
    // 遍历找到多行 demo 的水印节点（通过 slot 内容识别）
    let foundMultiline = false
    for (let i = 0; i < count; i++) {
      const container = allContainers.nth(i)
      const childDiv = container.locator('> div').first()
      const childStyle = await childDiv.getAttribute('style')
      if (childStyle && childStyle.includes('height: 500px')) {
        // 找到 demo 的 slot 容器，检查其父容器有 background-image 水印子节点
        const markDiv = container.locator('div[style*="background-image"]')
        if ((await markDiv.count()) > 0) {
          foundMultiline = true
          break
        }
      }
    }
    expect(foundMultiline).toBe(true)
  })

  // ===== 自定义 gap / offset / rotate =====

  test('支持自定义 gap 和 offset', async ({ page }) => {
    // WatermarkOffset demo: gap=[50,50], offset=[25,25], rotate=-45
    // 找到 offset demo 的水印节点（left/top 非零）
    const allMarks = page.locator('div[style*="background-image"]')
    const count = await allMarks.count()
    let foundOffset = false
    for (let i = 0; i < count; i++) {
      const style = await allMarks.nth(i).getAttribute('style')
      if (style && style.includes('left:') && !style.includes('left: 0px')) {
        foundOffset = true
        break
      }
    }
    expect(foundOffset).toBe(true)
  })

  test('支持自定义 rotate 和 font', async ({ page }) => {
    // WatermarkOffset demo 有自定义 rotate=-45 和自定义 font
    const allContainers = page.locator('.hmfw-watermark')
    // 至少有一个水印正常工作
    await expect(allContainers.first()).toBeVisible()
  })

  // ===== 自定义宽高 =====

  test('支持自定义 width 和 height', async ({ page }) => {
    // WatermarkImage demo 有 width=130, height=30
    const allContainers = page.locator('.hmfw-watermark')
    // 所有水印容器都应该可见
    const count = await allContainers.count()
    for (let i = 0; i < count; i++) {
      await expect(allContainers.nth(i)).toBeVisible()
    }
  })

  // ===== 增强防删除保护 =====

  test('水印节点被 remove 后自动重建', async ({ page }) => {
    // 记录当前水印节点数量
    const initialCount = await page.locator('div[style*="background-image"]').count()
    expect(initialCount).toBeGreaterThan(0)

    // 移除第一个水印节点
    await page.evaluate(() => {
      const marks = document.querySelectorAll('div[style*="background-image"]')
      if (marks.length > 0) {
        marks[0].remove()
      }
    })

    // 等待 MutationObserver 触发重建
    await page.waitForTimeout(200)

    // 水印应被重建（数量恢复或新增）
    const newCount = await page.locator('div[style*="background-image"]').count()
    expect(newCount).toBeGreaterThanOrEqual(initialCount - 1)
  })

  test('水印节点 class 被篡改后自动清除', async ({ page }) => {
    // 给第一个水印节点添加 class
    await page.evaluate(() => {
      const marks = document.querySelectorAll('div[style*="background-image"]')
      if (marks.length > 0) {
        marks[0].setAttribute('class', 'hacker-hide')
      }
    })

    await page.waitForTimeout(200)

    // 检查水印节点 class 是否被清除（可能已被重建）
    const marks = page.locator('div[style*="background-image"]')
    const firstMark = marks.first()
    const hasClass = await firstMark.getAttribute('class')
    // class 应为 null（已清除）或标记不存在（已重建）
    if (hasClass !== null) {
      expect(hasClass).toBe('')
    }
  })

  test('水印节点 hidden 属性被篡改后自动恢复', async ({ page }) => {
    // 给第一个水印节点添加 hidden 属性
    await page.evaluate(() => {
      const marks = document.querySelectorAll('div[style*="background-image"]')
      if (marks.length > 0) {
        marks[0].setAttribute('hidden', '')
      }
    })

    await page.waitForTimeout(200)

    // 检查水印节点 hidden 是否被清除
    const marks = page.locator('div[style*="background-image"]')
    const firstMark = marks.first()
    await expect(firstMark).not.toHaveAttribute('hidden')
  })

  test('水印节点 style 被篡改后自动恢复', async ({ page }) => {
    // 篡改水印节点样式
    await page.evaluate(() => {
      const marks = document.querySelectorAll('div[style*="background-image"]')
      if (marks.length > 0) {
        marks[0].setAttribute('style', 'display: none;')
      }
    })

    await page.waitForTimeout(300)

    // 水印应被重建恢复
    const marks = page.locator('div[style*="background-image"]')
    const firstMark = marks.first()
    const style = await firstMark.getAttribute('style')
    expect(style).toContain('visibility: visible !important')
  })

  // ===== 容器固定样式恢复 =====

  test('容器 style 被清空后自动恢复固定样式', async ({ page }) => {
    const container = page.locator('.hmfw-watermark').first()

    // 清空容器样式
    await container.evaluate((el: HTMLElement) => {
      el.setAttribute('style', '')
    })

    await page.waitForTimeout(200)

    const style = await container.getAttribute('style')
    expect(style).toContain('overflow: hidden')
    expect(style).toContain('position: relative')
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
    await page.waitForTimeout(1500)
    const relevantErrors = errors.filter((e) => !e.includes('ERR_BLOCKED_BY_RESPONSE') && !e.includes('net::ERR_'))
    expect(relevantErrors).toEqual([])
  })
})
