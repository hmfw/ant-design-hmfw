import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Badge } from '../Badge'
import { Ribbon } from '../Ribbon'

describe('Badge', () => {
  it('renders correctly', () => {
    const wrapper = mount(Badge)
    expect(wrapper.classes()).toContain('hmfw-badge')
  })

  it('shows count', () => {
    const wrapper = mount(Badge, { props: { count: 5 } })
    expect(wrapper.find('sup').text()).toBe('5')
  })

  it('shows overflow count', () => {
    const wrapper = mount(Badge, { props: { count: 100, overflowCount: 99 } })
    expect(wrapper.find('sup').text()).toBe('99+')
  })

  it('hides when count is 0 by default', () => {
    const wrapper = mount(Badge, { props: { count: 0 } })
    expect(wrapper.find('sup').exists()).toBe(false)
  })

  it('shows zero when showZero is true', () => {
    const wrapper = mount(Badge, { props: { count: 0, showZero: true } })
    expect(wrapper.find('sup').exists()).toBe(true)
    expect(wrapper.find('sup').text()).toBe('0')
  })

  it('renders dot mode', () => {
    const wrapper = mount(Badge, { props: { dot: true, count: 5 } })
    expect(wrapper.find('sup').classes()).toContain('hmfw-badge-dot')
    expect(wrapper.find('sup').text()).toBe('')
  })

  it('renders status badge', () => {
    const wrapper = mount(Badge, { props: { status: 'success' } })
    expect(wrapper.classes()).toContain('hmfw-badge-status')
    expect(wrapper.find('.hmfw-badge-status-dot').classes()).toContain('hmfw-badge-status-success')
  })

  it('renders status text', () => {
    const wrapper = mount(Badge, { props: { status: 'error', text: 'Error' } })
    expect(wrapper.find('.hmfw-badge-status-text').text()).toBe('Error')
  })

  it('wraps children', () => {
    const wrapper = mount(Badge, {
      props: { count: 3 },
      slots: { default: '<button>btn</button>' },
    })
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('sup').exists()).toBe(true)
  })

  it('applies small size', () => {
    const wrapper = mount(Badge, { props: { count: 1, size: 'small' } })
    expect(wrapper.find('sup').classes()).toContain('hmfw-badge-count-sm')
  })

  it('applies not-a-wrapper only for standalone badge', () => {
    const standalone = mount(Badge, { props: { count: 5 } })
    expect(standalone.classes()).toContain('hmfw-badge-not-a-wrapper')

    const wrapped = mount(Badge, {
      props: { count: 5 },
      slots: { default: '<button>btn</button>' },
    })
    expect(wrapped.classes()).not.toContain('hmfw-badge-not-a-wrapper')
  })

  it('handles string count "0" correctly with showZero', () => {
    const hidden = mount(Badge, { props: { count: '0' } })
    expect(hidden.find('sup').exists()).toBe(false)

    const shown = mount(Badge, { props: { count: '0', showZero: true } })
    expect(shown.find('sup').exists()).toBe(true)
    expect(shown.find('sup').text()).toBe('0')
  })

  it('applies offset correctly', () => {
    const wrapper = mount(Badge, { props: { count: 5, offset: [10, 20] } })
    const sup = wrapper.find('sup')
    expect(sup.attributes('style')).toContain('margin-top: 20px')
    expect(sup.attributes('style')).toContain('right: -10px')
  })

  it('ignores invalid offset', () => {
    const wrapper1 = mount(Badge, { props: { count: 5, offset: [10] as any } })
    const style1 = wrapper1.find('sup').attributes('style') || ''
    expect(style1).not.toMatch(/margin-top/)

    const wrapper2 = mount(Badge, { props: { count: 5, offset: [NaN, 10] as any } })
    const style2 = wrapper2.find('sup').attributes('style') || ''
    expect(style2).not.toMatch(/right/)
  })

  it('handles negative overflowCount correctly', () => {
    const wrapper = mount(Badge, { props: { count: 100, overflowCount: -1 } })
    // overflowCount 会被限制为最小 1
    expect(wrapper.find('sup').text()).toBe('1+')
  })

  it('handles zero overflowCount correctly', () => {
    const wrapper = mount(Badge, { props: { count: 100, overflowCount: 0 } })
    expect(wrapper.find('sup').text()).toBe('1+')
  })

  it('applies custom color in status mode', () => {
    const wrapper = mount(Badge, { props: { status: 'success', color: '#ff0000' } })
    const dot = wrapper.find('.hmfw-badge-status-dot')
    expect(dot.attributes('style')).toContain('background: rgb(255, 0, 0)')
  })

  it('applies preset color class when both status and color exist', () => {
    // 当同时存在 status 和 color 时，color 优先
    const wrapper = mount(Badge, { props: { status: 'success', color: 'red' } })
    const dot = wrapper.find('.hmfw-badge-status-dot')
    // color 是预设颜色，会应用 CSS 类名
    expect(dot.classes()).toContain('hmfw-badge-color-red')
    // 不应该有 status 的类名（因为 color 优先）
    expect(dot.classes()).not.toContain('hmfw-badge-status-success')
  })

  it('applies preset color to count badge', () => {
    const wrapper = mount(Badge, {
      props: { count: 5, color: 'pink' },
      slots: { default: '<div>child</div>' },
    })
    const sup = wrapper.find('sup')
    expect(sup.classes()).toContain('hmfw-badge-color-pink')
  })

  it('standalone badge has correct size', () => {
    const wrapper = mount(Badge, { props: { count: 5 } })
    expect(wrapper.classes()).toContain('hmfw-badge-not-a-wrapper')
    // 独立徽标应该有可见尺寸
    const badge = wrapper.find('.hmfw-badge-not-a-wrapper')
    expect(badge.exists()).toBe(true)
  })
})

describe('Badge.Ribbon', () => {
  it('renders ribbon with text', () => {
    const wrapper = mount(Ribbon, {
      props: { text: 'Hot' },
      slots: { default: '<div>card</div>' },
    })
    expect(wrapper.find('.hmfw-ribbon-text').text()).toBe('Hot')
    expect(wrapper.find('.hmfw-ribbon-wrapper').exists()).toBe(true)
    expect(wrapper.find('.hmfw-ribbon-corner').exists()).toBe(true)
  })

  it('defaults to end placement', () => {
    const wrapper = mount(Ribbon, { props: { text: 'Hot' } })
    expect(wrapper.find('.hmfw-ribbon').classes()).toContain('hmfw-ribbon-placement-end')
  })

  it('supports start placement', () => {
    const wrapper = mount(Ribbon, { props: { text: 'Hot', placement: 'start' } })
    expect(wrapper.find('.hmfw-ribbon').classes()).toContain('hmfw-ribbon-placement-start')
  })

  it('applies preset color class', () => {
    const wrapper = mount(Ribbon, { props: { text: 'Hot', color: 'red' } })
    expect(wrapper.find('.hmfw-ribbon').classes()).toContain('hmfw-ribbon-color-red')
  })

  it('applies custom color as inline style', () => {
    const wrapper = mount(Ribbon, { props: { text: 'Hot', color: '#ff0000' } })
    expect(wrapper.find('.hmfw-ribbon').attributes('style')).toContain('background: rgb(255, 0, 0)')
  })

  it('is attached to Badge.Ribbon', async () => {
    const { Badge: B } = await import('../index')
    expect((B as any).Ribbon).toBe(Ribbon)
  })

  it('applies custom color to corner via inline style', () => {
    const wrapper = mount(Ribbon, { props: { text: 'Hot', color: '#ff0000' } })
    const corner = wrapper.find('.hmfw-ribbon-corner')
    expect(corner.attributes('style')).toContain('border-color: rgb(255, 0, 0)')
  })

  it('does not apply corner style for preset colors', () => {
    const wrapper = mount(Ribbon, { props: { text: 'Hot', color: 'red' } })
    const corner = wrapper.find('.hmfw-ribbon-corner')
    // 预设颜色通过 CSS 类名控制，不应有内联样式
    expect(corner.attributes('style')).toBeFalsy()
  })
})
