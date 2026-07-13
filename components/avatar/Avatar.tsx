import {
  defineComponent,
  computed,
  ref,
  watch,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  getCurrentInstance,
  type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type {
  AvatarSize,
  AvatarShape,
  AvatarIcon,
  AvatarErrorHandler,
  AvatarClassNames,
  AvatarStyles,
  AvatarProps,
} from './types'
import { useAvatarContext } from './context'

// 响应式断点定义（min-width）
const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
} as const

type Breakpoint = keyof typeof BREAKPOINTS

// 从大到小的断点顺序，供匹配与回退共用
const BREAKPOINT_ORDER: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']

// 获取当前视口宽度命中的最大断点
function getCurrentBreakpoint(width: number): Breakpoint {
  for (const bp of BREAKPOINT_ORDER) {
    if (width >= BREAKPOINTS[bp]) {
      return bp
    }
  }
  return 'xs'
}

// 是否为响应式尺寸配置对象
function isResponsiveSize(size: AvatarSize | undefined): size is Exclude<AvatarSize, string | number> {
  return typeof size === 'object' && size !== null
}

/**
 * 从响应式配置中取当前断点对应的尺寸。
 * 与 AntD 对齐：仅取当前断点的值，缺失即不应用响应式尺寸（回退默认样式），
 * 不再向更小断点回退，避免大屏命中小屏尺寸的反直觉行为。
 */
function getResponsiveSize(size: AvatarSize, breakpoint: Breakpoint): Exclude<AvatarSize, object> {
  if (isResponsiveSize(size)) {
    const current = size[breakpoint]
    return current !== undefined ? current : 'middle'
  }
  return size
}

// props 单一类型源：satisfies 强制 key 集合与 AvatarProps 接口一致
const avatarProps = {
  size: { type: [String, Number, Object] as PropType<AvatarSize>, default: undefined },
  shape: { type: String as PropType<AvatarShape>, default: undefined },
  src: { type: String, default: undefined },
  srcSet: { type: String, default: undefined },
  alt: { type: String, default: undefined },
  icon: { type: [Object, Function] as PropType<AvatarIcon>, default: undefined },
  draggable: { type: [Boolean, String] as PropType<boolean | 'true' | 'false'>, default: undefined },
  crossOrigin: { type: String as PropType<'' | 'anonymous' | 'use-credentials'>, default: undefined },
  referrerPolicy: { type: String as PropType<AvatarProps['referrerPolicy']>, default: undefined },
  gap: { type: Number, default: 4 },
  classNames: { type: Object as PropType<AvatarClassNames>, default: undefined },
  styles: { type: Object as PropType<AvatarStyles>, default: undefined },
} satisfies Record<keyof AvatarProps, any>

export const Avatar = defineComponent({
  name: 'Avatar',
  props: avatarProps,
  emits: {
    error: (_e: Event) => true,
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance()
    const prefixCls = usePrefixCls('avatar')
    const ctx = useAvatarContext()
    const imgError = ref(false)
    const textRef = ref<HTMLSpanElement | null>(null)
    const avatarRef = ref<HTMLSpanElement | null>(null)
    const scale = ref(1)
    const currentBreakpoint = ref<Breakpoint>('md')

    // props 优先，其次 AvatarGroup 上下文，最后默认值
    const rawSize = computed<AvatarSize>(() => props.size ?? ctx.size ?? 'middle')

    // 仅当尺寸为响应式对象时才需要监听 resize
    const needResponsive = computed(() => isResponsiveSize(rawSize.value))

    const updateBreakpoint = () => {
      if (typeof window !== 'undefined') {
        currentBreakpoint.value = getCurrentBreakpoint(window.innerWidth)
      }
    }

    onMounted(() => {
      if (needResponsive.value) {
        updateBreakpoint()
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', updateBreakpoint)
        }
      }
      adjustTextScale()
    })

    // 尺寸配置在响应式/非响应式之间切换时，动态增删监听
    watch(needResponsive, (responsive) => {
      if (typeof window === 'undefined') return
      if (responsive) {
        updateBreakpoint()
        window.addEventListener('resize', updateBreakpoint)
      } else {
        window.removeEventListener('resize', updateBreakpoint)
      }
    })

    // src 变化时复位错误态与缩放，支持动态换头像
    watch(
      () => props.src,
      () => {
        imgError.value = false
        scale.value = 1
      },
    )

    onBeforeUnmount(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateBreakpoint)
      }
    })

    const mergedSize = computed<Exclude<AvatarSize, object>>(() =>
      getResponsiveSize(rawSize.value, currentBreakpoint.value),
    )
    const mergedShape = computed<AvatarShape>(() => props.shape ?? ctx.shape ?? 'circle')

    const sizeStyle = computed(() => {
      const size = mergedSize.value
      if (typeof size === 'number') {
        return {
          width: `${size}px`,
          height: `${size}px`,
          lineHeight: `${size}px`,
          fontSize: `${Math.round(size / 2)}px`,
        }
      }
      return {}
    })

    const classes = computed(() => {
      const size = mergedSize.value
      return cls(
        prefixCls,
        `${prefixCls}-${mergedShape.value}`,
        {
          [`${prefixCls}-${size}`]: typeof size === 'string',
          [`${prefixCls}-image`]: !!props.src && !imgError.value,
          [`${prefixCls}-icon`]: !!props.icon,
        },
        props.classNames?.root,
      )
    })

    const adjustTextScale = () => {
      if (!textRef.value || !avatarRef.value) return
      const avatarWidth = avatarRef.value.offsetWidth
      const textWidth = textRef.value.offsetWidth
      const gap = props.gap * 2
      if (avatarWidth && textWidth && gap < avatarWidth) {
        scale.value = avatarWidth - gap < textWidth ? (avatarWidth - gap) / textWidth : 1
      }
    }

    onUpdated(adjustTextScale)

    const handleImgError = (e: Event) => {
      // 直接读取原始 onError 监听器以拿到返回值（Vue 的 emit 会丢弃返回值）：
      // 返回 false 可阻止默认 fallback，由使用者自行降级
      const onError = instance?.vnode.props?.onError as AvatarErrorHandler | undefined
      const errorFlag = onError?.(e)
      if (errorFlag !== false) {
        imgError.value = true
      }
    }

    return () => {
      let children: unknown

      if (props.src && !imgError.value) {
        children = (
          <img
            class={cls(props.classNames?.img)}
            style={props.styles?.img}
            src={props.src}
            srcset={props.srcSet}
            alt={props.alt}
            draggable={props.draggable}
            crossorigin={props.crossOrigin}
            referrerpolicy={props.referrerPolicy}
            onError={handleImgError}
          />
        )
      } else if (props.icon) {
        const IconComp = props.icon as any
        children = <IconComp />
      } else if (slots.default) {
        // 始终包含 translateX(-50%) 确保水平居中
        // left: 50% 由 CSS 类设置，配合 translateX(-50%) 实现居中
        const textStyle =
          scale.value !== 1
            ? { transform: `scale(${scale.value}) translateX(-50%)` }
            : { transform: 'translateX(-50%)' }
        children = (
          <span
            ref={textRef}
            class={cls(`${prefixCls}-string`, props.classNames?.string)}
            style={{ ...textStyle, ...props.styles?.string }}
          >
            {slots.default()}
          </span>
        )
      }

      return (
        <span ref={avatarRef} class={classes.value} style={{ ...sizeStyle.value, ...props.styles?.root }}>
          {children}
        </span>
      )
    }
  },
})
