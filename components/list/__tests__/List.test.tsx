import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { List, ListItem, ListItemMeta } from '../List'

const data = ['Item 1', 'Item 2', 'Item 3']

describe('List', () => {
  it('renders items via renderItem', () => {
    const wrapper = mount(List, {
      props: {
        dataSource: data,
        renderItem: (item: unknown) => <ListItem>{item as string}</ListItem>,
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
      props: { dataSource: data, header: 'My Header', footer: 'My Footer' },
    })
    expect(wrapper.find('.hmfw-list-header').text()).toBe('My Header')
    expect(wrapper.find('.hmfw-list-footer').text()).toBe('My Footer')
  })

  it('applies bordered class', () => {
    const wrapper = mount(List, { props: { dataSource: data, bordered: true } })
    expect(wrapper.classes()).toContain('hmfw-list-bordered')
  })

  it('applies size class', () => {
    const small = mount(List, { props: { dataSource: data, size: 'small' } })
    expect(small.classes()).toContain('hmfw-list-small')
    const large = mount(List, { props: { dataSource: data, size: 'large' } })
    expect(large.classes()).toContain('hmfw-list-large')
  })

  it('applies split class by default', () => {
    const wrapper = mount(List, { props: { dataSource: data } })
    expect(wrapper.classes()).toContain('hmfw-list-split')
  })

  it('shows loading spinner', () => {
    const wrapper = mount(List, { props: { dataSource: data, loading: true } })
    expect(wrapper.find('.hmfw-list-spin').exists()).toBe(true)
  })
})

describe('ListItem', () => {
  it('renders content', () => {
    const wrapper = mount(ListItem, { slots: { default: 'Item content' } })
    expect(wrapper.find('.hmfw-list-item-main').text()).toBe('Item content')
  })

  it('renders extra', () => {
    const wrapper = mount(ListItem, {
      props: { extra: 'Extra content' },
      slots: { default: 'Main' },
    })
    expect(wrapper.find('.hmfw-list-item-extra').text()).toBe('Extra content')
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
})
