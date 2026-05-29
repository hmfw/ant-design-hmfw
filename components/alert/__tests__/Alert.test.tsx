import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { Alert } from '../Alert'
import { nextTick } from 'vue'

describe('Alert', () => {
  it('renders with default info type', () => {
    const wrapper = mount(Alert, { props: { message: 'Info message' } })
    expect(wrapper.classes()).toContain('hmfw-alert-info')
    expect(wrapper.text()).toContain('Info message')
  })

  it('renders all types', () => {
    for (const type of ['success', 'info', 'warning', 'error'] as const) {
      const wrapper = mount(Alert, { props: { type, message: 'msg' } })
      expect(wrapper.classes()).toContain(`hmfw-alert-${type}`)
    }
  })

  it('shows icon when showIcon is true', () => {
    const wrapper = mount(Alert, { props: { message: 'msg', showIcon: true } })
    expect(wrapper.find('.hmfw-alert-icon').exists()).toBe(true)
  })

  it('does not show icon by default', () => {
    const wrapper = mount(Alert, { props: { message: 'msg' } })
    expect(wrapper.find('.hmfw-alert-icon').exists()).toBe(false)
  })

  it('renders description', () => {
    const wrapper = mount(Alert, {
      props: { message: 'title', description: 'desc text' },
    })
    expect(wrapper.find('.hmfw-alert-description').text()).toBe('desc text')
    expect(wrapper.classes()).toContain('hmfw-alert-with-description')
  })

  it('shows close button when closable', () => {
    const wrapper = mount(Alert, { props: { message: 'msg', closable: true } })
    expect(wrapper.find('.hmfw-alert-close-icon').exists()).toBe(true)
  })

  it('emits close event and hides after close', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Alert, { props: { message: 'msg', closable: true } })
    await wrapper.find('.hmfw-alert-close-icon').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    vi.runAllTimers()
    await nextTick()
    await nextTick()
    expect(wrapper.find('.hmfw-alert').exists()).toBe(false)
    vi.useRealTimers()
  })

  it('renders banner style', () => {
    const wrapper = mount(Alert, { props: { message: 'msg', banner: true } })
    expect(wrapper.classes()).toContain('hmfw-alert-banner')
  })

  it('renders slot message', () => {
    const wrapper = mount(Alert, {
      slots: { message: '<strong>bold msg</strong>' },
    })
    expect(wrapper.find('.hmfw-alert-message').html()).toContain('<strong>')
  })

  it('has role=alert for accessibility', () => {
    const wrapper = mount(Alert, { props: { message: 'msg' } })
    expect(wrapper.attributes('role')).toBe('alert')
  })
})
