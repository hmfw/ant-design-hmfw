import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { Popconfirm } from '../Popconfirm'
import { nextTick } from 'vue'

describe('Popconfirm', () => {
  afterEach(() => { document.body.innerHTML = '' })

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
})
