import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Modal } from '../Modal'

describe('Modal', () => {
  it('renders when open=true', () => {
    const wrapper = mount(Modal, {
      props: { open: true, title: 'Test Modal' },
      slots: { default: '<p>Modal content</p>' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-modal')).toBeTruthy()
    wrapper.unmount()
  })

  it('does not render when open=false', () => {
    const wrapper = mount(Modal, {
      props: { open: false },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-modal')).toBeFalsy()
    wrapper.unmount()
  })

  it('shows title', () => {
    const wrapper = mount(Modal, {
      props: { open: true, title: 'My Title' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-modal-title')?.textContent).toBe('My Title')
    wrapper.unmount()
  })

  it('emits cancel on close button click', async () => {
    const wrapper = mount(Modal, {
      props: { open: true },
      attachTo: document.body,
    })
    const closeBtn = document.querySelector('.hmfw-modal-close') as HTMLElement
    closeBtn?.click()
    expect(wrapper.emitted('cancel')).toBeTruthy()
    wrapper.unmount()
  })

  it('emits ok on ok button click', async () => {
    const wrapper = mount(Modal, {
      props: { open: true },
      attachTo: document.body,
    })
    const buttons = document.querySelectorAll('.hmfw-modal-footer button')
    ;(buttons[1] as HTMLElement)?.click()
    expect(wrapper.emitted('ok')).toBeTruthy()
    wrapper.unmount()
  })
})
