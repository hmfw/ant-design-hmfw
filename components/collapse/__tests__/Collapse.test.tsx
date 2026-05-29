import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Collapse } from '../Collapse'
import { nextTick } from 'vue'

const items = [
  { key: '1', label: 'Panel 1', children: 'Content 1' },
  { key: '2', label: 'Panel 2', children: 'Content 2' },
  { key: '3', label: 'Panel 3', children: 'Content 3', disabled: true },
]

describe('Collapse', () => {
  it('renders all panels', () => {
    const wrapper = mount(Collapse, { props: { items } })
    expect(wrapper.findAll('.hmfw-collapse-item')).toHaveLength(3)
  })

  it('expands panel on click', async () => {
    const wrapper = mount(Collapse, { props: { items } })
    await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
    expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).toContain('hmfw-collapse-item-active')
  })

  it('collapses open panel on click', async () => {
    const wrapper = mount(Collapse, { props: { items, defaultActiveKey: '1' } })
    await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
    expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).not.toContain('hmfw-collapse-item-active')
  })

  it('accordion mode only opens one panel', async () => {
    const wrapper = mount(Collapse, { props: { items, accordion: true } })
    await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
    await wrapper.findAll('.hmfw-collapse-header')[1].trigger('click')
    const activeItems = wrapper.findAll('.hmfw-collapse-item-active')
    expect(activeItems).toHaveLength(1)
    expect(activeItems[0].find('.hmfw-collapse-header-text').text()).toBe('Panel 2')
  })

  it('does not toggle disabled panel', async () => {
    const wrapper = mount(Collapse, { props: { items } })
    await wrapper.findAll('.hmfw-collapse-header')[2].trigger('click')
    expect(wrapper.findAll('.hmfw-collapse-item')[2].classes()).not.toContain('hmfw-collapse-item-active')
  })

  it('renders defaultActiveKey', () => {
    const wrapper = mount(Collapse, { props: { items, defaultActiveKey: ['1', '2'] } })
    expect(wrapper.findAll('.hmfw-collapse-item-active')).toHaveLength(2)
  })

  it('emits change event', async () => {
    const wrapper = mount(Collapse, { props: { items } })
    await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('applies borderless class', () => {
    const wrapper = mount(Collapse, { props: { items, bordered: false } })
    expect(wrapper.classes()).toContain('hmfw-collapse-borderless')
  })

  it('applies ghost class', () => {
    const wrapper = mount(Collapse, { props: { items, ghost: true } })
    expect(wrapper.classes()).toContain('hmfw-collapse-ghost')
  })

  it('applies size class', () => {
    const small = mount(Collapse, { props: { items, size: 'small' } })
    expect(small.classes()).toContain('hmfw-collapse-small')
  })
})
