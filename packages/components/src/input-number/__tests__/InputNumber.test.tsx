import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
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
})
