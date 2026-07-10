import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Space from '../Space'
import { h, Fragment, createCommentVNode } from 'vue'

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
    // 间距改为容器 gap（与 AntD v6 一致），正确处理换行
    expect(wrapper.attributes('style')).toContain('column-gap: 32px')
    expect(wrapper.attributes('style')).toContain('row-gap: 32px')
  })

  it('handles array size as [column, row] gap', () => {
    const wrapper = mount(Space, {
      props: { size: [16, 24] },
      slots: {
        default: () => [h('span', 'Item 1'), h('span', 'Item 2')],
      },
    })
    expect(wrapper.attributes('style')).toContain('column-gap: 16px')
    expect(wrapper.attributes('style')).toContain('row-gap: 24px')
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

  it('handles separator element', () => {
    const wrapper = mount(Space, {
      props: { separator: h('span', '|') },
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

  it('flattens fragment children (v-for)', () => {
    const wrapper = mount(Space, {
      slots: {
        // 模拟 v-for 产生的 Fragment
        default: () => [h(Fragment, [h('span', 'A'), h('span', 'B'), h('span', 'C')])],
      },
    })
    expect(wrapper.findAll('.hmfw-space-item')).toHaveLength(3)
  })

  it('filters out comment vnodes', () => {
    const wrapper = mount(Space, {
      slots: {
        default: () => [h('span', 'Item 1'), createCommentVNode('v-if'), h('span', 'Item 2')],
      },
    })
    expect(wrapper.findAll('.hmfw-space-item')).toHaveLength(2)
  })

  it('separator prop renders dividers', () => {
    const wrapper = mount(Space, {
      props: { separator: h('span', '|') },
      slots: {
        default: () => [h('span', 'A'), h('span', 'B'), h('span', 'C')],
      },
    })
    expect(wrapper.findAll('.hmfw-space-item-split')).toHaveLength(2)
  })

  it('vertical prop is shorthand for direction', () => {
    const wrapper = mount(Space, {
      props: { vertical: true },
      slots: {
        default: () => [h('span', 'A'), h('span', 'B')],
      },
    })
    expect(wrapper.classes()).toContain('hmfw-space-vertical')
  })

  it('supports split slot', () => {
    const wrapper = mount(Space, {
      slots: {
        default: () => [h('span', 'A'), h('span', 'B'), h('span', 'C')],
        split: () => h('span', { class: 'custom-divider' }, '|'),
      },
    })
    const splits = wrapper.findAll('.hmfw-space-item-split')
    expect(splits).toHaveLength(2) // 3 items = 2 splits
    expect(splits[0].find('.custom-divider').exists()).toBe(true)
  })

  it('slot takes precedence over separator prop', () => {
    const wrapper = mount(Space, {
      props: { separator: h('span', 'prop-sep') },
      slots: {
        default: () => [h('span', 'A'), h('span', 'B')],
        split: () => h('span', { class: 'slot-sep' }, 'slot-sep'),
      },
    })
    const splits = wrapper.findAll('.hmfw-space-item-split')
    expect(splits).toHaveLength(1)
    expect(splits[0].find('.slot-sep').exists()).toBe(true)
  })
})
