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
import { Menu } from '../menu'
import type { DropdownProps, DropdownPlacement, DropdownTrigger } from './types'

export const Dropdown = defineComponent({
  name: 'Dropdown',
  inheritAttrs: false,
  props: {
    menu: Object as PropType<DropdownProps['menu']>,
    trigger: {
      type: [String, Array] as PropType<DropdownTrigger | DropdownTrigger[]>,
      default: 'hover',
    },
    placement: {
      type: String as PropType<DropdownPlacement>,
      default: 'bottomLeft',
    },
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    disabled: Boolean,
    arrow: {
      type: [Boolean, Object] as PropType<boolean | { pointAtCenter?: boolean }>,
      default: false,
    },
    autoFocus: Boolean,
    overlayClassName: String,
    overlayStyle: Object as PropType<Record<string, any>>,
    getPopupContainer: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>,
    autoAdjustOverflow: { type: Boolean, default: true },
    destroyPopupOnHide: Boolean,
    destroyOnHidden: Boolean,
    mouseEnterDelay: { type: Number, default: 0.15 },
    mouseLeaveDelay: { type: Number, default: 0.1 },
    popupRender: Function as PropType<(originNode: VNode) => VNode>,
    dropdownRender: Function as PropType<(originNode: VNode) => VNode>,
    forceRender: Boolean,
    openClassName: String,
    rootClassName: String,
  },
  emits: ['update:open', 'openChange'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('dropdown')
    const triggerRef = ref<HTMLElement | null>(null)
    const dropdownRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(props.defaultOpen ?? false)
    const position = ref({ top: 0, left: 0 })
    let enterTimer: ReturnType<typeof setTimeout> | null = null
    let leaveTimer: ReturnType<typeof setTimeout> | null = null

    const isControlled = computed(() => props.open !== undefined)
    const visible = computed(() => (isControlled.value ? props.open! : innerOpen.value))

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

    const setOpen = (v: boolean, source: 'trigger' | 'menu' = 'trigger') => {
      if (props.disabled) return
      innerOpen.value = v
      emit('update:open', v)
      emit('openChange', v, { source })
    }

    const updatePosition = () => {
      if (!triggerRef.value || !dropdownRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      const dropdownRect = dropdownRef.value.getBoundingClientRect()
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      const p = props.placement

      let top = 0
      let left = 0
      const gap = props.arrow ? 12 : 4

      // Vertical positioning
      if (p.startsWith('bottom')) {
        top = rect.bottom + scrollY + gap
      } else {
        top = rect.top + scrollY - dropdownRect.height - gap
      }

      // Horizontal positioning
      if (p.endsWith('Left') || p === 'bottom' || p === 'top') {
        left = rect.left + scrollX
      } else if (p.endsWith('Right')) {
        left = rect.right + scrollX - dropdownRect.width
      } else {
        // Center alignment
        left = rect.left + scrollX + rect.width / 2 - dropdownRect.width / 2
      }

      // Auto adjust overflow if enabled
      if (props.autoAdjustOverflow) {
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // Adjust horizontal overflow
        if (left + dropdownRect.width > viewportWidth + scrollX) {
          left = viewportWidth + scrollX - dropdownRect.width - 8
        }
        if (left < scrollX) {
          left = scrollX + 8
        }

        // Adjust vertical overflow
        if (top + dropdownRect.height > viewportHeight + scrollY) {
          top = rect.top + scrollY - dropdownRect.height - gap
        }
        if (top < scrollY) {
          top = rect.bottom + scrollY + gap
        }
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
      if (leaveTimer) {
        clearTimeout(leaveTimer)
        leaveTimer = null
      }
      enterTimer = setTimeout(() => setOpen(true, 'trigger'), props.mouseEnterDelay * 1000)
    }

    const handleMouseLeave = () => {
      if (!triggers.value.includes('hover')) return
      if (enterTimer) {
        clearTimeout(enterTimer)
        enterTimer = null
      }
      leaveTimer = setTimeout(() => setOpen(false, 'trigger'), props.mouseLeaveDelay * 1000)
    }

    const handleClick = () => {
      if (!triggers.value.includes('click')) return
      setOpen(!visible.value, 'trigger')
    }

    const handleContextMenu = (e: MouseEvent) => {
      if (!triggers.value.includes('contextMenu')) return
      e.preventDefault()
      setOpen(true, 'trigger')
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!visible.value) return
      if (triggerRef.value?.contains(e.target as Node) || dropdownRef.value?.contains(e.target as Node)) return
      setOpen(false, 'trigger')
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible.value) {
        setOpen(false, 'trigger')
        e.preventDefault()
      }
    }

    onMounted(() => {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleKeyDown)
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition, true)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
      if (enterTimer) clearTimeout(enterTimer)
      if (leaveTimer) clearTimeout(leaveTimer)
    })

    const handleMenuClick = (info: { key: string }) => {
      // Forward to user-provided menu.onClick first
      props.menu?.onClick?.(info)
      // Close dropdown after menu click unless menu is selectable and multiple
      if (props.menu?.selectable && props.menu?.multiple) {
        return
      }
      setOpen(false, 'menu')
    }

    const renderOverlay = () => {
      if (!props.menu?.items) {
        return slots.overlay?.()
      }

      const menuNode = (
        <Menu {...props.menu} mode="vertical" selectable={props.menu.selectable ?? false} onClick={handleMenuClick} />
      )

      // Apply popupRender or dropdownRender
      const renderFn = props.popupRender || props.dropdownRender
      if (renderFn) {
        return renderFn(menuNode)
      }

      return menuNode
    }

    const getContainer = () => {
      if (props.getPopupContainer && triggerRef.value) {
        return props.getPopupContainer(triggerRef.value)
      }
      return document.body
    }

    return () => {
      const child = slots.default?.()[0]
      if (!child) return null

      const shouldDestroy = props.destroyOnHidden ?? props.destroyPopupOnHide ?? false
      const shouldRender = visible.value || !shouldDestroy || props.forceRender

      const triggerClasses = cls(props.openClassName && visible.value ? props.openClassName : null, attrs.class as any)

      return (
        <>
          <div
            ref={triggerRef}
            class={triggerClasses}
            style={{ display: 'inline-block', ...(attrs.style as any) }}
            onMouseenter={handleMouseEnter}
            onMouseleave={handleMouseLeave}
            onClick={handleClick}
            onContextmenu={handleContextMenu}
          >
            {child}
          </div>
          {shouldRender && (
            <Teleport to={getContainer()}>
              <div
                ref={dropdownRef}
                class={cls(
                  prefixCls,
                  props.overlayClassName,
                  props.rootClassName,
                  `${prefixCls}-placement-${props.placement}`,
                  {
                    [`${prefixCls}-hidden`]: !visible.value,
                    [`${prefixCls}-show-arrow`]: !!props.arrow,
                  },
                )}
                style={{
                  position: 'absolute',
                  top: `${position.value.top}px`,
                  left: `${position.value.left}px`,
                  ...props.overlayStyle,
                }}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
              >
                {props.arrow && <div class={`${prefixCls}-arrow`} />}
                <div class={`${prefixCls}-content`}>{renderOverlay()}</div>
              </div>
            </Teleport>
          )}
        </>
      )
    }
  },
})
