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
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TooltipPlacement, TooltipTrigger } from './types'

let tooltipIdCounter = 0

export const Tooltip = defineComponent({
  name: 'Tooltip',
  props: {
    title: String,
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
      type: Boolean,
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
  },
  emits: ['update:open', 'openChange'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tooltip')
    const tooltipId = `tooltip-${++tooltipIdCounter}`
    const triggerRef = ref<HTMLElement | null>(null)
    const tooltipRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(props.defaultOpen ?? false)
    const position = ref({ top: 0, left: 0 })
    let enterTimer: ReturnType<typeof setTimeout> | null = null
    let leaveTimer: ReturnType<typeof setTimeout> | null = null

    const isControlled = computed(() => props.open !== undefined)
    const visible = computed(() => (isControlled.value ? props.open! : innerOpen.value))

    watch(() => props.open, (v) => {
      if (v !== undefined) innerOpen.value = v
    })

    const triggers = computed(() => {
      const t = props.trigger
      return Array.isArray(t) ? t : [t]
    })

    const setOpen = (v: boolean) => {
      if (props.disabled) return
      innerOpen.value = v
      emit('update:open', v)
      emit('openChange', v)
    }

    const updatePosition = () => {
      if (!triggerRef.value || !tooltipRef.value) return
      const triggerRect = triggerRef.value.getBoundingClientRect()
      const tooltipRect = tooltipRef.value.getBoundingClientRect()
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      const placement = props.placement

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

      position.value = { top, left }
    }

    watch(visible, async (v) => {
      if (v) {
        await nextTick()
        updatePosition()
      }
    })

    const handleMouseEnter = () => {
      if (!triggers.value.includes('hover')) return
      if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null }
      enterTimer = setTimeout(() => setOpen(true), props.mouseEnterDelay * 1000)
    }

    const handleMouseLeave = () => {
      if (!triggers.value.includes('hover')) return
      if (enterTimer) { clearTimeout(enterTimer); enterTimer = null }
      leaveTimer = setTimeout(() => setOpen(false), props.mouseLeaveDelay * 1000)
    }

    const handleClick = () => {
      if (!triggers.value.includes('click')) return
      setOpen(!visible.value)
    }

    const handleFocus = () => {
      if (!triggers.value.includes('focus')) return
      setOpen(true)
    }

    const handleBlur = () => {
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
      if (
        triggerRef.value?.contains(e.target as Node) ||
        tooltipRef.value?.contains(e.target as Node)
      ) return
      if (triggers.value.includes('click')) setOpen(false)
    }

    onMounted(() => document.addEventListener('click', handleOutsideClick))
    onBeforeUnmount(() => {
      document.removeEventListener('click', handleOutsideClick)
      if (enterTimer) clearTimeout(enterTimer)
      if (leaveTimer) clearTimeout(leaveTimer)
    })

    return () => {
      const child = slots.default?.()[0]
      if (!child) return null

      const tooltipContent = props.title ?? slots.title?.()

      const tooltipStyle: Record<string, string> = {
        position: 'absolute',
        top: `${position.value.top}px`,
        left: `${position.value.left}px`,
        zIndex: '1070',
      }
      if (props.color) tooltipStyle['--tooltip-bg'] = props.color

      const shouldRender = visible.value || !props.destroyTooltipOnHide

      return (
        <>
          <div
            ref={triggerRef}
            style={{ display: 'inline-block' }}
            aria-describedby={visible.value ? tooltipId : undefined}
            onMouseenter={handleMouseEnter}
            onMouseleave={handleMouseLeave}
            onClick={handleClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onContextmenu={handleContextMenu}
          >
            {child}
          </div>
          {shouldRender && (
            <Teleport to="body">
              <div
                ref={tooltipRef}
                id={tooltipId}
                role="tooltip"
                class={cls(prefixCls, `${prefixCls}-placement-${props.placement}`, {
                  [`${prefixCls}-hidden`]: !visible.value,
                })}
                style={tooltipStyle}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
              >
                <div class={`${prefixCls}-content`}>
                  {props.arrow && <div class={`${prefixCls}-arrow`} />}
                  <div class={`${prefixCls}-inner`}>{tooltipContent}</div>
                </div>
              </div>
            </Teleport>
          )}
        </>
      )
    }
  },
})
