import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Button } from '../button'
import { LeftOutlined, RightOutlined } from '../icon'
import type { CarouselDotPlacement, CarouselRef } from './types'

export const Carousel = defineComponent({
  name: 'Carousel',
  props: {
    autoplay: {
      type: [Boolean, Object],
      default: false,
    },
    autoplaySpeed: { type: Number, default: 3000 },
    dots: {
      type: [Boolean, Object],
      default: true,
    },
    dotPosition: String,
    dotPlacement: String,
    effect: { type: String, default: 'scrollx' },
    fade: Boolean,
    infinite: { type: Boolean, default: true },
    speed: { type: Number, default: 500 },
    easing: { type: String, default: 'ease' },
    initialSlide: { type: Number, default: 0 },
    arrows: { type: Boolean, default: false },
    prevArrow: Object,
    nextArrow: Object,
    waitForAnimate: { type: Boolean, default: false },
    adaptiveHeight: { type: Boolean, default: false },
    rootClassName: String,
    classNames: Object,
    styles: Object,
  },
  emits: ['beforeChange', 'afterChange'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('carousel')
    const current = ref(props.initialSlide)
    const transitioning = ref(false)
    const listRef = ref<HTMLDivElement>()
    const trackRef = ref<HTMLDivElement>()
    const carouselHeight = ref<number | undefined>(undefined)
    let timer: ReturnType<typeof setInterval> | null = null
    let transitionEndTimer: ReturnType<typeof setTimeout> | null = null

    const slides = computed(() => {
      const defaultSlot = slots.default?.() ?? []
      return defaultSlot.flatMap((vnode) => {
        if (Array.isArray(vnode.children)) return vnode.children as typeof defaultSlot
        return [vnode]
      })
    })

    const count = computed(() => slides.value.length)

    // Merge dotPosition/dotPlacement (dotPlacement takes priority, map left/right to start/end)
    const mergedDotPlacement = computed(() => {
      const placement = props.dotPlacement ?? props.dotPosition ?? 'bottom'
      if (placement === 'left') return 'start'
      if (placement === 'right') return 'end'
      return placement as CarouselDotPlacement
    })

    // Determine if vertical (when dots at start/end)
    const isVertical = computed(() => {
      const p = mergedDotPlacement.value
      return p === 'start' || p === 'end'
    })

    // Determine final effect (fade prop takes priority)
    const finalEffect = computed(() => {
      if (props.fade) return 'fade'
      return props.effect
    })

    const isFade = computed(() => finalEffect.value === 'fade')

    // Dots config
    const enableDots = computed(() => !!props.dots)
    const dotsClassName = computed(() => {
      if (typeof props.dots === 'object' && props.dots.className) {
        return props.dots.className
      }
      return ''
    })

    // Autoplay config
    const isAutoplay = computed(() => !!props.autoplay)
    const showDotDuration = computed(() => {
      if (typeof props.autoplay === 'object' && props.autoplay.dotDuration) {
        return true
      }
      return false
    })

    // 更新自适应高度
    function updateAdaptiveHeight() {
      if (!props.adaptiveHeight || isVertical.value || !trackRef.value) {
        carouselHeight.value = undefined
        return
      }

      nextTick(() => {
        if (!trackRef.value) return
        const slides = trackRef.value.querySelectorAll(`.${prefixCls}-slide`)
        const currentSlide = slides[current.value] as HTMLElement | undefined
        if (currentSlide) {
          carouselHeight.value = currentSlide.offsetHeight
        }
      })
    }

    function goTo(index: number, dontAnimate = false) {
      if (count.value === 0) return
      if (!dontAnimate && props.waitForAnimate && transitioning.value) return

      let next = index
      if (props.infinite) {
        next = ((index % count.value) + count.value) % count.value
      } else {
        next = Math.max(0, Math.min(index, count.value - 1))
      }
      if (next === current.value) return

      emit('beforeChange', current.value, next)

      if (dontAnimate) {
        current.value = next
        emit('afterChange', next)
      } else {
        // 清除旧的定时器
        if (transitionEndTimer) {
          clearTimeout(transitionEndTimer)
          transitionEndTimer = null
        }

        // 使用 nextTick 确保状态更新后再开始动画
        transitioning.value = true
        current.value = next

        // 使用定时器触发 afterChange 事件
        transitionEndTimer = setTimeout(() => {
          transitioning.value = false
          emit('afterChange', next)
          transitionEndTimer = null
        }, props.speed)
      }
    }

    const prev = () => goTo(current.value - 1)
    const next = () => goTo(current.value + 1)

    function startAutoplay() {
      if (!isAutoplay.value || count.value <= 1) return
      timer = setInterval(() => goTo(current.value + 1), props.autoplaySpeed)
    }

    function stopAutoplay() {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
      if (transitionEndTimer) {
        clearTimeout(transitionEndTimer)
        transitionEndTimer = null
      }
    }

    // Initialize current index on mount
    onMounted(() => {
      if (count.value > 0 && props.initialSlide > 0) {
        const init = props.infinite ? props.initialSlide % count.value : Math.min(props.initialSlide, count.value - 1)
        current.value = init
      }
      updateAdaptiveHeight()
      startAutoplay()
    })

    onBeforeUnmount(stopAutoplay)

    watch(
      () => props.autoplay,
      (v) => {
        v ? startAutoplay() : stopAutoplay()
      },
    )

    // 监听 current 变化更新高度
    watch(current, () => {
      updateAdaptiveHeight()
    })

    // 监听 adaptiveHeight 开关变化
    watch(
      () => props.adaptiveHeight,
      () => {
        updateAdaptiveHeight()
      },
    )

    // Expose ref methods
    expose({
      goTo,
      next,
      prev,
    } as CarouselRef)

    // Map dotPlacement to CSS position class
    const dotPositionClass = computed(() => {
      const p = mergedDotPlacement.value
      // Map start/end to left/right for CSS
      if (p === 'start') return 'left'
      if (p === 'end') return 'right'
      return p
    })

    return () => {
      if (count.value === 0) {
        return <div class={cls(prefixCls, props.rootClassName, props.classNames?.root)} style={props.styles?.root} />
      }

      const speedInSec = `${props.speed / 1000}s`
      const dotDurationStyle = showDotDuration.value ? { '--carousel-dot-duration': `${props.autoplaySpeed}ms` } : {}

      return (
        <div
          class={cls(prefixCls, props.rootClassName, props.classNames?.root, {
            [`${prefixCls}-vertical`]: isVertical.value,
            [`${prefixCls}-fade`]: isFade.value,
          })}
          style={{ ...dotDurationStyle, ...props.styles?.root }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Carousel"
        >
          <div
            ref={listRef}
            class={cls(`${prefixCls}-list`, props.classNames?.list)}
            style={{
              ...(props.adaptiveHeight && carouselHeight.value !== undefined
                ? {
                    height: `${carouselHeight.value}px`,
                    transition: transitioning.value ? `height ${speedInSec} ${props.easing}` : 'none',
                  }
                : {}),
              ...props.styles?.list,
            }}
          >
            <div
              ref={trackRef}
              class={cls(`${prefixCls}-track`, props.classNames?.track)}
              style={{
                ...(isFade.value
                  ? {}
                  : {
                      transform: isVertical.value
                        ? `translateY(-${current.value * 100}%)`
                        : `translateX(-${current.value * 100}%)`,
                      transition: transitioning.value ? `transform ${speedInSec} ${props.easing}` : 'none',
                    }),
                ...props.styles?.track,
              }}
            >
              {slides.value.map((slide, i) => {
                const isActive = i === current.value
                return (
                  <div
                    key={i}
                    class={cls(
                      `${prefixCls}-slide`,
                      props.classNames?.slide,
                      {
                        [`${prefixCls}-slide-active`]: isActive,
                      },
                      isActive && props.classNames?.slideActive,
                    )}
                    style={{
                      ...(isFade.value
                        ? {
                            opacity: isActive ? 1 : 0,
                            transform: 'translate3d(0, 0, 0)', // GPU 加速
                            transition: `opacity ${speedInSec} ${props.easing}`,
                            position: isActive ? 'relative' : 'absolute',
                            inset: isActive ? 'auto' : '0',
                            contentVisibility: isActive ? 'auto' : 'auto',
                          }
                        : {
                            contentVisibility: isActive ? 'auto' : 'auto',
                          }),
                      ...props.styles?.slide,
                      ...(isActive && props.styles?.slideActive),
                    }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} / ${count.value}`}
                    aria-hidden={!isActive}
                  >
                    {slide}
                  </div>
                )
              })}
            </div>
          </div>

          {props.arrows && count.value > 1 && (
            <>
              {props.prevArrow ?? (
                <Button
                  class={cls(
                    `${prefixCls}-arrow`,
                    `${prefixCls}-arrow-left`,
                    props.classNames?.arrow,
                    props.classNames?.arrowLeft,
                  )}
                  style={{ ...props.styles?.arrow, ...props.styles?.arrowLeft }}
                  type="text"
                  icon={LeftOutlined}
                  onClick={prev}
                  disabled={props.waitForAnimate && transitioning.value}
                  aria-label="Previous slide"
                />
              )}
              {props.nextArrow ?? (
                <Button
                  class={cls(
                    `${prefixCls}-arrow`,
                    `${prefixCls}-arrow-right`,
                    props.classNames?.arrow,
                    props.classNames?.arrowRight,
                  )}
                  style={{ ...props.styles?.arrow, ...props.styles?.arrowRight }}
                  type="text"
                  icon={RightOutlined}
                  onClick={next}
                  disabled={props.waitForAnimate && transitioning.value}
                  aria-label="Next slide"
                />
              )}
            </>
          )}

          {enableDots.value && count.value > 1 && (
            <ul
              class={cls(
                `${prefixCls}-dots`,
                `${prefixCls}-dots-${dotPositionClass.value}`,
                dotsClassName.value,
                props.classNames?.dots,
                {
                  [`${prefixCls}-dots-progress`]: showDotDuration.value,
                  [`${prefixCls}-dots-disabled`]: props.waitForAnimate && transitioning.value,
                },
              )}
              style={props.styles?.dots}
            >
              {slides.value.map((_, i) => {
                const isActive = i === current.value
                return (
                  <li
                    key={i}
                    class={cls(
                      props.classNames?.dot,
                      { [`${prefixCls}-dot-active`]: isActive },
                      isActive && props.classNames?.dotActive,
                    )}
                    style={{ ...props.styles?.dot, ...(isActive && props.styles?.dotActive) }}
                    onClick={() => goTo(i)}
                  >
                    <button aria-label={`Go to slide ${i + 1}`} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )
    }
  },
})
