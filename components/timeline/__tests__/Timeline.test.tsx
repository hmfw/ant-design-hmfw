import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Timeline, TimelineItem } from '../Timeline'

const items = [
  { content: 'Event 1', color: 'blue' },
  { content: 'Event 2', color: 'green' },
  { content: 'Event 3', color: 'red' },
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

  it('renders title', () => {
    const titleItems = [{ title: '2024-01-01', content: 'Event' }]
    const wrapper = mount(Timeline, { props: { items: titleItems } })
    expect(wrapper.find('.hmfw-timeline-item-label').text()).toBe('2024-01-01')
  })

  it('applies reverse class and reverses items', () => {
    const wrapper = mount(Timeline, { props: { items, reverse: true } })
    expect(wrapper.classes()).toContain('hmfw-timeline-reverse')
    const contents = wrapper.findAll('.hmfw-timeline-item-content')
    expect(contents[0].text()).toBe('Event 3')
  })

  it('applies alternate mode class', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'alternate' } })
    expect(wrapper.classes()).toContain('hmfw-timeline-alternate')
  })

  it('applies end mode class', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'end' } })
    expect(wrapper.classes()).toContain('hmfw-timeline-end')
  })

  it('normalizes left mode to start', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'left' } })
    // left → start, and start is the default, so no class added
    expect(wrapper.classes()).not.toContain('hmfw-timeline-left')
    expect(wrapper.classes()).not.toContain('hmfw-timeline-start')
  })

  it('normalizes right mode to end', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'right' } })
    expect(wrapper.classes()).toContain('hmfw-timeline-end')
  })

  it('applies horizontal orientation class', () => {
    const wrapper = mount(Timeline, { props: { items, orientation: 'horizontal' } })
    expect(wrapper.classes()).toContain('hmfw-timeline-horizontal')
  })

  it('applies filled variant class', () => {
    const wrapper = mount(Timeline, { props: { items, variant: 'filled' } })
    expect(wrapper.classes()).toContain('hmfw-timeline-filled')
  })

  it('renders custom color with inline style', () => {
    const customItems = [{ content: 'Event', color: '#ff00ff' }]
    const wrapper = mount(Timeline, { props: { items: customItems } })
    const head = wrapper.find('.hmfw-timeline-item-head')
    const style = head.attributes('style') || ''
    // Browser converts hex to rgb, so check for rgb(255, 0, 255)
    expect(style).toMatch(/rgb\(255,\s*0,\s*255\)|#ff00ff/)
  })

  it('renders loading state with icon', () => {
    const loadingItems = [{ content: 'Loading', loading: true }]
    const wrapper = mount(Timeline, { props: { items: loadingItems } })
    expect(wrapper.find('.hmfw-timeline-item-loading').exists()).toBe(true)
    expect(wrapper.find('.hmfw-icon').exists()).toBe(true)
  })

  it('supports placement prop', () => {
    const placementItems = [
      { content: 'Start', placement: 'start' as const },
      { content: 'End', placement: 'end' as const },
    ]
    const wrapper = mount(Timeline, { props: { items: placementItems } })
    const itemsEl = wrapper.findAll('.hmfw-timeline-item')
    expect(itemsEl[0].classes()).not.toContain('hmfw-timeline-item-end')
    expect(itemsEl[1].classes()).toContain('hmfw-timeline-item-end')
  })

  it('renders Timeline.Item children', () => {
    const wrapper = mount(Timeline, {
      slots: {
        default: () => [
          h(TimelineItem, { content: 'Item 1', color: 'blue' }),
          h(TimelineItem, { content: 'Item 2', color: 'green' }),
        ],
      },
    })
    expect(wrapper.findAll('.hmfw-timeline-item')).toHaveLength(2)
    const contents = wrapper.findAll('.hmfw-timeline-item-content')
    expect(contents[0].text()).toBe('Item 1')
    expect(contents[1].text()).toBe('Item 2')
  })

  it('supports titleSpan prop', () => {
    const wrapper = mount(Timeline, { props: { items, titleSpan: 120 } })
    expect(wrapper.attributes('style')).toContain('120px')
  })

  it('supports titleSpan as string', () => {
    const wrapper = mount(Timeline, { props: { items, titleSpan: '10%' } })
    expect(wrapper.attributes('style')).toContain('10%')
  })
})
