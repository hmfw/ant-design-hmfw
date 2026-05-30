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
})
