import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { QRCode } from '../QRCode'

describe('QRCode', () => {
  it('renders correctly', () => {
    const wrapper = mount(QRCode, { props: { value: 'https://example.com' } })
    expect(wrapper.classes()).toContain('hmfw-qrcode')
  })

  it('applies bordered class by default', () => {
    const wrapper = mount(QRCode, { props: { value: 'test' } })
    expect(wrapper.classes()).toContain('hmfw-qrcode-bordered')
  })

  it('no border when bordered=false', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', bordered: false } })
    expect(wrapper.classes()).not.toContain('hmfw-qrcode-bordered')
  })

  it('renders canvas when active', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'active' } })
    expect(wrapper.find('canvas').exists()).toBe(true)
  })

  it('shows mask when expired', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'expired' } })
    expect(wrapper.find('.hmfw-qrcode-mask').exists()).toBe(true)
  })

  it('shows mask when scanned', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'scanned' } })
    expect(wrapper.find('.hmfw-qrcode-mask').exists()).toBe(true)
  })

  it('emits refresh on click', async () => {
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'expired' } })
    const btn = wrapper.find('.hmfw-qrcode-mask-refresh')
    await btn.trigger('click')
    expect(wrapper.emitted('refresh')).toBeTruthy()
  })

  it('applies custom size', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', size: 200 } })
    expect(wrapper.attributes('style')).toContain('200px')
  })
})
