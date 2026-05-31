import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { InputNumber } from '../InputNumber'
import { nextTick } from 'vue'

describe('InputNumber', () => {
  it('renders with default value', () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 5 } })
    expect(wrapper.find('.hmfw-input-number').exists()).toBe(true)
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('5')
  })

  it('renders controlled value', () => {
    const wrapper = mount(InputNumber, { props: { value: 10 } })
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('10')
  })

  it('shows step controls by default', () => {
    const wrapper = mount(InputNumber)
    expect(wrapper.find('.hmfw-input-number-handler-wrap').exists()).toBe(true)
  })

  it('hides controls when controls=false', () => {
    const wrapper = mount(InputNumber, { props: { controls: false } })
    expect(wrapper.find('.hmfw-input-number-handler-wrap').exists()).toBe(false)
  })

  it('applies size class', () => {
    const small = mount(InputNumber, { props: { size: 'small' } })
    expect(small.classes()).toContain('hmfw-input-number-small')
    const large = mount(InputNumber, { props: { size: 'large' } })
    expect(large.classes()).toContain('hmfw-input-number-large')
  })

  it('applies disabled state', () => {
    const wrapper = mount(InputNumber, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-input-number-disabled')
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('applies status class', () => {
    const error = mount(InputNumber, { props: { status: 'error' } })
    expect(error.classes()).toContain('hmfw-input-number-status-error')
  })

  it('emits change on step up', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 5 } })
    await wrapper.find('.hmfw-input-number-handler-up').trigger('mousedown')
    expect(wrapper.emitted('change')?.[0]).toEqual([6])
  })

  it('emits change on step down', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 5 } })
    await wrapper.find('.hmfw-input-number-handler-down').trigger('mousedown')
    expect(wrapper.emitted('change')?.[0]).toEqual([4])
  })

  it('respects min/max', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 10, max: 10 } })
    await wrapper.find('.hmfw-input-number-handler-up').trigger('mousedown')
    expect(wrapper.emitted('change')?.[0]).toEqual([10])
  })

  it('applies precision', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 1.5, precision: 2 } })
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('1.50')
  })

  it('renders prefix', () => {
    const wrapper = mount(InputNumber, { props: { prefix: '$' } })
    expect(wrapper.find('.hmfw-input-number-prefix').text()).toBe('$')
  })

  it('renders suffix', () => {
    const wrapper = mount(InputNumber, { props: { suffix: 'RMB' } })
    expect(wrapper.find('.hmfw-input-number-suffix').text()).toBe('RMB')
  })

  it('renders addon before and after', () => {
    const wrapper = mount(InputNumber, { props: { addonBefore: 'http://', addonAfter: '.com' } })
    const addons = wrapper.findAll('.hmfw-input-number-group-addon')
    expect(addons[0].text()).toBe('http://')
    expect(addons[1].text()).toBe('.com')
  })

  it('emits focus and blur', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 5 } })
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('applies variant class', () => {
    const filled = mount(InputNumber, { props: { variant: 'filled' } })
    expect(filled.classes()).toContain('hmfw-input-number-filled')
    const borderless = mount(InputNumber, { props: { variant: 'borderless' } })
    expect(borderless.classes()).toContain('hmfw-input-number-borderless')
  })

  it('formatter receives correct info object', async () => {
    const formatter = vi.fn((value, info) => {
      expect(info).toHaveProperty('userTyping')
      expect(info).toHaveProperty('input')
      return `$${value}`
    })
    const wrapper = mount(InputNumber, { props: { defaultValue: 100, formatter } })
    await nextTick()
    expect(formatter).toHaveBeenCalled()
  })

  it('supports decimalSeparator', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 1.5, decimalSeparator: ',' } })
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('1,5')
  })

  it('supports mode=spinner with custom icons', () => {
    const wrapper = mount(InputNumber, { props: { mode: 'spinner' } })
    expect(wrapper.find('.hmfw-input-number-handler-up-inner').text()).toBe('+')
    expect(wrapper.find('.hmfw-input-number-handler-down-inner').text()).toBe('−')
  })

  it('supports controls as object with custom icons', () => {
    const wrapper = mount(InputNumber, { props: { controls: { upIcon: '↑', downIcon: '↓' } } })
    expect(wrapper.find('.hmfw-input-number-handler-up-inner').text()).toBe('↑')
    expect(wrapper.find('.hmfw-input-number-handler-down-inner').text()).toBe('↓')
  })

  it('emits step with emitter info', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 5 } })
    await wrapper.find('.hmfw-input-number-handler-up').trigger('mousedown')
    const stepEvent = wrapper.emitted('step')?.[0] as any[]
    expect(stepEvent[1]).toHaveProperty('emitter', 'handler')
  })

  it('supports changeOnBlur=false', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 5, changeOnBlur: false } })
    const input = wrapper.find('input')
    await input.trigger('focus')
    await input.setValue('10')
    await input.trigger('blur')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('exposes focus method', () => {
    const wrapper = mount(InputNumber)
    expect(wrapper.vm).toHaveProperty('focus')
    expect(wrapper.vm).toHaveProperty('blur')
  })

  it('supports keyboard arrow keys', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 5 } })
    const input = wrapper.find('input')
    await input.trigger('keydown', { key: 'ArrowUp' })
    expect(wrapper.emitted('change')?.[0]).toEqual([6])
  })

  it('disables keyboard when keyboard=false', async () => {
    const wrapper = mount(InputNumber, { props: { defaultValue: 5, keyboard: false } })
    const input = wrapper.find('input')
    await input.trigger('keydown', { key: 'ArrowUp' })
    expect(wrapper.emitted('change')).toBeFalsy()
  })
})
