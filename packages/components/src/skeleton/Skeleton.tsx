import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export interface SkeletonAvatarProps {
  size?: 'large' | 'small' | 'default' | number
  shape?: 'circle' | 'square'
}

export interface SkeletonTitleProps {
  width?: string | number
}

export interface SkeletonParagraphProps {
  rows?: number
  width?: string | number | (string | number)[]
}

export const Skeleton = defineComponent({
  name: 'Skeleton',
  props: {
    active: Boolean,
    loading: { type: Boolean, default: true },
    avatar: [Boolean, Object] as PropType<boolean | SkeletonAvatarProps>,
    title: { type: [Boolean, Object] as PropType<boolean | SkeletonTitleProps>, default: true },
    paragraph: { type: [Boolean, Object] as PropType<boolean | SkeletonParagraphProps>, default: true },
    round: Boolean,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('skeleton')

    return () => {
      if (!props.loading) return slots.default?.() ?? null

      const avatarProps = typeof props.avatar === 'object' ? props.avatar : {}
      const titleProps = typeof props.title === 'object' ? props.title : {}
      const paragraphProps = typeof props.paragraph === 'object' ? props.paragraph : {}

      const showAvatar = !!props.avatar
      const showTitle = props.title !== false
      const showParagraph = props.paragraph !== false

      const rows = paragraphProps.rows ?? 3
      const paragraphWidths = Array.isArray(paragraphProps.width)
        ? paragraphProps.width
        : Array(rows).fill(paragraphProps.width ?? '100%')

      const avatarSize = typeof avatarProps.size === 'number'
        ? avatarProps.size
        : avatarProps.size === 'large' ? 40 : avatarProps.size === 'small' ? 24 : 32
      const avatarShape = avatarProps.shape ?? 'circle'

      return (
        <div class={cls(prefixCls, {
          [`${prefixCls}-with-avatar`]: showAvatar,
          [`${prefixCls}-active`]: props.active,
          [`${prefixCls}-round`]: props.round,
        })}>
          {showAvatar && (
            <div class={`${prefixCls}-header`}>
              <span
                class={cls(`${prefixCls}-avatar`, `${prefixCls}-avatar-${avatarShape}`, {
                  [`${prefixCls}-avatar-lg`]: avatarProps.size === 'large',
                  [`${prefixCls}-avatar-sm`]: avatarProps.size === 'small',
                })}
                style={typeof avatarProps.size === 'number' ? { width: `${avatarSize}px`, height: `${avatarSize}px` } : {}}
              />
            </div>
          )}
          <div class={`${prefixCls}-content`}>
            {showTitle && (
              <h3
                class={`${prefixCls}-title`}
                style={{ width: titleProps.width ?? '38%' }}
              />
            )}
            {showParagraph && (
              <ul class={`${prefixCls}-paragraph`}>
                {Array.from({ length: rows }).map((_, i) => (
                  <li
                    key={i}
                    style={{ width: paragraphWidths[i] ?? '100%' }}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      )
    }
  },
})

export const SkeletonButton = defineComponent({
  name: 'SkeletonButton',
  props: {
    active: Boolean,
    size: { type: String as PropType<'large' | 'small' | 'default'>, default: 'default' },
    shape: { type: String as PropType<'default' | 'circle' | 'round'>, default: 'default' },
    block: Boolean,
  },
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    return () => (
      <span class={cls(`${prefixCls}-button`, {
        [`${prefixCls}-button-${props.size}`]: props.size !== 'default',
        [`${prefixCls}-active`]: props.active,
        [`${prefixCls}-button-circle`]: props.shape === 'circle',
        [`${prefixCls}-button-round`]: props.shape === 'round',
        [`${prefixCls}-block`]: props.block,
      })} />
    )
  },
})

export const SkeletonInput = defineComponent({
  name: 'SkeletonInput',
  props: {
    active: Boolean,
    size: { type: String as PropType<'large' | 'small' | 'default'>, default: 'default' },
    block: Boolean,
  },
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    return () => (
      <span class={cls(`${prefixCls}-input`, {
        [`${prefixCls}-input-${props.size}`]: props.size !== 'default',
        [`${prefixCls}-active`]: props.active,
        [`${prefixCls}-block`]: props.block,
      })} />
    )
  },
})
