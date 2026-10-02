import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { InputPassword } from '../index'
import { SearchOutlined, LockOutlined } from '@hmfw/icons'

describe('InputPassword', () => {
  it('renders a password input with toggle icon', () => {
    const wrapper = mount(InputPassword)
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('password')
    expect(wrapper.find('.hmfw-input-password-icon').exists()).toBe(true)
    // 委托基础 Input 后仍保留 -password 样式钩子
    expect(wrapper.find('.hmfw-input-affix-wrapper').classes()).toContain('hmfw-input-password')
  })

  // 回归：此前传 prefix 会把图标组件当作 DOM 属性设到 <span> 上导致崩溃
  it('renders prefix (icon component) without crashing', () => {
    const wrapper = mount(InputPassword, { props: { prefix: SearchOutlined } })
    expect(wrapper.find('.hmfw-input-prefix .hmfw-icon').exists()).toBe(true)
  })

  it('toggles visibility on click', async () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.find('input').attributes('type')).toBe('password')
    await wrapper.find('.hmfw-input-password-icon').trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('text')
    await wrapper.find('.hmfw-input-password-icon').trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('toggles visibility on hover when action="hover"', async () => {
    const wrapper = mount(InputPassword, { props: { action: 'hover' } })
    await wrapper.find('.hmfw-input-password-icon').trigger('mouseenter')
    expect(wrapper.find('input').attributes('type')).toBe('text')
    await wrapper.find('.hmfw-input-password-icon').trigger('mouseleave')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('does not toggle when disabled', async () => {
    const wrapper = mount(InputPassword, { props: { disabled: true } })
    await wrapper.find('.hmfw-input-password-icon').trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('hides toggle when visibilityToggle is false', () => {
    const wrapper = mount(InputPassword, { props: { visibilityToggle: false } })
    expect(wrapper.find('.hmfw-input-password-icon').exists()).toBe(false)
  })

  it('supports controlled visibility via visibilityToggle object', async () => {
    const wrapper = mount(InputPassword, {
      props: { visibilityToggle: { visible: true } },
    })
    expect(wrapper.find('input').attributes('type')).toBe('text')
    await wrapper.setProps({ visibilityToggle: { visible: false } })
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('uses custom iconRender', () => {
    const wrapper = mount(InputPassword, {
      props: { iconRender: (visible: boolean) => h(visible ? SearchOutlined : LockOutlined) },
    })
    expect(wrapper.find('.hmfw-input-password-icon .anticon').exists()).toBe(true)
  })

  it('composes user suffix before the toggle icon', () => {
    const wrapper = mount(InputPassword, { props: { suffix: 'U' } })
    const suffixText = wrapper.find('.hmfw-input-suffix').text()
    expect(suffixText).toContain('U')
    expect(wrapper.find('.hmfw-input-password-icon').exists()).toBe(true)
  })

  it('emits update:value on input', async () => {
    const wrapper = mount(InputPassword)
    await wrapper.find('input').setValue('secret')
    expect(wrapper.emitted('update:value')![0]).toEqual(['secret'])
  })
})
