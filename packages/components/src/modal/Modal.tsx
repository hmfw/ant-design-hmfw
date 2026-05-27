import { defineComponent, ref, watch, computed, Teleport, Transition, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export type ModalWidth = number | string

export const Modal = defineComponent({
  name: 'Modal',
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    title: String,
    width: { type: [Number, String] as PropType<ModalWidth>, default: 520 },
    centered: Boolean,
    closable: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    footer: { type: Boolean, default: true },
    okText: { type: String, default: '确定' },
    cancelText: { type: String, default: '取消' },
    okType: { type: String, default: 'primary' },
    confirmLoading: Boolean,
    destroyOnClose: Boolean,
    zIndex: { type: Number, default: 1000 },
  },
  emits: ['update:open', 'ok', 'cancel', 'afterClose'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('modal')
    const innerOpen = ref(props.defaultOpen ?? false)

    watch(() => props.open, (v) => { if (v !== undefined) innerOpen.value = v })

    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    const close = () => {
      innerOpen.value = false
      emit('update:open', false)
      emit('cancel')
    }

    const handleMaskClick = () => {
      if (props.maskClosable) close()
    }

    const handleOk = () => {
      emit('ok')
    }

    return () => (
      <Teleport to="body">
        <Transition name="hmfw-modal-fade" v-slots={{
          default: () => isOpen.value && (
            <div class={`${prefixCls}-root`} style={{ zIndex: props.zIndex }}>
              <div class={`${prefixCls}-mask`} onClick={handleMaskClick} />
              <div class={cls(`${prefixCls}-wrap`, { [`${prefixCls}-centered`]: props.centered })}>
                <div
                  class={prefixCls}
                  style={{ width: typeof props.width === 'number' ? `${props.width}px` : props.width }}
                  role="dialog"
                  aria-modal="true"
                >
                  <div class={`${prefixCls}-content`}>
                    {props.closable && (
                      <button class={`${prefixCls}-close`} onClick={close} aria-label="Close">
                        ×
                      </button>
                    )}
                    {props.title && (
                      <div class={`${prefixCls}-header`}>
                        <div class={`${prefixCls}-title`}>{props.title}</div>
                      </div>
                    )}
                    <div class={`${prefixCls}-body`}>
                      {(!props.destroyOnClose || isOpen.value) && slots.default?.()}
                    </div>
                    {props.footer !== false && (
                      <div class={`${prefixCls}-footer`}>
                        {slots.footer ? slots.footer() : (
                          <>
                            <button class="hmfw-btn hmfw-btn-default" onClick={close}>
                              {props.cancelText}
                            </button>
                            <button
                              class={`hmfw-btn hmfw-btn-${props.okType}`}
                              onClick={handleOk}
                              disabled={props.confirmLoading}
                            >
                              {props.okText}
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        }}>
        </Transition>
      </Teleport>
    )
  },
})
