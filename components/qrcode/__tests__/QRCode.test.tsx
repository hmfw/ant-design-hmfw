import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { h } from 'vue'
import { QRCode } from '../QRCode'

describe('QRCode', () => {
  it('renders correctly', () => {
    const wrapper = mount(QRCode, { props: { value: 'https://example.com' } })
    expect(wrapper.classes()).toContain('hmfw-qrcode')
  })

  it('returns null when value is empty', () => {
    const wrapper = mount(QRCode, { props: { value: '' } })
    expect(wrapper.html()).toBe('')
  })

  it('applies bordered class by default', () => {
    const wrapper = mount(QRCode, { props: { value: 'test' } })
    expect(wrapper.classes()).toContain('hmfw-qrcode')
    expect(wrapper.classes()).not.toContain('hmfw-qrcode-borderless')
  })

  it('applies borderless class when bordered=false', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', bordered: false } })
    expect(wrapper.classes()).toContain('hmfw-qrcode-borderless')
  })

  it('renders canvas by default', () => {
    const wrapper = mount(QRCode, { props: { value: 'test' } })
    expect(wrapper.find('canvas').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(false)
  })

  it('renders svg when type=svg', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', type: 'svg' } })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('canvas').exists()).toBe(false)
  })

  it('shows cover when status is not active', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'expired' } })
    expect(wrapper.find('.hmfw-qrcode-cover').exists()).toBe(true)
  })

  it('does not show cover when status is active', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'active' } })
    expect(wrapper.find('.hmfw-qrcode-cover').exists()).toBe(false)
  })

  it('shows expired status with refresh button', () => {
    const onRefresh = vi.fn()
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'expired', onRefresh } })
    expect(wrapper.find('.hmfw-qrcode-expired').exists()).toBe(true)
    expect(wrapper.find('.hmfw-qrcode-refresh').exists()).toBe(true)
  })

  it('calls onRefresh when refresh button clicked', async () => {
    const onRefresh = vi.fn()
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'expired', onRefresh } })
    const btn = wrapper.find('.hmfw-qrcode-refresh')
    await btn.trigger('click')
    expect(onRefresh).toHaveBeenCalled()
  })

  it('shows loading status with Spin', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'loading' } })
    expect(wrapper.find('.hmfw-spin').exists()).toBe(true)
  })

  it('shows scanned status', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'scanned' } })
    expect(wrapper.find('.hmfw-qrcode-scanned').exists()).toBe(true)
  })

  it('applies custom size', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', size: 200 } })
    expect(wrapper.attributes('style')).toContain('200px')
  })

  it('supports custom statusRender', () => {
    const statusRender = () => h('div', { class: 'custom-status' }, 'Custom')
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'expired', statusRender } })
    expect(wrapper.find('.custom-status').exists()).toBe(true)
    expect(wrapper.find('.custom-status').text()).toBe('Custom')
  })

  it('supports iconSize as number', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', icon: 'test.png', iconSize: 50 } })
    expect(wrapper.exists()).toBe(true)
  })

  it('supports iconSize as object', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', icon: 'test.png', iconSize: { width: 60, height: 40 } } })
    expect(wrapper.exists()).toBe(true)
  })

  it('passes aria attributes to canvas', () => {
    const wrapper = mount(QRCode, { props: { value: 'test' }, attrs: { 'aria-label': 'Test QR' } })
    const canvas = wrapper.find('canvas')
    expect(canvas.attributes('aria-label')).toBe('Test QR')
  })

  it('passes aria attributes to svg', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', type: 'svg' }, attrs: { 'aria-label': 'Test QR' } })
    const svg = wrapper.find('svg')
    expect(svg.attributes('aria-label')).toBe('Test QR')
  })

  it('passes data attributes to canvas', () => {
    const wrapper = mount(QRCode, { props: { value: 'test' }, attrs: { 'data-testid': 'qr' } })
    const canvas = wrapper.find('canvas')
    expect(canvas.attributes('data-testid')).toBe('qr')
  })

  it('supports marginSize for svg', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', type: 'svg', marginSize: 5 } })
    const svg = wrapper.find('svg')
    const viewBox = svg.attributes('viewBox')
    expect(viewBox).toBeTruthy()
    // With margin, viewBox should be larger
    const parts = viewBox!.split(' ')
    expect(Number(parts[2])).toBeGreaterThan(21) // base size is 21 for version 1
  })

  it('warns when icon is used with errorLevel L', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    mount(QRCode, { props: { value: 'test', icon: 'test.png', errorLevel: 'L' } })
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('ErrorLevel `L` is not recommended to be used with `icon`')
    )
    warnSpy.mockRestore()
  })

  it('warns when value is empty', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    mount(QRCode, { props: { value: '' } })
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('need to receive `value` props')
    )
    warnSpy.mockRestore()
  })

  it('applies custom bgColor', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', bgColor: '#f0f0f0' } })
    const style = wrapper.attributes('style')
    expect(style).toContain('background-color')
  })

  it('applies custom color', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', color: '#ff0000' } })
    expect(wrapper.exists()).toBe(true)
  })
})


