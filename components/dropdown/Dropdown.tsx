import { defineComponent, computed, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Menu } from '../menu'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type { DropdownProps, DropdownPlacement, DropdownTrigger } from './types'

export const Dropdown = defineComponent({
  name: 'Dropdown',
  inheritAttrs: false,
  props: {
    menu: Object as PropType<DropdownProps['menu']>,
    trigger: {
      type: [String, Array] as PropType<DropdownTrigger | DropdownTrigger[]>,
      default: 'hover',
    },
    placement: {
      type: String as PropType<DropdownPlacement>,
      default: 'bottomLeft',
    },
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    disabled: Boolean,
    arrow: {
      type: [Boolean, Object] as PropType<boolean | { pointAtCenter?: boolean }>,
      default: false,
    },
    autoFocus: Boolean,
    overlayClassName: String,
    overlayStyle: Object as PropType<Record<string, any>>,
    getPopupContainer: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>,
    autoAdjustOverflow: { type: Boolean, default: true },
    destroyPopupOnHide: Boolean,
    destroyOnHidden: Boolean,
    mouseEnterDelay: { type: Number, default: 0.15 },
    mouseLeaveDelay: { type: Number, default: 0.1 },
    popupRender: Function as PropType<(originNode: VNode) => VNode>,
    dropdownRender: Function as PropType<(originNode: VNode) => VNode>,
    forceRender: Boolean,
    openClassName: String,
    rootClassName: String,
    classNames: Object as PropType<import('./types').DropdownClassNames>,
    styles: Object as PropType<import('./types').DropdownStyles>,
  },
  emits: ['update:open', 'openChange'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('dropdown')

    const pointAtCenter = computed(
      () => typeof props.arrow === 'object' && props.arrow !== null && props.arrow.pointAtCenter === true,
    )
    const shouldDestroy = computed(() => props.destroyOnHidden ?? props.destroyPopupOnHide ?? false)
    // 带箭头时间距更大，与原实现一致
    const gap = computed(() => (props.arrow ? 12 : 4))

    // Trigger 内部的 open 状态由它自己维护；菜单点击时需要主动关闭，
    // 受控模式下通过 update:open 通知父级，非受控模式下回传给 Trigger。
    let triggerSetOpen: ((v: boolean, source?: 'trigger' | 'popup') => void) | null = null

    const handleOpenChange = (v: boolean, info: { source: string }) => {
      emit('update:open', v)
      emit('openChange', v, info)
    }

    const handleMenuClick = (clickInfo: { key: string }) => {
      props.menu?.onClick?.(clickInfo)
      // selectable + multiple 时保持打开
      if (props.menu?.selectable && props.menu?.multiple) return
      triggerSetOpen?.(false, 'popup')
    }

    const renderOverlay = () => {
      if (!props.menu?.items) {
        return slots.overlay?.()
      }
      const menuNode = (
        <Menu {...props.menu} mode="vertical" selectable={props.menu.selectable ?? false} onClick={handleMenuClick} />
      )
      const renderFn = props.popupRender || props.dropdownRender
      return renderFn ? renderFn(menuNode) : menuNode
    }

    return () => {
      const child = slots.default?.()?.[0]
      if (!child) return null

      const triggerClasses = cls(
        props.openClassName && props.open ? props.openClassName : null,
        props.classNames?.trigger,
        attrs.class as any,
      )

      const popupClass = (placement: Placement) =>
        cls(
          prefixCls,
          props.overlayClassName,
          props.rootClassName,
          `${prefixCls}-placement-${placement}`,
          { [`${prefixCls}-show-arrow`]: !!props.arrow },
          props.classNames?.dropdown,
        )

      const renderPopup = () => (
        <>
          {props.arrow && (
            <div class={cls(`${prefixCls}-arrow`, props.classNames?.arrow)} style={props.styles?.arrow} />
          )}
          <div class={cls(`${prefixCls}-content`, props.classNames?.content)} style={props.styles?.content}>
            {renderOverlay()}
          </div>
        </>
      )

      return (
        <Trigger
          open={props.open}
          defaultOpen={props.defaultOpen}
          trigger={props.trigger as any}
          placement={props.placement as Placement}
          disabled={props.disabled}
          arrowPointAtCenter={pointAtCenter.value}
          autoAdjustOverflow={props.autoAdjustOverflow}
          getPopupContainer={props.getPopupContainer}
          mouseEnterDelay={props.mouseEnterDelay}
          mouseLeaveDelay={props.mouseLeaveDelay}
          destroyOnHidden={shouldDestroy.value}
          forceRender={props.forceRender}
          gap={gap.value}
          triggerDisplay="inline-flex"
          triggerClass={triggerClasses}
          triggerStyle={{ ...(attrs.style as any), ...props.styles?.trigger }}
          popupClass={popupClass}
          hiddenClass={`${prefixCls}-hidden`}
          popupStyle={{ ...props.overlayStyle, ...props.styles?.dropdown }}
          onUpdate:open={(v: boolean) => emit('update:open', v)}
          onOpenChange={handleOpenChange}
          ref={(inst: any) => {
            triggerSetOpen = inst?.setOpen ?? null
          }}
        >
          {{
            default: () => child,
            popup: ({ placement }: { placement: Placement }) => renderPopup(),
          }}
        </Trigger>
      )
    }
  },
})
