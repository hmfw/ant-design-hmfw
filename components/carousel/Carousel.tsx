import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Button } from '../button'
import { LeftOutlined, RightOutlined } from '@hmfw/icons'
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
    slidesToShow: { type: Number, default: 1 },
    slidesToScroll: { type: Number, default: 1 },
    centerMode: { type: Boolean, default: false },
    centerPadding: { type: String, default: '50px' },
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

    // 用于 infinite 模式的实际渲染 slides（包含克隆）
    const renderSlides = computed(() => {
      if (!props.infinite || count.value === 0 || isFade.value) {
        // 非 infinite 或 fade 模式时不需要克隆
        return slides.value
      }

      // infinite 模式：克隆整个数组以支持无缝循环
      // 渲染顺序：[1,2,3...n] + [1,2,3...n] + [1,2,3...n]
      // 总共 3 组，初始定位在中间组
      const clonedStart = slides.value.slice(0)
      const clonedEnd = slides.value.slice(0)

      return [...clonedStart, ...slides.value, ...clonedEnd]
    })

    // 实际的 slide 索引（infinite 模式下需要偏移）
    const realIndex = computed(() => {
      if (!props.infinite || isFade.value) {
        return current.value
      }
      // infinite 模式下，偏移量是 count（因为前面克隆了整个数组）
      return current.value + count.value
    })

    // 每个 slide 的宽度百分比
    const slideWidthPercent = computed(() => 100 / props.slidesToShow)

    // 总页数
    const pageCount = computed(() => {
      if (count.value === 0) return 0
      const maxStartIndex = Math.max(0, count.value - props.slidesToShow)
      return Math.floor(maxStartIndex / props.slidesToScroll) + 1
    })

    // 当前页索引
    const currentPage = computed(() => {
      return Math.floor(current.value / props.slidesToScroll)
    })

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
      // 多项显示时强制使用 scrollx
      if (props.slidesToShow > 1) return 'scrollx'
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

      if (!props.infinite) {
        // 非 infinite 模式：限制在有效范围内
        const maxIndex = Math.max(0, count.value - props.slidesToShow)
        next = Math.max(0, Math.min(index, maxIndex))
      } else if (!isFade.value) {
        // infinite 模式（单项或多项）：不限制 next，让它可以超出范围
        // 动画到克隆区域后，在 setTimeout 中瞬间重置
      } else {
        // infinite + fade 模式：提前取模（因为 fade 没有克隆节点）
        next = ((index % count.value) + count.value) % count.value
      }

      if (next === current.value) return

      emit('beforeChange', current.value, next)

      if (dontAnimate) {
        // 不使用动画时，直接取模
        if (props.infinite && !isFade.value) {
          // infinite 模式（有克隆节点）：需要取模
          current.value = ((next % count.value) + count.value) % count.value
        } else if (props.infinite && isFade.value) {
          // fade 模式：也需要取模
          current.value = ((next % count.value) + count.value) % count.value
        } else {
          current.value = next
        }
        emit('afterChange', current.value)
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
          // infinite 模式下，处理循环跳转
          if (props.infinite && !isFade.value) {
            // 使用取模实现循环
            const newIndex = ((next % count.value) + count.value) % count.value
            if (newIndex !== next) {
              // 先禁用过渡
              transitioning.value = false
              // 使用 nextTick 确保 DOM 更新后再重置位置
              nextTick(() => {
                current.value = newIndex
                emit('afterChange', current.value)
              })
              transitionEndTimer = null
              return
            }
          }

          // 没有循环重置的情况（或 fade 模式）
          if (props.infinite && isFade.value) {
            // fade 模式使用取模但不需要 nextTick
            current.value = ((next % count.value) + count.value) % count.value
          }

          transitioning.value = false
          emit('afterChange', current.value)
          transitionEndTimer = null
        }, props.speed)
      }
    }

    function goToPage(pageIndex: number, dontAnimate = false) {
      const slideIndex = pageIndex * props.slidesToScroll
      goTo(slideIndex, dontAnimate)
    }

    const prev = () => goTo(current.value - props.slidesToScroll)
    const next = () => goTo(current.value + props.slidesToScroll)

    const prevPage = () => goToPage(currentPage.value - 1)
    const nextPage = () => goToPage(currentPage.value + 1)

    function startAutoplay() {
      if (!isAutoplay.value || count.value <= props.slidesToShow) return
      timer = setInterval(() => goTo(current.value + props.slidesToScroll), props.autoplaySpeed)
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
      goToPage,
      nextPage,
      prevPage,
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
              ...(props.centerMode ? { padding: `0 ${props.centerPadding}` } : {}),
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
                        ? `translateY(-${realIndex.value * slideWidthPercent.value}%)`
                        : `translateX(-${realIndex.value * slideWidthPercent.value}%)`,
                      transition: transitioning.value ? `transform ${speedInSec} ${props.easing}` : 'none',
                    }),
                ...props.styles?.track,
              }}
            >
              {renderSlides.value.map((slide, i) => {
                // 计算真实的 slide 索引（去掉克隆的偏移）
                let slideIndex = i
                const isCloneMode = props.infinite && !isFade.value

                if (isCloneMode) {
                  // 克隆了整个数组，所以偏移量是 count
                  slideIndex = i - count.value
                  // 使用取模映射到原始索引
                  slideIndex = ((slideIndex % count.value) + count.value) % count.value
                }

                const isActive = slideIndex === current.value
                return (
                  <div
                    key={isCloneMode ? `slide-${slideIndex}-${i}` : i}
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
                            flex: `0 0 ${slideWidthPercent.value}%`,
                            width: `${slideWidthPercent.value}%`,
                            contentVisibility: isActive ? 'auto' : 'auto',
                          }),
                      ...props.styles?.slide,
                      ...(isActive && props.styles?.slideActive),
                    }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${slideIndex + 1} / ${count.value}`}
                    aria-hidden={!isActive}
                  >
                    {slide}
                  </div>
                )
              })}
            </div>
          </div>

          {props.arrows && count.value > props.slidesToShow && (
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
                  onClick={prevPage}
                  disabled={props.waitForAnimate && transitioning.value}
                  aria-label="Previous page"
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
                  onClick={nextPage}
                  disabled={props.waitForAnimate && transitioning.value}
                  aria-label="Next page"
                />
              )}
            </>
          )}

          {enableDots.value && pageCount.value > 1 && (
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
              {Array.from({ length: pageCount.value }).map((_, pageIndex) => {
                const isActive = pageIndex === currentPage.value
                return (
                  <li
                    key={pageIndex}
                    class={cls(
                      props.classNames?.dot,
                      { [`${prefixCls}-dot-active`]: isActive },
                      isActive && props.classNames?.dotActive,
                    )}
                    style={{ ...props.styles?.dot, ...(isActive && props.styles?.dotActive) }}
                    onClick={() => goToPage(pageIndex)}
                  >
                    <button aria-label={`Go to page ${pageIndex + 1}`} />
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
