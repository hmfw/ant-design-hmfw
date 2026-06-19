/**
 * 冒烟测试（smoke test）
 *
 * 自动遍历 `docs/src/nav/sidebar.ts` 中定义的所有路由（组件页 + 指南页），
 * 访问每个页面并检查：
 * 1. 不抛出 pageerror（未捕获的运行时错误）
 * 2. console 中不出现 error / warning 级别的消息（白名单除外）
 * 3. 页面正常渲染出 h1 标题
 *
 * 新增组件后，只要把链接加入 sidebar.ts，本测试自动覆盖。
 */
import { test, expect, type ConsoleMessage, type Page } from '@playwright/test'
import { componentsSidebar, guideSidebar } from '../docs/src/nav/sidebar'

interface FlatLink {
  text: string
  link: string
  group: string
}

const allLinks: FlatLink[] = [
  ...componentsSidebar.flatMap((g) => g.items.map((i) => ({ ...i, group: g.text }))),
  ...guideSidebar.flatMap((g) => g.items.map((i) => ({ ...i, group: g.text }))),
]

/**
 * 已知不应阻断测试的 console 消息白名单。
 * 用于过滤外部资源/网络环境引起的非组件错误。
 */
const ALLOWED_CONSOLE_PATTERNS: RegExp[] = [
  // 跨源资源策略拦截（如 demo 引用的外部头像被 same-origin 策略拒绝）——非组件问题
  /Failed to load resource:.*ERR_BLOCKED_BY_RESPONSE/,
  // 其他网络层错误（DNS/连接/CORS）——demo 中外部资源依赖测试环境网络
  /Failed to load resource:.*net::ERR_/,
]

function isAllowed(text: string): boolean {
  return ALLOWED_CONSOLE_PATTERNS.some((p) => p.test(text))
}

async function captureErrors(page: Page) {
  const consoleIssues: string[] = []
  const pageErrors: Error[] = []

  page.on('console', (msg: ConsoleMessage) => {
    const type = msg.type()
    if (type === 'error' || type === 'warning') {
      const text = msg.text()
      if (!isAllowed(text)) {
        consoleIssues.push(`[${type}] ${text}`)
      }
    }
  })

  page.on('pageerror', (err: Error) => {
    pageErrors.push(err)
  })

  return { consoleIssues, pageErrors }
}

test.describe('冒烟测试：所有页面无运行时错误', () => {
  for (const link of allLinks) {
    test(`${link.group} - ${link.text} (${link.link})`, async ({ page }) => {
      const { consoleIssues, pageErrors } = await captureErrors(page)

      await page.goto(link.link, { waitUntil: 'domcontentloaded' })

      // 等待 Vue 应用挂载与异步组件加载完成
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
        // 部分组件（如 Spin / Carousel）会持续动画导致 networkidle 不触发，忽略超时
      })

      // 给组件 setup/挂载留出时间触发可能的运行时错误
      await page.waitForTimeout(800)

      // 页面应渲染出 h1 标题
      const h1 = page.locator('h1').first()
      await expect(h1, `${link.link} 未渲染 h1 标题`).toBeVisible()

      // 不应有 pageerror
      expect(
        pageErrors.map((e) => e.message),
        `${link.link} 抛出运行时错误`,
      ).toEqual([])

      // 不应有 error / warning 级别的 console 消息
      expect(consoleIssues, `${link.link} 出现 console 错误/警告`).toEqual([])
    })
  }
})
