import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { Switch } from '../Switch'

describe('Switch', () => {
  it('renders correctly', () => {
    const wrapper = mount(Switch)
    expect(wrapper.find('button[role="switch"]').exists()).toBe(true)
  })

  it('is off by default', () => {
    const wrapper = mount(Switch)
    expect(wrapper.attributes('aria-checked')).toBe('false')
  })

  it('respects defaultChecked', () => {
    const wrapper = mount(Switch, { props: { defaultChecked: true } })
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })

  it('respects controlled checked prop', () => {
    const wrapper = mount(Switch, { props: { checked: true } })
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })

  it('toggles on click', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('click')
    expect(wrapper.emitted('change')![0][0]).toBe(true)
    expect(wrapper.emitted('change')![0][1]).toBeInstanceOf(MouseEvent)
  })

  it('emits click event with event object', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')![0][0]).toBe(true)
    expect(wrapper.emitted('click')![0][1]).toBeInstanceOf(MouseEvent)
  })

  it('does not toggle when disabled', async () => {
    const wrapper = mount(Switch, { props: { disabled: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('does not toggle when loading', async () => {
    const wrapper = mount(Switch, { props: { loading: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('applies small size class', () => {
    const wrapper = mount(Switch, { props: { size: 'small' } })
    expect(wrapper.classes()).toContain('hmfw-switch-small')
  })

  it('shows checkedChildren when on', () => {
    const wrapper = mount(Switch, { props: { checked: true, checkedChildren: 'ON' } })
    expect(wrapper.text()).toContain('ON')
  })

  it('shows unCheckedChildren when off', () => {
    const wrapper = mount(Switch, { props: { checked: false, unCheckedChildren: 'OFF' } })
    expect(wrapper.text()).toContain('OFF')
  })

  it('supports VNode children via slots', () => {
    const wrapper = mount(Switch, {
      props: { checked: true },
      slots: {
        checkedChildren: () => '<span>✓</span>',
      },
    })
    expect(wrapper.find('.hmfw-switch-inner').text()).toContain('✓')
  })

  it('supports autoFocus prop', async () => {
    const wrapper = mount(Switch, {
      props: { autoFocus: true },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.activeElement).toBe(wrapper.element)
    wrapper.unmount()
  })

  it('supports id prop', () => {
    const wrapper = mount(Switch, { props: { id: 'test-switch' } })
    expect(wrapper.attributes('id')).toBe('test-switch')
  })

  it('supports title prop', () => {
    const wrapper = mount(Switch, { props: { title: 'Toggle switch' } })
    expect(wrapper.attributes('title')).toBe('Toggle switch')
  })

  it('supports tabIndex prop', () => {
    const wrapper = mount(Switch, { props: { tabIndex: 5 } })
    expect(wrapper.attributes('tabindex')).toBe('5')
  })

  it('emits focus event', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    expect(wrapper.emitted('focus')![0][0]).toBeInstanceOf(FocusEvent)
  })

  it('emits blur event', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
    expect(wrapper.emitted('blur')![0][0]).toBeInstanceOf(FocusEvent)
  })

  it('shows loading icon when loading', () => {
    const wrapper = mount(Switch, { props: { loading: true } })
    expect(wrapper.find('.hmfw-switch-loading-icon').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-switch-loading')
  })

  it('maintains checked state in controlled mode', async () => {
    const wrapper = mount(Switch, { props: { checked: true } })
    expect(wrapper.attributes('aria-checked')).toBe('true')
    await wrapper.trigger('click')
    // Still checked because it's controlled
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })

  it('updates checked state in uncontrolled mode', async () => {
    const wrapper = mount(Switch, { props: { defaultChecked: false } })
    expect(wrapper.attributes('aria-checked')).toBe('false')
    await wrapper.trigger('click')
    // Changed because it's uncontrolled
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })
})
