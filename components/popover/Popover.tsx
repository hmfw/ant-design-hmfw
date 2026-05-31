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
import type { PopoverContent } from './types'

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
      // Build Popover's overlay body: title + content inside `.hmfw-popover-inner`.
      // Tooltip places this as the popup content directly, so we control the layout.
      const titleNode = resolveNode(props.title, slots.title)
      const contentNode = resolveNode(props.content, slots.content)

      const overlay = hasOverlay.value
        ? h('div', { class: `${prefixCls}-inner`, style: props.overlayInnerStyle }, [
            (titleNode !== undefined && titleNode !== null && titleNode !== '') &&
              h('div', { class: `${prefixCls}-title` }, titleNode as VNode),
            h('div', { class: `${prefixCls}-inner-content` }, contentNode as VNode),
          ])
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
