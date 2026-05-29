import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Radio, RadioGroup } from '../Radio'

describe('Radio', () => {
  it('renders correctly', () => {
    const wrapper = mount(Radio)
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true)
  })

  it('renders label slot', () => {
    const wrapper = mount(Radio, { slots: { default: 'Option A' } })
    expect(wrapper.text()).toContain('Option A')
  })

  it('is unchecked by default', () => {
    const wrapper = mount(Radio)
    expect(wrapper.find('input').element.checked).toBe(false)
  })

  it('respects defaultChecked', () => {
    const wrapper = mount(Radio, { props: { defaultChecked: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('respects controlled checked prop', () => {
    const wrapper = mount(Radio, { props: { checked: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('emits change on click', async () => {
    const wrapper = mount(Radio)
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Radio, { props: { disabled: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeFalsy()
  })
})

describe('RadioGroup', () => {
  it('renders options', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B', 'C'] },
    })
    expect(wrapper.findAll('input[type="radio"]').length).toBe(3)
  })

  it('reflects value prop', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B', 'C'], value: 'B' },
    })
    const inputs = wrapper.findAll('input[type="radio"]')
    expect(inputs[0].element.checked).toBe(false)
    expect(inputs[1].element.checked).toBe(true)
    expect(inputs[2].element.checked).toBe(false)
  })

  it('emits change when option selected', async () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], value: 'A' },
    })
    await wrapper.findAll('input')[1].trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')![0]).toEqual(['B'])
  })
})
