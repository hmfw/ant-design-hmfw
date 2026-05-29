import { defineComponent, ref, computed, watch, provide, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export interface MenuItem {
  key: string
  label: string
  icon?: string
  disabled?: boolean
  danger?: boolean
  type?: 'divider' | 'group'
  children?: MenuItem[]
  title?: string
}

const MENU_CONTEXT_KEY = Symbol('menu-context')

interface MenuContext {
  selectedKeys: string[]
  openKeys: string[]
  mode: string
  prefixCls: string
  onSelect: (key: string) => void
  onOpenChange: (key: string, open: boolean) => void
}

export const Menu = defineComponent({
  name: 'Menu',
  props: {
    items: Array as PropType<MenuItem[]>,
    mode: { type: String as PropType<'horizontal' | 'vertical' | 'inline'>, default: 'vertical' },
    selectedKeys: Array as PropType<string[]>,
    defaultSelectedKeys: Array as PropType<string[]>,
    openKeys: Array as PropType<string[]>,
    defaultOpenKeys: Array as PropType<string[]>,
    inlineCollapsed: Boolean,
    theme: { type: String as PropType<'light' | 'dark'>, default: 'light' },
    multiple: Boolean,
    selectable: { type: Boolean, default: true },
    inlineIndent: { type: Number, default: 24 },
  },
  emits: ['update:selectedKeys', 'update:openKeys', 'select', 'deselect', 'openChange', 'click'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('menu')

    const innerSelected = ref<string[]>(props.defaultSelectedKeys ?? props.selectedKeys ?? [])
    const innerOpen = ref<string[]>(props.defaultOpenKeys ?? props.openKeys ?? [])

    const isControlledSelected = computed(() => props.selectedKeys !== undefined)
    const isControlledOpen = computed(() => props.openKeys !== undefined)

    const currentSelected = computed(() => isControlledSelected.value ? props.selectedKeys! : innerSelected.value)
    const currentOpen = computed(() => isControlledOpen.value ? props.openKeys! : innerOpen.value)

    watch(() => props.selectedKeys, (v) => { if (v) innerSelected.value = v })
    watch(() => props.openKeys, (v) => { if (v) innerOpen.value = v })

    const handleSelect = (key: string) => {
      if (!props.selectable) return
      let next: string[]
      if (props.multiple) {
        next = currentSelected.value.includes(key)
          ? currentSelected.value.filter((k) => k !== key)
          : [...currentSelected.value, key]
      } else {
        next = [key]
      }
      innerSelected.value = next
      emit('update:selectedKeys', next)
      emit('select', { key, selectedKeys: next })
      emit('click', { key })
    }

    const handleOpenChange = (key: string, open: boolean) => {
      const next = open
        ? [...currentOpen.value, key]
        : currentOpen.value.filter((k) => k !== key)
      innerOpen.value = next
      emit('update:openKeys', next)
      emit('openChange', next)
    }

    provide(MENU_CONTEXT_KEY, {
      get selectedKeys() { return currentSelected.value },
      get openKeys() { return currentOpen.value },
      get mode() { return props.mode },
      prefixCls,
      onSelect: handleSelect,
      onOpenChange: handleOpenChange,
    } as MenuContext)

    const renderItems = (items: MenuItem[], depth = 0): any => {
      return items.map((item) => {
        if (item.type === 'divider') {
          return <li key={item.key} class={`${prefixCls}-item-divider`} role="separator" />
        }

        if (item.type === 'group') {
          return (
            <li key={item.key} class={`${prefixCls}-item-group`}>
              <div class={`${prefixCls}-item-group-title`}>{item.label}</div>
              <ul class={`${prefixCls}-item-group-list`}>
                {item.children && renderItems(item.children, depth + 1)}
              </ul>
            </li>
          )
        }

        if (item.children?.length) {
          const isOpen = currentOpen.value.includes(item.key)
          const hasSelectedChild = item.children.some((c) => currentSelected.value.includes(c.key))

          if (props.mode === 'inline') {
            return (
              <li
                key={item.key}
                class={cls(`${prefixCls}-submenu`, `${prefixCls}-submenu-inline`, {
                  [`${prefixCls}-submenu-open`]: isOpen,
                  [`${prefixCls}-submenu-selected`]: hasSelectedChild,
                })}
              >
                <div
                  class={`${prefixCls}-submenu-title`}
                  style={{ paddingLeft: `${props.inlineIndent * (depth + 1)}px` }}
                  role="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => handleOpenChange(item.key, !isOpen)}
                >
                  {item.icon && <span class={`${prefixCls}-item-icon`}>{item.icon}</span>}
                  <span class={`${prefixCls}-title-content`}>{item.label}</span>
                  <span class={cls(`${prefixCls}-submenu-arrow`, { open: isOpen })}>▾</span>
                </div>
                {isOpen && (
                  <ul class={`${prefixCls}-sub ${prefixCls}-inline`}>
                    {renderItems(item.children, depth + 1)}
                  </ul>
                )}
              </li>
            )
          }

          // horizontal/vertical popup submenu
          return (
            <li
              key={item.key}
              class={cls(`${prefixCls}-submenu`, `${prefixCls}-submenu-${props.mode}`, {
                [`${prefixCls}-submenu-open`]: isOpen,
                [`${prefixCls}-submenu-selected`]: hasSelectedChild,
              })}
              onMouseenter={() => props.mode !== 'vertical' && handleOpenChange(item.key, true)}
              onMouseleave={() => props.mode !== 'vertical' && handleOpenChange(item.key, false)}
            >
              <div
                class={`${prefixCls}-submenu-title`}
                role="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => props.mode === 'vertical' && handleOpenChange(item.key, !isOpen)}
              >
                {item.icon && <span class={`${prefixCls}-item-icon`}>{item.icon}</span>}
                <span class={`${prefixCls}-title-content`}>{item.label}</span>
                <span class={`${prefixCls}-submenu-arrow`}>▾</span>
              </div>
              {isOpen && (
                <ul class={`${prefixCls}-sub ${prefixCls}-vertical`}>
                  {renderItems(item.children, depth + 1)}
                </ul>
              )}
            </li>
          )
        }

        const isSelected = currentSelected.value.includes(item.key)
        return (
          <li
            key={item.key}
            class={cls(`${prefixCls}-item`, {
              [`${prefixCls}-item-selected`]: isSelected,
              [`${prefixCls}-item-disabled`]: item.disabled,
              [`${prefixCls}-item-danger`]: item.danger,
            })}
            style={props.mode === 'inline' ? { paddingLeft: `${props.inlineIndent * (depth + 1)}px` } : {}}
            role="menuitem"
            aria-disabled={item.disabled || undefined}
            aria-current={isSelected ? 'true' : undefined}
            title={item.title ?? item.label}
            onClick={() => !item.disabled && handleSelect(item.key)}
          >
            {item.icon && <span class={`${prefixCls}-item-icon`}>{item.icon}</span>}
            <span class={`${prefixCls}-title-content`}>{item.label}</span>
          </li>
        )
      })
    }

    return () => (
      <ul
        class={cls(prefixCls, `${prefixCls}-root`, `${prefixCls}-${props.mode}`, `${prefixCls}-${props.theme}`, {
          [`${prefixCls}-inline-collapsed`]: props.inlineCollapsed,
        })}
        role="menu"
      >
        {renderItems(props.items ?? [])}
      </ul>
    )
  },
})
