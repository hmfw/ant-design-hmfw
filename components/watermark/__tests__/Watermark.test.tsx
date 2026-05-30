import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { Watermark } from '../Watermark'

// Mock canvas for jsdom
beforeEach(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
    save: vi.fn(),
    translate: vi.fn(),
    rotate: vi.fn(),
    scale: vi.fn(),
    drawImage: vi.fn(),
    fillText: vi.fn(),
    measureText: vi.fn((text: string) => ({
      width: text.length * 10,
      fontBoundingBoxAscent: 10,
      fontBoundingBoxDescent: 2,
    })),
    font: '',
    fillStyle: '',
    textAlign: 'center',
    textBaseline: 'top',
  })) as any

  HTMLCanvasElement.prototype.toDataURL = vi.fn(() => 'data:image/png;base64,mock')
})

describe('Watermark', () => {
  it('renders container div', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test' } })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(Watermark, {
      props: { content: 'Test' },
      slots: { default: '<p>Content</p>' },
    })
    expect(wrapper.find('p').text()).toBe('Content')
  })

  it('applies custom zIndex', async () => {
    const wrapper = mount(Watermark, { props: { content: 'Test', zIndex: 100 } })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    const watermarkDiv = wrapper.element.querySelector('div[style*="z-index"]')
    expect(watermarkDiv?.getAttribute('style')).toContain('z-index: 100')
  })

  it('renders with array content', () => {
    const wrapper = mount(Watermark, { props: { content: ['Line 1', 'Line 2'] } })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
  })

  it('uses default zIndex 999', async () => {
    const wrapper = mount(Watermark, { props: { content: 'Test' } })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    const watermarkDiv = wrapper.element.querySelector('div[style*="z-index"]')
    expect(watermarkDiv?.getAttribute('style')).toContain('z-index: 999')
  })

  it('applies custom gap', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test', gap: [50, 50] } })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
  })

  it('applies custom rotate', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test', rotate: -45 } })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
  })

  it('applies custom font', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: 'Test',
        font: { color: 'red', fontSize: 20, fontWeight: 'bold' },
      },
    })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
  })

  it('applies custom width and height', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test', width: 200, height: 100 } })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
  })

  it('applies offset', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test', offset: [20, 30] } })
    expect(wrapper.find('.hmfw-watermark').exists()).toBe(true)
  })

  it('has overflow hidden style', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test' } })
    const container = wrapper.find('.hmfw-watermark')
    expect(container.attributes('style')).toContain('overflow: hidden')
  })
})
