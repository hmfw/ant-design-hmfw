import {
  defineComponent,
  ref,
  computed,
  watch,
  provide,
  inject,
  nextTick,
  onMounted,
  Transition,
  type PropType,
  type VNode,
  type CSSProperties,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls, KEYS } from '../_utils'
import { Tooltip } from '../tooltip'
import type { TooltipPlacement } from '../tooltip'
import { Trigger } from '../_internal/trigger'

import { LAYOUT_SIDER_KEY, type LayoutSiderContext } from '../layout'
import { MenuItem } from './MenuItem'
import { SubMenu as SubMenuComp } from './SubMenu'
import { MenuDivider } from './MenuDivider'
import { MenuItemGroup } from './MenuItemGroup'
import type {
  ItemType,
  MenuMode,
  MenuTheme,
  MenuItemType,
  SubMenuType,
  MenuItemGroupType,
  MenuDividerType,
} from './types'

const MENU_CONTEXT_KEY = Symbol('menu-context')

interface MenuContext {
  selectedKeys: string[]
  openKeys: string[]
  mode: MenuMode
  theme: MenuTheme
  prefixCls: string
  inlineIndent: number
  inlineCollapsed: boolean
  firstLevel: boolean
  onSelect: (key: string) => void
  onDeselect: (key: string) => void
  onOpenChange: (key: string, open: boolean) => void
}

export const Menu = defineComponent({
  name: 'Menu',
  props: {
    items: Array as PropType<ItemType[]>,
    mode: { type: String as PropType<MenuMode>, default: 'vertical' },
    selectedKeys: Array as PropType<string[]>,
    defaultSelectedKeys: Array as PropType<string[]>,
    openKeys: Array as PropType<string[]>,
    defaultOpenKeys: Array as PropType<string[]>,
    inlineCollapsed: Boolean,
    theme: { type: String as PropType<MenuTheme>, default: 'light' },
    multiple: Boolean,
    selectable: { type: Boolean, default: true },
    inlineIndent: { type: Number, default: 24 },
    expandIcon: [Object, Function] as PropType<VNode | ((props: { isOpen: boolean }) => VNode) | null | false>,
    triggerSubMenuAction: { type: String as PropType<'hover' | 'click'>, default: 'hover' },
    subMenuOpenDelay: { type: Number, default: 0 },
    subMenuCloseDelay: { type: Number, default: 0.1 },
    tooltip: [Object, Boolean] as PropType<
      false | { placement?: TooltipPlacement; classNames?: Record<string, string> }
    >,
    overflowedIndicator: Object as PropType<VNode>,
    overflowedIndicatorPopupClassName: String,
    classNames: Object as PropType<import('./types').MenuClassNames>,
    styles: Object as PropType<import('./types').MenuStyles>,
  },
  emits: ['update:selectedKeys', 'update:openKeys', 'select', 'deselect', 'openChange', 'click'],
  setup(props, { emit, slots }) {
    const prefixCls = usePrefixCls('menu')
    const rootRef = ref<HTMLUListElement>()

    // 从 Layout.Sider 注入折叠状态
    const siderContext = inject<LayoutSiderContext | null>(LAYOUT_SIDER_KEY, null)

    // inlineCollapsed 优先使用显式 prop，其次使用 Sider 的折叠状态
    const mergedInlineCollapsed = computed(() => {
      if (props.inlineCollapsed !== undefined && props.inlineCollapsed !== false) {
        return props.inlineCollapsed
      }
      return siderContext?.siderCollapsed ?? false
    })

    // ====================== Slot-to-Items Resolution ======================
    // 将 default slot 中的 JSX 子组件（Menu.Item / Menu.SubMenu 等）转换为 ItemType[]
    const resolveSlotItems = (): ItemType[] => {
      const children = slots.default?.()
      if (!children || children.length === 0) return []

      const resolveVNode = (vnode: VNode): ItemType | null => {
        if (!vnode || typeof vnode !== 'object') return null

        const type = (vnode as any).type
        const childProps = (vnode as any).props ?? {}
        const childChildren = (vnode as any).children as any

        // MenuItem
        if (type === MenuItem || (type && typeof type === 'object' && (type as any).name === 'MenuItem')) {
          return {
            key: childProps.key,
            label: childProps.label ?? getTextContent(childChildren),
            icon: childProps.icon,
            disabled: childProps.disabled,
            danger: childProps.danger,
            title: childProps.title,
            extra: childProps.extra,
          }
        }

        // SubMenu
        if (type === SubMenuComp || (type && typeof type === 'object' && (type as any).name === 'SubMenu')) {
          const subChildren = resolveSlotItemsFromVNodes(normalizeVNodeChildren(childChildren))
          return {
            key: childProps.key,
            label: childProps.label ?? childProps.title,
            title: childProps.title,
            icon: childProps.icon,
            disabled: childProps.disabled,
            popupClassName: childProps.popupClassName,
            popupOffset: childProps.popupOffset,
            theme: childProps.theme,
            children: subChildren.length > 0 ? subChildren : undefined,
          }
        }

        // MenuDivider
        if (type === MenuDivider || (type && typeof type === 'object' && (type as any).name === 'MenuDivider')) {
          return {
            type: 'divider',
            key: childProps.key,
            dashed: childProps.dashed,
          }
        }

        // MenuItemGroup
        if (type === MenuItemGroup || (type && typeof type === 'object' && (type as any).name === 'MenuItemGroup')) {
          const groupChildren = resolveSlotItemsFromVNodes(normalizeVNodeChildren(childChildren))
          return {
            type: 'group',
            key: childProps.key,
            label: childProps.label,
            children: groupChildren.length > 0 ? groupChildren : undefined,
          }
        }

        return null
      }

      const resolveSlotItemsFromVNodes = (vnodes: VNode[]): ItemType[] => {
        return vnodes.map(resolveVNode).filter((item): item is ItemType => item !== null)
      }

      const normalizeVNodeChildren = (children: any): VNode[] => {
        if (!children) return []
        if (Array.isArray(children)) return children.flat().filter(Boolean)
        return [children].filter(Boolean)
      }

      return resolveSlotItemsFromVNodes(children.flat())
    }

    // 从 VNode children 中提取文本内容
    const getTextContent = (children: any): string | undefined => {
      if (!children) return undefined
      if (typeof children === 'string') return children
      if (typeof children === 'number') return String(children)
      if (Array.isArray(children)) {
        return children
          .map((c: any) => {
            if (typeof c === 'string') return c
            if (typeof c === 'number') return String(c)
            if (c && typeof c === 'object' && c.children) return getTextContent(c.children)
            return ''
          })
          .join('')
      }
      if (typeof children === 'object' && children.children) {
        return getTextContent(children.children)
      }
      return undefined
    }

    // 合并 items prop 和 slot children
    const mergedItems = computed<ItemType[]>(() => {
      const slotItems = resolveSlotItems()
      if (slotItems.length > 0) return slotItems
      return props.items ?? []
    })

    // ====================== State ======================
    const innerSelected = ref<string[]>(props.defaultSelectedKeys ?? props.selectedKeys ?? [])
    const innerOpen = ref<string[]>(props.defaultOpenKeys ?? props.openKeys ?? [])

    const isControlledSelected = computed(() => props.selectedKeys !== undefined)
    const isControlledOpen = computed(() => props.openKeys !== undefined)

    const currentSelected = computed(() => (isControlledSelected.value ? props.selectedKeys! : innerSelected.value))
    const currentOpen = computed(() => (isControlledOpen.value ? props.openKeys! : innerOpen.value))

    watch(
      () => props.selectedKeys,
      (v) => {
        if (v) innerSelected.value = v
      },
    )
    watch(
      () => props.openKeys,
      (v) => {
        if (v) innerOpen.value = v
      },
    )

    // ====================== Keyboard Navigation ======================
    // 用于字母键搜索的缓冲
    let typeAheadBuffer = ''
    let typeAheadTimer: ReturnType<typeof setTimeout> | null = null

    // 获取所有可聚焦的菜单项元素
    const getFocusableItems = (): HTMLElement[] => {
      if (!rootRef.value) return []
      const items = rootRef.value.querySelectorAll<HTMLElement>(`[data-menu-key]:not([aria-disabled="true"])`)
      return Array.from(items)
    }

    const focusItem = (el: HTMLElement | undefined) => {
      if (el) {
        el.focus()
        el.setAttribute('tabindex', '0')
      }
    }

    const blurItem = (el: HTMLElement | undefined) => {
      if (el) {
        el.setAttribute('tabindex', '-1')
      }
    }

    // 获取可见的菜单项（排除隐藏的子菜单内的项）
    const getVisibleFocusableItems = (): HTMLElement[] => {
      return getFocusableItems().filter((el) => {
        // 检查元素是否在可见的子菜单中
        return el.offsetParent !== null
      })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const items = getVisibleFocusableItems()
      if (items.length === 0) return

      const currentIndex = items.findIndex((el) => el === document.activeElement)
      const isHorizontal = props.mode === 'horizontal'
      const getNextIndex = (current: number, direction: 1 | -1): number => {
        let next = current + direction
        if (next >= items.length) next = 0
        if (next < 0) next = items.length - 1
        return next
      }

      switch (e.key) {
        case KEYS.ARROW_DOWN: {
          if (isHorizontal) {
            e.preventDefault()
            const currentEl = items[currentIndex]
            if (currentEl) {
              const submenu = currentEl.closest(`.${prefixCls}-submenu`)
              if (submenu) {
                const key = (submenu as HTMLElement).dataset.menuKey
                if (key && !currentOpen.value.includes(key)) {
                  handleOpenChange(key, true)
                }
              }
            }
          } else {
            e.preventDefault()
            const next = getNextIndex(currentIndex, 1)
            blurItem(items[currentIndex])
            focusItem(items[next])
          }
          break
        }

        case KEYS.ARROW_UP: {
          if (isHorizontal) {
            e.preventDefault()
            const currentEl = items[currentIndex]
            if (currentEl) {
              const submenu = currentEl.closest(`.${prefixCls}-submenu`)
              if (submenu) {
                const key = (submenu as HTMLElement).dataset.menuKey
                if (key && currentOpen.value.includes(key)) {
                  handleOpenChange(key, false)
                }
              }
            }
          } else {
            e.preventDefault()
            const next = getNextIndex(currentIndex, -1)
            blurItem(items[currentIndex])
            focusItem(items[next])
          }
          break
        }

        case KEYS.ARROW_RIGHT: {
          if (isHorizontal) {
            e.preventDefault()
            const next = getNextIndex(currentIndex, 1)
            blurItem(items[currentIndex])
            focusItem(items[next])
          } else if (props.mode === 'inline') {
            e.preventDefault()
            const currentEl = items[currentIndex]
            if (currentEl) {
              const submenu = currentEl.closest(`.${prefixCls}-submenu`)
              if (submenu) {
                const key = (submenu as HTMLElement).dataset.menuKey
                if (key && !currentOpen.value.includes(key)) {
                  handleOpenChange(key, true)
                }
              }
            }
          }
          break
        }

        case KEYS.ARROW_LEFT: {
          if (isHorizontal) {
            e.preventDefault()
            const next = getNextIndex(currentIndex, -1)
            blurItem(items[currentIndex])
            focusItem(items[next])
          } else if (props.mode === 'inline') {
            e.preventDefault()
            const currentEl = items[currentIndex]
            if (currentEl) {
              const submenu = currentEl.closest(`.${prefixCls}-submenu`)
              if (submenu) {
                const key = (submenu as HTMLElement).dataset.menuKey
                if (key && currentOpen.value.includes(key)) {
                  handleOpenChange(key, false)
                }
              }
            }
          }
          break
        }

        case KEYS.ENTER:
        case KEYS.SPACE: {
          e.preventDefault()
          const activeEl = items[currentIndex]
          if (activeEl) {
            activeEl.click()
          }
          break
        }

        case KEYS.HOME:
          e.preventDefault()
          blurItem(items[currentIndex])
          focusItem(items[0])
          break

        case KEYS.END:
          e.preventDefault()
          blurItem(items[currentIndex])
          focusItem(items[items.length - 1])
          break

        case KEYS.ESCAPE:
          // 关闭当前打开的最近父级子菜单
          if (currentOpen.value.length > 0) {
            e.preventDefault()
            const lastOpen = currentOpen.value[currentOpen.value.length - 1]
            handleOpenChange(lastOpen, false)
          }
          break

        default:
          // 字母键搜索（Type-ahead）
          if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
            handleTypeAhead(e.key, items)
          }
          break
      }
    }

    const handleTypeAhead = (char: string, items: HTMLElement[]) => {
      if (typeAheadTimer) clearTimeout(typeAheadTimer)
      typeAheadBuffer += char.toLowerCase()
      typeAheadTimer = setTimeout(() => {
        typeAheadBuffer = ''
      }, 500)

      // 查找匹配的菜单项
      const matchIndex = items.findIndex((el) => {
        const label = el.getAttribute('data-menu-label')?.toLowerCase() || ''
        return label.startsWith(typeAheadBuffer)
      })

      if (matchIndex >= 0) {
        const currentIndex = items.findIndex((el) => el === document.activeElement)
        blurItem(items[currentIndex])
        focusItem(items[matchIndex])
      }
    }

    // ====================== Selection / Open Handlers ======================
    const handleSelect = (key: string) => {
      emit('click', { key })
      if (!props.selectable) return
      let next: string[]
      const isCurrentlySelected = currentSelected.value.includes(key)

      if (props.multiple) {
        if (isCurrentlySelected) {
          next = currentSelected.value.filter((k) => k !== key)
          innerSelected.value = next
          emit('update:selectedKeys', next)
          emit('deselect', { key, selectedKeys: next })
        } else {
          next = [...currentSelected.value, key]
          innerSelected.value = next
          emit('update:selectedKeys', next)
          emit('select', { key, selectedKeys: next })
        }
      } else {
        next = [key]
        innerSelected.value = next
        emit('update:selectedKeys', next)
        emit('select', { key, selectedKeys: next })
      }
    }

    const handleDeselect = (key: string) => {
      const next = currentSelected.value.filter((k) => k !== key)
      innerSelected.value = next
      emit('update:selectedKeys', next)
      emit('deselect', { key, selectedKeys: next })
    }

    // 子菜单延迟打开/关闭的 timer
    const delayTimers = new Map<string, ReturnType<typeof setTimeout>>()

    const clearDelayTimer = (key: string) => {
      const timer = delayTimers.get(key)
      if (timer) {
        clearTimeout(timer)
        delayTimers.delete(key)
      }
    }

    const handleOpenChange = (key: string, open: boolean) => {
      clearDelayTimer(key)

      const applyChange = () => {
        const next = open ? [...currentOpen.value, key] : currentOpen.value.filter((k) => k !== key)
        innerOpen.value = next
        emit('update:openKeys', next)
        emit('openChange', next)
      }

      // 仅在非 inline 模式 + hover 触发时应用延迟
      const shouldDelay = props.mode !== 'inline' && props.triggerSubMenuAction === 'hover'

      if (open && shouldDelay && props.subMenuOpenDelay > 0) {
        delayTimers.set(key, setTimeout(applyChange, props.subMenuOpenDelay * 1000))
      } else if (!open && shouldDelay && props.subMenuCloseDelay > 0) {
        delayTimers.set(key, setTimeout(applyChange, props.subMenuCloseDelay * 1000))
      } else {
        applyChange()
      }
    }

    // 立即关闭子菜单（用于 hover 模式下鼠标离开时使用延迟关闭）
    const handleOpenImmediate = (key: string, open: boolean) => {
      clearDelayTimer(key)
      const next = open ? [...currentOpen.value, key] : currentOpen.value.filter((k) => k !== key)
      innerOpen.value = next
      emit('update:openKeys', next)
      emit('openChange', next)
    }

    // ====================== Context ======================
    provide(MENU_CONTEXT_KEY, {
      get selectedKeys() {
        return currentSelected.value
      },
      get openKeys() {
        return currentOpen.value
      },
      get mode() {
        return props.mode
      },
      get theme() {
        return props.theme
      },
      get inlineIndent() {
        return props.inlineIndent
      },
      get inlineCollapsed() {
        return mergedInlineCollapsed.value
      },
      get firstLevel() {
        return true
      },
      prefixCls,
      onSelect: handleSelect,
      onDeselect: handleDeselect,
      onOpenChange: handleOpenChange,
    } as MenuContext)

    // ====================== Type Guards ======================
    const isItemType = (item: ItemType): item is MenuItemType | SubMenuType => {
      return item !== null && typeof item === 'object' && 'key' in item && !('type' in item)
    }

    const isGroupType = (item: ItemType): item is MenuItemGroupType => {
      return item !== null && typeof item === 'object' && 'type' in item && item.type === 'group'
    }

    const isDividerType = (item: ItemType): item is MenuDividerType => {
      return item !== null && typeof item === 'object' && 'type' in item && item.type === 'divider'
    }

    // 判断是否是 SubMenuType（有 children）
    const isSubMenuType = (item: ItemType): item is SubMenuType => {
      return isItemType(item) && 'children' in item && Array.isArray(item.children) && item.children.length > 0
    }

    // ====================== Icon Rendering ======================
    const renderItemIcon = (item: { icon?: VNode | (() => VNode) }, className?: string, style?: CSSProperties) => {
      if (!item.icon) return null
      const iconContent = typeof item.icon === 'function' ? item.icon() : item.icon
      return (
        <span class={cls(`${prefixCls}-item-icon`, className)} style={style}>
          {iconContent}
        </span>
      )
    }

    // ====================== Expand Icon ======================
    const renderExpandIcon = (isOpen: boolean) => {
      if (props.expandIcon !== undefined) {
        // 支持 null/false 隐藏箭头
        if (props.expandIcon === null || props.expandIcon === false) return null
        if (typeof props.expandIcon === 'function') {
          return props.expandIcon({ isOpen })
        }
        return props.expandIcon
      }
      return (
        <span
          class={cls(`${prefixCls}-submenu-arrow`, props.classNames?.submenuArrow)}
          style={props.styles?.submenuArrow}
        />
      )
    }

    // ====================== Render Items (Recursive) ======================
    const renderItems = (items: ItemType[], depth = 0, isFirstLevel = true): any => {
      return items
        .filter((item) => item !== null)
        .map((item, index) => {
          // --- Divider ---
          if (isDividerType(item)) {
            return (
              <li
                key={item.key ?? `divider-${index}`}
                class={cls(
                  `${prefixCls}-item-divider`,
                  { [`${prefixCls}-item-divider-dashed`]: item.dashed },
                  props.classNames?.divider,
                )}
                style={props.styles?.divider}
                role="separator"
              />
            )
          }

          // --- Item Group ---
          if (isGroupType(item)) {
            return (
              <li
                key={item.key ?? `group-${index}`}
                class={cls(`${prefixCls}-item-group`, props.classNames?.itemGroup)}
                style={props.styles?.itemGroup}
              >
                <div
                  class={cls(`${prefixCls}-item-group-title`, props.classNames?.itemGroupTitle)}
                  style={props.styles?.itemGroupTitle}
                >
                  {item.label}
                </div>
                <ul
                  class={cls(`${prefixCls}-item-group-list`, props.classNames?.itemGroupList)}
                  style={props.styles?.itemGroupList}
                >
                  {item.children && renderItems(item.children, depth, false)}
                </ul>
              </li>
            )
          }

          // --- Not a valid item ---
          if (!isItemType(item)) return null

          // --- SubMenu ---
          if (isSubMenuType(item)) {
            const isOpen = currentOpen.value.includes(item.key)
            const hasSelectedDescendant = (children: ItemType[]): boolean =>
              children.some((c) => {
                if (!c || typeof c !== 'object') return false
                if ('key' in c && currentSelected.value.includes((c as any).key || '')) return true
                if ('children' in c && Array.isArray((c as any).children)) {
                  return hasSelectedDescendant((c as any).children)
                }
                return false
              })
            const hasSelectedChild = hasSelectedDescendant(item.children || [])

            // 获取子菜单的弹出类名（支持 per-submenu popupClassName）
            const subPopupClassName = (item as any).popupClassName || ''

            if (props.mode === 'inline' && !mergedInlineCollapsed.value) {
              // ====== Inline SubMenu ======
              const inlineSubContent = (
                <li
                  key={item.key}
                  class={cls(
                    `${prefixCls}-submenu`,
                    `${prefixCls}-submenu-inline`,
                    {
                      [`${prefixCls}-submenu-open`]: isOpen,
                      [`${prefixCls}-submenu-selected`]: hasSelectedChild,
                      [`${prefixCls}-submenu-disabled`]: item.disabled,
                    },
                    props.classNames?.submenu,
                    isOpen && props.classNames?.submenuOpen,
                    hasSelectedChild && props.classNames?.submenuSelected,
                    item.disabled && props.classNames?.submenuDisabled,
                  )}
                  style={{
                    ...props.styles?.submenu,
                    ...(isOpen && props.styles?.submenuOpen),
                    ...(hasSelectedChild && props.styles?.submenuSelected),
                    ...(item.disabled && props.styles?.submenuDisabled),
                  }}
                  data-menu-key={item.key}
                  data-menu-label={item.label}
                >
                  <div
                    class={cls(`${prefixCls}-submenu-title`, props.classNames?.submenuTitle)}
                    style={{
                      paddingLeft: `${props.inlineIndent * (depth + 1)}px`,
                      ...props.styles?.submenuTitle,
                    }}
                    role="button"
                    tabindex={item.disabled ? -1 : -1}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-disabled={item.disabled || undefined}
                    onClick={() => !item.disabled && handleOpenChange(item.key, !isOpen)}
                  >
                    {renderItemIcon(item, props.classNames?.submenuIcon, props.styles?.submenuIcon)}
                    <span
                      class={cls(`${prefixCls}-title-content`, props.classNames?.itemContent)}
                      style={props.styles?.itemContent}
                    >
                      {item.label}
                    </span>
                    {renderExpandIcon(isOpen)}
                  </div>
                  <Transition
                    name={`${prefixCls}-collapse`}
                    onBeforeEnter={(el) => {
                      const e = el as HTMLElement
                      e.style.height = '0'
                      e.style.opacity = '0'
                    }}
                    onEnter={(el) => {
                      const e = el as HTMLElement
                      void e.offsetHeight
                      e.style.height = `${e.scrollHeight}px`
                      e.style.opacity = '1'
                    }}
                    onAfterEnter={(el) => {
                      const e = el as HTMLElement
                      e.style.height = ''
                      e.style.opacity = ''
                    }}
                    onBeforeLeave={(el) => {
                      const e = el as HTMLElement
                      e.style.height = `${e.offsetHeight}px`
                      e.style.opacity = '1'
                    }}
                    onLeave={(el) => {
                      const e = el as HTMLElement
                      void e.offsetHeight
                      e.style.height = '0'
                      e.style.opacity = '0'
                    }}
                  >
                    {isOpen && (
                      <ul
                        class={cls(`${prefixCls}-sub`, `${prefixCls}-inline`, props.classNames?.sub)}
                        style={props.styles?.sub}
                      >
                        {renderItems(item.children || [], depth + 1, false)}
                      </ul>
                    )}
                  </Transition>
                </li>
              )

              return inlineSubContent
            }

            // ====== Horizontal/Vertical Popup SubMenu ======
            const shouldTriggerOnHover = props.triggerSubMenuAction === 'hover'

            // 获取弹出层的偏移
            const popupOffset = (item as any).popupOffset as [number, number] | undefined

            const popupContent = (
              <li
                key={item.key}
                class={cls(
                  `${prefixCls}-submenu`,
                  `${prefixCls}-submenu-${props.mode}`,
                  {
                    [`${prefixCls}-submenu-open`]: isOpen,
                    [`${prefixCls}-submenu-selected`]: hasSelectedChild,
                    [`${prefixCls}-submenu-disabled`]: item.disabled,
                  },
                  props.classNames?.submenu,
                  isOpen && props.classNames?.submenuOpen,
                  hasSelectedChild && props.classNames?.submenuSelected,
                  item.disabled && props.classNames?.submenuDisabled,
                )}
                style={{
                  position: 'relative',
                  ...props.styles?.submenu,
                  ...(isOpen && props.styles?.submenuOpen),
                  ...(hasSelectedChild && props.styles?.submenuSelected),
                  ...(item.disabled && props.styles?.submenuDisabled),
                }}
                data-menu-key={item.key}
                data-menu-label={item.label}
              >
                <Trigger
                  open={isOpen}
                  trigger={shouldTriggerOnHover ? 'hover' : 'click'}
                  placement={props.mode === 'horizontal' ? 'bottomLeft' : 'rightTop'}
                  mouseEnterDelay={props.subMenuOpenDelay}
                  mouseLeaveDelay={props.subMenuCloseDelay}
                  autoAdjustOverflow
                  closeOnOutsideClick={!shouldTriggerOnHover}
                  closeOnEscape
                  triggerDisplay="block"
                  disabled={item.disabled}
                  zIndex={1050}
                  popupClass={prefixCls}
                  popupStyle={popupOffset ? { left: `${popupOffset[0]}px`, top: `${popupOffset[1]}px` } : undefined}
                  onOpenChange={(v: boolean) => handleOpenChange(item.key, v)}
                >
                  {{
                    default: () => (
                      <div
                        class={cls(`${prefixCls}-submenu-title`, props.classNames?.submenuTitle)}
                        style={props.styles?.submenuTitle}
                        role="button"
                        tabindex={item.disabled ? -1 : -1}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-disabled={item.disabled || undefined}
                        data-menu-key={item.key}
                        data-menu-label={item.label}
                        onClick={(e: MouseEvent) => {
                          if (item.disabled) return
                          // 仅在 click 模式或键盘触发（detail === 0）时响应
                          // 阻止冒泡避免 Trigger wrapper 重复 toggle
                          if (!shouldTriggerOnHover || e.detail === 0) {
                            e.stopPropagation()
                            handleOpenChange(item.key, !isOpen)
                          }
                        }}
                      >
                        {renderItemIcon(item, props.classNames?.submenuIcon, props.styles?.submenuIcon)}
                        <span
                          class={cls(`${prefixCls}-title-content`, props.classNames?.itemContent)}
                          style={props.styles?.itemContent}
                        >
                          {item.label}
                        </span>
                        {renderExpandIcon(isOpen)}
                      </div>
                    ),
                    popup: () => (
                      <ul
                        class={cls(
                          `${prefixCls}-sub`,
                          `${prefixCls}-vertical`,
                          `${prefixCls}-${(item as any).theme || props.theme}`,
                          subPopupClassName,
                          props.classNames?.sub,
                        )}
                        style={props.styles?.sub}
                      >
                        {typeof (item as any).popupRender === 'function'
                          ? (item as any).popupRender(renderItems(item.children || [], depth + 1, false))
                          : renderItems(item.children || [], depth + 1, false)}
                      </ul>
                    ),
                  }}
                </Trigger>
              </li>
            )

            return popupContent
          }

          // ====== Regular Menu Item ======
          const isSelected = currentSelected.value.includes(item.key)

          const menuItemContent = (
            <li
              key={item.key}
              class={cls(
                `${prefixCls}-item`,
                {
                  [`${prefixCls}-item-selected`]: isSelected,
                  [`${prefixCls}-item-disabled`]: item.disabled,
                  [`${prefixCls}-item-danger`]: item.danger,
                  [`${prefixCls}-item-only-child`]: !item.icon,
                },
                props.classNames?.item,
                isSelected && props.classNames?.itemSelected,
                item.disabled && props.classNames?.itemDisabled,
                item.danger && props.classNames?.itemDanger,
              )}
              style={{
                ...(!mergedInlineCollapsed.value &&
                (props.mode === 'inline' || (props.mode === 'vertical' && !isFirstLevel))
                  ? { paddingLeft: `${props.inlineIndent * (depth + 1)}px` }
                  : {}),
                ...props.styles?.item,
                ...(isSelected && props.styles?.itemSelected),
                ...(item.disabled && props.styles?.itemDisabled),
                ...(item.danger && props.styles?.itemDanger),
              }}
              role="menuitem"
              tabindex={item.disabled ? -1 : -1}
              aria-disabled={item.disabled || undefined}
              aria-current={isSelected ? 'true' : undefined}
              data-menu-key={item.key}
              data-menu-label={item.label}
              title={item.title ?? (typeof item.label === 'string' ? item.label : undefined)}
              onClick={() => !item.disabled && handleSelect(item.key)}
            >
              {renderItemIcon(item, props.classNames?.itemIcon, props.styles?.itemIcon)}
              <span
                class={cls(
                  `${prefixCls}-title-content`,
                  {
                    [`${prefixCls}-title-content-with-extra`]: !!item.extra,
                  },
                  props.classNames?.itemContent,
                )}
                style={props.styles?.itemContent}
              >
                {item.label}
              </span>
              {item.extra && <span class={`${prefixCls}-item-extra`}>{item.extra}</span>}
            </li>
          )

          // 折叠态第一级菜单项：包裹 Tooltip
          if (mergedInlineCollapsed.value && isFirstLevel && depth === 0 && props.mode === 'inline') {
            return (
              <Tooltip
                key={item.key}
                title={item.title ?? item.label ?? ''}
                placement="right"
                mouseEnterDelay={0.5}
                triggerDisplay="contents"
                {...(typeof props.tooltip === 'object' ? props.tooltip : {})}
              >
                {menuItemContent}
              </Tooltip>
            )
          }

          return menuItemContent
        })
    }

    // ====================== Horizontal Overflow Detection ======================
    const overflowKeys = ref<string[]>([])
    const observerRef = ref<ResizeObserver>()

    const checkOverflow = () => {
      if (props.mode !== 'horizontal' || !rootRef.value) return
      const container = rootRef.value
      const items = container.querySelectorAll<HTMLElement>(
        `:scope > .${prefixCls}-item, :scope > .${prefixCls}-submenu`,
      )

      const containerWidth = container.offsetWidth
      const gap = 8 // 项目间间距
      let accumulatedWidth = 0
      const overflow: string[] = []

      // 预留溢出指示器的宽度（约40px）
      const indicatorWidth = 40
      const availableWidth = containerWidth - indicatorWidth

      items.forEach((el) => {
        accumulatedWidth += el.offsetWidth + gap
        const key = el.dataset.menuKey
        if (accumulatedWidth > availableWidth && key) {
          overflow.push(key)
        }
      })

      overflowKeys.value = overflow
    }

    onMounted(() => {
      if (props.mode === 'horizontal' && typeof ResizeObserver !== 'undefined') {
        nextTick(checkOverflow)
        observerRef.value = new ResizeObserver(() => {
          checkOverflow()
        })
        if (rootRef.value) {
          observerRef.value.observe(rootRef.value)
        }
      }
    })

    // 过滤可见项目和溢出项目
    const visibleItems = computed(() => {
      if (props.mode !== 'horizontal' || overflowKeys.value.length === 0) {
        return mergedItems.value
      }
      return mergedItems.value.filter((item) => {
        if (!item || typeof item !== 'object') return true
        const key = 'key' in item ? (item as any).key : undefined
        return !key || !overflowKeys.value.includes(key)
      })
    })

    const overflowedItems = computed(() => {
      if (overflowKeys.value.length === 0) return []
      return mergedItems.value.filter((item) => {
        if (!item || typeof item !== 'object') return false
        const key = 'key' in item ? (item as any).key : undefined
        return key && overflowKeys.value.includes(key)
      })
    })

    // ====================== Render ======================
    return () => {
      const showOverflow = props.mode === 'horizontal' && overflowedItems.value.length > 0

      return (
        <ul
          ref={rootRef}
          class={cls(
            prefixCls,
            `${prefixCls}-root`,
            `${prefixCls}-${props.mode}`,
            `${prefixCls}-${props.theme}`,
            {
              [`${prefixCls}-inline-collapsed`]: mergedInlineCollapsed.value,
              [`${prefixCls}-overflow`]: showOverflow,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
          role="menu"
          tabindex={0}
          onKeydown={handleKeyDown}
        >
          {renderItems(visibleItems.value)}

          {/* 水平菜单溢出指示器 */}
          {showOverflow && (
            <li
              class={cls(`${prefixCls}-submenu`, `${prefixCls}-overflowed-submenu`)}
              style={{ position: 'relative' }}
              onMouseenter={() => {
                if (props.triggerSubMenuAction === 'hover') {
                  handleOpenImmediate('__overflow__', true)
                }
              }}
              onMouseleave={() => {
                if (props.triggerSubMenuAction === 'hover') {
                  handleOpenChange('__overflow__', false)
                }
              }}
              onClick={() => {
                if (props.triggerSubMenuAction === 'click') {
                  handleOpenChange('__overflow__', !currentOpen.value.includes('__overflow__'))
                }
              }}
            >
              <div
                class={cls(`${prefixCls}-submenu-title`)}
                role="button"
                tabindex={0}
                aria-expanded={currentOpen.value.includes('__overflow__')}
                aria-haspopup="true"
                data-menu-key="__overflow__"
                data-menu-label="更多"
              >
                {props.overflowedIndicator || <span class={`${prefixCls}-overflowed-indicator`}>•••</span>}
              </div>
              <Transition name={`${prefixCls}-popup-zoom`}>
                {currentOpen.value.includes('__overflow__') && (
                  <ul
                    class={cls(
                      `${prefixCls}-sub`,
                      `${prefixCls}-${props.mode}`,
                      `${prefixCls}-${props.theme}`,
                      props.overflowedIndicatorPopupClassName,
                    )}
                  >
                    {renderItems(overflowedItems.value, 0, false)}
                  </ul>
                )}
              </Transition>
            </li>
          )}
        </ul>
      )
    }
  },
})
