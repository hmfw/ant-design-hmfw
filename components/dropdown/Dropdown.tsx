import { defineComponent, ref, computed, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Menu } from '../menu'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type { DropdownProps, DropdownPlacement, DropdownTrigger, DropdownArrowOptions } from './types'

// satisfies 强制 props key 集合与 DropdownProps 接口一致，增删属性时编译报错。
const dropdownProps = {
  menu: { type: Object as PropType<DropdownProps['menu']>, default: undefined },
  trigger: { type: [String, Array] as PropType<DropdownTrigger | DropdownTrigger[]>, default: 'hover' },
  placement: { type: String as PropType<DropdownPlacement>, default: 'bottomLeft' },
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  arrow: { type: [Boolean, Object] as PropType<boolean | DropdownArrowOptions>, default: false },
  overlayClassName: { type: String, default: undefined },
  overlayStyle: { type: Object as PropType<Record<string, any>>, default: undefined },
  getPopupContainer: { type: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>, default: undefined },
  autoAdjustOverflow: { type: Boolean, default: true },
  destroyOnHidden: { type: Boolean, default: false },
  mouseEnterDelay: { type: Number, default: 0.15 },
  mouseLeaveDelay: { type: Number, default: 0.1 },
  popupRender: { type: Function as PropType<(originNode: VNode) => VNode>, default: undefined },
  forceRender: { type: Boolean, default: false },
  matchWidth: { type: [Boolean, Number] as PropType<boolean | number>, default: true },
  openClassName: { type: String, default: undefined },
  classNames: { type: Object as PropType<import('./types').DropdownClassNames>, default: undefined },
  styles: { type: Object as PropType<import('./types').DropdownStyles>, default: undefined },
} satisfies Record<keyof DropdownProps, any>

export const Dropdown = defineComponent({
  name: 'Dropdown',
  inheritAttrs: false,
  props: dropdownProps,
  emits: ['update:open', 'openChange'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('dropdown')

    // 内部 open 状态，用于非受控模式下的 openClassName 等逻辑。
    // 受控时跟随 props.open，非受控时同步 Trigger 回调。
    const innerOpen = ref(props.open ?? props.defaultOpen ?? false)
    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    const pointAtCenter = computed(
      () => typeof props.arrow === 'object' && props.arrow !== null && props.arrow.pointAtCenter === true,
    )
    const shouldDestroy = computed(() => props.destroyOnHidden)
    // 带箭头时间距更大（12px），避免箭头与触发器过于紧凑；无箭头时 4px 即可
    const gap = computed(() => (props.arrow ? 12 : 4))

    // Trigger 内部维护 open 状态（非受控）或跟随 props.open（受控）。
    // 菜单项点击时需要主动关闭弹层，通过 ref 回调获取 Trigger 暴露的 setOpen 方法。
    // 注意：不能改用 ref<T> 响应式包装——Trigger 的 expose 在挂载时赋值，ref 无法感知变化。
    let triggerSetOpen: ((v: boolean, source?: 'trigger' | 'popup') => void) | null = null

    // 仅 emit openChange（含 source 信息）；update:open 由 onUpdate:open 回调负责，
    // 避免与 Trigger 的 update:open 重复 emit 导致父组件收到两次事件。
    const handleOpenChange = (v: boolean, info: { source: 'trigger' | 'popup' }) => {
      innerOpen.value = v
      emit('openChange', v, info)
    }

    const handleMenuClick = (clickInfo: { key: string }) => {
      props.menu?.onClick?.(clickInfo)
      // selectable + multiple 时保持打开
      if (props.menu?.selectable && props.menu?.multiple) return
      triggerSetOpen?.(false, 'popup')
    }

    const renderOverlay = () => {
      // menu.items 未提供时回退到 overlay 插槽（完全自定义内容）
      if (!props.menu?.items) {
        return slots.overlay?.()
      }
      const menuNode = (
        <Menu {...props.menu} mode="vertical" selectable={props.menu.selectable ?? false} onClick={handleMenuClick} />
      )
      const renderFn = props.popupRender
      return renderFn ? renderFn(menuNode) : menuNode
    }

    return () => {
      const child = slots.default?.()?.[0]
      if (!child) return null

      const triggerClasses = cls(
        props.openClassName && isOpen.value ? props.openClassName : null,
        props.classNames?.trigger,
        attrs.class as any,
      )

      const popupClass = cls(prefixCls, props.overlayClassName, props.classNames?.dropdown)

      const renderPopup = () => (
        <>
          {props.arrow && (
            <div
              class={cls('hmfw-trigger-arrow', `${prefixCls}-arrow`, props.classNames?.arrow)}
              style={props.styles?.arrow}
            />
          )}
          <div class={cls(`${prefixCls}-content`, props.classNames?.content)} style={props.styles?.content}>
            {renderOverlay()}
          </div>
        </>
      )

      // styles.dropdown（语义化 API）优先级高于 overlayStyle（传统 API）
      // v-model:open 由 onUpdate:open 单独同步，handleOpenChange 不再重复 emit update:open
      // ref 回调捕获 Trigger 暴露的 setOpen，用于菜单项点击时主动关闭弹层
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
          matchWidth={props.matchWidth}
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
            popup: () => renderPopup(),
          }}
        </Trigger>
      )
    }
  },
})
