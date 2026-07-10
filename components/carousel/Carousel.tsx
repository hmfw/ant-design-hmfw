import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import type { PropType, VNode, CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { LeftOutlined, RightOutlined } from '@hmfw/icons'
import type {
  CarouselDotPlacement,
  CarouselEffect,
  CarouselProps,
  CarouselRef,
  CarouselClassNames,
  CarouselStyles,
} from './types'

// ============================================================
// Props — as PropType 确保运行时类型与接口严格一致
// ============================================================
const carouselProps = {
  autoplay: { type: Boolean, default: false },
  delay: { type: Number, default: 3000 },
  dots: { type: Boolean, default: true },
  dotPlacement: { type: String as PropType<CarouselDotPlacement>, default: undefined },
  effect: { type: String as PropType<CarouselEffect>, default: 'scrollx' },
  fade: { type: Boolean, default: undefined },
  loop: { type: Boolean, default: true },
  speed: { type: Number, default: 500 },
  easing: { type: String, default: 'ease' },
  initialSlide: { type: Number, default: 0 },
  arrows: { type: Boolean, default: false },
  prevArrow: { type: Object as PropType<VNode>, default: undefined },
  nextArrow: { type: Object as PropType<VNode>, default: undefined },
  waitForAnimate: { type: Boolean, default: false },
  adaptiveHeight: { type: Boolean, default: false },
  slidesPerView: { type: Number, default: 1 },
  slidesPerGroup: { type: Number, default: 1 },
  spaceBetween: { type: Number, default: 0 },
  classNames: { type: Object as PropType<CarouselClassNames>, default: undefined },
  styles: { type: Object as PropType<CarouselStyles>, default: undefined },
} satisfies Record<keyof CarouselProps, any>

// ============================================================
// 模块级常量 — 不依赖组件实例，避免每次渲染重复创建对象
// ============================================================

/**
 * 淡入淡出模式下非激活 slide 的样式。
 * - position: absolute + inset: 0 使所有 slide 叠放在同一位置，实现交叉淡入淡出
 * - translate3d(0,0,0) 强制 GPU 合成层提升，避免 opacity 过渡时的闪烁
 */
const FADE_SLIDE_INACTIVE: CSSProperties = {
  opacity: 0,
  transform: 'translate3d(0, 0, 0)',
  position: 'absolute',
  inset: '0',
}

/**
 * 淡入淡出模式下激活 slide 的样式。
 * - position: relative + inset: auto 使当前 slide 恢复正常流布局
 */
const FADE_SLIDE_ACTIVE: CSSProperties = {
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
  position: 'relative',
  inset: 'auto',
}

/**
 * 安全地对索引进行模运算回绕，正确处理负数。
 * 示例：wrapIndex(-1, 5) → 4，wrapIndex(5, 5) → 0
 * 当 len 为 0 时返回 0 作为兜底。
 */
function wrapIndex(idx: number, len: number): number {
  if (len === 0) return 0
  return ((idx % len) + len) % len
}

export const Carousel = defineComponent({
  name: 'Carousel',
  props: carouselProps,
  emits: {
    beforeChange: (_from: number, _to: number) => true,
    afterChange: (_current: number) => true,
  },
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('carousel')

    // ---- 状态 ----
    const current = ref(props.initialSlide)
    const transitioning = ref(false)
    const listRef = ref<HTMLDivElement>()
    const trackRef = ref<HTMLDivElement>()
    const carouselHeight = ref<number | undefined>(undefined)

    // 非响应式定时器句柄（不需要触发视图更新）
    let timer: ReturnType<typeof setInterval> | null = null
    let transitionEndTimer: ReturnType<typeof setTimeout> | null = null

    // ---- Slides 展平 ----
    function flattenSlides(vnodes: VNode[]): VNode[] {
      return vnodes.flatMap((vnode) => {
        if (Array.isArray(vnode.children)) {
          return flattenSlides(vnode.children as VNode[])
        }
        return [vnode]
      })
    }

    const slides = computed<VNode[]>(() => {
      const defaultSlot = slots.default?.() ?? []
      return flattenSlides(defaultSlot)
    })

    const count = computed<number>(() => slides.value.length)

    // ---- 安全值（防止 props 传入 0 或负数导致除零 / 异常行为） ----
    const safeSlidesPerView = computed(() => Math.max(1, props.slidesPerView))
    const safeSlidesPerGroup = computed(() => Math.max(1, props.slidesPerGroup))

    // ---- 布局 / 效果 ----
    const slideWidthPercent = computed<number>(() => 100 / safeSlidesPerView.value)

    const mergedDotPlacement = computed<CarouselDotPlacement>(() => {
      const placement = props.dotPlacement ?? 'bottom'
      if (placement === 'left') return 'start'
      if (placement === 'right') return 'end'
      return placement as CarouselDotPlacement
    })

    const isVertical = computed<boolean>(() => {
      const placement = mergedDotPlacement.value
      return placement === 'start' || placement === 'end'
    })

    const finalEffect = computed<'scrollx' | 'fade'>(() => {
      if (safeSlidesPerView.value > 1) return 'scrollx'
      if (props.fade) return 'fade'
      return props.effect as 'scrollx' | 'fade'
    })

    const isFade = computed<boolean>(() => finalEffect.value === 'fade')

    const pageCount = computed<number>(() => {
      if (count.value === 0) return 0
      const maxStartIndex = Math.max(0, count.value - safeSlidesPerView.value)
      return Math.floor(maxStartIndex / safeSlidesPerGroup.value) + 1
    })

    const currentPage = computed<number>(() => Math.floor(current.value / safeSlidesPerGroup.value))

    // ---- loop 克隆 ----
    const renderSlides = computed<VNode[]>(() => {
      if (!props.loop || count.value === 0 || isFade.value) {
        return slides.value
      }
      return [...slides.value, ...slides.value, ...slides.value]
    })

    const realIndex = computed<number>(() => {
      if (!props.loop || isFade.value) return current.value
      return current.value + count.value
    })

    // ---- Dots 配置 ----
    const enableDots = computed<boolean>(() => !!props.dots)

    const dotPositionClass = computed<string>(() => {
      const placement = mergedDotPlacement.value
      return placement === 'start' ? 'left' : placement === 'end' ? 'right' : placement
    })

    // ---- Autoplay 配置 ----
    const isAutoplay = computed<boolean>(() => !!props.autoplay)

    // ============================================================
    // 辅助函数
    // ============================================================

    /** 清除过渡结束定时器，并重置为 null */
    function clearTransitionTimer() {
      if (transitionEndTimer !== null) {
        clearTimeout(transitionEndTimer)
        transitionEndTimer = null
      }
    }

    /**
     * 对目标索引进行规范化：
     * - 非 loop：钳制到 [0, maxIndex]
     * - loop + fade：模运算回绕
     * - loop + 非 fade（克隆模式）：保持原值，由克隆机制处理
     */
    function normalizeIndex(index: number): number {
      if (!props.loop) {
        const maxIndex = Math.max(0, count.value - safeSlidesPerView.value)
        return Math.max(0, Math.min(index, maxIndex))
      }
      if (isFade.value) {
        return wrapIndex(index, count.value)
      }
      return index
    }

    /**
     * 过渡动画结束后的回绕与状态清理。
     * 克隆模式下，动画结束后需要无缝跳转到真实 slide 位置；
     * fade 模式下直接回绕索引。
     */
    function handleTransitionEnd(next: number) {
      // loop + 非 fade（克隆模式）：过渡到的是克隆 slide，
      // 动画结束后需无缝跳转到对应的真实 slide
      if (props.loop && !isFade.value) {
        const wrappedIdx = wrapIndex(next, count.value)
        if (wrappedIdx !== next) {
          transitioning.value = false
          nextTick(() => {
            current.value = wrappedIdx
            emit('afterChange', wrappedIdx)
          })
          clearTransitionTimer()
          return
        }
      }

      // loop + fade 模式：直接回绕索引（fade 不使用克隆）
      if (props.loop && isFade.value) {
        current.value = wrapIndex(next, count.value)
      }

      transitioning.value = false
      emit('afterChange', current.value)
      clearTransitionTimer()
    }

    // ---- 导航 ----
    function goTo(index: number, dontAnimate = false) {
      if (count.value === 0) return
      if (!dontAnimate && props.waitForAnimate && transitioning.value) {
        if (import.meta.env.DEV) {
          console.warn('[Carousel] 动画进行中，waitForAnimate 阻止了本次切换，请等待动画完成')
        }
        return
      }

      const next = normalizeIndex(index)
      if (next === current.value) return

      emit('beforeChange', current.value, next)
      clearTransitionTimer()

      if (dontAnimate) {
        transitioning.value = false
        current.value = props.loop ? wrapIndex(next, count.value) : next
        emit('afterChange', current.value)
        return
      }

      transitioning.value = true
      current.value = next
      transitionEndTimer = setTimeout(() => handleTransitionEnd(next), props.speed)
    }

    function goToPage(pageIndex: number, dontAnimate = false) {
      goTo(pageIndex * safeSlidesPerGroup.value, dontAnimate)
    }

    const prev = () => goTo(current.value - safeSlidesPerGroup.value)
    const next = () => goTo(current.value + safeSlidesPerGroup.value)
    const prevPage = () => goToPage(currentPage.value - 1)
    const nextPage = () => goToPage(currentPage.value + 1)

    // ---- Autoplay ----
    function startAutoplay() {
      if (!isAutoplay.value || count.value <= safeSlidesPerView.value) return
      stopAutoplay()
      timer = setInterval(() => goTo(current.value + safeSlidesPerGroup.value), props.delay)
    }

    function stopAutoplay() {
      if (timer !== null) {
        clearInterval(timer)
        timer = null
      }
      clearTransitionTimer()
    }

    // ---- 自适应高度 ----
    function updateAdaptiveHeight() {
      if (!props.adaptiveHeight || isVertical.value || !trackRef.value) {
        carouselHeight.value = undefined
        return
      }

      nextTick(() => {
        const track = trackRef.value
        if (!track) return

        const slideElements = track.querySelectorAll(`.${prefixCls}-slide`)
        const currentSlide = slideElements[current.value] as HTMLElement | undefined
        if (currentSlide) {
          carouselHeight.value = currentSlide.offsetHeight
        }
      })
    }

    // ---- 生命周期 ----
    onMounted(() => {
      // 处理异步 slot 场景：初始化时 count 可能为 0（slot 尚未解析），
      // mounted 后 count 已更新，需重新校准 initialSlide
      if (count.value > 0 && props.initialSlide > 0) {
        current.value = props.loop
          ? wrapIndex(props.initialSlide, count.value)
          : Math.min(props.initialSlide, count.value - 1)
      }
      updateAdaptiveHeight()
      startAutoplay()

      // 开发环境：非法值警告
      if (import.meta.env.DEV) {
        if (props.slidesPerView < 1) {
          console.warn(`[Carousel] slidesPerView 不应为 ${props.slidesPerView}，已自动修正为 1`)
        }
        if (props.slidesPerGroup < 1) {
          console.warn(`[Carousel] slidesPerGroup 不应为 ${props.slidesPerGroup}，已自动修正为 1`)
        }
      }
    })

    onBeforeUnmount(() => {
      stopAutoplay()
      clearTransitionTimer() // 兜底：非 autoplay 场景下组件卸载时清理过渡定时器
    })

    // autoplay prop 动态切换 — 仅在启用/禁用切换时触发
    watch(
      () => props.autoplay,
      (enabled) => {
        enabled ? startAutoplay() : stopAutoplay()
      },
    )

    // current 或 adaptiveHeight 变化时更新高度
    watch(current, updateAdaptiveHeight)
    watch(() => props.adaptiveHeight, updateAdaptiveHeight)

    // ---- 暴露方法 ----
    const exposed: CarouselRef = { goTo, next, prev, goToPage, nextPage, prevPage }
    expose(exposed)

    // ---- Render 预计算 ----
    const transitionDuration = computed<string>(() => `${props.speed / 1000}s`)

    /** 渲染单个方向箭头，消除 prev/next 的结构重复 */
    function renderArrow(direction: 'prev' | 'next'): VNode {
      const isPrev = direction === 'prev'
      const customArrow = isPrev ? props.prevArrow : props.nextArrow
      if (customArrow) return customArrow

      // 非无限循环时，到达首/尾边界，箭头置灰
      const atBoundary = isPrev
        ? !props.loop && current.value === 0
        : !props.loop && current.value >= count.value - safeSlidesPerView.value

      const IconComp = isPrev ? LeftOutlined : RightOutlined

      const arrowCls = cls(
        `${prefixCls}-arrow`,
        `${prefixCls}-arrow-${isPrev ? 'left' : 'right'}`,
        props.classNames?.arrow,
        isPrev ? props.classNames?.arrowLeft : props.classNames?.arrowRight,
      )

      const arrowStyle = {
        ...props.styles?.arrow,
        ...(isPrev ? props.styles?.arrowLeft : props.styles?.arrowRight),
      }

      return (
        <button
          class={arrowCls}
          style={arrowStyle}
          type="button"
          onClick={isPrev ? prevPage : nextPage}
          disabled={atBoundary || (props.waitForAnimate && transitioning.value)}
          aria-label={isPrev ? '上一页' : '下一页'}
        >
          <IconComp />
        </button>
      )
    }

    // ============================================================
    // Render helpers — 拆分 render 避免单一函数过长
    // ============================================================

    function renderSlide(slide: VNode, i: number) {
      const isCloneMode = props.loop && !isFade.value
      const slideIndex = isCloneMode ? wrapIndex(i - count.value, count.value) : i
      const isActive = slideIndex === current.value

      // key 策略：
      // clone 模式 — `s-{原始索引}-{位置}` 确保 3 组克隆各自独立
      // 非 clone 模式 — 使用位置 i（Carousel 场景下列表不重排序，
      //   index key 不会导致 DOM 错位，且性能优于 UUID）
      const key = isCloneMode ? `s-${slideIndex}-${i}` : i

      const slideCls = cls(
        `${prefixCls}-slide`,
        props.classNames?.slide,
        { [`${prefixCls}-slide-active`]: isActive },
        isActive && props.classNames?.slideActive,
      )

      const duration = transitionDuration.value

      const slideStyle: CSSProperties = {
        ...(isFade.value
          ? {
              ...(isActive ? FADE_SLIDE_ACTIVE : FADE_SLIDE_INACTIVE),
              transition: `opacity ${duration} ${props.easing}`,
            }
          : {
              flex: `0 0 ${slideWidthPercent.value}%`,
              width: `${slideWidthPercent.value}%`,
            }),
        // content-visibility: auto 跳过不可见 slide 的布局/绘制计算，
        // 显著提升大量 slide 的渲染性能。
        // 自适应高度模式下关闭，因为需要获取所有 slide 的实际高度信息。
        ...(!props.adaptiveHeight ? { contentVisibility: 'auto' } : {}),
        ...props.styles?.slide,
        ...(isActive ? props.styles?.slideActive : undefined),
      }

      return (
        <div
          key={key}
          class={slideCls}
          style={slideStyle}
          role="group"
          aria-roledescription="slide"
          aria-label={`${slideIndex + 1} / ${count.value}`}
          aria-hidden={!isActive}
        >
          {slide}
        </div>
      )
    }

    function renderTrack() {
      // track transform — 仅 scrollx 模式需要
      let transform = ''
      if (!isFade.value) {
        const axis = isVertical.value ? 'Y' : 'X'
        const offset = realIndex.value * slideWidthPercent.value
        const gapCompensation = props.spaceBetween > 0 ? ` - ${realIndex.value * props.spaceBetween}px` : ''
        transform = `translate${axis}(calc(-${offset}%${gapCompensation}))`
      }

      const duration = transitionDuration.value
      const easing = props.easing
      const animating = transitioning.value

      const listStyle: CSSProperties = {
        ...(props.adaptiveHeight && carouselHeight.value !== undefined
          ? { height: `${carouselHeight.value}px`, transition: animating ? `height ${duration} ${easing}` : 'none' }
          : {}),
        ...props.styles?.list,
      }

      const trackStyle: CSSProperties = {
        ...(props.spaceBetween > 0 && !isFade.value ? { gap: `${props.spaceBetween}px` } : {}),
        ...(!isFade.value ? { transform, transition: animating ? `transform ${duration} ${easing}` : 'none' } : {}),
        ...(props.adaptiveHeight ? { alignItems: 'flex-start' } : {}),
        ...props.styles?.track,
      }

      return (
        <div ref={listRef} class={cls(`${prefixCls}-list`, props.classNames?.list)} style={listStyle}>
          <div ref={trackRef} class={cls(`${prefixCls}-track`, props.classNames?.track)} style={trackStyle}>
            {renderSlides.value.map(renderSlide)}
          </div>
        </div>
      )
    }

    function renderDots() {
      if (!enableDots.value || pageCount.value <= 1) return null

      const dotsCls = cls(`${prefixCls}-dots`, `${prefixCls}-dots-${dotPositionClass.value}`, props.classNames?.dots, {
        [`${prefixCls}-dots-disabled`]: props.waitForAnimate && transitioning.value,
      })

      const dotNodes = Array.from({ length: pageCount.value }).map((_, pageIndex) => {
        const dotActive = pageIndex === currentPage.value
        const dotCls = cls(
          props.classNames?.dot,
          { [`${prefixCls}-dot-active`]: dotActive },
          dotActive && props.classNames?.dotActive,
        )

        const dotStyle = {
          ...props.styles?.dot,
          ...(dotActive ? props.styles?.dotActive : undefined),
        }
        return (
          <li key={pageIndex} class={dotCls} style={dotStyle} onClick={() => goToPage(pageIndex)}>
            <button aria-label={`跳转到第 ${pageIndex + 1} 页`} />
          </li>
        )
      })

      return (
        <ul class={dotsCls} style={props.styles?.dots}>
          {dotNodes}
        </ul>
      )
    }

    // ============================================================
    // Render
    // ============================================================
    return () => {
      if (count.value === 0) {
        return <div class={cls(prefixCls, props.classNames?.root)} style={props.styles?.root} />
      }

      const hasArrows = props.arrows && count.value > safeSlidesPerView.value
      const carouselCls = cls(prefixCls, props.classNames?.root, {
        [`${prefixCls}-vertical`]: isVertical.value,
        [`${prefixCls}-fade`]: isFade.value,
      })

      return (
        <div
          class={carouselCls}
          style={{ ...props.styles?.root }}
          role="region"
          aria-roledescription="carousel"
          aria-label="走马灯"
        >
          {renderTrack()}
          {hasArrows && (
            <>
              {renderArrow('prev')}
              {renderArrow('next')}
            </>
          )}
          {renderDots()}
        </div>
      )
    }
  },
})
