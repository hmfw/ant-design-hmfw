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

    const wrapperMiddle = mount(Tabs, { props: { items, size: 'middle' } })
    expect(wrapperMiddle.classes()).toContain('hmfw-tabs-middle')

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
      {
        key: 'tab1',
        label: 'Tab 1',
        icon: h('span', { class: 'test-icon' }, 'Icon'),
        children: 'Content 1',
      },
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
    const closableItems = [{ key: 'tab1', label: 'Tab 1', children: 'Content 1' }]
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
    expect(wrapper.find('.hmfw-tabs-extra-content').exists()).toBe(true)
  })

  it('renders tabBarExtraContent with left and right', () => {
    const extra = {
      left: h('span', { class: 'left-extra' }, 'Left'),
      right: h('span', { class: 'right-extra' }, 'Right'),
    }
    const wrapper = mount(Tabs, { props: { items, tabBarExtraContent: extra } })
    expect(wrapper.find('.left-extra').exists()).toBe(true)
    expect(wrapper.find('.right-extra').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tabs-extra-content-left').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tabs-extra-content-right').exists()).toBe(true)
  })

  it('renders tabBarExtraContent with only left', () => {
    const extra = {
      left: h('span', { class: 'only-left' }, 'Only Left'),
    }
    const wrapper = mount(Tabs, { props: { items, tabBarExtraContent: extra } })
    expect(wrapper.find('.only-left').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tabs-extra-content-left').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tabs-extra-content-right').exists()).toBe(false)
  })

  it('renders tabBarExtraContent with only right', () => {
    const extra = {
      right: h('span', { class: 'only-right' }, 'Only Right'),
    }
    const wrapper = mount(Tabs, { props: { items, tabBarExtraContent: extra } })
    expect(wrapper.find('.only-right').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tabs-extra-content-right').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tabs-extra-content-left').exists()).toBe(false)
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

  it('positions ink bar correctly in centered mode', async () => {
    const wrapper = mount(Tabs, { props: { items, centered: true } })

    // 获取 ink-bar 元素及其父容器，mock getBoundingClientRect 模拟真实布局
    const inkBarEl = wrapper.find('.hmfw-tabs-ink-bar').element as HTMLElement
    const parentEl = inkBarEl.parentElement!

    // 模拟父容器（nav-wrap）位置在 x=100 处，宽度 600
    const parentRectMock = vi.spyOn(parentEl, 'getBoundingClientRect').mockReturnValue({
      x: 100,
      y: 0,
      left: 100,
      right: 700,
      top: 0,
      bottom: 50,
      width: 600,
      height: 50,
      toJSON: () => {},
    })

    // 模拟激活 tab 在父容器内居中，tab 宽度 80，left = 100 + (600-3*80)/2 = 100 + 180 = 280
    // 假设 3 个 tab 每个宽 80px，总宽 240px
    const activeTabEl = parentEl.querySelector('.hmfw-tabs-tab-active') as HTMLElement
    const tabRectMock = vi.spyOn(activeTabEl, 'getBoundingClientRect').mockReturnValue({
      x: 280,
      y: 0,
      left: 280,
      right: 360,
      top: 0,
      bottom: 50,
      width: 80,
      height: 50,
      toJSON: () => {},
    })

    // 等待 Vue DOM 刷新和布局回调
    await nextTick()
    await new Promise((r) => setTimeout(r, 0))

    const inkBar = wrapper.find('.hmfw-tabs-ink-bar')
    expect(inkBar.exists()).toBe(true)

    // ink-bar 的 left 应该相对于父容器：280 - 100 = 180px
    expect(inkBarEl.style.left).toBe('180px')
    // ink-bar 的 width 应该等于激活 tab 的宽度：80px
    expect(inkBarEl.style.width).toBe('80px')

    parentRectMock.mockRestore()
    tabRectMock.mockRestore()
  })

  // ===== 受控/非受控模式 =====

  it('emits update:activeKey on tab click', async () => {
    const wrapper = mount(Tabs, { props: { items } })
    await wrapper.findAll('.hmfw-tabs-tab')[1].trigger('click')
    expect(wrapper.emitted('update:activeKey')![0]).toEqual(['tab2'])
  })

  it('supports v-model:activeKey in controlled mode', async () => {
    const wrapper = mount(Tabs, {
      props: { items, activeKey: 'tab1', 'onUpdate:activeKey': (v: string) => wrapper.setProps({ activeKey: v }) },
    })
    expect(wrapper.find('.hmfw-tabs-tabpane-active').text()).toContain('Content 1')
    await wrapper.findAll('.hmfw-tabs-tab')[1].trigger('click')
    expect(wrapper.props('activeKey')).toBe('tab2')
    expect(wrapper.find('.hmfw-tabs-tabpane-active').text()).toContain('Content 2')
  })

  // ===== 受控 ↔ 非受控切换 =====

  it('switches from controlled to uncontrolled mode gracefully', async () => {
    const wrapper = mount(Tabs, { props: { items, activeKey: 'tab1' } })
    expect(wrapper.find('.hmfw-tabs-tabpane-active').text()).toContain('Content 1')

    // 移除受控，降级为非受控模式
    await wrapper.setProps({ activeKey: undefined })
    await wrapper.findAll('.hmfw-tabs-tab')[1].trigger('click')
    expect(wrapper.find('.hmfw-tabs-tabpane-active').text()).toContain('Content 2')
  })

  it('switches from uncontrolled to controlled mode', async () => {
    const wrapper = mount(Tabs, { props: { items } })
    await wrapper.findAll('.hmfw-tabs-tab')[1].trigger('click')
    expect(wrapper.find('.hmfw-tabs-tabpane-active').text()).toContain('Content 2')

    // 接管为受控模式
    await wrapper.setProps({ activeKey: 'tab1' })
    expect(wrapper.find('.hmfw-tabs-tabpane-active').text()).toContain('Content 1')
  })

  // ===== 边界条件 =====

  it('renders empty state when items is empty', () => {
    const wrapper = mount(Tabs, { props: { items: [] } })
    expect(wrapper.find('.hmfw-tabs-tab').exists()).toBe(false)
  })

  // ===== 自定义图标 =====

  it('supports custom addIcon', () => {
    const addIcon = h('span', { class: 'custom-add-icon' }, '+')
    const wrapper = mount(Tabs, { props: { items, type: 'editable-card', addIcon } })
    expect(wrapper.find('.custom-add-icon').exists()).toBe(true)
  })

  it('supports custom removeIcon', () => {
    const removeIcon = h('span', { class: 'custom-remove-icon' }, 'x')
    const wrapper = mount(Tabs, { props: { items, type: 'editable-card', removeIcon } })
    expect(wrapper.find('.custom-remove-icon').exists()).toBe(true)
  })

  it('supports custom closeIcon per tab item', () => {
    const itemsWithCloseIcon = [
      {
        key: 'tab1',
        label: 'Tab 1',
        children: 'Content 1',
        closeIcon: h('span', { class: 'custom-close-icon' }, 'Delete'),
      },
    ]
    const wrapper = mount(Tabs, { props: { items: itemsWithCloseIcon, type: 'editable-card' } })
    expect(wrapper.find('.custom-close-icon').exists()).toBe(true)
  })

  // ===== forceRender / destroyInactiveTabPane (per-item) =====

  it('force renders inactive tab pane when forceRender is true on item', () => {
    const itemsWithForce = [
      { key: 'tab1', label: 'Tab 1', children: 'Content 1' },
      { key: 'tab2', label: 'Tab 2', children: 'Content 2', forceRender: true },
    ]
    const wrapper = mount(Tabs, { props: { items: itemsWithForce, activeKey: 'tab1' } })
    expect(wrapper.findAll('.hmfw-tabs-tabpane')[1].text()).toContain('Content 2')
  })

  it('destroys inactive tab pane per item when destroyInactiveTabPane is set', () => {
    const itemsWithDestroy = [
      { key: 'tab1', label: 'Tab 1', children: 'Content 1' },
      { key: 'tab2', label: 'Tab 2', children: 'Content 2', destroyInactiveTabPane: true },
    ]
    const wrapper = mount(Tabs, { props: { items: itemsWithDestroy, activeKey: 'tab1' } })
    expect(wrapper.findAll('.hmfw-tabs-tabpane')[1].text()).toBe('')
  })

  // ===== 动态 items 变化 =====

  it('reacts to dynamic items changes', async () => {
    const wrapper = mount(Tabs, {
      props: { items: [items[0], items[1]], activeKey: 'tab1' },
    })
    expect(wrapper.findAll('.hmfw-tabs-tab').length).toBe(2)

    await wrapper.setProps({ items })
    expect(wrapper.findAll('.hmfw-tabs-tab').length).toBe(3)
  })

  // ===== position: bottom =====

  it('applies bottom position class', () => {
    const wrapper = mount(Tabs, { props: { items, tabPosition: 'bottom' } })
    expect(wrapper.classes()).toContain('hmfw-tabs-bottom')
  })

  // ===== 语义化 API =====

  it('applies semantic classNames to sub-elements', () => {
    const wrapper = mount(Tabs, {
      props: {
        items,
        classNames: {
          root: 'semantic-root',
          nav: 'semantic-nav',
          tab: 'semantic-tab',
          inkBar: 'semantic-inkbar',
          content: 'semantic-content',
          tabpane: 'semantic-tabpane',
        },
      },
    })
    expect(wrapper.find('.semantic-root').exists()).toBe(true)
    expect(wrapper.find('.semantic-nav').exists()).toBe(true)
    expect(wrapper.find('.semantic-tab').exists()).toBe(true)
    expect(wrapper.find('.semantic-inkbar').exists()).toBe(true)
    expect(wrapper.find('.semantic-content').exists()).toBe(true)
    expect(wrapper.find('.semantic-tabpane').exists()).toBe(true)
  })

  it('applies semantic styles to sub-elements', () => {
    const wrapper = mount(Tabs, {
      props: {
        items,
        styles: {
          root: { border: '3px solid green' },
          nav: { background: 'yellow' },
        },
      },
    })
    expect(wrapper.attributes('style')).toContain('border: 3px solid green')
    expect(wrapper.find('.hmfw-tabs-nav').attributes('style')).toContain('background: yellow')
  })

  it('applies tabActive classNames on active tab', () => {
    const wrapper = mount(Tabs, {
      props: {
        items,
        activeKey: 'tab1',
        classNames: { tabActive: 'my-active-tab' },
      },
    })
    const activeTab = wrapper.find('.hmfw-tabs-tab-active')
    expect(activeTab.classes()).toContain('my-active-tab')
  })

  // ===== animated 禁用 =====

  it('does not render ink-bar-animated class when animated is false', () => {
    const wrapper = mount(Tabs, { props: { items, animated: false } })
    expect(wrapper.find('.hmfw-tabs-ink-bar-animated').exists()).toBe(false)
  })

  it('supports animated config with only tabPane enabled', () => {
    const wrapper = mount(Tabs, { props: { items, animated: { inkBar: false, tabPane: true } } })
    expect(wrapper.find('.hmfw-tabs-ink-bar-animated').exists()).toBe(false)
    expect(wrapper.find('.hmfw-tabs-content-animated').exists()).toBe(true)
  })
})
