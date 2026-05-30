import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
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
  it('renders menu items', () => {
    const wrapper = mount(Menu, { props: { items } })
    expect(wrapper.findAll('.hmfw-menu-item')).toHaveLength(3)
  })

  it('renders submenu', () => {
    const wrapper = mount(Menu, { props: { items } })
    expect(wrapper.find('.hmfw-menu-submenu').exists()).toBe(true)
  })

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

  it('emits deselect event in multiple mode', async () => {
    const wrapper = mount(Menu, { props: { items, multiple: true, defaultSelectedKeys: ['1'] } })
    await wrapper.findAll('.hmfw-menu-item')[0].trigger('click')
    expect(wrapper.emitted('deselect')).toBeTruthy()
    expect(wrapper.emitted('deselect')?.[0][0]).toMatchObject({ key: '1' })
  })

  it('applies mode class', () => {
    const horizontal = mount(Menu, { props: { items, mode: 'horizontal' } })
    expect(horizontal.classes()).toContain('hmfw-menu-horizontal')
    const inline = mount(Menu, { props: { items, mode: 'inline' } })
    expect(inline.classes()).toContain('hmfw-menu-inline')
  })

  it('applies dark theme class', () => {
    const wrapper = mount(Menu, { props: { items, theme: 'dark' } })
    expect(wrapper.classes()).toContain('hmfw-menu-dark')
  })

  it('renders defaultSelectedKeys', () => {
    const wrapper = mount(Menu, { props: { items, defaultSelectedKeys: ['2'] } })
    expect(wrapper.findAll('.hmfw-menu-item')[1].classes()).toContain('hmfw-menu-item-selected')
  })

  it('expands inline submenu on click', async () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline' } })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    await submenuTitle.trigger('click')
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(true)
  })

  it('applies inline-collapsed class', () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline', inlineCollapsed: true } })
    expect(wrapper.classes()).toContain('hmfw-menu-inline-collapsed')
  })

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

  it('renders danger item', () => {
    const itemsWithDanger: ItemType[] = [{ key: '1', label: 'Delete', danger: true }]
    const wrapper = mount(Menu, { props: { items: itemsWithDanger } })
    expect(wrapper.find('.hmfw-menu-item-danger').exists()).toBe(true)
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

  it('applies custom inlineIndent', () => {
    const wrapper = mount(Menu, { props: { items, mode: 'inline', inlineIndent: 32 } })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    expect(submenuTitle.attributes('style')).toContain('padding-left: 32px')
  })

  it('handles disabled submenu', async () => {
    const itemsWithDisabledSubmenu: ItemType[] = [
      {
        key: 'sub',
        label: 'Submenu',
        disabled: true,
        children: [{ key: 'sub-1', label: 'Sub Item 1' }],
      },
    ]
    const wrapper = mount(Menu, { props: { items: itemsWithDisabledSubmenu, mode: 'inline' } })
    const submenuTitle = wrapper.find('.hmfw-menu-submenu-title')
    await submenuTitle.trigger('click')
    expect(wrapper.find('.hmfw-menu-sub').exists()).toBe(false)
  })
})
