import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
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
})
