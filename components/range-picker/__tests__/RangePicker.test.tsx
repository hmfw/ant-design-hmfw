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
    expect((inputs[0].element as HTMLInputElement).value).toBe('2024-01-01')
    expect((inputs[1].element as HTMLInputElement).value).toBe('2024-01-31')
  })

  it('shows placeholder when no value', () => {
    const wrapper = mount(RangePicker, {
      props: { placeholder: ['Start', 'End'] },
    })
    const inputs = wrapper.findAll('.hmfw-date-picker-input-inner')
    expect(inputs[0].attributes('placeholder')).toBe('Start')
    expect(inputs[1].attributes('placeholder')).toBe('End')
  })

  it('falls back to localized range placeholder', () => {
    const wrapper = mount(RangePicker)
    const inputs = wrapper.findAll('.hmfw-date-picker-input-inner')
    // zh-CN default locale
    expect(inputs[0].attributes('placeholder')).toBe('开始日期')
    expect(inputs[1].attributes('placeholder')).toBe('结束日期')
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(RangePicker, { props: { disabled: true } })
    expect(wrapper.find('.hmfw-date-picker-disabled').exists()).toBe(true)
  })

  it('disables individual inputs with array disabled', () => {
    const wrapper = mount(RangePicker, { props: { disabled: [true, false] } })
    const inputs = wrapper.findAll('.hmfw-date-picker-input-inner')
    expect((inputs[0].element as HTMLInputElement).disabled).toBe(true)
    expect((inputs[1].element as HTMLInputElement).disabled).toBe(false)
    // whole-picker disabled class should NOT be applied for partial disable
    expect(wrapper.find('.hmfw-date-picker-disabled').exists()).toBe(false)
  })

  it('opens panel on click', async () => {
    const wrapper = mount(RangePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-range-panels')).not.toBeNull()
    wrapper.unmount()
  })

  it('does not open when fully disabled', async () => {
    const wrapper = mount(RangePicker, { props: { disabled: true }, attachTo: document.body })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-range-panels')).toBeNull()
    expect(wrapper.emitted('openChange')).toBeFalsy()
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

  it('respects controlled open prop', async () => {
    const wrapper = mount(RangePicker, { props: { open: true }, attachTo: document.body })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-date-picker-range-panels')).not.toBeNull()
    wrapper.unmount()
  })

  it('controlled open does not change internally on outside click', async () => {
    const wrapper = mount(RangePicker, { props: { open: true }, attachTo: document.body })
    await wrapper.vm.$nextTick()
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    await wrapper.vm.$nextTick()
    // emits request to close but panel stays open because controlled
    expect(wrapper.emitted('openChange')?.some((e) => e[0] === false)).toBe(true)
    expect(document.querySelector('.hmfw-date-picker-range-panels')).not.toBeNull()
    wrapper.unmount()
  })

  it('shows clear button when value is set', () => {
    const wrapper = mount(RangePicker, {
      props: { value: ['2024-01-01', '2024-01-31'], allowClear: true },
    })
    expect(wrapper.find('.hmfw-date-picker-clear').exists()).toBe(true)
  })

  it('shows clear button when only one side has value', () => {
    const wrapper = mount(RangePicker, {
      props: { value: ['2024-01-01', null], allowClear: true },
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

  it('uses custom separator', () => {
    const wrapper = mount(RangePicker, { props: { separator: '~' } })
    expect(wrapper.find('.hmfw-date-picker-range-separator').text()).toBe('~')
  })

  it('selects a range with calendarChange and change events', async () => {
    const wrapper = mount(RangePicker, {
      props: { value: ['2024-06-10', '2024-06-20'] },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    const days = document.querySelectorAll('.hmfw-date-picker-panel .hmfw-date-picker-day')
    // click a start day, then an end day
    ;(days[10] as HTMLElement).click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('calendarChange')).toBeTruthy()
    // calendarChange info arg carries range key
    const firstCal = wrapper.emitted('calendarChange')![0]
    expect(firstCal[2]).toMatchObject({ range: 'start' })
    ;(days[15] as HTMLElement).click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('change')).toBeTruthy()
    const changePayload = wrapper.emitted('change')![0][0] as [string, string]
    expect(changePayload[0]).not.toBeNull()
    expect(changePayload[1]).not.toBeNull()
    wrapper.unmount()
  })

  it('orders reversed selection by default', async () => {
    const wrapper = mount(RangePicker, { attachTo: document.body })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    const days = Array.from(document.querySelectorAll('.hmfw-date-picker-panel .hmfw-date-picker-day')) as HTMLElement[]
    // pick a later day first, then an earlier day
    days[20].click()
    await wrapper.vm.$nextTick()
    days[10].click()
    await wrapper.vm.$nextTick()
    const payload = wrapper.emitted('change')![0][0] as [string, string]
    expect(new Date(payload[0]).getTime()).toBeLessThanOrEqual(new Date(payload[1]).getTime())
    wrapper.unmount()
  })

  it('does not reorder when order is false', async () => {
    const wrapper = mount(RangePicker, { props: { order: false }, attachTo: document.body })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    const days = Array.from(document.querySelectorAll('.hmfw-date-picker-panel .hmfw-date-picker-day')) as HTMLElement[]
    days[20].click()
    await wrapper.vm.$nextTick()
    days[10].click()
    await wrapper.vm.$nextTick()
    const payload = wrapper.emitted('change')![0][0] as [string, string]
    expect(new Date(payload[0]).getTime()).toBeGreaterThan(new Date(payload[1]).getTime())
    wrapper.unmount()
  })

  it('renders presets and applies them on click', async () => {
    const wrapper = mount(RangePicker, {
      props: {
        presets: [{ label: 'Fixed', value: ['2024-01-01', '2024-01-07'] as [string, string] }],
      },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    const preset = document.querySelector('.hmfw-date-picker-preset') as HTMLElement
    expect(preset).not.toBeNull()
    expect(preset.textContent).toBe('Fixed')
    preset.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('change')?.[0]?.[0]).toEqual(['2024-01-01', '2024-01-07'])
    wrapper.unmount()
  })

  it('supports preset value as a factory function', async () => {
    const wrapper = mount(RangePicker, {
      props: {
        presets: [{ label: 'Dynamic', value: () => ['2025-05-01', '2025-05-10'] as [string, string] }],
      },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-date-picker-range').trigger('click')
    await wrapper.vm.$nextTick()
    const preset = document.querySelector('.hmfw-date-picker-preset') as HTMLElement
    preset.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('change')?.[0]?.[0]).toEqual(['2025-05-01', '2025-05-10'])
    wrapper.unmount()
  })
})
