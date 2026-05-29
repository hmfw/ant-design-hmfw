import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Watermark } from '../Watermark'

describe('Watermark', () => {
  it('renders wrapper div', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test' } })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
    expect(wrapper.find('.hmfw-watermark-wrapper').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(Watermark, {
      props: { content: 'Test' },
      slots: { default: '<p>Content</p>' },
    })
    expect(wrapper.find('p').text()).toBe('Content')
  })

  it('applies custom zIndex', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test', zIndex: 100 } })
    const wrapperEl = wrapper.find('.hmfw-watermark-wrapper')
    expect(wrapperEl.attributes('style')).toContain('z-index: 100')
  })

  it('renders with array content', () => {
    const wrapper = mount(Watermark, { props: { content: ['Line 1', 'Line 2'] } })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
  })
})
