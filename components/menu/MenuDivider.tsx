import { computed, defineComponent, inject } from 'vue'
import { cls } from '../_utils/cls'
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

    const dividerCls = computed(() => {
      const dashed = props.item?.dashed ?? props.dashed
      return cls(
        `${context.prefixCls}-item-divider`,
        { [`${context.prefixCls}-item-divider-dashed`]: dashed },
        context.classNames?.divider,
      )
    })

    return () => <li class={dividerCls.value} style={context.styles?.divider} role="separator" />
  },
})
