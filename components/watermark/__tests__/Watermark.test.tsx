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

  it('applies rootClassName to container', () => {
    const wrapper = mount(Watermark, { props: { content: 'Test', rootClassName: 'my-root' } })
    expect(wrapper.find('.hmfw-watermark').classes()).toContain('my-root')
  })

  it('passes through custom class and style to container', () => {
    const wrapper = mount(Watermark, {
      props: { content: 'Test' },
      attrs: { class: 'extra-cls', style: 'background: blue;' },
    })
    const container = wrapper.find('.hmfw-watermark')
    expect(container.classes()).toContain('extra-cls')
    expect(container.attributes('style')).toContain('background: blue')
    // 固定样式仍然保留
    expect(container.attributes('style')).toContain('overflow: hidden')
  })

  it('watermark element carries visibility !important to prevent hiding', async () => {
    const wrapper = mount(Watermark, { props: { content: 'Test' } })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    const markDiv = wrapper.element.querySelector('div[style*="background-image"]') as HTMLElement
    expect(markDiv).toBeTruthy()
    expect(markDiv.getAttribute('style')).toContain('visibility: visible !important')
  })

  it('removes class and hidden attribute on watermark element', async () => {
    const wrapper = mount(Watermark, { props: { content: 'Test' } })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    const markDiv = wrapper.element.querySelector('div[style*="background-image"]') as HTMLElement
    expect(markDiv).toBeTruthy()
    expect(markDiv.hasAttribute('class')).toBe(false)
    expect(markDiv.hasAttribute('hidden')).toBe(false)
  })

  it('calls onRemove when watermark element is hard removed', async () => {
    const onRemove = vi.fn()
    const wrapper = mount(Watermark, { props: { content: 'Ant', onRemove } })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    const markDiv = wrapper.element.querySelector('div[style*="background-image"]') as HTMLElement
    expect(markDiv).toBeTruthy()
    markDiv.remove()
    // 等待 MutationObserver 异步回调
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(onRemove).toHaveBeenCalled()
  })

  it('does not call onRemove on unmount', async () => {
    const onRemove = vi.fn()
    const wrapper = mount(Watermark, { props: { content: 'Ant', onRemove } })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    wrapper.unmount()
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(onRemove).not.toHaveBeenCalled()
  })

  it('restores fixed style when container style is tampered', async () => {
    const wrapper = mount(Watermark, { props: { content: 'Test' } })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    const container = wrapper.element as HTMLElement
    container.setAttribute('style', '')
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(container.style.overflow).toBe('hidden')
    expect(container.style.position).toBe('relative')
  })

  it('re-appends watermark when removed by external mutation', async () => {
    const wrapper = mount(Watermark, { props: { content: 'Test' } })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    let markDiv = wrapper.element.querySelector('div[style*="background-image"]') as HTMLElement
    expect(markDiv).toBeTruthy()
    markDiv.remove()
    await new Promise((resolve) => setTimeout(resolve, 50))
    // 水印应被重新挂载
    markDiv = wrapper.element.querySelector('div[style*="background-image"]') as HTMLElement
    expect(markDiv).toBeTruthy()
  })

  it('applies offset position correctly', async () => {
    const wrapper = mount(Watermark, {
      props: { content: ['Ant Design', 'Ant Design Pro'], offset: [200, 200] },
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    const markDiv = wrapper.element.querySelector('div[style*="background-image"]') as HTMLElement
    expect(markDiv).toBeTruthy()
    const style = markDiv.getAttribute('style') || ''
    expect(style).toContain('left: 150px')
    expect(style).toContain('top: 150px')
    expect(style).toContain('width: calc(100% - 150px)')
    expect(style).toContain('height: calc(100% - 150px)')
  })
})
