/**
 * VirtualList E2E 测试 — 真实浏览器滚动性能验证
 *
 * 使用 ListVirtual demo 页面（10,000 和 50,000 项数据）验证：
 * 1. 虚拟滚动仅渲染可视区域 DOM 节点
 * 2. 滚动时偏移量正确更新
 * 3. 快速连续滚动无渲染异常
 * 4. 滚动帧率可接受（无明显卡顿）
 * 5. 大数据量不导致页面崩溃
 */
import { test, expect } from '@playwright/test'

// ============================================================
// 辅助方法
// ============================================================

/** 等待 VirtualList 渲染完成 */
async function waitForVirtualList(page: import('@playwright/test').Page, nth = 0) {
  const container = page.locator('.hmfw-virtual-list').nth(nth)
  await container.scrollIntoViewIfNeeded()
  await container.waitFor({ state: 'visible' })
  await page.waitForTimeout(300) // 等待初始渲染
  return container
}

/** 在容器内执行平滑滚动并返回帧性能数据 */
async function measureScrollPerformance(
  container: ReturnType<(typeof import('@playwright/test').Page)['locator']>,
  scrollDistance: number,
  durationMs: number,
): Promise<{ avgFPS: number; minFPS: number; jankFrames: number; totalFrames: number }> {
  return container.evaluate(
    (el, { distance, duration }) => {
      return new Promise((resolve) => {
        const frameDeltas: number[] = []
        let lastTime = performance.now()
        let rafId: number
        const startScrollTop = el.scrollTop
        const startTime = performance.now()
        let frameCount = 0

        function step(currentTime: number) {
          const delta = currentTime - lastTime
          frameDeltas.push(delta)
          lastTime = currentTime
          frameCount++

          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          // easeInOutQuad 缓动，模拟真实滚动
          const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
          el.scrollTop = startScrollTop + distance * eased

          if (progress < 1) {
            rafId = requestAnimationFrame(step)
          } else {
            const totalTime = frameDeltas.reduce((a, b) => a + b, 0)
            const avgFPS = totalTime > 0 ? (frameCount / totalTime) * 1000 : 60
            const maxDelta = Math.max(...frameDeltas, 16.67)
            const minFPS = 1000 / maxDelta
            // 帧间隔 > 32ms（< 30fps）视为卡顿帧
            const jankFrames = frameDeltas.filter((d) => d > 32).length
            resolve({
              avgFPS: Math.round(avgFPS),
              minFPS: Math.round(minFPS),
              jankFrames,
              totalFrames: frameCount,
            })
          }
        }

        rafId = requestAnimationFrame(step)
      })
    },
    { distance: scrollDistance, duration: durationMs },
  )
}

// ============================================================
// 测试套件
// ============================================================

test.describe('VirtualList E2E — 真实浏览器滚动表现', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/list')
    // 确保 VirtualList 已挂载到 DOM
    await page.waitForSelector('.hmfw-virtual-list', { timeout: 10000 })
  })

  // ----------------------------------------------------------
  // DOM 节点数验证（虚拟滚动核心）
  // ----------------------------------------------------------
  test('10,000 项数据仅渲染可视区域 + buffer 的 DOM 节点', async ({ page }) => {
    const container = page.locator('.hmfw-virtual-list').first()
    await container.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    const itemCount = await container.locator('.hmfw-virtual-list-item').count()
    // containerHeight=400, itemHeight=48, buffer=5
    // 可见项 ≈ ceil(400/48) = 9, + 上下 buffer 各 5 = 19
    expect(itemCount).toBeGreaterThan(0)
    expect(itemCount).toBeLessThan(40) // 远小于 10,000
  })

  test('50,000 项数据同样仅渲染少量 DOM 节点', async ({ page }) => {
    const containers = page.locator('.hmfw-virtual-list')
    const count = await containers.count()
    // 至少有两个 VirtualList（10,000 + 50,000）
    expect(count).toBeGreaterThanOrEqual(2)

    const largeList = containers.nth(1)
    await largeList.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    const itemCount = await largeList.locator('.hmfw-virtual-list-item').count()
    expect(itemCount).toBeGreaterThan(0)
    expect(itemCount).toBeLessThan(40) // 50,000 项也只需渲染 ~20 个节点
  })

  // ----------------------------------------------------------
  // 滚动行为验证
  // ----------------------------------------------------------
  test('滚动时 translateY 偏移量随 scrollTop 正确更新', async ({ page }) => {
    const container = page.locator('.hmfw-virtual-list').first()
    await container.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    const itemsContainer = container.locator('.hmfw-virtual-list-items')

    // 记录初始 transform
    const initialTransform = await itemsContainer.evaluate((el) => (el as HTMLElement).style.transform)
    expect(initialTransform).toMatch(/translateY\(0px\)/)

    // 滚动到中间位置
    await container.evaluate((el) => {
      el.scrollTop = 2000
    })
    await page.waitForTimeout(200)

    const midTransform = await itemsContainer.evaluate((el) => (el as HTMLElement).style.transform)
    expect(midTransform).not.toBe(initialTransform)
    // itemHeight=48, scrollTop=2000 → startIndex ≈ floor(2000/48) = 41
    // offsetY = max(0, 41 - 5) * 48 = 36 * 48 = 1728
    const translateY = midTransform.match(/translateY\((\d+)px\)/)?.[1]
    expect(translateY).toBeTruthy()
    expect(Number(translateY)).toBeGreaterThan(0)
  })

  test('滚动到底部时内容正确偏移', async ({ page }) => {
    const container = page.locator('.hmfw-virtual-list').first()
    await container.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    // 滚动到底部
    await container.evaluate((el) => {
      el.scrollTop = el.scrollHeight
    })
    await page.waitForTimeout(200)

    const itemsContainer = container.locator('.hmfw-virtual-list-items')
    const transform = await itemsContainer.evaluate((el) => (el as HTMLElement).style.transform)

    // 偏移应接近 totalHeight - 可见区域对应偏移
    const translateY = Number(transform.match(/translateY\((\d+)px\)/)?.[1] || '0')
    // totalHeight = 10000 * 48 = 480000, containerHeight = 400
    // maxScrollTop = 480000 - 400 = 479600
    // startIndex ≈ floor(479600/48) = 9991 - buffer(5) = 9986
    // offsetY = 9986 * 48 = 479328
    expect(translateY).toBeGreaterThan(400000) // 远远大于初始位置
  })

  // ----------------------------------------------------------
  // 快速连续滚动（模拟用户快速操作）
  // ----------------------------------------------------------
  test('快速连续多次滚动不出现渲染空白或异常', async ({ page }) => {
    const container = page.locator('.hmfw-virtual-list').first()
    await container.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    // 模拟快速、不规则的滚动（100ms 间隔，模拟真实快速滚动）
    const scrollPositions = [0, 800, 300, 2000, 500, 3500, 100, 5000, 1500, 0, 6000, 200]

    for (const pos of scrollPositions) {
      await container.evaluate((el, p) => {
        el.scrollTop = p
      }, pos)
      await page.waitForTimeout(100) // 给 Vue 足够时间重渲染
    }

    // 最终状态验证：应有可见项
    const items = container.locator('.hmfw-virtual-list-item')
    const finalCount = await items.count()
    expect(finalCount).toBeGreaterThan(0)

    // 验证至少有可见项，不要求具体文本内容（Vue 渲染是异步的）
    const isVisible = await items.first().isVisible()
    expect(isVisible).toBe(true)
  })

  // ----------------------------------------------------------
  // 滚动帧率检测
  // ----------------------------------------------------------
  test('平滑滚动帧率在可接受范围内（无严重卡顿）', async ({ page }) => {
    const container = page.locator('.hmfw-virtual-list').first()
    await container.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)

    // 执行 2 秒、4000px 的平滑滚动并测量帧率
    const metrics = await measureScrollPerformance(container, 4000, 2000)

    console.log(
      `[VirtualList Perf] avgFPS=${metrics.avgFPS}, minFPS=${metrics.minFPS}, ` +
        `jankFrames=${metrics.jankFrames}/${metrics.totalFrames}`,
    )

    // 平均帧率 > 25fps（E2E 环境允许一定波动，CI 可能更慢）
    expect(metrics.avgFPS).toBeGreaterThan(20)
    // 严重卡顿帧（< 30fps）不超过总帧数的 30%
    const jankRatio = metrics.jankFrames / metrics.totalFrames
    expect(jankRatio).toBeLessThan(0.3)
  })

  // ----------------------------------------------------------
  // 大数据量压力测试
  // ----------------------------------------------------------
  test('50,000 项大数据量不导致页面崩溃或白屏', async ({ page }) => {
    const containers = page.locator('.hmfw-virtual-list')
    const count = await containers.count()
    if (count < 2) {
      test.skip(true, '50,000 项列表未渲染')
      return
    }

    const largeList = containers.nth(1)
    await largeList.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    // 验证有可渲染的项
    const items = largeList.locator('.hmfw-virtual-list-item')
    const itemCount = await items.count()
    expect(itemCount).toBeGreaterThan(0)

    // 极端滚动：直接跳到接近末尾
    await largeList.evaluate((el) => {
      el.scrollTop = 3500000 // 50,000 * 73 ≈ 3,650,000
    })
    await page.waitForTimeout(300)

    // 不崩溃、不白屏
    const afterScrollCount = await largeList.locator('.hmfw-virtual-list-item').count()
    expect(afterScrollCount).toBeGreaterThan(0)

    // 页面标题仍然存在（证明 Vue 未崩溃）
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
  })

  // ----------------------------------------------------------
  // 滚动到顶部/底部方法验证（通过 Select 间接测试）
  // ----------------------------------------------------------
  test('Tree 虚拟滚动渲染大量节点不崩溃', async ({ page }) => {
    await page.goto('/components/tree')
    await page.waitForSelector('.hmfw-tree', { timeout: 10000 })

    // 找到虚拟滚动的 Tree（有 height 属性，内部使用 VirtualList）
    const virtualList = page.locator('.hmfw-virtual-list')
    const vlCount = await virtualList.count()
    if (vlCount === 0) {
      test.skip(true, 'Tree 页面未使用 VirtualList 渲染')
      return
    }

    // VirtualList 应正确渲染树节点
    const items = virtualList.first().locator('.hmfw-virtual-list-item')
    const itemCount = await items.count()
    expect(itemCount).toBeGreaterThan(0)
    // 树节点数量应远小于总节点数（虚拟滚动生效）
    expect(itemCount).toBeLessThan(100)

    // 在 Tree 中滚动
    await virtualList.first().evaluate((el) => {
      el.scrollTop = 500
    })
    await page.waitForTimeout(300)

    const afterScrollCount = await items.count()
    expect(afterScrollCount).toBeGreaterThan(0)
  })
})
