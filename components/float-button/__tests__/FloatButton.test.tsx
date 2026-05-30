import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import {
  FloatButton,
  FloatButtonGroup,
  FloatButtonBackTop,
} from '../FloatButton'
import FloatButtonDefault from '../FloatButton'
import { SettingOutlined } from '../../icon/icons'

describe('FloatButton', () => {
  it('renders button with default html type', () => {
    const wrapper = mount(FloatButton)
    const btn = wrapper.find('.hmfw-float-btn')
    expect(btn.exists()).toBe(true)
    expect(btn.attributes('type')).toBe('button')
  })

  it('applies type class', () => {
    const wrapper = mount(FloatButton, { props: { type: 'primary' } })
    expect(wrapper.find('.hmfw-float-btn').classes()).toContain('hmfw-float-btn-primary')
  })

  it('applies shape class', () => {
    const wrapper = mount(FloatButton, { props: { shape: 'square' } })
    expect(wrapper.find('.hmfw-float-btn').classes()).toContain('hmfw-float-btn-square')
  })

  it('renders a string icon', () => {
    const wrapper = mount(FloatButton, { props: { icon: '★' } })
    expect(wrapper.find('.hmfw-float-btn-icon').text()).toBe('★')
  })

  it('renders an icon component', () => {
    const wrapper = mount(FloatButton, { props: { icon: SettingOutlined } })
    expect(wrapper.find('.hmfw-float-btn-icon svg').exists()).toBe(true)
  })

  it('renders an icon via slot', () => {
    const wrapper = mount(FloatButton, {
      slots: { icon: '<i class="my-icon" />' },
    })
    expect(wrapper.find('.hmfw-float-btn-icon .my-icon').exists()).toBe(true)
  })

  it('renders a default icon when none provided', () => {
    const wrapper = mount(FloatButton)
    expect(wrapper.find('.hmfw-float-btn-icon svg').exists()).toBe(true)
  })

  it('renders description', () => {
    const wrapper = mount(FloatButton, {
      props: { shape: 'square', description: 'Back' },
    })
    expect(wrapper.find('.hmfw-float-btn-description').text()).toBe('Back')
  })

  it('respects custom html type', () => {
    const wrapper = mount(FloatButton, { props: { htmlType: 'submit' } })
    expect(wrapper.find('.hmfw-float-btn').attributes('type')).toBe('submit')
  })

  it('emits click', async () => {
    const wrapper = mount(FloatButton)
    await wrapper.find('.hmfw-float-btn').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('renders as anchor when href provided', () => {
    const wrapper = mount(FloatButton, { props: { href: 'https://example.com', target: '_blank' } })
    const a = wrapper.find('a.hmfw-float-btn')
    expect(a.exists()).toBe(true)
    expect(a.attributes('href')).toBe('https://example.com')
    expect(a.attributes('target')).toBe('_blank')
  })

  it('renders badge dot via Badge component', () => {
    const wrapper = mount(FloatButton, { props: { badge: { dot: true } } })
    expect(wrapper.find('.hmfw-badge .hmfw-badge-dot').exists()).toBe(true)
  })

  it('renders badge count via Badge component', () => {
    const wrapper = mount(FloatButton, { props: { badge: { count: 5 } } })
    expect(wrapper.find('.hmfw-badge .hmfw-badge-count').text()).toBe('5')
  })

  it('does not render badge when empty', () => {
    const wrapper = mount(FloatButton, { props: { badge: { count: 0 } } })
    expect(wrapper.find('.hmfw-badge-count').exists()).toBe(false)
  })

  it('wraps content in a Tooltip when tooltip provided', () => {
    const wrapper = mount(FloatButton, { props: { tooltip: '提示' } })
    // Button still renders as root, tooltip trigger lives inside
    expect(wrapper.find('.hmfw-float-btn').exists()).toBe(true)
    expect(wrapper.find('.hmfw-float-btn-body').exists()).toBe(true)
  })
})

describe('FloatButton compound statics', () => {
  it('exposes Group and BackTop', () => {
    expect(FloatButtonDefault.Group).toBe(FloatButtonGroup)
    expect(FloatButtonDefault.BackTop).toBe(FloatButtonBackTop)
  })
})

describe('FloatButtonGroup', () => {
  it('renders group with children when no trigger', () => {
    const wrapper = mount(FloatButtonGroup, {
      slots: { default: () => [mount(FloatButton).html()] },
    })
    expect(wrapper.find('.hmfw-float-btn-group').exists()).toBe(true)
  })

  it('applies placement class', () => {
    const wrapper = mount(FloatButtonGroup, { props: { placement: 'left' } })
    expect(wrapper.find('.hmfw-float-btn-group').classes()).toContain('hmfw-float-btn-group-left')
  })

  it('shows trigger button when trigger prop set', () => {
    const wrapper = mount(FloatButtonGroup, {
      props: { trigger: 'click' },
      slots: { default: '<button class="child">1</button>' },
    })
    expect(wrapper.find('.hmfw-float-btn').exists()).toBe(true)
    expect(wrapper.find('.hmfw-float-btn-group-trigger').exists()).toBe(true)
  })

  it('toggles open on trigger click', async () => {
    const wrapper = mount(FloatButtonGroup, {
      props: { trigger: 'click' },
      slots: { default: '<span class="child">1</span>' },
    })
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(false)
    await wrapper.find('.hmfw-float-btn').trigger('click')
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(true)
    await wrapper.find('.hmfw-float-btn').trigger('click')
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(false)
  })

  it('respects defaultOpen', () => {
    const wrapper = mount(FloatButtonGroup, {
      props: { trigger: 'click', defaultOpen: true },
      slots: { default: '<span class="child">1</span>' },
    })
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(true)
  })

  it('opens on hover when trigger is hover', async () => {
    const wrapper = mount(FloatButtonGroup, {
      props: { trigger: 'hover' },
      slots: { default: '<span class="child">1</span>' },
    })
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(false)
    await wrapper.find('.hmfw-float-btn-group').trigger('mouseenter')
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(true)
    await wrapper.find('.hmfw-float-btn-group').trigger('mouseleave')
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(false)
  })

  it('emits openChange and update:open', async () => {
    const wrapper = mount(FloatButtonGroup, {
      props: { trigger: 'click' },
      slots: { default: '<span class="child">1</span>' },
    })
    await wrapper.find('.hmfw-float-btn').trigger('click')
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
    expect(wrapper.emitted('update:open')?.[0]).toEqual([true])
  })

  it('supports controlled open', async () => {
    const wrapper = mount(FloatButtonGroup, {
      props: { trigger: 'click', open: false },
      slots: { default: '<span class="child">1</span>' },
    })
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(false)
    // Clicking should not change internal state when controlled
    await wrapper.find('.hmfw-float-btn').trigger('click')
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(false)
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
    // Parent updates the prop
    await wrapper.setProps({ open: true })
    expect(wrapper.find('.hmfw-float-btn-group-wrap').exists()).toBe(true)
  })
})

describe('FloatButtonBackTop', () => {
  it('is hidden initially when scroll is at top', () => {
    const wrapper = mount(FloatButtonBackTop)
    expect(wrapper.find('.hmfw-float-btn').exists()).toBe(false)
  })

  it('becomes visible after scrolling past visibilityHeight', async () => {
    const wrapper = mount(FloatButtonBackTop, { props: { visibilityHeight: 100 } })
    Object.defineProperty(document.documentElement, 'scrollTop', {
      value: 200,
      configurable: true,
      writable: true,
    })
    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-float-btn').exists()).toBe(true)
  })

  it('scrolls to top and emits click', async () => {
    const wrapper = mount(FloatButtonBackTop, { props: { visibilityHeight: 100 } })
    Object.defineProperty(document.documentElement, 'scrollTop', {
      value: 200,
      configurable: true,
      writable: true,
    })
    const scrollSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    let rafCalls = 0
    const rafSpy = vi
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: FrameRequestCallback) => {
        // Run the first frame only, to avoid an infinite synchronous loop
        if (rafCalls++ === 0) cb(0)
        return 0
      })
    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()
    await wrapper.find('.hmfw-float-btn').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(scrollSpy).toHaveBeenCalled()
    scrollSpy.mockRestore()
    rafSpy.mockRestore()
  })
})
