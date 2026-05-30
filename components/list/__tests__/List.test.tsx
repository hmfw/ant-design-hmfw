import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { h } from 'vue'
import { List, ListItem, ListItemMeta } from '../index'
import { Avatar } from '../../avatar'

// Mock matchMedia
beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
})

const data = ['Item 1', 'Item 2', 'Item 3']

describe('List', () => {
  it('renders items via renderItem', () => {
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
      },
    })
    expect(wrapper.findAll('.hmfw-list-item')).toHaveLength(3)
  })

  it('renders empty state when no data', () => {
    const wrapper = mount(List, { props: { dataSource: [] } })
    expect(wrapper.find('.hmfw-list-empty-text').exists()).toBe(true)
  })

  it('renders header and footer', () => {
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
        header: 'My Header',
        footer: 'My Footer',
      },
    })
    expect(wrapper.find('.hmfw-list-header').text()).toBe('My Header')
    expect(wrapper.find('.hmfw-list-footer').text()).toBe('My Footer')
  })

  it('applies bordered class', () => {
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
        bordered: true,
      },
    })
    expect(wrapper.classes()).toContain('hmfw-list-bordered')
  })

  it('applies size class', () => {
    const small = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
        size: 'small',
      },
    })
    expect(small.classes()).toContain('hmfw-list-sm')
    const large = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
        size: 'large',
      },
    })
    expect(large.classes()).toContain('hmfw-list-lg')
  })

  it('applies split class by default', () => {
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
      },
    })
    expect(wrapper.classes()).toContain('hmfw-list-split')
  })

  it('shows loading spinner', () => {
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
        loading: true,
      },
    })
    expect(wrapper.find('.hmfw-spin').exists()).toBe(true)
  })

  it('supports pagination', () => {
    const onChange = vi.fn()
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
        pagination: {
          pageSize: 2,
          onChange,
        },
      },
    })
    expect(wrapper.find('.hmfw-list-pagination').exists()).toBe(true)
  })

  it('supports grid layout', () => {
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
        grid: { column: 3, gutter: 16 },
      },
    })
    expect(wrapper.classes()).toContain('hmfw-list-grid')
  })

  it('supports vertical itemLayout', () => {
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => h(ListItem, null, () => item as string),
        itemLayout: 'vertical',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-list-vertical')
  })

  it('supports rowKey as string', () => {
    const dataWithKeys = [
      { id: 'a', name: 'Item 1' },
      { id: 'b', name: 'Item 2' },
    ]
    const wrapper = mount(List, {
      props: {
        dataSource: dataWithKeys,
        renderItem: (item: any) => h(ListItem, null, () => item.name),
        rowKey: 'id',
      },
    })
    expect(wrapper.findAll('.hmfw-list-item')).toHaveLength(2)
  })

  it('supports rowKey as function', () => {
    const dataWithKeys = [
      { id: 'a', name: 'Item 1' },
      { id: 'b', name: 'Item 2' },
    ]
    const wrapper = mount(List, {
      props: {
        dataSource: dataWithKeys,
        renderItem: (item: any) => h(ListItem, null, () => item.name),
        rowKey: (item: any) => item.id,
      },
    })
    expect(wrapper.findAll('.hmfw-list-item')).toHaveLength(2)
  })
})

describe('ListItem', () => {
  it('renders content', () => {
    const wrapper = mount(ListItem, { slots: { default: () => 'Item content' } })
    expect(wrapper.text()).toContain('Item content')
  })

  it('renders extra', () => {
    const wrapper = mount(ListItem, {
      props: { extra: h('span', 'Extra content') },
      slots: { default: () => 'Main' },
    })
    expect(wrapper.find('.hmfw-list-item-extra').text()).toBe('Extra content')
  })

  it('renders actions with separators', () => {
    const wrapper = mount(ListItem, {
      props: {
        actions: [h('a', 'Edit'), h('a', 'Delete')],
      },
      slots: { default: () => 'Main' },
    })
    expect(wrapper.find('.hmfw-list-item-action').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-list-item-action > li')).toHaveLength(2)
    expect(wrapper.find('.hmfw-list-item-action-split').exists()).toBe(true)
  })
})

describe('ListItemMeta', () => {
  it('renders title and description', () => {
    const wrapper = mount(ListItemMeta, {
      props: { title: 'Title', description: 'Desc' },
    })
    expect(wrapper.find('.hmfw-list-item-meta-title').text()).toBe('Title')
    expect(wrapper.find('.hmfw-list-item-meta-description').text()).toBe('Desc')
  })

  it('renders avatar', () => {
    const wrapper = mount(ListItemMeta, {
      props: {
        avatar: h(Avatar, { src: 'test.jpg' }),
        title: 'Title',
      },
    })
    expect(wrapper.find('.hmfw-list-item-meta-avatar').exists()).toBe(true)
  })

  it('supports slots', () => {
    const wrapper = mount(ListItemMeta, {
      slots: {
        title: () => 'Slot Title',
        description: () => 'Slot Desc',
      },
    })
    expect(wrapper.find('.hmfw-list-item-meta-title').text()).toBe('Slot Title')
    expect(wrapper.find('.hmfw-list-item-meta-description').text()).toBe('Slot Desc')
  })
})

describe('List.Item.Meta', () => {
  it('is properly mounted', () => {
    expect(List.Item.Meta).toBe(ListItemMeta)
  })
})
