import { test, expect } from '@playwright/test'

async function goto(page: any, component: string) {
  await page.goto(`/components/${component}`, { waitUntil: 'domcontentloaded' })
}

test.describe('Carousel 走马灯', () => {
  test.beforeEach(async ({ page }) => {
    await goto(page, 'carousel')
  })

  test('默认渲染幻灯片，第一张激活', async ({ page }) => {
    const carousel = page.locator('.hmfw-carousel').first()
    await expect(carousel).toBeVisible()

    const slides = carousel.locator('.hmfw-carousel-slide')
    // loop=true 默认克隆 3 组（4×3=12），至少应多于原始数量
    const count = await slides.count()
    expect(count).toBeGreaterThan(4)

    // active slide 用 .first() 避免 loop 克隆导致的 strict mode 违规
    await expect(carousel.locator('.hmfw-carousel-slide-active').first()).toHaveText('1')
  })

  test('点击指示点切换到对应幻灯片', async ({ page }) => {
    const carousel = page.locator('.hmfw-carousel').first()
    const dots = carousel.locator('.hmfw-carousel-dots li')
    await expect(dots).toHaveCount(4)

    // 点击第三个指示点
    await dots.nth(2).click()

    await expect(dots.nth(2)).toHaveClass(/hmfw-carousel-dot-active/)
    // 使用 .first() 处理 loop 克隆的多个 active slide
    await expect(carousel.locator('.hmfw-carousel-slide-active').first()).toHaveText('3')
  })

  test('箭头模式点击右箭头切换到下一张', async ({ page }) => {
    const carousel = page
      .locator('.hmfw-carousel')
      .filter({ has: page.locator('.hmfw-carousel-arrow') })
      .first()
    await expect(carousel.locator('.hmfw-carousel-slide-active').first()).toHaveText('Slide 1')

    await carousel.locator('.hmfw-carousel-arrow-right').click()
    await expect(carousel.locator('.hmfw-carousel-slide-active').first()).toHaveText('Slide 2')
  })

  test('箭头模式点击左箭头回到上一张', async ({ page }) => {
    const carousel = page
      .locator('.hmfw-carousel')
      .filter({ has: page.locator('.hmfw-carousel-arrow') })
      .first()

    // 先前进一张
    await carousel.locator('.hmfw-carousel-arrow-right').click()
    await expect(carousel.locator('.hmfw-carousel-slide-active').first()).toHaveText('Slide 2')

    // 再后退一张
    await carousel.locator('.hmfw-carousel-arrow-left').click()
    await expect(carousel.locator('.hmfw-carousel-slide-active').first()).toHaveText('Slide 1')
  })

  test('fade 模式渲染正确 class 并支持切换', async ({ page }) => {
    const carousel = page.locator('.hmfw-carousel-fade').first()
    await expect(carousel).toBeVisible()
    // fade 模式不克隆 slides，无需 .first()
    await expect(carousel.locator('.hmfw-carousel-slide-active')).toHaveText('1')

    const dots = carousel.locator('.hmfw-carousel-dots li')
    await dots.nth(1).click()
    await expect(carousel.locator('.hmfw-carousel-slide-active')).toHaveText('2')
  })

  test('loop 多项显示渲染克隆节点实现无缝循环', async ({ page }) => {
    // 直接定位 carousel-loop-demo 容器下的第二个轮播（slidesPerView=3）
    const carousel = page.locator('.carousel-loop-demo .hmfw-carousel').nth(1)
    // 使用 toBeAttached（仅检查 DOM 存在），Carousel 无固定高度可能导致 toBeVisible 误判
    await expect(carousel).toBeAttached()

    // 应渲染克隆节点（6 个原始 slides × 3 组 = 18）
    const slides = carousel.locator('.hmfw-carousel-slide')
    const count = await slides.count()
    expect(count).toBe(18)
  })
})
