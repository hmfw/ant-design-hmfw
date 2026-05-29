import { defineComponent, ref, watch, computed, Teleport, Transition, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
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
    const drawerRef = ref<HTMLElement | null>(null)
    let cleanupTrap: (() => void) | null = null

    watch(() => props.open, (v) => { if (v !== undefined) innerOpen.value = v })

    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    watch(isOpen, async (v) => {
      if (v) {
        await Promise.resolve()
        if (drawerRef.value) cleanupTrap = trapFocus(drawerRef.value)
      } else {
        cleanupTrap?.()
        cleanupTrap = null
      }
    })

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
        <Transition name={`hmfw-drawer-${props.placement}`} v-slots={{
          default: () => isOpen.value && (
            <div class={`${prefixCls}-root`} style={{ zIndex: props.zIndex }}>
              {props.mask && <div class={`${prefixCls}-mask`} onClick={() => props.maskClosable && close()} />}
              <div
                ref={drawerRef}
                class={cls(`${prefixCls}-content-wrapper`, `${prefixCls}-${props.placement}`)}
                style={sizeStyle.value}
                role="dialog"
                aria-modal="true"
                aria-labelledby={props.title ? `${prefixCls}-title` : undefined}
              >
                <div class={`${prefixCls}-content`}>
                  <div class={`${prefixCls}-header`}>
                    {props.title && <div id={`${prefixCls}-title`} class={`${prefixCls}-title`}>{props.title}</div>}
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
          )
        }}>
        </Transition>
      </Teleport>
    )
  },
})
