import { defineComponent, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { ListItemMetaClassNames, ListItemMetaStyles } from './types'

export const ListItemMeta = defineComponent({
  name: 'ListItemMeta',
  props: {
    avatar: Object as PropType<VNode>,
    title: [String, Object] as PropType<string | VNode>,
    description: [String, Object] as PropType<string | VNode>,
    classNames: Object as PropType<ListItemMetaClassNames>,
    styles: Object as PropType<ListItemMetaStyles>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('list')

    return () => {
      const avatar = slots.avatar?.() ?? props.avatar
      const title = slots.title?.() ?? props.title
      const description = slots.description?.() ?? props.description

      const content =
        title || description ? (
          <div class={cls(`${prefixCls}-item-meta-content`, props.classNames?.content)} style={props.styles?.content}>
            {title && (
              <h4 class={cls(`${prefixCls}-item-meta-title`, props.classNames?.title)} style={props.styles?.title}>
                {title}
              </h4>
            )}
            {description && (
              <div
                class={cls(`${prefixCls}-item-meta-description`, props.classNames?.description)}
                style={props.styles?.description}
              >
                {description}
              </div>
            )}
          </div>
        ) : null

      return (
        <div class={cls(`${prefixCls}-item-meta`, props.classNames?.meta)} style={props.styles?.meta}>
          {avatar && (
            <div class={cls(`${prefixCls}-item-meta-avatar`, props.classNames?.avatar)} style={props.styles?.avatar}>
              {avatar}
            </div>
          )}
          {content}
        </div>
      )
    }
  },
})
