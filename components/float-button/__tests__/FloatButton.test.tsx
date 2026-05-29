import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { FloatButton, FloatButtonGroup } from '../FloatButton'

describe('FloatButton', () => {
  it('renders button', () => {
    const wrapper = mount(FloatButton)
    expect(wrapper.find('.hmfw-float-btn').exists()).toBe(true)
  })

  it('applies type class', () => {
    const primary = mount(FloatButton, { props: { type: 'primary' } })
    expect(primary.find('.hmfw-float-btn').classes()).toContain('hmfw-float-btn-primary')
  })

  it('applies shape class', () => {
    const square = mount(FloatButton, { props: { shape: 'square' } })
    expect(square.find('.hmfw-float-btn').classes()).toContain('hmfw-float-btn-square')
  })

  it('renders icon', () => {
    const wrapper = mount(FloatButton, { props: { icon: '★' } })
    expect(wrapper.find('.hmfw-float-btn-icon').text()).toBe('★')
  })

  it('renders description', () => {
    const wrapper = mount(FloatButton, { props: { description: 'Back' } })
    expect(wrapper.find('.hmfw-float-btn-description').text()).toBe('Back')
  })

  it('emits click', async () => {
    const wrapper = mount(FloatButton)
    await wrapper.find('.hmfw-float-btn').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('renders as anchor when href provided', () => {
    const wrapper = mount(FloatButton, { props: { href: 'https://example.com' } })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('href')).toBe('https://example.com')
  })

  it('renders badge dot', () => {
    const wrapper = mount(FloatButton, { props: { badge: { dot: true } } })
    expect(wrapper.find('.hmfw-float-btn-badge-dot').exists()).toBe(true)
  })

  it('renders badge count', () => {
    const wrapper = mount(FloatButton, { props: { badge: { count: 5 } } })
    expect(wrapper.find('.hmfw-float-btn-badge-count').text()).toBe('5')
  })
})

describe('FloatButtonGroup', () => {
  it('renders group', () => {
    const wrapper = mount(FloatButtonGroup, {
      slots: { default: '<button>1</button><button>2</button>' },
    })
    expect(wrapper.find('.hmfw-float-btn-group').exists()).toBe(true)
  })

  it('shows trigger button when trigger prop set', () => {
    const wrapper = mount(FloatButtonGroup, {
      props: { trigger: 'click' },
      slots: { default: '<button>1</button>' },
    })
    expect(wrapper.find('.hmfw-float-btn').exists()).toBe(true)
  })

  it('toggles open on trigger click', async () => {
    const wrapper = mount(FloatButtonGroup, {
      props: { trigger: 'click' },
      slots: { default: '<button class="child">1</button>' },
    })
    expect(wrapper.find('.hmfw-float-btn-group-list').exists()).toBe(false)
    await wrapper.find('.hmfw-float-btn').trigger('click')
    expect(wrapper.find('.hmfw-float-btn-group-list').exists()).toBe(true)
  })
})
