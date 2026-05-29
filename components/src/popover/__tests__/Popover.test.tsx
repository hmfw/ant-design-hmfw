import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Popover } from '../Popover'
import { nextTick } from 'vue'

describe('Popover', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('renders trigger element', () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content' },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    expect(wrapper.find('button').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows popover on hover', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content', mouseEnterDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const popover = document.querySelector('.hmfw-popover')
    expect(popover?.classList.contains('hmfw-popover-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('hides popover on mouseleave', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content', mouseEnterDelay: 0, mouseLeaveDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    await wrapper.find('div').trigger('mouseleave')
    vi.runAllTimers()
    await nextTick()
    const popover = document.querySelector('.hmfw-popover')
    expect(popover?.classList.contains('hmfw-popover-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('renders title and content', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'My Title', content: 'My Content', open: true },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-title')?.textContent).toBe('My Title')
    expect(document.querySelector('.hmfw-popover-inner-content')?.textContent).toBe('My Content')
    wrapper.unmount()
  })

  it('renders slot title and content', async () => {
    const wrapper = mount(Popover, {
      props: { open: true },
      slots: {
        default: '<button>hover me</button>',
        title: '<strong>Slot Title</strong>',
        content: '<em>Slot Content</em>',
      },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-title')?.innerHTML).toContain('<strong>')
    expect(document.querySelector('.hmfw-popover-inner-content')?.innerHTML).toContain('<em>')
    wrapper.unmount()
  })

  it('shows on click trigger', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content', trigger: 'click' },
      slots: { default: '<button>click me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    const popover = document.querySelector('.hmfw-popover')
    expect(popover?.classList.contains('hmfw-popover-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('does not show when disabled', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content', disabled: true, mouseEnterDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const popover = document.querySelector('.hmfw-popover')
    expect(popover?.classList.contains('hmfw-popover-hidden')).toBe(true)
    wrapper.unmount()
  })
})
