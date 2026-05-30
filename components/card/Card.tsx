import { defineComponent, computed, type PropType, Fragment, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CardType, CardVariant } from './types'

// 判断子节点中是否包含 Card.Grid
function containsGrid(children: VNode[]): boolean {
  return children.some((child) => {
    if (!child) return false
    if (child.type === Fragment && Array.isArray(child.children)) {
      return containsGrid(child.children as VNode[])
    }
    return (child.type as any)?.name === 'CardGrid'
  })
}

export const Card = defineComponent({
  name: 'Card',
  props: {
    title: String,
    bordered: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String as PropType<CardVariant>,
      default: undefined,
    },
    hoverable: Boolean,
    loading: Boolean,
    size: {
      type: String as PropType<'default' | 'small'>,
      default: 'default',
    },
    type: {
      type: String as PropType<CardType>,
      default: undefined,
    },
    bodyStyle: Object as PropType<Record<string, string>>,
    headStyle: Object as PropType<Record<string, string>>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('card')

    // variant 优先于 bordered：'borderless' → 无边框；'outlined' → 有边框
    const mergedBordered = computed(() => {
      if (props.variant) return props.variant === 'outlined'
      return props.bordered
    })

    const classes = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-bordered`]: mergedBordered.value,
        [`${prefixCls}-hoverable`]: props.hoverable,
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-small`]: props.size === 'small',
        [`${prefixCls}-type-${props.type}`]: !!props.type,
      }),
    )

    return () => {
      const hasHead = props.title || slots.title || slots.extra
      const coverNode = slots.cover && (
        <div class={`${prefixCls}-cover`}>{slots.cover()}</div>
      )

      const headNode = hasHead && (
        <div class={`${prefixCls}-head`} style={props.headStyle}>
          <div class={`${prefixCls}-head-wrapper`}>
            {(props.title || slots.title) && (
              <div class={`${prefixCls}-head-title`}>
                {slots.title ? slots.title() : props.title}
              </div>
            )}
            {slots.extra && (
              <div class={`${prefixCls}-extra`}>{slots.extra()}</div>
            )}
          </div>
        </div>
      )

      const defaultChildren = slots.default?.() ?? []
      const hasGrid = Array.isArray(defaultChildren) && containsGrid(defaultChildren)

      const bodyNode = (
        <div class={`${prefixCls}-body`} style={props.bodyStyle}>
          {props.loading ? (
            <div class={`${prefixCls}-loading-content`}>
              {[1, 2, 3].map((i) => (
                <div key={i} class={`${prefixCls}-loading-block`} />
              ))}
            </div>
          ) : (
            defaultChildren
          )}
        </div>
      )

      const actionsNode = slots.actions && (
        <ul class={`${prefixCls}-actions`}>{slots.actions()}</ul>
      )

      return (
        <div class={cls(classes.value, { [`${prefixCls}-contain-grid`]: hasGrid })}>
          {coverNode}
          {headNode}
          {bodyNode}
          {actionsNode}
        </div>
      )
    }
  },
})

export const CardGrid = defineComponent({
  name: 'CardGrid',
  props: {
    hoverable: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('card')
    return () => (
      <div
        class={cls(`${prefixCls}-grid`, {
          [`${prefixCls}-grid-hoverable`]: props.hoverable,
        })}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export const CardMeta = defineComponent({
  name: 'CardMeta',
  props: {
    title: String,
    description: String,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('card')
    const metaPrefixCls = `${prefixCls}-meta`

    return () => (
      <div class={metaPrefixCls}>
        {slots.avatar && (
          <div class={`${metaPrefixCls}-avatar`}>{slots.avatar()}</div>
        )}
        <div class={`${metaPrefixCls}-detail`}>
          {(props.title || slots.title) && (
            <div class={`${metaPrefixCls}-title`}>
              {slots.title ? slots.title() : props.title}
            </div>
          )}
          {(props.description || slots.description) && (
            <div class={`${metaPrefixCls}-description`}>
              {slots.description ? slots.description() : props.description}
            </div>
          )}
        </div>
      </div>
    )
  },
})
