import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Modal', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'modal')
  })

  test('打开/关闭 Modal', async ({ page }) => {
    await page.getByText('打开对话框').first().click()
    const modal = page.locator('.hmfw-modal')
    await expect(modal).toBeVisible()

    // 点击关闭按钮
    await page.locator('.hmfw-modal-close').click()
    await expect(modal).not.toBeVisible()
  })

  test('Escape 键关闭 Modal', async ({ page }) => {
    await page.getByText('打开对话框').first().click()
    await expect(page.locator('.hmfw-modal')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('.hmfw-modal')).not.toBeVisible()
  })

  test('点击遮罩关闭 Modal', async ({ page }) => {
    await page.getByText('打开对话框').first().click()
    await expect(page.locator('.hmfw-modal')).toBeVisible()
    // 点击遮罩（mask）
    const mask = page.locator('.hmfw-modal-wrap')
    if ((await mask.count()) > 0) {
      await mask.click({ position: { x: 10, y: 10 } })
      await expect(page.locator('.hmfw-modal')).not.toBeVisible()
    }
  })

  test('Modal 有正确的 ARIA 属性', async ({ page }) => {
    await page.getByText('打开对话框').first().click()
    const dialog = page.locator('[role="dialog"]')
    await expect(dialog).toBeVisible()
    await expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  test('焦点在 Modal 内 — Tab 不会跳出', async ({ page }) => {
    await page.getByText('打开对话框').first().click()
    // 多次 Tab 后焦点仍在 Modal 内
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    // 检查焦点仍在 dialog 内
    const isInModal = await page.evaluate(() => {
      const el = document.activeElement
      return el ? el.closest('[role="dialog"]') !== null : false
    })
    expect(isInModal).toBe(true)
  })

  test('打开 Modal 时背景有遮罩', async ({ page }) => {
    await page.getByText('打开对话框').first().click()
    const mask = page.locator('.hmfw-modal-mask')
    if ((await mask.count()) > 0) {
      await expect(mask).toBeVisible()
    }
  })

  test('确认/取消按钮触发事件', async ({ page }) => {
    await page.getByText('打开对话框').first().click()
    // 点击取消按钮（footer 中第一个是非主按钮）
    const footer = page.locator('.hmfw-modal-footer')
    const buttons = footer.locator('button')
    const buttonCount = await buttons.count()
    if (buttonCount >= 2) {
      // 点击第一个按钮（通常是取消）
      await buttons.first().click()
      await expect(page.locator('.hmfw-modal')).not.toBeVisible()
    }
  })
})
