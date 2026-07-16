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
    const icons = wrapper.findAll('.hmfw-timeline-item-icon')
    expect(icons[0].classes()).toContain('hmfw-timeline-item-color-blue')
    expect(icons[1].classes()).toContain('hmfw-timeline-item-color-green')
    expect(icons[2].classes()).toContain('hmfw-timeline-item-color-red')
  })

  it('renders title', () => {
    const titleItems = [{ title: '2024-01-01', content: 'Event' }]
    const wrapper = mount(Timeline, { props: { items: titleItems } })
    expect(wrapper.find('.hmfw-timeline-item-title').text()).toBe('2024-01-01')
  })

  it('applies reverse class and reverses items', () => {
    const wrapper = mount(Timeline, { props: { items, reverse: true } })
    expect(wrapper.classes()).toContain('hmfw-timeline-reverse')
    const contents = wrapper.findAll('.hmfw-timeline-item-content')
    expect(contents[0].text()).toBe('Event 3')
  })

  it('applies alternate layout class', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'alternate' } })
    expect(wrapper.classes()).toContain('hmfw-timeline-layout-alternate')
  })

  it('applies placement-end to all items in end mode', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'end' } })
    const itemsEl = wrapper.findAll('.hmfw-timeline-item')
    itemsEl.forEach((el) => {
      expect(el.classes()).toContain('hmfw-timeline-item-placement-end')
    })
  })

  it('normalizes left mode to start (placement-start)', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'left' } })
    const itemsEl = wrapper.findAll('.hmfw-timeline-item')
    expect(itemsEl[0].classes()).toContain('hmfw-timeline-item-placement-start')
    expect(itemsEl[0].classes()).not.toContain('hmfw-timeline-item-placement-end')
  })

  it('normalizes right mode to end (placement-end)', () => {
    const wrapper = mount(Timeline, { props: { items, mode: 'right' } })
    const itemsEl = wrapper.findAll('.hmfw-timeline-item')
    expect(itemsEl[0].classes()).toContain('hmfw-timeline-item-placement-end')
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
    const icon = wrapper.find('.hmfw-timeline-item-icon')
    const style = icon.attributes('style') || ''
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
    expect(itemsEl[0].classes()).toContain('hmfw-timeline-item-placement-start')
    expect(itemsEl[1].classes()).toContain('hmfw-timeline-item-placement-end')
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
