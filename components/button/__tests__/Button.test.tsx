import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Button from '../Button'

describe('Button', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders correctly', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toBe('Click me')
  })

  it('handles different types', () => {
    const types = ['default', 'primary', 'dashed', 'text', 'link'] as const
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type },
        slots: { default: 'Button' },
      })
      expect(wrapper.classes()).toContain(`hmfw-btn-${type}`)
    })
  })

  it('handles different sizes', () => {
    const sizes = ['small', 'middle', 'large'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size },
        slots: { default: 'Button' },
      })
      expect(wrapper.classes()).toContain(`hmfw-btn-${size}`)
    })
  })

  it('handles different shapes', () => {
    const shapes = ['circle', 'round'] as const
    shapes.forEach((shape) => {
      const wrapper = mount(Button, {
        props: { shape },
        slots: { default: 'Button' },
      })
      expect(wrapper.classes()).toContain(`hmfw-btn-${shape}`)
    })
  })

  it('emits click event', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Click me' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Click me' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('handles loading with delay', async () => {
    const wrapper = mount(Button, {
      props: { loading: { delay: 500 } },
      slots: { default: 'Button' },
    })

    // Initially should not have loading class
    expect(wrapper.classes()).not.toContain('hmfw-btn-loading')

    // After delay, should have loading class
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain('hmfw-btn-loading')
  })

  it('handles disabled state', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-disabled')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('handles loading state', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-loading')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('handles danger state', () => {
    const wrapper = mount(Button, {
      props: { danger: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-dangerous')
  })

  it('handles block mode', () => {
    const wrapper = mount(Button, {
      props: { block: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-block')
  })

  it('handles ghost mode', () => {
    const wrapper = mount(Button, {
      props: { ghost: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-background-ghost')
  })

  it('handles icon only button', () => {
    const wrapper = mount(Button, {
      props: { icon: () => <span>icon</span> },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-icon-only')
  })

  it('handles icon position end', () => {
    const wrapper = mount(Button, {
      props: { icon: () => <span>icon</span>, iconPosition: 'end' },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-icon-end')
  })

  it('renders as anchor when href is provided', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link' },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('renders anchor with target', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com', target: '_blank' },
      slots: { default: 'Link' },
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('disables href when disabled', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com', disabled: true },
      slots: { default: 'Link' },
    })
    expect(wrapper.attributes('href')).toBeUndefined()
  })

  it('handles different html types', () => {
    const wrapper = mount(Button, {
      props: { htmlType: 'submit' },
      slots: { default: 'Submit' },
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('supports slots', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Custom Content' },
    })
    expect(wrapper.text()).toContain('Custom Content')
  })
})
