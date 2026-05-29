import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { Carousel } from '../Carousel'

const slides = () => [
  h('div', { class: 'slide-1' }, 'Slide 1'),
  h('div', { class: 'slide-2' }, 'Slide 2'),
  h('div', { class: 'slide-3' }, 'Slide 3'),
]

describe('Carousel', () => {
  beforeEach(() => { vi.useFakeTimers() })
  afterEach(() => { vi.useRealTimers() })

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

  it('navigates to next slide on arrow click', async () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(400)
    await wrapper.vm.$nextTick()
    const active = wrapper.findAll('.hmfw-carousel-slide-active')
    expect(active[0].text()).toBe('Slide 2')
  })

  it('navigates to prev slide on arrow click', async () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    // go to slide 2 first
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(400)
    await wrapper.vm.$nextTick()
    // go back
    await wrapper.find('.hmfw-carousel-arrow-left').trigger('click')
    vi.advanceTimersByTime(400)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 1')
  })

  it('navigates via dot click', async () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    await wrapper.findAll('.hmfw-carousel-dots li')[2].trigger('click')
    vi.advanceTimersByTime(400)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 3')
  })

  it('emits beforeChange and afterChange', async () => {
    const wrapper = mount(Carousel, { slots: { default: slides } })
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    expect(wrapper.emitted('beforeChange')?.[0]).toEqual([0, 1])
    vi.advanceTimersByTime(400)
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

  it('autoplay advances slides', async () => {
    const wrapper = mount(Carousel, {
      props: { autoplay: true, autoplaySpeed: 1000 },
      slots: { default: slides },
    })
    vi.advanceTimersByTime(1400)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 2')
    wrapper.unmount()
  })

  it('wraps around with infinite=true', async () => {
    const wrapper = mount(Carousel, {
      props: { infinite: true },
      slots: { default: slides },
    })
    // go to last slide
    await wrapper.findAll('.hmfw-carousel-dots li')[2].trigger('click')
    vi.advanceTimersByTime(400)
    await wrapper.vm.$nextTick()
    // go next (should wrap to first)
    await wrapper.find('.hmfw-carousel-arrow-right').trigger('click')
    vi.advanceTimersByTime(400)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-carousel-slide-active').text()).toBe('Slide 1')
  })
})
