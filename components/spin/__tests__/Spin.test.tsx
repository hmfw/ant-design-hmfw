import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { Spin } from '../Spin'

describe('Spin', () => {
  it('renders spinning indicator by default', () => {
    const wrapper = mount(Spin)
    expect(wrapper.find('.hmfw-spin-dot').exists()).toBe(true)
  })

  it('shows tip text', () => {
    const wrapper = mount(Spin, { props: { tip: 'Loading...' } })
    expect(wrapper.find('.hmfw-spin-text').text()).toBe('Loading...')
  })

  it('applies small size class', () => {
    const wrapper = mount(Spin, { props: { size: 'small' } })
    expect(wrapper.find('.hmfw-spin').classes()).toContain('hmfw-spin-sm')
  })

  it('applies large size class', () => {
    const wrapper = mount(Spin, { props: { size: 'large' } })
    expect(wrapper.find('.hmfw-spin').classes()).toContain('hmfw-spin-lg')
  })

  it('wraps children in nested loading', () => {
    const wrapper = mount(Spin, { slots: { default: '<div class="content">Content</div>' } })
    expect(wrapper.find('.hmfw-spin-nested-loading').exists()).toBe(true)
    expect(wrapper.find('.content').exists()).toBe(true)
  })

  it('hides overlay when spinning=false', () => {
    const wrapper = mount(Spin, {
      props: { spinning: false },
      slots: { default: '<div>Content</div>' },
    })
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
  })

  it('renders custom indicator slot', () => {
    const wrapper = mount(Spin, {
      slots: { indicator: '<span class="my-spinner">loading</span>' },
    })
    expect(wrapper.find('.hmfw-spin-dot .my-spinner').exists()).toBe(true)
    // 默认四点指示器不应渲染
    expect(wrapper.find('.hmfw-spin-dot-item').exists()).toBe(false)
  })

  it('description acts as tip alias', () => {
    const wrapper = mount(Spin, { props: { description: 'Please wait' } })
    expect(wrapper.find('.hmfw-spin-text').text()).toBe('Please wait')
  })

  it('renders fullscreen mode', () => {
    const wrapper = mount(Spin, { props: { fullscreen: true } })
    expect(wrapper.find('.hmfw-spin-fullscreen').exists()).toBe(true)
    expect(wrapper.find('.hmfw-spin-fullscreen').classes()).toContain('hmfw-spin-fullscreen-show')
  })

  it('sets aria-busy on indicator', () => {
    const wrapper = mount(Spin)
    expect(wrapper.find('.hmfw-spin').attributes('aria-busy')).toBe('true')
  })

  it('delays showing spinner when delay is set', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Spin, {
      props: { spinning: false, delay: 200 },
      slots: { default: '<div>Content</div>' },
    })
    // 初始未转
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    await wrapper.setProps({ spinning: true })
    // delay 未到，还不显示
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    vi.advanceTimersByTime(200)
    await nextTick()
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(true)
    vi.useRealTimers()
  })
})
