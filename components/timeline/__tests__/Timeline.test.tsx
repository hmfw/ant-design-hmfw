import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Timeline } from '../Timeline'

const items = [
  { children: 'Event 1', color: 'blue' },
  { children: 'Event 2', color: 'green' },
  { children: 'Event 3', color: 'red' },
]

describe('Timeline', () => {
  it('renders all items', () => {
    const wrapper = mount(Timeline, { props: { items } })
    expect(wrapper.findAll('.hmfw-timeline-item')).toHaveLength(3)
  })

  it('last item has last class', () => {
    const wrapper = mount(Timeline, { props: { items } })
    const all = wrapper.findAll('.hmfw-timeline-item')
    expect(all[2].classes()).toContain('hmfw-timeline-item-last')
  })

  it('renders item content', () => {
    const wrapper = mount(Timeline, { props: { items } })
    const contents = wrapper.findAll('.hmfw-timeline-item-content')
    expect(contents[0].text()).toBe('Event 1')
  })

  it('renders color classes', () => {
    const wrapper = mount(Timeline, { props: { items } })
    const heads = wrapper.findAll('.hmfw-timeline-item-head')
    expect(heads[0].classes()).toContain('hmfw-timeline-item-head-blue')
    expect(heads[1].classes()).toContain('hmfw-timeline-item-head-green')
    expect(heads[2].classes()).toContain('hmfw-timeline-item-head-red')
  })

  it('renders pending item', () => {
    const wrapper = mount(Timeline, { props: { items, pending: true } })
    expect(wrapper.findAll('.hmfw-timeline-item')).toHaveLength(4)
    expect(wrapper.find('.hmfw-timeline-item-pending').exists()).toBe(true)
  })

  it('applies pending class to container', () => {
    const wrapper = mount(Timeline, { props: { items, pending: true } })
    expect(wrapper.classes()).toContain('hmfw-timeline-pending')
  })

  it('renders label', () => {
    const labelItems = [{ label: '2024-01-01', children: 'Event' }]
    const wrapper = mount(Timeline, { props: { items: labelItems } })
    expect(wrapper.find('.hmfw-timeline-item-label').text()).toBe('2024-01-01')
  })

  it('applies reverse class', () => {
    const wrapper = mount(Timeline, { props: { items, reverse: true } })
    expect(wrapper.classes()).toContain('hmfw-timeline-reverse')
  })

  it('applies alternate mode class', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'alternate' } })
    expect(wrapper.classes()).toContain('hmfw-timeline-alternate')
  })
})
