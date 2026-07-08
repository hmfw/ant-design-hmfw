import { defineComponent, ref, computed, Transition, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { CloseOutlined, PlusOutlined } from '@hmfw/icons'
import { Trigger } from '../_internal/trigger'
import type { TooltipProps } from '../tooltip/types'
import type {
  FloatButtonType,
  FloatButtonShape,
  FloatButtonTrigger,
  FloatButtonGroupPlacement,
  FloatButtonBadgeProps,
} from './types'
import { type IconLike } from './shared'
import { FloatButton } from './FloatButton'

export const FloatButtonGroup = defineComponent({
  name: 'FloatButtonGroup',
  inheritAttrs: false,
  props: {
    shape: { type: String as PropType<FloatButtonShape>, default: 'circle' },
    type: { type: String as PropType<FloatButtonType>, default: 'default' },
    trigger: String as PropType<FloatButtonTrigger>,
    placement: { type: String as PropType<FloatButtonGroupPlacement>, default: 'top' },
    open: { type: Boolean, default: undefined },
    defaultOpen: { type: Boolean, default: false },
    closeIcon: [Function, String] as PropType<IconLike>,
    icon: [Function, String] as PropType<IconLike>,
    tooltip: [String, Object] as PropType<string | TooltipProps>,
    badge: Object as PropType<FloatButtonBadgeProps>,
    content: String,
    onOpenChange: Function as PropType<(open: boolean) => void>,
  },
  emits: ['update:open', 'openChange', 'click'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('float-btn')
    const groupRef = ref<HTMLDivElement | null>(null)
    const innerOpen = ref(props.defaultOpen)

    const isControlled = computed(() => props.open !== undefined)
    const isOpen = computed(() => (isControlled.value ? props.open! : innerOpen.value))

    const handleOpenChange = (next: boolean) => {
      if (!isControlled.value) innerOpen.value = next
      emit('update:open', next)
      emit('openChange', next)
      props.onOpenChange?.(next)
    }

    return () => {
      const hasTrigger = !!props.trigger

      const groupCls = cls(
        `${prefixCls}-group`,
        `${prefixCls}-group-${props.shape}`,
        `${prefixCls}-group-${props.placement}`,
        {
          [`${prefixCls}-group-trigger`]: hasTrigger,
          [`${prefixCls}-group-open`]: isOpen.value,
        },
      )

      // No trigger: render all children inline, always visible.
      if (!hasTrigger) {
        return (
          <div {...attrs} class={groupCls} ref={groupRef}>
            {slots.default?.()}
          </div>
        )
      }

      const triggerIcon = isOpen.value ? (props.closeIcon ?? CloseOutlined) : (props.icon ?? PlusOutlined)

      return (
        <Trigger
          open={isControlled.value ? props.open : undefined}
          defaultOpen={props.defaultOpen}
          trigger={props.trigger as any}
          closeOnOutsideClick
          closeOnEscape
          mouseEnterDelay={0}
          mouseLeaveDelay={0}
          triggerDisplay="block"
          popupStyle={{ display: 'none' }}
          onUpdate:open={handleOpenChange}
        >
          {{
            default: () => (
              <div
                {...attrs}
                class={groupCls}
                ref={groupRef}
                onMousedown={(e: MouseEvent) => {
                  // Prevent mousedown from bubbling to Trigger when trigger='click'
                  // This stops Trigger's handleClick from firing after our manual toggle
                  if (props.trigger === 'click') {
                    e.stopPropagation()
                  }
                }}
              >
                <Transition name={`${prefixCls}-group-wrap`}>
                  {isOpen.value && (
                    <div class={`${prefixCls}-group-wrap`} onClick={(e: MouseEvent) => e.stopPropagation()}>
                      {slots.default?.()}
                    </div>
                  )}
                </Transition>
                <FloatButton
                  type={props.type}
                  shape={props.shape}
                  icon={triggerIcon}
                  tooltip={props.tooltip}
                  badge={props.badge}
                  content={props.content}
                  onClick={(e: MouseEvent) => {
                    // When trigger is 'click', manually handle toggle to prevent race condition
                    if (props.trigger === 'click') {
                      e.stopPropagation()
                      handleOpenChange(!isOpen.value)
                    }
                    emit('click', e)
                  }}
                />
              </div>
            ),
          }}
        </Trigger>
      )
    }
  },
})
