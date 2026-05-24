import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Badge } from '../Badge'

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
})
