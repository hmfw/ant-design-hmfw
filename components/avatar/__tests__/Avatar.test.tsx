import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Avatar } from '../Avatar'
import { AvatarGroup } from '../AvatarGroup'

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

  it('applies middle size class', () => {
    const wrapper = mount(Avatar, { props: { size: 'middle' } })
    expect(wrapper.classes()).toContain('hmfw-avatar-middle')
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

  it('calls onError and falls back when image fails to load', async () => {
    let called = false
    const wrapper = mount(Avatar, {
      props: {
        src: 'bad-url.jpg',
        onError: () => {
          called = true
        },
      },
    })
    await wrapper.find('img').trigger('error')
    expect(called).toBe(true)
    // 默认行为：回退，img 被移除
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('onError returning false prevents default fallback', async () => {
    const wrapper = mount(Avatar, {
      props: { src: 'bad-url.jpg', onError: () => false },
    })
    await wrapper.find('img').trigger('error')
    // 返回 false 阻止 fallback，img 仍保留
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('resets error state when src changes', async () => {
    const wrapper = mount(Avatar, { props: { src: 'bad-url.jpg' } })
    await wrapper.find('img').trigger('error')
    expect(wrapper.find('img').exists()).toBe(false)
    // 切换到新地址后应重新尝试渲染图片
    await wrapper.setProps({ src: 'https://example.com/new.jpg' })
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/new.jpg')
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

  it('propagates size to child Avatars via context', () => {
    const wrapper = mount(AvatarGroup, {
      props: { size: 'large' },
      slots: {
        default: () => [h(Avatar, null, () => 'A'), h(Avatar, null, () => 'B')],
      },
    })
    const avatars = wrapper.findAll('.hmfw-avatar')
    // 两个子 avatar 都应继承 large
    const larges = avatars.filter((a) => a.classes().includes('hmfw-avatar-large'))
    expect(larges.length).toBeGreaterThanOrEqual(2)
  })

  it('propagates shape to child Avatars via context', () => {
    const wrapper = mount(AvatarGroup, {
      props: { shape: 'square' },
      slots: {
        default: () => [h(Avatar, null, () => 'A')],
      },
    })
    expect(wrapper.find('.hmfw-avatar').classes()).toContain('hmfw-avatar-square')
  })

  it('child Avatar props override group context', () => {
    const wrapper = mount(AvatarGroup, {
      props: { size: 'large' },
      slots: {
        default: () => [h(Avatar, { size: 'small' }, () => 'A')],
      },
    })
    const avatar = wrapper.find('.hmfw-avatar')
    expect(avatar.classes()).toContain('hmfw-avatar-small')
    expect(avatar.classes()).not.toContain('hmfw-avatar-large')
  })

  it('supports structured max.count API', () => {
    const wrapper = mount(AvatarGroup, {
      props: { max: { count: 2 } },
      slots: {
        default: () => [
          h(Avatar, null, () => 'A'),
          h(Avatar, null, () => 'B'),
          h(Avatar, null, () => 'C'),
          h(Avatar, null, () => 'D'),
        ],
      },
    })
    expect(wrapper.text()).toContain('+2')
  })

  it('max.count takes precedence over deprecated maxCount', () => {
    const wrapper = mount(AvatarGroup, {
      props: { maxCount: 1, max: { count: 3 } },
      slots: {
        default: () => [
          h(Avatar, null, () => 'A'),
          h(Avatar, null, () => 'B'),
          h(Avatar, null, () => 'C'),
          h(Avatar, null, () => 'D'),
        ],
      },
    })
    expect(wrapper.text()).toContain('+1')
    expect(wrapper.text()).not.toContain('+3')
  })

  it('applies max.style to the overflow avatar', () => {
    const wrapper = mount(AvatarGroup, {
      props: { max: { count: 1, style: { backgroundColor: 'red' } } },
      slots: {
        default: () => [h(Avatar, null, () => 'A'), h(Avatar, null, () => 'B')],
      },
    })
    const avatars = wrapper.findAll('.hmfw-avatar')
    const overflow = avatars[avatars.length - 1]
    expect(overflow.attributes('style')).toContain('background-color: red')
  })
})
