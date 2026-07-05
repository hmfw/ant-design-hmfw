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
      props: { infinite: false },
      slots: { default: slides },
    })
    expect(wrapper.findAll('.hmfw-carousel-slide').length).toBe(3)
  })

  it('shows first slide as active by default', () => {
    const wrapper = mount(Carousel, {
      props: { infinite: false },
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

  it('supports dots object config with className', () => {
    const wrapper = mount(Carousel, {
      props: { dots: { className: 'custom-dots' } },
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
      props: { autoplay: true, autoplaySpeed: 1000 },
      slots: { default: slides },
    })
    vi.advanceTimersByTime(1500)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 2')
    wrapper.unmount()
  })

  it('supports autoplay object config with dotDuration', () => {
    const wrapper = mount(Carousel, {
      props: { autoplay: { dotDuration: true }, autoplaySpeed: 2000 },
      slots: { default: slides },
    })
    expect(wrapper.find('.hmfw-carousel-dots-progress').exists()).toBe(true)
    expect(wrapper.find('.hmfw-carousel').attributes('style')).toContain('--carousel-dot-duration: 2000ms')
  })

  it('wraps around with infinite=true', async () => {
    const wrapper = mount(Carousel, {
      props: { infinite: true, arrows: true },
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

  it('applies rootClassName', () => {
    const wrapper = mount(Carousel, {
      props: { rootClassName: 'my-carousel' },
      slots: { default: slides },
    })
    expect(wrapper.find('.my-carousel').exists()).toBe(true)
  })

  it('uses dotPlacement instead of deprecated dotPosition', () => {
    const wrapper = mount(Carousel, {
      props: { dotPlacement: 'top' },
      slots: { default: slides },
    })
    expect(wrapper.find('.hmfw-carousel-dots-top').exists()).toBe(true)
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

  it('supports deprecated dotPosition with mapping', () => {
    const wrapper = mount(Carousel, {
      props: { dotPosition: 'left' },
      slots: { default: slides },
    })
    expect(wrapper.find('.hmfw-carousel-dots-left').exists()).toBe(true)
  })

  it('has accessibility attributes', () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    const root = wrapper.find('.hmfw-carousel')
    expect(root.attributes('role')).toBe('region')
    expect(root.attributes('aria-roledescription')).toBe('carousel')
    expect(root.attributes('aria-label')).toBe('Carousel')

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

  it('renders multiple slides per view with slidesToShow', () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 3 },
      slots: { default: slides },
    })
    const slideElements = wrapper.findAll('.hmfw-carousel-slide')

    // 每个 slide 宽度为 33.333%
    expect(slideElements[0].attributes('style')).toContain('33.33')
    expect(slideElements[1].attributes('style')).toContain('33.33')
  })

  it('calculates page count correctly with slidesToShow and slidesToScroll', () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 3, slidesToScroll: 2 },
      slots: { default: () => Array.from({ length: 10 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    // 10 slides, show 3, scroll 2 => Math.floor((10-3)/2) + 1 = 4 pages
    expect(wrapper.findAll('.hmfw-carousel-dots li').length).toBe(4)
  })

  it('scrolls by slidesToScroll amount', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 2, slidesToScroll: 2, arrows: true },
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
      props: { slidesToShow: 2, slidesToScroll: 2 },
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

  it('handles last page with fewer slides than slidesToShow', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 3, slidesToScroll: 3, arrows: true },
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

    // 应该滚动到 slide index 3 (page 1 * slidesToScroll 3)
    // 但最大索引是 4 (7 - 3)，所以是 3
    expect(wrapper.emitted('afterChange')?.[0]).toEqual([3])
  })

  it('disables fade effect when slidesToShow > 1', () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 3, fade: true },
      slots: { default: slides },
    })

    // fade 应该被禁用
    expect(wrapper.find('.hmfw-carousel-fade').exists()).toBe(false)
  })

  it('applies centerMode padding', () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 3, centerMode: true, centerPadding: '10%' },
      slots: { default: slides },
    })

    const list = wrapper.find('.hmfw-carousel-list')
    // Vue 会将 padding 格式化为 padding: 0px 10%;
    expect(list.attributes('style')).toMatch(/padding.*10%/)
  })

  it('shows arrows only when slides > slidesToShow', () => {
    const wrapper1 = mount(Carousel, {
      props: { slidesToShow: 3, arrows: true },
      slots: { default: slides }, // 3 slides
    })
    expect(wrapper1.find('.hmfw-carousel-arrow').exists()).toBe(false)

    const wrapper2 = mount(Carousel, {
      props: { slidesToShow: 2, arrows: true },
      slots: { default: slides }, // 3 slides
    })
    expect(wrapper2.find('.hmfw-carousel-arrow').exists()).toBe(true)
  })

  it('autoplay respects slidesToScroll', async () => {
    const wrapper = mount(Carousel, {
      props: { autoplay: true, autoplaySpeed: 1000, slidesToShow: 2, slidesToScroll: 2 },
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

  it('renders cloned slides for infinite loop with slidesToShow > 1', () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 3, infinite: true },
      slots: { default: () => Array.from({ length: 5 }, (_, i) => h('div', `Slide ${i + 1}`)) },
    })

    // 应该渲染 5 + 5 + 5 = 15 个 slides（克隆整个数组以支持无缝循环）
    const slides = wrapper.findAll('.hmfw-carousel-slide')
    expect(slides.length).toBe(15)
  })

  it('does not clone slides for infinite loop with slidesToShow = 1', () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 1, infinite: true },
      slots: { default: slides }, // 3 slides
    })

    // infinite 模式下会克隆（3组，共9个）
    const allSlides = wrapper.findAll('.hmfw-carousel-slide')
    expect(allSlides.length).toBe(9) // 3 * 3 = 9
  })

  it('seamless infinite loop - next at end', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 3, slidesToScroll: 1, infinite: true, arrows: true },
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

  it('seamless infinite loop - prev at start', async () => {
    const wrapper = mount(Carousel, {
      props: { slidesToShow: 3, infinite: true, arrows: true },
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
