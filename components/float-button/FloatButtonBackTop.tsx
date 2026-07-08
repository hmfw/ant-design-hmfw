import { defineComponent, ref, onMounted, onBeforeUnmount, Transition, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { VerticalAlignTopOutlined } from '@hmfw/icons'
import type { TooltipProps } from '../tooltip/types'
import type { FloatButtonType, FloatButtonShape } from './types'
import { type IconLike } from './shared'
import { FloatButton } from './FloatButton'

export const FloatButtonBackTop = defineComponent({
  name: 'FloatButtonBackTop',
  props: {
    visibilityHeight: { type: Number, default: 400 },
    target: Function as PropType<() => HTMLElement | Window | Document>,
    duration: { type: Number, default: 450 },
    icon: [Function, String] as PropType<IconLike>,
    type: { type: String as PropType<FloatButtonType>, default: 'default' },
    shape: { type: String as PropType<FloatButtonShape>, default: 'circle' },
    tooltip: [String, Object] as PropType<string | TooltipProps>,
    content: String,
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('float-btn')
    const visible = ref(false)
    // Captured at mount so cleanup removes the listener from the exact same
    // node — re-resolving props.target() on unmount can yield null (e.g. the
    // container ref is cleared during route navigation) and crash.
    let listenTarget: HTMLElement | Window | Document | null = null

    const getTarget = (): HTMLElement | Window | Document => (props.target ? props.target() : window)

    const getScrollTop = (el: HTMLElement | Window | Document) => {
      if (el === window || el === document) {
        return document.documentElement.scrollTop || document.body.scrollTop
      }
      return (el as HTMLElement).scrollTop
    }

    const handleScroll = () => {
      visible.value = getScrollTop(getTarget()) >= props.visibilityHeight
    }

    const scrollToTop = (e: MouseEvent) => {
      const target = getTarget()
      const startTime = Date.now()
      const startScrollTop = getScrollTop(target)
      const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)

      const frame = () => {
        const progress = Math.min((Date.now() - startTime) / props.duration, 1)
        const scrollTop = startScrollTop * (1 - easeInOutCubic(progress))
        if (target === window || target === document) {
          window.scrollTo(0, scrollTop)
        } else {
          ;(target as HTMLElement).scrollTop = scrollTop
        }
        if (progress < 1) requestAnimationFrame(frame)
      }

      requestAnimationFrame(frame)
      emit('click', e)
    }

    // 注意：监听目标仅在挂载时解析一次，运行时修改 target prop 不会迁移监听器
    // （与 AntD 行为一致，target 变更属重挂载场景）。
    onMounted(() => {
      const target = getTarget()
      listenTarget = target === document ? window : target
      listenTarget.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onBeforeUnmount(() => {
      listenTarget?.removeEventListener('scroll', handleScroll)
      listenTarget = null
    })

    return () => {
      return (
        <Transition name={`${prefixCls}-fade`}>
          {visible.value && (
            <FloatButton
              type={props.type}
              shape={props.shape}
              icon={props.icon ?? VerticalAlignTopOutlined}
              tooltip={props.tooltip}
              content={props.content}
              class={`${prefixCls}-back-top`}
              onClick={scrollToTop}
            >
              {slots.icon ? { icon: slots.icon } : undefined}
            </FloatButton>
          )}
        </Transition>
      )
    }
  },
})
