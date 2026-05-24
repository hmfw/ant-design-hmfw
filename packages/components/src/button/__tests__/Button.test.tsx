import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '../Button'

describe('Button', () => {
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
      props: { icon: { component: () => <span>icon</span> } },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-icon-only')
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
