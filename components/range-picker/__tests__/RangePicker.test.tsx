import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RangePicker } from '../RangePicker'

describe('RangePicker', () => {
  it('renders two inputs', () => {
    const wrapper = mount(RangePicker)
    expect(wrapper.findAll('.hmfw-date-picker-input-inner').length).toBe(2)
  })

  it('displays start and end values', () => {
    const wrapper = mount(RangePicker, {
      props: { value: ['2024-01-01', '2024-01-31'] },
    })
    const inputs = wrapper.findAll('.hmfw-date-picker-input-inner')
    expect(inputs[0].element.value).toBe('2024-01-01')
    expect(inputs[1].element.value).toBe('2024-01-31')
  })

  it('shows placeholder when no value', () => {
    const wrapper = mount(RangePicker, {
      props: { placeholder: ['Start', 'End'] },
    })
    const inputs = wrapper.findAll('.hmfw-date-picker-input-inner')
    expect(inputs[0].attributes('placeholder')).toBe('Start')
    expect(inputs[1].attributes('placeholder')).toBe('End')
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(RangePicker, { props: { disabled: true } })
    expect(wrapper.find('.hmfw-date-picker-disabled').exists()).toBe(true)
  })

  it('opens panel on click', async () => {
    const wrapper = mount(RangePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-range-panels')).not.toBeNull()
    wrapper.unmount()
  })

  it('shows two calendar panels when open', async () => {
    const wrapper = mount(RangePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelectorAll('.hmfw-date-picker-panel').length).toBe(2)
    wrapper.unmount()
  })

  it('emits openChange when opened', async () => {
    const wrapper = mount(RangePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
    wrapper.unmount()
  })

  it('shows clear button when value is set', () => {
    const wrapper = mount(RangePicker, {
      props: { value: ['2024-01-01', '2024-01-31'], allowClear: true },
    })
    expect(wrapper.find('.hmfw-date-picker-clear').exists()).toBe(true)
  })

  it('clears value on clear button click', async () => {
    const wrapper = mount(RangePicker, {
      props: { value: ['2024-01-01', '2024-01-31'], allowClear: true },
    })
    await wrapper.find('.hmfw-date-picker-clear').trigger('click')
    expect(wrapper.emitted('change')?.[0]?.[0]).toEqual([null, null])
  })

  it('applies status-error class', () => {
    const wrapper = mount(RangePicker, { props: { status: 'error' } })
    expect(wrapper.find('.hmfw-date-picker-status-error').exists()).toBe(true)
  })
})
