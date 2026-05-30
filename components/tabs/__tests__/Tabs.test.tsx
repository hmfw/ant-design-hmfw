import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { h, nextTick } from 'vue'
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

  it('applies size classes', () => {
    const wrapperSmall = mount(Tabs, { props: { items, size: 'small' } })
    expect(wrapperSmall.classes()).toContain('hmfw-tabs-small')

    const wrapperLarge = mount(Tabs, { props: { items, size: 'large' } })
    expect(wrapperLarge.classes()).toContain('hmfw-tabs-large')
  })

  it('applies position classes', () => {
    const wrapper = mount(Tabs, { props: { items, tabPosition: 'left' } })
    expect(wrapper.classes()).toContain('hmfw-tabs-left')
  })

  it('applies centered class', () => {
    const wrapper = mount(Tabs, { props: { items, centered: true } })
    expect(wrapper.classes()).toContain('hmfw-tabs-centered')
  })

  it('renders tab icons', () => {
    const itemsWithIcons = [
      { key: 'tab1', label: 'Tab 1', icon: h('span', { class: 'test-icon' }, 'Icon'), children: 'Content 1' },
    ]
    const wrapper = mount(Tabs, { props: { items: itemsWithIcons } })
    expect(wrapper.find('.hmfw-tabs-tab-icon').exists()).toBe(true)
    expect(wrapper.find('.test-icon').exists()).toBe(true)
  })

  it('renders editable-card with add button', () => {
    const wrapper = mount(Tabs, { props: { items, type: 'editable-card' } })
    expect(wrapper.classes()).toContain('hmfw-tabs-editable-card')
    expect(wrapper.find('.hmfw-tabs-nav-add').exists()).toBe(true)
  })

  it('hides add button when hideAdd is true', () => {
    const wrapper = mount(Tabs, { props: { items, type: 'editable-card', hideAdd: true } })
    expect(wrapper.find('.hmfw-tabs-nav-add').exists()).toBe(false)
  })

  it('renders close buttons for closable tabs', () => {
    const closableItems = [
      { key: 'tab1', label: 'Tab 1', children: 'Content 1', closable: true },
      { key: 'tab2', label: 'Tab 2', children: 'Content 2', closable: false },
    ]
    const wrapper = mount(Tabs, { props: { items: closableItems, type: 'editable-card' } })
    const removeBtns = wrapper.findAll('.hmfw-tabs-tab-remove')
    expect(removeBtns.length).toBe(1)
  })

  it('emits edit event on add button click', async () => {
    const wrapper = mount(Tabs, { props: { items, type: 'editable-card' } })
    await wrapper.find('.hmfw-tabs-nav-add').trigger('click')
    expect(wrapper.emitted('edit')).toBeTruthy()
    expect(wrapper.emitted('edit')![0][1]).toBe('add')
  })

  it('emits edit event on remove button click', async () => {
    const closableItems = [
      { key: 'tab1', label: 'Tab 1', children: 'Content 1' },
    ]
    const wrapper = mount(Tabs, { props: { items: closableItems, type: 'editable-card' } })
    await wrapper.find('.hmfw-tabs-tab-remove').trigger('click')
    expect(wrapper.emitted('edit')).toBeTruthy()
    expect(wrapper.emitted('edit')![0][0]).toBe('tab1')
    expect(wrapper.emitted('edit')![0][1]).toBe('remove')
  })

  it('renders tabBarExtraContent', () => {
    const extra = h('button', { class: 'extra-btn' }, 'Extra')
    const wrapper = mount(Tabs, { props: { items, tabBarExtraContent: extra } })
    expect(wrapper.find('.extra-btn').exists()).toBe(true)
  })

  it('renders tabBarExtraContent with left and right', () => {
    const extra = {
      left: h('span', { class: 'left-extra' }, 'Left'),
      right: h('span', { class: 'right-extra' }, 'Right'),
    }
    const wrapper = mount(Tabs, { props: { items, tabBarExtraContent: extra } })
    expect(wrapper.find('.left-extra').exists()).toBe(true)
    expect(wrapper.find('.right-extra').exists()).toBe(true)
  })

  it('applies tabBarGutter style', () => {
    const wrapper = mount(Tabs, { props: { items, tabBarGutter: 16 } })
    const firstTab = wrapper.findAll('.hmfw-tabs-tab')[0]
    expect(firstTab.attributes('style')).toContain('margin-right: 16px')
  })

  it('applies tabBarStyle', () => {
    const wrapper = mount(Tabs, { props: { items, tabBarStyle: { background: 'red' } } })
    expect(wrapper.find('.hmfw-tabs-nav').attributes('style')).toContain('background: red')
  })

  it('emits tabClick with event', async () => {
    const wrapper = mount(Tabs, { props: { items } })
    await wrapper.findAll('.hmfw-tabs-tab')[0].trigger('click')
    expect(wrapper.emitted('tabClick')).toBeTruthy()
    expect(wrapper.emitted('tabClick')![0][0]).toBe('tab1')
  })

  it('supports keyboard navigation', async () => {
    const wrapper = mount(Tabs, { props: { items: items.slice(0, 2) } })
    const tabs = wrapper.findAll('.hmfw-tabs-tab')

    await tabs[0].trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    // Should focus next tab (tested via DOM focus, not easily testable in jsdom)

    await tabs[0].trigger('keydown', { key: 'Enter' })
    await nextTick()
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('destroys inactive tab panes when destroyInactiveTabPane is true', async () => {
    const wrapper = mount(Tabs, { props: { items, destroyInactiveTabPane: true } })
    const panes = wrapper.findAll('.hmfw-tabs-tabpane')

    // Only active pane should have content
    expect(panes[0].text()).toContain('Content 1')
    expect(panes[1].text()).toBe('')
    expect(panes[2].text()).toBe('')

    // Switch tab
    await wrapper.findAll('.hmfw-tabs-tab')[1].trigger('click')
    await nextTick()

    const panesAfter = wrapper.findAll('.hmfw-tabs-tabpane')
    expect(panesAfter[0].text()).toBe('')
    expect(panesAfter[1].text()).toContain('Content 2')
  })

  it('renders ink bar for line type', () => {
    const wrapper = mount(Tabs, { props: { items, type: 'line' } })
    expect(wrapper.find('.hmfw-tabs-ink-bar').exists()).toBe(true)
  })

  it('does not render ink bar for card type', () => {
    const wrapper = mount(Tabs, { props: { items, type: 'card' } })
    expect(wrapper.find('.hmfw-tabs-ink-bar').exists()).toBe(false)
  })

  it('applies animated class when animated is true', () => {
    const wrapper = mount(Tabs, { props: { items, animated: true } })
    expect(wrapper.find('.hmfw-tabs-ink-bar-animated').exists()).toBe(true)
  })

  it('supports animated config object', () => {
    const wrapper = mount(Tabs, { props: { items, animated: { inkBar: true, tabPane: true } } })
    expect(wrapper.find('.hmfw-tabs-ink-bar-animated').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tabs-content-animated').exists()).toBe(true)
  })
})

