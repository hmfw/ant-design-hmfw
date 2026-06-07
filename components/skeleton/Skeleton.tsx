import { defineComponent, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
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

// Helper to get avatar default props based on context
function getAvatarBasicProps(hasTitle: boolean, hasParagraph: boolean): SkeletonAvatarProps {
  if (hasTitle && !hasParagraph) {
    return { size: 'large', shape: 'square' }
  }
  return { size: 'large', shape: 'circle' }
}

// Helper to get title default width
function getTitleBasicWidth(hasAvatar: boolean, hasParagraph: boolean): string {
  if (!hasAvatar && hasParagraph) return '38%'
  if (hasAvatar && hasParagraph) return '50%'
  return '100%'
}

// Helper to get paragraph default rows
function getParagraphBasicRows(hasAvatar: boolean, hasTitle: boolean): number {
  if (!hasAvatar && hasTitle) return 3
  return 2
}

export const Skeleton = defineComponent({
  name: 'Skeleton',
  props: {
    active: Boolean,
    loading: { type: Boolean, default: true },
    avatar: [Boolean, Object] as PropType<boolean | SkeletonAvatarProps>,
    title: { type: [Boolean, Object] as PropType<boolean | SkeletonTitleProps>, default: true },
    paragraph: {
      type: [Boolean, Object] as PropType<boolean | SkeletonParagraphProps>,
      default: true,
    },
    round: Boolean,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('skeleton')
    const config = useConfig()

    return () => {
      if (!props.loading) return slots.default?.() ?? null

      const showAvatar = !!props.avatar
      const showTitle = props.title !== false
      const showParagraph = props.paragraph !== false

      // Merge props with smart defaults
      const avatarProps = typeof props.avatar === 'object' ? props.avatar : {}
      const mergedAvatarProps = { ...getAvatarBasicProps(showTitle, showParagraph), ...avatarProps }

      const titleProps = typeof props.title === 'object' ? props.title : {}
      const titleWidth = titleProps.width ?? getTitleBasicWidth(showAvatar, showParagraph)

      const paragraphProps = typeof props.paragraph === 'object' ? props.paragraph : {}
      const rows = paragraphProps.rows ?? getParagraphBasicRows(showAvatar, showTitle)

      // Build paragraph widths array
      let paragraphWidths: (string | number)[]
      if (Array.isArray(paragraphProps.width)) {
        paragraphWidths = paragraphProps.width
      } else if (paragraphProps.width !== undefined) {
        // Last row uses the specified width
        paragraphWidths = Array(rows).fill('100%')
        paragraphWidths[rows - 1] = paragraphProps.width
      } else {
        // Default: last row is 61% when there is no avatar or no title (对齐 AntD，不限制行数)
        paragraphWidths = Array(rows).fill('100%')
        if (!showAvatar || !showTitle) {
          paragraphWidths[rows - 1] = '61%'
        }
      }

      const avatarSize =
        typeof mergedAvatarProps.size === 'number'
          ? mergedAvatarProps.size
          : mergedAvatarProps.size === 'large'
            ? 40
            : mergedAvatarProps.size === 'small'
              ? 24
              : 32
      const avatarShape = mergedAvatarProps.shape ?? 'circle'

      return (
        <div
          class={cls(prefixCls, {
            [`${prefixCls}-with-avatar`]: showAvatar,
            [`${prefixCls}-active`]: props.active,
            [`${prefixCls}-round`]: props.round,
            [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
          })}
        >
          {showAvatar && (
            <div class={`${prefixCls}-header`}>
              <span
                class={cls(`${prefixCls}-avatar`, `${prefixCls}-avatar-${avatarShape}`, {
                  [`${prefixCls}-avatar-lg`]: mergedAvatarProps.size === 'large',
                  [`${prefixCls}-avatar-sm`]: mergedAvatarProps.size === 'small',
                })}
                style={
                  typeof mergedAvatarProps.size === 'number'
                    ? { width: `${avatarSize}px`, height: `${avatarSize}px` }
                    : {}
                }
              />
            </div>
          )}
          <div class={`${prefixCls}-section`}>
            {showTitle && (
              <h3
                class={`${prefixCls}-title`}
                style={{ width: typeof titleWidth === 'number' ? `${titleWidth}px` : titleWidth }}
              />
            )}
            {showParagraph && (
              <ul class={`${prefixCls}-paragraph`}>
                {Array.from({ length: rows }).map((_, i) => {
                  const width = paragraphWidths[i] ?? '100%'
                  return <li key={i} style={{ width: typeof width === 'number' ? `${width}px` : width }} />
                })}
              </ul>
            )}
          </div>
        </div>
      )
    }
  },
})

// Helper to get size from context or prop
function useSize(customSize?: 'large' | 'small' | 'default') {
  const config = useConfig()
  if (customSize && customSize !== 'default') return customSize
  const contextSize = config.value.componentSize
  if (contextSize === 'middle') return 'default'
  return contextSize
}

export const SkeletonButton = defineComponent({
  name: 'SkeletonButton',
  props: {
    active: Boolean,
    size: { type: String as PropType<'large' | 'small' | 'default'>, default: 'default' },
    shape: {
      type: String as PropType<'default' | 'circle' | 'round' | 'square'>,
      default: 'default',
    },
    block: Boolean,
  },
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    const mergedSize = useSize(props.size)
    return () => (
      <div
        class={cls(`${prefixCls}`, `${prefixCls}-element`, {
          [`${prefixCls}-active`]: props.active,
          [`${prefixCls}-block`]: props.block,
        })}
      >
        <span
          class={cls(`${prefixCls}-button`, {
            [`${prefixCls}-button-lg`]: mergedSize === 'large',
            [`${prefixCls}-button-sm`]: mergedSize === 'small',
            [`${prefixCls}-button-circle`]: props.shape === 'circle',
            [`${prefixCls}-button-round`]: props.shape === 'round',
            [`${prefixCls}-button-square`]: props.shape === 'square',
          })}
        />
      </div>
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
    const mergedSize = useSize(props.size)
    return () => (
      <div
        class={cls(`${prefixCls}`, `${prefixCls}-element`, {
          [`${prefixCls}-active`]: props.active,
          [`${prefixCls}-block`]: props.block,
        })}
      >
        <span
          class={cls(`${prefixCls}-input`, {
            [`${prefixCls}-input-lg`]: mergedSize === 'large',
            [`${prefixCls}-input-sm`]: mergedSize === 'small',
          })}
        />
      </div>
    )
  },
})

export const SkeletonAvatar = defineComponent({
  name: 'SkeletonAvatar',
  props: {
    active: Boolean,
    size: {
      type: [String, Number] as PropType<'large' | 'small' | 'default' | number>,
      default: 'default',
    },
    shape: { type: String as PropType<'circle' | 'square'>, default: 'circle' },
  },
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    const mergedSize = useSize(typeof props.size === 'string' ? props.size : undefined)
    const finalSize = typeof props.size === 'number' ? props.size : mergedSize

    return () => {
      const sizeStyle =
        typeof props.size === 'number'
          ? {
              width: `${props.size}px`,
              height: `${props.size}px`,
              lineHeight: `${props.size}px`,
            }
          : {}

      return (
        <div
          class={cls(`${prefixCls}`, `${prefixCls}-element`, {
            [`${prefixCls}-active`]: props.active,
          })}
        >
          <span
            class={cls(`${prefixCls}-avatar`, {
              [`${prefixCls}-avatar-lg`]: finalSize === 'large',
              [`${prefixCls}-avatar-sm`]: finalSize === 'small',
              [`${prefixCls}-avatar-circle`]: props.shape === 'circle',
              [`${prefixCls}-avatar-square`]: props.shape === 'square',
            })}
            style={sizeStyle}
          />
        </div>
      )
    }
  },
})

export const SkeletonImage = defineComponent({
  name: 'SkeletonImage',
  props: {
    active: Boolean,
  },
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    return () => (
      <div
        class={cls(`${prefixCls}`, `${prefixCls}-element`, {
          [`${prefixCls}-active`]: props.active,
        })}
      >
        <div class={`${prefixCls}-image`}>
          <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class={`${prefixCls}-image-svg`}>
            <title>Image placeholder</title>
            <path
              d="M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6"
              class={`${prefixCls}-image-path`}
            />
          </svg>
        </div>
      </div>
    )
  },
})

export const SkeletonNode = defineComponent({
  name: 'SkeletonNode',
  props: {
    active: Boolean,
    fullSize: Boolean,
    nodeStyle: Object as PropType<CSSProperties>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('skeleton')
    return () => (
      <div
        class={cls(`${prefixCls}`, `${prefixCls}-element`, {
          [`${prefixCls}-active`]: props.active,
        })}
      >
        <div
          class={cls(`${prefixCls}-node`, {
            [`${prefixCls}-node-full`]: props.fullSize,
          })}
          style={props.nodeStyle}
        >
          {slots.default?.()}
        </div>
      </div>
    )
  },
})
