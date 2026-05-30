import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { h, nextTick } from 'vue'
import { Segmented } from '../Segmented'
import type { SegmentedOption } from '../types'

const options = ['Daily', 'Weekly', 'Monthly']

describe('Segmented', () => {
  it('renders all options', () => {
    const wrapper = mount(Segmented, { props: { options } })
    expect(wrapper.findAll('.hmfw-segmented-item')).toHaveLength(3)
  })

  it('selects first option by default', () => {
    const wrapper = mount(Segmented, { props: { options } })
    expect(wrapper.findAll('.hmfw-segmented-item')[0].classes()).toContain('hmfw-segmented-item-selected')
  })

  it('selects specified defaultValue', () => {
    const wrapper = mount(Segmented, { props: { options, defaultValue: 'Weekly' } })
    expect(wrapper.findAll('.hmfw-segmented-item')[1].classes()).toContain('hmfw-segmented-item-selected')
  })

  it('emits change on click', async () => {
    const wrapper = mount(Segmented, { props: { options } })
    const items = wrapper.findAll('.hmfw-segmented-item')
    await items[1].find('input').trigger('change')
    expect(wrapper.emitted('change')?.[0]).toEqual(['Weekly'])
    expect(wrapper.emitted('update:value')?.[0]).toEqual(['Weekly'])
  })

  it('applies disabled class', () => {
    const wrapper = mount(Segmented, { props: { options, disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-segmented-disabled')
  })

  it('does not emit change when disabled', async () => {
    const wrapper = mount(Segmented, { props: { options, disabled: true } })
    await wrapper.findAll('.hmfw-segmented-item')[1].find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('applies block class', () => {
    const wrapper = mount(Segmented, { props: { options, block: true } })
    expect(wrapper.classes()).toContain('hmfw-segmented-block')
  })

  it('applies size class', () => {
    const large = mount(Segmented, { props: { options, size: 'large' } })
    expect(large.classes()).toContain('hmfw-segmented-large')
    const small = mount(Segmented, { props: { options, size: 'small' } })
    expect(small.classes()).toContain('hmfw-segmented-small')
  })

  it('renders object options with icon', () => {
    const objOptions: SegmentedOption[] = [
      { label: 'List', value: 'list', icon: h('span', '☰') },
      { label: 'Grid', value: 'grid', icon: h('span', '⊞') },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    expect(wrapper.findAll('.hmfw-segmented-item-icon')).toHaveLength(2)
  })

  it('does not select disabled option', async () => {
    const objOptions: SegmentedOption[] = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b', disabled: true },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    await wrapper.findAll('.hmfw-segmented-item')[1].find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('respects controlled value', async () => {
    const wrapper = mount(Segmented, { props: { options, value: 'Monthly' } })
    expect(wrapper.findAll('.hmfw-segmented-item')[2].classes()).toContain('hmfw-segmented-item-selected')
  })

  it('applies vertical class', () => {
    const wrapper = mount(Segmented, { props: { options, vertical: true } })
    expect(wrapper.classes()).toContain('hmfw-segmented-vertical')
  })

  it('applies vertical class via orientation', () => {
    const wrapper = mount(Segmented, { props: { options, orientation: 'vertical' } })
    expect(wrapper.classes()).toContain('hmfw-segmented-vertical')
  })

  it('orientation takes priority over vertical', () => {
    const wrapper = mount(Segmented, { props: { options, vertical: true, orientation: 'horizontal' } })
    expect(wrapper.classes()).not.toContain('hmfw-segmented-vertical')
  })

  it('applies round shape class', () => {
    const wrapper = mount(Segmented, { props: { options, shape: 'round' } })
    expect(wrapper.classes()).toContain('hmfw-segmented-shape-round')
  })

  it('renders hidden radio inputs with name', () => {
    const wrapper = mount(Segmented, { props: { options, name: 'test-group' } })
    const inputs = wrapper.findAll('input[type="radio"]')
    expect(inputs).toHaveLength(3)
    inputs.forEach((input) => {
      expect(input.attributes('name')).toBe('test-group')
    })
  })

  it('generates random name if not provided', () => {
    const wrapper = mount(Segmented, { props: { options } })
    const inputs = wrapper.findAll('input[type="radio"]')
    const name = inputs[0].attributes('name')
    expect(name).toBeTruthy()
    expect(name).toMatch(/^segmented-/)
  })

  it('renders thumb element', () => {
    const wrapper = mount(Segmented, { props: { options } })
    expect(wrapper.find('.hmfw-segmented-thumb').exists()).toBe(true)
  })

  it('supports VNode label', () => {
    const objOptions: SegmentedOption[] = [
      { label: h('strong', 'Bold'), value: 'bold' },
      { label: h('em', 'Italic'), value: 'italic' },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    expect(wrapper.find('strong').text()).toBe('Bold')
    expect(wrapper.find('em').text()).toBe('Italic')
  })

  it('supports icon-only options', () => {
    const objOptions: SegmentedOption[] = [
      { value: 'list', icon: h('span', '☰') },
      { value: 'grid', icon: h('span', '⊞') },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    expect(wrapper.findAll('.hmfw-segmented-item-icon')).toHaveLength(2)
    // No label spans should be rendered
    expect(wrapper.findAll('.hmfw-segmented-item-label > span:not(.hmfw-segmented-item-icon)')).toHaveLength(0)
  })

  it('applies custom className to option', () => {
    const objOptions: SegmentedOption[] = [
      { label: 'A', value: 'a', className: 'custom-class' },
      { label: 'B', value: 'b' },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    expect(wrapper.findAll('.hmfw-segmented-item')[0].classes()).toContain('custom-class')
  })

  it('applies title attribute', () => {
    const objOptions: SegmentedOption[] = [
      { label: 'A', value: 'a', title: 'Option A' },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    expect(wrapper.find('.hmfw-segmented-item').attributes('title')).toBe('Option A')
  })

  it('handles keyboard navigation with arrow keys', async () => {
    const wrapper = mount(Segmented, { props: { options } })
    const inputs = wrapper.findAll('input[type="radio"]')

    // Focus first input and press ArrowRight
    await inputs[0].trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(wrapper.emitted('change')?.[0]).toEqual(['Weekly'])
  })

  it('wraps tooltip around item when tooltip is provided', () => {
    const objOptions: SegmentedOption[] = [
      { label: 'A', value: 'a', tooltip: 'Tooltip A' },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    // Tooltip component should wrap the item
    expect(wrapper.findComponent({ name: 'Tooltip' }).exists()).toBe(true)
  })
})

