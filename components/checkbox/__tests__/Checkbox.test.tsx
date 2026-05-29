import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Checkbox, CheckboxGroup } from '../Checkbox'

describe('Checkbox', () => {
  it('renders correctly', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('renders label slot', () => {
    const wrapper = mount(Checkbox, { slots: { default: 'Option A' } })
    expect(wrapper.text()).toContain('Option A')
  })

  it('is unchecked by default', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('input').element.checked).toBe(false)
  })

  it('respects defaultChecked', () => {
    const wrapper = mount(Checkbox, { props: { defaultChecked: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('respects controlled checked prop', () => {
    const wrapper = mount(Checkbox, { props: { checked: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('emits change on click', async () => {
    const wrapper = mount(Checkbox)
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('emits update:checked', async () => {
    const wrapper = mount(Checkbox, { props: { checked: false } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:checked')![0]).toEqual([true])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Checkbox, { props: { disabled: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('applies indeterminate class', () => {
    const wrapper = mount(Checkbox, { props: { indeterminate: true } })
    expect(wrapper.find('.hmfw-checkbox').classes()).toContain('hmfw-checkbox-indeterminate')
  })
})

describe('CheckboxGroup', () => {
  it('renders options', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B', 'C'] },
    })
    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(3)
  })

  it('renders object options', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: [{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }] },
    })
    expect(wrapper.text()).toContain('Apple')
    expect(wrapper.text()).toContain('Banana')
  })

  it('reflects value prop', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B', 'C'], value: ['A', 'C'] },
    })
    const inputs = wrapper.findAll('input[type="checkbox"]')
    expect(inputs[0].element.checked).toBe(true)
    expect(inputs[1].element.checked).toBe(false)
    expect(inputs[2].element.checked).toBe(true)
  })

  it('emits change when option toggled', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B'], value: [] },
    })
    await wrapper.findAll('input')[0].trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
