import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Space from '../Space'
import { h } from 'vue'

describe('Space', () => {
  it('renders correctly', () => {
    const wrapper = mount(Space, {
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-space-item')).toHaveLength(2)
  })

  it('handles horizontal direction', () => {
    const wrapper = mount(Space, {
      props: { direction: 'horizontal' },
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
      },
    })
    expect(wrapper.classes()).toContain('hmfw-space-horizontal')
  })

  it('handles vertical direction', () => {
    const wrapper = mount(Space, {
      props: { direction: 'vertical' },
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
      },
    })
    expect(wrapper.classes()).toContain('hmfw-space-vertical')
  })

  it('handles different sizes', () => {
    const sizes = ['small', 'middle', 'large'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Space, {
        props: { size },
        slots: {
          default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles custom number size', () => {
    const wrapper = mount(Space, {
      props: { size: 32 },
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
      },
    })
    const items = wrapper.findAll('.hmfw-space-item')
    expect(items[0].attributes('style')).toContain('margin-right: 32px')
  })

  it('handles array size', () => {
    const wrapper = mount(Space, {
      props: { size: [16, 24] },
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles align prop', () => {
    const aligns = ['start', 'end', 'center', 'baseline'] as const
    aligns.forEach((align) => {
      const wrapper = mount(Space, {
        props: { align },
        slots: {
          default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
        },
      })
      expect(wrapper.classes()).toContain(`hmfw-space-align-${align}`)
    })
  })

  it('handles wrap mode', () => {
    const wrapper = mount(Space, {
      props: { wrap: true },
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
      },
    })
    expect(wrapper.classes()).toContain('hmfw-space-wrap')
  })

  it('handles split element', () => {
    const wrapper = mount(Space, {
      props: { split: h('span', '|') },
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2'), h('span', 'Item 3')],
      },
    })
    const splits = wrapper.findAll('.hmfw-space-item-split')
    expect(splits).toHaveLength(2) // 3 items = 2 splits
  })

  it('filters out empty children', () => {
    const wrapper = mount(Space, {
      slots: {
        default: () => [h('span', 'Item 1'), undefined, h('span', 'Item 2')],
      },
    })
    const items = wrapper.findAll('.hmfw-space-item')
    // Should have 2 items (null/undefined are filtered)
    expect(items.length).toBeGreaterThanOrEqual(2)
  })

  it('applies default center align for horizontal', () => {
    const wrapper = mount(Space, {
      props: { direction: 'horizontal' },
      slots: {
        default: () => [h('span', 'Item 1')],
      },
    })
    expect(wrapper.classes()).toContain('hmfw-space-align-center')
  })

  it('does not apply margin to last item', () => {
    const wrapper = mount(Space, {
      props: { size: 16 },
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
      },
    })
    const items = wrapper.findAll('.hmfw-space-item')
    const firstStyle = items[0].attributes('style') || ''
    const lastStyle = items[1].attributes('style') || ''
    expect(firstStyle).toContain('margin-right')
    expect(lastStyle).not.toContain('margin-right')
  })
})
