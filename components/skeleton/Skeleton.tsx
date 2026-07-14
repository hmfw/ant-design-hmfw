import { defineComponent, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import type {
  SkeletonProps,
  SkeletonAvatarProps,
  SkeletonTitleProps,
  SkeletonParagraphProps,
  SkeletonButtonProps,
  SkeletonInputProps,
  SkeletonAvatarComponentProps,
  SkeletonImageProps,
  SkeletonNodeProps,
  SkeletonClassNames,
  SkeletonStyles,
  SkeletonButtonClassNames,
  SkeletonButtonStyles,
  SkeletonInputClassNames,
  SkeletonInputStyles,
  SkeletonAvatarClassNames,
  SkeletonAvatarStyles,
  SkeletonImageClassNames,
  SkeletonImageStyles,
  SkeletonNodeClassNames,
  SkeletonNodeStyles,
} from './types'

// 尺寸约束常量
const SIZE_CONSTRAINTS = {
  MIN: 8, // 最小尺寸 8px (避免不可见)
  MAX: 200, // 最大尺寸 200px (避免布局破坏)
  DEFAULT: { large: 40, small: 24, default: 32 },
} as const

// 段落约束常量
const PARAGRAPH_CONSTRAINTS = {
  MIN_ROWS: 1,
  MAX_ROWS: 20, // 防止渲染过多 DOM 节点
  DEFAULT_LAST_ROW_WIDTH: '61%',
} as const

/**
 * 标准化数字尺寸，确保在合理范围内
 */
function normalizeNumericSize(size: number): number {
  if (!isFinite(size)) {
    if (import.meta.env.DEV) {
      console.warn(`[Skeleton] 无效的 size 值: ${size}，已回退到 ${SIZE_CONSTRAINTS.DEFAULT.default}px`)
    }
    return SIZE_CONSTRAINTS.DEFAULT.default
  }
  if (size < SIZE_CONSTRAINTS.MIN) {
    if (import.meta.env.DEV) {
      console.warn(`[Skeleton] size ${size}px 过小，已调整为 ${SIZE_CONSTRAINTS.MIN}px`)
    }
    return SIZE_CONSTRAINTS.MIN
  }
  if (size > SIZE_CONSTRAINTS.MAX) {
    if (import.meta.env.DEV) {
      console.warn(`[Skeleton] size ${size}px 过大，已调整为 ${SIZE_CONSTRAINTS.MAX}px`)
    }
    return SIZE_CONSTRAINTS.MAX
  }
  return size
}

// 合法宽度正则 (支持数字 + 常见 CSS 单位)
const VALID_WIDTH_REGEX = /^[\d.]+(%|px|rem|em|vh|vw)?$/

/**
 * 标准化宽度值，确保类型安全
 */
function normalizeWidth(width: string | number | undefined): string {
  if (width === undefined) return '100%'

  if (typeof width === 'number') {
    if (!isFinite(width)) {
      if (import.meta.env.DEV) {
        console.warn(`[Skeleton] 无效的 width 值: ${width}，已回退到 100%`)
      }
      return '100%'
    }
    return `${Math.max(0, width)}px`
  }

  const trimmed = width.trim()
  if (!trimmed || !VALID_WIDTH_REGEX.test(trimmed)) {
    if (import.meta.env.DEV) {
      console.warn(`[Skeleton] 无效的 width 值: "${width}"，已回退到 100%`)
    }
    return '100%'
  }

  return trimmed
}

/**
 * 布局宽度常量
 * 基于 Ant Design 视觉规范
 */
const LAYOUT_WIDTHS = {
  /** 标题宽度: 有头像 + 有段落 */
  TITLE_WITH_AVATAR_AND_PARAGRAPH: '50%',
  /** 标题宽度: 无头像 + 有段落 */
  TITLE_NO_AVATAR_WITH_PARAGRAPH: '38%',
  /** 标题宽度: 无段落 (独占一行) */
  TITLE_FULL: '100%',
} as const

// Helper to get avatar default props based on context
function getAvatarBasicProps(hasTitle: boolean, hasParagraph: boolean): SkeletonAvatarProps {
  if (hasTitle && !hasParagraph) {
    return { size: 'large', shape: 'square' }
  }
  return { size: 'large', shape: 'circle' }
}

// Helper to get title default width
function getTitleBasicWidth(hasAvatar: boolean, hasParagraph: boolean): string {
  if (!hasAvatar && hasParagraph) return LAYOUT_WIDTHS.TITLE_NO_AVATAR_WITH_PARAGRAPH
  if (hasAvatar && hasParagraph) return LAYOUT_WIDTHS.TITLE_WITH_AVATAR_AND_PARAGRAPH
  return LAYOUT_WIDTHS.TITLE_FULL
}

// Helper to get paragraph default rows
function getParagraphBasicRows(hasAvatar: boolean, hasTitle: boolean): number {
  if (!hasAvatar && hasTitle) return 3
  return 2
}

const skeletonProps = {
  active: { type: Boolean, default: undefined },
  loading: { type: Boolean, default: true },
  avatar: {
    type: [Boolean, Object] as PropType<boolean | SkeletonAvatarProps>,
    default: undefined,
  },
  title: {
    type: [Boolean, Object] as PropType<boolean | SkeletonTitleProps>,
    default: true,
  },
  paragraph: {
    type: [Boolean, Object] as PropType<boolean | SkeletonParagraphProps>,
    default: true,
  },
  round: { type: Boolean, default: undefined },
  classNames: { type: Object as PropType<SkeletonClassNames>, default: undefined },
  styles: { type: Object as PropType<SkeletonStyles>, default: undefined },
} satisfies Record<keyof SkeletonProps, any>

export const Skeleton = defineComponent({
  name: 'Skeleton',
  props: skeletonProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('skeleton')
    const config = useConfig()

    return () => {
      if (!props.loading) return slots.default?.() ?? null

      const showAvatar = !!props.avatar
      const showTitle = props.title !== false
      const showParagraph = props.paragraph !== false

      // 开发环境警告: 全部禁用时渲染空白
      if (import.meta.env.DEV && !showTitle && !showParagraph && !showAvatar) {
        console.warn(
          '[Skeleton] 未启用任何内容 (title/paragraph/avatar 全为 false)，将渲染空白区域。\n' +
            '建议至少启用一项或使用 loading={false} 显示实际内容。',
        )
      }

      // Merge props with smart defaults
      const avatarProps = typeof props.avatar === 'object' ? props.avatar : {}
      const mergedAvatarProps = { ...getAvatarBasicProps(showTitle, showParagraph), ...avatarProps }

      const titleProps = typeof props.title === 'object' ? props.title : {}
      const titleWidth = titleProps.width ?? getTitleBasicWidth(showAvatar, showParagraph)

      const paragraphProps = typeof props.paragraph === 'object' ? props.paragraph : {}
      const rawRows = paragraphProps.rows ?? getParagraphBasicRows(showAvatar, showTitle)
      const rows = Math.max(PARAGRAPH_CONSTRAINTS.MIN_ROWS, Math.min(rawRows, PARAGRAPH_CONSTRAINTS.MAX_ROWS))

      // 开发环境警告
      if (import.meta.env.DEV && paragraphProps.rows !== undefined) {
        if (paragraphProps.rows < 1) {
          console.warn(`[Skeleton] paragraph.rows 不能小于 1，已调整为 1`)
        }
        if (paragraphProps.rows > PARAGRAPH_CONSTRAINTS.MAX_ROWS) {
          console.warn(
            `[Skeleton] paragraph.rows 过大 (${paragraphProps.rows})，已调整为 ${PARAGRAPH_CONSTRAINTS.MAX_ROWS}。` +
              `提示: 过多行数可能影响性能`,
          )
        }
      }

      // Build paragraph widths array
      let paragraphWidths: (string | number)[]
      if (Array.isArray(paragraphProps.width)) {
        // 数组长度不足时用 '100%' 填充，超出时自动截断
        const widthArray = paragraphProps.width
        paragraphWidths = Array.from({ length: rows }, (_, i) => widthArray[i] ?? '100%')
      } else if (paragraphProps.width !== undefined) {
        // Last row uses the specified width
        paragraphWidths = Array(rows).fill('100%')
        paragraphWidths[rows - 1] = paragraphProps.width
      } else {
        // Default: last row is 61% when there is no avatar or no title (对齐 AntD，不限制行数)
        paragraphWidths = Array(rows).fill('100%')
        if (!showAvatar || !showTitle) {
          paragraphWidths[rows - 1] = PARAGRAPH_CONSTRAINTS.DEFAULT_LAST_ROW_WIDTH
        }
      }

      const avatarSize =
        typeof mergedAvatarProps.size === 'number'
          ? normalizeNumericSize(mergedAvatarProps.size)
          : SIZE_CONSTRAINTS.DEFAULT[mergedAvatarProps.size ?? 'default']
      const avatarShape = mergedAvatarProps.shape ?? 'circle'

      return (
        <div
          class={cls(
            prefixCls,
            {
              [`${prefixCls}-with-avatar`]: showAvatar,
              [`${prefixCls}-active`]: props.active,
              [`${prefixCls}-round`]: props.round,
              [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
        >
          {showAvatar && (
            <div class={cls(`${prefixCls}-header`, props.classNames?.header)} style={props.styles?.header}>
              <span
                class={cls(
                  `${prefixCls}-avatar`,
                  `${prefixCls}-avatar-${avatarShape}`,
                  {
                    [`${prefixCls}-avatar-lg`]: mergedAvatarProps.size === 'large',
                    [`${prefixCls}-avatar-sm`]: mergedAvatarProps.size === 'small',
                  },
                  props.classNames?.avatar,
                )}
                style={{
                  ...(typeof mergedAvatarProps.size === 'number'
                    ? { width: `${avatarSize}px`, height: `${avatarSize}px` }
                    : {}),
                  ...props.styles?.avatar,
                }}
              />
            </div>
          )}
          <div class={cls(`${prefixCls}-section`, props.classNames?.section)} style={props.styles?.section}>
            {showTitle && (
              <h3
                class={cls(`${prefixCls}-title`, props.classNames?.title)}
                style={{
                  width: normalizeWidth(titleWidth),
                  ...props.styles?.title,
                }}
              />
            )}
            {showParagraph && (
              <ul class={cls(`${prefixCls}-paragraph`, props.classNames?.paragraph)} style={props.styles?.paragraph}>
                {Array.from({ length: rows }).map((_, i) => {
                  const width = paragraphWidths[i]
                  return (
                    <li
                      key={i}
                      class={props.classNames?.row}
                      style={{ width: normalizeWidth(width), ...props.styles?.row }}
                    />
                  )
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

const skeletonButtonProps = {
  active: { type: Boolean, default: undefined },
  size: { type: String as PropType<'large' | 'small' | 'default'>, default: 'default' },
  shape: {
    type: String as PropType<'default' | 'circle' | 'round' | 'square'>,
    default: 'default',
  },
  block: { type: Boolean, default: undefined },
  classNames: { type: Object as PropType<SkeletonButtonClassNames>, default: undefined },
  styles: { type: Object as PropType<SkeletonButtonStyles>, default: undefined },
} satisfies Record<keyof SkeletonButtonProps, any>

export const SkeletonButton = defineComponent({
  name: 'SkeletonButton',
  props: skeletonButtonProps,
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    const mergedSize = useSize(props.size)
    return () => (
      <div
        class={cls(
          `${prefixCls}`,
          `${prefixCls}-element`,
          {
            [`${prefixCls}-active`]: props.active,
            [`${prefixCls}-block`]: props.block,
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
      >
        <span
          class={cls(
            `${prefixCls}-button`,
            {
              [`${prefixCls}-button-lg`]: mergedSize === 'large',
              [`${prefixCls}-button-sm`]: mergedSize === 'small',
              [`${prefixCls}-button-circle`]: props.shape === 'circle',
              [`${prefixCls}-button-round`]: props.shape === 'round',
              [`${prefixCls}-button-square`]: props.shape === 'square',
            },
            props.classNames?.button,
          )}
          style={props.styles?.button}
        />
      </div>
    )
  },
})

const skeletonInputProps = {
  active: { type: Boolean, default: undefined },
  size: { type: String as PropType<'large' | 'small' | 'default'>, default: 'default' },
  block: { type: Boolean, default: undefined },
  classNames: { type: Object as PropType<SkeletonInputClassNames>, default: undefined },
  styles: { type: Object as PropType<SkeletonInputStyles>, default: undefined },
} satisfies Record<keyof SkeletonInputProps, any>

export const SkeletonInput = defineComponent({
  name: 'SkeletonInput',
  props: skeletonInputProps,
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    const mergedSize = useSize(props.size)
    return () => (
      <div
        class={cls(
          `${prefixCls}`,
          `${prefixCls}-element`,
          {
            [`${prefixCls}-active`]: props.active,
            [`${prefixCls}-block`]: props.block,
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
      >
        <span
          class={cls(
            `${prefixCls}-input`,
            {
              [`${prefixCls}-input-lg`]: mergedSize === 'large',
              [`${prefixCls}-input-sm`]: mergedSize === 'small',
            },
            props.classNames?.input,
          )}
          style={props.styles?.input}
        />
      </div>
    )
  },
})

const skeletonAvatarProps = {
  active: { type: Boolean, default: undefined },
  size: {
    type: [String, Number] as PropType<'large' | 'small' | 'default' | number>,
    default: 'default',
  },
  shape: { type: String as PropType<'circle' | 'square'>, default: 'circle' },
  classNames: { type: Object as PropType<SkeletonAvatarClassNames>, default: undefined },
  styles: { type: Object as PropType<SkeletonAvatarStyles>, default: undefined },
} satisfies Record<keyof SkeletonAvatarComponentProps, any>

export const SkeletonAvatar = defineComponent({
  name: 'SkeletonAvatar',
  props: skeletonAvatarProps,
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    const mergedSize = useSize(typeof props.size === 'string' ? props.size : undefined)
    const finalSize = typeof props.size === 'number' ? props.size : mergedSize

    return () => {
      const sizeStyle =
        typeof props.size === 'number'
          ? {
              width: `${normalizeNumericSize(props.size)}px`,
              height: `${normalizeNumericSize(props.size)}px`,
              lineHeight: `${normalizeNumericSize(props.size)}px`,
            }
          : {}

      return (
        <div
          class={cls(
            `${prefixCls}`,
            `${prefixCls}-element`,
            {
              [`${prefixCls}-active`]: props.active,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
        >
          <span
            class={cls(
              `${prefixCls}-avatar`,
              {
                [`${prefixCls}-avatar-lg`]: finalSize === 'large',
                [`${prefixCls}-avatar-sm`]: finalSize === 'small',
                [`${prefixCls}-avatar-circle`]: props.shape === 'circle',
                [`${prefixCls}-avatar-square`]: props.shape === 'square',
              },
              props.classNames?.avatar,
            )}
            style={{ ...sizeStyle, ...props.styles?.avatar }}
          />
        </div>
      )
    }
  },
})

const skeletonImageProps = {
  active: { type: Boolean, default: undefined },
  classNames: { type: Object as PropType<SkeletonImageClassNames>, default: undefined },
  styles: { type: Object as PropType<SkeletonImageStyles>, default: undefined },
} satisfies Record<keyof SkeletonImageProps, any>

export const SkeletonImage = defineComponent({
  name: 'SkeletonImage',
  props: skeletonImageProps,
  setup(props) {
    const prefixCls = usePrefixCls('skeleton')
    return () => (
      <div
        class={cls(
          `${prefixCls}`,
          `${prefixCls}-element`,
          {
            [`${prefixCls}-active`]: props.active,
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
      >
        <div class={cls(`${prefixCls}-image`, props.classNames?.image)} style={props.styles?.image}>
          <svg
            viewBox="0 0 1098 1024"
            xmlns="http://www.w3.org/2000/svg"
            class={cls(`${prefixCls}-image-svg`, props.classNames?.svg)}
            style={props.styles?.svg}
          >
            <title>Image placeholder</title>
            <path
              d="M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6"
              class={cls(`${prefixCls}-image-path`, props.classNames?.path)}
              style={props.styles?.path}
            />
          </svg>
        </div>
      </div>
    )
  },
})

const skeletonNodeProps = {
  active: { type: Boolean, default: undefined },
  fullSize: { type: Boolean, default: undefined },
  nodeStyle: { type: Object as PropType<CSSProperties>, default: undefined },
  classNames: { type: Object as PropType<SkeletonNodeClassNames>, default: undefined },
  styles: { type: Object as PropType<SkeletonNodeStyles>, default: undefined },
} satisfies Record<keyof SkeletonNodeProps, any>

export const SkeletonNode = defineComponent({
  name: 'SkeletonNode',
  props: skeletonNodeProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('skeleton')
    return () => (
      <div
        class={cls(
          `${prefixCls}`,
          `${prefixCls}-element`,
          {
            [`${prefixCls}-active`]: props.active,
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
      >
        <div
          class={cls(
            `${prefixCls}-node`,
            {
              [`${prefixCls}-node-full`]: props.fullSize,
            },
            props.classNames?.node,
          )}
          style={{ ...props.nodeStyle, ...props.styles?.node }}
        >
          {slots.default?.()}
        </div>
      </div>
    )
  },
})
