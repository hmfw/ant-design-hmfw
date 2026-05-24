import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Tabs } from '../Tabs'

const items = [
  { key: 'tab1', label: 'Tab 1', children: 'Content 1' },
  { key: 'tab2', label: 'Tab 2', children: 'Content 2' },
  { key: 'tab3', label: 'Tab 3', children: 'Content 3', disabled: true },
]

describe('Tabs', () => {
  it('renders tab labels', () => {
    const wrapper = mount(Tabs, { props: { items } })
    expect(wrapper.findAll('.hmfw-tabs-tab').length).toBe(3)
    expect(wrapper.text()).toContain('Tab 1')
  })

  it('shows first tab content by default', () => {
    const wrapper = mount(Tabs, { props: { items } })
    expect(wrapper.find('.hmfw-tabs-tabpane-active').text()).toContain('Content 1')
  })

  it('switches tab on click', async () => {
    const wrapper = mount(Tabs, { props: { items } })
    await wrapper.findAll('.hmfw-tabs-tab')[1].trigger('click')
    expect(wrapper.emitted('change')![0]).toEqual(['tab2'])
  })

  it('does not switch disabled tab', async () => {
    const wrapper = mount(Tabs, { props: { items } })
    await wrapper.findAll('.hmfw-tabs-tab')[2].trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('respects controlled activeKey', () => {
    const wrapper = mount(Tabs, { props: { items, activeKey: 'tab2' } })
    expect(wrapper.find('.hmfw-tabs-tabpane-active').text()).toContain('Content 2')
  })

  it('applies card type class', () => {
    const wrapper = mount(Tabs, { props: { items, type: 'card' } })
    expect(wrapper.classes()).toContain('hmfw-tabs-card')
  })
})
