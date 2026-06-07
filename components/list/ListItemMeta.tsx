import { defineComponent, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import type { ListItemMetaProps } from './types'

export const ListItemMeta = defineComponent({
  name: 'ListItemMeta',
  props: {
    avatar: Object as PropType<VNode>,
    title: [String, Object] as PropType<string | VNode>,
    description: [String, Object] as PropType<string | VNode>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('list')

    return () => {
      const avatar = slots.avatar?.() ?? props.avatar
      const title = slots.title?.() ?? props.title
      const description = slots.description?.() ?? props.description

      const content =
        title || description ? (
          <div class={`${prefixCls}-item-meta-content`}>
            {title && <h4 class={`${prefixCls}-item-meta-title`}>{title}</h4>}
            {description && <div class={`${prefixCls}-item-meta-description`}>{description}</div>}
          </div>
        ) : null

      return (
        <div class={`${prefixCls}-item-meta`}>
          {avatar && <div class={`${prefixCls}-item-meta-avatar`}>{avatar}</div>}
          {content}
        </div>
      )
    }
  },
})
