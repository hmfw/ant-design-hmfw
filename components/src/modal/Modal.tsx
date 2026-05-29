import { defineComponent, ref, watch, computed, Teleport, Transition, type PropType } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'

function trapFocus(el: HTMLElement): (() => void) {
  const prev = document.activeElement as HTMLElement | null
  const nodes = () => Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE))
  nodes()[0]?.focus()
  const handler = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return
    const focusable = nodes()
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus() }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }
  el.addEventListener('keydown', handler)
  return () => { el.removeEventListener('keydown', handler); prev?.focus() }
}

export type ModalWidth = number | string

export const Modal = defineComponent({
  name: 'Modal',
  props: {    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    title: String,
    width: { type: [Number, String] as PropType<ModalWidth>, default: 520 },
    centered: Boolean,
    closable: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    footer: { type: Boolean, default: true },
    okText: { type: String, default: undefined },
    cancelText: { type: String, default: undefined },
    okType: { type: String, default: 'primary' },
    confirmLoading: Boolean,
    destroyOnClose: Boolean,
    zIndex: { type: Number, default: 1000 },
  },
  emits: ['update:open', 'ok', 'cancel', 'afterClose'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('modal')
    const locale = useLocale()
    const innerOpen = ref(props.defaultOpen ?? false)
    const dialogRef = ref<HTMLElement | null>(null)
    let cleanupTrap: (() => void) | null = null

    watch(() => props.open, (v) => { if (v !== undefined) innerOpen.value = v })

    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    watch(isOpen, async (v) => {
      if (v) {
        await Promise.resolve()
        if (dialogRef.value) cleanupTrap = trapFocus(dialogRef.value)
      } else {
        cleanupTrap?.()
        cleanupTrap = null
      }
    })

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
                  ref={dialogRef}
                  class={prefixCls}
                  style={{ width: typeof props.width === 'number' ? `${props.width}px` : props.width }}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={props.title ? `${prefixCls}-title` : undefined}
                >
                  <div class={`${prefixCls}-content`}>
                    {props.closable && (
                      <button class={`${prefixCls}-close`} onClick={close} aria-label="Close">
                        ×
                      </button>
                    )}
                    {props.title && (
                      <div class={`${prefixCls}-header`}>
                        <div id={`${prefixCls}-title`} class={`${prefixCls}-title`}>{props.title}</div>
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
                              {props.cancelText ?? locale.value.Modal.cancelText}
                            </button>
                            <button
                              class={`hmfw-btn hmfw-btn-${props.okType}`}
                              onClick={handleOk}
                              disabled={props.confirmLoading}
                            >
                              {props.okText ?? locale.value.Modal.okText}
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
