import { defineComponent, inject, type PropType, type VNode, type CSSProperties } from 'vue'
import { cls } from '../_utils'
import { Tooltip } from '../tooltip'
import { MENU_CONTEXT_KEY, type MenuContext } from './types'
import type { MenuItemType } from './types'

export const MenuItem = defineComponent({
  name: 'MenuItem',
  props: {
    /** items prop 驱动时传入 */
    item: Object as unknown as () => MenuItemType,
    /** slot 声明式时传入 */
    itemKey: { type: String, required: false },
    label: String,
    icon: Object as PropType<VNode | (() => VNode)>,
    disabled: Boolean,
    danger: Boolean,
    title: String,
    /** 附加信息，如快捷键提示 */
    extra: [String, Object] as PropType<string | VNode>,
    /** 缩进层级（items prop 时由父级传入） */
    depth: { type: Number, default: 0 },
    /** 是否为第一层级（用于 Tooltip 包裹判断） */
    isFirstLevel: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const context = inject<MenuContext>(MENU_CONTEXT_KEY)!
    const prefixCls = context.prefixCls

    // 合并 item prop 和独立 props，独立 props 为后备
    const itemKey = props.item?.key ?? props.itemKey ?? ''
    const itemLabel = props.item?.label ?? props.label
    const itemIcon = props.item?.icon ?? props.icon
    const itemDisabled = props.item?.disabled ?? props.disabled ?? false
    const itemDanger = props.item?.danger ?? props.danger ?? false
    const itemTitle = props.item?.title ?? props.title
    const itemExtra = props.item?.extra ?? props.extra

    return () => {
      const isSelected = context.selectedKeys.includes(itemKey)

      const itemCls = cls(
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-selected`]: isSelected,
          [`${prefixCls}-item-disabled`]: itemDisabled,
          [`${prefixCls}-item-danger`]: itemDanger,
          [`${prefixCls}-item-only-child`]: !itemIcon,
        },
        context.classNames?.item,
        isSelected && context.classNames?.itemSelected,
        itemDisabled && context.classNames?.itemDisabled,
        itemDanger && context.classNames?.itemDanger,
      )

      const itemStyle: CSSProperties = {
        ...(!context.inlineCollapsed &&
        (context.mode === 'inline' || (context.mode === 'vertical' && !props.isFirstLevel))
          ? { paddingLeft: `${context.inlineIndent * (props.depth + 1)}px` }
          : {}),
        ...context.styles?.item,
        ...(isSelected && context.styles?.itemSelected),
        ...(itemDisabled && context.styles?.itemDisabled),
        ...(itemDanger && context.styles?.itemDanger),
      }

      // 图标渲染
      const renderIcon = (): VNode | null => {
        if (!itemIcon) return null
        const iconContent = typeof itemIcon === 'function' ? itemIcon() : itemIcon
        return (
          <span class={cls(`${prefixCls}-item-icon`, context.classNames?.itemIcon)} style={context.styles?.itemIcon}>
            {iconContent}
          </span>
        )
      }

      const menuItemContent = (
        <li
          key={itemKey}
          class={itemCls}
          style={itemStyle}
          role="menuitem"
          tabindex={-1}
          aria-disabled={itemDisabled || undefined}
          aria-current={isSelected ? 'true' : undefined}
          data-menu-key={itemKey}
          data-menu-label={itemLabel}
          title={itemTitle ?? (typeof itemLabel === 'string' ? itemLabel : undefined)}
          onClick={() => !itemDisabled && context.onSelect(itemKey)}
        >
          {renderIcon()}
          <span
            class={cls(
              `${prefixCls}-title-content`,
              { [`${prefixCls}-title-content-with-extra`]: !!itemExtra },
              context.classNames?.itemContent,
            )}
            style={context.styles?.itemContent}
          >
            {itemLabel ?? slots.default?.()}
          </span>
          {itemExtra && <span class={`${prefixCls}-item-extra`}>{itemExtra}</span>}
        </li>
      )

      // 折叠态第一级菜单项：包裹 Tooltip
      if (context.inlineCollapsed && props.isFirstLevel && props.depth === 0 && context.mode === 'inline') {
        return (
          <Tooltip
            key={itemKey}
            title={itemTitle ?? itemLabel ?? ''}
            placement="right"
            mouseEnterDelay={0.5}
            triggerDisplay="contents"
            {...(typeof context.tooltip === 'object' ? context.tooltip : {})}
          >
            {menuItemContent}
          </Tooltip>
        )
      }

      return menuItemContent
    }
  },
})
