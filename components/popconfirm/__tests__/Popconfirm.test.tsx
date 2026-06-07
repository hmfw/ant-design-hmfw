import { mount } from '@vue/test-utils'
import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { Popconfirm } from '../Popconfirm'
import { nextTick } from 'vue'

describe('Popconfirm', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
    // Clean up popups teleported to body so prior tests don't pollute queries.
    document.querySelectorAll('.hmfw-popconfirm').forEach((el) => el.remove())
  })

  it('renders trigger element', () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Are you sure?' },
      slots: { default: '<button>Delete</button>' },
      attachTo: document.body,
    })
    expect(wrapper.find('button').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows popconfirm on click', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Are you sure?' },
      slots: { default: '<button>Delete</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    const pop = document.querySelector('.hmfw-popconfirm')
    expect(pop?.classList.contains('hmfw-popconfirm-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('renders title', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Are you sure?', open: true },
      slots: { default: '<button>Delete</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popconfirm-message-title')?.textContent).toBe('Are you sure?')
    wrapper.unmount()
  })

  it('renders ok and cancel buttons', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true },
      slots: { default: '<button>Delete</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const buttons = document.querySelectorAll('.hmfw-popconfirm-buttons .hmfw-btn')
    expect(buttons.length).toBe(2)
    wrapper.unmount()
  })

  it('emits confirm on ok click', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true },
      slots: { default: '<button>Delete</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const buttons = document.querySelectorAll('.hmfw-popconfirm-buttons .hmfw-btn')
    ;(buttons[1] as HTMLElement).click()
    expect(wrapper.emitted('confirm')).toBeTruthy()
    wrapper.unmount()
  })

  it('emits cancel on cancel click', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true },
      slots: { default: '<button>Delete</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const buttons = document.querySelectorAll('.hmfw-popconfirm-buttons .hmfw-btn')
    ;(buttons[0] as HTMLElement).click()
    expect(wrapper.emitted('cancel')).toBeTruthy()
    wrapper.unmount()
  })

  it('hides cancel button when showCancel=false', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true, showCancel: false },
      slots: { default: '<button>Delete</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const buttons = document.querySelectorAll('.hmfw-popconfirm-buttons .hmfw-btn')
    expect(buttons.length).toBe(1)
    wrapper.unmount()
  })

  it('renders description', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', description: 'This cannot be undone.', open: true },
      slots: { default: '<button>Delete</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popconfirm-description')?.textContent).toBe('This cannot be undone.')
    wrapper.unmount()
  })

  it('does not render popup when title and description are empty', async () => {
    const wrapper = mount(Popconfirm, {
      props: {},
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-popconfirm')).toBeNull()
    wrapper.unmount()
  })

  it('disabled prevents popup from opening', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', disabled: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-popconfirm')).toBeNull()
    wrapper.unmount()
  })

  it('confirm event passes MouseEvent argument', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const buttons = document.querySelectorAll('.hmfw-popconfirm-buttons .hmfw-btn')
    ;(buttons[1] as HTMLElement).click()
    expect(wrapper.emitted('confirm')?.[0][0]).toBeInstanceOf(MouseEvent)
    wrapper.unmount()
  })

  it('cancel event passes MouseEvent argument', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const buttons = document.querySelectorAll('.hmfw-popconfirm-buttons .hmfw-btn')
    ;(buttons[0] as HTMLElement).click()
    expect(wrapper.emitted('cancel')?.[0][0]).toBeInstanceOf(MouseEvent)
    wrapper.unmount()
  })

  it('okType="danger" applies danger style and primary type', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true, okType: 'danger' },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const buttons = document.querySelectorAll('.hmfw-popconfirm-buttons .hmfw-btn')
    const okButton = buttons[buttons.length - 1] as HTMLElement
    expect(okButton.classList.contains('hmfw-btn-dangerous')).toBe(true)
    wrapper.unmount()
  })

  it('hover trigger opens popup', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', trigger: 'hover', mouseEnterDelay: 0 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const popup = document.querySelector('.hmfw-popconfirm')
    expect(popup?.classList.contains('hmfw-popconfirm-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('focus trigger uses focusin/focusout (works with nested input)', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', trigger: 'focus' },
      slots: { default: '<input />' },
      attachTo: document.body,
    })
    const input = wrapper.find('input').element
    input.dispatchEvent(new FocusEvent('focusin', { bubbles: true }))
    await nextTick()
    let popup = document.querySelector('.hmfw-popconfirm')
    expect(popup?.classList.contains('hmfw-popconfirm-hidden')).toBe(false)
    input.dispatchEvent(new FocusEvent('focusout', { bubbles: true }))
    await nextTick()
    popup = document.querySelector('.hmfw-popconfirm')
    expect(popup?.classList.contains('hmfw-popconfirm-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('respects custom zIndex', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true, zIndex: 9000 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const popup = document.querySelector('.hmfw-popconfirm') as HTMLElement
    expect(popup?.style.zIndex).toBe('9000')
    wrapper.unmount()
  })

  it('arrow=false hides arrow', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true, arrow: false },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popconfirm-arrow')).toBeNull()
    wrapper.unmount()
  })

  it('title as render function works', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: () => 'Rendered Title', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popconfirm-message-title')?.textContent).toContain('Rendered Title')
    wrapper.unmount()
  })

  it('icon slot overrides icon prop', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?', open: true },
      slots: { default: '<button>x</button>', icon: '<span class="my-icon">!</span>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popconfirm-message-icon .my-icon')).not.toBeNull()
    wrapper.unmount()
  })

  it('okButtonProps forwards to OK button', async () => {
    const wrapper = mount(Popconfirm, {
      props: {
        title: 'Sure?',
        open: true,
        okButtonProps: { loading: true },
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const buttons = document.querySelectorAll('.hmfw-popconfirm-buttons .hmfw-btn')
    const okButton = buttons[buttons.length - 1] as HTMLElement
    expect(okButton.classList.contains('hmfw-btn-loading')).toBe(true)
    wrapper.unmount()
  })

  it('emits afterOpenChange', async () => {
    const wrapper = mount(Popconfirm, {
      props: { title: 'Sure?' },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    vi.runAllTimers()
    await nextTick()
    expect(wrapper.emitted('afterOpenChange')).toBeTruthy()
    expect(wrapper.emitted('afterOpenChange')?.[0]).toEqual([true])
    wrapper.unmount()
  })
})
