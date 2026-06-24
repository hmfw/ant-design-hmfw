import { defineComponent, computed, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type {
  TooltipPlacement,
  TooltipTrigger,
  TooltipArrow,
  TooltipTitle,
  TooltipClassNames,
  TooltipStyles,
} from './types'

let tooltipIdCounter = 0

export const Tooltip = defineComponent({
  name: 'Tooltip',
  props: {
    title: [String, Number, Object, Function] as PropType<TooltipTitle>,
    /** AntD legacy alias for `title`. */
    overlay: [String, Number, Object, Function] as PropType<TooltipTitle>,
    placement: {
      type: String as PropType<TooltipPlacement>,
      default: 'top',
    },
    trigger: {
      type: [String, Array] as PropType<TooltipTrigger | TooltipTrigger[]>,
      default: 'hover',
    },
    open: {
      type: Boolean,
      default: undefined,
    },
    defaultOpen: Boolean,
    color: String,
    arrow: {
      type: [Boolean, Object] as PropType<TooltipArrow>,
      default: true,
    },
    mouseEnterDelay: {
      type: Number,
      default: 0.1,
    },
    mouseLeaveDelay: {
      type: Number,
      default: 0.1,
    },
    disabled: Boolean,
    destroyTooltipOnHide: Boolean,
    destroyOnHidden: Boolean,
    autoAdjustOverflow: { type: Boolean, default: true },
    zIndex: Number,
    getPopupContainer: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>,
    fresh: [Boolean, Number] as PropType<boolean | number>,
    /** Override the default `hmfw-tooltip` prefix (used by Popover/Popconfirm wrappers). */
    customPrefixCls: String,
    /** Extra inline style merged onto the popup element (used by wrappers for `overlayStyle`). */
    popupStyle: Object as PropType<Record<string, string>>,
    classNames: Object as PropType<TooltipClassNames>,
    styles: Object as PropType<TooltipStyles>,
  },
  emits: ['update:open', 'openChange', 'afterOpenChange'],
  setup(props, { slots, emit }) {
    const defaultPrefix = usePrefixCls('tooltip')
    const prefixCls = computed(() => props.customPrefixCls ?? defaultPrefix)
    const tooltipId = `tooltip-${++tooltipIdCounter}`

    /** AntD v6: tooltip stays hidden when title is empty/null. Falls back to slot. */
    const hasTitle = computed(() => {
      const t = props.title ?? props.overlay
      if (t === 0 || t === '0') return true
      if (t !== undefined && t !== null && t !== '') return true
      return !!slots.title
    })

    const showArrow = computed(() => props.arrow !== false)
    const arrowPointAtCenter = computed(
      () => typeof props.arrow === 'object' && props.arrow !== null && props.arrow.pointAtCenter === true,
    )

    const mergedDestroyOnHidden = computed(() => props.destroyOnHidden ?? props.destroyTooltipOnHide ?? false)

    const visible = computed(() => props.open)

    const popupClass = computed(() => cls(prefixCls.value, props.classNames?.root))

    const renderTooltipContent = () => {
      const rawTitle = props.title ?? props.overlay
      let tooltipContent: unknown
      if (typeof rawTitle === 'function') tooltipContent = (rawTitle as () => unknown)()
      else if (rawTitle !== undefined && rawTitle !== null) tooltipContent = rawTitle
      else tooltipContent = slots.title?.()
      return tooltipContent as VNode | string
    }

    const renderPopup = () => {
      return (
        <>
          {showArrow.value && (
            <div
              class={cls('hmfw-trigger-arrow', `${prefixCls.value}-arrow`, props.classNames?.arrow)}
              style={props.styles?.arrow}
            />
          )}
          <div
            id={tooltipId}
            role="tooltip"
            class={cls(`${prefixCls.value}-content`, props.classNames?.content)}
            style={props.styles?.content}
            aria-hidden={!visible.value}
          >
            <div class={cls(`${prefixCls.value}-inner`, props.classNames?.inner)} style={props.styles?.inner}>
              {renderTooltipContent()}
            </div>
          </div>
        </>
      )
    }

    return () => {
      const child = slots.default?.()[0]
      if (!child) return null

      // Don't open when title is empty (AntD v6 noTitle guard)
      const canOpen = hasTitle.value

      // 无标题时强制 destroyOnHidden，确保 DOM 不渲染
      const shouldDestroy = canOpen ? mergedDestroyOnHidden.value : true

      // color 与 popupStyle/styles.root 需要作用于 Trigger 的 popup wrapper（即 .hmfw-tooltip）
      const popupStyleMerged: Record<string, string> = {}
      if (props.color) popupStyleMerged['--tooltip-bg'] = props.color
      if (props.popupStyle) Object.assign(popupStyleMerged, props.popupStyle)
      if (props.styles?.root) Object.assign(popupStyleMerged, props.styles.root)

      return (
        <Trigger
          open={canOpen ? props.open : false}
          defaultOpen={props.defaultOpen}
          trigger={props.trigger as any}
          placement={props.placement as Placement}
          disabled={props.disabled || !canOpen}
          arrowPointAtCenter={arrowPointAtCenter.value}
          autoAdjustOverflow={props.autoAdjustOverflow}
          getPopupContainer={props.getPopupContainer}
          mouseEnterDelay={props.mouseEnterDelay}
          mouseLeaveDelay={props.mouseLeaveDelay}
          destroyOnHidden={shouldDestroy}
          gap={8}
          zIndex={props.zIndex ?? 1070}
          observePopupResize
          fresh={props.fresh}
          popupClass={popupClass.value}
          popupStyle={popupStyleMerged}
          hiddenClass={`${prefixCls.value}-hidden`}
          onUpdate:open={(v: boolean) => emit('update:open', v)}
          onOpenChange={(v: boolean, info: any) => emit('openChange', v, info)}
          onAfterOpenChange={(v: boolean) => emit('afterOpenChange', v)}
        >
          {{
            default: () => child,
            popup: renderPopup,
          }}
        </Trigger>
      )
    }
  },
})
