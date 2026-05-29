import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Avatar, AvatarGroup } from '../Avatar'

describe('Avatar', () => {
  it('renders correctly', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-avatar')
  })

  it('applies circle shape by default', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.classes()).toContain('hmfw-avatar-circle')
  })

  it('applies square shape', () => {
    const wrapper = mount(Avatar, { props: { shape: 'square' } })
    expect(wrapper.classes()).toContain('hmfw-avatar-square')
  })

  it('applies default size class', () => {
    const wrapper = mount(Avatar, { props: { size: 'default' } })
    expect(wrapper.classes()).toContain('hmfw-avatar-default')
  })

  it('applies large size class', () => {
    const wrapper = mount(Avatar, { props: { size: 'large' } })
    expect(wrapper.classes()).toContain('hmfw-avatar-large')
  })

  it('applies small size class', () => {
    const wrapper = mount(Avatar, { props: { size: 'small' } })
    expect(wrapper.classes()).toContain('hmfw-avatar-small')
  })

  it('applies custom numeric size style', () => {
    const wrapper = mount(Avatar, { props: { size: 64 } })
    expect(wrapper.attributes('style')).toContain('width: 64px')
    expect(wrapper.attributes('style')).toContain('height: 64px')
  })

  it('renders image when src is provided', () => {
    const wrapper = mount(Avatar, { props: { src: 'https://example.com/avatar.jpg', alt: 'test' } })
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/avatar.jpg')
    expect(wrapper.classes()).toContain('hmfw-avatar-image')
  })

  it('renders text content', () => {
    const wrapper = mount(Avatar, { slots: { default: 'AB' } })
    expect(wrapper.text()).toContain('AB')
  })

  it('emits error when image fails to load', async () => {
    const wrapper = mount(Avatar, { props: { src: 'bad-url.jpg' } })
    await wrapper.find('img').trigger('error')
    expect(wrapper.emitted('error')).toBeTruthy()
  })
})

describe('AvatarGroup', () => {
  it('renders group container', () => {
    const wrapper = mount(AvatarGroup)
    expect(wrapper.classes()).toContain('hmfw-avatar-group')
  })

  it('shows overflow count when maxCount is exceeded', () => {
    const wrapper = mount(AvatarGroup, {
      props: { maxCount: 2 },
      slots: {
        default: `
          <span class="hmfw-avatar">A</span>
          <span class="hmfw-avatar">B</span>
          <span class="hmfw-avatar">C</span>
        `,
      },
    })
    expect(wrapper.text()).toContain('+1')
  })
})
