import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Image, PreviewGroup } from '../Image'

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
})

describe('PreviewGroup', () => {
  it('renders children', () => {
    const wrapper = mount(PreviewGroup, {
      slots: {
        default: () => [
          <Image src="a.jpg" />,
          <Image src="b.jpg" />,
        ],
      },
    })
    expect(wrapper.findAll('img').length).toBe(2)
  })
})
