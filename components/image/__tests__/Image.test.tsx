import { describe, it, expect, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { Image, PreviewGroup } from '../Image'

// 清理 teleport 残留
afterEach(() => {
  document.body.innerHTML = ''
})

describe('Image', () => {
  it('renders img element with src', () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', alt: 'test' } })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('test.jpg')
    expect(img.attributes('alt')).toBe('test')
  })

  it('applies width and height as style', () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', width: 200, height: 150 } })
    const root = wrapper.find('.hmfw-image')
    expect(root.attributes('style')).toContain('200px')
    expect(root.attributes('style')).toContain('150px')
  })

  it('applies string width and height', () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', width: '100%', height: '50vh' } })
    const root = wrapper.find('.hmfw-image')
    expect(root.attributes('style')).toContain('100%')
    expect(root.attributes('style')).toContain('50vh')
  })

  it('shows error placeholder when image fails to load and no fallback', async () => {
    const wrapper = mount(Image, { props: { src: 'bad.jpg' } })
    await wrapper.find('img').trigger('error')
    expect(wrapper.find('.hmfw-image-error-placeholder').exists()).toBe(true)
  })

  it('uses fallback src on error', async () => {
    const wrapper = mount(Image, { props: { src: 'bad.jpg', fallback: 'fallback.jpg' } })
    await wrapper.find('img').trigger('error')
    expect(wrapper.find('img').attributes('src')).toBe('fallback.jpg')
  })

  it('shows placeholder when placeholder prop is true', () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', placeholder: true } })
    expect(wrapper.find('.hmfw-image-placeholder').exists()).toBe(true)
  })

  it('hides placeholder after load', async () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', placeholder: true } })
    await wrapper.find('img').trigger('load')
    await nextTick()
    expect(wrapper.find('.hmfw-image-placeholder').exists()).toBe(false)
  })

  it('adds preview class when preview is true', () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', preview: true } })
    expect(wrapper.find('.hmfw-image-preview').exists()).toBe(true)
  })

  it('does not add preview class when preview is false', () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', preview: false } })
    expect(wrapper.find('.hmfw-image-preview').exists()).toBe(false)
  })

  it('shows preview mask on load', async () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', preview: true } })
    await wrapper.find('img').trigger('load')
    await nextTick()
    expect(wrapper.find('.hmfw-image-mask').exists()).toBe(true)
  })

  it('opens preview overlay on click when loaded', async () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg' }, attachTo: document.body })
    await wrapper.find('img').trigger('load')
    await nextTick()
    await wrapper.find('.hmfw-image-mask').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-root')).toBeTruthy()
    wrapper.unmount()
  })

  it('accepts preview config object', () => {
    const wrapper = mount(Image, {
      props: {
        src: 'test.jpg',
        preview: { minScale: 0.5, maxScale: 10, scaleStep: 0.2 },
      },
    })
    expect(wrapper.find('.hmfw-image-preview').exists()).toBe(true)
  })

  it('uses custom preview src', async () => {
    const wrapper = mount(Image, {
      props: { src: 'thumb.jpg', preview: { src: 'full.jpg' } },
      attachTo: document.body,
    })
    await wrapper.find('img').trigger('load')
    await wrapper.find('.hmfw-image-mask').trigger('click')
    await nextTick()
    const previewImg = document.querySelector('.hmfw-image-preview-img')
    expect(previewImg?.getAttribute('src')).toBe('full.jpg')
    wrapper.unmount()
  })

  it('calls onError callback', async () => {
    const onError = vi.fn()
    const wrapper = mount(Image, { props: { src: 'bad.jpg', onError } })
    await wrapper.find('img').trigger('error')
    expect(onError).toHaveBeenCalledOnce()
  })

  it('mask.enabled=false hides mask', async () => {
    const wrapper = mount(Image, {
      props: { src: 'test.jpg', preview: { mask: { enabled: false } } },
    })
    await wrapper.find('img').trigger('load')
    await nextTick()
    expect(wrapper.find('.hmfw-image-mask').exists()).toBe(false)
  })

  it('controlled preview via open prop', async () => {
    const wrapper = mount(Image, {
      props: { src: 'test.jpg', preview: { open: true } },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-root')).toBeTruthy()
    await wrapper.setProps({ preview: { open: false } })
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-root')).toBeFalsy()
    wrapper.unmount()
  })

  it('renders custom placeholder VNode', () => {
    const wrapper = mount(Image, {
      props: {
        src: 'test.jpg',
        placeholder: () => <div class="custom-placeholder">Loading...</div>,
      },
    })
    expect(wrapper.find('.custom-placeholder').exists()).toBe(true)
  })

  it('onTransform callback on actions', async () => {
    const onTransform = vi.fn()
    const wrapper = mount(Image, {
      props: { src: 'test.jpg', preview: { onTransform } },
      attachTo: document.body,
    })
    await wrapper.find('img').trigger('load')
    await wrapper.find('.hmfw-image-mask').trigger('click')
    await nextTick()
    const zoomInBtn = document.querySelector('.hmfw-image-preview-op-btn')
    zoomInBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await nextTick()
    expect(onTransform).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('rootClassName applied', () => {
    const wrapper = mount(Image, { props: { src: 'test.jpg', rootClassName: 'my-image' } })
    expect(wrapper.find('.my-image').exists()).toBe(true)
  })

  it('toolbarRender customizes the toolbar', async () => {
    const toolbarRender = vi.fn(() => <div class="custom-toolbar">my toolbar</div>)
    const wrapper = mount(Image, {
      props: { src: 'test.jpg', preview: { toolbarRender } },
      attachTo: document.body,
    })
    await wrapper.find('img').trigger('load')
    await wrapper.find('.hmfw-image-mask').trigger('click')
    await nextTick()
    expect(document.querySelector('.custom-toolbar')?.textContent).toBe('my toolbar')
    // 默认工具栏被替换
    expect(document.querySelector('.hmfw-image-preview-operations')).toBeFalsy()
    // info 携带 transform / image / actions
    const info = toolbarRender.mock.calls[0][1]
    expect(info.transform.scale).toBe(1)
    expect(info.image.url).toBe('test.jpg')
    expect(typeof info.actions.onZoomIn).toBe('function')
    wrapper.unmount()
  })

  it('actionsRender still works as deprecated alias', async () => {
    const actionsRender = vi.fn((original: any) => original)
    const wrapper = mount(Image, {
      props: { src: 'test.jpg', preview: { actionsRender } },
      attachTo: document.body,
    })
    await wrapper.find('img').trigger('load')
    await wrapper.find('.hmfw-image-mask').trigger('click')
    await nextTick()
    expect(actionsRender).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('imageRender customizes preview content with info', async () => {
    const imageRender = vi.fn(() => <div class="custom-image">rendered</div>)
    const wrapper = mount(Image, {
      props: { src: 'test.jpg', preview: { imageRender } },
      attachTo: document.body,
    })
    await wrapper.find('img').trigger('load')
    await wrapper.find('.hmfw-image-mask').trigger('click')
    await nextTick()
    expect(document.querySelector('.custom-image')?.textContent).toBe('rendered')
    const info = imageRender.mock.calls[0][1]
    expect(info.transform.scale).toBe(1)
    expect(info.image.url).toBe('test.jpg')
    wrapper.unmount()
  })
})

describe('PreviewGroup', () => {
  it('renders children', () => {
    const wrapper = mount(PreviewGroup, {
      slots: {
        default: () => [<Image src="a.jpg" />, <Image src="b.jpg" />],
      },
    })
    expect(wrapper.findAll('img').length).toBe(2)
  })

  it('opens preview on child click', async () => {
    const wrapper = mount(PreviewGroup, {
      slots: {
        default: () => [<Image src="a.jpg" />, <Image src="b.jpg" />],
      },
      attachTo: document.body,
    })
    const images = wrapper.findAll('.hmfw-image')
    await images[0].find('img').trigger('load')
    await nextTick()
    await images[0].find('.hmfw-image-mask').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-root')).toBeTruthy()
    wrapper.unmount()
  })

  it('shows count and navigation when multiple images', async () => {
    const wrapper = mount(PreviewGroup, {
      slots: {
        default: () => [<Image src="a.jpg" />, <Image src="b.jpg" />],
      },
      attachTo: document.body,
    })
    const images = wrapper.findAll('.hmfw-image')
    await images[0].find('img').trigger('load')
    await images[0].find('.hmfw-image-mask').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-count')?.textContent).toContain('1 / 2')
    expect(document.querySelector('.hmfw-image-preview-switch-right')).toBeTruthy()
    wrapper.unmount()
  })

  it('navigates to next/prev image', async () => {
    const wrapper = mount(PreviewGroup, {
      slots: {
        default: () => [<Image src="a.jpg" />, <Image src="b.jpg" />],
      },
      attachTo: document.body,
    })
    const images = wrapper.findAll('.hmfw-image')
    await images[0].find('img').trigger('load')
    await images[0].find('.hmfw-image-mask').trigger('click')
    await nextTick()
    const nextBtn = document.querySelector('.hmfw-image-preview-switch-right') as HTMLElement
    nextBtn?.click()
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-count')?.textContent).toContain('2 / 2')
    wrapper.unmount()
  })

  it('accepts items prop', async () => {
    const wrapper = mount(PreviewGroup, {
      props: { items: ['a.jpg', 'b.jpg', 'c.jpg'], preview: { open: true } },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-count')?.textContent).toContain('1 / 3')
    wrapper.unmount()
  })

  it('respects preview=false', () => {
    const wrapper = mount(PreviewGroup, {
      props: { preview: false },
      slots: {
        default: () => [<Image src="a.jpg" />],
      },
    })
    expect(wrapper.find('.hmfw-image-preview').exists()).toBe(false)
  })

  it('controlled current prop', async () => {
    const wrapper = mount(PreviewGroup, {
      props: { items: ['a.jpg', 'b.jpg'], current: 1, preview: { open: true } },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-count')?.textContent).toContain('2 / 2')
    wrapper.unmount()
  })

  it('onChange callback', async () => {
    const onChange = vi.fn()
    const wrapper = mount(PreviewGroup, {
      props: { items: ['a.jpg', 'b.jpg'], onChange, preview: { open: true } },
      attachTo: document.body,
    })
    await nextTick()
    const nextBtn = document.querySelector('.hmfw-image-preview-switch-right') as HTMLElement
    nextBtn?.click()
    await nextTick()
    expect(onChange).toHaveBeenCalledWith(1, 0)
    wrapper.unmount()
  })

  it('disables transform transition while switching to avoid jank', async () => {
    const wrapper = mount(PreviewGroup, {
      props: { items: ['a.jpg', 'b.jpg'], preview: { open: true } },
      attachTo: document.body,
    })
    await nextTick()
    const nextBtn = document.querySelector('.hmfw-image-preview-switch-right') as HTMLElement
    nextBtn?.click()
    // 切换发生的同一 tick 内（nextTick 复位前）过渡应被禁用
    await nextTick()
    const img = document.querySelector('.hmfw-image-preview-img') as HTMLElement
    // 切换后稳定态：transition 恢复，且使用合成层提示
    expect(img.style.willChange).toBe('transform')
    wrapper.unmount()
  })

  it('toolbarRender onActive switches images in group', async () => {
    let activeFn: ((offset: number) => void) | undefined
    const toolbarRender = vi.fn((original: any, info: any) => {
      activeFn = info.actions.onActive
      return original
    })
    const wrapper = mount(PreviewGroup, {
      props: { items: ['a.jpg', 'b.jpg'], preview: { open: true, toolbarRender } },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-count')?.textContent).toContain('1 / 2')
    activeFn?.(1)
    await nextTick()
    expect(document.querySelector('.hmfw-image-preview-count')?.textContent).toContain('2 / 2')
    wrapper.unmount()
  })
})
