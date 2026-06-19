import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  Transition,
  type PropType,
  type CSSProperties,
} from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { UpOutlined } from '../icon/icons'
import type { BackTopClassNames, BackTopStyles } from './types'

// Throttle by requestAnimationFrame
function throttleByAnimationFrame<T extends (...args: any[]) => void>(fn: T) {
  let rafId: number | null = null
  const throttled = function (this: any, ...args: Parameters<T>) {
    if (rafId !== null) return
    rafId = requestAnimationFrame(() => {
      fn.apply(this, args)
      rafId = null
    })
  }
  throttled.cancel = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }
  return throttled
}

// Get scroll position
function getScroll(target: HTMLElement | Window | Document | null): number {
  if (typeof window === 'undefined') return 0
  if (!target) return 0

  if (target === window || (target as any).window === target) {
    return (target as Window).pageYOffset
  }
  if (target instanceof Document) {
    return target.documentElement.scrollTop
  }
  if (target instanceof HTMLElement) {
    return target.scrollTop
  }
  return 0
}

// Easing function: easeInOutCubic
function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return (cc / 2) * t * t * t + b
  }
  t -= 2
  return (cc / 2) * (t * t * t + 2) + b
}

// Scroll to target position with animation
function scrollTo(
  y: number,
  options: {
    getContainer?: () => HTMLElement | Window | Document
    duration?: number
    callback?: () => void
  } = {},
) {
  const { getContainer = () => window, duration = 450, callback } = options
  const container = getContainer()
  const scrollTop = getScroll(container)
  const startTime = Date.now()

  let rafId: number

  const frameFunc = () => {
    const timestamp = Date.now()
    const time = timestamp - startTime
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration)

    if (container === window || (container as any).window === container) {
      ;(container as Window).scrollTo(window.pageXOffset, nextScrollTop)
    } else if (container instanceof Document) {
      container.documentElement.scrollTop = nextScrollTop
    } else if (container instanceof HTMLElement) {
      container.scrollTop = nextScrollTop
    }

    if (time < duration) {
      rafId = requestAnimationFrame(frameFunc)
    } else if (callback) {
      callback()
    }
  }

  rafId = requestAnimationFrame(frameFunc)

  return () => {
    cancelAnimationFrame(rafId)
  }
}

/**
 * @deprecated Please use `FloatButton.BackTop` instead.
 */
export const BackTop = defineComponent({
  name: 'BackTop',
  props: {
    visibilityHeight: { type: Number, default: 400 },
    target: Function as PropType<() => HTMLElement | Window | Document>,
    duration: { type: Number, default: 450 },
    className: String,
    rootClassName: String,
    style: [String, Object] as PropType<string | CSSProperties>,
    prefixCls: String,
    classNames: Object as PropType<BackTopClassNames>,
    styles: Object as PropType<BackTopStyles>,
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const config = useConfig()
    const prefixCls = props.prefixCls || usePrefixCls('back-top')
    const visible = ref(props.visibilityHeight === 0)
    const containerRef = ref<HTMLDivElement>()

    const getDefaultTarget = () => containerRef.value?.ownerDocument || window

    const handleScroll = throttleByAnimationFrame((e: Event | { target: any }) => {
      const scrollTop = getScroll(e.target)
      visible.value = scrollTop >= props.visibilityHeight
    })

    const scrollToTop = (e: MouseEvent) => {
      const getTarget = props.target || getDefaultTarget
      scrollTo(0, { getContainer: getTarget, duration: props.duration })
      emit('click', e)
    }

    onMounted(() => {
      const getTarget = props.target || getDefaultTarget
      const container = getTarget()
      handleScroll({ target: container })
      container?.addEventListener('scroll', handleScroll as EventListener)
    })

    onBeforeUnmount(() => {
      const getTarget = props.target || getDefaultTarget
      const container = getTarget()
      handleScroll.cancel()
      container?.removeEventListener('scroll', handleScroll as EventListener)
    })

    const classes = computed(() =>
      cls(
        prefixCls,
        {
          [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
        },
        props.className,
        props.rootClassName,
        props.classNames?.root,
      ),
    )

    // 合并根节点的内联样式（props.style 支持字符串或对象，与语义化 styles.root 合并）
    const rootStyle = computed<CSSProperties | string | undefined>(() => {
      const semanticStyle = props.styles?.root
      if (!semanticStyle) return props.style
      if (typeof props.style === 'string') {
        // 字符串样式无法与对象安全合并，优先保留语义化对象样式
        return semanticStyle
      }
      return { ...props.style, ...semanticStyle }
    })

    const defaultElement = () => (
      <div class={cls(`${prefixCls}-content`, props.classNames?.content)} style={props.styles?.content}>
        <div class={cls(`${prefixCls}-icon`, props.classNames?.icon)} style={props.styles?.icon}>
          <Icon component={UpOutlined} />
        </div>
      </div>
    )

    return () => (
      <div ref={containerRef} class={classes.value} style={rootStyle.value} onClick={scrollToTop}>
        <Transition name="hmfw-fade">{visible.value && (slots.default?.() || defaultElement())}</Transition>
      </div>
    )
  },
})
