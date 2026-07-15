import { mount } from '@vue/test-utils'
import { describe, it, expect, afterEach } from 'vitest'
import { nextTick } from 'vue'
import { Modal } from '../index'

// Clean up teleported nodes + restore body overflow between tests
afterEach(() => {
  document.querySelectorAll('.hmfw-modal').forEach((n) => n.remove())
  document.body.style.overflow = ''
})

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

  it('does not render when open=false (and never opened)', () => {
    const wrapper = mount(Modal, { props: { open: false }, attachTo: document.body })
    expect(document.querySelector('.hmfw-modal')).toBeFalsy()
    wrapper.unmount()
  })

  it('shows title from prop and slot', () => {
    const w1 = mount(Modal, { props: { open: true, title: 'My Title' }, attachTo: document.body })
    expect(document.querySelector('.hmfw-modal-title')?.textContent).toBe('My Title')
    w1.unmount()
    const w2 = mount(Modal, {
      props: { open: true },
      slots: { title: 'Slot Title' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-modal-title')?.textContent).toBe('Slot Title')
    w2.unmount()
  })

  it('emits ok / cancel with MouseEvent', async () => {
    const wrapper = mount(Modal, { props: { open: true }, attachTo: document.body })
    const buttons = document.querySelectorAll('.hmfw-modal-footer button')
    ;(buttons[1] as HTMLElement)?.click()
    expect(wrapper.emitted('ok')).toBeTruthy()
    ;(buttons[0] as HTMLElement)?.click()
    expect(wrapper.emitted('cancel')).toBeTruthy()
    wrapper.unmount()
  })
  // MORE_TESTS
  it('confirmLoading blocks cancel via close button', async () => {
    const wrapper = mount(Modal, {
      props: { open: true, confirmLoading: true },
      attachTo: document.body,
    })
    const closeBtn = document.querySelector('.hmfw-modal-close') as HTMLElement
    closeBtn?.click()
    expect(wrapper.emitted('cancel')).toBeFalsy()
    wrapper.unmount()
  })

  it('maskClosable=false keeps modal open on mask click', async () => {
    const wrapper = mount(Modal, {
      props: { open: true, maskClosable: false },
      attachTo: document.body,
    })
    ;(document.querySelector('.hmfw-modal-wrap') as HTMLElement)?.click()
    expect(wrapper.emitted('cancel')).toBeFalsy()
    wrapper.unmount()
  })

  it('mask=false renders no mask element', () => {
    const wrapper = mount(Modal, { props: { open: true, mask: false }, attachTo: document.body })
    expect(document.querySelector('.hmfw-modal-mask')).toBeFalsy()
    wrapper.unmount()
  })

  it('footer=null hides footer entirely', () => {
    const wrapper = mount(Modal, { props: { open: true, footer: null }, attachTo: document.body })
    expect(document.querySelector('.hmfw-modal-footer')).toBeFalsy()
    wrapper.unmount()
  })

  it('closable=false hides close button', () => {
    const wrapper = mount(Modal, {
      props: { open: true, closable: false },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-modal-close')).toBeFalsy()
    wrapper.unmount()
  })

  it('Esc key triggers cancel when keyboard=true', async () => {
    const wrapper = mount(Modal, { props: { open: true }, attachTo: document.body })
    const root = document.querySelector('.hmfw-modal') as HTMLElement
    root?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(wrapper.emitted('cancel')).toBeTruthy()
    wrapper.unmount()
  })

  it('Esc key ignored when keyboard=false', async () => {
    const wrapper = mount(Modal, {
      props: { open: true, keyboard: false },
      attachTo: document.body,
    })
    const root = document.querySelector('.hmfw-modal') as HTMLElement
    root?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(wrapper.emitted('cancel')).toBeFalsy()
    wrapper.unmount()
  })

  it('locks body scroll while open and restores on close', async () => {
    const wrapper = mount(Modal, { props: { open: false }, attachTo: document.body })
    expect(document.body.style.overflow).toBe('')
    await wrapper.setProps({ open: true })
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')
    await wrapper.setProps({ open: false })
    await nextTick()
    expect(document.body.style.overflow).toBe('')
    wrapper.unmount()
  })

  it('renders footer buttons as hmfw-btn (Button component)', () => {
    const wrapper = mount(Modal, { props: { open: true }, attachTo: document.body })
    expect(document.querySelectorAll('.hmfw-modal-footer .hmfw-btn').length).toBe(2)
    wrapper.unmount()
  })

  it('okType="danger" renders danger primary OK button', () => {
    const wrapper = mount(Modal, {
      props: { open: true, okType: 'danger' },
      attachTo: document.body,
    })
    const ok = document.querySelectorAll('.hmfw-modal-footer .hmfw-btn')[1]
    expect(ok?.classList.contains('hmfw-btn-dangerous')).toBe(true)
    expect(ok?.classList.contains('hmfw-btn-primary')).toBe(true)
    wrapper.unmount()
  })

  it('emits afterClose after leave transition', async () => {
    const wrapper = mount(Modal, {
      props: { open: true },
      attachTo: document.body,
      global: { stubs: { transition: false } },
    })
    await wrapper.setProps({ open: false })
    // jsdom has no real CSS transitions, so Vue's Transition resolves the leave
    // callback in the next microtask via the empty-transition fast path
    await new Promise((r) => setTimeout(r, 50))
    expect(wrapper.emitted('afterClose')).toBeTruthy()
    wrapper.unmount()
  })
  // STATIC_TESTS
  describe('static methods', () => {
    afterEach(() => {
      Modal.destroyAll()
      // give microtask + leave-transition a chance to flush
      return new Promise((r) => setTimeout(r, 60))
    })

    it('Modal.confirm renders confirm dialog with title + content + ok/cancel', async () => {
      Modal.confirm({ title: 'Are you sure?', content: 'This is irreversible.' })
      await nextTick()
      expect(document.querySelector('.hmfw-modal-confirm-confirm')).toBeTruthy()
      expect(document.querySelector('.hmfw-modal-confirm-title')?.textContent).toBe('Are you sure?')
      expect(document.querySelector('.hmfw-modal-confirm-content')?.textContent).toBe('This is irreversible.')
      expect(document.querySelectorAll('.hmfw-modal-confirm-btns .hmfw-btn').length).toBe(2)
    })

    it('Modal.info shows only one OK button (okCancel=false)', async () => {
      Modal.info({ title: 'Heads up' })
      await nextTick()
      expect(document.querySelector('.hmfw-modal-confirm-info')).toBeTruthy()
      expect(document.querySelectorAll('.hmfw-modal-confirm-btns .hmfw-btn').length).toBe(1)
    })

    it('onOk returning Promise keeps OK button loading until resolved', async () => {
      let resolveFn: () => void = () => {}
      const promise = new Promise<void>((r) => {
        resolveFn = r
      })
      Modal.confirm({ title: 'Async', onOk: () => promise })
      await nextTick()
      const okBtn = document.querySelectorAll('.hmfw-modal-confirm-btns .hmfw-btn')[1] as HTMLElement
      okBtn.click()
      await nextTick()
      expect(document.querySelector('.hmfw-btn-loading')).toBeTruthy()
      resolveFn()
      await new Promise((r) => setTimeout(r, 60))
    })

    it('Modal.destroyAll closes all imperative dialogs', async () => {
      Modal.confirm({ title: 'A' })
      Modal.confirm({ title: 'B' })
      await nextTick()
      expect(document.querySelectorAll('.hmfw-modal-confirm').length).toBe(2)
      Modal.destroyAll()
      await new Promise((r) => setTimeout(r, 60))
      expect(document.querySelectorAll('.hmfw-modal-confirm').length).toBe(0)
    })
  })
})
