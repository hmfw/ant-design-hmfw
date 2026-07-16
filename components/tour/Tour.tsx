import {
  defineComponent,
  ref,
  computed,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
  Teleport,
  h,
  isVNode,
  type PropType,
  type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Button } from '../button'
import { CloseOutlined } from '@hmfw/icons'
import type { TourStep, TourProps, TourButtonProps } from './types'
import type { TooltipPlacement } from '../tooltip/types'
import { omit } from '../_utils/function'

/** 剥离 children/onClick 后再透传给 Button，避免只读 children 属性透传到 DOM 触发告警 */
function omitButtonProps(buttonProps?: TourButtonProps) {
  if (!buttonProps) return undefined
  return omit(buttonProps, ['children', 'onClick'])
  // const { children, onClick, ...rest } = buttonProps
  // return rest
}

function getTargetEl(target: TourStep['target']): HTMLElement | null {
  if (!target) return null
  if (typeof target === 'function') return target()
  return document.querySelector<HTMLElement>(target)
}

interface Rect {
  top: number
  left: number
  width: number
  height: number
}

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
  gap = 12,
): { top: number; left: number } {
  if (!targetRect || !popoverEl) return { top: 100, left: 100 }
  const pw = popoverEl.offsetWidth || 300
  const ph = popoverEl.offsetHeight || 200
  const cx = targetRect.left + targetRect.width / 2
  const cy = targetRect.top + targetRect.height / 2

  if (placement.startsWith('bottom')) {
    const top = targetRect.top + targetRect.height + gap
    const left =
      placement === 'bottom'
        ? cx - pw / 2
        : placement === 'bottomLeft'
          ? targetRect.left
          : targetRect.left + targetRect.width - pw
    return { top, left }
  }
  if (placement.startsWith('top')) {
    const top = targetRect.top - ph - gap
    const left =
      placement === 'top'
        ? cx - pw / 2
        : placement === 'topLeft'
          ? targetRect.left
          : targetRect.left + targetRect.width - pw
    return { top, left }
  }
  if (placement.startsWith('right')) {
    const left = targetRect.left + targetRect.width + gap
    const top =
      placement === 'right'
        ? cy - ph / 2
        : placement === 'rightTop'
          ? targetRect.top
          : targetRect.top + targetRect.height - ph
    return { top, left }
  }
  if (placement.startsWith('left')) {
    const left = targetRect.left - pw - gap
    const top =
      placement === 'left'
        ? cy - ph / 2
        : placement === 'leftTop'
          ? targetRect.top
          : targetRect.top + targetRect.height - ph
    return { top, left }
  }
  return { top: targetRect.top + targetRect.height + gap, left: cx - pw / 2 }
}

function renderContent(content: string | VNode | (() => VNode) | undefined) {
  if (content === undefined || content === null) return null
  if (typeof content === 'function') return content()
  if (isVNode(content)) return content
  return String(content)
}

export const Tour = defineComponent({
  name: 'Tour',
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: { type: Boolean, default: false },
    current: { type: Number, default: undefined },
    defaultCurrent: { type: Number, default: 0 },
    steps: { type: Array as PropType<TourStep[]>, default: () => [] },
    arrow: { type: [Boolean, Object] as PropType<TourProps['arrow']>, default: true },
    placement: { type: String as PropType<TooltipPlacement>, default: undefined },
    mask: { type: [Boolean, Object] as PropType<TourProps['mask']>, default: true },
    type: { type: String as PropType<'default' | 'primary'>, default: 'default' },
    scrollIntoViewOptions: {
      type: [Boolean, Object] as PropType<boolean | ScrollIntoViewOptions>,
      default: true,
    },
    zIndex: { type: Number, default: 1001 },
    gap: { type: Object as PropType<TourProps['gap']>, default: undefined },
    indicatorsRender: {
      type: Function as PropType<TourProps['indicatorsRender']>,
      default: undefined,
    },
    closeIcon: {
      type: [Object, Function, Boolean] as PropType<TourProps['closeIcon']>,
      default: undefined,
    },
    classNames: { type: Object as PropType<TourProps['classNames']>, default: undefined },
    styles: { type: Object as PropType<TourProps['styles']>, default: undefined },
  },
  emits: ['update:open', 'update:current', 'change', 'close', 'finish'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tour')
    const innerOpen = ref(props.defaultOpen)
    const innerCurrent = ref(props.defaultCurrent)
    const popoverRef = ref<HTMLElement | null>(null)
    const popoverPos = ref({ top: 100, left: 100 })
    const targetRect = ref<Rect | null>(null)

    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))
    const currentStep = computed(() => (props.current !== undefined ? props.current : innerCurrent.value))
    const step = computed(() => props.steps[currentStep.value] ?? null)
    const total = computed(() => props.steps.length)

    const mergedMask = computed(() => {
      const stepMask = step.value?.mask
      return stepMask !== undefined ? stepMask : props.mask
    })

    const mergedType = computed(() => step.value?.type ?? props.type)

    watch(
      () => props.open,
      (v) => {
        if (v !== undefined) innerOpen.value = v
      },
    )
    watch(
      () => props.current,
      (v) => {
        if (v !== undefined) innerCurrent.value = v
      },
    )

    async function scrollToTarget() {
      const el = step.value ? getTargetEl(step.value.target) : null
      if (!el) return

      const scrollOptions = step.value?.scrollIntoViewOptions ?? props.scrollIntoViewOptions ?? true

      if (scrollOptions) {
        const options: ScrollIntoViewOptions =
          typeof scrollOptions === 'boolean' ? { block: 'center', behavior: 'smooth' } : scrollOptions
        el.scrollIntoView(options)
      }
    }

    async function updatePos() {
      await nextTick()
      const el = step.value ? getTargetEl(step.value.target) : null
      targetRect.value = getRect(el)

      if (popoverRef.value) {
        const placement = step.value?.placement ?? props.placement ?? 'bottom'
        const gapValue = props.gap?.offset ?? 12
        const gap = typeof gapValue === 'number' ? gapValue : gapValue[0]
        popoverPos.value = calcPopoverPos(targetRect.value, popoverRef.value, placement, gap)
      }
    }

    watch(
      [isOpen, currentStep],
      async ([open]) => {
        if (open) {
          await scrollToTarget()
          await updatePos()
        }
      },
      { immediate: true },
    )

    onMounted(() => {
      window.addEventListener('resize', updatePos)
      window.addEventListener('scroll', updatePos, true)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updatePos)
      window.removeEventListener('scroll', updatePos, true)
    })

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

    function prev() {
      if (currentStep.value > 0) goTo(currentStep.value - 1)
    }

    function next() {
      if (currentStep.value < total.value - 1) {
        goTo(currentStep.value + 1)
      } else {
        close()
        emit('finish')
      }
    }

    const getCloseIcon = () => {
      if (props.closeIcon === false) return null
      if (props.closeIcon === undefined) {
        return h(CloseOutlined, { class: 'hmfw-icon' })
      }
      if (typeof props.closeIcon === 'function') {
        return props.closeIcon()
      }
      return props.closeIcon
    }

    return () => {
      if (!isOpen.value || !step.value) return null

      const isPrimary = mergedType.value === 'primary'
      const isLast = currentStep.value === total.value - 1
      const showMask = mergedMask.value !== false
      const maskStyle = typeof mergedMask.value === 'object' ? mergedMask.value.style : undefined
      const maskColor = typeof mergedMask.value === 'object' ? mergedMask.value.color : 'rgba(0,0,0,0.45)'

      const closeIcon = getCloseIcon()

      return h(Teleport, { to: 'body' }, [
        h(
          'div',
          {
            class: cls(`${prefixCls}-root`, props.classNames?.root),
            style: { zIndex: props.zIndex, ...props.styles?.root },
          },
          [
            // Mask layer
            showMask &&
              h(
                'div',
                {
                  class: cls(`${prefixCls}-mask`, props.classNames?.mask),
                  style: { ...maskStyle, ...props.styles?.mask },
                },
                [
                  targetRect.value
                    ? h(
                        'svg',
                        {
                          class: `${prefixCls}-mask-svg`,
                          width: '100%',
                          height: '100%',
                        },
                        [
                          h('defs', [
                            h('mask', { id: 'tour-mask' }, [
                              h('rect', { width: '100%', height: '100%', fill: 'white' }),
                              h('rect', {
                                x: targetRect.value.left - 4,
                                y: targetRect.value.top - 4,
                                width: targetRect.value.width + 8,
                                height: targetRect.value.height + 8,
                                rx: props.gap?.radius ?? 4,
                                fill: 'black',
                              }),
                            ]),
                          ]),
                          h('rect', {
                            width: '100%',
                            height: '100%',
                            fill: maskColor,
                            mask: 'url(#tour-mask)',
                          }),
                        ],
                      )
                    : h('div', { class: `${prefixCls}-mask-fill`, style: { background: maskColor } }),
                ],
              ),

            // Popover
            h(
              'div',
              {
                ref: popoverRef,
                class: cls(
                  `${prefixCls}-popover`,
                  {
                    [`${prefixCls}-popover-primary`]: isPrimary,
                  },
                  step.value.className,
                  props.classNames?.popover,
                ),
                style: {
                  position: 'absolute',
                  top: `${popoverPos.value.top}px`,
                  left: `${popoverPos.value.left}px`,
                  zIndex: props.zIndex + 1,
                  ...step.value.style,
                  ...props.styles?.popover,
                },
              },
              [
                h(
                  'div',
                  {
                    class: cls(`${prefixCls}-popover-inner`, props.classNames?.popoverInner),
                    style: props.styles?.popoverInner,
                  },
                  [
                    // Close button
                    closeIcon !== null &&
                      h(
                        'button',
                        {
                          type: 'button',
                          class: cls(`${prefixCls}-close`, props.classNames?.close),
                          style: props.styles?.close,
                          onClick: close,
                          'aria-label': 'Close',
                        },
                        [closeIcon],
                      ),

                    // Cover
                    step.value.cover &&
                      h(
                        'div',
                        { class: cls(`${prefixCls}-cover`, props.classNames?.cover), style: props.styles?.cover },
                        [
                          typeof step.value.cover === 'string'
                            ? h('img', { src: step.value.cover, alt: '' })
                            : renderContent(step.value.cover as any),
                        ],
                      ),

                    // Title
                    step.value.title &&
                      h(
                        'div',
                        { class: cls(`${prefixCls}-title`, props.classNames?.title), style: props.styles?.title },
                        [renderContent(step.value.title)],
                      ),

                    // Description
                    step.value.description &&
                      h(
                        'div',
                        {
                          class: cls(`${prefixCls}-description`, props.classNames?.description),
                          style: props.styles?.description,
                        },
                        [renderContent(step.value.description)],
                      ),

                    // Footer
                    h(
                      'div',
                      { class: cls(`${prefixCls}-footer`, props.classNames?.footer), style: props.styles?.footer },
                      [
                        // Indicators
                        total.value > 1 &&
                          h(
                            'div',
                            {
                              class: cls(`${prefixCls}-indicators`, props.classNames?.indicators),
                              style: props.styles?.indicators,
                            },
                            [
                              props.indicatorsRender
                                ? props.indicatorsRender(currentStep.value, total.value)
                                : props.steps.map((_, i) =>
                                    h('span', {
                                      key: i,
                                      class: cls(
                                        `${prefixCls}-indicator`,
                                        {
                                          [`${prefixCls}-indicator-active`]: i === currentStep.value,
                                        },
                                        props.classNames?.indicator,
                                      ),
                                      style: props.styles?.indicator,
                                      onClick: () => goTo(i),
                                    }),
                                  ),
                            ],
                          ),

                        // Buttons
                        h(
                          'div',
                          {
                            class: cls(`${prefixCls}-buttons`, props.classNames?.buttons),
                            style: props.styles?.buttons,
                          },
                          [
                            currentStep.value > 0 &&
                              h(
                                Button,
                                {
                                  size: 'small',
                                  type: isPrimary ? 'default' : 'default',
                                  ghost: isPrimary,
                                  class: cls(`${prefixCls}-prev-btn`, props.classNames?.prevBtn),
                                  style: props.styles?.prevBtn,
                                  onClick: () => {
                                    step.value?.prevButtonProps?.onClick?.()
                                    prev()
                                  },
                                  // 排除 children/onClick：前者由插槽渲染，后者已包裹处理，
                                  // 透传到 DOM <button> 会触发 Vue 设置只读 children 属性的告警
                                  ...omitButtonProps(step.value.prevButtonProps),
                                },
                                {
                                  default: () => step.value?.prevButtonProps?.children ?? '上一步',
                                },
                              ),
                            h(
                              Button,
                              {
                                size: 'small',
                                type: isPrimary ? 'default' : 'primary',
                                ghost: isPrimary,
                                class: cls(`${prefixCls}-next-btn`, props.classNames?.nextBtn),
                                style: props.styles?.nextBtn,
                                onClick: () => {
                                  step.value?.nextButtonProps?.onClick?.()
                                  next()
                                },
                                ...omitButtonProps(step.value.nextButtonProps),
                              },
                              {
                                default: () => step.value?.nextButtonProps?.children ?? (isLast ? '完成' : '下一步'),
                              },
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ])
    }
  },
})
