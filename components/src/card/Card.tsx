import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export const Card = defineComponent({
  name: 'Card',
  props: {
    title: String,
    bordered: {
      type: Boolean,
      default: true,
    },
    hoverable: Boolean,
    loading: Boolean,
    size: {
      type: String as PropType<'default' | 'small'>,
      default: 'default',
    },
    bodyStyle: Object as PropType<Record<string, string>>,
    headStyle: Object as PropType<Record<string, string>>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('card')

    const classes = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-bordered`]: props.bordered,
        [`${prefixCls}-hoverable`]: props.hoverable,
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-small`]: props.size === 'small',
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

      const bodyNode = (
        <div class={`${prefixCls}-body`} style={props.bodyStyle}>
          {props.loading ? (
            <div class={`${prefixCls}-loading-content`}>
              {[1, 2, 3].map((i) => (
                <div key={i} class={`${prefixCls}-loading-block`} />
              ))}
            </div>
          ) : (
            slots.default?.()
          )}
        </div>
      )

      const actionsNode = slots.actions && (
        <ul class={`${prefixCls}-actions`}>{slots.actions()}</ul>
      )

      return (
        <div class={classes.value}>
          {coverNode}
          {headNode}
          {bodyNode}
          {actionsNode}
        </div>
      )
    }
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
