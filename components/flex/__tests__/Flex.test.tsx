import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Flex } from '../Flex'

describe('Flex', () => {
  it('renders correctly', () => {
    const wrapper = mount(Flex)
    expect(wrapper.classes()).toContain('hmfw-flex')
  })

  it('vertical mode', () => {
    const wrapper = mount(Flex, { props: { vertical: true } })
    expect(wrapper.classes()).toContain('hmfw-flex-vertical')
  })

  it('applies justify style', () => {
    const wrapper = mount(Flex, { props: { justify: 'center' } })
    expect(wrapper.attributes('style')).toContain('justify-content: center')
  })

  it('applies space-between justify', () => {
    const wrapper = mount(Flex, { props: { justify: 'space-between' } })
    expect(wrapper.attributes('style')).toContain('justify-content: space-between')
  })

  it('does not add rtl class', () => {
    const wrapper = mount(Flex)
    expect(wrapper.classes()).not.toContain('hmfw-flex-rtl')
  })

  it('applies align style', () => {
    const wrapper = mount(Flex, { props: { align: 'flex-end' } })
    expect(wrapper.attributes('style')).toContain('align-items: flex-end')
  })

  it('numeric gap', () => {
    const wrapper = mount(Flex, { props: { gap: 16 } })
    expect(wrapper.attributes('style')).toContain('gap: 16px')
  })

  it('string gap preset small', () => {
    const wrapper = mount(Flex, { props: { gap: 'small' } })
    expect(wrapper.attributes('style')).toContain('gap: 8px')
  })

  it('string gap preset middle', () => {
    const wrapper = mount(Flex, { props: { gap: 'middle' } })
    expect(wrapper.attributes('style')).toContain('gap: 16px')
  })

  it('string gap preset large', () => {
    const wrapper = mount(Flex, { props: { gap: 'large' } })
    expect(wrapper.attributes('style')).toContain('gap: 24px')
  })

  it('wrap=true', () => {
    const wrapper = mount(Flex, { props: { wrap: true } })
    expect(wrapper.attributes('style')).toContain('flex-wrap: wrap')
  })

  it('wrap=false', () => {
    const wrapper = mount(Flex, { props: { wrap: false } })
    expect(wrapper.attributes('style')).toContain('flex-wrap: nowrap')
  })

  it('custom component tag', () => {
    const wrapper = mount(Flex, { props: { component: 'section' } })
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  it('flex prop', () => {
    const wrapper = mount(Flex, { props: { flex: '0 0 auto' } })
    expect(wrapper.attributes('style')).toContain('flex: 0 0 auto')
  })

  it('renders slot content', () => {
    const wrapper = mount(Flex, { slots: { default: '<span>child</span>' } })
    expect(wrapper.find('span').text()).toBe('child')
  })
})
