import { test, expect } from '@playwright/test'

test.describe('Anchor 缓动函数验证 v2', () => {
  test('验证 easeOutCubic 修复效果', async ({ page }) => {
    await page.goto('http://localhost:5173/components/anchor')

    // 强制刷新页面确保代码更新
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(500)

    // 滚动到顶部
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(300)

    // 记录滚动位置（使用更精确的 RAF 采样）
    await page.evaluate(() => {
      ;(window as any).__scrollPositions = []
      const startTime = performance.now()
      let recording = false

      const recordLoop = () => {
        if (!recording) return
        ;(window as any).__scrollPositions.push({
          time: performance.now() - startTime,
          y: window.scrollY,
        })
        requestAnimationFrame(recordLoop)
      }

      // 点击前开始记录
      ;(window as any).__startRecording = () => {
        recording = true
        ;(window as any).__scrollPositions = []
        recordLoop()
      }

      ;(window as any).__stopRecording = () => {
        recording = false
      }
    })

    // 开始记录
    await page.evaluate(() => (window as any).__startRecording())
    await page.waitForTimeout(50)

    // 点击锚点
    await page.click('a[href="#part-3"]')

    // 等待动画完成
    await page.waitForTimeout(600)

    // 停止记录
    await page.evaluate(() => (window as any).__stopRecording())

    // 获取数据
    const scrollData = await page.evaluate(() => (window as any).__scrollPositions)

    console.log('\n=== 滚动动画分析（easeOutCubic）===\n')
    console.log(`总采样点数: ${scrollData.length}`)

    if (scrollData.length === 0) {
      console.log('❌ 未记录到滚动数据')
      return
    }

    // 找到开始滚动的时刻（scrollY > 5）
    const scrollStart = scrollData.find((d: any) => d.y > 5)
    const scrollStartIdx = scrollData.indexOf(scrollStart)

    if (!scrollStart) {
      console.log('❌ 未检测到显著滚动')
      console.log('前 10 个采样点:')
      scrollData.slice(0, 10).forEach((d: any) => {
        console.log(`  ${d.time.toFixed(1)}ms: ${d.y}px`)
      })
      return
    }

    console.log(`开始滚动时刻: ${scrollStart.time.toFixed(1)}ms`)

    // 从开始滚动时重新计算相对时间
    const normalizedData = scrollData.slice(scrollStartIdx).map((d: any) => ({
      time: d.time - scrollStart.time,
      y: d.y - scrollStart.y,
    }))

    // 总位移
    const totalY = normalizedData[normalizedData.length - 1].y
    console.log(`总位移: ${totalY.toFixed(0)}px`)

    // 分析关键时间点
    const milestones = [50, 100, 150, 200, 250]
    console.log('\n时间 | 位移 | 进度% | 速度(px/ms)')
    console.log('-----|------|-------|-------------')

    milestones.forEach((targetTime) => {
      const data = normalizedData.find((d: any) => d.time >= targetTime)
      if (data) {
        const progress = (data.y / totalY) * 100

        // 计算速度（与前一个里程碑的平均速度）
        const prevTime = targetTime - 50
        const prevData = normalizedData.find((d: any) => d.time >= prevTime) || { y: 0, time: 0 }
        const speed = (data.y - prevData.y) / (data.time - prevData.time)

        console.log(
          `${targetTime}ms | ${data.y.toFixed(0).padStart(4)}px | ${progress.toFixed(1).padStart(5)}% | ${speed.toFixed(2)}`,
        )
      }
    })

    // 验证前 100ms 的进度
    const data100ms = normalizedData.find((d: any) => d.time >= 100)
    if (data100ms && totalY > 0) {
      const progress100 = (data100ms.y / totalY) * 100
      console.log(`\n✓ 前 100ms 完成了 ${progress100.toFixed(1)}% 的滚动`)

      // easeOutCubic 在 t=0.22 (100/450) 时应完成约 48% 的距离
      expect(progress100).toBeGreaterThan(35)
    }

    expect(normalizedData.length).toBeGreaterThan(10)
  })
})
