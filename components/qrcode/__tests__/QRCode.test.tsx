import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { QRCode } from '../QRCode'

describe('QRCode', () => {
  // ===== 空值处理（不触发 canvas） =====

  it('空 value 时返回 null', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const wrapper = mount(QRCode, { props: { value: '' } })
    expect(wrapper.html()).toBe('')
    expect(warnSpy).toHaveBeenCalledWith('[hmfw: QRCode] need to receive `value` props')
    warnSpy.mockRestore()
  })

  it('空 value 时发出 console.warn 警告', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    mount(QRCode, { props: { value: '' } })
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('need to receive `value` props'))
    warnSpy.mockRestore()
  })

  // ===== SVG 模式（不触发 canvas） =====

  it('type=svg 时渲染 svg 元素', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', type: 'svg' } })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('canvas').exists()).toBe(false)
  })

  it('SVG 模式正确传递 aria 属性', () => {
    const wrapper = mount(QRCode, {
      props: { value: 'test', type: 'svg' },
      attrs: { 'aria-label': 'Test QR' },
    })
    const svg = wrapper.find('svg')
    expect(svg.attributes('aria-label')).toBe('Test QR')
  })

  it('SVG 模式支持 marginSize', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', type: 'svg', marginSize: 5 } })
    const svg = wrapper.find('svg')
    const viewBox = svg.attributes('viewBox')
    expect(viewBox).toBeTruthy()
    const parts = viewBox!.split(' ')
    expect(Number(parts[2])).toBeGreaterThan(21)
  })

  // ===== 开发时警告（使用 SVG 模式避免 canvas） =====

  it('icon 配合 errorLevel=L 时发出警告', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    mount(QRCode, { props: { value: 'test', icon: 'test.png', errorLevel: 'L', type: 'svg' } })
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('ErrorLevel `L` is not recommended to be used with `icon`'),
    )
    warnSpy.mockRestore()
  })
})
