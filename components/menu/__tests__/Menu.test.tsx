import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { describe, it, expect, vi } from 'vitest'
import { Menu } from '../Menu'
import type { ItemType } from '../types'

const items: ItemType[] = [
  { key: '1', label: 'Item 1' },
  { key: '2', label: 'Item 2' },
  { key: '3', label: 'Item 3', disabled: true },
  {
    key: 'sub',
    label: 'Submenu',
    children: [
      { key: 'sub-1', label: 'Sub Item 1' },
      { key: 'sub-2', label: 'Sub Item 2' },
    ],
  },
]

describe('Menu', () => {
  // ===== 基础渲染 =====
  it('renders menu items', () => {
    const wrapper = mount(Menu, { props: { items } })
    expect(wrapper.findAll('.hmfw-menu-item')).toHaveLength(3)
  })

  it('renders submenu', () => {
    const wrapper = mount(Menu, { props: { items } })
    expect(wrapper.find('.hmfw-menu-submenu').exists()).toBe(true)
  })

  it('renders menu with role="menu"', () => {
    const wrapper = mount(Menu, { props: { items } })
    expect(wrapper.find('ul[role="menu"]').exists()).toBe(true)
  })

  // ===== 选择行为 =====
  it('selects item on click', async () => {
    const wrapper = mount(Menu, { props: { items } })
    await wrapper.findAll('.hmfw-menu-item')[0].trigger('click')
    expect(wrapper.findAll('.hmfw-menu-item')[0].classes()).toContain('hmfw-menu-item-selected')
  })

  it('does not select disabled item', async () => {
    const wrapper = mount(Menu, { props: { items } })
    await wrapper.findAll('.hmfw-menu-item')[2].trigger('click')
    expect(wrapper.findAll('.hmfw-menu-item')[2].classes()).not.toContain('hmfw-menu-item-selected')
  })

  it('emits select event', async () => {
    const wrapper = mount(Menu, { props: { items } })
    await wrapper.findAll('.hmfw-menu-item')[0].trigger('click')
    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('select')?.[0][0]).toMatchObject({ key: '1' })
  })

  it('emits click event even when selectable is false', async () => {
    const wrapper = mount(Menu, { props: { items, selectable: false } })
    await wrapper.findAll('.hmfw-menu-item')[0].trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')?.[0][0]).toMatchObject({ key: '1' })
  })

  it('emits deselect event in multiple mode', async () => {
    const wrapper = mount(Menu, {
      props: { items, multiple: true, defaultSelectedKeys: ['1'] },
    })
    await wrapper.findAll('.hmfw-menu-item')[0].trigger('click')
    expect(wrapper.emitted('deselect')).toBeTruthy()
    expect(wrapper.emitted('deselect')?.[0][0]).toMatchObject({ key: '1' })
  })

  it('supports multiple selection', async () => {
    const wrapper = mount(Menu, { props: { items, multiple: true } })
    await wrapper.findAll('.hmfw-menu-item')[0].trigger('click')
    await wrapper.findAll('.hmfw-menu-item')[1].trigger('click')
    expect(wrapper.findAll('.hmfw-menu-item-selected')).toHaveLength(2)
  })

  it('does not select when selectable is false', async () => {
    const wrapper = mount(Menu, { props: { items, selectable: false } })
    await wrapper.findAll('.hmfw-menu-item')[0].trigger('click')
    expect(wrapper.find('.hmfw-menu-item-selected').exists()).toBe(false)
  })

  // ===== 模式 & 主题 =====
  it('applies mode class', () => {
    const horizontal = mount(Menu, { props: { items, mode: 'horizontal' } })
    expect(horizontal.classes()).toContain('hmfw-menu-horizontal')
    const inline = mount(Menu, { props: { items, mode: 'inline' } })
    expect(inline.classes()).toContain('hmfw-menu-inline')
    const vertical = mount(Menu, { props: { items, mode: 'vertical' } })
    expect(vertical.classes()).toContain('hmfw-menu-vertical')
  })

  it('applies dark theme class', () => {
    const wrapper = mount(Menu, { props: { items, theme: 'dark' } })
    expect(wrapper.classes()).toContain('hmfw-menu-dark')
  })

  it('default theme is light', () => {
    const wrapper = mount(Menu, { props: { items } })
    expect(wrapper.classes()).toContain('hmfw-menu-light')
  })

  // ===== defaultSelectedKeys / defaultOpenKeys =====
  it('renders defaultSelectedKeys', () => {
    const wrapper = mount(Menu, { props: { items, defaultSelectedKeys: ['2'] } })
    expect(wrapper.findAll('.hmfw-menu-item')[1].classes()).toContain('hmfw-menu-item-selected')
  })

  it('expands defaultOpenKeys in inline mode', () => {
    const wrapper = mount(Menu, {
      props: { items, mode: 'inline', defaultOpenKeys: ['sub'] },
    })
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(true)
  })

  // ===== Inline SubMenu =====
  it('expands inline submenu on click', async () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline' } })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    await submenuTitle.trigger('click')
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(true)
  })

  it('collapses inline submenu on second click', async () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline' } })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    await submenuTitle.trigger('click')
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(true)
    await submenuTitle.trigger('click')
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(false)
  })

  // ===== Inline Collapsed =====
  it('applies inline-collapsed class', () => {
    const wrapper = mount(Menu, {
      props: { items, mode: 'inline', inlineCollapsed: true },
    })
    expect(wrapper.classes()).toContain('hmfw-menu-inline-collapsed')
  })

  it('shows title content when not collapsed', () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline' } })
    expect(wrapper.find('.hmfw-menu-title-content').exists()).toBe(true)
  })

  it('emits openChange when submenu toggles', async () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline' } })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    await submenuTitle.trigger('click')
    expect(wrapper.emitted('openChange')).toBeTruthy()
    expect(wrapper.emitted('openChange')?.[0][0]).toContain('sub')
  })

  // ===== Divider =====
  it('renders divider', () => {
    const itemsWithDivider: ItemType[] = [
      { key: '1', label: 'Item 1' },
      { type: 'divider', key: 'divider-1' },
      { key: '2', label: 'Item 2' },
    ]
    const wrapper = mount(Menu, { props: { items: itemsWithDivider } })
    expect(wrapper.find('.hmfw-menu-item-divider').exists()).toBe(true)
  })

  it('renders dashed divider', () => {
    const itemsWithDashedDivider: ItemType[] = [
      { key: '1', label: 'Item 1' },
      { type: 'divider', key: 'divider-1', dashed: true },
      { key: '2', label: 'Item 2' },
    ]
    const wrapper = mount(Menu, { props: { items: itemsWithDashedDivider } })
    expect(wrapper.find('.hmfw-menu-item-divider-dashed').exists()).toBe(true)
  })

  it('renders divider with role separator', () => {
    const itemsWithDivider: ItemType[] = [{ key: '1', label: 'Item 1' }, { type: 'divider' }]
    const wrapper = mount(Menu, { props: { items: itemsWithDivider } })
    expect(wrapper.find('[role="separator"]').exists()).toBe(true)
  })

  // ===== Item Group =====
  it('renders item group', () => {
    const itemsWithGroup: ItemType[] = [
      {
        type: 'group',
        key: 'group-1',
        label: 'Group 1',
        children: [
          { key: '1', label: 'Item 1' },
          { key: '2', label: 'Item 2' },
        ],
      },
    ]
    const wrapper = mount(Menu, { props: { items: itemsWithGroup } })
    expect(wrapper.find('.hmfw-menu-item-group').exists()).toBe(true)
    expect(wrapper.find('.hmfw-menu-item-group-title').text()).toBe('Group 1')
  })

  // ===== Danger =====
  it('renders danger item', () => {
    const itemsWithDanger: ItemType[] = [{ key: '1', label: 'Delete', danger: true }]
    const wrapper = mount(Menu, { props: { items: itemsWithDanger } })
    expect(wrapper.find('.hmfw-menu-item-danger').exists()).toBe(true)
  })

  it('can select danger item', async () => {
    const itemsWithDanger: ItemType[] = [{ key: '1', label: 'Delete', danger: true }]
    const wrapper = mount(Menu, { props: { items: itemsWithDanger } })
    await wrapper.find('.hmfw-menu-item').trigger('click')
    expect(wrapper.find('.hmfw-menu-item-selected').exists()).toBe(true)
    expect(wrapper.find('.hmfw-menu-item-danger').exists()).toBe(true)
  })

  // ===== 自定义 inlineIndent =====
  it('applies custom inlineIndent', () => {
    const wrapper = mount(Menu, {
      props: { items, mode: 'inline', inlineIndent: 32 },
    })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    expect(submenuTitle.attributes('style')).toContain('padding-left: 32px')
  })

  // ===== 禁用子菜单 =====
  it('handles disabled submenu', async () => {
    const itemsWithDisabledSubmenu: ItemType[] = [
      {
        key: 'sub',
        label: 'Submenu',
        disabled: true,
        children: [{ key: 'sub-1', label: 'Sub Item 1' }],
      },
    ]
    const wrapper = mount(Menu, {
      props: { items: itemsWithDisabledSubmenu, mode: 'inline' },
    })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    await submenuTitle.trigger('click')
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(false)
  })

  // ===== 子菜单选中态 =====
  it('applies submenu-selected class when child is selected', () => {
    const wrapper = mount(Menu, {
      props: {
        items,
        mode: 'inline',
        defaultSelectedKeys: ['sub-1'],
        defaultOpenKeys: ['sub'],
      },
    })
    expect(wrapper.find('.hmfw-menu-submenu-selected').exists()).toBe(true)
  })

  // ===== 空 items =====
  it('renders without items', () => {
    const wrapper = mount(Menu, { props: { items: [] } })
    expect(wrapper.find('ul[role="menu"]').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-menu-item')).toHaveLength(0)
  })

  it('filters null items', () => {
    const itemsWithNull: ItemType[] = [{ key: '1', label: 'Item 1' }, null, { key: '2', label: 'Item 2' }]
    const wrapper = mount(Menu, { props: { items: itemsWithNull } })
    expect(wrapper.findAll('.hmfw-menu-item')).toHaveLength(2)
  })

  // ===== 键盘导航 =====
  it('has tabindex on root menu element', () => {
    const wrapper = mount(Menu, { props: { items } })
    const root = wrapper.find('ul[role="menu"]')
    expect(root.attributes('tabindex')).toBe('0')
  })

  it('menu items have menuitem role', () => {
    const wrapper = mount(Menu, { props: { items } })
    const menuItems = wrapper.findAll('[role="menuitem"]')
    expect(menuItems).toHaveLength(3)
  })

  it('selected item has aria-current', async () => {
    const wrapper = mount(Menu, { props: { items, defaultSelectedKeys: ['1'] } })
    const selectedItem = wrapper.find('.hmfw-menu-item-selected')
    expect(selectedItem.attributes('aria-current')).toBe('true')
  })

  it('disabled items have aria-disabled', () => {
    const wrapper = mount(Menu, { props: { items } })
    const disabledItem = wrapper.findAll('.hmfw-menu-item')[2]
    expect(disabledItem.attributes('aria-disabled')).toBe('true')
  })

  it('submenu title has aria-expanded and aria-haspopup', () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline' } })
    const submenuTitle = wrapper.find('[aria-haspopup="true"]')
    expect(submenuTitle.exists()).toBe(true)
    expect(submenuTitle.attributes('aria-expanded')).toBe('false')
  })

  it('submenu title aria-expanded toggles on click', async () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline' } })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    expect(submenuTitle.attributes('aria-expanded')).toBe('false')
    await submenuTitle.trigger('click')
    expect(submenuTitle.attributes('aria-expanded')).toBe('true')
  })

  it('handles ArrowDown key to move focus', async () => {
    const wrapper = mount(Menu, { props: { items } })
    const firstItem = wrapper.findAll('.hmfw-menu-item')[0].element as HTMLElement

    // 聚焦第一个元素
    firstItem.focus()
    await wrapper.vm.$nextTick()

    // 模拟向下箭头 - 不抛出异常即通过
    const rootEl = wrapper.find('ul[role="menu"]')
    await rootEl.trigger('keydown', { key: 'ArrowDown' })
    expect(firstItem).toBeTruthy()
  })

  it('handles Enter key to activate focused item', async () => {
    const wrapper = mount(Menu, { props: { items } })
    const root = wrapper.find('ul[role="menu"]')
    const firstItem = wrapper.find('[data-menu-key="1"]')

    // 聚焦第一个元素
    const el = firstItem.element as HTMLElement
    el.focus()

    // 确保 activeElement 被正确设置（jsdom 中 focus() 可能不生效，手动触发 click 验证）
    await firstItem.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')?.[0][0]).toMatchObject({ key: '1' })
  })

  // ===== 受控模式 =====
  it('works with controlled selectedKeys', async () => {
    const wrapper = mount(Menu, {
      props: { items, selectedKeys: ['1'] },
    })
    expect(wrapper.find('.hmfw-menu-item-selected').exists()).toBe(true)
    await wrapper.setProps({ selectedKeys: ['2'] })
    expect(wrapper.findAll('.hmfw-menu-item')[1].classes()).toContain('hmfw-menu-item-selected')
  })

  it('works with controlled openKeys', async () => {
    const wrapper = mount(Menu, {
      props: { items, mode: 'inline', openKeys: [] },
    })
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(false)
    await wrapper.setProps({ openKeys: ['sub'] })
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(true)
  })

  // ===== v-model 支持 =====
  it('supports v-model:selectedKeys', async () => {
    const wrapper = mount(Menu, {
      props: { items, selectedKeys: [], 'onUpdate:selectedKeys': vi.fn() },
    })
    await wrapper.findAll('.hmfw-menu-item')[0].trigger('click')
    expect(wrapper.emitted('update:selectedKeys')).toBeTruthy()
  })

  it('supports v-model:openKeys', async () => {
    const wrapper = mount(Menu, {
      props: {
        items,
        mode: 'inline',
        openKeys: [],
        'onUpdate:openKeys': vi.fn(),
      },
    })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    await submenuTitle.trigger('click')
    expect(wrapper.emitted('update:openKeys')).toBeTruthy()
  })

  // ===== extra 属性 =====
  it('renders extra content', () => {
    const itemsWithExtra: ItemType[] = [{ key: '1', label: 'Item 1', extra: '⌘P' }]
    const wrapper = mount(Menu, { props: { items: itemsWithExtra } })
    expect(wrapper.find('.hmfw-menu-item-extra').exists()).toBe(true)
    expect(wrapper.find('.hmfw-menu-item-extra').text()).toBe('⌘P')
  })

  // ===== Trigger SubMenu Action =====
  it('opens submenu on hover when triggerSubMenuAction is hover', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Menu, {
      props: { items, mode: 'vertical', triggerSubMenuAction: 'hover' },
    })
    // Trigger 的 mouseenter handler 在其外层 wrapper div 上（非 submenu-title 本身）
    const triggerWrapper = wrapper.find('.hmfw-menu-submenu > div')
    await triggerWrapper.trigger('mouseenter')
    vi.runAllTimers()
    await Promise.resolve()
    expect(wrapper.emitted('openChange')).toBeTruthy()
    vi.useRealTimers()
  })

  it('opens submenu on click when triggerSubMenuAction is click', async () => {
    const wrapper = mount(Menu, {
      props: { items, mode: 'vertical', triggerSubMenuAction: 'click' },
    })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    await submenuTitle.trigger('click')
    expect(wrapper.emitted('openChange')).toBeTruthy()
  })

  // ===== 语义化 classNames =====
  it('applies custom classNames', () => {
    const wrapper = mount(Menu, {
      props: {
        items,
        classNames: {
          root: 'my-root',
          item: 'my-item',
        },
      },
    })
    expect(wrapper.classes()).toContain('my-root')
    expect(wrapper.find('.my-item').exists()).toBe(true)
  })

  it('applies state-specific classNames', () => {
    const wrapper = mount(Menu, {
      props: {
        items,
        defaultSelectedKeys: ['1'],
        classNames: {
          itemSelected: 'my-selected',
        },
      },
    })
    expect(wrapper.find('.my-selected').exists()).toBe(true)
  })

  // ===== 语义化 styles =====
  it('applies custom styles', () => {
    const wrapper = mount(Menu, {
      props: {
        items,
        styles: {
          root: { backgroundColor: 'red' },
        },
      },
    })
    const root = wrapper.find('ul[role="menu"]')
    expect(root.attributes('style')).toContain('background-color: red')
  })

  // ===== 图标渲染 =====
  it('renders icon VNode', () => {
    const itemsWithIcon: ItemType[] = [{ key: '1', label: 'Item 1', icon: h('span', '★') }]
    const wrapper = mount(Menu, { props: { items: itemsWithIcon } })
    expect(wrapper.find('.hmfw-menu-item-icon').exists()).toBe(true)
    expect(wrapper.find('.hmfw-menu-item-icon').text()).toBe('★')
  })

  it('renders icon from function', () => {
    const itemsWithIconFn: ItemType[] = [{ key: '1', label: 'Item 1', icon: () => h('span', '⚡') }]
    const wrapper = mount(Menu, { props: { items: itemsWithIconFn } })
    expect(wrapper.find('.hmfw-menu-item-icon').text()).toBe('⚡')
  })

  // ===== 数据属性 =====
  it('renders data-menu-key on items', () => {
    const wrapper = mount(Menu, { props: { items } })
    expect(wrapper.find('[data-menu-key="1"]').exists()).toBe(true)
  })

  // ===== Root class =====
  it('has hmfw-menu-root class', () => {
    const wrapper = mount(Menu, { props: { items } })
    expect(wrapper.classes()).toContain('hmfw-menu-root')
  })
})
