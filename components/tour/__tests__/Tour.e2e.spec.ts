import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Tour 漫游引导', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'tour')
  })

  test('点击开始引导显示第一步弹层', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()

    const popover = page.locator('.hmfw-tour-popover').first()
    await expect(popover).toBeVisible()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第一步')
    await expect(popover.locator('.hmfw-tour-description')).toContainText('介绍页面的主要功能')

    // 第一步无「上一步」按钮
    await expect(popover.locator('.hmfw-tour-prev-btn')).toHaveCount(0)
  })

  test('下一步与上一步切换引导步骤', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()
    const popover = page.locator('.hmfw-tour-popover').first()

    await popover.locator('.hmfw-tour-next-btn').click()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第二步')

    // 第二个指示点激活
    await expect(popover.locator('.hmfw-tour-indicator-active')).toHaveCount(1)

    await popover.locator('.hmfw-tour-prev-btn').click()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第一步')
  })

  test('最后一步点击完成关闭引导', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()
    const popover = page.locator('.hmfw-tour-popover').first()

    // 推进到最后一步（共 3 步）
    await popover.locator('.hmfw-tour-next-btn').click()
    await popover.locator('.hmfw-tour-next-btn').click()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('完成')

    // 最后一步按钮文本为「完成」，点击后关闭
    const finishBtn = popover.locator('.hmfw-tour-next-btn')
    await expect(finishBtn).toContainText(/^完\s*成$/)
    await finishBtn.click()

    await expect(page.locator('.hmfw-tour-popover')).toHaveCount(0)
  })

  test('页面滚动后弹层与高亮框仍对齐目标元素', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    // 「定位与方位」demo 的目标是组件实例，且位于首屏之外，需滚动后启动
    const startBtn = page.getByRole('button', { name: '开始引导' }).nth(1)
    await startBtn.scrollIntoViewIfNeeded()
    const scrollY = await page.evaluate(() => window.scrollY)
    expect(scrollY).toBeGreaterThan(0)

    const targetBox = (await page
      .getByRole('button', { name: /^上\s*传$/ })
      .first()
      .boundingBox())!
    await startBtn.click()

    const popover = page.locator('.hmfw-tour-popover').first()
    await expect(popover).toBeVisible()

    // 组件实例形式的 target 不应抛异常
    expect(errors).toEqual([])

    // 高亮框 = 目标矩形按 gap.offset 默认 6 外扩
    const hole = await page
      .locator('.hmfw-tour-mask-svg mask rect')
      .nth(1)
      .evaluate((el) => ({ x: +el.getAttribute('x')!, y: +el.getAttribute('y')! }))
    expect(Math.abs(hole.x - (targetBox.x - 6))).toBeLessThan(1.5)
    expect(Math.abs(hole.y - (targetBox.y - 6))).toBeLessThan(1.5)

    // 弹层紧贴目标下方，而非偏移一个 scrollY
    const popBox = (await popover.boundingBox())!
    expect(popBox.y - (targetBox.y + targetBox.height)).toBeGreaterThan(0)
    expect(popBox.y - (targetBox.y + targetBox.height)).toBeLessThan(30)

    // 箭头存在并指向目标
    await expect(popover.locator('.hmfw-tour-arrow')).toHaveCount(1)
  })

  test('无 target 的步骤在视口居中', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()
    const popover = page.locator('.hmfw-tour-popover').first()
    await expect(popover).toHaveClass(/hmfw-tour-popover-center/)

    const box = (await popover.boundingBox())!
    const viewport = page.viewportSize()!
    expect(Math.abs(box.x + box.width / 2 - viewport.width / 2)).toBeLessThan(2)
    // 居中展示不显示箭头
    await expect(popover.locator('.hmfw-tour-arrow')).toHaveCount(0)
  })

  test('默认允许高亮元素交互，遮罩拦截高亮之外的点击', async ({ page }) => {
    const startBtn = page.getByRole('button', { name: '开始引导' }).nth(1)
    await startBtn.scrollIntoViewIfNeeded()
    await startBtn.click()
    await expect(page.locator('.hmfw-tour-popover').first()).toBeVisible()

    // 高亮元素（第一步的目标「上传」按钮）可命中点击
    const target = page.getByRole('button', { name: /^上\s*传$/ }).first()
    const box = (await target.boundingBox())!
    const hitTarget = await page.evaluate(
      ({ x, y }) => {
        const el = document.elementFromPoint(x, y)
        return el?.closest('button')?.textContent?.trim() ?? null
      },
      { x: box.x + box.width / 2, y: box.y + box.height / 2 },
    )
    expect(hitTarget).toContain('上 传')

    // 高亮区域之外由 blocker 接管，命中的是遮罩而非页面元素
    const hitOutside = await page.evaluate(() => {
      const el = document.elementFromPoint(5, 5)
      return el?.tagName.toLowerCase() ?? null
    })
    expect(hitOutside).toBe('rect')
  })

  test('键盘方向键切换步骤，Esc 关闭', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()
    const popover = page.locator('.hmfw-tour-popover').first()
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第一步')

    await page.keyboard.press('ArrowRight')
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第二步')

    await page.keyboard.press('ArrowLeft')
    await expect(popover.locator('.hmfw-tour-title')).toHaveText('第一步')

    await page.keyboard.press('Escape')
    await expect(page.locator('.hmfw-tour-popover')).toHaveCount(0)
  })

  test('弹层具备 dialog 语义与标题关联', async ({ page }) => {
    await page.getByRole('button', { name: '开始引导' }).first().click()
    const dialog = page.getByRole('dialog').first()
    await expect(dialog).toBeVisible()

    const labelledBy = await dialog.getAttribute('aria-labelledby')
    expect(labelledBy).toBeTruthy()
    await expect(page.locator(`#${labelledBy}`)).toHaveText('第一步')
  })
})
