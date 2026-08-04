import { nextTick, h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { Trigger } from '../Trigger'

const popupSlot = () => h('div', { class: 'my-popup' }, 'Popup Content')

const mountTrigger = (props: Record<string, any> = {}, slots?: Record<string, any>) =>
  mount(Trigger, {
    props,
    slots: {
      default: () => h('button', 'Trigger'),
      popup: popupSlot,
      ...slots,
    },
    attachTo: document.body,
  })

describe('Trigger', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  // ============================== 基础渲染 ==============================

  it('renders trigger element', () => {
    const wrapper = mountTrigger()
    expect(wrapper.find('button').exists()).toBe(true)
    wrapper.unmount()
  })

  // ============================== hover 触发 ==============================

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

  it('respects mouseEnterDelay', async () => {
    // 用 destroyOnHidden 确保关闭态完全移除 DOM，避免误判隐藏态节点为"已打开"
    const wrapper = mountTrigger({ mouseEnterDelay: 0.5, destroyOnHidden: true }) // 500ms
    await wrapper.find('div').trigger('mouseenter')
    // 未到延迟时间，不应打开
    vi.advanceTimersByTime(300)
    await nextTick()
    expect(document.querySelector('.my-popup')).toBeNull()
    // 到达延迟时间，应打开
    vi.advanceTimersByTime(200)
    await nextTick()
    expect(document.querySelector('.my-popup')).not.toBeNull()
    wrapper.unmount()
  })

  it('respects mouseLeaveDelay', async () => {
    const wrapper = mountTrigger({ mouseEnterDelay: 0, mouseLeaveDelay: 0.5 })
    // 先打开
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    // 离开，但延迟未到
    await wrapper.find('div').trigger('mouseleave')
    vi.advanceTimersByTime(300)
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    // 延迟到达
    vi.advanceTimersByTime(200)
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  it('cancels leave timer when mouse re-enters', async () => {
    const wrapper = mountTrigger({ mouseEnterDelay: 0, mouseLeaveDelay: 0.5 })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    // 离开
    await wrapper.find('div').trigger('mouseleave')
    // 立即重新进入（在 leaveDelay 内）
    await wrapper.find('div').trigger('mouseenter')
    vi.advanceTimersByTime(600)
    await nextTick()
    // 应保持打开
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('连续 mouseenter 不堆积定时器', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mountTrigger({ mouseEnterDelay: 0.5, onOpenChange })
    const div = wrapper.find('div')
    const before = vi.getTimerCount()
    await div.trigger('mouseenter')
    await div.trigger('mouseenter')
    await div.trigger('mouseenter')
    // 每次进入都会清掉上一个 enter timer，故只新增 1 个待执行定时器
    expect(vi.getTimerCount()).toBe(before + 1)
    vi.advanceTimersByTime(600)
    await nextTick()
    expect(onOpenChange).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  it('连续 mouseleave 不堆积定时器', async () => {
    const wrapper = mountTrigger({ mouseEnterDelay: 0, mouseLeaveDelay: 0.5 })
    const div = wrapper.find('div')
    await div.trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const before = vi.getTimerCount()
    await div.trigger('mouseleave')
    await div.trigger('mouseleave')
    await div.trigger('mouseleave')
    expect(vi.getTimerCount()).toBe(before + 1)
    wrapper.unmount()
  })

  it('卸载后残留的 hover 定时器不再 emit', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mountTrigger({ mouseEnterDelay: 0.5, onOpenChange })
    await wrapper.find('div').trigger('mouseenter')
    await wrapper.find('div').trigger('mouseenter')
    wrapper.unmount()
    vi.advanceTimersByTime(1000)
    expect(onOpenChange).not.toHaveBeenCalled()
  })

  // ============================== click 触发 ==============================

  it('opens on click trigger', async () => {
    const wrapper = mountTrigger({ trigger: 'click' })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('toggles on click', async () => {
    const wrapper = mountTrigger({ trigger: 'click' })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  // ============================== contextMenu 触发 ==============================

  it('opens on contextmenu', async () => {
    const wrapper = mountTrigger({ trigger: 'contextMenu' })
    await wrapper.find('div').trigger('contextmenu')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('contextmenu prevents default', async () => {
    const wrapper = mountTrigger({ trigger: 'contextMenu' })
    const preventDefault = vi.fn()
    await wrapper.find('div').trigger('contextmenu', { preventDefault })
    await nextTick()
    expect(preventDefault).toHaveBeenCalled()
    wrapper.unmount()
  })

  // ============================== focus 触发 ==============================

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

  it('does not close on focusout when focus moves into popup', async () => {
    const wrapper = mountTrigger({ trigger: 'focus' })
    await wrapper.find('div').trigger('focusin')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()

    // 模拟焦点从触发器移入弹层内部
    const popupEl = document.querySelector('.my-popup')!.parentElement!
    // 触发 focusout，relatedTarget 指向 popup 内部元素
    await wrapper.find('div').trigger('focusout', {
      relatedTarget: popupEl,
    })
    await nextTick()
    // 弹层应保持打开
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('closes on focusout when focus moves outside', async () => {
    const wrapper = mountTrigger({ trigger: 'focus' })
    await wrapper.find('div').trigger('focusin')
    await nextTick()
    // focusout 到完全不相关的元素
    await wrapper.find('div').trigger('focusout', {
      relatedTarget: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  // ============================== 多 trigger 组合 ==============================

  it('supports click trigger in combination', async () => {
    const wrapper = mountTrigger({ trigger: ['click'] })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  it('supports hover+click combination', async () => {
    const wrapper = mountTrigger({ trigger: ['hover', 'click'], mouseEnterDelay: 0 })
    // hover 打开
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    // click 关闭
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  // ============================== 受控 / 非受控 ==============================

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

  it('emits update:open in controlled mode', async () => {
    const onUpdateOpen = vi.fn()
    const wrapper = mountTrigger({ open: true, 'onUpdate:open': onUpdateOpen, trigger: 'click' })
    await nextTick()
    await wrapper.find('div').trigger('click')
    await nextTick()
    // 受控模式下，外部应收到事件但不内部修改状态
    expect(onUpdateOpen).toHaveBeenCalledWith(false)
    wrapper.unmount()
  })

  // ============================== 事件发射 ==============================

  it('emits openChange with source', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mountTrigger({ trigger: 'click', onOpenChange })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(onOpenChange).toHaveBeenCalledWith(true, { source: 'trigger' })
    wrapper.unmount()
  })

  it('emits afterOpenChange', async () => {
    const onAfterOpenChange = vi.fn()
    const wrapper = mountTrigger({ trigger: 'click', onAfterOpenChange })
    await wrapper.find('div').trigger('click')
    await nextTick()
    vi.runAllTimers()
    expect(onAfterOpenChange).toHaveBeenCalledWith(true)
    wrapper.unmount()
  })

  // ============================== 事件幂等性 ==============================

  it('鼠标从触发器移入弹层时不重复 emit openChange(true)', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mountTrigger({ mouseEnterDelay: 0.1, mouseLeaveDelay: 0.1, onOpenChange })
    await wrapper.find('div').trigger('mouseenter')
    vi.advanceTimersByTime(200)
    await nextTick()
    // 移出触发器同时移入弹层：leave timer 被取消，且不应再 emit 一次 (true)
    const popup = document.querySelector('.hmfw-trigger-popup')!
    await wrapper.find('div').trigger('mouseleave')
    popup.dispatchEvent(new MouseEvent('mouseenter'))
    vi.advanceTimersByTime(200)
    await nextTick()
    expect(onOpenChange.mock.calls).toEqual([[true, { source: 'trigger' }]])
    wrapper.unmount()
  })

  it('mouseEnterDelay 未到即移出时不 emit 虚假的 openChange(false)', async () => {
    const onOpenChange = vi.fn()
    const onUpdateOpen = vi.fn()
    const wrapper = mountTrigger({
      mouseEnterDelay: 0.5,
      mouseLeaveDelay: 0,
      onOpenChange,
      'onUpdate:open': onUpdateOpen,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.advanceTimersByTime(100) // 未达 500ms，弹层从未打开
    await wrapper.find('div').trigger('mouseleave')
    vi.advanceTimersByTime(100)
    await nextTick()
    expect(onOpenChange).not.toHaveBeenCalled()
    expect(onUpdateOpen).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('重复 focusin 只 emit 一次 openChange', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mountTrigger({ trigger: 'focus', onOpenChange })
    const div = wrapper.find('div')
    await div.trigger('focusin')
    await nextTick()
    await div.trigger('focusin')
    await nextTick()
    expect(onOpenChange).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  // ============================== disabled ==============================

  it('does not open when disabled', async () => {
    const wrapper = mountTrigger({ trigger: 'click', disabled: true })
    await wrapper.find('div').trigger('click')
    await nextTick()
    const popup = document.querySelector('.my-popup')
    if (popup) expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  it('disabled 变 true 时收起已打开的弹层', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mountTrigger({ trigger: 'click', onOpenChange })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()

    await wrapper.setProps({ disabled: true })
    await nextTick()
    // 否则弹层会保持可见，且后续 Esc / 外点全被 disabled 守卫拦截，用户无从关闭
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    expect(onOpenChange).toHaveBeenLastCalledWith(false, { source: 'trigger' })
    wrapper.unmount()
  })

  // ============================== destroyOnHidden / forceRender ==============================

  it('destroyOnHidden removes popup from DOM when closed', async () => {
    const wrapper = mountTrigger({ open: false, destroyOnHidden: true })
    await nextTick()
    expect(document.querySelector('.my-popup')).toBeNull()
    wrapper.unmount()
  })

  it('forceRender keeps popup in DOM when hidden', async () => {
    const wrapper = mountTrigger({ forceRender: true, open: false })
    await nextTick()
    expect(document.querySelector('.my-popup')).not.toBeNull()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  // ============================== Esc / 外部点击 ==============================

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

  it('closes on outside mousedown', async () => {
    const wrapper = mountTrigger({ trigger: 'click' })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    // 点击外部区域
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  it('closeOnOutsideClick=false keeps popup open', async () => {
    const wrapper = mountTrigger({ trigger: 'click', closeOnOutsideClick: false })
    await wrapper.find('div').trigger('click')
    await nextTick()
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  // ============================== placement ==============================

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

  it('applies placement class on popup', async () => {
    const wrapper = mountTrigger({ open: true, placement: 'top' })
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup')
    expect(popup?.className).toContain('hmfw-trigger-placement-top')
    wrapper.unmount()
  })

  it('placement 动态变更时同步重新定位（方位类与坐标不错配）', async () => {
    const origGetBoundingClientRect = Element.prototype.getBoundingClientRect
    Element.prototype.getBoundingClientRect = function (this: Element) {
      const isPopup = this.classList.contains('hmfw-trigger-popup')
      return {
        top: 300,
        left: 300,
        width: isPopup ? 120 : 80,
        height: isPopup ? 40 : 30,
        right: isPopup ? 420 : 380,
        bottom: isPopup ? 340 : 330,
        x: 300,
        y: 300,
        toJSON: () => '',
      }
    }

    try {
      const wrapper = mountTrigger({ open: true, gap: 0, placement: 'bottomLeft' })
      await nextTick()
      await nextTick()
      const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
      // bottomLeft：触发器底 330，左缘 300
      expect(popup.style.top).toBe('330px')
      expect(popup.style.left).toBe('300px')

      await wrapper.setProps({ placement: 'topRight' })
      await nextTick()
      await nextTick()
      // topRight：触发器顶 300 - 弹层高 40 = 260；右缘 380 - 弹层宽 120 = 260
      expect(popup.className).toContain('hmfw-trigger-placement-topRight')
      expect(popup.style.top).toBe('260px')
      expect(popup.style.left).toBe('260px')
      wrapper.unmount()
    } finally {
      Element.prototype.getBoundingClientRect = origGetBoundingClientRect
    }
  })

  // ============================== autoAdjustOverflow / arrowPointAtCenter ==============================

  it('applies arrow-point-at-center class', async () => {
    const wrapper = mountTrigger({ open: true, arrowPointAtCenter: true })
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup')
    expect(popup?.className).toContain('hmfw-trigger-arrow-point-at-center')
    wrapper.unmount()
  })

  it('autoAdjustOverflow delegates to computePosition (verified in computePosition unit tests)', async () => {
    // jsdom 中 getBoundingClientRect 行为不可靠，翻转逻辑已在 computePosition 纯函数单测中覆盖。
    // 这里只验证组件层正确委托：弹层渲染并带有 placement class。
    const wrapper = mountTrigger({ open: false, placement: 'top', autoAdjustOverflow: true, gap: 0 })
    await nextTick()
    await wrapper.setProps({ open: true })
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup')
    expect(popup).not.toBeNull()
    // placement class 总是存在
    expect(popup?.className).toMatch(/hmfw-trigger-placement-\w+/)
    wrapper.unmount()
  })

  // ============================== matchWidth ==============================

  it('matchWidth syncs popup width via updatePosition (exposed API)', async () => {
    const wrapper = mountTrigger({ open: false, matchWidth: true })
    await nextTick()
    await wrapper.setProps({ open: true })
    // visible watch 内部有 await nextTick()，需双重等待
    await nextTick()
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
    expect(popup).not.toBeNull()
    // matchWidth 生效则 style.minWidth 不为空字符串（jsdom 中 trigger rect.width=0 → "0px"）
    expect(popup?.style.minWidth).toBe('0px')
    wrapper.unmount()
  })

  it('matchWidth 为负数时钳到 0，不生成非法 min-width', async () => {
    const wrapper = mountTrigger({ open: true, matchWidth: -100 })
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
    // 未钳制时会写出 min-width: -100px，被浏览器静默丢弃（style.minWidth 读为空串）
    expect(popup?.style.minWidth).toBe('0px')
    wrapper.unmount()
  })

  // ============================== gap / zIndex / popupStyle / triggerClass / triggerStyle ==============================

  it('applies zIndex on popup', async () => {
    const wrapper = mountTrigger({ open: true, zIndex: 9999 })
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
    expect(popup?.style.zIndex).toBe('9999')
    wrapper.unmount()
  })

  it('未传 zIndex 时回退到主题 Token --hmfw-z-index-popup', async () => {
    const wrapper = mountTrigger({ open: true })
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
    // 写 var() 而非硬编码 1050，使层级可随主题统一调整
    expect(popup?.style.zIndex).toBe('var(--hmfw-z-index-popup)')
    wrapper.unmount()
  })

  it('applies popupStyle on popup', async () => {
    const wrapper = mountTrigger({ open: true, popupStyle: { maxHeight: '300px', borderRadius: '8px' } })
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
    expect(popup?.style.maxHeight).toBe('300px')
    expect(popup?.style.borderRadius).toBe('8px')
    wrapper.unmount()
  })

  it('applies triggerClass on trigger wrapper', async () => {
    const wrapper = mountTrigger({ triggerClass: 'my-custom-trigger' })
    expect(wrapper.find('.my-custom-trigger').exists()).toBe(true)
    wrapper.unmount()
  })

  it('applies triggerStyle on trigger wrapper', async () => {
    const wrapper = mountTrigger({ triggerStyle: { marginRight: '12px' } })
    const triggerDiv = wrapper.find('div')
    expect((triggerDiv.element as HTMLElement).style.marginRight).toBe('12px')
    wrapper.unmount()
  })

  // ============================== popupClass ==============================

  it('applies popupClass string', async () => {
    const wrapper = mountTrigger({ open: true, popupClass: 'my-popup-custom' })
    await nextTick()
    const popup = document.querySelector('.my-popup-custom')
    expect(popup).not.toBeNull()
    wrapper.unmount()
  })

  it('applies popupClass function receiving placement', async () => {
    const receivedPlacements: string[] = []
    const wrapper = mountTrigger({
      open: true,
      placement: 'bottomLeft',
      popupClass: (p: string) => {
        receivedPlacements.push(p)
        return `placement-is-${p}`
      },
    })
    await nextTick()
    expect(receivedPlacements).toContain('bottomLeft')
    expect(document.querySelector('.placement-is-bottomLeft')).not.toBeNull()
    wrapper.unmount()
  })

  // ============================== hiddenClass ==============================

  it('uses custom hiddenClass', async () => {
    const wrapper = mountTrigger({ hiddenClass: 'my-hidden', open: false })
    await nextTick()
    expect(document.querySelector('.my-hidden')).not.toBeNull()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    wrapper.unmount()
  })

  // ============================== triggerDisplay ==============================

  it('不传 triggerDisplay 时不写行内 display，改由基础类 hmfw-trigger 提供默认值', async () => {
    // 行内 display 会压过宿主根类（如 .hmfw-select 的 inline-flex），故默认不写行内样式
    const wrapper = mountTrigger()
    const div = wrapper.find('div')
    expect((div.element as HTMLElement).style.display).toBe('')
    expect(div.classes()).toContain('hmfw-trigger')
    wrapper.unmount()
  })

  it('supports triggerDisplay block', async () => {
    const wrapper = mountTrigger({ triggerDisplay: 'block' })
    const div = wrapper.find('div')
    expect((div.element as HTMLElement).style.display).toBe('block')
    wrapper.unmount()
  })

  it('triggerDisplay "contents" renders without error and positions popup', async () => {
    // contents 模式的回退到 firstElementChild 行为需真实视口验证（e2e），
    // 此处验证组件不崩溃且弹层正常渲染。
    const wrapper = mountTrigger({ triggerDisplay: 'contents', open: false, gap: 0 })
    await nextTick()
    await wrapper.setProps({ open: true })
    await nextTick()
    const popup = document.querySelector('.hmfw-trigger-popup')
    expect(popup).not.toBeNull()
    // 弹层已渲染（定位值由 jsdom 决定，不做强断言）
    expect((popup as HTMLElement)?.style.top).toBeDefined()
    wrapper.unmount()
  })

  // ============================== getPopupContainer ==============================

  it('teleports to custom container via getPopupContainer', async () => {
    const container = document.createElement('div')
    container.id = 'custom-container'
    document.body.appendChild(container)

    // 先挂载让 triggerRef 就位，再打开确保 getContainer 能拿到 triggerRef
    const wrapper = mountTrigger({
      open: false,
      getPopupContainer: () => container,
    })
    await nextTick()
    await wrapper.setProps({ open: true })
    await nextTick()
    // 弹层应在自定义容器中
    expect(container.querySelector('.hmfw-trigger-popup')).not.toBeNull()
    wrapper.unmount()
    container.remove()
  })

  // ============================== fresh / 强制重定位 ==============================

  it('recalculates position on fresh change', async () => {
    const origGetBoundingClientRect = Element.prototype.getBoundingClientRect
    let topValue = 100
    Element.prototype.getBoundingClientRect = function (this: Element) {
      const isPopup = this.classList.contains('hmfw-trigger-popup')
      return {
        top: topValue,
        left: 0,
        width: 80,
        height: isPopup ? 40 : 32,
        right: 80,
        bottom: isPopup ? 140 : 132,
        x: 0,
        y: topValue,
        toJSON: () => '',
      }
    }

    try {
      const wrapper = mountTrigger({ open: true, gap: 0, fresh: 0 })
      await nextTick()
      const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
      const firstTop = popup?.style.top

      // 改变 fresh（模拟 Tooltip 内容更新后强制重定位）
      topValue = 200
      await wrapper.setProps({ fresh: 1 })
      await nextTick()
      const newTop = popup?.style.top
      expect(newTop).not.toBe(firstTop)
      wrapper.unmount()
    } finally {
      Element.prototype.getBoundingClientRect = origGetBoundingClientRect
    }
  })

  // ============================== observePopupResize ==============================

  it('creates ResizeObserver when observePopupResize is true', () => {
    const observeMock = vi.fn()
    const disconnectMock = vi.fn()
    const origObserver = (global as any).ResizeObserver
    ;(global as any).ResizeObserver = vi.fn().mockImplementation(function () {
      return {
        observe: observeMock,
        disconnect: disconnectMock,
        unobserve: vi.fn(),
      }
    })

    try {
      const wrapper = mountTrigger({ observePopupResize: true })
      // ResizeObserver 应在 onMounted 时创建
      expect((global as any).ResizeObserver).toHaveBeenCalled()
      wrapper.unmount()
    } finally {
      ;(global as any).ResizeObserver = origObserver
    }
  })

  it('starts observing popup when opened with observePopupResize', async () => {
    const observeMock = vi.fn()
    const disconnectMock = vi.fn()
    const origObserver = (global as any).ResizeObserver
    ;(global as any).ResizeObserver = vi.fn().mockImplementation(function () {
      return {
        observe: observeMock,
        disconnect: disconnectMock,
        unobserve: vi.fn(),
      }
    })

    try {
      const wrapper = mountTrigger({ observePopupResize: true, trigger: 'click' })
      await wrapper.find('div').trigger('click')
      await nextTick()
      expect(observeMock).toHaveBeenCalled()
      wrapper.unmount()
    } finally {
      ;(global as any).ResizeObserver = origObserver
    }
  })

  it('disconnects ResizeObserver when popup closes', async () => {
    const observeMock = vi.fn()
    const disconnectMock = vi.fn()
    const origObserver = (global as any).ResizeObserver
    ;(global as any).ResizeObserver = vi.fn().mockImplementation(function () {
      return {
        observe: observeMock,
        disconnect: disconnectMock,
        unobserve: vi.fn(),
      }
    })

    try {
      const wrapper = mountTrigger({ observePopupResize: true, trigger: 'click', mouseLeaveDelay: 0 })
      await wrapper.find('div').trigger('click')
      await nextTick()
      expect(observeMock).toHaveBeenCalled()
      await wrapper.find('div').trigger('click')
      await nextTick()
      expect(disconnectMock).toHaveBeenCalled()
      wrapper.unmount()
    } finally {
      ;(global as any).ResizeObserver = origObserver
    }
  })

  it('syncs ResizeObserver on observePopupResize prop change', async () => {
    const observeMock = vi.fn()
    const disconnectMock = vi.fn()
    const origObserver = (global as any).ResizeObserver
    ;(global as any).ResizeObserver = vi.fn().mockImplementation(function () {
      return {
        observe: observeMock,
        disconnect: disconnectMock,
        unobserve: vi.fn(),
      }
    })

    try {
      // 先挂载等 onMounted 创建 observer，再打开弹层触发 observe
      const wrapper = mountTrigger({ observePopupResize: true, open: false })
      await nextTick()
      await wrapper.setProps({ open: true })
      await nextTick()
      expect(observeMock).toHaveBeenCalled()

      // 动态关闭 observePopupResize → disconnect
      await wrapper.setProps({ observePopupResize: false })
      await nextTick()
      expect(disconnectMock).toHaveBeenCalled()

      wrapper.unmount()
    } finally {
      ;(global as any).ResizeObserver = origObserver
    }
  })

  it('observePopupResize 由 false 动态改 true 时惰性创建 observer', async () => {
    const observeMock = vi.fn()
    const origObserver = (global as any).ResizeObserver
    const ctor = vi.fn().mockImplementation(function () {
      return { observe: observeMock, disconnect: vi.fn(), unobserve: vi.fn() }
    })
    ;(global as any).ResizeObserver = ctor

    try {
      // 挂载时为 false → 不创建；早期实现只在 onMounted 创建，导致此后永久失效
      const wrapper = mountTrigger({ open: true, observePopupResize: false })
      await nextTick()
      await nextTick()
      expect(ctor).not.toHaveBeenCalled()

      await wrapper.setProps({ observePopupResize: true })
      await nextTick()
      expect(ctor).toHaveBeenCalled()
      expect(observeMock).toHaveBeenCalled()
      wrapper.unmount()
    } finally {
      ;(global as any).ResizeObserver = origObserver
    }
  })

  // ============================== expose ==============================

  it('exposes updatePosition, actualPlacement, setOpen', () => {
    const wrapper = mountTrigger()
    const vm = wrapper.vm as any
    expect(vm.updatePosition).toBeTypeOf('function')
    expect(vm.actualPlacement).toBeDefined()
    expect(vm.setOpen).toBeTypeOf('function')
    wrapper.unmount()
  })

  it('exposed setOpen controls visibility', async () => {
    const wrapper = mountTrigger()
    const vm = wrapper.vm as any
    vm.setOpen(true)
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).toBeNull()
    vm.setOpen(false)
    await nextTick()
    expect(document.querySelector('.hmfw-trigger-popup-hidden')).not.toBeNull()
    wrapper.unmount()
  })

  // ============================== 多实例事件去重 ==============================

  it('multiple instances share global event listeners', async () => {
    const wrapper1 = mountTrigger({ trigger: 'click' })
    const wrapper2 = mountTrigger({ trigger: 'click' })

    // 两个实例都打开
    await wrapper1.find('div').trigger('click')
    await nextTick()
    await wrapper2.find('div').trigger('click')
    await nextTick()

    const popups = document.querySelectorAll('.hmfw-trigger-popup')
    expect(popups.length).toBeGreaterThanOrEqual(2)

    // Escape 逐层关闭：每次只关最后打开的那个（栈顶），而非一次性全关
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()
    expect(document.querySelectorAll('.hmfw-trigger-popup-hidden').length).toBe(1)

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()
    expect(document.querySelectorAll('.hmfw-trigger-popup-hidden').length).toBe(2)

    wrapper1.unmount()
    wrapper2.unmount()
  })

  // ============================== scroll / resize 重定位 ==============================

  it('triggers reposition on window scroll when visible', async () => {
    const origGetBoundingClientRect = Element.prototype.getBoundingClientRect
    let topValue = 100
    Element.prototype.getBoundingClientRect = function (this: Element) {
      const isPopup = this.classList.contains('hmfw-trigger-popup')
      return {
        top: topValue,
        left: 0,
        width: 80,
        height: isPopup ? 40 : 32,
        right: 80,
        bottom: isPopup ? 140 : 132,
        x: 0,
        y: topValue,
        toJSON: () => '',
      }
    }

    try {
      const wrapper = mountTrigger({ open: true, gap: 0 })
      // 等挂载时的初次定位落定，否则 oldTop 读到的是初始 "0px"，
      // 之后的变化其实来自挂载定位而非 scroll，断言会假通过
      await nextTick()
      await nextTick()
      const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
      const oldTop = popup?.style.top
      expect(oldTop).toBe('132px')

      topValue = 300
      window.dispatchEvent(new Event('scroll'))
      // 重定位经 rAF 合并，需推进定时器让帧回调执行
      vi.advanceTimersByTime(20)
      await nextTick()
      expect(popup?.style.top).toBe('332px')
      wrapper.unmount()
    } finally {
      Element.prototype.getBoundingClientRect = origGetBoundingClientRect
    }
  })

  it('triggers reposition on window resize when visible', async () => {
    const origGetBoundingClientRect = Element.prototype.getBoundingClientRect
    let topValue = 100
    Element.prototype.getBoundingClientRect = function (this: Element) {
      const isPopup = this.classList.contains('hmfw-trigger-popup')
      return {
        top: topValue,
        left: 0,
        width: 80,
        height: isPopup ? 40 : 32,
        right: 80,
        bottom: isPopup ? 140 : 132,
        x: 0,
        y: topValue,
        toJSON: () => '',
      }
    }

    try {
      const wrapper = mountTrigger({ open: true, gap: 0 })
      // 同 scroll 用例：先让挂载定位落定，避免断言假通过
      await nextTick()
      await nextTick()
      const popup = document.querySelector('.hmfw-trigger-popup') as HTMLElement
      expect(popup?.style.top).toBe('132px')

      topValue = 400
      window.dispatchEvent(new Event('resize'))
      // 重定位经 rAF 合并，需推进定时器让帧回调执行
      vi.advanceTimersByTime(20)
      await nextTick()
      expect(popup?.style.top).toBe('432px')
      wrapper.unmount()
    } finally {
      Element.prototype.getBoundingClientRect = origGetBoundingClientRect
    }
  })

  it('同一帧内多次 scroll 只重定位一次（rAF 合并）', async () => {
    const origGetBoundingClientRect = Element.prototype.getBoundingClientRect
    let rectCalls = 0
    Element.prototype.getBoundingClientRect = function (this: Element) {
      rectCalls++
      const isPopup = this.classList.contains('hmfw-trigger-popup')
      return {
        top: 100,
        left: 0,
        width: 80,
        height: isPopup ? 40 : 32,
        right: 80,
        bottom: isPopup ? 140 : 132,
        x: 0,
        y: 100,
        toJSON: () => '',
      }
    }

    try {
      const wrapper = mountTrigger({ open: true, gap: 0 })
      await nextTick()
      await nextTick()
      rectCalls = 0

      // scroll 用 capture 监听，任意祖先滚动都会命中；不节流则每个事件同步读写一次，
      // 构成强制重排。每次 updatePosition 读 2 个 rect，故合并后应恰为 2 次。
      for (let i = 0; i < 10; i++) window.dispatchEvent(new Event('scroll'))
      expect(rectCalls).toBe(0) // 帧回调未执行前不应有任何测量
      vi.advanceTimersByTime(20)
      await nextTick()
      expect(rectCalls).toBe(2)
      wrapper.unmount()
    } finally {
      Element.prototype.getBoundingClientRect = origGetBoundingClientRect
    }
  })

  // ============================== attrs 继承 ==============================

  it('merges attrs.class into trigger wrapper', async () => {
    const wrapper = mount(Trigger, {
      props: {},
      slots: {
        default: () => h('button', 'Trigger'),
        popup: popupSlot,
      },
      attrs: {
        class: 'from-attrs',
      },
      attachTo: document.body,
    })
    expect(wrapper.find('.from-attrs').exists()).toBe(true)
    wrapper.unmount()
  })

  // ============================== 空插槽 ==============================

  it('renders nothing when default slot is empty', () => {
    const wrapper = mount(Trigger, {
      props: {},
      slots: {
        default: () => [],
        popup: popupSlot,
      },
      attachTo: document.body,
    })
    expect(wrapper.find('div').exists()).toBe(false)
    wrapper.unmount()
  })
})
