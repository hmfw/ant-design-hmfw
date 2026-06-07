import { mount } from '@vue/test-utils'
import { describe, it, expect, afterEach } from 'vitest'
import { nextTick, h } from 'vue'
import { Drawer, drawerManager } from '../index'

// Clean up teleported nodes + restore body overflow between tests
afterEach(() => {
  document.querySelectorAll('.hmfw-drawer-root, .hmfw-drawer-mask').forEach((n) => n.remove())
  document.body.style.overflow = ''
})

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

  it('does not render when open=false (and never opened)', () => {
    const wrapper = mount(Drawer, { props: { open: false }, attachTo: document.body })
    expect(document.querySelector('.hmfw-drawer-content-wrapper')).toBeFalsy()
    wrapper.unmount()
  })

  it('shows title from prop and slot', () => {
    const w1 = mount(Drawer, { props: { open: true, title: 'My Drawer' }, attachTo: document.body })
    expect(document.querySelector('.hmfw-drawer-title')?.textContent).toBe('My Drawer')
    w1.unmount()
    const w2 = mount(Drawer, {
      props: { open: true },
      slots: { title: 'Slot Title' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-title')?.textContent).toBe('Slot Title')
    w2.unmount()
  })

  it('emits close (with event) and update:open on close button click', () => {
    const wrapper = mount(Drawer, { props: { open: true }, attachTo: document.body })
    const closeBtn = document.querySelector('.hmfw-drawer-close') as HTMLElement
    closeBtn?.click()
    expect(wrapper.emitted('close')).toBeTruthy()
    expect(wrapper.emitted('close')![0][0]).toBeInstanceOf(MouseEvent)
    expect(wrapper.emitted('update:open')![0]).toEqual([false])
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

  it('renders close icon via Icon (svg), not the literal ×', () => {
    const wrapper = mount(Drawer, { props: { open: true }, attachTo: document.body })
    const closeBtn = document.querySelector('.hmfw-drawer-close') as HTMLElement
    expect(closeBtn.querySelector('svg')).toBeTruthy()
    expect(closeBtn.textContent).not.toBe('×')
    wrapper.unmount()
  })

  it('hides close button when closable=false', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, title: 'x', closable: false },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-close')).toBeFalsy()
    wrapper.unmount()
  })

  it('closes on mask click when maskClosable (default)', () => {
    const wrapper = mount(Drawer, { props: { open: true }, attachTo: document.body })
    ;(document.querySelector('.hmfw-drawer-mask') as HTMLElement)?.click()
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })

  it('does not close on mask click when maskClosable=false', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, maskClosable: false },
      attachTo: document.body,
    })
    ;(document.querySelector('.hmfw-drawer-mask') as HTMLElement)?.click()
    expect(wrapper.emitted('close')).toBeFalsy()
    wrapper.unmount()
  })

  it('does not render mask when mask=false', () => {
    const wrapper = mount(Drawer, { props: { open: true, mask: false }, attachTo: document.body })
    expect(document.querySelector('.hmfw-drawer-mask')).toBeFalsy()
    expect(document.querySelector('.hmfw-drawer-no-mask')).toBeTruthy()
    wrapper.unmount()
  })

  it('closes on Escape when keyboard (default)', async () => {
    const wrapper = mount(Drawer, { props: { open: true }, attachTo: document.body })
    const root = document.querySelector('.hmfw-drawer-root') as HTMLElement
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await nextTick()
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })

  it('does not close on Escape when keyboard=false', async () => {
    const wrapper = mount(Drawer, {
      props: { open: true, keyboard: false },
      attachTo: document.body,
    })
    const root = document.querySelector('.hmfw-drawer-root') as HTMLElement
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await nextTick()
    expect(wrapper.emitted('close')).toBeFalsy()
    wrapper.unmount()
  })

  it('locks body scroll while open and restores on close', async () => {
    const wrapper = mount(Drawer, { props: { open: false }, attachTo: document.body })
    await wrapper.setProps({ open: true })
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')
    await wrapper.setProps({ open: false })
    await nextTick()
    expect(document.body.style.overflow).toBe('')
    wrapper.unmount()
  })

  it('does not lock body scroll when mask=false', async () => {
    const wrapper = mount(Drawer, { props: { open: false, mask: false }, attachTo: document.body })
    await wrapper.setProps({ open: true })
    await nextTick()
    expect(document.body.style.overflow).toBe('')
    wrapper.unmount()
  })

  it('resolves size preset large → 736px and default → 378px', () => {
    const large = mount(Drawer, { props: { open: true, size: 'large' }, attachTo: document.body })
    expect((document.querySelector('.hmfw-drawer-content-wrapper') as HTMLElement).style.width).toBe('736px')
    large.unmount()
    const def = mount(Drawer, { props: { open: true }, attachTo: document.body })
    expect((document.querySelector('.hmfw-drawer-content-wrapper') as HTMLElement).style.width).toBe('378px')
    def.unmount()
  })

  it('resolves numeric size and custom string size', () => {
    const num = mount(Drawer, { props: { open: true, size: 500 }, attachTo: document.body })
    expect((document.querySelector('.hmfw-drawer-content-wrapper') as HTMLElement).style.width).toBe('500px')
    num.unmount()
    const str = mount(Drawer, { props: { open: true, size: '50%' }, attachTo: document.body })
    expect((document.querySelector('.hmfw-drawer-content-wrapper') as HTMLElement).style.width).toBe('50%')
    str.unmount()
  })

  it('uses height for top/bottom placement', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, placement: 'top', height: 200 },
      attachTo: document.body,
    })
    const wrap = document.querySelector('.hmfw-drawer-content-wrapper') as HTMLElement
    expect(wrap.style.height).toBe('200px')
    expect(wrap.style.width).toBe('')
    wrapper.unmount()
  })

  it('renders footer and extra slots', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, title: 't' },
      slots: { footer: '<button>OK</button>', extra: '<a>more</a>' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-footer')?.textContent).toBe('OK')
    expect(document.querySelector('.hmfw-drawer-extra')?.textContent).toBe('more')
    wrapper.unmount()
  })

  it('shows Skeleton when loading', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, loading: true },
      slots: { default: '<p class="real">content</p>' },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-skeleton')).toBeTruthy()
    expect(document.querySelector('.real')).toBeFalsy()
    wrapper.unmount()
  })

  it('renders no header when nothing to show', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, closable: false },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-header')).toBeFalsy()
    wrapper.unmount()
  })

  it('emits afterOpenChange after toggling', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Drawer, { props: { open: false }, attachTo: document.body })
    await wrapper.setProps({ open: true })
    await nextTick()
    vi.runAllTimers()
    expect(wrapper.emitted('afterOpenChange')).toBeTruthy()
    expect(wrapper.emitted('afterOpenChange')![0]).toEqual([true])
    vi.useRealTimers()
    wrapper.unmount()
  })

  it('works uncontrolled with defaultOpen', () => {
    const wrapper = mount(Drawer, { props: { defaultOpen: true }, attachTo: document.body })
    expect(document.querySelector('.hmfw-drawer-content-wrapper')).toBeTruthy()
    ;(document.querySelector('.hmfw-drawer-close') as HTMLElement)?.click()
    expect(wrapper.emitted('update:open')![0]).toEqual([false])
    wrapper.unmount()
  })

  it('destroyOnHidden removes children while closed', async () => {
    const wrapper = mount(Drawer, {
      props: { open: true, destroyOnHidden: true, forceRender: true },
      slots: { default: '<p class="kid">hi</p>' },
      attachTo: document.body,
    })
    expect(document.querySelector('.kid')).toBeTruthy()
    await wrapper.setProps({ open: false })
    await nextTick()
    expect(document.querySelector('.kid')).toBeFalsy()
    wrapper.unmount()
  })

  it('uses a custom close icon', () => {
    const wrapper = mount(Drawer, {
      props: { open: true, closeIcon: () => h('span', { class: 'my-close' }, 'X') },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-drawer-close .my-close')).toBeTruthy()
    wrapper.unmount()
  })

  it('applies contentWrapperStyle to content-wrapper', () => {
    const wrapper = mount(Drawer, {
      props: {
        open: true,
        contentWrapperStyle: { backgroundColor: 'rgb(255, 0, 0)', border: '2px solid blue' },
      },
      attachTo: document.body,
    })
    const contentWrapper = document.querySelector('.hmfw-drawer-content-wrapper') as HTMLElement
    expect(contentWrapper).toBeTruthy()
    expect(contentWrapper.style.backgroundColor).toBe('rgb(255, 0, 0)')
    expect(contentWrapper.style.border).toBe('2px solid blue')
    wrapper.unmount()
  })

  it('manages zIndex for multiple drawers (later drawer has higher zIndex)', async () => {
    // 打开第一个 Drawer
    const wrapper1 = mount(Drawer, { props: { open: true, zIndex: 1000 }, attachTo: document.body })
    await nextTick()
    const root1 = document.querySelectorAll('.hmfw-drawer-root')[0] as HTMLElement
    const zIndex1 = parseInt(root1.style.zIndex)

    // 打开第二个 Drawer
    const wrapper2 = mount(Drawer, { props: { open: true, zIndex: 1000 }, attachTo: document.body })
    await nextTick()
    const root2 = document.querySelectorAll('.hmfw-drawer-root')[1] as HTMLElement
    const zIndex2 = parseInt(root2.style.zIndex)

    // 第二个 Drawer 的 zIndex 应该更高
    expect(zIndex2).toBeGreaterThan(zIndex1)
    expect(zIndex2 - zIndex1).toBe(2) // 每个 Drawer 占用 2 层

    wrapper2.unmount()
    wrapper1.unmount()
  })

  it('reuses zIndex slots when drawer is closed', async () => {
    const wrapper1 = mount(Drawer, { props: { open: true, zIndex: 1000 }, attachTo: document.body })
    await nextTick()
    const wrapper2 = mount(Drawer, { props: { open: true, zIndex: 1000 }, attachTo: document.body })
    await nextTick()

    const initialManagerSize = drawerManager.size

    // 关闭第二个 Drawer
    wrapper2.unmount()
    await nextTick()

    // Manager 中的 Drawer 数量应该减少
    expect(drawerManager.size).toBe(initialManagerSize - 1)

    wrapper1.unmount()
  })
})
