import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { Menu } from '../Menu'

const items = [
  { key: '1', label: 'Item 1' },
  { key: '2', label: 'Item 2' },
  { key: '3', label: 'Item 3', disabled: true },
  { key: 'sub', label: 'Submenu', children: [
    { key: 'sub-1', label: 'Sub Item 1' },
    { key: 'sub-2', label: 'Sub Item 2' },
  ]},
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
})
