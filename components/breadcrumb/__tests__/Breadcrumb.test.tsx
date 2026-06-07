import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Breadcrumb } from '../Breadcrumb'

describe('Breadcrumb', () => {
  it('renders items', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'Home' }, { title: 'List' }, { title: 'Detail' }] },
    })
    expect(wrapper.findAll('.hmfw-breadcrumb-item').length).toBe(3)
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Detail')
  })

  it('renders separators between items', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'A' }, { title: 'B' }] },
    })
    const separators = wrapper.findAll('.hmfw-breadcrumb-separator')
    expect(separators.length).toBe(1)
    expect(separators[0].text()).toBe('/')
  })

  it('does not render separator after last item', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'A' }, { title: 'B' }] },
    })
    const items = wrapper.findAll('.hmfw-breadcrumb-item')
    const separators = wrapper.findAll('.hmfw-breadcrumb-separator')
    expect(items.length).toBe(2)
    expect(separators.length).toBe(1)
  })

  it('uses custom separator', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'A' }, { title: 'B' }], separator: '>' },
    })
    expect(wrapper.find('.hmfw-breadcrumb-separator').text()).toBe('>')
  })

  it('renders link for items with href', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'Home', href: '/' }] },
    })
    expect(wrapper.find('a').attributes('href')).toBe('/')
  })

  it('supports VNode as title', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: h('span', { class: 'custom-title' }, 'Custom') },
        ],
      },
    })
    expect(wrapper.find('.custom-title').text()).toBe('Custom')
  })

  it('supports VNode as separator', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [{ title: 'A' }, { title: 'B' }],
        separator: h('span', { class: 'custom-sep' }, '>'),
      },
    })
    expect(wrapper.find('.custom-sep').text()).toBe('>')
  })

  it('supports separator type in items', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        separator: '',
        items: [
          { title: 'Location' },
          { type: 'separator', separator: ':' },
          { title: 'Application' },
          { type: 'separator' },
          { title: 'List' },
        ],
      },
    })
    const separators = wrapper.findAll('.hmfw-breadcrumb-separator')
    expect(separators.length).toBe(2)
    expect(separators[0].text()).toBe(':')
    expect(separators[1].text()).toBe('')
  })

  it('supports params replacement in title', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Users' },
          { title: 'User :id' },
        ],
        params: { id: '123' },
      },
    })
    expect(wrapper.text()).toContain('User 123')
  })

  it('supports path concatenation', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { path: 'home', title: 'Home' },
          { path: 'user', title: 'User' },
          { path: 'profile', title: 'Profile' },
        ],
      },
    })
    const links = wrapper.findAll('a')
    expect(links[0].attributes('href')).toBe('#/home')
    expect(links[1].attributes('href')).toBe('#/home/user')
    expect(links[2].attributes('href')).toBe('#/home/user/profile')
  })

  it('supports params in path', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { path: 'users', title: 'Users' },
          { path: ':id', title: 'User Detail' },
        ],
        params: { id: '456' },
      },
    })
    const links = wrapper.findAll('a')
    expect(links[1].attributes('href')).toBe('#/users/456')
  })

  it('supports className and style on items', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Home', className: 'custom-class', style: { color: 'red' } },
        ],
      },
    })
    const item = wrapper.find('.hmfw-breadcrumb-item')
    expect(item.classes()).toContain('custom-class')
    expect(item.attributes('style')).toContain('color: red')
  })

  it('supports data-* attributes', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Home', 'data-testid': 'home-link' } as any,
        ],
      },
    })
    expect(wrapper.find('[data-testid="home-link"]').exists()).toBe(true)
  })

  it('supports aria-* attributes', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Home', 'aria-label': 'Home page' } as any,
        ],
      },
    })
    expect(wrapper.find('[aria-label="Home page"]').exists()).toBe(true)
  })

  it('sets aria-current on last item', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Home' },
          { title: 'Current' },
        ],
      },
    })
    const items = wrapper.findAll('.hmfw-breadcrumb-item')
    expect(items[0].attributes('aria-current')).toBeUndefined()
    expect(items[1].attributes('aria-current')).toBe('page')
  })

  it('supports number as title', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 0 },
          { title: 123 },
        ],
      },
    })
    const links = wrapper.findAll('.hmfw-breadcrumb-link')
    expect(links[0].text()).toBe('0')
    expect(links[1].text()).toBe('123')
  })

  it('handles onClick event', async () => {
    let clicked = false
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          {
            title: 'Clickable',
            onClick: () => {
              clicked = true
            },
          },
        ],
      },
    })
    await wrapper.find('.hmfw-breadcrumb-link').trigger('click')
    expect(clicked).toBe(true)
  })

  it('renders nav with aria-label', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'Home' }] },
    })
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
    expect(nav.attributes('aria-label')).toBe('breadcrumb')
  })

  it('renders ol wrapper', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'Home' }] },
    })
    expect(wrapper.find('ol').exists()).toBe(true)
  })

  it('supports itemRender for custom rendering', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Home', path: 'home' },
          { title: 'List', path: 'list' },
        ],
        itemRender: (item, params, items, paths) => {
          return h('span', { class: 'custom-render' }, `Custom: ${item.title}`)
        },
      },
    })
    const customElements = wrapper.findAll('.custom-render')
    expect(customElements.length).toBe(2)
    expect(customElements[0].text()).toBe('Custom: Home')
    expect(customElements[1].text()).toBe('Custom: List')
  })

  it('itemRender receives correct parameters', () => {
    let receivedParams: any = null
    mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Home', path: 'home' },
          { title: 'User :id', path: ':id' },
        ],
        params: { id: '123' },
        itemRender: (item, params, items, paths) => {
          receivedParams = { item, params, items, paths }
          return h('span', item.title as string)
        },
      },
    })
    expect(receivedParams).not.toBeNull()
    expect(receivedParams.params).toEqual({ id: '123' })
    expect(receivedParams.items.length).toBe(2)
    expect(receivedParams.paths).toEqual(['home', '123'])
  })

  it('itemRender with links', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Home', path: 'home' },
          { title: 'List', path: 'list' },
        ],
        itemRender: (item, params, items, paths) => {
          const isLast = items.indexOf(item) === items.length - 1
          if (isLast) {
            return h('span', { class: 'custom-last' }, item.title as string)
          }
          return h('a', { class: 'custom-link', href: `#/${paths.join('/')}` }, item.title as string)
        },
      },
    })
    expect(wrapper.find('.custom-link').exists()).toBe(true)
    expect(wrapper.find('.custom-last').exists()).toBe(true)
    expect(wrapper.find('.custom-link').attributes('href')).toBe('#/home')
  })

  it('supports dropdown menu', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { title: 'Home', path: 'home' },
          {
            title: 'Apps',
            path: 'apps',
            menu: {
              items: [
                { key: 'app1', label: 'App 1' },
                { key: 'app2', label: 'App 2' },
              ],
            },
          },
        ],
      },
    })
    // 检查是否渲染了 Dropdown
    expect(wrapper.findComponent({ name: 'Dropdown' }).exists()).toBe(true)
    // 检查是否有下拉箭头图标
    expect(wrapper.find('.hmfw-breadcrumb-overlay-link').exists()).toBe(true)
  })

  it('renders dropdown icon', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          {
            title: 'Menu',
            menu: {
              items: [{ key: '1', label: 'Item 1' }],
            },
          },
        ],
      },
    })
    const overlayLink = wrapper.find('.hmfw-breadcrumb-overlay-link')
    expect(overlayLink.exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'Icon' }).exists()).toBe(true)
  })
})
