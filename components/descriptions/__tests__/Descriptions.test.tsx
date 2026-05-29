import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Descriptions } from '../Descriptions'

const items = [
  { label: 'Name', children: 'Alice' },
  { label: 'Age', children: '30' },
  { label: 'City', children: 'Beijing' },
  { label: 'Email', children: 'alice@example.com', span: 2 },
]

describe('Descriptions', () => {
  it('renders items', () => {
    const wrapper = mount(Descriptions, { props: { items } })
    expect(wrapper.findAll('.hmfw-descriptions-item-label')).toHaveLength(4)
    expect(wrapper.findAll('.hmfw-descriptions-item-content')).toHaveLength(4)
  })

  it('renders title', () => {
    const wrapper = mount(Descriptions, { props: { items, title: 'User Info' } })
    expect(wrapper.find('.hmfw-descriptions-title').text()).toBe('User Info')
  })

  it('renders extra', () => {
    const wrapper = mount(Descriptions, { props: { items, extra: 'Edit' } })
    expect(wrapper.find('.hmfw-descriptions-extra').text()).toBe('Edit')
  })

  it('applies bordered class', () => {
    const wrapper = mount(Descriptions, { props: { items, bordered: true } })
    expect(wrapper.classes()).toContain('hmfw-descriptions-bordered')
  })

  it('applies size class', () => {
    const small = mount(Descriptions, { props: { items, size: 'small' } })
    expect(small.classes()).toContain('hmfw-descriptions-small')
    const middle = mount(Descriptions, { props: { items, size: 'middle' } })
    expect(middle.classes()).toContain('hmfw-descriptions-middle')
  })

  it('renders label text', () => {
    const wrapper = mount(Descriptions, { props: { items } })
    const labels = wrapper.findAll('.hmfw-descriptions-item-label')
    expect(labels[0].text()).toBe('Name')
    expect(labels[1].text()).toBe('Age')
  })

  it('renders content text', () => {
    const wrapper = mount(Descriptions, { props: { items } })
    const contents = wrapper.findAll('.hmfw-descriptions-item-content')
    expect(contents[0].text()).toBe('Alice')
    expect(contents[1].text()).toBe('30')
  })

  it('renders vertical layout', () => {
    const wrapper = mount(Descriptions, { props: { items, layout: 'vertical' } })
    expect(wrapper.classes()).toContain('hmfw-descriptions-vertical')
  })
})
