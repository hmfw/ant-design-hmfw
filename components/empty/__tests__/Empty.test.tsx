import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Empty, PRESENTED_IMAGE_SIMPLE } from '../Empty'

describe('Empty', () => {
  it('renders correctly', () => {
    const wrapper = mount(Empty)
    expect(wrapper.classes()).toContain('hmfw-empty')
  })

  it('shows default description', () => {
    const wrapper = mount(Empty)
    expect(wrapper.find('.hmfw-empty-description').text()).toBe('暂无数据')
  })

  it('shows custom description string', () => {
    const wrapper = mount(Empty, { props: { description: 'No data' } })
    expect(wrapper.find('.hmfw-empty-description').text()).toBe('No data')
  })

  it('hides description when false', () => {
    const wrapper = mount(Empty, { props: { description: false } })
    expect(wrapper.find('.hmfw-empty-description').exists()).toBe(false)
  })

  it('shows default image', () => {
    const wrapper = mount(Empty)
    expect(wrapper.find('.hmfw-empty-image').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('shows custom image url', () => {
    const wrapper = mount(Empty, { props: { image: 'https://example.com/img.png' } })
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/img.png')
  })

  it('hides image when false', () => {
    const wrapper = mount(Empty, { props: { image: false } })
    expect(wrapper.find('.hmfw-empty-image').exists()).toBe(false)
  })

  it('renders footer slot', () => {
    const wrapper = mount(Empty, { slots: { default: '<button>Reload</button>' } })
    expect(wrapper.find('.hmfw-empty-footer').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Reload')
  })

  it('renders simple preset image with normal class', () => {
    const wrapper = mount(Empty, { props: { image: PRESENTED_IMAGE_SIMPLE } })
    expect(wrapper.classes()).toContain('hmfw-empty-normal')
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('does not treat preset sentinel as image url', () => {
    const wrapper = mount(Empty, { props: { image: PRESENTED_IMAGE_SIMPLE } })
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('renders custom image slot', () => {
    const wrapper = mount(Empty, {
      slots: { image: '<i class="custom-img">x</i>' },
    })
    expect(wrapper.find('.custom-img').exists()).toBe(true)
  })

  it('exposes preset constants on component', () => {
    expect((Empty as any).PRESENTED_IMAGE_SIMPLE).toBe('simple')
    expect((Empty as any).PRESENTED_IMAGE_DEFAULT).toBe('default')
  })

  it('applies imageStyle to image container', () => {
    const wrapper = mount(Empty, { props: { imageStyle: { height: '120px' } } })
    expect(wrapper.find('.hmfw-empty-image').attributes('style')).toContain('height: 120px')
  })

  it('applies numeric imageWidth/imageHeight as px', () => {
    const wrapper = mount(Empty, { props: { imageWidth: 80, imageHeight: 60 } })
    const style = wrapper.find('.hmfw-empty-image').attributes('style') ?? ''
    expect(style).toContain('width: 80px')
    expect(style).toContain('height: 60px')
  })

  it('applies string imageWidth/imageHeight with units', () => {
    const wrapper = mount(Empty, { props: { imageWidth: '50%', imageHeight: '4rem' } })
    const style = wrapper.find('.hmfw-empty-image').attributes('style') ?? ''
    expect(style).toContain('width: 50%')
    expect(style).toContain('height: 4rem')
  })

  it('imageStyle takes precedence over imageWidth/imageHeight', () => {
    const wrapper = mount(Empty, {
      props: { imageWidth: 80, imageStyle: { width: '200px' } },
    })
    const style = wrapper.find('.hmfw-empty-image').attributes('style') ?? ''
    expect(style).toContain('width: 200px')
    expect(style).not.toContain('width: 80px')
  })

  it('default image svg uses themeable shape classes (no hard-coded fill)', () => {
    const wrapper = mount(Empty)
    const svg = wrapper.find('svg')
    expect(svg.find('.hmfw-empty-img-shadow').exists()).toBe(true)
    expect(svg.find('.hmfw-empty-img-outline').exists()).toBe(true)
    expect(svg.find('.hmfw-empty-img-bg').exists()).toBe(true)
    // 不应再写死颜色属性
    expect(svg.html()).not.toContain('#f5f5f5')
    expect(svg.html()).not.toContain('#fafafa')
  })

  it('default image svg has no fixed width/height (scales with container)', () => {
    const wrapper = mount(Empty)
    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBeUndefined()
    expect(svg.attributes('height')).toBeUndefined()
    expect(svg.attributes('viewBox')).toBe('0 0 64 41')
  })
})
