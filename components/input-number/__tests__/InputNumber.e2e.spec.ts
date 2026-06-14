import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('InputNumber', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'input-number')
  })

  // MinMax demo（min=1 max=10 step=1，value1 初始 5）的第一个输入框
  // 通过紧邻的说明文字定位，保证选中的是范围 1-10 的实例
  const minMax = (page: any) => page.locator('p:has-text("范围 1-10，步长 1：") + .hmfw-input-number')

  test('点击增加按钮数值按 step 增加', async ({ page }) => {
    const container = minMax(page)
    const input = container.locator('.hmfw-input-number-input')
    await expect(input).toHaveValue('5')

    await container.locator('.hmfw-input-number-handler-up').click()
    await expect(input).toHaveValue('6')
  })

  test('点击减少按钮数值按 step 减少', async ({ page }) => {
    const container = minMax(page)
    const input = container.locator('.hmfw-input-number-input')
    await expect(input).toHaveValue('5')

    await container.locator('.hmfw-input-number-handler-down').click()
    await expect(input).toHaveValue('4')
  })

  test('键盘 ArrowUp / ArrowDown 改变数值', async ({ page }) => {
    const container = minMax(page)
    const input = container.locator('.hmfw-input-number-input')
    const display = page.locator('p:has-text("value1:")')

    await input.click() // 聚焦
    await input.press('ArrowUp')
    // 聚焦时输入框展示的是 inputStr，模型值变化通过 v-model 绑定的文本断言
    await expect(display).toContainText('value1: 6')

    await input.press('ArrowDown')
    await input.press('ArrowDown')
    await expect(display).toContainText('value1: 4')
  })

  test('达到 max 边界时不再增加且增加按钮禁用', async ({ page }) => {
    const container = minMax(page)
    const input = container.locator('.hmfw-input-number-input')
    const up = container.locator('.hmfw-input-number-handler-up')

    // 从 5 连续点击多次，超过到达上限 10 的次数
    for (let i = 0; i < 10; i++) {
      await up.click()
    }
    await expect(input).toHaveValue('10')
    await expect(up).toHaveClass(/hmfw-input-number-handler-up-disabled/)
  })

  test('达到 min 边界时不再减少且减少按钮禁用', async ({ page }) => {
    const container = minMax(page)
    const input = container.locator('.hmfw-input-number-input')
    const down = container.locator('.hmfw-input-number-handler-down')

    // 从 5 连续点击多次，超过到达下限 1 的次数
    for (let i = 0; i < 10; i++) {
      await down.click()
    }
    await expect(input).toHaveValue('1')
    await expect(down).toHaveClass(/hmfw-input-number-handler-down-disabled/)
  })

  test('直接输入数字失焦后被接受并 clamp', async ({ page }) => {
    const container = minMax(page)
    const input = container.locator('.hmfw-input-number-input')

    // 范围内的值被正确接受
    await input.click()
    await input.fill('8')
    await input.blur()
    await expect(input).toHaveValue('8')

    // 超出 max 的值被 clamp 到 10
    await input.click()
    await input.fill('999')
    await input.blur()
    await expect(input).toHaveValue('10')
  })
})
