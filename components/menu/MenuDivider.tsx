import { defineComponent, inject } from 'vue'
import { cls } from '../_utils'
import { MENU_CONTEXT_KEY, type MenuContext } from './types'
import type { MenuDividerType } from './types'

export const MenuDivider = defineComponent({
  name: 'MenuDivider',
  props: {
    /** items prop 驱动时传入 */
    item: Object as unknown as () => MenuDividerType,
    /** slot 声明式时传入 */
    itemKey: String,
    dashed: Boolean,
  },
  setup(props) {
    const context = inject<MenuContext>(MENU_CONTEXT_KEY)!

    return () => {
      const dashed = props.item?.dashed ?? props.dashed
      const dividerCls = cls(
        `${context.prefixCls}-item-divider`,
        { [`${context.prefixCls}-item-divider-dashed`]: dashed },
        context.classNames?.divider,
      )
      return <li class={dividerCls} style={context.styles?.divider} role="separator" />
    }
  },
})
