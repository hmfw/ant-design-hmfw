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

  it('warning status', () => {
    const wrapper = mount(DatePicker, { props: { status: 'warning' } })
    expect(wrapper.find('.hmfw-date-picker-status-warning').exists()).toBe(true)
  })

  it('opens panel on click', async () => {
    const wrapper = mount(DatePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-panel')).not.toBeNull()
    wrapper.unmount()
  })

  it('panel shows 7 weekday headers', async () => {
    const wrapper = mount(DatePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelectorAll('.hmfw-date-picker-weekday').length).toBe(7)
    wrapper.unmount()
  })

  it('panel shows 42 day cells', async () => {
    const wrapper = mount(DatePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelectorAll('.hmfw-date-picker-day').length).toBe(42)
    wrapper.unmount()
  })

  it('emits change and update:value when date selected', async () => {
    const wrapper = mount(DatePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    const day = document.querySelector<HTMLButtonElement>('.hmfw-date-picker-day:not(.hmfw-date-picker-day-other-month)')
    day?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('update:value')).toBeTruthy()
    wrapper.unmount()
  })

  it('clears value on clear button click', async () => {
    const wrapper = mount(DatePicker, { props: { value: '2026-05-24', allowClear: true } })
    await wrapper.find('.hmfw-date-picker-clear').trigger('click')
    expect(wrapper.emitted('update:value')?.[0]).toEqual([undefined])
  })

  it('does not open when disabled', async () => {
    const wrapper = mount(DatePicker, { props: { disabled: true }, attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-panel')).toBeNull()
    wrapper.unmount()
  })

  it('month picker shows month panel', async () => {
    const wrapper = mount(DatePicker, { props: { picker: 'month' }, attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-months')).not.toBeNull()
    wrapper.unmount()
  })

  it('year picker shows year panel', async () => {
    const wrapper = mount(DatePicker, { props: { picker: 'year' }, attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-years')).not.toBeNull()
    wrapper.unmount()
  })

  it('quarter picker shows quarter panel', async () => {
    const wrapper = mount(DatePicker, { props: { picker: 'quarter' }, attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-quarters')).not.toBeNull()
    wrapper.unmount()
  })

  it('formats value with custom format', () => {
    const wrapper = mount(DatePicker, { props: { value: '2026-05-24', format: 'YYYY/MM/DD' } })
    expect(wrapper.find('input').element.value).toBe('2026/05/24')
  })

  it('emits openChange when panel opens', async () => {
    const wrapper = mount(DatePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
    wrapper.unmount()
  })

  it('controlled open prop shows panel', async () => {
    const wrapper = mount(DatePicker, { props: { open: true }, attachTo: document.body })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-panel')).not.toBeNull()
    wrapper.unmount()
  })
})
