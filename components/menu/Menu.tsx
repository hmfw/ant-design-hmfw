import { defineComponent, ref, computed, watch, provide, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { ItemType, MenuMode, MenuTheme } from './types'

const MENU_CONTEXT_KEY = Symbol('menu-context')

interface MenuContext {
  selectedKeys: string[]
  openKeys: string[]
  mode: MenuMode
  theme: MenuTheme
  prefixCls: string
  inlineIndent: number
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
    expandIcon: [Object, Function] as PropType<VNode | ((props: { isOpen: boolean }) => VNode)>,
    triggerSubMenuAction: { type: String as PropType<'hover' | 'click'>, default: 'hover' },
    classNames: Object as PropType<import('./types').MenuClassNames>,
    styles: Object as PropType<import('./types').MenuStyles>,
  },
  emits: ['update:selectedKeys', 'update:openKeys', 'select', 'deselect', 'openChange', 'click'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('menu')

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

    const handleSelect = (key: string) => {
      // 始终发射 click 事件，以便 Dropdown 等容器可以在点击菜单项时关闭
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

    const handleOpenChange = (key: string, open: boolean) => {
      const next = open ? [...currentOpen.value, key] : currentOpen.value.filter((k) => k !== key)
      innerOpen.value = next
      emit('update:openKeys', next)
      emit('openChange', next)
    }

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
      prefixCls,
      onSelect: handleSelect,
      onDeselect: handleDeselect,
      onOpenChange: handleOpenChange,
    } as MenuContext)

    const isItemType = (item: ItemType): item is { key: string; label?: string; children?: ItemType[] } => {
      return item !== null && typeof item === 'object' && 'key' in item
    }

    const isGroupType = (
      item: ItemType,
    ): item is { type: 'group'; key?: string; label?: string; children?: ItemType[] } => {
      return item !== null && typeof item === 'object' && 'type' in item && item.type === 'group'
    }

    const isDividerType = (item: ItemType): item is { type: 'divider'; key?: string; dashed?: boolean } => {
      return item !== null && typeof item === 'object' && 'type' in item && item.type === 'divider'
    }

    const renderItems = (items: ItemType[], depth = 0): any => {
      return items
        .filter((item) => item !== null)
        .map((item, index) => {
          if (isDividerType(item)) {
            return (
              <li
                key={item.key ?? `divider-${index}`}
                class={cls(
                  `${prefixCls}-item-divider`,
                  {
                    [`${prefixCls}-item-divider-dashed`]: item.dashed,
                  },
                  props.classNames?.divider,
                )}
                style={props.styles?.divider}
                role="separator"
              />
            )
          }

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
                  {item.children && renderItems(item.children, depth)}
                </ul>
              </li>
            )
          }

          if (!isItemType(item)) return null

          const hasChildren = item.children && item.children.length > 0

          if (hasChildren) {
            const isOpen = currentOpen.value.includes(item.key)
            const hasSelectedChild = (item.children || []).some((c) => {
              if (c && typeof c === 'object' && 'key' in c) {
                return currentSelected.value.includes(c.key || '')
              }
              return false
            })

            const renderIcon = () => {
              if (!item.icon) return null
              if (typeof item.icon === 'function') {
                return (
                  <span
                    class={cls(`${prefixCls}-item-icon`, props.classNames?.submenuIcon)}
                    style={props.styles?.submenuIcon}
                  >
                    {item.icon()}
                  </span>
                )
              }
              return (
                <span
                  class={cls(`${prefixCls}-item-icon`, props.classNames?.submenuIcon)}
                  style={props.styles?.submenuIcon}
                >
                  {item.icon}
                </span>
              )
            }

            const renderExpandIcon = () => {
              if (props.expandIcon) {
                if (typeof props.expandIcon === 'function') {
                  return props.expandIcon({ isOpen })
                }
                return props.expandIcon
              }
              return (
                <span
                  class={cls(`${prefixCls}-submenu-arrow`, { open: isOpen }, props.classNames?.submenuArrow)}
                  style={props.styles?.submenuArrow}
                >
                  ▾
                </span>
              )
            }

            if (props.mode === 'inline') {
              return (
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
                >
                  <div
                    class={cls(`${prefixCls}-submenu-title`, props.classNames?.submenuTitle)}
                    style={{ paddingLeft: `${props.inlineIndent * (depth + 1)}px`, ...props.styles?.submenuTitle }}
                    role="button"
                    tabindex={item.disabled ? -1 : 0}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-disabled={item.disabled || undefined}
                    onClick={() => !item.disabled && handleOpenChange(item.key, !isOpen)}
                  >
                    {renderIcon()}
                    <span
                      class={cls(`${prefixCls}-title-content`, props.classNames?.itemContent)}
                      style={props.styles?.itemContent}
                    >
                      {item.label}
                    </span>
                    {renderExpandIcon()}
                  </div>
                  {isOpen && (
                    <ul
                      class={cls(`${prefixCls}-sub`, `${prefixCls}-inline`, props.classNames?.sub)}
                      style={props.styles?.sub}
                    >
                      {renderItems(item.children || [], depth + 1)}
                    </ul>
                  )}
                </li>
              )
            }

            // horizontal/vertical popup submenu
            const shouldTriggerOnHover = props.triggerSubMenuAction === 'hover'
            return (
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
                  ...props.styles?.submenu,
                  ...(isOpen && props.styles?.submenuOpen),
                  ...(hasSelectedChild && props.styles?.submenuSelected),
                  ...(item.disabled && props.styles?.submenuDisabled),
                }}
                onMouseenter={() => !item.disabled && shouldTriggerOnHover && handleOpenChange(item.key, true)}
                onMouseleave={() => !item.disabled && shouldTriggerOnHover && handleOpenChange(item.key, false)}
              >
                <div
                  class={cls(`${prefixCls}-submenu-title`, props.classNames?.submenuTitle)}
                  style={props.styles?.submenuTitle}
                  role="button"
                  tabindex={item.disabled ? -1 : 0}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-disabled={item.disabled || undefined}
                  onClick={() => !item.disabled && !shouldTriggerOnHover && handleOpenChange(item.key, !isOpen)}
                >
                  {renderIcon()}
                  <span
                    class={cls(`${prefixCls}-title-content`, props.classNames?.itemContent)}
                    style={props.styles?.itemContent}
                  >
                    {item.label}
                  </span>
                  {renderExpandIcon()}
                </div>
                {isOpen && (
                  <ul
                    class={cls(`${prefixCls}-sub`, `${prefixCls}-vertical`, props.classNames?.sub)}
                    style={props.styles?.sub}
                  >
                    {renderItems(item.children || [], depth + 1)}
                  </ul>
                )}
              </li>
            )
          }

          const isSelected = currentSelected.value.includes(item.key)
          const renderItemIcon = () => {
            if (!item.icon) return null
            if (typeof item.icon === 'function') {
              return (
                <span class={cls(`${prefixCls}-item-icon`, props.classNames?.itemIcon)} style={props.styles?.itemIcon}>
                  {item.icon()}
                </span>
              )
            }
            return (
              <span class={cls(`${prefixCls}-item-icon`, props.classNames?.itemIcon)} style={props.styles?.itemIcon}>
                {item.icon}
              </span>
            )
          }

          return (
            <li
              key={item.key}
              class={cls(
                `${prefixCls}-item`,
                {
                  [`${prefixCls}-item-selected`]: isSelected,
                  [`${prefixCls}-item-disabled`]: item.disabled,
                  [`${prefixCls}-item-danger`]: item.danger,
                },
                props.classNames?.item,
                isSelected && props.classNames?.itemSelected,
                item.disabled && props.classNames?.itemDisabled,
                item.danger && props.classNames?.itemDanger,
              )}
              style={{
                ...(props.mode === 'inline' ? { paddingLeft: `${props.inlineIndent * (depth + 1)}px` } : {}),
                ...props.styles?.item,
                ...(isSelected && props.styles?.itemSelected),
                ...(item.disabled && props.styles?.itemDisabled),
                ...(item.danger && props.styles?.itemDanger),
              }}
              role="menuitem"
              tabindex={item.disabled ? -1 : 0}
              aria-disabled={item.disabled || undefined}
              aria-current={isSelected ? 'true' : undefined}
              title={item.title ?? (typeof item.label === 'string' ? item.label : undefined)}
              onClick={() => !item.disabled && handleSelect(item.key)}
            >
              {renderItemIcon()}
              <span
                class={cls(`${prefixCls}-title-content`, props.classNames?.itemContent)}
                style={props.styles?.itemContent}
              >
                {item.label}
              </span>
            </li>
          )
        })
    }

    return () => (
      <ul
        class={cls(
          prefixCls,
          `${prefixCls}-root`,
          `${prefixCls}-${props.mode}`,
          `${prefixCls}-${props.theme}`,
          {
            [`${prefixCls}-inline-collapsed`]: props.inlineCollapsed,
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
        role="menu"
      >
        {renderItems(props.items ?? [])}
      </ul>
    )
  },
})
