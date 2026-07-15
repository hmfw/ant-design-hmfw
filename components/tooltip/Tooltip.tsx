import { defineComponent, computed, useId, cloneVNode, isVNode, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type {
  TooltipProps,
  TooltipPlacement,
  TooltipTrigger,
  TooltipArrow,
  TooltipTitle,
  TooltipClassNames,
  TooltipStyles,
  TooltipOpenChangeInfo,
} from './types'

const tooltipProps = {
  title: { type: [String, Number, Object, Function] as PropType<TooltipTitle>, default: undefined },
  /** AntD legacy alias for `title`. */
  overlay: { type: [String, Number, Object, Function] as PropType<TooltipTitle>, default: undefined },
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
  color: { type: String, default: undefined },
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
  destroyOnHidden: Boolean,
  autoAdjustOverflow: { type: Boolean, default: true },
  zIndex: { type: Number, default: undefined },
  getPopupContainer: {
    type: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>,
    default: undefined,
  },
  fresh: { type: [Boolean, Number] as PropType<boolean | number>, default: undefined },
  /** 持续跟踪触发元素位置变化，每帧自动重新定位（适用于触发元素有动画/过渡的场景）。 */
  trackPosition: { type: Boolean, default: false },
  /** Override the default `hmfw-tooltip` prefix (used by Popover/Popconfirm wrappers). */
  customPrefixCls: { type: String, default: undefined },
  /** 触发器外层 wrapper 的 display，默认 inline-block。用于不破坏宿主布局（如菜单项可设为 `contents`）。 */
  triggerDisplay: { type: String, default: undefined },
  /** Extra inline style merged onto the popup element (used by wrappers for `overlayStyle`). */
  popupStyle: { type: Object as PropType<Record<string, string>>, default: undefined },
  classNames: { type: Object as PropType<TooltipClassNames>, default: undefined },
  styles: { type: Object as PropType<TooltipStyles>, default: undefined },
} satisfies Record<keyof TooltipProps, any>

export const Tooltip = defineComponent({
  name: 'Tooltip',
  props: tooltipProps,
  emits: ['update:open', 'openChange', 'afterOpenChange'],
  setup(props, { slots, emit }) {
    const defaultPrefix = usePrefixCls('tooltip')
    const prefixCls = computed(() => props.customPrefixCls ?? defaultPrefix)
    // useId 生成 SSR 稳定且全局唯一的 id，避免模块级计数器导致的水合不匹配。
    const tooltipId = `tooltip-${useId()}`

    /**
     * 解析 title：优先 `title`，回退到 `overlay` 别名，最后回退到 title 插槽。
     * 函数形式（AntD RenderFunction）在此调用求值。返回 undefined 表示无内容。
     */
    const resolveTitle = (): unknown => {
      const raw = props.title ?? props.overlay
      if (typeof raw === 'function') return (raw as () => unknown)()
      if (raw !== undefined && raw !== null) return raw
      return slots.title?.()
    }

    /** AntD v6: tooltip stays hidden when title is empty/null. Falls back to slot. */
    const hasTitle = computed(() => {
      const t = props.title ?? props.overlay
      // 严格比较即可覆盖数字 0 / 字符串 '0'（二者均 !== ''），无需特判。
      if (t !== undefined && t !== null && t !== '') return true
      return !!slots.title
    })

    const showArrow = computed(() => props.arrow !== false)
    const arrowPointAtCenter = computed(
      () => typeof props.arrow === 'object' && props.arrow !== null && props.arrow.pointAtCenter === true,
    )

    const mergedDestroyOnHidden = computed(() => props.destroyOnHidden ?? false)

    const popupClass = computed(() => cls(prefixCls.value, props.classNames?.root))

    // visible 由 Trigger 通过 popup 插槽回传，反映受控/非受控合并后的真实可见状态，
    // 供 aria-hidden 使用；不能仅取 props.open（非受控 hover 场景恒为 undefined）。
    const renderPopup = ({ visible }: { visible: boolean }) => {
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
            aria-hidden={!visible}
          >
            <div class={cls(`${prefixCls.value}-inner`, props.classNames?.inner)} style={props.styles?.inner}>
              {resolveTitle() as VNode | string}
            </div>
          </div>
        </>
      )
    }

    return () => {
      const rawChild = slots.default?.()[0]
      if (!rawChild) return null

      // Don't open when title is empty (AntD v6 noTitle guard)
      const canOpen = hasTitle.value

      // 将 aria-describedby 关联到触发器元素，使屏幕阅读器能把 tooltip 内容与触发器绑定。
      // 仅在有内容且子节点是可承载属性的元素/组件 vnode 时克隆附加。
      const child = canOpen && isVNode(rawChild) ? cloneVNode(rawChild, { 'aria-describedby': tooltipId }) : rawChild

      // 无标题时强制 destroyOnHidden，确保 DOM 不渲染
      const shouldDestroy = canOpen ? mergedDestroyOnHidden.value : true

      // color 与 popupStyle/styles.root 需要作用于 Trigger 的 popup wrapper（即 .hmfw-tooltip）
      const popupStyleMerged: Record<string, string | number> = {}
      if (props.color) popupStyleMerged['--tooltip-bg'] = props.color
      if (props.popupStyle) Object.assign(popupStyleMerged, props.popupStyle)
      if (props.styles?.root) Object.assign(popupStyleMerged, props.styles.root)

      return (
        <Trigger
          open={canOpen ? props.open : false}
          defaultOpen={props.defaultOpen}
          trigger={props.trigger}
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
          trackPosition={props.trackPosition}
          triggerDisplay={props.triggerDisplay}
          popupClass={popupClass.value}
          popupStyle={popupStyleMerged}
          hiddenClass={`${prefixCls.value}-hidden`}
          onUpdate:open={(v: boolean) => emit('update:open', v)}
          onOpenChange={(v: boolean, info: TooltipOpenChangeInfo) => emit('openChange', v, info)}
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
