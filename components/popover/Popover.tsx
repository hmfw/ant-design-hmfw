import {
  defineComponent,
  computed,
  h,
  type PropType,
  type VNode,
} from 'vue'
import { Tooltip } from '../tooltip'
import { usePrefixCls } from '../config-provider'
import type {
  TooltipPlacement,
  TooltipTrigger,
  TooltipArrow,
} from '../tooltip/types'
import type { PopoverContent, PopoverClassNames, PopoverStyles } from './types'

/**
 * Popover delegates positioning, triggers, and overflow handling to Tooltip
 * (matching AntD's React composition where Popover wraps Tooltip). The only
 * thing Popover adds is the title + content layout inside the popup body.
 */
export const Popover = defineComponent({
  name: 'Popover',
  inheritAttrs: false,
  props: {
    title: [String, Number, Object, Function] as PropType<PopoverContent>,
    content: [String, Number, Object, Function] as PropType<PopoverContent>,
    placement: { type: String as PropType<TooltipPlacement>, default: 'top' },
    trigger: {
      type: [String, Array] as PropType<TooltipTrigger | TooltipTrigger[]>,
      default: 'hover',
    },
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    arrow: { type: [Boolean, Object] as PropType<TooltipArrow>, default: true },
    mouseEnterDelay: { type: Number, default: 0.1 },
    mouseLeaveDelay: { type: Number, default: 0.1 },
    disabled: Boolean,
    overlayStyle: Object as PropType<Record<string, string>>,
    overlayInnerStyle: Object as PropType<Record<string, string>>,
    autoAdjustOverflow: { type: Boolean, default: true },
    zIndex: Number,
    destroyOnHidden: Boolean,
    destroyTooltipOnHide: Boolean,
    getPopupContainer: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>,
    color: String,
    classNames: [Object, Function] as PropType<
      PopoverClassNames | ((info: { props: Record<string, unknown> }) => PopoverClassNames)
    >,
    styles: [Object, Function] as PropType<
      PopoverStyles | ((info: { props: Record<string, unknown> }) => PopoverStyles)
    >,
  },
  emits: ['update:open', 'openChange', 'afterOpenChange'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('popover')

    /** Whether either title or content has visible text/VNodes/slot. */
    const hasOverlay = computed(() => {
      const tn = props.title
      const cn = props.content
      const titleHas = (tn !== undefined && tn !== null && tn !== '') || !!slots.title
      const contentHas = (cn !== undefined && cn !== null && cn !== '') || !!slots.content
      return titleHas || contentHas
    })

    /** Resolve title/content (string | VNode | render fn | slot) to renderable nodes. */
    const resolveNode = (
      value: PopoverContent | undefined,
      slot: (() => VNode[] | undefined) | undefined,
    ) => {
      if (typeof value === 'function') return (value as () => VNode | string | number)()
      if (value !== undefined && value !== null && value !== '') return value
      return slot?.()
    }

    return () => {
      // 解析语义化 classNames / styles（AntD v6.0.0）。支持对象或函数形式，
      // 函数形式接收 { props } 以便按属性动态生成。
      const resolveSemantic = <T,>(
        value: T | ((info: { props: Record<string, unknown> }) => T) | undefined,
      ): T | undefined =>
        typeof value === 'function'
          ? (value as (info: { props: Record<string, unknown> }) => T)({ props })
          : value
      const mergedClassNames = resolveSemantic(props.classNames) ?? {}
      const mergedStyles = resolveSemantic(props.styles) ?? {}

      // Build Popover's overlay body: title + content. Tooltip already wraps
      // whatever we return here inside `.hmfw-popover-inner` (the styled box),
      // so we must NOT add another `.hmfw-popover-inner` layer or we'd get a
      // double box (double shadow / radius / background) — AntD renders a
      // single inner box.
      const titleNode = resolveNode(props.title, slots.title)
      const contentNode = resolveNode(props.content, slots.content)

      const titleVisible =
        titleNode !== undefined && titleNode !== null && titleNode !== ''
      const contentVisible =
        contentNode !== undefined && contentNode !== null && contentNode !== ''

      // AntD only renders the content div when content is non-empty (title-only
      // popovers don't get an empty padded content box).
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

      // `overlayInnerStyle` targets the inner content box. Since the box itself
      // is owned by Tooltip, carry the style on a thin wrapper inside it.
      const overlay = hasOverlay.value
        ? props.overlayInnerStyle
          ? h('div', { style: props.overlayInnerStyle }, overlayChildren)
          : overlayChildren
        : null

      // Forward the trigger child via Tooltip's default slot. We pass the
      // popover overlay through Tooltip's `title` slot so all the empty-state /
      // focus / scroll / overflow logic in Tooltip applies to Popover too.
      return h(
        Tooltip,
        {
          ...attrs,
          // Swap Tooltip's prefix so the popup root gets `.hmfw-popover` classes.
          customPrefixCls: prefixCls,
          placement: props.placement,
          trigger: props.trigger,
          open: props.open,
          defaultOpen: props.defaultOpen,
          arrow: props.arrow,
          mouseEnterDelay: props.mouseEnterDelay,
          mouseLeaveDelay: props.mouseLeaveDelay,
          disabled: props.disabled,
          autoAdjustOverflow: props.autoAdjustOverflow,
          zIndex: props.zIndex,
          destroyOnHidden: props.destroyOnHidden,
          destroyTooltipOnHide: props.destroyTooltipOnHide,
          getPopupContainer: props.getPopupContainer,
          color: props.color,
          popupStyle: props.overlayStyle,
          'onUpdate:open': (v: boolean) => emit('update:open', v),
          onOpenChange: (v: boolean) => emit('openChange', v),
          onAfterOpenChange: (v: boolean) => emit('afterOpenChange', v),
        },
        // Only pass `title` slot when we actually have content; otherwise
        // Tooltip's `hasTitle` guard would think the slot is non-empty.
        hasOverlay.value
          ? {
              default: () => slots.default?.(),
              title: () => overlay,
            }
          : { default: () => slots.default?.() },
      )
    }
  },
})
