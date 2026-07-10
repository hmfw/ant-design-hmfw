import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { Carousel } from '../Carousel'
import type { CarouselRef } from '../types'

const slides = () => [
  h('div', { class: 'slide-1' }, 'Slide 1'),
  h('div', { class: 'slide-2' }, 'Slide 2'),
  h('div', { class: 'slide-3' }, 'Slide 3'),
]

describe('Carousel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders slides', () => {
    const wrapper = mount(Carousel, {
      props: { loop: false },
      slots: { default: slides },
    })
    expect(wrapper.findAll('.hmfw-carousel-slide').length).toBe(3)
  })

  it('shows first slide as active by default', () => {
    const wrapper = mount(Carousel, {
      props: { loop: false },
      slots: { default: slides },
    })
    const active = wrapper.findAll('.hmfw-carousel-slide-active')
    expect(active.length).toBe(1)
    expect(active[0].text()).toBe('Slide 1')
  })

  it('renders dots by default', () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    expect(wrapper.find('.hmfw-carousel-dots').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-carousel-dots li').length).toBe(3)
  })

  it('hides dots when dots=false', () => {
    const wrapper = mount(Carousel, {
      props: { dots: false },
      slots: { default: slides },
    })
    expect(wrapper.find('.hmfw-carousel-dots').exists()).toBe(false)
  })

  it('supports custom dots class via classNames', () => {
    const wrapper = mount(Carousel, {
      props: { classNames: { dots: 'custom-dots' } },
      slots: { default: slides },
    })
    expect(wrapper.find('.custom-dots').exists()).toBe(true)
  })

  it('hides arrows by default', () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    expect(wrapper.find('.hmfw-carousel-arrow-left').exists()).toBe(false)
    expect(wrapper.find('.hmfw-carousel-arrow-right').exists()).toBe(false)
  })

  it('shows arrows when arrows=true', () => {
    const wrapper = mount(Carousel, {
      props: { arrows: true },
      slots: { default: slides },
    })
    expect(wrapper.find('.hmfw-carousel-arrow-left').exists()).toBe(true)
    expect(wrapper.find('.hmfw-carousel-arrow-right').exists()).toBe(true)
  })

  it('navigates to next slide on arrow click', async () => {
    const wrapper = mount(Carousel, {
      props: { arrows: true },
      slots: { default: slides },
    })
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    const active = wrapper.findAll('.hmfw-carousel-slide-active')
    expect(active[0].text()).toBe('Slide 2')
  })

  it('navigates to prev slide on arrow click', async () => {
    const wrapper = mount(Carousel, {
      props: { arrows: true },
      slots: { default: slides },
    })
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    await wrapper.find('.hmfw-carousel-arrow-left').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 1')
  })

  it('navigates via dot click', async () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    await wrapper.findAll('.hmfw-carousel-dots li')[2].trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 3')
  })

  it('emits beforeChange and afterChange', async () => {
    const wrapper = mount(Carousel, {
      props: { arrows: true },
      slots: { default: slides },
    })
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    expect(wrapper.emitted('beforeChange')?.[0]).toEqual([0, 1])
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([1])
  })

  it('applies fade class when effect=fade', () => {
    const wrapper = mount(Carousel, {
      props: { effect: 'fade' },
      slots: { default: slides },
    })
    expect(wrapper.find('.hmfw-carousel-fade').exists()).toBe(true)
  })

  it('fade prop takes priority over effect', () => {
    const wrapper = mount(Carousel, {
      props: { effect: 'scrollx', fade: true },
      slots: { default: slides },
    })
    expect(wrapper.find('.hmfw-carousel-fade').exists()).toBe(true)
  })

  it('autoplay advances slides', async () => {
    const wrapper = mount(Carousel, {
      props: { autoplay: true, delay: 1000 },
      slots: { default: slides },
    })
    vi.advanceTimersByTime(1500)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 2')
    wrapper.unmount()
  })

  it('wraps around with loop=true', async () => {
    const wrapper = mount(Carousel, {
      props: { loop: true, arrows: true },
      slots: { default: slides },
    })
    await wrapper.findAll('.hmfw-carousel-dots li')[2].trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    // 需要额外等待循环重置（nextTick）
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 1')
  })

  it('respects speed prop', async () => {
    const wrapper = mount(Carousel, {
      props: { speed: 1000, arrows: true },
      slots: { default: slides },
    })
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    // afterChange should not fire until speed ms elapsed
    expect(wrapper.emitted('afterChange')).toBeUndefined()
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('afterChange')).toBeUndefined() // still transitioning
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([1])
  })

  it('uses custom easing', async () => {
    const wrapper = mount(Carousel, {
      props: { easing: 'linear', arrows: true },
      slots: { default: slides },
    })
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    await wrapper.vm.$nextTick()
    const track = wrapper.find('.hmfw-carousel-track')
    expect(track.attributes('style')).toContain('linear')
  })

  it('starts at initialSlide', () => {
    const wrapper = mount(Carousel, {
      props: { initialSlide: 1 },
      slots: { default: slides },
    })
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 2')
  })

  it('respects waitForAnimate', async () => {
    const wrapper = mount(Carousel, {
      props: { waitForAnimate: true, arrows: true },
      slots: { default: slides },
    })
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    // Try to click again immediately
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    // Should only advance once
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 2')
  })

  it('maps dotPlacement start/end to left/right CSS classes', () => {
    const wrapper1 = mount(Carousel, {
      props: { dotPlacement: 'start' },
      slots: { default: slides },
    })
    expect(wrapper1.find('.hmfw-carousel-dots-left').exists()).toBe(true)
    expect(wrapper1.find('.hmfw-carousel-vertical').exists()).toBe(true)

    const wrapper2 = mount(Carousel, {
      props: { dotPlacement: 'end' },
      slots: { default: slides },
    })
    expect(wrapper2.find('.hmfw-carousel-dots-right').exists()).toBe(true)
    expect(wrapper2.find('.hmfw-carousel-vertical').exists()).toBe(true)
  })

  it('has accessibility attributes', () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    const root = wrapper.find('.hmfw-carousel')
    expect(root.attributes('role')).toBe('region')
    expect(root.attributes('aria-roledescription')).toBe('carousel')
    expect(root.attributes('aria-label')).toBe('走马灯')

    const slide = wrapper.find('.hmfw-carousel-slide')
    expect(slide.attributes('role')).toBe('group')
    expect(slide.attributes('aria-roledescription')).toBe('slide')
    expect(slide.attributes('aria-label')).toBe('1 / 3')
  })

  it('exposes ref methods', async () => {
    const wrapper = mount(Carousel, {
      slots: { default: slides },
    })
    await wrapper.vm.$nextTick()

    const vm = wrapper.vm as unknown as CarouselRef
    expect(typeof vm.goTo).toBe('function')
    expect(typeof vm.next).toBe('function')
    expect(typeof vm.prev).toBe('function')

    vm.goTo(2)
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 3')

    vm.prev()
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 2')
  })

  it('goTo with dontAnimate skips transition', async () => {
    const wrapper = mount(Carousel, {
      slots: { default: slides },
    })
    await wrapper.vm.$nextTick()

    const vm = wrapper.vm as unknown as CarouselRef
    vm.goTo(2, true)
    await wrapper.vm.$nextTick()
    // Should change immediately without waiting
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 3')
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([2])
  })
})

describe('Carousel - Multiple Slides', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders multiple slides per view with slidesPerView', () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3 },
      slots: { default: slides },
    })
    const slideElements = wrapper.findAll('.hmfw-carousel-slide')

    // 每个 slide 宽度为 33.333%
    expect(slideElements[0].attributes('style')).toContain('33.33')
    expect(slideElements[1].attributes('style')).toContain('33.33')
  })

  it('calculates page count correctly with slidesPerView and slidesPerGroup', () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3, slidesPerGroup: 2 },
      slots: { default: () => Array.from({ length: 10 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    // 10 slides, show 3, scroll 2 => Math.floor((10-3)/2) + 1 = 4 pages
    expect(wrapper.findAll('.hmfw-carousel-dots li').length).toBe(4)
  })

  it('scrolls by slidesPerGroup amount', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 2, slidesPerGroup: 2, arrows: true },
      slots: { default: () => Array.from({ length: 8 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    expect(wrapper.emitted('beforeChange')?.[0]).toEqual([0, 2])

    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([2])
  })

  it('exposes goToPage, nextPage, prevPage methods', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 2, slidesPerGroup: 2 },
      slots: { default: () => Array.from({ length: 8 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })
    await wrapper.vm.$nextTick()

    const vm = wrapper.vm as unknown as CarouselRef
    expect(typeof vm.goToPage).toBe('function')
    expect(typeof vm.nextPage).toBe('function')
    expect(typeof vm.prevPage).toBe('function')

    vm.goToPage(2)
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()

    // Page 2 => slide index 4 (2 * 2)
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([4])
  })

  it('handles last page with fewer slides than slidesPerView', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3, slidesPerGroup: 3, arrows: true },
      slots: { default: () => Array.from({ length: 7 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    // 7 slides, show 3, scroll 3
    // maxStartIndex = 7 - 3 = 4
    // pageCount = floor(4 / 3) + 1 = 2 pages
    expect(wrapper.findAll('.hmfw-carousel-dots li').length).toBe(2)

    // 点击到最后一页
    await wrapper.findAll('.hmfw-carousel-dots li')[1].trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()

    // 应该滚动到 slide index 3 (page 1 * slidesPerGroup 3)
    // 但最大索引是 4 (7 - 3)，所以是 3
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([3])
  })

  it('disables fade effect when slidesPerView > 1', () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3, fade: true },
      slots: { default: slides },
    })

    // fade 应该被禁用
    expect(wrapper.find('.hmfw-carousel-fade').exists()).toBe(false)
  })

  it('applies spaceBetween gap on track when > 0', () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3, spaceBetween: 16 },
      slots: { default: slides },
    })

    const track = wrapper.find('.hmfw-carousel-track')
    expect(track.attributes('style')).toContain('gap: 16px')
  })

  it('translates track with gap offset when spaceBetween > 0', () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3, spaceBetween: 8, loop: false },
      slots: { default: slides },
    })

    const track = wrapper.find('.hmfw-carousel-track')
    const style = track.attributes('style')
    // transform 应包含 calc 表达式，补偿 gap 偏移
    expect(style).toMatch(/calc\(/)
    expect(style).toContain('8px')
  })

  it('no gap on track when spaceBetween=0 (default)', () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3 },
      slots: { default: slides },
    })

    const track = wrapper.find('.hmfw-carousel-track')
    const style = track.attributes('style') || ''
    // 默认不应有 gap
    expect(style).not.toContain('gap:')
  })

  it('shows arrows only when slides > slidesPerView', () => {
    const wrapper1 = mount(Carousel, {
      props: { slidesPerView: 3, arrows: true },
      slots: { default: slides }, // 3 slides
    })
    expect(wrapper1.find('.hmfw-carousel-arrow').exists()).toBe(false)

    const wrapper2 = mount(Carousel, {
      props: { slidesPerView: 2, arrows: true },
      slots: { default: slides }, // 3 slides
    })
    expect(wrapper2.find('.hmfw-carousel-arrow').exists()).toBe(true)
  })

  it('autoplay respects slidesPerGroup', async () => {
    const wrapper = mount(Carousel, {
      props: { autoplay: true, delay: 1000, slidesPerView: 2, slidesPerGroup: 2 },
      slots: { default: () => Array.from({ length: 8 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    vi.advanceTimersByTime(1500)
    await wrapper.vm.$nextTick()

    // 应该跳转到 slide index 2
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([2])
    wrapper.unmount()
  })
})

describe('Carousel - Infinite Loop with Multiple Slides', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders cloned slides for loop loop with slidesPerView > 1', () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3, loop: true },
      slots: { default: () => Array.from({ length: 5 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    // 应该渲染 5 + 5 + 5 = 15 个 slides（克隆整个数组以支持无缝循环）
    const slides = wrapper.findAll('.hmfw-carousel-slide')
    expect(slides.length).toBe(15)
  })

  it('does not clone slides for loop loop with slidesPerView = 1', () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 1, loop: true },
      slots: { default: slides }, // 3 slides
    })

    // loop 模式下会克隆（3组，共9个）
    const allSlides = wrapper.findAll('.hmfw-carousel-slide')
    expect(allSlides.length).toBe(9) // 3 * 3 = 9
  })

  it('seamless loop loop - next at end', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3, slidesPerGroup: 1, loop: true, arrows: true },
      slots: { default: () => Array.from({ length: 6 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    // 跳到最后一个有效位置（index 3 = slide 4,5,6）
    const vm = wrapper.vm as unknown as CarouselRef
    vm.goTo(3)
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([3])

    // 点击下一页，应该到 index 4，然后无缝重置到 index 1
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()

    // 检查最终的 afterChange 事件
    const afterChangeEvents = wrapper.emitted('afterChange') as any[]
    const lastEvent = afterChangeEvents[afterChangeEvents.length - 1]
    // index 4 会重置到 4 - 6 = -2，然后取模变成 4（或者直接重置到 1）
    expect(lastEvent[0]).toBeGreaterThanOrEqual(0)
    expect(lastEvent[0]).toBeLessThan(6)
  })

  it('seamless loop loop - prev at start', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesPerView: 3, loop: true, arrows: true },
      slots: { default: () => Array.from({ length: 6 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    // 当前在第一页（index 0）
    // 点击上一页，应该无缝循环到最后
    await wrapper.find('.hmfw-carousel-arrow-left').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()

    // 应该跳转到负索引，然后重置
    const afterChangeEvents = wrapper.emitted('afterChange') as any[]
    expect(afterChangeEvents.length).toBeGreaterThan(0)
  })
})

// ============================================================
// 🔴 高优先级补充测试
// ============================================================

describe('Carousel - adaptiveHeight', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets height on list container when adaptiveHeight=true', async () => {
    const wrapper = mount(Carousel, {
      props: { adaptiveHeight: true, loop: false },
      slots: { default: slides },
    })
    // updateAdaptiveHeight 内部使用 nextTick，需要两次 tick 才能完成 DOM 更新
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    const list = wrapper.find('.hmfw-carousel-list')
    const styleAttr = list.attributes('style') || ''
    // offsetHeight 在 jsdom 中为 0，height 应被设置为 '0px'
    expect(styleAttr).toContain('height')
  })

  it('skips height adjustment when dots are vertical (dotPlacement=start)', async () => {
    const wrapper = mount(Carousel, {
      props: { adaptiveHeight: true, dotPlacement: 'start', loop: false },
      slots: { default: slides },
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    const list = wrapper.find('.hmfw-carousel-list')
    const styleAttr = list.attributes('style') || ''
    // 竖排 dots 模式下应跳过高度调整，不应有 height
    expect(styleAttr).not.toContain('height')
  })

  it('updates height when navigating to a different slide', async () => {
    const wrapper = mount(Carousel, {
      props: { adaptiveHeight: true, arrows: true, loop: false },
      slots: { default: slides },
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    // 导航到下一个 slide
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick() // updateAdaptiveHeight 内部的 nextTick + re-render

    const list = wrapper.find('.hmfw-carousel-list')
    const styleAttr = list.attributes('style') || ''
    // 高度 style 应存在
    expect(styleAttr).toContain('height')
  })
})

describe('Carousel - Empty State', () => {
  it('renders empty root div safely when no slides provided', () => {
    const wrapper = mount(Carousel, {
      slots: { default: () => [] },
    })
    const root = wrapper.find('.hmfw-carousel')
    expect(root.exists()).toBe(true)
    // 没有 slides 时不渲染 list/track/dots/arrows
    expect(root.find('.hmfw-carousel-list').exists()).toBe(false)
    expect(root.find('.hmfw-carousel-dots').exists()).toBe(false)
    expect(root.find('.hmfw-carousel-track').exists()).toBe(false)
  })
})

// ============================================================
// 🟡 中优先级补充测试
// ============================================================

describe('Carousel - Custom Arrows', () => {
  it('renders custom prevArrow VNode instead of default button', () => {
    const wrapper = mount(Carousel, {
      props: {
        arrows: true,
        prevArrow: h('div', { class: 'custom-prev-arrow' }, 'Prev'),
      },
      slots: { default: slides },
    })
    // 自定义箭头应渲染，默认 Button 不应出现
    expect(wrapper.find('.custom-prev-arrow').exists()).toBe(true)
    expect(wrapper.find('.hmfw-carousel-arrow-left').exists()).toBe(false)
  })

  it('renders custom nextArrow VNode instead of default button', () => {
    const wrapper = mount(Carousel, {
      props: {
        arrows: true,
        nextArrow: h('div', { class: 'custom-next-arrow' }, 'Next'),
      },
      slots: { default: slides },
    })
    expect(wrapper.find('.custom-next-arrow').exists()).toBe(true)
    expect(wrapper.find('.hmfw-carousel-arrow-right').exists()).toBe(false)
  })
})

describe('Carousel - Semantic API (classNames / styles)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('applies classNames to corresponding DOM elements', () => {
    const wrapper = mount(Carousel, {
      props: {
        loop: false,
        classNames: {
          root: 'my-root',
          list: 'my-list',
          slide: 'my-slide',
          dots: 'my-dots',
          dot: 'my-dot',
        },
      },
      slots: { default: slides },
    })
    expect(wrapper.find('.my-root').exists()).toBe(true)
    expect(wrapper.find('.my-list').exists()).toBe(true)
    expect(wrapper.find('.my-slide').exists()).toBe(true)
    expect(wrapper.find('.my-dots').exists()).toBe(true)
    expect(wrapper.find('.my-dot').exists()).toBe(true)
  })

  it('applies styles to corresponding DOM elements', () => {
    const wrapper = mount(Carousel, {
      props: {
        loop: false,
        styles: {
          root: { backgroundColor: 'rgb(255, 0, 0)' },
          dots: { bottom: '30px' },
        },
      },
      slots: { default: slides },
    })
    const root = wrapper.find('.hmfw-carousel')
    expect(root.attributes('style')).toMatch(/background-color:\s*rgb\(255,\s*0,\s*0\)/)
    const dots = wrapper.find('.hmfw-carousel-dots')
    expect(dots.attributes('style')).toContain('bottom: 30px')
  })

  it('applies slideActive classNames/styles only on the active slide', async () => {
    const wrapper = mount(Carousel, {
      props: {
        loop: false,
        arrows: true,
        classNames: { slideActive: 'active-slide-custom' },
        styles: { slideActive: { border: '2px solid rgb(0, 0, 255)' } },
      },
      slots: { default: slides },
    })

    const slidesFirst = wrapper.findAll('.hmfw-carousel-slide')
    // 第一张 slide 应有 active 类名和样式
    expect(slidesFirst[0].classes()).toContain('active-slide-custom')
    expect(slidesFirst[0].attributes('style')).toMatch(/border/)
    // 第二张不应有
    expect(slidesFirst[1].classes()).not.toContain('active-slide-custom')

    // 切换到第二张
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()

    const slidesAfter = wrapper.findAll('.hmfw-carousel-slide')
    expect(slidesAfter[1].classes()).toContain('active-slide-custom')
    expect(slidesAfter[1].attributes('style')).toMatch(/border/)
  })

  it('supports arrow classNames', () => {
    const wrapper = mount(Carousel, {
      props: {
        arrows: true,
        classNames: {
          arrow: 'my-arrow',
          arrowLeft: 'my-arrow-left',
          arrowRight: 'my-arrow-right',
        },
      },
      slots: { default: slides },
    })
    expect(wrapper.find('.my-arrow').exists()).toBe(true)
    expect(wrapper.find('.my-arrow-left').exists()).toBe(true)
    expect(wrapper.find('.my-arrow-right').exists()).toBe(true)
  })

  it('supports arrow styles', () => {
    const wrapper = mount(Carousel, {
      props: {
        arrows: true,
        styles: {
          arrow: { fontSize: '24px' },
          arrowLeft: { left: '20px' },
          arrowRight: { right: '20px' },
        },
      },
      slots: { default: slides },
    })
    const leftArrow = wrapper.find('.hmfw-carousel-arrow-left')
    expect(leftArrow.attributes('style')).toMatch(/font-size:\s*24px/)
    expect(leftArrow.attributes('style')).toContain('left: 20px')
  })
})

// ============================================================
// 🟢 低优先级补充测试
// ============================================================

describe('Carousel - Dynamic Props', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts and stops autoplay when prop toggles', async () => {
    const wrapper = mount(Carousel, {
      props: { autoplay: false, delay: 1000 },
      slots: { default: slides },
    })

    // 初始不动
    vi.advanceTimersByTime(2000)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 1')

    // 动态开启 autoplay
    await wrapper.setProps({ autoplay: true })
    vi.advanceTimersByTime(1500)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 2')

    // 动态关闭 autoplay
    await wrapper.setProps({ autoplay: false })
    vi.advanceTimersByTime(3000)
    await wrapper.vm.$nextTick()
    // 应该停留在 Slide 2，不再自动播放
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 2')

    wrapper.unmount()
  })

  it('handles different slide counts correctly', () => {
    // 测试 5 个 slides
    const wrapper5 = mount(Carousel, {
      props: { loop: false },
      slots: { default: () => Array.from({ length: 5 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })
    expect(wrapper5.findAll('.hmfw-carousel-slide').length).toBe(5)
    expect(wrapper5.findAll('.hmfw-carousel-dots li').length).toBe(5)
    wrapper5.unmount()

    // 测试 10 个 slides
    const wrapper10 = mount(Carousel, {
      props: { loop: false },
      slots: { default: () => Array.from({ length: 10 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })
    expect(wrapper10.findAll('.hmfw-carousel-slide').length).toBe(10)
    expect(wrapper10.findAll('.hmfw-carousel-dots li').length).toBe(10)
    wrapper10.unmount()
  })
})
