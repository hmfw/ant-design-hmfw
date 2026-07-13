import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h, nextTick } from 'vue'
import { Segmented } from '../Segmented'
import { ConfigProvider } from '../../config-provider'
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
    const wrapper = mount(Segmented, {
      props: { options, vertical: true, orientation: 'horizontal' },
    })
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

  it('positions thumb via transform after mount', async () => {
    const wrapper = mount(Segmented, { props: { options } })
    await nextTick()
    const thumb = wrapper.find('.hmfw-segmented-thumb').element as HTMLElement
    // 新的定位逻辑使用 transform 而非 left/top（jsdom 下 rect 为 0，结果为 translateX(0px)）
    expect(thumb.style.transform).toContain('translateX')
    expect(thumb.style.left).toBe('')
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

  it('applies custom style to option', () => {
    const objOptions: SegmentedOption[] = [
      { label: 'A', value: 'a', style: { color: 'rgb(255, 0, 0)', fontWeight: 'bold' } },
      { label: 'B', value: 'b' },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    const style = wrapper.findAll('.hmfw-segmented-item')[0].attributes('style')
    expect(style).toContain('color: rgb(255, 0, 0)')
    expect(style).toContain('font-weight: bold')
  })

  it('marks icon-only option with icon-only class', () => {
    const objOptions: SegmentedOption[] = [
      { value: 'list', icon: h('span', '☰') },
      { value: 'grid', label: 'Grid', icon: h('span', '⊞') },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    const labels = wrapper.findAll('.hmfw-segmented-item-label')
    // 第一个选项仅有图标，应带 icon-only 类
    expect(labels[0].classes()).toContain('hmfw-segmented-item-icon-only')
    // 第二个选项有图标+文本，不应带 icon-only 类
    expect(labels[1].classes()).not.toContain('hmfw-segmented-item-icon-only')
  })

  it('renders text span with dedicated class when label present', () => {
    const objOptions: SegmentedOption[] = [{ value: 'a', label: 'Alpha', icon: h('span', '★') }]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    expect(wrapper.find('.hmfw-segmented-item-text').text()).toBe('Alpha')
  })

  it('applies title attribute', () => {
    const objOptions: SegmentedOption[] = [{ label: 'A', value: 'a', title: 'Option A' }]
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
    const objOptions: SegmentedOption[] = [{ label: 'A', value: 'a', tooltip: 'Tooltip A' }]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    // Tooltip component should wrap the item
    expect(wrapper.findComponent({ name: 'Tooltip' }).exists()).toBe(true)
  })

  it('selects first available option when options load asynchronously', async () => {
    // 初始为空，随后异步填充：currentValue 应兜底为首项
    const wrapper = mount(Segmented, { props: { options: [] as string[] } })
    expect(wrapper.findAll('.hmfw-segmented-item')).toHaveLength(0)

    await wrapper.setProps({ options })
    await nextTick()
    const items = wrapper.findAll('.hmfw-segmented-item')
    expect(items).toHaveLength(3)
    expect(items[0].classes()).toContain('hmfw-segmented-item-selected')
  })

  it('collapses thumb width when current value has no matching option', async () => {
    // 选项被整体替换后，旧受控值成为孤儿值：滑块应归零而非停留在过时尺寸
    const wrapper = mount(Segmented, { props: { options, value: 'Weekly' } })
    await nextTick()
    const thumb = wrapper.find('.hmfw-segmented-thumb').element as HTMLElement

    await wrapper.setProps({ options: ['X', 'Y'], value: 'Weekly' })
    await nextTick()
    // 无匹配项时水平滑块宽度被置 0
    expect(thumb.style.width).toBe('0px')
  })

  it('does not move selection in controlled mode until parent updates value', async () => {
    // 受控：父级未更新 value 时，点击其它项不应改变选中态
    const wrapper = mount(Segmented, { props: { options, value: 'Daily' } })
    await wrapper.findAll('.hmfw-segmented-item')[2].find('input').trigger('change')
    // 事件应照常派发
    expect(wrapper.emitted('change')?.[0]).toEqual(['Monthly'])
    // 但视觉选中仍停留在受控值 Daily
    const items = wrapper.findAll('.hmfw-segmented-item')
    expect(items[0].classes()).toContain('hmfw-segmented-item-selected')
    expect(items[2].classes()).not.toContain('hmfw-segmented-item-selected')

    // 父级更新 value 后，选中态跟随
    await wrapper.setProps({ value: 'Monthly' })
    const updated = wrapper.findAll('.hmfw-segmented-item')
    expect(updated[2].classes()).toContain('hmfw-segmented-item-selected')
  })

  it('skips consecutive disabled options during keyboard navigation', async () => {
    const objOptions: SegmentedOption[] = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b', disabled: true },
      { label: 'C', value: 'c', disabled: true },
      { label: 'D', value: 'd' },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    const inputs = wrapper.findAll('input[type="radio"]')
    // 从 A 按 ArrowRight，应跳过 B、C 落到 D
    await inputs[0].trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(wrapper.emitted('change')?.[0]).toEqual(['d'])
  })

  it('treats empty string label as icon-only', () => {
    const objOptions: SegmentedOption[] = [{ value: 'a', label: '', icon: h('span', '★') }]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    const label = wrapper.find('.hmfw-segmented-item-label')
    expect(label.classes()).toContain('hmfw-segmented-item-icon-only')
    // 不应渲染文本 span
    expect(wrapper.find('.hmfw-segmented-item-text').exists()).toBe(false)
  })

  it('adds aria-label to icon-only radio input', () => {
    const objOptions: SegmentedOption[] = [
      { value: 'home', icon: h('span', '⌂'), title: 'Home' },
      { value: 'user', icon: h('span', '☺') },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    const inputs = wrapper.findAll('input[type="radio"]')
    // 有 title 时优先用 title
    expect(inputs[0].attributes('aria-label')).toBe('Home')
    // 无 title 时回退到 value
    expect(inputs[1].attributes('aria-label')).toBe('user')
  })

  it('does not add aria-label when label present', () => {
    const objOptions: SegmentedOption[] = [{ value: 'a', label: 'Alpha', icon: h('span', '★') }]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    expect(wrapper.find('input[type="radio"]').attributes('aria-label')).toBeUndefined()
  })

  it('applies radiogroup role to root', () => {
    const wrapper = mount(Segmented, { props: { options } })
    expect(wrapper.attributes('role')).toBe('radiogroup')
  })

  it('inherits size from ConfigProvider', () => {
    const wrapper = mount(ConfigProvider, {
      props: { componentSize: 'large' },
      slots: { default: () => h(Segmented, { options }) },
    })
    expect(wrapper.find('.hmfw-segmented').classes()).toContain('hmfw-segmented-large')
  })

  it('explicit size prop overrides ConfigProvider componentSize', () => {
    const wrapper = mount(ConfigProvider, {
      props: { componentSize: 'large' },
      slots: { default: () => h(Segmented, { options, size: 'small' }) },
    })
    expect(wrapper.find('.hmfw-segmented').classes()).toContain('hmfw-segmented-small')
  })
})
