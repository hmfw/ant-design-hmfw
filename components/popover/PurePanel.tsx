import { defineComponent, computed, h, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import type { TooltipPlacement, TooltipArrow } from '../tooltip/types'
import type { PopoverContent, PopoverClassNames, PopoverStyles, PopoverPurePanelProps } from './types'

/**
 * Popover 的纯展示面板（对应 AntD 的
 * `_InternalPanelDoNotUseOrYouWillBeFired`）。
 *
 * 仅渲染气泡卡片的”外观”——标题 + 内容 + 可选箭头，
 * 不包含任何触发（hover/click/focus）、定位、Teleport、动画逻辑。
 * 适用于把气泡卡片的样式直接内嵌到页面中（例如在 Card、示意图里）。
 *
 * 注意：根节点带 `.hmfw-popover-pure` 类用于中和 `.hmfw-popover`
 * 的绝对定位与 `pointer-events: none`，使其可作为普通块级元素就地渲染。
 */

const purePanelProps = {
  title: { type: [String, Number, Object, Function] as PropType<PopoverContent>, default: undefined },
  content: { type: [String, Number, Object, Function] as PropType<PopoverContent>, default: undefined },
  placement: { type: String as PropType<TooltipPlacement>, default: 'top' },
  arrow: { type: [Boolean, Object] as PropType<TooltipArrow>, default: true },
  color: { type: String, default: undefined },
  overlayInnerStyle: { type: Object as PropType<Record<string, string>>, default: undefined },
  classNames: {
    type: [Object, Function] as PropType<
      PopoverClassNames | ((info: { props: Record<string, unknown> }) => PopoverClassNames)
    >,
    default: undefined,
  },
  styles: {
    type: [Object, Function] as PropType<PopoverStyles | ((info: { props: Record<string, unknown> }) => PopoverStyles)>,
    default: undefined,
  },
} satisfies Record<keyof PopoverPurePanelProps, any>

export const PurePanel = defineComponent({
  name: 'PopoverPurePanel',
  inheritAttrs: false,
  props: purePanelProps,
  setup(props, { slots, attrs }) {
    const prefixCls = usePrefixCls('popover')

    /** 是否显示箭头（arrow 不为 false 时显示）。 */
    const showArrow = computed(() => props.arrow !== false)

    /** 将 title/content（string | VNode | 渲染函数 | 插槽）解析为可渲染节点。 */
    const resolveNode = (value: PopoverContent | undefined, slot: (() => VNode[] | undefined) | undefined) => {
      if (typeof value === 'function') return (value as () => VNode | string | number)()
      if (value !== undefined && value !== null && value !== '') return value
      return slot?.()
    }

    return () => {
      // 解析语义化 classNames / styles（对象或函数形式，与 Popover 保持一致）。
      const resolveSemantic = <T,>(
        value: T | ((info: { props: Record<string, unknown> }) => T) | undefined,
      ): T | undefined =>
        typeof value === 'function' ? (value as (info: { props: Record<string, unknown> }) => T)({ props }) : value
      const mergedClassNames = resolveSemantic(props.classNames) ?? {}
      const mergedStyles = resolveSemantic(props.styles) ?? {}

      const titleNode = resolveNode(props.title, slots.title)
      const contentNode = resolveNode(props.content, slots.content)
      const titleVisible = titleNode !== undefined && titleNode !== null && titleNode !== ''
      const contentVisible = contentNode !== undefined && contentNode !== null && contentNode !== ''

      // 标题与内容仅在非空时渲染，避免出现空的带内边距盒子（与 Popover 行为一致）。
      const overlayChildren = [
        titleVisible &&
          h(
            'div',
            {
              class: [`${prefixCls}-title`, mergedClassNames.title],
              style: mergedStyles.title,
            },
            titleNode as VNode,
          ),
        contentVisible &&
          h(
            'div',
            {
              class: [`${prefixCls}-inner-content`, mergedClassNames.content],
              style: mergedStyles.content,
            },
            contentNode as VNode,
          ),
      ].filter(Boolean) as VNode[]

      // overlayInnerStyle 作用于内层内容包裹，与 Popover 保持一致。
      const innerChildren = props.overlayInnerStyle
        ? [h('div', { style: props.overlayInnerStyle }, overlayChildren)]
        : overlayChildren

      // color 通过 --tooltip-bg 驱动背景色（与 Tooltip/Popover 共用变量）。
      const rootStyle: Record<string, string> = {}
      if (props.color) rootStyle['--tooltip-bg'] = props.color

      return h(
        'div',
        {
          ...attrs,
          class: [`${prefixCls}-pure`, prefixCls, `${prefixCls}-placement-${props.placement}`],
          style: rootStyle,
        },
        [
          h(
            'div',
            { class: `${prefixCls}-content` },
            [
              showArrow.value && h('div', { class: `${prefixCls}-arrow` }),
              h('div', { class: `${prefixCls}-inner`, role: 'tooltip' }, innerChildren),
            ].filter(Boolean) as VNode[],
          ),
        ],
      )
    }
  },
})
