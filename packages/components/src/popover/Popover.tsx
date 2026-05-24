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
import type { TooltipPlacement, TooltipTrigger } from '../tooltip/types'

export const Popover = defineComponent({
  name: 'Popover',
  props: {
    title: String,
    content: String,
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
    overlayStyle: Object as PropType<Record<string, string>>,
    overlayInnerStyle: Object as PropType<Record<string, string>>,
  },
  emits: ['update:open', 'openChange'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('popover')
    const triggerRef = ref<HTMLElement | null>(null)
    const popoverRef = ref<HTMLElement | null>(null)
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
      if (!triggerRef.value || !popoverRef.value) return
      const triggerRect = triggerRef.value.getBoundingClientRect()
      const popoverRect = popoverRef.value.getBoundingClientRect()
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      const placement = props.placement

      let top = 0
      let left = 0
      const gap = 8

      const triggerCenterX = triggerRect.left + triggerRect.width / 2 + scrollX
      const triggerCenterY = triggerRect.top + triggerRect.height / 2 + scrollY

      if (placement.startsWith('top')) {
        top = triggerRect.top + scrollY - popoverRect.height - gap
        if (placement === 'top') left = triggerCenterX - popoverRect.width / 2
        else if (placement === 'topLeft') left = triggerRect.left + scrollX
        else left = triggerRect.right + scrollX - popoverRect.width
      } else if (placement.startsWith('bottom')) {
        top = triggerRect.bottom + scrollY + gap
        if (placement === 'bottom') left = triggerCenterX - popoverRect.width / 2
        else if (placement === 'bottomLeft') left = triggerRect.left + scrollX
        else left = triggerRect.right + scrollX - popoverRect.width
      } else if (placement.startsWith('left')) {
        left = triggerRect.left + scrollX - popoverRect.width - gap
        if (placement === 'left') top = triggerCenterY - popoverRect.height / 2
        else if (placement === 'leftTop') top = triggerRect.top + scrollY
        else top = triggerRect.bottom + scrollY - popoverRect.height
      } else if (placement.startsWith('right')) {
        left = triggerRect.right + scrollX + gap
        if (placement === 'right') top = triggerCenterY - popoverRect.height / 2
        else if (placement === 'rightTop') top = triggerRect.top + scrollY
        else top = triggerRect.bottom + scrollY - popoverRect.height
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

    const handleOutsideClick = (e: MouseEvent) => {
      if (!visible.value) return
      if (
        triggerRef.value?.contains(e.target as Node) ||
        popoverRef.value?.contains(e.target as Node)
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

      const popoverStyle: Record<string, string> = {
        position: 'absolute',
        top: `${position.value.top}px`,
        left: `${position.value.left}px`,
        zIndex: '1070',
        ...props.overlayStyle,
      }

      return (
        <>
          <div
            ref={triggerRef}
            style={{ display: 'inline-block' }}
            onMouseenter={handleMouseEnter}
            onMouseleave={handleMouseLeave}
            onClick={handleClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {child}
          </div>
          <Teleport to="body">
            <div
              ref={popoverRef}
              class={cls(prefixCls, `${prefixCls}-placement-${props.placement}`, {
                [`${prefixCls}-hidden`]: !visible.value,
              })}
              style={popoverStyle}
              onMouseenter={handleMouseEnter}
              onMouseleave={handleMouseLeave}
            >
              <div class={`${prefixCls}-content`}>
                {props.arrow && <div class={`${prefixCls}-arrow`} />}
                <div class={`${prefixCls}-inner`} style={props.overlayInnerStyle}>
                  {(props.title || slots.title) && (
                    <div class={`${prefixCls}-title`}>
                      {slots.title?.() ?? props.title}
                    </div>
                  )}
                  <div class={`${prefixCls}-inner-content`}>
                    {slots.content?.() ?? props.content}
                  </div>
                </div>
              </div>
            </div>
          </Teleport>
        </>
      )
    }
  },
})
