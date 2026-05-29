import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { TimePicker } from '../TimePicker'

describe('TimePicker', () => {
  it('renders correctly', () => {
    const wrapper = mount(TimePicker)
    expect(wrapper.find('.hmfw-time-picker').exists()).toBe(true)
  })

  it('shows placeholder', () => {
    const wrapper = mount(TimePicker, { props: { placeholder: '选择时间' } })
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('选择时间')
  })

  it('disabled state', () => {
    const wrapper = mount(TimePicker, { props: { disabled: true } })
    expect(wrapper.find('.hmfw-time-picker-disabled').exists()).toBe(true)
  })

  it('small size', () => {
    const wrapper = mount(TimePicker, { props: { size: 'small' } })
    expect(wrapper.find('.hmfw-time-picker-small').exists()).toBe(true)
  })

  it('large size', () => {
    const wrapper = mount(TimePicker, { props: { size: 'large' } })
    expect(wrapper.find('.hmfw-time-picker-large').exists()).toBe(true)
  })

  it('error status', () => {
    const wrapper = mount(TimePicker, { props: { status: 'error' } })
    expect(wrapper.find('.hmfw-time-picker-status-error').exists()).toBe(true)
  })

  it('warning status', () => {
    const wrapper = mount(TimePicker, { props: { status: 'warning' } })
    expect(wrapper.find('.hmfw-time-picker-status-warning').exists()).toBe(true)
  })

  it('displays value', () => {
    const wrapper = mount(TimePicker, { props: { value: '14:30:00' } })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('14:30:00')
  })
})
