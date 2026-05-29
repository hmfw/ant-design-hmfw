import {
  defineComponent,
  ref,
  computed,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
  Teleport,
  Transition,
  type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TourStep, TourProps } from './types'
import type { TooltipPlacement } from '../tooltip/types'

function getTargetEl(target: TourStep['target']): HTMLElement | null {
  if (!target) return null
  if (typeof target === 'function') return target()
  return document.querySelector<HTMLElement>(target)
}

interface Rect { top: number; left: number; width: number; height: number }

function getRect(el: HTMLElement | null): Rect | null {
  if (!el) return null
  const r = el.getBoundingClientRect()
  return {
    top: r.top + window.scrollY,
    left: r.left + window.scrollX,
    width: r.width,
    height: r.height,
  }
}

function calcPopoverPos(
  targetRect: Rect | null,
  popoverEl: HTMLElement | null,
  placement: TooltipPlacement = 'bottom',
): { top: number; left: number } {
  if (!targetRect || !popoverEl) return { top: 100, left: 100 }
  const pw = popoverEl.offsetWidth || 300
  const ph = popoverEl.offsetHeight || 200
  const gap = 12
  const cx = targetRect.left + targetRect.width / 2
  const cy = targetRect.top + targetRect.height / 2

  if (placement.startsWith('bottom')) {
    const top = targetRect.top + targetRect.height + gap
    const left = placement === 'bottom' ? cx - pw / 2
      : placement === 'bottomLeft' ? targetRect.left
      : targetRect.left + targetRect.width - pw
    return { top, left }
  }
  if (placement.startsWith('top')) {
    const top = targetRect.top - ph - gap
    const left = placement === 'top' ? cx - pw / 2
      : placement === 'topLeft' ? targetRect.left
      : targetRect.left + targetRect.width - pw
    return { top, left }
  }
  if (placement.startsWith('right')) {
    const left = targetRect.left + targetRect.width + gap
    const top = placement === 'right' ? cy - ph / 2
      : placement === 'rightTop' ? targetRect.top
      : targetRect.top + targetRect.height - ph
    return { top, left }
  }
  if (placement.startsWith('left')) {
    const left = targetRect.left - pw - gap
    const top = placement === 'left' ? cy - ph / 2
      : placement === 'leftTop' ? targetRect.top
      : targetRect.top + targetRect.height - ph
    return { top, left }
  }
  return { top: targetRect.top + targetRect.height + gap, left: cx - pw / 2 }
}

export const Tour = defineComponent({
  name: 'Tour',
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: { type: Boolean, default: false },
    current: { type: Number, default: undefined },
    defaultCurrent: { type: Number, default: 0 },
    steps: { type: Array as PropType<TourStep[]>, default: () => [] },
    arrow: { type: Boolean, default: true },
    mask: { type: Boolean, default: true },
    type: { type: String as PropType<'default' | 'primary'>, default: 'default' },
  },
  emits: ['update:open', 'update:current', 'change', 'close', 'finish'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tour')
    const innerOpen = ref(props.defaultOpen)
    const innerCurrent = ref(props.defaultCurrent)
    const popoverRef = ref<HTMLElement | null>(null)
    const popoverPos = ref({ top: 100, left: 100 })
    const targetRect = ref<Rect | null>(null)

    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)
    const currentStep = computed(() => props.current !== undefined ? props.current : innerCurrent.value)
    const step = computed(() => props.steps[currentStep.value] ?? null)
    const total = computed(() => props.steps.length)

    watch(() => props.open, (v) => { if (v !== undefined) innerOpen.value = v })
    watch(() => props.current, (v) => { if (v !== undefined) innerCurrent.value = v })

    async function updatePos() {
      await nextTick()
      const el = step.value ? getTargetEl(step.value.target) : null
      targetRect.value = getRect(el)
      if (popoverRef.value) {
        popoverPos.value = calcPopoverPos(targetRect.value, popoverRef.value, step.value?.placement)
      }
    }

    watch([isOpen, currentStep], ([open]) => { if (open) updatePos() }, { immediate: true })

    onMounted(() => { window.addEventListener('resize', updatePos); window.addEventListener('scroll', updatePos) })
    onBeforeUnmount(() => { window.removeEventListener('resize', updatePos); window.removeEventListener('scroll', updatePos) })

    function close() {
      innerOpen.value = false
      emit('update:open', false)
      emit('close')
    }

    function goTo(index: number) {
      innerCurrent.value = index
      emit('update:current', index)
      emit('change', index)
    }

    function prev() { if (currentStep.value > 0) goTo(currentStep.value - 1) }

    function next() {
      if (currentStep.value < total.value - 1) {
        goTo(currentStep.value + 1)
      } else {
        close()
        emit('finish')
      }
    }

    return () => {
      if (!isOpen.value || !step.value) return null

      const isPrimary = props.type === 'primary'
      const isLast = currentStep.value === total.value - 1

      return (
        <Teleport to="body">
          <div class={`${prefixCls}-root`}>
            {props.mask && (
              <div class={`${prefixCls}-mask`}>
                {targetRect.value && (
                  <svg class={`${prefixCls}-mask-svg`} width="100%" height="100%">
                    <defs>
                      <mask id="tour-mask">
                        <rect width="100%" height="100%" fill="white" />
                        <rect
                          x={targetRect.value.left - 4}
                          y={targetRect.value.top - 4}
                          width={targetRect.value.width + 8}
                          height={targetRect.value.height + 8}
                          rx="4"
                          fill="black"
                        />
                      </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="rgba(0,0,0,0.45)" mask="url(#tour-mask)" />
                  </svg>
                )}
                {!targetRect.value && <div class={`${prefixCls}-mask-fill`} />}
              </div>
            )}

            {targetRect.value && (
              <div
                class={`${prefixCls}-target-placeholder`}
                style={{
                  position: 'absolute',
                  top: `${targetRect.value.top - 4}px`,
                  left: `${targetRect.value.left - 4}px`,
                  width: `${targetRect.value.width + 8}px`,
                  height: `${targetRect.value.height + 8}px`,
                  borderRadius: '4px',
                  boxShadow: '0 0 0 9999px rgba(0,0,0,0.45)',
                  pointerEvents: 'none',
                  zIndex: 1001,
                }}
              />
            )}

            <div
              ref={popoverRef}
              class={cls(`${prefixCls}-popover`, {
                [`${prefixCls}-popover-primary`]: isPrimary,
              })}
              style={{
                position: 'absolute',
                top: `${popoverPos.value.top}px`,
                left: `${popoverPos.value.left}px`,
                zIndex: 1002,
              }}
            >
              <div class={`${prefixCls}-popover-inner`}>
                <button class={`${prefixCls}-close`} onClick={close}>✕</button>

                {step.value.cover && (
                  <div class={`${prefixCls}-cover`}>
                    <img src={step.value.cover} alt="" />
                  </div>
                )}

                {step.value.title && (
                  <div class={`${prefixCls}-title`}>{step.value.title}</div>
                )}
                {step.value.description && (
                  <div class={`${prefixCls}-description`}>{step.value.description}</div>
                )}

                <div class={`${prefixCls}-footer`}>
                  <div class={`${prefixCls}-indicators`}>
                    {props.steps.map((_, i) => (
                      <span
                        key={i}
                        class={cls(`${prefixCls}-indicator`, {
                          [`${prefixCls}-indicator-active`]: i === currentStep.value,
                        })}
                        onClick={() => goTo(i)}
                      />
                    ))}
                  </div>
                  <div class={`${prefixCls}-buttons`}>
                    {currentStep.value > 0 && (
                      <button
                        class={cls(`${prefixCls}-prev-btn`, 'hmfw-btn', 'hmfw-btn-default', 'hmfw-btn-small')}
                        onClick={() => { step.value?.prevButtonProps?.onClick?.(); prev() }}
                      >
                        {step.value.prevButtonProps?.children ?? '上一步'}
                      </button>
                    )}
                    <button
                      class={cls(`${prefixCls}-next-btn`, 'hmfw-btn', isPrimary ? 'hmfw-btn-primary' : 'hmfw-btn-primary', 'hmfw-btn-small')}
                      onClick={() => { step.value?.nextButtonProps?.onClick?.(); next() }}
                    >
                      {step.value.nextButtonProps?.children ?? (isLast ? '完成' : '下一步')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      )
    }
  },
})
