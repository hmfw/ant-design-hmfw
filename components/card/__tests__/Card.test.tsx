import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { h } from 'vue'
import { Card, CardGrid, CardMeta } from '../Card'

describe('Card', () => {
  it('renders correctly', () => {
    const wrapper = mount(Card)
    expect(wrapper.classes()).toContain('hmfw-card')
  })

  it('has border by default', () => {
    const wrapper = mount(Card)
    expect(wrapper.classes()).toContain('hmfw-card-bordered')
  })

  it('removes border when bordered=false', () => {
    const wrapper = mount(Card, { props: { bordered: false } })
    expect(wrapper.classes()).not.toContain('hmfw-card-bordered')
  })

  it('applies hoverable class', () => {
    const wrapper = mount(Card, { props: { hoverable: true } })
    expect(wrapper.classes()).toContain('hmfw-card-hoverable')
  })

  it('applies loading class', () => {
    const wrapper = mount(Card, { props: { loading: true } })
    expect(wrapper.classes()).toContain('hmfw-card-loading')
  })

  it('applies small size class', () => {
    const wrapper = mount(Card, { props: { size: 'small' } })
    expect(wrapper.classes()).toContain('hmfw-card-small')
  })

  it('renders title', () => {
    const wrapper = mount(Card, { props: { title: 'Card Title' } })
    expect(wrapper.find('.hmfw-card-head-title').text()).toBe('Card Title')
  })

  it('renders body content', () => {
    const wrapper = mount(Card, { slots: { default: '<p>Body</p>' } })
    expect(wrapper.find('.hmfw-card-body p').text()).toBe('Body')
  })

  it('renders extra slot', () => {
    const wrapper = mount(Card, {
      props: { title: 'Title' },
      slots: { extra: '<a>More</a>' },
    })
    expect(wrapper.find('.hmfw-card-extra a').text()).toBe('More')
  })

  it('shows loading skeleton when loading', () => {
    const wrapper = mount(Card, { props: { loading: true } })
    expect(wrapper.find('.hmfw-card-loading-content').exists()).toBe(true)
  })

  it('applies type=inner class', () => {
    const wrapper = mount(Card, { props: { type: 'inner', title: 'Inner' } })
    expect(wrapper.classes()).toContain('hmfw-card-type-inner')
  })

  it('variant=borderless removes border', () => {
    const wrapper = mount(Card, { props: { variant: 'borderless' } })
    expect(wrapper.classes()).not.toContain('hmfw-card-bordered')
  })

  it('variant=outlined adds border (overrides bordered=false)', () => {
    const wrapper = mount(Card, { props: { variant: 'outlined', bordered: false } })
    expect(wrapper.classes()).toContain('hmfw-card-bordered')
  })

  it('detects grid children and adds contain-grid', () => {
    const wrapper = mount(Card, {
      slots: {
        default: () => [h(CardGrid, () => 'A'), h(CardGrid, () => 'B')],
      },
    })
    expect(wrapper.classes()).toContain('hmfw-card-contain-grid')
    expect(wrapper.findAll('.hmfw-card-grid')).toHaveLength(2)
  })

  // 骨架屏优化测试
  it('renders loading skeleton with avatar when loading config has avatar', () => {
    const wrapper = mount(Card, { props: { loading: { avatar: true, paragraph: { rows: 3 } } } })
    expect(wrapper.find('.hmfw-card-loading-avatar').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-card-loading-block')).toHaveLength(3)
  })

  it('renders loading skeleton without avatar by default', () => {
    const wrapper = mount(Card, { props: { loading: true } })
    expect(wrapper.find('.hmfw-card-loading-avatar').exists()).toBe(false)
  })

  it('renders custom number of loading rows', () => {
    const wrapper = mount(Card, { props: { loading: { paragraph: { rows: 5 } } } })
    expect(wrapper.findAll('.hmfw-card-loading-block')).toHaveLength(5)
  })

  it('renders default 3 loading rows when loading is boolean', () => {
    const wrapper = mount(Card, { props: { loading: true } })
    expect(wrapper.findAll('.hmfw-card-loading-block')).toHaveLength(3)
  })

  // 标签页功能测试
  it('renders tab list', () => {
    const tabList = [
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
    ]
    const wrapper = mount(Card, { props: { tabList } })
    expect(wrapper.find('.hmfw-card-head-tabs').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-card-tab')).toHaveLength(2)
  })

  it('activates first tab by default', () => {
    const tabList = [
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
    ]
    const wrapper = mount(Card, { props: { tabList } })
    expect(wrapper.find('.hmfw-card-tab-active').text()).toBe('Tab 1')
  })

  it('activates defaultActiveTabKey', () => {
    const tabList = [
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
    ]
    const wrapper = mount(Card, { props: { tabList, defaultActiveTabKey: 'tab2' } })
    expect(wrapper.find('.hmfw-card-tab-active').text()).toBe('Tab 2')
  })

  it('calls onTabChange when tab clicked', async () => {
    const onTabChange = vi.fn()
    const tabList = [
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
    ]
    const wrapper = mount(Card, { props: { tabList, onTabChange } })
    await wrapper.findAll('.hmfw-card-tab')[1].trigger('click')
    expect(onTabChange).toHaveBeenCalledWith('tab2')
  })

  it('supports controlled activeTabKey', async () => {
    const tabList = [
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
    ]
    const wrapper = mount(Card, { props: { tabList, activeTabKey: 'tab2' } })
    expect(wrapper.find('.hmfw-card-tab-active').text()).toBe('Tab 2')

    await wrapper.setProps({ activeTabKey: 'tab1' })
    expect(wrapper.find('.hmfw-card-tab-active').text()).toBe('Tab 1')
  })

  it('disables tab when disabled is true', async () => {
    const onTabChange = vi.fn()
    const tabList = [
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2', disabled: true },
    ]
    const wrapper = mount(Card, { props: { tabList, onTabChange } })
    const disabledTab = wrapper.findAll('.hmfw-card-tab')[1]
    expect(disabledTab.classes()).toContain('hmfw-card-tab-disabled')

    await disabledTab.trigger('click')
    expect(onTabChange).not.toHaveBeenCalled()
  })

  it('renders tabBarExtraContent slot', () => {
    const tabList = [{ key: 'tab1', label: 'Tab 1' }]
    const wrapper = mount(Card, {
      props: { tabList },
      slots: { tabBarExtraContent: '<button>Extra</button>' },
    })
    expect(wrapper.find('.hmfw-card-tabs-extra button').text()).toBe('Extra')
  })

  it('emits update:activeTabKey on tab change', async () => {
    const tabList = [
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
    ]
    const wrapper = mount(Card, { props: { tabList } })
    await wrapper.findAll('.hmfw-card-tab')[1].trigger('click')
    expect(wrapper.emitted('update:activeTabKey')?.[0]).toEqual(['tab2'])
  })
})

describe('Card.Grid', () => {
  it('renders grid with hoverable by default', () => {
    const wrapper = mount(CardGrid, { slots: { default: () => 'Grid' } })
    expect(wrapper.classes()).toContain('hmfw-card-grid')
    expect(wrapper.classes()).toContain('hmfw-card-grid-hoverable')
  })

  it('can disable hoverable', () => {
    const wrapper = mount(CardGrid, { props: { hoverable: false }, slots: { default: () => 'Grid' } })
    expect(wrapper.classes()).not.toContain('hmfw-card-grid-hoverable')
  })

  it('is attached as Card.Grid', async () => {
    const { Card: C } = await import('../index')
    expect((C as any).Grid).toBe(CardGrid)
    expect((C as any).Meta).toBe(CardMeta)
  })
})

describe('CardMeta', () => {
  it('renders correctly', () => {
    const wrapper = mount(CardMeta)
    expect(wrapper.classes()).toContain('hmfw-card-meta')
  })

  it('renders title', () => {
    const wrapper = mount(CardMeta, { props: { title: 'Meta Title' } })
    expect(wrapper.find('.hmfw-card-meta-title').text()).toBe('Meta Title')
  })

  it('renders description', () => {
    const wrapper = mount(CardMeta, { props: { description: 'Meta Desc' } })
    expect(wrapper.find('.hmfw-card-meta-description').text()).toBe('Meta Desc')
  })
})
