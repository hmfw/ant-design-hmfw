import { defineComponent, inject, Transition, type PropType, type VNode, type CSSProperties } from 'vue'
import { cls } from '../_utils'
import { Trigger } from '../_internal/trigger'
import { MENU_CONTEXT_KEY, type MenuContext } from './types'
import type { SubMenuType, MenuItemType } from './types'
import { useMenuRender } from './composables/useMenuRender'

export const SubMenu = defineComponent({
  name: 'SubMenu',
  props: {
    /** items prop 驱动时传入 */
    item: Object as unknown as () => SubMenuType,
    /** slot 声明式时传入 */
    itemKey: { type: String, required: false },
    label: String,
    title: String,
    icon: Object as PropType<VNode | (() => VNode)>,
    disabled: Boolean,
    danger: Boolean,
    popupClassName: String,
    popupOffset: Array as unknown as PropType<[number, number]>,
    theme: String as PropType<'light' | 'dark'>,
    /** 缩进层级 */
    depth: { type: Number, default: 0 },
  },
  setup(props, { slots }) {
    const context = inject<MenuContext>(MENU_CONTEXT_KEY)!

    // 渲染工具
    const { renderItems } = useMenuRender()

    // 合并 item prop 和独立 props
    const itemKey = props.item?.key ?? props.itemKey ?? ''
    const itemLabel = props.item?.label ?? props.label ?? props.title
    const itemIcon = props.item?.icon ?? props.icon
    const itemDisabled = props.item?.disabled ?? props.disabled ?? false
    // const itemDanger = props.item?.danger ?? props.danger ?? false
    const itemPopupClassName = props.item?.popupClassName ?? props.popupClassName ?? ''
    const itemPopupOffset = props.item?.popupOffset ?? props.popupOffset
    const itemTheme = props.item?.theme ?? props.theme ?? context.theme
    const childrenData = props.item?.children ?? []

    const isOpen = (): boolean => context.openKeys.includes(itemKey)

    // 检查后代是否有选中项
    const hasSelectedDescendant = (
      children: (
        MenuItemType | SubMenuType | import('./types').MenuItemGroupType | import('./types').MenuDividerType | null
      )[],
    ): boolean =>
      children.some((c) => {
        if (!c || typeof c !== 'object') return false
        if ('key' in c) {
          const cKey = (c as unknown as Record<string, unknown>).key as string | undefined
          if (cKey && context.selectedKeys.includes(cKey)) return true
        }
        if ('children' in c && Array.isArray((c as unknown as Record<string, unknown>).children)) {
          return hasSelectedDescendant((c as unknown as Record<string, unknown>).children as any[])
        }
        return false
      })

    // 无需 re-provide：子组件直接继承 Menu 注入的响应式 context
    // （原先仅为覆盖已废弃的 firstLevel 字段，且 {...context} 会把 getter 求值成静态快照，反而破坏响应性）

    // 展开图标渲染
    const renderExpandIcon = (open: boolean): VNode | null => {
      const expandIcon = context.expandIcon
      if (expandIcon !== undefined) {
        if (expandIcon === null || expandIcon === false) return null
        if (typeof expandIcon === 'function') return expandIcon({ isOpen: open })
        return expandIcon as VNode
      }
      return (
        <span
          class={cls(`${context.prefixCls}-submenu-arrow`, context.classNames?.submenuArrow)}
          style={context.styles?.submenuArrow}
        />
      )
    }

    // 图标渲染
    const renderIcon = (): VNode | null => {
      if (!itemIcon) return null
      const iconContent = typeof itemIcon === 'function' ? itemIcon() : itemIcon
      return (
        <span
          class={cls(`${context.prefixCls}-item-icon`, context.classNames?.submenuIcon)}
          style={context.styles?.submenuIcon}
        >
          {iconContent}
        </span>
      )
    }

    return () => {
      const prefixCls = context.prefixCls
      const open = isOpen()
      const hasSelectedChild = hasSelectedDescendant(childrenData)
      const isInline = context.mode === 'inline' && !context.inlineCollapsed

      const submenuCls = cls(
        `${prefixCls}-submenu`,
        `${prefixCls}-submenu-${isInline ? 'inline' : context.mode}`,
        {
          [`${prefixCls}-submenu-open`]: open,
          [`${prefixCls}-submenu-selected`]: hasSelectedChild,
          [`${prefixCls}-submenu-disabled`]: itemDisabled,
        },
        context.classNames?.submenu,
        open && context.classNames?.submenuOpen,
        hasSelectedChild && context.classNames?.submenuSelected,
        itemDisabled && context.classNames?.submenuDisabled,
      )

      const submenuStyle: CSSProperties = {
        ...(!isInline ? { position: 'relative' } : {}),
        ...context.styles?.submenu,
        ...(open && context.styles?.submenuOpen),
        ...(hasSelectedChild && context.styles?.submenuSelected),
        ...(itemDisabled && context.styles?.submenuDisabled),
      }

      // 子列表内容：优先 slots，否则 items 数据
      const renderSubContent = (): VNode | VNode[] | null => {
        const slotChildren = slots.default?.()
        if (slotChildren && slotChildren.length > 0) {
          return slotChildren
        }
        if (childrenData.length > 0) {
          return renderItems(childrenData, props.depth + 1).filter(Boolean) as VNode[]
        }
        return null
      }

      // ---- Inline 模式 ----
      if (isInline) {
        return (
          <li key={itemKey} class={submenuCls} style={submenuStyle} data-menu-key={itemKey} data-menu-label={itemLabel}>
            <div
              class={cls(`${prefixCls}-submenu-title`, context.classNames?.submenuTitle)}
              style={{
                paddingLeft: `${context.inlineIndent * (props.depth + 1)}px`,
                ...context.styles?.submenuTitle,
              }}
              role="button"
              tabindex={-1}
              aria-expanded={open}
              aria-haspopup="true"
              aria-disabled={itemDisabled || undefined}
              onClick={() => !itemDisabled && context.onOpenChange(itemKey, !open)}
            >
              {renderIcon()}
              <span
                class={cls(`${prefixCls}-title-content`, context.classNames?.itemContent)}
                style={context.styles?.itemContent}
              >
                {itemLabel}
              </span>
              {renderExpandIcon(open)}
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
              {open && (
                <ul
                  class={cls(`${prefixCls}-sub`, `${prefixCls}-inline`, context.classNames?.sub)}
                  style={context.styles?.sub}
                >
                  {renderSubContent()}
                </ul>
              )}
            </Transition>
          </li>
        )
      }

      // ---- Popup 模式 (vertical / horizontal) ----
      const shouldTriggerOnHover = context.triggerSubMenuAction === 'hover'

      return (
        <li key={itemKey} class={submenuCls} style={submenuStyle} data-menu-key={itemKey} data-menu-label={itemLabel}>
          <Trigger
            open={open}
            trigger={shouldTriggerOnHover ? 'hover' : 'click'}
            placement={context.mode === 'horizontal' ? 'bottomLeft' : 'rightTop'}
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
            autoAdjustOverflow
            closeOnOutsideClick={!shouldTriggerOnHover}
            closeOnEscape
            triggerDisplay="block"
            disabled={itemDisabled}
            zIndex={1050}
            popupClass={prefixCls}
            popupStyle={
              itemPopupOffset ? { left: `${itemPopupOffset[0]}px`, top: `${itemPopupOffset[1]}px` } : undefined
            }
            onOpenChange={(v: boolean) => context.onOpenChange(itemKey, v)}
          >
            {{
              default: () => (
                <div
                  class={cls(`${prefixCls}-submenu-title`, context.classNames?.submenuTitle)}
                  style={context.styles?.submenuTitle}
                  role="button"
                  tabindex={-1}
                  aria-expanded={open}
                  aria-haspopup="true"
                  aria-disabled={itemDisabled || undefined}
                  data-menu-key={itemKey}
                  data-menu-label={itemLabel}
                  onClick={(e: MouseEvent) => {
                    if (itemDisabled) return
                    if (!shouldTriggerOnHover || e.detail === 0) {
                      e.stopPropagation()
                      context.onOpenChange(itemKey, !open)
                    }
                  }}
                >
                  {renderIcon()}
                  <span
                    class={cls(`${prefixCls}-title-content`, context.classNames?.itemContent)}
                    style={context.styles?.itemContent}
                  >
                    {itemLabel}
                  </span>
                  {renderExpandIcon(open)}
                </div>
              ),
              popup: () => {
                const subContent = renderSubContent()
                return (
                  <ul
                    class={cls(
                      `${prefixCls}-sub`,
                      `${prefixCls}-vertical`,
                      `${prefixCls}-${itemTheme}`,
                      itemPopupClassName,
                      context.classNames?.sub,
                    )}
                    style={context.styles?.sub}
                  >
                    {typeof props.item?.popupRender === 'function'
                      ? props.item.popupRender(subContent as unknown as VNode)
                      : subContent}
                  </ul>
                )
              },
            }}
          </Trigger>
        </li>
      )
    }
  },
})
