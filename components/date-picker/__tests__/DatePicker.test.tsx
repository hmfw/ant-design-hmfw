import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { DatePicker } from '../DatePicker'

describe('DatePicker', () => {
  it('renders correctly', () => {
    const wrapper = mount(DatePicker)
    expect(wrapper.find('.hmfw-date-picker').exists()).toBe(true)
  })

  it('shows placeholder', () => {
    const wrapper = mount(DatePicker, { props: { placeholder: '选择日期' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('选择日期')
  })

  it('disabled state', () => {
    const wrapper = mount(DatePicker, { props: { disabled: true } })
    expect(wrapper.find('.hmfw-date-picker-disabled').exists()).toBe(true)
  })

  it('small size', () => {
    const wrapper = mount(DatePicker, { props: { size: 'small' } })
    expect(wrapper.find('.hmfw-date-picker-small').exists()).toBe(true)
  })

  it('large size', () => {
    const wrapper = mount(DatePicker, { props: { size: 'large' } })
    expect(wrapper.find('.hmfw-date-picker-large').exists()).toBe(true)
  })

  it('error status', () => {
    const wrapper = mount(DatePicker, { props: { status: 'error' } })
    expect(wrapper.find('.hmfw-date-picker-status-error').exists()).toBe(true)
  })

  it('displays value', () => {
    const wrapper = mount(DatePicker, { props: { value: '2026-05-24' } })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('2026-05-24')
  })

  it('year picker default placeholder', () => {
    const wrapper = mount(DatePicker, { props: { picker: 'year' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('请选择年份')
  })

  it('month picker default placeholder', () => {
    const wrapper = mount(DatePicker, { props: { picker: 'month' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('请选择月份')
  })

  it('shows clear button when value set', () => {
    const wrapper = mount(DatePicker, { props: { value: '2026-05-24', allowClear: true } })
    expect(wrapper.find('.hmfw-date-picker-clear').exists()).toBe(true)
  })

  it('no clear button when allowClear=false', () => {
    const wrapper = mount(DatePicker, { props: { value: '2026-05-24', allowClear: false } })
    expect(wrapper.find('.hmfw-date-picker-clear').exists()).toBe(false)
  })
})
