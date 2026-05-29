import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Steps } from '../Steps'

const items = [
  { title: 'Step 1', description: 'Desc 1' },
  { title: 'Step 2', description: 'Desc 2' },
  { title: 'Step 3', description: 'Desc 3' },
]

describe('Steps', () => {
  it('renders all steps', () => {
    const wrapper = mount(Steps, { props: { items } })
    expect(wrapper.findAll('.hmfw-steps-item')).toHaveLength(3)
  })

  it('marks current step as process', () => {
    const wrapper = mount(Steps, { props: { items, current: 1 } })
    const stepItems = wrapper.findAll('.hmfw-steps-item')
    expect(stepItems[0].classes()).toContain('hmfw-steps-item-finish')
    expect(stepItems[1].classes()).toContain('hmfw-steps-item-process')
    expect(stepItems[2].classes()).toContain('hmfw-steps-item-wait')
  })

  it('shows finish icon for completed steps', () => {
    const wrapper = mount(Steps, { props: { items, current: 2 } })
    const icons = wrapper.findAll('.hmfw-steps-icon')
    expect(icons[0].text()).toBe('✓')
    expect(icons[1].text()).toBe('✓')
    expect(icons[2].text()).toBe('3')
  })

  it('shows error status', () => {
    const errorItems = [
      ...items.slice(0, 2),
      { title: 'Step 3', status: 'error' as const },
    ]
    const wrapper = mount(Steps, { props: { items: errorItems, current: 2 } })
    expect(wrapper.findAll('.hmfw-steps-item')[2].classes()).toContain('hmfw-steps-item-error')
  })

  it('applies vertical direction', () => {
    const wrapper = mount(Steps, { props: { items, direction: 'vertical' } })
    expect(wrapper.classes()).toContain('hmfw-steps-vertical')
  })

  it('applies small size', () => {
    const wrapper = mount(Steps, { props: { items, size: 'small' } })
    expect(wrapper.classes()).toContain('hmfw-steps-small')
  })

  it('renders descriptions', () => {
    const wrapper = mount(Steps, { props: { items } })
    const descs = wrapper.findAll('.hmfw-steps-item-description')
    expect(descs[0].text()).toBe('Desc 1')
  })

  it('emits change on step click', async () => {
    const wrapper = mount(Steps, { props: { items, current: 1 } })
    await wrapper.findAll('.hmfw-steps-item')[0].trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([0])
  })

  it('does not emit change for disabled step', async () => {
    const disabledItems = [
      { title: 'Step 1', disabled: true },
      { title: 'Step 2' },
    ]
    const wrapper = mount(Steps, { props: { items: disabledItems, current: 1 } })
    await wrapper.findAll('.hmfw-steps-item')[0].trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })
})
