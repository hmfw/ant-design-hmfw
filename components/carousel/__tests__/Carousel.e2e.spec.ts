import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Carousel 走马灯', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'carousel')
  })

  test('默认渲染 4 张幻灯片，第一张激活', async ({ page }) => {
    const carousel = page.locator('.hmfw-carousel').first()
    await expect(carousel).toBeVisible()

    const slides = carousel.locator('.hmfw-carousel-slide')
    await expect(slides).toHaveCount(4)

    const activeSlide = carousel.locator('.hmfw-carousel-slide-active')
    await expect(activeSlide).toHaveText('1')
  })

  test('点击指示点切换到对应幻灯片', async ({ page }) => {
    const carousel = page.locator('.hmfw-carousel').first()
    const dots = carousel.locator('.hmfw-carousel-dots li')
    await expect(dots).toHaveCount(4)

    // 点击第三个指示点
    await dots.nth(2).click()

    await expect(dots.nth(2)).toHaveClass(/hmfw-carousel-dot-active/)
    await expect(carousel.locator('.hmfw-carousel-slide-active')).toHaveText('3')
  })

  test('箭头模式点击右箭头切换到下一张', async ({ page }) => {
    // 含箭头的 demo（CarouselArrows）
    const carousel = page
      .locator('.hmfw-carousel')
      .filter({ has: page.locator('.hmfw-carousel-arrow') })
      .first()
    await expect(carousel.locator('.hmfw-carousel-slide-active')).toHaveText('Slide 1')

    await carousel.locator('.hmfw-carousel-arrow-right').click()
    await expect(carousel.locator('.hmfw-carousel-slide-active')).toHaveText('Slide 2')
  })

  test('箭头模式点击左箭头回到上一张', async ({ page }) => {
    const carousel = page
      .locator('.hmfw-carousel')
      .filter({ has: page.locator('.hmfw-carousel-arrow') })
      .first()

    // 先前进一张
    await carousel.locator('.hmfw-carousel-arrow-right').click()
    await expect(carousel.locator('.hmfw-carousel-slide-active')).toHaveText('Slide 2')

    // 再后退一张
    await carousel.locator('.hmfw-carousel-arrow-left').click()
    await expect(carousel.locator('.hmfw-carousel-slide-active')).toHaveText('Slide 1')
  })
})
