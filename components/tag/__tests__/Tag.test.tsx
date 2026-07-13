import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Tag, CheckableTag } from '../Tag'
import { CheckableTagGroup } from '../CheckableTagGroup'

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

  it('applies status color class', () => {
    const wrapper = mount(Tag, { props: { color: 'success' } })
    expect(wrapper.classes()).toContain('hmfw-tag-success')
    // 状态色属内部色，不加 has-color
    expect(wrapper.classes()).not.toContain('hmfw-tag-has-color')
  })

  // 自定义颜色默认 filled：浅底 + 彩字（对齐 AntD v6）
  it('applies custom color as filled style by default', () => {
    const wrapper = mount(Tag, { props: { color: '#ff0000' } })
    const style = wrapper.attributes('style')
    expect(style).toContain('color: rgb(255, 0, 0)')
    expect(style).toContain('background-color: rgb(255, 230, 230)')
    expect(wrapper.classes()).toContain('hmfw-tag-has-color')
  })

  // 3 位缩写 hex 也应正确提亮为浅底（#f50 → #ff5500 → 浅底），而非与字色相同
  it('expands 3-digit hex color for filled background', () => {
    const wrapper = mount(Tag, { props: { color: '#f50' } })
    const style = wrapper.attributes('style')
    expect(style).toContain('color: rgb(255, 85, 0)')
    // 浅底不应等于字色
    expect(style).not.toContain('background-color: rgb(255, 85, 0)')
    expect(style).toContain('background-color: rgb(255, 238, 230)')
  })

  it('applies custom color as solid style when variant=solid', () => {
    const wrapper = mount(Tag, { props: { color: '#ff0000', variant: 'solid' } })
    const style = wrapper.attributes('style')
    expect(style).toContain('background-color: rgb(255, 0, 0)')
    expect(style).toContain('color: rgb(255, 255, 255)')
  })

  it('adds border color for custom color when variant=outlined', () => {
    const wrapper = mount(Tag, { props: { color: '#ff0000', variant: 'outlined' } })
    expect(wrapper.attributes('style')).toContain('border-color: rgb(255, 0, 0)')
  })

  it('derives variant from bordered=false → filled', () => {
    const wrapper = mount(Tag, { props: { bordered: false } })
    expect(wrapper.classes()).toContain('hmfw-tag-filled')
    expect(wrapper.classes()).toContain('hmfw-tag-borderless')
  })

  it('defaults to outlined variant', () => {
    const wrapper = mount(Tag)
    expect(wrapper.classes()).toContain('hmfw-tag-outlined')
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

  it('closes via keyboard (Enter)', async () => {
    const wrapper = mount(Tag, { props: { closable: true }, slots: { default: 'Tag' } })
    await wrapper.find('.hmfw-tag-close-icon').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('close icon has accessible label and is focusable', () => {
    const wrapper = mount(Tag, { props: { closable: true } })
    const close = wrapper.find('.hmfw-tag-close-icon')
    expect(close.attributes('role')).toBe('button')
    expect(close.attributes('aria-label')).toBe('关闭')
    expect(close.attributes('tabindex')).toBe('0')
  })

  it('renders as anchor when href is set', () => {
    const wrapper = mount(Tag, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link' },
    })
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
    expect(wrapper.find('.hmfw-tag-close-icon').attributes('tabindex')).toBe('-1')
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

  // icon + content 节点
  it('wraps children in content node when icon is present', () => {
    const wrapper = mount(Tag, {
      slots: {
        default: 'Text',
        icon: () => h('span', { class: 'my-icon' }, 'I'),
      },
    })
    expect(wrapper.find('.my-icon').exists()).toBe(true)
    const content = wrapper.find('.hmfw-tag-content')
    expect(content.exists()).toBe(true)
    expect(content.text()).toBe('Text')
  })

  it('does not wrap in content node without icon', () => {
    const wrapper = mount(Tag, { slots: { default: 'Text' } })
    expect(wrapper.find('.hmfw-tag-content').exists()).toBe(false)
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

  it('renders custom closeIcon as raw VNode', () => {
    const wrapper = mount(Tag, {
      props: {
        closable: true,
        closeIcon: h('span', { class: 'vnode-close' }, 'V'),
      },
    })
    expect(wrapper.find('.vnode-close').exists()).toBe(true)
    expect(wrapper.find('.vnode-close').text()).toBe('V')
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

  it('has checkbox role and aria state', () => {
    const wrapper = mount(CheckableTag, { props: { checked: true } })
    expect(wrapper.attributes('role')).toBe('checkbox')
    expect(wrapper.attributes('aria-checked')).toBe('true')
    expect(wrapper.attributes('tabindex')).toBe('0')
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

  it('toggles via Space key', async () => {
    const wrapper = mount(CheckableTag, { props: { checked: false } })
    await wrapper.trigger('keydown', { key: ' ' })
    expect(wrapper.emitted('change')![0]).toEqual([true])
  })

  it('does nothing when disabled', async () => {
    const wrapper = mount(CheckableTag, { props: { checked: false, disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-tag-checkable-disabled')
    expect(wrapper.attributes('aria-disabled')).toBe('true')
    expect(wrapper.attributes('tabindex')).toBe('-1')
    await wrapper.trigger('click')
    await wrapper.trigger('keydown', { key: ' ' })
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('renders icon slot', () => {
    const wrapper = mount(CheckableTag, {
      slots: { icon: () => h('span', { class: 'ct-icon' }), default: 'Label' },
    })
    expect(wrapper.find('.ct-icon').exists()).toBe(true)
    expect(wrapper.text()).toContain('Label')
  })
})

describe('CheckableTagGroup', () => {
  const options = ['A', 'B', 'C']

  it('renders all options', () => {
    const wrapper = mount(CheckableTagGroup, { props: { options } })
    expect(wrapper.findAll('.hmfw-tag-checkable')).toHaveLength(3)
    expect(wrapper.find('.hmfw-tag-checkable-group').exists()).toBe(true)
  })

  it('single select via defaultValue', async () => {
    const wrapper = mount(CheckableTagGroup, { props: { options, defaultValue: 'A' } })
    const tags = wrapper.findAll('.hmfw-tag-checkable')
    expect(tags[0].classes()).toContain('hmfw-tag-checkable-checked')
    await tags[1].trigger('click')
    const changes = wrapper.emitted('change')!
    expect(changes[changes.length - 1]).toEqual(['B'])
  })

  it('deselects in single mode when clicking the checked item', async () => {
    const wrapper = mount(CheckableTagGroup, { props: { options, defaultValue: 'A' } })
    await wrapper.findAll('.hmfw-tag-checkable')[0].trigger('click')
    const changes = wrapper.emitted('change')!
    expect(changes[changes.length - 1]).toEqual([null])
  })

  it('multiple select accumulates values', async () => {
    const wrapper = mount(CheckableTagGroup, {
      props: { options, multiple: true, defaultValue: ['A'] },
    })
    await wrapper.findAll('.hmfw-tag-checkable')[1].trigger('click')
    const changes = wrapper.emitted('change')!
    expect(changes[changes.length - 1]).toEqual([['A', 'B']])
  })

  it('respects controlled value', async () => {
    const wrapper = mount(CheckableTagGroup, { props: { options, value: 'A' } })
    await wrapper.findAll('.hmfw-tag-checkable')[1].trigger('click')
    // 受控：内部状态不变，仍只有 A 选中
    expect(wrapper.findAll('.hmfw-tag-checkable')[0].classes()).toContain('hmfw-tag-checkable-checked')
    expect(wrapper.findAll('.hmfw-tag-checkable')[1].classes()).not.toContain('hmfw-tag-checkable-checked')
    expect(wrapper.emitted('update:value')![0]).toEqual(['B'])
  })

  it('disables all items when group disabled', () => {
    const wrapper = mount(CheckableTagGroup, { props: { options, disabled: true } })
    wrapper.findAll('.hmfw-tag-checkable').forEach((tag) => {
      expect(tag.classes()).toContain('hmfw-tag-checkable-disabled')
    })
  })

  it('supports object options with per-item disabled', () => {
    const wrapper = mount(CheckableTagGroup, {
      props: {
        options: [
          { value: 1, label: 'One', disabled: true },
          { value: 2, label: 'Two' },
        ],
      },
    })
    const tags = wrapper.findAll('.hmfw-tag-checkable')
    expect(tags[0].classes()).toContain('hmfw-tag-checkable-disabled')
    expect(tags[1].classes()).not.toContain('hmfw-tag-checkable-disabled')
  })
})
