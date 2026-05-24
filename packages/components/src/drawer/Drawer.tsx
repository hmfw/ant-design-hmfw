import { defineComponent, ref, watch, computed, Teleport, Transition, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left'

export const Drawer = defineComponent({
  name: 'Drawer',
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    title: String,
    placement: {
      type: String as PropType<DrawerPlacement>,
      default: 'right',
    },
    width: { type: [Number, String], default: 378 },
    height: { type: [Number, String], default: 378 },
    closable: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    mask: { type: Boolean, default: true },
    zIndex: { type: Number, default: 1000 },
    destroyOnClose: Boolean,
  },
  emits: ['update:open', 'close'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('drawer')
    const innerOpen = ref(props.defaultOpen ?? false)

    watch(() => props.open, (v) => { if (v !== undefined) innerOpen.value = v })

    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    const close = () => {
      innerOpen.value = false
      emit('update:open', false)
      emit('close')
    }

    const sizeStyle = computed(() => {
      const isVertical = props.placement === 'left' || props.placement === 'right'
      return isVertical
        ? { width: typeof props.width === 'number' ? `${props.width}px` : props.width }
        : { height: typeof props.height === 'number' ? `${props.height}px` : props.height }
    })

    return () => (
      <Teleport to="body">
        <Transition name={`hmfw-drawer-${props.placement}`}>
          {isOpen.value && (
            <div class={`${prefixCls}-root`} style={{ zIndex: props.zIndex }}>
              {props.mask && <div class={`${prefixCls}-mask`} onClick={() => props.maskClosable && close()} />}
              <div class={cls(`${prefixCls}-content-wrapper`, `${prefixCls}-${props.placement}`)} style={sizeStyle.value}>
                <div class={`${prefixCls}-content`}>
                  <div class={`${prefixCls}-header`}>
                    {props.title && <div class={`${prefixCls}-title`}>{props.title}</div>}
                    {props.closable && (
                      <button class={`${prefixCls}-close`} onClick={close} aria-label="Close">×</button>
                    )}
                  </div>
                  <div class={`${prefixCls}-body`}>
                    {(!props.destroyOnClose || isOpen.value) && slots.default?.()}
                  </div>
                  {slots.footer && (
                    <div class={`${prefixCls}-footer`}>{slots.footer()}</div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </Teleport>
    )
  },
})
