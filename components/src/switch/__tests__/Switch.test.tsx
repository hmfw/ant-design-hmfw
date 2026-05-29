import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
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
    expect(wrapper.emitted('change')![0]).toEqual([true])
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
})
