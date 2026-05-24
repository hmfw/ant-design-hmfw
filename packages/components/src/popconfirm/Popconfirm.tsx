import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  Teleport,
  type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Button } from '../button'
import type { TooltipPlacement } from '../tooltip/types'

export const Popconfirm = defineComponent({
  name: 'Popconfirm',
  props: {
    title: String,
    description: String,
    okText: { type: String, default: '确定' },
    cancelText: { type: String, default: '取消' },
    okType: { type: String as PropType<'primary' | 'default' | 'danger'>, default: 'primary' },
    icon: { type: String, default: '⚠' },
    placement: { type: String as PropType<TooltipPlacement>, default: 'top' },
    open: { type: Boolean, default: undefined },
    disabled: Boolean,
    showCancel: { type: Boolean, default: true },
    mouseEnterDelay: { type: Number, default: 0.1 },
    mouseLeaveDelay: { type: Number, default: 0.1 },
  },
  emits: ['update:open', 'openChange', 'confirm', 'cancel'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('popconfirm')
    const triggerRef = ref<HTMLElement | null>(null)
    const popRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(false)
    const position = ref({ top: 0, left: 0 })

    const isControlled = computed(() => props.open !== undefined)
    const visible = computed(() => isControlled.value ? props.open! : innerOpen.value)

    watch(() => props.open, (v) => { if (v !== undefined) innerOpen.value = v })

    const setOpen = (v: boolean) => {
      if (props.disabled) return
      innerOpen.value = v
      emit('update:open', v)
      emit('openChange', v)
    }

    const updatePosition = () => {
      if (!triggerRef.value || !popRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      const popRect = popRef.value.getBoundingClientRect()
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      const p = props.placement
      const gap = 8
      let top = 0, left = 0
      const cx = rect.left + rect.width / 2 + scrollX
      const cy = rect.top + rect.height / 2 + scrollY

      if (p.startsWith('top')) {
        top = rect.top + scrollY - popRect.height - gap
        if (p === 'top') left = cx - popRect.width / 2
        else if (p === 'topLeft') left = rect.left + scrollX
        else left = rect.right + scrollX - popRect.width
      } else if (p.startsWith('bottom')) {
        top = rect.bottom + scrollY + gap
        if (p === 'bottom') left = cx - popRect.width / 2
        else if (p === 'bottomLeft') left = rect.left + scrollX
        else left = rect.right + scrollX - popRect.width
      } else if (p.startsWith('left')) {
        left = rect.left + scrollX - popRect.width - gap
        if (p === 'left') top = cy - popRect.height / 2
        else if (p === 'leftTop') top = rect.top + scrollY
        else top = rect.bottom + scrollY - popRect.height
      } else {
        left = rect.right + scrollX + gap
        if (p === 'right') top = cy - popRect.height / 2
        else if (p === 'rightTop') top = rect.top + scrollY
        else top = rect.bottom + scrollY - popRect.height
      }
      position.value = { top, left }
    }

    watch(visible, async (v) => { if (v) { await nextTick(); updatePosition() } })

    const handleOutsideClick = (e: MouseEvent) => {
      if (!visible.value) return
      if (triggerRef.value?.contains(e.target as Node) || popRef.value?.contains(e.target as Node)) return
      setOpen(false)
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideClick))

    const handleConfirm = () => {
      emit('confirm')
      setOpen(false)
    }

    const handleCancel = () => {
      emit('cancel')
      setOpen(false)
    }

    return () => {
      const child = slots.default?.()[0]
      if (!child) return null

      return (
        <>
          <div
            ref={triggerRef}
            style={{ display: 'inline-block' }}
            onClick={() => setOpen(!visible.value)}
          >
            {child}
          </div>
          <Teleport to="body">
            <div
              ref={popRef}
              class={cls(prefixCls, `${prefixCls}-placement-${props.placement}`, {
                [`${prefixCls}-hidden`]: !visible.value,
              })}
              style={{
                position: 'absolute',
                top: `${position.value.top}px`,
                left: `${position.value.left}px`,
                zIndex: '1070',
              }}
            >
              <div class={`${prefixCls}-content`}>
                <div class={`${prefixCls}-arrow`} />
                <div class={`${prefixCls}-inner`}>
                  <div class={`${prefixCls}-message`}>
                    <span class={`${prefixCls}-message-icon`}>{props.icon}</span>
                    <div class={`${prefixCls}-message-title`}>
                      {slots.title?.() ?? props.title}
                    </div>
                  </div>
                  {(props.description || slots.description) && (
                    <div class={`${prefixCls}-description`}>
                      {slots.description?.() ?? props.description}
                    </div>
                  )}
                  <div class={`${prefixCls}-buttons`}>
                    {props.showCancel && (
                      <Button size="small" onClick={handleCancel}>
                        {props.cancelText}
                      </Button>
                    )}
                    <Button
                      size="small"
                      type={props.okType === 'danger' ? 'primary' : props.okType}
                      danger={props.okType === 'danger'}
                      onClick={handleConfirm}
                    >
                      {props.okText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Teleport>
        </>
      )
    }
  },
})
