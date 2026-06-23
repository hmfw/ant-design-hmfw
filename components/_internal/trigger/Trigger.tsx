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
import type { Placement, TriggerAction } from './types'

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
export const Trigger = defineComponent({
  name: 'Trigger',
  inheritAttrs: false,
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    trigger: {
      type: [String, Array] as PropType<TriggerAction | TriggerAction[]>,
      default: 'hover',
    },
    placement: { type: String as PropType<Placement>, default: 'bottomLeft' },
    autoAdjustOverflow: { type: Boolean, default: true },
    /** 箭头尖端对齐触发器中心（Dropdown 的 arrow.pointAtCenter）。 */
    arrowPointAtCenter: Boolean,
    getPopupContainer: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>,
    mouseEnterDelay: { type: Number, default: 0.1 },
    mouseLeaveDelay: { type: Number, default: 0.1 },
    disabled: Boolean,
    destroyOnHidden: Boolean,
    forceRender: Boolean,
    /** 弹层宽度与触发器宽度一致。 */
    matchWidth: Boolean,
    gap: { type: Number, default: 4 },
    zIndex: { type: Number, default: 1050 },
    closeOnEscape: { type: Boolean, default: true },
    closeOnOutsideClick: { type: Boolean, default: true },
    /** 监听弹层内容尺寸变化并自动重新定位（Tooltip 的 ResizeObserver）。 */
    observePopupResize: Boolean,
    /** 变化时强制重新定位（Tooltip 的 fresh）。 */
    fresh: [Boolean, Number] as PropType<boolean | number>,
    /** 触发器外层 wrapper 的 display，默认 inline-block。 */
    triggerDisplay: { type: String, default: 'inline-block' },
    /**
     * 弹层 wrapper 的 class。可为字符串，或接收实际方位返回字符串的函数
     * （宿主据此拼出 placement 类，使 wrapper 自身即组件根节点，避免双层嵌套）。
     */
    popupClass: [String, Function] as PropType<string | ((placement: Placement) => string)>,
    /** 隐藏态 class，默认 hmfw-trigger-popup-hidden；宿主可换成自己的（如 hmfw-dropdown-hidden）。 */
    hiddenClass: { type: String, default: 'hmfw-trigger-popup-hidden' },
    popupStyle: Object as PropType<Record<string, any>>,
    /** 触发器外层 wrapper 的 class。 */
    triggerClass: String,
    triggerStyle: Object as PropType<Record<string, any>>,
  },
  emits: ['update:open', 'openChange', 'afterOpenChange'],
  setup(props, { slots, emit, attrs, expose }) {
    const triggerRef = ref<HTMLElement | null>(null)
    const popupRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(props.defaultOpen ?? false)
    const position = ref({ top: 0, left: 0 })
    const popupWidth = ref<number | null>(null)
    const actualPlacement = ref<Placement>(props.placement)
    let enterTimer: ReturnType<typeof setTimeout> | null = null
    let leaveTimer: ReturnType<typeof setTimeout> | null = null
    let resizeObserver: ResizeObserver | null = null

    const isControlled = computed(() => props.open !== undefined)
    const visible = computed(() => (isControlled.value ? props.open! : innerOpen.value))

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

    const triggers = computed(() => {
      const t = props.trigger
      return Array.isArray(t) ? t : [t]
    })

    const setOpen = (v: boolean, source: 'trigger' | 'popup' = 'trigger') => {
      if (props.disabled) return
      if (!isControlled.value) innerOpen.value = v
      emit('update:open', v)
      emit('openChange', v, { source })
      setTimeout(() => emit('afterOpenChange', v), 0)
    }

    const updatePosition = () => {
      if (!triggerRef.value || !popupRef.value) return
      const triggerRect = triggerRef.value.getBoundingClientRect()
      const popupRect = popupRef.value.getBoundingClientRect()
      const r = computePosition(triggerRect, popupRect, props.placement, {
        gap: props.gap,
        autoAdjustOverflow: props.autoAdjustOverflow,
        arrowPointAtCenter: props.arrowPointAtCenter,
      })
      actualPlacement.value = r.placement
      position.value = { top: r.top, left: r.left }
      if (props.matchWidth) popupWidth.value = triggerRect.width
    }

    watch(visible, async (v) => {
      if (v) {
        await nextTick()
        updatePosition()
        // 开启时启动 ResizeObserver 监听弹层内容尺寸变化
        if (props.observePopupResize && resizeObserver && popupRef.value) {
          resizeObserver.observe(popupRef.value)
        }
      } else {
        // 隐藏时断开监听
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

    const handleFocusOut = () => {
      if (!triggers.value.includes('focus')) return
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

    onMounted(() => {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleKeyDown)
      window.addEventListener('resize', onScrollOrResize)
      window.addEventListener('scroll', onScrollOrResize, true)

      // 创建 ResizeObserver（监听在 visible watch 中按需启动）
      if (props.observePopupResize && typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          if (visible.value) {
            nextTick(() => updatePosition())
          }
        })
      }
    })

    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', onScrollOrResize)
      window.removeEventListener('scroll', onScrollOrResize, true)
      if (enterTimer) clearTimeout(enterTimer)
      if (leaveTimer) clearTimeout(leaveTimer)
      if (resizeObserver) resizeObserver.disconnect()
    })

    const getContainer = (): HTMLElement | 'body' => {
      if (props.getPopupContainer && triggerRef.value) {
        return props.getPopupContainer(triggerRef.value)
      }
      return 'body'
    }

    // 暴露给宿主组件：手动重新定位、读取实际方位、关闭。
    expose({
      updatePosition,
      actualPlacement,
      setOpen,
    })

    return () => {
      const child = slots.default?.()
      if (!child || (Array.isArray(child) && child.length === 0)) return null

      const shouldRender = visible.value || !props.destroyOnHidden || props.forceRender

      const popupStyle: Record<string, any> = {
        position: 'absolute',
        top: `${position.value.top}px`,
        left: `${position.value.left}px`,
        zIndex: props.zIndex,
        ...(props.matchWidth && popupWidth.value != null ? { width: `${popupWidth.value}px` } : null),
        ...props.popupStyle,
      }

      return (
        <>
          <div
            ref={triggerRef}
            class={cls(props.triggerClass, attrs.class as any)}
            style={{ display: props.triggerDisplay, ...(attrs.style as any), ...props.triggerStyle }}
            onMouseenter={handleMouseEnter}
            onMouseleave={handleMouseLeave}
            onClick={handleClick}
            onFocusin={handleFocusIn}
            onFocusout={handleFocusOut}
            onContextmenu={handleContextMenu}
          >
            {child}
          </div>
          {shouldRender && (
            <Teleport to={getContainer()}>
              <div
                ref={popupRef}
                class={cls(
                  typeof props.popupClass === 'function' ? props.popupClass(actualPlacement.value) : props.popupClass,
                  { [props.hiddenClass]: !visible.value },
                )}
                style={popupStyle}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
              >
                {slots.popup?.({ placement: actualPlacement.value })}
              </div>
            </Teleport>
          )}
        </>
      )
    }
  },
})
