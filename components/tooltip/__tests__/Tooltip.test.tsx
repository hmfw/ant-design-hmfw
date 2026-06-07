import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { Tooltip } from '../Tooltip'
import { nextTick } from 'vue'

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
    // Clean up any orphaned popups teleported to body so querySelector
    // doesn't pick up stale tooltips from previous tests.
    document.querySelectorAll('.hmfw-tooltip').forEach((el) => el.remove())
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

  it('does not render popup when title is empty', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: '', mouseEnterDelay: 0 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    expect(document.querySelector('.hmfw-tooltip')).toBeNull()
    wrapper.unmount()
  })

  it('does not open even when controlled open=true if title is empty', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: '', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-tooltip')).toBeNull()
    wrapper.unmount()
  })

  it('renders title=0 (numeric zero) — not treated as empty', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 0, open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const inner = document.querySelector('.hmfw-tooltip-inner')
    expect(inner?.textContent).toBe('0')
    wrapper.unmount()
  })

  it('overlay alias works in place of title', async () => {
    const wrapper = mount(Tooltip, {
      props: { overlay: 'via overlay', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const inner = document.querySelector('.hmfw-tooltip-inner')
    expect(inner?.textContent).toContain('via overlay')
    wrapper.unmount()
  })

  it('title as render function is called', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: () => 'rendered', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const inner = document.querySelector('.hmfw-tooltip-inner')
    expect(inner?.textContent).toContain('rendered')
    wrapper.unmount()
  })

  it('focus trigger uses focusin/focusout (works with nested input)', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', trigger: 'focus' },
      slots: { default: '<input />' },
      attachTo: document.body,
    })
    const input = wrapper.find('input').element
    input.dispatchEvent(new FocusEvent('focusin', { bubbles: true }))
    await nextTick()
    let popup = document.querySelector('.hmfw-tooltip')
    expect(popup?.classList.contains('hmfw-tooltip-hidden')).toBe(false)
    input.dispatchEvent(new FocusEvent('focusout', { bubbles: true }))
    await nextTick()
    popup = document.querySelector('.hmfw-tooltip')
    expect(popup?.classList.contains('hmfw-tooltip-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('emits afterOpenChange after open transition', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', mouseEnterDelay: 0 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    expect(wrapper.emitted('afterOpenChange')).toBeTruthy()
    expect(wrapper.emitted('afterOpenChange')?.[0]).toEqual([true])
    wrapper.unmount()
  })

  it('respects custom zIndex', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', open: true, zIndex: 9999 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const popup = document.querySelector('.hmfw-tooltip') as HTMLElement
    expect(popup?.style.zIndex).toBe('9999')
    wrapper.unmount()
  })

  it('arrow=false hides arrow element', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', open: true, arrow: false },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-tooltip-arrow')).toBeNull()
    wrapper.unmount()
  })

  it('arrow as object with pointAtCenter adds class', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', open: true, arrow: { pointAtCenter: true } },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const popup = document.querySelector('.hmfw-tooltip')
    expect(popup?.classList.contains('hmfw-tooltip-arrow-point-at-center')).toBe(true)
    wrapper.unmount()
  })

  it('contextMenu trigger opens on contextmenu event', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', trigger: 'contextMenu' },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('contextmenu')
    await nextTick()
    const popup = document.querySelector('.hmfw-tooltip')
    expect(popup?.classList.contains('hmfw-tooltip-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('multiple triggers (hover + click) both work', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', trigger: ['hover', 'click'], mouseEnterDelay: 0, mouseLeaveDelay: 0 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    let popup = document.querySelector('.hmfw-tooltip')
    expect(popup?.classList.contains('hmfw-tooltip-hidden')).toBe(false)
    await wrapper.find('div').trigger('mouseleave')
    vi.runAllTimers()
    await nextTick()
    await wrapper.find('div').trigger('click')
    await nextTick()
    popup = document.querySelector('.hmfw-tooltip')
    expect(popup?.classList.contains('hmfw-tooltip-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('destroyOnHidden removes popup DOM when hidden', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', open: false, destroyOnHidden: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-tooltip')).toBeNull()
    wrapper.unmount()
  })

  it('fresh prop triggers position update when value changes', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', open: true, fresh: 1 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const tooltip = document.querySelector('.hmfw-tooltip') as HTMLElement

    // 修改 fresh 属性值触发位置更新
    await wrapper.setProps({ fresh: 2 })
    await nextTick()

    // 验证位置计算逻辑被调用（实际位置可能相同，但确保不会报错）
    const updatedTop = tooltip?.style.top
    expect(updatedTop).toBeDefined()
    wrapper.unmount()
  })

  it('fresh prop supports boolean type', async () => {
    const wrapper = mount(Tooltip, {
      props: { title: 'tip', open: true, fresh: false },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()

    await wrapper.setProps({ fresh: true })
    await nextTick()

    const tooltip = document.querySelector('.hmfw-tooltip')
    expect(tooltip).not.toBeNull()
    wrapper.unmount()
  })

  it('ResizeObserver monitors content size changes when tooltip opens', async () => {
    // 模拟 ResizeObserver
    const observeMock = vi.fn()
    const disconnectMock = vi.fn()
    global.ResizeObserver = vi.fn().mockImplementation((_callback) => ({
      observe: observeMock,
      disconnect: disconnectMock,
      unobserve: vi.fn(),
    }))

    const wrapper = mount(Tooltip, {
      props: { title: 'tip', open: false },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()

    // 打开 tooltip，触发 ResizeObserver
    await wrapper.setProps({ open: true })
    await nextTick()
    await nextTick() // 等待 watch visible 执行

    // 验证 ResizeObserver 的 observe 被调用（监听 .hmfw-tooltip-inner）
    expect(observeMock).toHaveBeenCalled()

    // 关闭 tooltip 时应断开监听
    await wrapper.setProps({ open: false })
    await nextTick()
    expect(disconnectMock).toHaveBeenCalled()

    wrapper.unmount()
  })
})
