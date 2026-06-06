import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Result } from '../Result'

describe('Result', () => {
  it('renders with default info status', () => {
    const wrapper = mount(Result, { props: { title: 'Info' } })
    expect(wrapper.classes()).toContain('hmfw-result-info')
  })

  it('renders all status types', () => {
    for (const status of ['success', 'error', 'info', 'warning', '404', '403', '500'] as const) {
      const wrapper = mount(Result, { props: { status, title: 'Test' } })
      expect(wrapper.classes()).toContain(`hmfw-result-${status}`)
    }
  })

  it('renders title', () => {
    const wrapper = mount(Result, { props: { title: 'Operation Successful' } })
    expect(wrapper.find('.hmfw-result-title').text()).toBe('Operation Successful')
  })

  it('renders subTitle', () => {
    const wrapper = mount(Result, { props: { title: 'T', subTitle: 'Sub text' } })
    expect(wrapper.find('.hmfw-result-subtitle').text()).toBe('Sub text')
  })

  it('renders extra slot', () => {
    const wrapper = mount(Result, {
      props: { title: 'T' },
      slots: { extra: '<button>Go Home</button>' },
    })
    expect(wrapper.find('.hmfw-result-extra').find('button').exists()).toBe(true)
  })

  it('renders default slot as content', () => {
    const wrapper = mount(Result, {
      props: { title: 'T' },
      slots: { default: '<p>Detail content</p>' },
    })
    expect(wrapper.find('.hmfw-result-body').find('p').exists()).toBe(true)
  })

  it('renders icon slot', () => {
    const wrapper = mount(Result, {
      props: { title: 'T' },
      slots: { icon: '<span class="custom-icon">★</span>' },
    })
    expect(wrapper.find('.hmfw-result-icon .custom-icon').exists()).toBe(true)
  })

  it('renders title slot', () => {
    const wrapper = mount(Result, {
      slots: { title: '<strong>Bold Title</strong>' },
    })
    expect(wrapper.find('.hmfw-result-title strong').exists()).toBe(true)
  })

  it('renders exception status as image illustration', () => {
    const wrapper = mount(Result, { props: { status: '404', title: 'Not Found' } })
    const icon = wrapper.find('.hmfw-result-icon')
    expect(icon.classes()).toContain('hmfw-result-image')
    expect(icon.find('svg').exists()).toBe(true)
  })

  it('hides icon when icon=false', () => {
    const wrapper = mount(Result, { props: { status: 'success', icon: false, title: 'T' } })
    expect(wrapper.find('.hmfw-result-icon').exists()).toBe(false)
  })

  it('renders custom string icon', () => {
    const wrapper = mount(Result, { props: { status: 'info', icon: '★', title: 'T' } })
    expect(wrapper.find('.hmfw-result-icon').text()).toBe('★')
  })

  it('renders real svg icon for each non-exception status', () => {
    for (const status of ['success', 'error', 'info', 'warning'] as const) {
      const wrapper = mount(Result, { props: { status, title: 'T' } })
      expect(wrapper.find('.hmfw-result-icon svg').exists()).toBe(true)
    }
  })

  it('keeps exception image even when icon=false', () => {
    const wrapper = mount(Result, { props: { status: '404', icon: false, title: 'T' } })
    const icon = wrapper.find('.hmfw-result-icon')
    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('hmfw-result-image')
    expect(icon.find('svg').exists()).toBe(true)
  })

  it('renders extra prop', () => {
    const wrapper = mount(Result, { props: { title: 'T', extra: 'Back home' } })
    expect(wrapper.find('.hmfw-result-extra').text()).toBe('Back home')
  })

  it('extra slot takes precedence over extra prop', () => {
    const wrapper = mount(Result, {
      props: { title: 'T', extra: 'prop-text' },
      slots: { extra: '<button>slot-btn</button>' },
    })
    expect(wrapper.find('.hmfw-result-extra button').exists()).toBe(true)
  })
})
