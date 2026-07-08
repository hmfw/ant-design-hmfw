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
    expect(wrapper.attributes('style')).toContain('gap: var(--hmfw-padding-xs)')
  })

  it('string gap preset middle', () => {
    const wrapper = mount(Flex, { props: { gap: 'middle' } })
    expect(wrapper.attributes('style')).toContain('gap: var(--hmfw-padding)')
  })

  it('string gap preset large', () => {
    const wrapper = mount(Flex, { props: { gap: 'large' } })
    expect(wrapper.attributes('style')).toContain('gap: var(--hmfw-padding-lg)')
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

  // ==================== 边界与扩展场景 ====================

  it('wrap string value wrap-reverse', () => {
    const wrapper = mount(Flex, { props: { wrap: 'wrap-reverse' } })
    expect(wrapper.attributes('style')).toContain('flex-wrap: wrap-reverse')
  })

  it('gap custom string value', () => {
    const wrapper = mount(Flex, { props: { gap: '1rem' } })
    expect(wrapper.attributes('style')).toContain('gap: 1rem')
  })

  it('flex as number', () => {
    const wrapper = mount(Flex, { props: { flex: 1 } })
    expect(wrapper.attributes('style')).toContain('flex: 1')
  })

  it('align baseline', () => {
    const wrapper = mount(Flex, { props: { align: 'baseline' } })
    expect(wrapper.attributes('style')).toContain('align-items: baseline')
  })

  it('align stretch', () => {
    const wrapper = mount(Flex, { props: { align: 'stretch' } })
    expect(wrapper.attributes('style')).toContain('align-items: stretch')
  })

  it('renders empty without error', () => {
    const wrapper = mount(Flex)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toBe('')
  })

  it('wrap not passed defaults to nowrap (boolean false default)', () => {
    const wrapper = mount(Flex)
    // Vue Boolean prop 未传时默认为 false → flexWrap: 'nowrap'（CSS 默认值）
    expect(wrapper.attributes('style')).toContain('flex-wrap: nowrap')
  })
})
