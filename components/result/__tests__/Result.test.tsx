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
    expect(wrapper.find('.hmfw-result-content').find('p').exists()).toBe(true)
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
})
