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

export interface DropdownItem {
  key: string
  label?: string
  icon?: string
  disabled?: boolean
  danger?: boolean
  type?: 'divider'
  children?: DropdownItem[]
  onClick?: () => void
}

export const Dropdown = defineComponent({
  name: 'Dropdown',
  props: {
    menu: Object as PropType<{ items: DropdownItem[]; onClick?: (info: { key: string }) => void }>,
    trigger: {
      type: [String, Array] as PropType<'hover' | 'click' | 'contextMenu' | ('hover' | 'click' | 'contextMenu')[]>,
      default: 'hover',
    },
    placement: {
      type: String as PropType<'bottom' | 'bottomLeft' | 'bottomRight' | 'top' | 'topLeft' | 'topRight'>,
      default: 'bottomLeft',
    },
    open: { type: Boolean, default: undefined },
    disabled: Boolean,
    destroyPopupOnHide: Boolean,
    arrow: Boolean,
    mouseEnterDelay: { type: Number, default: 0.15 },
    mouseLeaveDelay: { type: Number, default: 0.1 },
  },
  emits: ['update:open', 'openChange'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('dropdown')
    const triggerRef = ref<HTMLElement | null>(null)
    const dropdownRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(false)
    const position = ref({ top: 0, left: 0 })
    let enterTimer: ReturnType<typeof setTimeout> | null = null
    let leaveTimer: ReturnType<typeof setTimeout> | null = null

    const isControlled = computed(() => props.open !== undefined)
    const visible = computed(() => isControlled.value ? props.open! : innerOpen.value)

    watch(() => props.open, (v) => { if (v !== undefined) innerOpen.value = v })

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
      if (!triggerRef.value || !dropdownRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      const p = props.placement

      let top = 0
      let left = 0
      const gap = 4

      if (p.startsWith('bottom')) {
        top = rect.bottom + scrollY + gap
      } else {
        top = rect.top + scrollY - dropdownRef.value.getBoundingClientRect().height - gap
      }

      if (p.endsWith('Left') || p === 'bottom' || p === 'top') {
        left = rect.left + scrollX
      } else if (p.endsWith('Right')) {
        left = rect.right + scrollX - dropdownRef.value.getBoundingClientRect().width
      } else {
        left = rect.left + scrollX + rect.width / 2 - dropdownRef.value.getBoundingClientRect().width / 2
      }

      position.value = { top, left }
    }

    watch(visible, async (v) => {
      if (v) { await nextTick(); updatePosition() }
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

    const handleContextMenu = (e: MouseEvent) => {
      if (!triggers.value.includes('contextMenu')) return
      e.preventDefault()
      setOpen(true)
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!visible.value) return
      if (
        triggerRef.value?.contains(e.target as Node) ||
        dropdownRef.value?.contains(e.target as Node)
      ) return
      setOpen(false)
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', handleOutsideClick)
      if (enterTimer) clearTimeout(enterTimer)
      if (leaveTimer) clearTimeout(leaveTimer)
    })

    const handleItemClick = (item: DropdownItem) => {
      if (item.disabled) return
      item.onClick?.()
      props.menu?.onClick?.({ key: item.key })
      setOpen(false)
    }

    const renderItems = (items: DropdownItem[]) => items.map((item) => {
      if (item.type === 'divider') {
        return <li key={item.key} class={`${prefixCls}-menu-divider`} role="separator" />
      }
      return (
        <li
          key={item.key}
          class={cls(`${prefixCls}-menu-item`, {
            [`${prefixCls}-menu-item-disabled`]: !!item.disabled,
            [`${prefixCls}-menu-item-danger`]: !!item.danger,
          })}
          role="menuitem"
          onClick={() => handleItemClick(item)}
        >
          {item.icon && <span class={`${prefixCls}-menu-item-icon`}>{item.icon}</span>}
          {item.label}
        </li>
      )
    })

    return () => {
      const child = slots.default?.()[0]
      if (!child) return null

      const shouldRender = visible.value || !props.destroyPopupOnHide

      return (
        <>
          <div
            ref={triggerRef}
            style={{ display: 'inline-block' }}
            onMouseenter={handleMouseEnter}
            onMouseleave={handleMouseLeave}
            onClick={handleClick}
            onContextmenu={handleContextMenu}
          >
            {child}
          </div>
          {shouldRender && (
            <Teleport to="body">
              <div
                ref={dropdownRef}
                class={cls(prefixCls, {
                  [`${prefixCls}-hidden`]: !visible.value,
                })}
                style={{
                  position: 'absolute',
                  top: `${position.value.top}px`,
                  left: `${position.value.left}px`,
                }}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
              >
                {slots.overlay?.() ?? (
                  <ul class={`${prefixCls}-menu`} role="menu">
                    {renderItems(props.menu?.items ?? [])}
                  </ul>
                )}
              </div>
            </Teleport>
          )}
        </>
      )
    }
  },
})
