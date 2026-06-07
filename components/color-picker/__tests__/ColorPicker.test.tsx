import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ColorPicker } from '../ColorPicker'
import { hexToHsb, hsbToHex, hexToRgb, rgbToHex, isValidHex } from '../color-utils'

describe('color-utils', () => {
  it('hexToRgb converts correctly', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 })
    expect(hexToRgb('#1677ff')).toEqual({ r: 22, g: 119, b: 255 })
  })

  it('rgbToHex converts correctly', () => {
    expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe('#ff0000')
    expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000')
    expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#ffffff')
  })

  it('hexToHsb and hsbToHex are inverse', () => {
    const hex = '#1677ff'
    const hsb = hexToHsb(hex)
    const back = hsbToHex(hsb)
    // Allow ±1 rounding difference
    const r1 = hexToRgb(hex),
      r2 = hexToRgb(back)
    expect(Math.abs(r1.r - r2.r)).toBeLessThanOrEqual(2)
    expect(Math.abs(r1.g - r2.g)).toBeLessThanOrEqual(2)
    expect(Math.abs(r1.b - r2.b)).toBeLessThanOrEqual(2)
  })

  it('isValidHex validates correctly', () => {
    expect(isValidHex('#fff')).toBe(true)
    expect(isValidHex('#1677ff')).toBe(true)
    expect(isValidHex('1677ff')).toBe(false)
    expect(isValidHex('#gggggg')).toBe(false)
    expect(isValidHex('')).toBe(false)
  })
})

describe('ColorPicker', () => {
  it('renders trigger with color block', () => {
    const wrapper = mount(ColorPicker, { props: { value: '#ff0000' } })
    expect(wrapper.find('.hmfw-color-picker-trigger').exists()).toBe(true)
    expect(wrapper.find('.hmfw-color-picker-color-block').exists()).toBe(true)
  })

  it('shows text when showText=true', () => {
    const wrapper = mount(ColorPicker, { props: { value: '#ff0000', showText: true } })
    expect(wrapper.find('.hmfw-color-picker-text').text()).toBe('#ff0000')
  })

  it('opens panel on trigger click', async () => {
    const wrapper = mount(ColorPicker, {
      props: { value: '#ff0000' },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-color-picker-trigger').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-color-picker-panel')).not.toBeNull()
    wrapper.unmount()
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(ColorPicker, { props: { disabled: true } })
    expect(wrapper.find('.hmfw-color-picker-disabled').exists()).toBe(true)
  })

  it('does not open when disabled', async () => {
    const wrapper = mount(ColorPicker, {
      props: { disabled: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-color-picker-trigger').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-color-picker-panel')).toBeNull()
    wrapper.unmount()
  })

  it('applies size class', () => {
    const wrapper = mount(ColorPicker, { props: { size: 'large' } })
    expect(wrapper.find('.hmfw-color-picker-large').exists()).toBe(true)
  })

  it('emits change when hex input changes', async () => {
    const wrapper = mount(ColorPicker, {
      props: { value: '#ff0000' },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-color-picker-trigger').trigger('click')
    await wrapper.vm.$nextTick()
    const input = document.querySelector<HTMLInputElement>('.hmfw-color-picker-hex-input')
    if (input) {
      input.value = '#00ff00'
      input.dispatchEvent(new Event('input'))
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('change')?.[0]).toEqual(['#00ff00'])
    }
    wrapper.unmount()
  })

  it('renders presets', async () => {
    const presets = [{ label: 'Recommended', colors: ['#ff0000', '#00ff00', '#0000ff'] }]
    const wrapper = mount(ColorPicker, {
      props: { value: '#ff0000', presets },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-color-picker-trigger').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelectorAll('.hmfw-color-picker-preset-color').length).toBe(3)
    wrapper.unmount()
  })
})
