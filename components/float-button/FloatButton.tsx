import { defineComponent, ref, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export const FloatButton = defineComponent({
  name: 'FloatButton',
  props: {
    type: { type: String as PropType<'default' | 'primary'>, default: 'default' },
    shape: { type: String as PropType<'circle' | 'square'>, default: 'circle' },
    icon: String,
    description: String,
    tooltip: String,
    badge: Object as PropType<{ count?: number; dot?: boolean }>,
    href: String,
    target: String,
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('float-btn')

    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }

    return () => {
      const content = (
        <div class={`${prefixCls}-body`}>
          <div class={`${prefixCls}-icon`}>
            {slots.icon?.() ?? props.icon ?? '↑'}
          </div>
          {(props.description || slots.description) && (
            <div class={`${prefixCls}-description`}>
              {slots.description?.() ?? props.description}
            </div>
          )}
        </div>
      )

      const buttonEl = (
        <button
          class={cls(prefixCls, `${prefixCls}-${props.type}`, `${prefixCls}-${props.shape}`)}
          title={props.tooltip}
          onClick={handleClick}
        >
          {content}
          {props.badge?.dot && <span class={`${prefixCls}-badge-dot`} />}
          {props.badge?.count !== undefined && props.badge.count > 0 && (
            <span class={`${prefixCls}-badge-count`}>{props.badge.count}</span>
          )}
        </button>
      )

      if (props.href) {
        return (
          <a
            class={cls(prefixCls, `${prefixCls}-${props.type}`, `${prefixCls}-${props.shape}`)}
            href={props.href}
            target={props.target}
            title={props.tooltip}
            onClick={handleClick}
          >
            {content}
          </a>
        )
      }

      return buttonEl
    }
  },
})

export const FloatButtonGroup = defineComponent({
  name: 'FloatButtonGroup',
  props: {
    shape: { type: String as PropType<'circle' | 'square'>, default: 'circle' },
    type: { type: String as PropType<'default' | 'primary'>, default: 'default' },
    trigger: String as PropType<'click' | 'hover'>,
    open: { type: Boolean, default: undefined },
    closeIcon: String,
    onOpenChange: Function as PropType<(open: boolean) => void>,
  },
  emits: ['update:open', 'openChange'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('float-btn')
    const innerOpen = ref(false)

    const isControlled = () => props.open !== undefined
    const isOpen = () => isControlled() ? props.open! : innerOpen.value

    const toggle = () => {
      const next = !isOpen()
      innerOpen.value = next
      emit('update:open', next)
      emit('openChange', next)
      props.onOpenChange?.(next)
    }

    return () => (
      <div class={cls(`${prefixCls}-group`, `${prefixCls}-group-${props.shape}`, {
        [`${prefixCls}-group-open`]: isOpen(),
      })}>
        {isOpen() && (
          <div class={`${prefixCls}-group-list`}>
            {slots.default?.()}
          </div>
        )}
        {props.trigger && (
          <FloatButton
            type={props.type}
            shape={props.shape}
            icon={isOpen() ? (props.closeIcon ?? '×') : undefined}
            onClick={toggle}
          />
        )}
        {!props.trigger && slots.default?.()}
      </div>
    )
  },
})
