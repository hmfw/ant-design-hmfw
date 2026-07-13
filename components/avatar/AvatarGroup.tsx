import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { Popover } from '../popover'
import { Avatar } from './Avatar'
import type { AvatarSize, AvatarShape, AvatarGroupProps, AvatarGroupMax } from './types'
import { provideAvatarContext, useAvatarContext } from './context'

// AvatarGroup props 单一类型源
const avatarGroupProps = {
  maxCount: { type: Number, default: undefined },
  maxStyle: { type: Object as PropType<AvatarGroupProps['maxStyle']>, default: undefined },
  max: { type: Object as PropType<AvatarGroupMax>, default: undefined },
  size: {
    type: [String, Number, Object] as PropType<AvatarSize>,
    default: undefined,
  },
  shape: {
    type: String as PropType<AvatarShape>,
    default: undefined,
  },
} satisfies Record<keyof AvatarGroupProps, any>

export const AvatarGroup = defineComponent({
  name: 'AvatarGroup',
  props: avatarGroupProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('avatar')
    const groupPrefixCls = `${prefixCls}-group`
    const ctx = useAvatarContext()

    // 与上级 context 合并，支持嵌套 AvatarGroup 时继承父级配置
    provideAvatarContext({
      get size() {
        return props.size ?? ctx.size
      },
      get shape() {
        return props.shape ?? ctx.shape
      },
    })

    return () => {
      const children = slots.default?.() ?? []
      const flatChildren = (Array.isArray(children) ? children.flat() : [children]).filter(Boolean)

      // max.count 优先于已废弃的 maxCount
      const mergeCount = props.max?.count ?? props.maxCount
      const mergeStyle = props.max?.style ?? props.maxStyle

      let visibleChildren = flatChildren
      let hiddenChildren: unknown[] = []
      let overflowCount = 0

      if (mergeCount && flatChildren.length > mergeCount) {
        visibleChildren = flatChildren.slice(0, mergeCount)
        hiddenChildren = flatChildren.slice(mergeCount)
        overflowCount = flatChildren.length - mergeCount
      }

      const overflowAvatar =
        overflowCount > 0 ? (
          <Avatar
            size={props.size}
            shape={props.shape}
            style={mergeStyle}
            v-slots={{ default: () => `+${overflowCount}` }}
          />
        ) : null

      return (
        <div class={groupPrefixCls}>
          {visibleChildren}
          {overflowAvatar &&
            (props.max?.popover ? (
              <Popover
                content={() => <div class={`${groupPrefixCls}-popover`}>{hiddenChildren}</div>}
                placement="top"
                trigger="hover"
                destroyOnHidden
                {...props.max.popover}
              >
                {overflowAvatar}
              </Popover>
            ) : (
              overflowAvatar
            ))}
        </div>
      )
    }
  },
})
