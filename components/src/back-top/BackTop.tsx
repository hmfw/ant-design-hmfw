import { defineComponent, ref, onMounted, onBeforeUnmount, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'

export const BackTop = defineComponent({
  name: 'BackTop',
  props: {
    visibilityHeight: { type: Number, default: 400 },
    target: Function as PropType<() => HTMLElement | Window>,
    duration: { type: Number, default: 450 },
    right: { type: Number, default: 100 },
    bottom: { type: Number, default: 50 },
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('back-top')
    const visible = ref(false)

    const getTarget = () => {
      if (props.target) return props.target()
      return window
    }

    const handleScroll = () => {
      const target = getTarget()
      const scrollTop = target === window
        ? document.documentElement.scrollTop || document.body.scrollTop
        : (target as HTMLElement).scrollTop
      visible.value = scrollTop >= props.visibilityHeight
    }

    const scrollToTop = () => {
      const target = getTarget()
      const startTime = Date.now()
      const startScrollTop = target === window
        ? document.documentElement.scrollTop || document.body.scrollTop
        : (target as HTMLElement).scrollTop

      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

      const scroll = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / props.duration, 1)
        const eased = easeInOutCubic(progress)
        const scrollTop = startScrollTop * (1 - eased)

        if (target === window) {
          window.scrollTo(0, scrollTop)
        } else {
          (target as HTMLElement).scrollTop = scrollTop
        }

        if (progress < 1) requestAnimationFrame(scroll)
      }

      requestAnimationFrame(scroll)
      emit('click')
    }

    onMounted(() => {
      const target = getTarget()
      target.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onBeforeUnmount(() => {
      const target = getTarget()
      target.removeEventListener('scroll', handleScroll)
    })

    return () => {
      if (!visible.value) return null

      return (
        <div
          class={prefixCls}
          style={{ right: `${props.right}px`, bottom: `${props.bottom}px` }}
          onClick={scrollToTop}
        >
          {slots.default?.() ?? (
            <div class={`${prefixCls}-content`}>↑</div>
          )}
        </div>
      )
    }
  },
})
