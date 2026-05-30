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
})
