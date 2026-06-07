import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
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

  it('auto-hides the tag after close', async () => {
    const wrapper = mount(Tag, { props: { closable: true }, slots: { default: 'Tag' } })
    await wrapper.find('.hmfw-tag-close-icon').trigger('click')
    expect(wrapper.find('.hmfw-tag').exists()).toBe(false)
  })

  it('does not hide when close is prevented', async () => {
    const wrapper = mount(Tag, {
      props: {
        closable: true,
        onClose: (e: MouseEvent) => e.preventDefault(),
      },
      slots: { default: 'Tag' },
    })
    await wrapper.find('.hmfw-tag-close-icon').trigger('click')
    expect(wrapper.find('.hmfw-tag').exists()).toBe(true)
  })

  it('renders as anchor when href is set', () => {
    const wrapper = mount(Tag, { props: { href: 'https://example.com' }, slots: { default: 'Link' } })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('disabled tag drops href and is not closable', async () => {
    const wrapper = mount(Tag, {
      props: { href: 'https://example.com', disabled: true, closable: true },
      slots: { default: 'Tag' },
    })
    expect(wrapper.classes()).toContain('hmfw-tag-disabled')
    expect(wrapper.attributes('href')).toBeUndefined()
    await wrapper.find('.hmfw-tag-close-icon').trigger('click')
    expect(wrapper.emitted('close')).toBeFalsy()
    expect(wrapper.find('.hmfw-tag').exists()).toBe(true)
  })

  it('applies borderless class', () => {
    const wrapper = mount(Tag, { props: { bordered: false } })
    expect(wrapper.classes()).toContain('hmfw-tag-borderless')
  })

  it('has border by default', () => {
    const wrapper = mount(Tag)
    expect(wrapper.classes()).not.toContain('hmfw-tag-borderless')
  })

  // closeIcon 相关测试
  it('hides close button when closeIcon is false', () => {
    const wrapper = mount(Tag, { props: { closable: true, closeIcon: false } })
    expect(wrapper.find('.hmfw-tag-close-icon').exists()).toBe(false)
  })

  it('renders custom closeIcon as render function', () => {
    const wrapper = mount(Tag, {
      props: {
        closable: true,
        closeIcon: () => h('span', { class: 'custom-close' }, 'X'),
      },
    })
    expect(wrapper.find('.hmfw-tag-close-icon').exists()).toBe(true)
    expect(wrapper.find('.custom-close').exists()).toBe(true)
    expect(wrapper.find('.custom-close').text()).toBe('X')
  })

  it('renders closeIcon slot', () => {
    const wrapper = mount(Tag, {
      props: { closable: true },
      slots: { closeIcon: () => h('span', { class: 'slot-close' }, 'Y') },
    })
    expect(wrapper.find('.hmfw-tag-close-icon').exists()).toBe(true)
    expect(wrapper.find('.slot-close').exists()).toBe(true)
    expect(wrapper.find('.slot-close').text()).toBe('Y')
  })

  it('closeIcon slot takes priority over prop', () => {
    const wrapper = mount(Tag, {
      props: {
        closable: true,
        closeIcon: () => h('span', { class: 'prop-icon' }, 'P'),
      },
      slots: { closeIcon: () => h('span', { class: 'slot-icon' }, 'S') },
    })
    expect(wrapper.find('.slot-icon').exists()).toBe(true)
    expect(wrapper.find('.prop-icon').exists()).toBe(false)
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
