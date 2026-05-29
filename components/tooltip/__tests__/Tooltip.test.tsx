import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Tooltip } from '../Tooltip'
import { nextTick } from 'vue'

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders trigger element', () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip text' },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    expect(wrapper.find('button').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows tooltip on hover', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip text', mouseEnterDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const tooltip = document.querySelector('.hmfw-tooltip')
    expect(tooltip).not.toBeNull()
    wrapper.unmount()
  })

  it('hides tooltip on mouseleave', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip text', mouseEnterDelay: 0, mouseLeaveDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    await wrapper.find('div').trigger('mouseleave')
    vi.runAllTimers()
    await nextTick()
    const tooltip = document.querySelector('.hmfw-tooltip')
    expect(tooltip?.classList.contains('hmfw-tooltip-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('respects controlled open prop', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip text', open: true },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const tooltip = document.querySelector('.hmfw-tooltip')
    expect(tooltip?.classList.contains('hmfw-tooltip-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('does not show when disabled', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip text', disabled: true, mouseEnterDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const tooltip = document.querySelector('.hmfw-tooltip')
    expect(tooltip?.classList.contains('hmfw-tooltip-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('shows on click trigger', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip text', trigger: 'click' },
      slots: { default: '<button>click me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    const tooltip = document.querySelector('.hmfw-tooltip')
    expect(tooltip?.classList.contains('hmfw-tooltip-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('applies custom color', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip text', color: 'red', open: true },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const tooltip = document.querySelector('.hmfw-tooltip') as HTMLElement
    expect(tooltip?.style.getPropertyValue('--tooltip-bg')).toBe('red')
    wrapper.unmount()
  })

  it('renders slot title', async () => {
    const wrapper = mount(Tooltip, {
      props: { open: true },
      slots: {
        default: '<button>hover me</button>',
        title: '<span>custom title</span>',
      },
      attachTo: document.body,
    })
    await nextTick()
    const inner = document.querySelector('.hmfw-tooltip-inner')
    expect(inner?.innerHTML).toContain('custom title')
    wrapper.unmount()
  })
})
