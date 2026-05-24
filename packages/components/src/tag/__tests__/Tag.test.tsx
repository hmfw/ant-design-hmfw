import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Tag, CheckableTag } from '../Tag'

describe('Tag', () => {
  it('renders correctly', () => {
    const wrapper = mount(Tag, { slots: { default: 'Tag' } })
    expect(wrapper.classes()).toContain('hmfw-tag')
    expect(wrapper.text()).toContain('Tag')
  })

  it('applies preset color class', () => {
    const wrapper = mount(Tag, { props: { color: 'blue' } })
    expect(wrapper.classes()).toContain('hmfw-tag-blue')
  })

  it('applies custom color as inline style', () => {
    const wrapper = mount(Tag, { props: { color: '#ff0000' } })
    expect(wrapper.attributes('style')).toContain('background-color: rgb(255, 0, 0)')
    expect(wrapper.classes()).toContain('hmfw-tag-has-color')
  })

  it('renders close button when closable', () => {
    const wrapper = mount(Tag, { props: { closable: true } })
    expect(wrapper.find('.hmfw-tag-close-icon').exists()).toBe(true)
  })

  it('emits close event', async () => {
    const wrapper = mount(Tag, { props: { closable: true } })
    await wrapper.find('.hmfw-tag-close-icon').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('applies borderless class', () => {
    const wrapper = mount(Tag, { props: { bordered: false } })
    expect(wrapper.classes()).toContain('hmfw-tag-borderless')
  })

  it('has border by default', () => {
    const wrapper = mount(Tag)
    expect(wrapper.classes()).not.toContain('hmfw-tag-borderless')
  })
})

describe('CheckableTag', () => {
  it('renders correctly', () => {
    const wrapper = mount(CheckableTag)
    expect(wrapper.classes()).toContain('hmfw-tag-checkable')
  })

  it('applies checked class', () => {
    const wrapper = mount(CheckableTag, { props: { checked: true } })
    expect(wrapper.classes()).toContain('hmfw-tag-checkable-checked')
  })

  it('emits change on click', async () => {
    const wrapper = mount(CheckableTag, { props: { checked: false } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')![0]).toEqual([true])
  })

  it('emits update:checked on click', async () => {
    const wrapper = mount(CheckableTag, { props: { checked: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('update:checked')![0]).toEqual([false])
  })
})
