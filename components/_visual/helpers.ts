import { type Page, type Locator } from '@playwright/test'

/** 打开组件文档页并等待加载。 */
export async function gotoComponent(page: Page, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'networkidle' })
}

/**
 * 按 DemoBlock 标题定位其预览区（用于稳定的局部截图）。
 * 文档中每个 demo 被 .demo-block 包裹，标题在 .demo-block__title。
 */
export function demoPreview(page: Page, title: string): Locator {
  return page
    .locator('.demo-block', { has: page.locator('.demo-block__title', { hasText: title }) })
    .locator('.demo-block__preview')
}
