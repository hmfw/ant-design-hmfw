import { defineComponent, ref, computed, watch, nextTick, onBeforeUnmount, Teleport, h, type PropType } from 'vue'
import { usePrefixCls, useLocale, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { CloseOutlined } from '@hmfw/icons'
import type { TourProps, TourPlacement } from './types'
import { TourMask } from './TourMask'
import { TourPanel } from './TourPanel'
import {
  ARROW_SIZE,
  calcPopoverPos,
  genMaskId,
  getHoleRect,
  getRect,
  getTargetEl,
  isEditableTarget,
  type PopoverPosition,
  type Rect,
} from './utils'

const tourProps = {
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: false },
  current: { type: Number, default: undefined },
  defaultCurrent: { type: Number, default: 0 },
  steps: { type: Array as PropType<TourProps['steps']>, default: () => [] },
  arrow: { type: [Boolean, Object] as PropType<TourProps['arrow']>, default: true },
  placement: { type: String as PropType<TourPlacement>, default: undefined },
  mask: { type: [Boolean, Object] as PropType<TourProps['mask']>, default: true },
  type: { type: String as PropType<'default' | 'primary'>, default: 'default' },
  scrollIntoViewOptions: {
    type: [Boolean, Object] as PropType<boolean | ScrollIntoViewOptions>,
    default: true,
  },
  zIndex: { type: Number, default: 1001 },
  gap: { type: Object as PropType<TourProps['gap']>, default: undefined },
  disabledInteraction: { type: Boolean, default: false },
  indicatorsRender: {
    type: Function as PropType<TourProps['indicatorsRender']>,
    default: undefined,
  },
  closeIcon: {
    type: [Object, Function, Boolean] as PropType<TourProps['closeIcon']>,
    default: undefined,
  },
  keyboard: { type: Boolean, default: true },
  getPopupContainer: { type: Function as PropType<TourProps['getPopupContainer']>, default: undefined },
  classNames: { type: Object as PropType<TourProps['classNames']>, default: undefined },
  styles: { type: Object as PropType<TourProps['styles']>, default: undefined },
} satisfies Record<keyof TourProps, any>

export const Tour = defineComponent({
  name: 'Tour',
  props: tourProps,
  emits: ['update:open', 'update:current', 'change', 'close', 'finish'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tour')
    const locale = useLocale()
    const config = useConfig()
    const innerOpen = ref(props.defaultOpen)
    const innerCurrent = ref(props.defaultCurrent)
    const popoverRef = ref<HTMLElement | null>(null)
    const targetRect = ref<Rect | null>(null)
    const viewport = ref({ width: 0, height: 0 })
    const popoverPos = ref<PopoverPosition>({
      top: 0,
      left: 0,
      arrowSide: null,
      arrowOffset: 0,
      arrowOffsetSelf: 0,
      center: true,
    })
    const maskId = genMaskId(prefixCls)
    const idPrefix = maskId.replace('-mask-', '-panel-')
    /** 打开前的焦点元素，关闭后归还焦点 */
    const prevActiveEl = ref<HTMLElement | null>(null)

    // 组件自身配置优先于 ConfigProvider 下发的容器；SSR 下无 document，返回 undefined 交由渲染短路
    const popupContainer = computed(() => {
      if (typeof document === 'undefined') return undefined
      return props.getPopupContainer?.() ?? config.value.getPopupContainer?.() ?? document.body
    })

    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))
    const currentStep = computed(() => (props.current !== undefined ? props.current : innerCurrent.value))
    const step = computed(() => props.steps?.[currentStep.value] ?? null)
    const total = computed(() => props.steps?.length ?? 0)

    const mergedMask = computed(() => step.value?.mask ?? props.mask)
    const mergedType = computed(() => step.value?.type ?? props.type)
    const mergedPlacement = computed<TourPlacement>(() => step.value?.placement ?? props.placement ?? 'bottom')

    /** 高亮区域 = 目标矩形按 gap.offset 外扩，无目标时为 null */
    const holeRect = computed(() => getHoleRect(targetRect.value, props.gap))

    /**
     * 箭头是否显示：无目标元素（居中展示）时一律不显示，
     * 其余情况步骤级 `arrow` 优先于 Tour 级（对齐 rc-tour）。
     */
    const mergedArrow = computed(() => {
      if (!targetRect.value) return false
      const arrow = step.value?.arrow ?? props.arrow
      return arrow !== false
    })

    const arrowPointAtCenter = computed(() => {
      const arrow = step.value?.arrow ?? props.arrow
      return typeof arrow === 'object' ? arrow.pointAtCenter !== false : true
    })

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

    /** 目标不在视口内时才滚动，避免每次切步都强制滚动页面（对齐 rc-tour） */
    function scrollToTarget() {
      const el = step.value ? getTargetEl(step.value.target) : null
      if (!el) return

      const scrollOptions = step.value?.scrollIntoViewOptions ?? props.scrollIntoViewOptions ?? true
      if (!scrollOptions) return

      const r = el.getBoundingClientRect()
      const inViewport =
        r.top >= 0 &&
        r.left >= 0 &&
        r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        r.right <= (window.innerWidth || document.documentElement.clientWidth)
      if (inViewport) return

      el.scrollIntoView(typeof scrollOptions === 'boolean' ? { block: 'center', behavior: 'smooth' } : scrollOptions)
    }

    function measure() {
      viewport.value = {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight,
      }
      const el = step.value ? getTargetEl(step.value.target) : null
      targetRect.value = getRect(el)
      popoverPos.value = calcPopoverPos(holeRect.value, popoverRef.value, mergedPlacement.value, viewport.value)
    }

    async function updatePos() {
      await nextTick()
      measure()
      // 首帧卡片尺寸可能尚未稳定（字体/图片），再量一次校正
      await nextTick()
      measure()
    }

    // rAF 合帧节流：scroll 走捕获阶段，页面内任意滚动容器都会触发，不节流会高频抖动
    let rafId: number | null = null
    function schedulePos() {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        measure()
      })
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen.value || !props.keyboard) return
      // 输入类元素内的方向键属于文本编辑，不应切换引导步骤
      if (isEditableTarget(e)) return

      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          close()
          break
        case 'ArrowLeft':
          if (currentStep.value > 0) {
            e.preventDefault()
            prev()
          }
          break
        case 'ArrowRight':
          if (currentStep.value < total.value - 1) {
            e.preventDefault()
            next()
          }
          break
      }
    }

    function bindGlobalListeners() {
      window.addEventListener('resize', schedulePos)
      window.addEventListener('scroll', schedulePos, true)
      window.addEventListener('keydown', handleKeyDown)
    }

    function unbindGlobalListeners() {
      window.removeEventListener('resize', schedulePos)
      window.removeEventListener('scroll', schedulePos, true)
      window.removeEventListener('keydown', handleKeyDown)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }

    // 仅在打开期间挂全局监听（对齐 rc-tour），关闭后不留残留监听
    watch(
      isOpen,
      async (open, wasOpen) => {
        if (open) {
          prevActiveEl.value = (document.activeElement as HTMLElement) ?? null
          bindGlobalListeners()
          scrollToTarget()
          await updatePos()
          // 打开后把焦点移入卡片，便于键盘用户直接操作
          popoverRef.value?.focus?.({ preventScroll: true })
        } else {
          unbindGlobalListeners()
          if (wasOpen) {
            prevActiveEl.value?.focus?.({ preventScroll: true })
            prevActiveEl.value = null
          }
        }
      },
      { immediate: true },
    )

    // 切换步骤时重新滚动定位（打开状态才有意义）
    watch(currentStep, async () => {
      if (!isOpen.value) return
      scrollToTarget()
      await updatePos()
    })

    // 目标或方位配置变化时重算，避免动态 steps 场景下位置滞后
    watch([() => step.value?.target, mergedPlacement, () => props.gap], async () => {
      if (isOpen.value) await updatePos()
    })

    onBeforeUnmount(unbindGlobalListeners)

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

    function resolveCloseIcon() {
      if (props.closeIcon === false) return null
      if (props.closeIcon === undefined) return h(CloseOutlined, { class: 'hmfw-icon' })
      if (typeof props.closeIcon === 'function') return props.closeIcon()
      return props.closeIcon
    }

    /**
     * 箭头绝对定位样式：贴靠朝向目标的那一边，沿该边偏移。
     * `pointAtCenter: true`（默认）指向目标中心；`false` 则对齐卡片自身中心。
     */
    function getArrowStyle() {
      const { arrowSide, arrowOffset, arrowOffsetSelf } = popoverPos.value
      if (!arrowSide) return undefined

      const offset = arrowPointAtCenter.value ? arrowOffset : arrowOffsetSelf
      const isVertical = arrowSide === 'top' || arrowSide === 'bottom'
      return {
        [arrowSide]: `${-ARROW_SIZE / 2}px`,
        ...(isVertical ? { left: `${offset}px` } : { top: `${offset}px` }),
      } as Record<string, string>
    }

    return () => {
      if (!isOpen.value || !step.value || !popupContainer.value) return null

      const isPrimary = mergedType.value === 'primary'
      const showMask = mergedMask.value !== false
      const maskConfig = typeof mergedMask.value === 'object' ? mergedMask.value : undefined
      const closeIcon = resolveCloseIcon()
      const { arrowSide } = popoverPos.value

      return h(Teleport, { to: popupContainer.value }, [
        h(
          'div',
          {
            class: cls(`${prefixCls}-root`, props.classNames?.root),
            style: { zIndex: props.zIndex, ...props.styles?.root },
          },
          [
            showMask &&
              h(TourMask, {
                prefixCls,
                maskId,
                hole: holeRect.value,
                // 未显式指定 mask.color 时交由组件级 Token 决定，支持整体换肤
                fill: maskConfig?.color ?? 'var(--hmfw-tour-mask-color)',
                viewport: viewport.value,
                disabledInteraction: props.disabledInteraction,
                maskStyle: { ...maskConfig?.style, ...props.styles?.mask },
                maskClass: props.classNames?.mask,
              }),

            h(
              'div',
              {
                ref: popoverRef,
                class: cls(
                  `${prefixCls}-popover`,
                  {
                    [`${prefixCls}-popover-primary`]: isPrimary,
                    [`${prefixCls}-popover-center`]: popoverPos.value.center,
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
                // 引导卡片语义上是对话框：关联标题与描述，便于屏幕阅读器播报
                role: 'dialog',
                'aria-modal': showMask ? 'true' : undefined,
                'aria-labelledby': step.value.title ? `${idPrefix}-title` : undefined,
                'aria-describedby': step.value.description ? `${idPrefix}-description` : undefined,
                tabindex: -1,
              },
              [
                mergedArrow.value &&
                  arrowSide &&
                  h('div', {
                    class: cls(`${prefixCls}-arrow`, `${prefixCls}-arrow-${arrowSide}`, props.classNames?.arrow),
                    style: { ...getArrowStyle(), ...props.styles?.arrow },
                  }),

                h(TourPanel, {
                  prefixCls,
                  step: step.value,
                  current: currentStep.value,
                  total: total.value,
                  isPrimary,
                  closeIcon,
                  indicatorsRender: props.indicatorsRender,
                  locale: locale.value,
                  idPrefix,
                  panelClassNames: props.classNames,
                  panelStyles: props.styles,
                  onClose: close,
                  onPrev: prev,
                  onNext: next,
                  onGoTo: goTo,
                }),
              ],
            ),
          ],
        ),
      ])
    }
  },
})

export default Tour
