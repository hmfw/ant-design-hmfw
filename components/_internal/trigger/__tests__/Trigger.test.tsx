import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { nextTick, h } from 'vue'
import { Trigger } from '../Trigger'

const popupSlot = () => h('div', { class: 'my-popup' }, 'Popup Content')

const mountTrigger = (props: Record<string, any> = {}) =>
  mount(Trigger, {
    props,
    slots: {
      default: () => h('button', 'Trigger'),
      popup: popupSlot,
    },
    attachTo: document.body,
  })

describe('Trigger', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('renders trigger element', () => {
    const wrapper = mountTrigger()
    expect(wrapper.find('button').exists()).toBe(true)
    wrapper.unmount()
  })

  it('opens on hover by default', async () => {
    const wrapper = mountTrigger({ mouseEnterDelay: 0 })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const popup = document.querySelector('.my-popup')
    expect(popup).not.toBeNull()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('closes on mouseleave', async () => {
    const wrapper = mountTrigger({ mouseEnterDelay: 0, mouseLeaveDelay: 0 })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    await wrapper.find('div').trigger('mouseleave')
    vi.runAllTimers()
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  it('opens on click trigger', async () => {
    const wrapper = mountTrigger({ trigger: 'click' })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('supports controlled open', async () => {
    const wrapper = mountTrigger({ open: true })
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    await wrapper.setProps({ open: false })
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  it('supports defaultOpen', async () => {
    const wrapper = mountTrigger({ defaultOpen: true })
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('emits openChange with source', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mountTrigger({ trigger: 'click', onOpenChange })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(onOpenChange).toHaveBeenCalledWith(true, { source: 'trigger' })
    wrapper.unmount()
  })

  it('does not open when disabled', async () => {
    const wrapper = mountTrigger({ trigger: 'click', disabled: true })
    await wrapper.find('div').trigger('click')
    await nextTick()
    // disabled 时不渲染弹层（destroyOnHidden 默认 false，但 visible 始终 false → hidden）
    const popup = document.querySelector('.my-popup')
    // 弹层节点存在但处于 hidden
    if (popup) expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  it('destroyOnHidden removes popup from DOM when closed', async () => {
    const wrapper = mountTrigger({ open: false, destroyOnHidden: true })
    await nextTick()
    expect(document.querySelector('.my-popup')).toBeNull()
    wrapper.unmount()
  })

  it('closes on Escape', async () => {
    const wrapper = mountTrigger({ trigger: 'click' })
    await wrapper.find('div').trigger('click')
    await nextTick()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  it('closeOnEscape=false keeps popup open', async () => {
    const wrapper = mountTrigger({ trigger: 'click', closeOnEscape: false })
    await wrapper.find('div').trigger('click')
    await nextTick()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('passes actualPlacement to popup slot', async () => {
    const received: string[] = []
    const wrapper = mount(Trigger, {
      props: { open: true, placement: 'bottomLeft' },
      slots: {
        default: () => h('button', 'Trigger'),
        popup: (ctx: { placement: string }) => {
          received.push(ctx.placement)
          return h('div', { class: 'my-popup' }, ctx.placement)
        },
      },
      attachTo: document.body,
    })
    await nextTick()
    expect(received).toContain('bottomLeft')
    wrapper.unmount()
  })

  it('supports focus trigger', async () => {
    const wrapper = mountTrigger({ trigger: 'focus' })
    await wrapper.find('div').trigger('focusin')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    await wrapper.find('div').trigger('focusout')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })
})
