import { defineComponent, inject } from 'vue'
import { cls } from '../_utils'
import { MENU_CONTEXT_KEY, type MenuContext } from './types'
import type { MenuItemGroupType } from './types'

export const MenuItemGroup = defineComponent({
  name: 'MenuItemGroup',
  props: {
    /** items prop 驱动时传入 */
    item: Object as unknown as () => MenuItemGroupType,
    /** slot 声明式时传入 */
    itemKey: String,
    label: String,
  },
  setup(props, { slots }) {
    const context = inject<MenuContext>(MENU_CONTEXT_KEY)!

    return () => {
      const label = props.item?.label ?? props.label
      return (
        <li
          class={cls(`${context.prefixCls}-item-group`, context.classNames?.itemGroup)}
          style={context.styles?.itemGroup}
        >
          <div
            class={cls(`${context.prefixCls}-item-group-title`, context.classNames?.itemGroupTitle)}
            style={context.styles?.itemGroupTitle}
          >
            {label}
          </div>
          <ul
            class={cls(`${context.prefixCls}-item-group-list`, context.classNames?.itemGroupList)}
            style={context.styles?.itemGroupList}
          >
            {slots.default?.()}
          </ul>
        </li>
      )
    }
  },
})
