import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Drawer } from '../Drawer'

describe('Drawer', () => {
  it('renders when open=true', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, title: 'Test Drawer' },
      slots: { default: '<p>Drawer content</p>' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-content-wrapper')).toBeTruthy()
    wrapper.unmount()
  })

  it('does not render when open=false', () => {
    const wrapper = mount(Drawer, {
      props: { open: false },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-content-wrapper')).toBeFalsy()
    wrapper.unmount()
  })

  it('shows title', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, title: 'My Drawer' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-title')?.textContent).toBe('My Drawer')
    wrapper.unmount()
  })

  it('emits close on close button click', async () => {
    const wrapper = mount(Drawer, {
      props: { open: true },
      attachTo: document.body,
    })
    const closeBtn = document.querySelector('.hmfw-drawer-close') as HTMLElement
    closeBtn?.click()
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })

  it('applies placement class', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, placement: 'left' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-left')).toBeTruthy()
    wrapper.unmount()
  })
})
