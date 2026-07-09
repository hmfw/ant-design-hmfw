import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  Teleport,
  type PropType,
} from 'vue'
import { cls } from '../../_utils'
import { computePosition } from './computePosition'
import { subscribeGlobal } from './eventManager'
import type { Placement, TriggerAction, TriggerProps } from './types'

/**
 * 通用弹层触发器原语（内部组件，不对外导出）。
 *
 * 统一接管：弹层定位（12 方位 + autoAdjustOverflow 翻转 + scroll/resize 重定位）、
 * Teleport、触发器事件（hover/click/focus/contextMenu）、外点关闭、Esc 关闭、
 * 受控/非受控 open 状态、matchWidth、getPopupContainer。
 *
 * 插槽：
 *  - default：触发器元素
 *  - popup({ placement })：弹层内容，回传翻转后实际方位供箭头方向使用
 */
const triggerProps = {
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: false },
  trigger: { type: [String, Array] as PropType<TriggerAction | TriggerAction[]>, default: 'hover' },
  placement: { type: String as PropType<Placement>, default: 'bottomLeft' },
  autoAdjustOverflow: { type: Boolean, default: true },
  /** 箭头尖端对齐触发器中心（Dropdown 的 arrow.pointAtCenter）。 */
  arrowPointAtCenter: { type: Boolean, default: false },
  getPopupContainer: { type: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>, default: undefined },
  mouseEnterDelay: { type: Number, default: 0.1 },
  mouseLeaveDelay: { type: Number, default: 0.1 },
  disabled: { type: Boolean, default: false },
  destroyOnHidden: { type: Boolean, default: false },
  forceRender: { type: Boolean, default: false },
  /** 弹层宽度与触发器宽度一致（Select 的 dropdownMatchSelectWidth）。 */
  matchWidth: { type: [Boolean, Number] as PropType<boolean | number>, default: false },
  gap: { type: Number, default: 4 },
  zIndex: { type: Number, default: 1050 },
  closeOnEscape: { type: Boolean, default: true },
  closeOnOutsideClick: { type: Boolean, default: true },
  /** 监听弹层内容尺寸变化并自动重新定位（Tooltip 的 ResizeObserver）。 */
  observePopupResize: { type: Boolean, default: false },
  /** 变化时强制重新定位（Tooltip 的 fresh）。 */
  fresh: { type: [Boolean, Number] as PropType<boolean | number>, default: undefined },
  /** 触发器外层 wrapper 的 display，默认 inline-block。 */
  triggerDisplay: { type: String, default: 'inline-block' },
  /**
   * 弹层 wrapper 的 class。可为字符串，或接收实际方位返回字符串的函数
   * （宿主据此拼出 placement 类，使 wrapper 自身即组件根节点，避免双层嵌套）。
   */
  popupClass: { type: [String, Function] as PropType<string | ((placement: Placement) => string)>, default: undefined },
  /** 隐藏态 class，默认 hmfw-trigger-popup-hidden；宿主可换成自己的（如 hmfw-dropdown-hidden）。 */
  hiddenClass: { type: String, default: 'hmfw-trigger-popup-hidden' },
  popupStyle: { type: Object as PropType<Record<string, any>>, default: undefined },
  /** 触发器外层 wrapper 的 class。 */
  triggerClass: { type: String, default: undefined },
  triggerStyle: { type: Object as PropType<Record<string, any>>, default: undefined },
} satisfies Record<keyof TriggerProps, any>

export const Trigger = defineComponent({
  name: 'Trigger',
  inheritAttrs: false,
  props: triggerProps,
  emits: ['update:open', 'openChange', 'afterOpenChange'],
  setup(props, { slots, emit, attrs, expose }) {
    // ================================================================
    // 1. 响应式状态
    // ================================================================
    const triggerRef = ref<HTMLElement | null>(null)
    const popupRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(props.defaultOpen ?? false)
    const position = ref({ top: 0, left: 0 })
    const popupWidth = ref<number | null>(null)
    const actualPlacement = ref<Placement>(props.placement)
    let enterTimer: ReturnType<typeof setTimeout> | null = null
    let leaveTimer: ReturnType<typeof setTimeout> | null = null
    let resizeObserver: ResizeObserver | null = null
    const unsubs: (() => void)[] = []

    const isControlled = computed(() => props.open !== undefined)
    const visible = computed(() => (isControlled.value ? props.open! : innerOpen.value))
    const triggers = computed(() => {
      const t = props.trigger
      return Array.isArray(t) ? t : [t]
    })

    // ================================================================
    // 2. Props → 内部状态同步
    // ================================================================
    watch(
      () => props.open,
      (v) => {
        if (v !== undefined) innerOpen.value = v
      },
    )
    watch(
      () => props.placement,
      (v) => {
        actualPlacement.value = v
      },
    )

    // ================================================================
    // 3. 核心方法
    // ================================================================
    const setOpen = (v: boolean, source: 'trigger' | 'popup' = 'trigger') => {
      if (props.disabled) return
      if (!isControlled.value) innerOpen.value = v
      emit('update:open', v)
      emit('openChange', v, { source })
      // afterOpenChange 在下一个宏任务触发，此时 DOM 已更新但 CSS 过渡未完成。
      // 若宿主组件有入场/出场动画，应自行监听 transitionend/animationend 确定动画结束时机。
      setTimeout(() => emit('afterOpenChange', v), 0)
    }

    const updatePosition = () => {
      // 弹层不可见时 getBoundingClientRect 返回零值，跳过以避免错误坐标
      if (!visible.value || !triggerRef.value || !popupRef.value) return
      // 当 triggerDisplay 为 contents 时，wrapper 自身不生成盒模型，
      // getBoundingClientRect 返回全零值，需回退到第一个子元素计算位置
      let triggerEl: HTMLElement = triggerRef.value
      if (props.triggerDisplay === 'contents' && triggerRef.value.firstElementChild) {
        triggerEl = triggerRef.value.firstElementChild as HTMLElement
      }
      const triggerRect = triggerEl.getBoundingClientRect()
      const popupRect = popupRef.value.getBoundingClientRect()
      const r = computePosition(triggerRect, popupRect, props.placement, {
        gap: props.gap,
        autoAdjustOverflow: props.autoAdjustOverflow,
        arrowPointAtCenter: props.arrowPointAtCenter,
      })
      actualPlacement.value = r.placement
      position.value = { top: r.top, left: r.left }
      if (props.matchWidth === true) popupWidth.value = triggerRect.width
    }

    // ================================================================
    // 4. 副作用 Watch
    // ================================================================
    watch(visible, async (v) => {
      if (v) {
        await nextTick()
        updatePosition()
        // matchWidth 设置 minWidth 后弹层可能变宽，需等 DOM 更新后重新测量定位
        if (props.matchWidth) {
          await nextTick()
          updatePosition()
        }
        if (props.observePopupResize && resizeObserver && popupRef.value) {
          resizeObserver.observe(popupRef.value)
        }
      } else {
        if (resizeObserver) resizeObserver.disconnect()
      }
    })

    // fresh 变化时强制重新定位
    watch(
      () => props.fresh,
      () => {
        if (visible.value) updatePosition()
      },
    )

    // observePopupResize 动态变更时同步 ResizeObserver 状态
    watch(
      () => props.observePopupResize,
      (v) => {
        if (!resizeObserver) return
        if (v && visible.value && popupRef.value) {
          resizeObserver.observe(popupRef.value)
        } else if (!v) {
          resizeObserver.disconnect()
        }
      },
    )

    // ================================================================
    // 5. 事件处理
    // ================================================================
    const onScrollOrResize = () => {
      if (visible.value) updatePosition()
    }

    const handleMouseEnter = () => {
      if (!triggers.value.includes('hover')) return
      if (leaveTimer) {
        clearTimeout(leaveTimer)
        leaveTimer = null
      }
      enterTimer = setTimeout(() => setOpen(true), props.mouseEnterDelay * 1000)
    }

    const handleMouseLeave = () => {
      if (!triggers.value.includes('hover')) return
      if (enterTimer) {
        clearTimeout(enterTimer)
        enterTimer = null
      }
      leaveTimer = setTimeout(() => setOpen(false), props.mouseLeaveDelay * 1000)
    }

    const handleClick = () => {
      if (!triggers.value.includes('click')) return
      setOpen(!visible.value)
    }

    const handleFocusIn = () => {
      if (!triggers.value.includes('focus')) return
      setOpen(true)
    }

    // 焦点离开触发器时关闭弹层，但焦点移入弹层内容不关闭，
    // 否则弹层内的可聚焦元素（下拉菜单项、输入框等）无法获得焦点。
    const handleFocusOut = (e: FocusEvent) => {
      if (!triggers.value.includes('focus')) return
      if (popupRef.value?.contains(e.relatedTarget as Node)) return
      setOpen(false)
    }

    const handleContextMenu = (e: MouseEvent) => {
      if (!triggers.value.includes('contextMenu')) return
      e.preventDefault()
      setOpen(true)
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!visible.value || !props.closeOnOutsideClick) return
      if (triggerRef.value?.contains(e.target as Node) || popupRef.value?.contains(e.target as Node)) return
      setOpen(false)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (props.closeOnEscape && e.key === 'Escape' && visible.value) {
        setOpen(false)
        e.preventDefault()
      }
    }

    // ================================================================
    // 6. 生命周期
    // ================================================================
    onMounted(() => {
      // 通过全局事件管理器订阅，避免 N 个实例重复注册 DOM 事件
      unsubs.push(subscribeGlobal(document, 'mousedown', handleOutsideClick))
      unsubs.push(subscribeGlobal(document, 'keydown', handleKeyDown))
      unsubs.push(subscribeGlobal(window, 'resize', onScrollOrResize))
      // scroll 使用 capture 阶段以捕获所有可滚动祖先的滚动事件
      unsubs.push(subscribeGlobal(window, 'scroll', onScrollOrResize, { capture: true }))

      if (props.observePopupResize && typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          if (visible.value) {
            nextTick(() => updatePosition())
          }
        })
      }

      // defaultOpen 或 open 为 true 时，弹层初始即可见，需在挂载后立即计算位置
      if (visible.value) {
        nextTick(() => updatePosition())
      }
    })

    onBeforeUnmount(() => {
      unsubs.forEach((fn) => fn())
      if (enterTimer) clearTimeout(enterTimer)
      if (leaveTimer) clearTimeout(leaveTimer)
      if (resizeObserver) resizeObserver.disconnect()
    })

    // ================================================================
    // 7. 工具方法
    // ================================================================
    const getContainer = (): HTMLElement | 'body' => {
      if (props.getPopupContainer && triggerRef.value) {
        return props.getPopupContainer(triggerRef.value)
      }
      return 'body'
    }

    // ================================================================
    // 8. 暴露 API
    // ================================================================
    expose({
      updatePosition,
      actualPlacement,
      setOpen,
    })

    return () => {
      const children = slots.default?.()
      if (!children || (Array.isArray(children) && children.length === 0)) return null

      const shouldRender = visible.value || !props.destroyOnHidden || props.forceRender

      // 注意：props.popupStyle 在最后展开，可覆盖 position/top/left 等内部定位属性。
      // 消费者应避免覆盖这些关键属性，仅在确有需求时使用（如需固定定位替代绝对定位）。
      const popupStyle: Record<string, any> = {
        position: 'absolute',
        top: `${position.value.top}px`,
        left: `${position.value.left}px`,
        zIndex: props.zIndex,
        ...(typeof props.matchWidth === 'number'
          ? { minWidth: `${props.matchWidth}px` }
          : props.matchWidth === true && popupWidth.value != null
            ? { minWidth: `${popupWidth.value}px` }
            : null),
        ...props.popupStyle,
      }

      // 弹层 class 计算：包含宿主传入的 popupClass（支持函数形式接收当前方位）、
      // placement 方位类、arrowPointAtCenter 标记类、以及 visible 切换的隐藏类。
      const popupCls = cls(
        'hmfw-trigger-popup',
        typeof props.popupClass === 'function' ? props.popupClass(actualPlacement.value) : props.popupClass,
        `hmfw-trigger-placement-${actualPlacement.value}`,
        {
          'hmfw-trigger-arrow-point-at-center': props.arrowPointAtCenter,
          [props.hiddenClass]: !visible.value,
        },
      )

      const triggerCls = cls(props.triggerClass, attrs.class as string | undefined)
      const triggerSty = {
        display: props.triggerDisplay,
        ...(attrs.style as Record<string, any> | undefined),
        ...props.triggerStyle,
      }

      const triggerEvents = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,
        onFocusin: handleFocusIn,
        onFocusout: handleFocusOut,
        onContextmenu: handleContextMenu,
      }

      // 弹层上绑定 hover 事件：鼠标从触发器移入弹层时取消 leave timer，防止误关闭
      const popupEvents = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
      }

      return (
        <>
          <div ref={triggerRef} class={triggerCls} style={triggerSty} {...triggerEvents}>
            {children}
          </div>
          {shouldRender && (
            <Teleport to={getContainer()}>
              <div ref={popupRef} class={popupCls} style={popupStyle} {...popupEvents}>
                {slots.popup?.({ placement: actualPlacement.value })}
              </div>
            </Teleport>
          )}
        </>
      )
    }
  },
})
