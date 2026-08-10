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

  // 回归：popupClass 曾同时挂到 Trigger 外层 wrapper 与内层 div，
  // 导致 .hmfw-color-picker-panel 及 classNames.panel 各出现两次
  it('panel 类与 classNames.panel 只应用一次', async () => {
    const wrapper = mount(ColorPicker, {
      props: { value: '#ff0000', classNames: { panel: 'my-panel' } },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-color-picker-trigger').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelectorAll('.hmfw-color-picker-panel').length).toBe(1)
    expect(document.querySelectorAll('.my-panel').length).toBe(1)
    wrapper.unmount()
  })

  // 面板目前只实现 HEX 输入，标签固定为 HEX 以反映输入框真实格式，
  // 不跟随 format prop（否则 format="rgb" 会出现 RGB 标签配 hex 输入框的误导）
  it('format 标签固定显示 HEX', async () => {
    const wrapper = mount(ColorPicker, {
      props: { value: '#ff0000', format: 'rgb' },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-color-picker-trigger').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-color-picker-format-label')?.textContent).toBe('HEX')
    wrapper.unmount()
  })

  it('allowClear 清除后 emit clear 且 value 为 undefined', async () => {
    const wrapper = mount(ColorPicker, {
      props: { value: '#ff0000', allowClear: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-color-picker-trigger').trigger('click')
    await wrapper.vm.$nextTick()
    const clearBtn = document.querySelector<HTMLElement>('.hmfw-color-picker-clear-btn')
    expect(clearBtn).not.toBeNull()
    // 无障碍属性
    expect(clearBtn?.getAttribute('role')).toBe('button')
    expect(clearBtn?.getAttribute('tabindex')).toBe('0')
    clearBtn?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('clear')).toBeTruthy()
    expect(wrapper.emitted('update:value')?.at(-1)).toEqual([undefined])
    wrapper.unmount()
  })

  it('disabled 时触发器带 aria-disabled', () => {
    const wrapper = mount(ColorPicker, { props: { disabled: true } })
    expect(wrapper.find('.hmfw-color-picker-trigger').attributes('aria-disabled')).toBe('true')
  })

  it('未禁用时不输出 aria-disabled', () => {
    const wrapper = mount(ColorPicker, { props: { disabled: false } })
    expect(wrapper.find('.hmfw-color-picker-trigger').attributes('aria-disabled')).toBeUndefined()
  })
})
