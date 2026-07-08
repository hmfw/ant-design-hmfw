import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { FileTextOutlined } from '@hmfw/icons'
import { Tooltip } from '../tooltip'
import type { TooltipProps } from '../tooltip/types'
import { Badge } from '../badge'
import type {
  FloatButtonType,
  FloatButtonShape,
  FloatButtonHTMLType,
  FloatButtonBadgeProps,
  FloatButtonClassNames,
  FloatButtonStyles,
} from './types'
import { type IconLike, renderIcon, normalizeTooltip } from './shared'
// 复合子组件在渲染时依赖 FloatButton，构成循环引用；ESM live binding 保证运行期正确
// （compound 静态属性在文件末尾挂载，彼时两个子组件已初始化完成）。
import { FloatButtonGroup } from './FloatButtonGroup'
import { FloatButtonBackTop } from './FloatButtonBackTop'

// ---------------------------------------------------------------------------
// FloatButton
// ---------------------------------------------------------------------------
export const FloatButton = defineComponent({
  name: 'FloatButton',
  inheritAttrs: false,
  props: {
    type: { type: String as PropType<FloatButtonType>, default: 'default' },
    shape: { type: String as PropType<FloatButtonShape>, default: 'circle' },
    icon: [Function, String] as PropType<IconLike>,
    /** Text and other content (recommended for square shape; circle has narrow space). */
    content: String,
    /** Tooltip: string or full TooltipProps object. */
    tooltip: [String, Object] as PropType<string | TooltipProps>,
    badge: Object as PropType<FloatButtonBadgeProps>,
    href: String,
    target: String,
    htmlType: { type: String as PropType<FloatButtonHTMLType>, default: 'button' },
    disabled: Boolean,
    classNames: Object as PropType<FloatButtonClassNames>,
    styles: Object as PropType<FloatButtonStyles>,
  },
  emits: ['click'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('float-btn')

    const handleClick = (e: MouseEvent) => {
      // 禁用态：阻止原生 <a> 的默认跳转（原生锚点不识别 disabled 属性），
      // 并且不对外 emit click。
      if (props.disabled) {
        e.preventDefault()
        return
      }
      emit('click', e)
    }

    return () => {
      // Render content if provided via prop or slot
      const showContent = props.content || slots.content

      // Default icon: FileTextOutlined when no content/icon provided
      const mergedIcon = props.icon ?? (showContent ? undefined : FileTextOutlined)

      const body = (
        <div class={cls(`${prefixCls}-body`, props.classNames?.body)} style={props.styles?.body}>
          {mergedIcon !== undefined && (
            <div class={cls(`${prefixCls}-icon`, props.classNames?.icon)} style={props.styles?.icon}>
              {renderIcon(mergedIcon, slots.icon)}
            </div>
          )}
          {showContent && (
            <div class={cls(`${prefixCls}-content`, props.classNames?.content)} style={props.styles?.content}>
              {slots.content?.() ?? props.content}
            </div>
          )}
        </div>
      )

      // Badge wraps the body (rendered inside the fixed root element)
      // Filter out unsupported props: status, text, title, children
      const badged =
        props.badge && (props.badge.dot || props.badge.count !== undefined) ? (
          <Badge
            count={props.badge.count}
            dot={props.badge.dot}
            overflowCount={props.badge.overflowCount}
            color={props.badge.color}
            offset={props.badge.offset}
          >
            {body}
          </Badge>
        ) : (
          body
        )

      // Tooltip wraps the body content (still inside the fixed root element)
      const tooltipProps = normalizeTooltip(props.tooltip)
      const content = tooltipProps ? (
        <Tooltip {...tooltipProps} placement={tooltipProps.placement ?? 'left'}>
          {{
            default: () => badged,
            ...(slots.tooltip ? { title: slots.tooltip } : {}),
          }}
        </Tooltip>
      ) : (
        badged
      )

      const rootCls = cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        `${prefixCls}-${props.shape}`,
        {
          [`${prefixCls}-disabled`]: props.disabled,
        },
        // inheritAttrs:false 下 {...attrs} 展开的 class 会被后写的 class={rootCls}
        // 覆盖，因此显式并入外部透传的 class（如 BackTop 的 hmfw-float-btn-back-top）。
        attrs.class as string | undefined,
        props.classNames?.root,
      )

      const rootStyle = [attrs.style, props.styles?.root]

      if (props.href) {
        return (
          <a
            {...attrs}
            class={rootCls}
            style={rootStyle}
            href={props.href}
            target={props.target}
            onClick={handleClick}
            aria-disabled={props.disabled}
          >
            {content}
          </a>
        )
      }

      return (
        <button
          {...attrs}
          type={props.htmlType}
          class={rootCls}
          style={rootStyle}
          onClick={handleClick}
          disabled={props.disabled}
        >
          {content}
        </button>
      )
    }
  },
})

// ---------------------------------------------------------------------------
// Compound API: FloatButton.Group / FloatButton.BackTop (Ant Design v6)
// ---------------------------------------------------------------------------
type FloatButtonCompound = typeof FloatButton & {
  Group: typeof FloatButtonGroup
  BackTop: typeof FloatButtonBackTop
}
;(FloatButton as FloatButtonCompound).Group = FloatButtonGroup
;(FloatButton as FloatButtonCompound).BackTop = FloatButtonBackTop

export default FloatButton as FloatButtonCompound
