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
  type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TooltipPlacement, TooltipTrigger, TooltipArrow, TooltipTitle } from './types'

let tooltipIdCounter = 0

/** Pairs of placements for `autoAdjustOverflow` flipping. */
const FLIP_PLACEMENT: Record<TooltipPlacement, TooltipPlacement> = {
  top: 'bottom',
  topLeft: 'bottomLeft',
  topRight: 'bottomRight',
  bottom: 'top',
  bottomLeft: 'topLeft',
  bottomRight: 'topRight',
  left: 'right',
  leftTop: 'rightTop',
  leftBottom: 'rightBottom',
  right: 'left',
  rightTop: 'leftTop',
  rightBottom: 'leftBottom',
}

export const Tooltip = defineComponent({
  name: 'Tooltip',
  props: {
    title: [String, Number, Object, Function] as PropType<TooltipTitle>,
    /** AntD legacy alias for `title`. */
    overlay: [String, Number, Object, Function] as PropType<TooltipTitle>,
    placement: {
      type: String as PropType<TooltipPlacement>,
      default: 'top',
    },
    trigger: {
      type: [String, Array] as PropType<TooltipTrigger | TooltipTrigger[]>,
      default: 'hover',
    },
    open: {
      type: Boolean,
      default: undefined,
    },
    defaultOpen: Boolean,
    color: String,
    arrow: {
      type: [Boolean, Object] as PropType<TooltipArrow>,
      default: true,
    },
    mouseEnterDelay: {
      type: Number,
      default: 0.1,
    },
    mouseLeaveDelay: {
      type: Number,
      default: 0.1,
    },
    disabled: Boolean,
    destroyTooltipOnHide: Boolean,
    destroyOnHidden: Boolean,
    autoAdjustOverflow: { type: Boolean, default: true },
    zIndex: Number,
    getPopupContainer: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>,
    fresh: [Boolean, Number] as PropType<boolean | number>,
    /** Override the default `hmfw-tooltip` prefix (used by Popover/Popconfirm wrappers). */
    customPrefixCls: String,
    /** Extra inline style merged onto the popup element (used by wrappers for `overlayStyle`). */
    popupStyle: Object as PropType<Record<string, string>>,
  },
  emits: ['update:open', 'openChange', 'afterOpenChange'],
  setup(props, { slots, emit }) {
    const defaultPrefix = usePrefixCls('tooltip')
    /** Allow wrappers (Popover/Popconfirm) to swap the visual prefix. */
    const prefixCls = computed(() => props.customPrefixCls ?? defaultPrefix)
    const tooltipId = `tooltip-${++tooltipIdCounter}`
    const triggerRef = ref<HTMLElement | null>(null)
    const tooltipRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(props.defaultOpen ?? false)
    const position = ref({ top: 0, left: 0 })
    /** Active placement after possible flip via `autoAdjustOverflow`. */
    const actualPlacement = ref<TooltipPlacement>(props.placement)
    let enterTimer: ReturnType<typeof setTimeout> | null = null
    let leaveTimer: ReturnType<typeof setTimeout> | null = null
    let resizeObserver: ResizeObserver | null = null

    const isControlled = computed(() => props.open !== undefined)
    const visible = computed(() => (isControlled.value ? props.open! : innerOpen.value))

    /** AntD v6: tooltip stays hidden when title is empty/null. Falls back to slot. */
    const hasTitle = computed(() => {
      const t = props.title ?? props.overlay
      if (t === 0 || t === '0') return true
      if (t !== undefined && t !== null && t !== '') return true
      // Check title slot — touch slots.title to be reactive on slot updates.
      return !!slots.title
    })

    const showArrow = computed(() => props.arrow !== false)
    const arrowPointAtCenter = computed(
      () => typeof props.arrow === 'object' && props.arrow !== null && props.arrow.pointAtCenter === true,
    )

    const mergedDestroyOnHidden = computed(() => props.destroyOnHidden ?? props.destroyTooltipOnHide ?? false)

    watch(
      () => props.open,
      (v) => {
        if (v !== undefined) innerOpen.value = v
      },
    )

    const triggers = computed(() => {
      const t = props.trigger
      return Array.isArray(t) ? t : [t]
    })

    const setOpen = (v: boolean) => {
      if (props.disabled) return
      // Don't open when title is empty (AntD v6 noTitle guard).
      if (v && !hasTitle.value) return
      innerOpen.value = v
      emit('update:open', v)
      emit('openChange', v)
      // afterOpenChange fires once the transition has had a tick to settle.
      // setTimeout (not rAF) so consumers can intercept it under fake timers.
      setTimeout(() => emit('afterOpenChange', v), 0)
    }

    /** Reset placement to user's pick before computing — flip is opt-in per render. */
    const computeForPlacement = (placement: TooltipPlacement, scrollX: number, scrollY: number) => {
      const triggerRect = triggerRef.value!.getBoundingClientRect()
      const tooltipRect = tooltipRef.value!.getBoundingClientRect()
      let top = 0
      let left = 0
      const gap = 8
      const triggerCenterX = triggerRect.left + triggerRect.width / 2 + scrollX
      const triggerCenterY = triggerRect.top + triggerRect.height / 2 + scrollY

      if (placement.startsWith('top')) {
        top = triggerRect.top + scrollY - tooltipRect.height - gap
        if (placement === 'top') left = triggerCenterX - tooltipRect.width / 2
        else if (placement === 'topLeft') left = triggerRect.left + scrollX
        else left = triggerRect.right + scrollX - tooltipRect.width
      } else if (placement.startsWith('bottom')) {
        top = triggerRect.bottom + scrollY + gap
        if (placement === 'bottom') left = triggerCenterX - tooltipRect.width / 2
        else if (placement === 'bottomLeft') left = triggerRect.left + scrollX
        else left = triggerRect.right + scrollX - tooltipRect.width
      } else if (placement.startsWith('left')) {
        left = triggerRect.left + scrollX - tooltipRect.width - gap
        if (placement === 'left') top = triggerCenterY - tooltipRect.height / 2
        else if (placement === 'leftTop') top = triggerRect.top + scrollY
        else top = triggerRect.bottom + scrollY - tooltipRect.height
      } else if (placement.startsWith('right')) {
        left = triggerRect.right + scrollX + gap
        if (placement === 'right') top = triggerCenterY - tooltipRect.height / 2
        else if (placement === 'rightTop') top = triggerRect.top + scrollY
        else top = triggerRect.bottom + scrollY - tooltipRect.height
      }
      return { top, left, width: tooltipRect.width, height: tooltipRect.height }
    }

    /** Position the popup; flip if `autoAdjustOverflow` and primary placement overflows the viewport. */
    const updatePosition = () => {
      if (!triggerRef.value || !tooltipRef.value) return
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      const vw = window.innerWidth
      const vh = window.innerHeight

      let placement = props.placement
      let computed = computeForPlacement(placement, scrollX, scrollY)

      if (props.autoAdjustOverflow) {
        const right = computed.left - scrollX + computed.width
        const bottom = computed.top - scrollY + computed.height
        const overflowsTop = computed.top - scrollY < 0
        const overflowsBottom = bottom > vh
        const overflowsLeft = computed.left - scrollX < 0
        const overflowsRight = right > vw

        const overflows =
          (placement.startsWith('top') && overflowsTop) ||
          (placement.startsWith('bottom') && overflowsBottom) ||
          (placement.startsWith('left') && overflowsLeft) ||
          (placement.startsWith('right') && overflowsRight)

        if (overflows) {
          const flipped = FLIP_PLACEMENT[placement]
          const flippedComputed = computeForPlacement(flipped, scrollX, scrollY)
          // Only adopt the flip if it actually fits better.
          const flippedOverflows =
            (flipped.startsWith('top') && flippedComputed.top - scrollY < 0) ||
            (flipped.startsWith('bottom') && flippedComputed.top - scrollY + flippedComputed.height > vh) ||
            (flipped.startsWith('left') && flippedComputed.left - scrollX < 0) ||
            (flipped.startsWith('right') && flippedComputed.left - scrollX + flippedComputed.width > vw)
          if (!flippedOverflows) {
            placement = flipped
            computed = flippedComputed
          }
        }
      }

      actualPlacement.value = placement
      position.value = { top: computed.top, left: computed.left }
    }

    watch(visible, async (v) => {
      if (v) {
        await nextTick()
        updatePosition()
        // 当 tooltip 显示时，启动 ResizeObserver 监听内容尺寸变化。
        if (resizeObserver && tooltipRef.value) {
          const inner = tooltipRef.value.querySelector('.hmfw-tooltip-inner')
          if (inner) resizeObserver.observe(inner as Element)
        }
      } else {
        // 隐藏时断开监听。
        if (resizeObserver) resizeObserver.disconnect()
      }
    })

    /** 监听 fresh 属性变化，强制重新计算位置。 */
    watch(
      () => props.fresh,
      () => {
        if (visible.value) updatePosition()
      },
    )

    /** 监听 fresh 属性变化，强制重新计算位置。 */
    watch(
      () => props.fresh,
      () => {
        if (visible.value) updatePosition()
      },
    )

    /** Reposition while open (scrolling, window resize). */
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

    /** focusin/focusout bubble through the wrapper from nested inputs (focus does not). */
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
      if (!visible.value) return
      if (triggerRef.value?.contains(e.target as Node) || tooltipRef.value?.contains(e.target as Node)) return
      if (triggers.value.includes('click') || triggers.value.includes('contextMenu')) {
        setOpen(false)
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleOutsideClick)
      // capture-phase scroll listener catches scroll on any ancestor.
      window.addEventListener('scroll', onScrollOrResize, true)
      window.addEventListener('resize', onScrollOrResize)

      // 使用 ResizeObserver 监听 tooltip 内容尺寸变化，自动重新计算位置。
      if (tooltipRef.value && 'ResizeObserver' in window) {
        resizeObserver = new ResizeObserver(() => {
          if (visible.value) {
            nextTick(() => updatePosition())
          }
        })
        // 监听需要在 visible 变为 true 后才能获取到元素，所以在 watch visible 中启动监听。
      }
    })
    onBeforeUnmount(() => {
      document.removeEventListener('click', handleOutsideClick)
      window.removeEventListener('scroll', onScrollOrResize, true)
      window.removeEventListener('resize', onScrollOrResize)
      if (enterTimer) clearTimeout(enterTimer)
      if (leaveTimer) clearTimeout(leaveTimer)
      if (resizeObserver) resizeObserver.disconnect()
    })

    return () => {
      const child = slots.default?.()[0]
      if (!child) return null

      // Resolve title: prop > overlay alias > slot. Function values are called.
      const rawTitle = props.title ?? props.overlay
      let tooltipContent: unknown
      if (typeof rawTitle === 'function') tooltipContent = (rawTitle as () => unknown)()
      else if (rawTitle !== undefined && rawTitle !== null) tooltipContent = rawTitle
      else tooltipContent = slots.title?.()

      const tooltipStyle: Record<string, string> = {
        position: 'absolute',
        top: `${position.value.top}px`,
        left: `${position.value.left}px`,
        zIndex: String(props.zIndex ?? 1070),
      }
      if (props.color) tooltipStyle['--tooltip-bg'] = props.color
      // Wrappers (Popover/Popconfirm) merge their `overlayStyle` here.
      if (props.popupStyle) Object.assign(tooltipStyle, props.popupStyle)

      // Don't mount the popup at all when there's no title (AntD parity).
      const shouldRender = hasTitle.value && (visible.value || !mergedDestroyOnHidden.value)

      const popupTarget =
        props.getPopupContainer && triggerRef.value ? props.getPopupContainer(triggerRef.value) : 'body'

      return (
        <>
          <div
            ref={triggerRef}
            style={{ display: 'inline-block' }}
            aria-describedby={visible.value && hasTitle.value ? tooltipId : undefined}
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
            <Teleport to={popupTarget as 'body' | HTMLElement}>
              <div
                ref={tooltipRef}
                id={tooltipId}
                role="tooltip"
                class={cls(prefixCls.value, `${prefixCls.value}-placement-${actualPlacement.value}`, {
                  [`${prefixCls.value}-hidden`]: !visible.value,
                  [`${prefixCls.value}-arrow-point-at-center`]: arrowPointAtCenter.value,
                })}
                style={tooltipStyle}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
              >
                <div class={`${prefixCls.value}-content`}>
                  {showArrow.value && <div class={`${prefixCls.value}-arrow`} />}
                  <div class={`${prefixCls.value}-inner`}>{tooltipContent as VNode | string}</div>
                </div>
              </div>
            </Teleport>
          )}
        </>
      )
    }
  },
})
