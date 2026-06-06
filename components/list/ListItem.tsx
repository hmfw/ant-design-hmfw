import { defineComponent, computed, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Col } from '../grid'
import { useListContext } from './context'
import type { ListItemProps } from './types'

export const ListItem = defineComponent({
  name: 'ListItem',
  props: {
    extra: Object as PropType<VNode>,
    actions: Array as PropType<VNode[]>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('list')
    const context = useListContext()

    const isFlexMode = computed(() => {
      if (context.itemLayout === 'vertical') {
        return !!props.extra || !!slots.extra
      }
      // Check if children contains only text nodes
      const children = slots.default?.()
      if (!children || children.length === 0) return true
      const hasMultipleNodes = children.length > 1
      const hasTextNode = children.some(
        (node) => typeof node.children === 'string' || typeof node.type === 'symbol'
      )
      return !(hasTextNode && hasMultipleNodes)
    })

    return () => {
      const extra = slots.extra?.() ?? props.extra
      const actions = slots.actions?.() ?? props.actions
      const hasActions = actions && (Array.isArray(actions) ? actions.length > 0 : true)

      // Render actions with separators
      const actionsContent = hasActions ? (
        <ul class={`${prefixCls}-item-action`} key="actions">
          {(Array.isArray(actions) ? actions : [actions]).map((action, i, arr) => (
            <li key={`action-${i}`}>
              {action}
              {i !== arr.length - 1 && <em class={`${prefixCls}-item-action-split`} />}
            </li>
          ))}
        </ul>
      ) : null

      const Element = context.grid ? 'div' : 'li'
      const itemClasses = cls(`${prefixCls}-item`, {
        [`${prefixCls}-item-no-flex`]: !isFlexMode.value,
      })

      const itemChildren = (
        <Element class={itemClasses}>
          {context.itemLayout === 'vertical' && extra ? (
            <>
              <div class={`${prefixCls}-item-main`} key="content">
                {slots.default?.()}
                {actionsContent}
              </div>
              <div class={`${prefixCls}-item-extra`} key="extra">
                {extra}
              </div>
            </>
          ) : (
            <>
              {slots.default?.()}
              {actionsContent}
              {extra && <div class={`${prefixCls}-item-extra`}>{extra}</div>}
            </>
          )}
        </Element>
      )

      // Wrap in Col if grid mode
      if (context.grid) {
        const { column, xs, sm, md, lg, xl, xxl, gutter } = context.grid

        // Build responsive span config
        const colProps: Record<string, any> = {}

        // Default span based on column
        if (column) {
          colProps.span = 24 / column
        }

        // Responsive spans
        if (xs) colProps.xs = 24 / xs
        if (sm) colProps.sm = 24 / sm
        if (md) colProps.md = 24 / md
        if (lg) colProps.lg = 24 / lg
        if (xl) colProps.xl = 24 / xl
        if (xxl) colProps.xxl = 24 / xxl

        return (
          <Col {...colProps} style={{ marginBottom: `${gutter || 0}px` }}>
            {itemChildren}
          </Col>
        )
      }

      return itemChildren
    }
  },
})
