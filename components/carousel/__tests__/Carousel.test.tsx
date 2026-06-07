import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { h, ref } from 'vue'
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
    const wrapper = mount(Carousel, { slots: { default: slides } })
    expect(wrapper.findAll('.hmfw-carousel-slide').length).toBe(3)
  })

  it('shows first slide as active by default', () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
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
