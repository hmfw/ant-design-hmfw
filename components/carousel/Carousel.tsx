import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CarouselEffect, CarouselDotPosition } from './types'

export const Carousel = defineComponent({
  name: 'Carousel',
  props: {
    autoplay: { type: Boolean, default: false },
    autoplaySpeed: { type: Number, default: 3000 },
    dots: { type: Boolean, default: true },
    dotPosition: { type: String as PropType<CarouselDotPosition>, default: 'bottom' },
    effect: { type: String as PropType<CarouselEffect>, default: 'scrollx' },
    infinite: { type: Boolean, default: true },
  },
  emits: ['beforeChange', 'afterChange'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('carousel')
    const current = ref(0)
    const transitioning = ref(false)
    let timer: ReturnType<typeof setInterval> | null = null

    const slides = computed(() => {
      const defaultSlot = slots.default?.() ?? []
      // flatten fragment children
      return defaultSlot.flatMap((vnode) => {
        if (Array.isArray(vnode.children)) return vnode.children as typeof defaultSlot
        return [vnode]
      })
    })

    const count = computed(() => slides.value.length)

    function goTo(index: number) {
      if (count.value === 0 || transitioning.value) return
      let next = index
      if (props.infinite) {
        next = ((index % count.value) + count.value) % count.value
      } else {
        next = Math.max(0, Math.min(index, count.value - 1))
      }
      if (next === current.value) return
      emit('beforeChange', current.value, next)
      transitioning.value = true
      current.value = next
      setTimeout(() => {
        transitioning.value = false
        emit('afterChange', next)
      }, 400)
    }

    const prev = () => goTo(current.value - 1)
    const next = () => goTo(current.value + 1)

    function startAutoplay() {
      if (!props.autoplay || count.value <= 1) return
      timer = setInterval(() => goTo(current.value + 1), props.autoplaySpeed)
    }

    function stopAutoplay() {
      if (timer) { clearInterval(timer); timer = null }
    }

    onMounted(startAutoplay)
    onBeforeUnmount(stopAutoplay)

    watch(() => props.autoplay, (v) => { v ? startAutoplay() : stopAutoplay() })

    const isVertical = computed(() => props.dotPosition === 'left' || props.dotPosition === 'right')

    return () => {
      if (count.value === 0) return <div class={prefixCls} />

      return (
        <div class={cls(prefixCls, {
          [`${prefixCls}-vertical`]: isVertical.value,
          [`${prefixCls}-fade`]: props.effect === 'fade',
        })}>
          <div class={`${prefixCls}-list`}>
            <div
              class={`${prefixCls}-track`}
              style={props.effect === 'scrollx' ? {
                transform: `translateX(-${current.value * 100}%)`,
                transition: transitioning.value ? 'transform 0.4s ease' : 'none',
              } : {}}
            >
              {slides.value.map((slide, i) => (
                <div
                  key={i}
                  class={cls(`${prefixCls}-slide`, {
                    [`${prefixCls}-slide-active`]: i === current.value,
                  })}
                  style={props.effect === 'fade' ? {
                    opacity: i === current.value ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    position: i === current.value ? 'relative' : 'absolute',
                    inset: i === current.value ? 'auto' : '0',
                  } : {}}
                >
                  {slide}
                </div>
              ))}
            </div>
          </div>

          {count.value > 1 && (
            <>
              <button class={cls(`${prefixCls}-arrow`, `${prefixCls}-arrow-left`)} onClick={prev}>‹</button>
              <button class={cls(`${prefixCls}-arrow`, `${prefixCls}-arrow-right`)} onClick={next}>›</button>
            </>
          )}

          {props.dots && count.value > 1 && (
            <ul class={cls(`${prefixCls}-dots`, `${prefixCls}-dots-${props.dotPosition}`)}>
              {slides.value.map((_, i) => (
                <li
                  key={i}
                  class={cls({ [`${prefixCls}-dot-active`]: i === current.value })}
                  onClick={() => goTo(i)}
                >
                  <button />
                </li>
              ))}
            </ul>
          )}
        </div>
      )
    }
  },
})
