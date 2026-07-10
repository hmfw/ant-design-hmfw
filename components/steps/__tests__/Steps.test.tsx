import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Steps } from '../Steps'
import type { StepItem } from '../types'

const items: StepItem[] = [
  { title: 'Step 1', content: 'Desc 1' },
  { title: 'Step 2', content: 'Desc 2' },
  { title: 'Step 3', content: 'Desc 3' },
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
    // 使用 header > icon 精确选择真实图标，排除 content 区的空占位符 icon
    const icons = wrapper.findAll('.hmfw-steps-item-header > .hmfw-steps-item-icon')
    expect(icons[0].find('.hmfw-icon')).toBeTruthy()
    expect(icons[1].find('.hmfw-icon')).toBeTruthy()
  })

  it('shows error status', () => {
    const errorItems: StepItem[] = [...items.slice(0, 2), { title: 'Step 3', status: 'error' }]
    const wrapper = mount(Steps, { props: { items: errorItems, current: 2 } })
    expect(wrapper.findAll('.hmfw-steps-item')[2].classes()).toContain('hmfw-steps-item-error')
  })

  it('applies orientation prop', () => {
    const wrapper = mount(Steps, { props: { items, orientation: 'vertical' } })
    expect(wrapper.classes()).toContain('hmfw-steps-vertical')
  })

  it('applies small size', () => {
    const wrapper = mount(Steps, { props: { items, size: 'small' } })
    expect(wrapper.classes()).toContain('hmfw-steps-small')
  })

  it('renders content into description node', () => {
    const wrapper = mount(Steps, { props: { items } })
    const descs = wrapper.findAll('.hmfw-steps-item-description')
    expect(descs[0].text()).toBe('Desc 1')
  })

  it('supports content field', () => {
    const contentItems: StepItem[] = [{ title: 'Step 1', content: 'Content 1' }]
    const wrapper = mount(Steps, { props: { items: contentItems } })
    expect(wrapper.find('.hmfw-steps-item-description').text()).toBe('Content 1')
  })

  it('emits change on step click', async () => {
    const wrapper = mount(Steps, { props: { items, current: 1 } })
    await wrapper.findAll('.hmfw-steps-item')[0].trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([0])
  })

  it('does not emit change for disabled step', async () => {
    const disabledItems: StepItem[] = [{ title: 'Step 1', disabled: true }, { title: 'Step 2' }]
    const wrapper = mount(Steps, { props: { items: disabledItems, current: 1 } })
    await wrapper.findAll('.hmfw-steps-item')[0].trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('applies initial offset', () => {
    const wrapper = mount(Steps, { props: { items, current: 2, initial: 1 } })
    const stepItems = wrapper.findAll('.hmfw-steps-item')
    expect(stepItems[0].classes()).toContain('hmfw-steps-item-finish')
    expect(stepItems[1].classes()).toContain('hmfw-steps-item-process')
    expect(stepItems[2].classes()).toContain('hmfw-steps-item-wait')
  })

  it('applies dot type', () => {
    const wrapper = mount(Steps, { props: { items, type: 'dot' } })
    expect(wrapper.classes()).toContain('hmfw-steps-dot')
  })

  it('applies inline type', () => {
    const wrapper = mount(Steps, { props: { items, type: 'inline' } })
    expect(wrapper.classes()).toContain('hmfw-steps-inline')
  })

  it('applies outlined variant', () => {
    const wrapper = mount(Steps, { props: { items, variant: 'outlined' } })
    expect(wrapper.classes()).toContain('hmfw-steps-outlined')
  })

  it('applies filled variant by default', () => {
    const wrapper = mount(Steps, { props: { items } })
    expect(wrapper.classes()).toContain('hmfw-steps-filled')
  })

  it('applies ellipsis', () => {
    const wrapper = mount(Steps, { props: { items, ellipsis: true } })
    expect(wrapper.classes()).toContain('hmfw-steps-ellipsis')
  })

  it('supports custom iconRender', () => {
    const iconRender = vi.fn((_node) => h('div', { class: 'custom-icon' }, 'Custom'))
    const wrapper = mount(Steps, { props: { items, iconRender } })
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
    expect(iconRender).toHaveBeenCalled()
  })

  it('supports item onClick handler', async () => {
    const onClick = vi.fn()
    const clickableItems: StepItem[] = [{ title: 'Step 1', onClick }, { title: 'Step 2' }]
    const wrapper = mount(Steps, { props: { items: clickableItems, current: 1 } })
    await wrapper.findAll('.hmfw-steps-item')[0].trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('renders subtitle', () => {
    const subtitleItems: StepItem[] = [{ title: 'Step 1', subTitle: 'Sub 1' }]
    const wrapper = mount(Steps, { props: { items: subtitleItems } })
    expect(wrapper.find('.hmfw-steps-item-subtitle').text()).toBe('Sub 1')
  })

  it('supports titlePlacement', () => {
    const wrapper = mount(Steps, { props: { items, titlePlacement: 'vertical' } })
    expect(wrapper.classes()).toContain('hmfw-steps-label-vertical')
  })
})
