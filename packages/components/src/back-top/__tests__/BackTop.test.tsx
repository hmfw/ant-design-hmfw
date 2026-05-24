import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { BackTop } from '../BackTop'
import { nextTick } from 'vue'

describe('BackTop', () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true,
      value: 0,
    })
  })

  it('is hidden when scroll is below threshold', () => {
    const wrapper = mount(BackTop, { props: { visibilityHeight: 400 } })
    expect(wrapper.find('.hmfw-back-top').exists()).toBe(false)
  })

  it('shows when scroll exceeds threshold', async () => {
    const wrapper = mount(BackTop, { props: { visibilityHeight: 100 } })
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 200, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()
    expect(wrapper.find('.hmfw-back-top').exists()).toBe(true)
  })

  it('renders custom slot content', async () => {
    const wrapper = mount(BackTop, {
      props: { visibilityHeight: 0 },
      slots: { default: '<span class="custom-icon">TOP</span>' },
    })
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 1, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
  })

  it('emits click on click', async () => {
    const wrapper = mount(BackTop, { props: { visibilityHeight: 0 } })
    Object.defineProperty(document.documentElement, 'scrollTop', { value: 1, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()
    await wrapper.find('.hmfw-back-top').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
