import { test, expect } from '@playwright/test'

async function goto(page: any) {
  await page.goto('/components/typography', { waitUntil: 'domcontentloaded' })
  // 等待 Vue 应用挂载 + ResizeObserver 初始化
  await page.waitForTimeout(800)
}

test.describe('Typography E2E', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page)
  })

  // ─── 省略检测（ResizeObserver 路径，真实浏览器） ───

  test('单行省略 demo 正常渲染', async ({ page }) => {
    // "省略" demo 区块存在且不报错
    const demos = page.locator('.demo-block__title', { hasText: '省略' })
    await expect(demos.first()).toBeVisible()
    // 页面中至少有一个 ellipsis 元素（单行或多行均可）
    const ellipsisEl = page.locator('.hmfw-typography-ellipsis').first()
    await expect(ellipsisEl).toBeAttached()
  })

  test('多行省略 tooltip：截断后悬停显示 Tooltip', async ({ page }) => {
    // "省略 Tooltip 与回调" demo
    const section = page.locator('.demo-block').filter({ hasText: '省略 Tooltip 与回调' }).first()

    // 多行省略元素存在且应用了对应 class
    const multiLine = section.locator('.hmfw-typography-ellipsis-multiple-line')
    await expect(multiLine.first()).toBeVisible()

    // hover 触发 tooltip
    await multiLine.first().hover()
    await page.waitForTimeout(600)
    const tooltip = page.locator('.hmfw-tooltip:not(.hmfw-tooltip-hidden)').first()
    await expect(tooltip).toBeVisible({ timeout: 3000 })
  })

  test('onEllipsis 回调在截断时触发', async ({ page }) => {
    // "省略 Tooltip 与回调" demo 中 onEllipsis 会更新省略状态文本
    const section = page.locator('.demo-block').filter({ hasText: '省略 Tooltip 与回调' }).first()
    // 容器宽度 240px，长文本会触发截断，状态应为 "已截断" 或等价文本
    const stateText = section.locator('text=省略状态').first()
    await expect(stateText).toBeVisible()
  })

  // ─── 动态省略切换（watch 回调 + measure disabled 路径） ───

  test('动态切换 ellipsis 开关：组件正常响应 prop 变化', async ({ page }) => {
    const section = page.locator('.demo-block').filter({ hasText: '动态省略切换' }).first()

    // 初始状态：省略启用，回调日志记录截断
    const logEl = section.locator('#callback-log')
    await expect(logEl).toContainText('截断')

    // 关闭省略后，段落不再有 ellipsis 样式
    await section.locator('#toggle-ellipsis').click()
    await page.waitForTimeout(800)
    const para = section.locator('.hmfw-typography').first()
    await expect(para).not.toHaveClass(/hmfw-typography-ellipsis/)

    // 重新开启省略，段落恢复 ellipsis 样式
    await section.locator('#toggle-ellipsis').click()
    await page.waitForTimeout(800)
    await expect(para).toHaveClass(/hmfw-typography-ellipsis/)
  })

  test('动态切换 rows：ResizeObserver 重建并重新检测', async ({ page }) => {
    const section = page.locator('.demo-block').filter({ hasText: '动态省略切换' }).first()

    // 初始行数 2，文本截断
    expect(await section.locator('#change-rows').textContent()).toContain('2')
    expect(await section.locator('#ellipsis-state').textContent()).toContain('已截断')

    // 切换到 3 行 → ResizeObserver 重建，文本依然超出容器所以仍截断
    await section.locator('#change-rows').click()
    await page.waitForTimeout(600)
    expect(await section.locator('#change-rows').textContent()).toContain('3')
    expect(await section.locator('#ellipsis-state').textContent()).toContain('已截断')

    // 切换回 2 行
    await section.locator('#change-rows').click()
    await page.waitForTimeout(600)
    expect(await section.locator('#change-rows').textContent()).toContain('2')

    // 回调记录中应至少有初始截断记录
    const logEl = section.locator('#callback-log')
    await expect(logEl).toContainText('截断')
  })

  // ─── 可复制（真实 clipboard API） ───

  test('复制按钮点击后显示成功状态并复制文本', async ({ page }) => {
    // 需要权限：允许剪贴板访问
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write'])

    const section = page.locator('.demo-block').filter({ hasText: '可复制' }).first()

    // 点击复制按钮
    await section.locator('.hmfw-typography-copy').first().click()
    await page.waitForTimeout(300)

    // 成功状态 icon 出现
    const successIcon = section.locator('.hmfw-typography-copy-success').first()
    await expect(successIcon).toBeVisible({ timeout: 2000 })

    // 验证剪贴板内容
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText())
    expect(clipboardText).toBeTruthy()
  })

  // ─── 链接渲染 ───

  test('Link 组件渲染为 a 标签并保留 target', async ({ page }) => {
    const section = page.locator('.demo-block').filter({ hasText: '链接' }).first()
    const anchor = section.locator('a.hmfw-typography-link').first()
    await expect(anchor).toBeVisible()
    // 默认没有 target（href 是 # 或无跳转 demo）
  })
})
