import { defineComponent, computed, ref, onMounted, onUpdated, onBeforeUnmount, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AvatarSize, AvatarShape, AvatarClassNames, AvatarStyles } from './types'
import { provideAvatarContext, useAvatarContext } from './context'

// 响应式断点定义
const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
} as const

type Breakpoint = keyof typeof BREAKPOINTS

// 获取当前断点
function getCurrentBreakpoint(width: number): Breakpoint {
  const breakpoints: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
  for (const bp of breakpoints) {
    if (width >= BREAKPOINTS[bp]) {
      return bp
    }
  }
  return 'xs'
}

// 从响应式配置中获取实际尺寸
function getResponsiveSize(size: AvatarSize, breakpoint: Breakpoint): Exclude<AvatarSize, object> {
  if (typeof size === 'object' && size !== null) {
    // 按优先级查找匹配的尺寸
    const breakpoints: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
    const currentIndex = breakpoints.indexOf(breakpoint)

    // 从当前断点开始向下查找第一个有值的尺寸
    for (let i = currentIndex; i < breakpoints.length; i++) {
      const bp = breakpoints[i]
      if (size[bp] !== undefined) {
        return size[bp]!
      }
    }

    // 如果没找到，返回默认值
    return 'default'
  }
  return size as Exclude<AvatarSize, object>
}

export const Avatar = defineComponent({
  name: 'Avatar',
  props: {
    size: {
      type: [String, Number, Object] as PropType<AvatarSize>,
      default: undefined,
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: undefined,
    },
    src: String,
    srcSet: String,
    alt: String,
    icon: [Object, Function],
    draggable: {
      type: [Boolean, String] as PropType<boolean | 'true' | 'false'>,
      default: undefined,
    },
    crossOrigin: String as PropType<'' | 'anonymous' | 'use-credentials'>,
    referrerPolicy: String as PropType<
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url'
    >,
    gap: {
      type: Number,
      default: 4,
    },
    classNames: Object as PropType<AvatarClassNames>,
    styles: Object as PropType<AvatarStyles>,
  },
  emits: ['error'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('avatar')
    const ctx = useAvatarContext()
    const imgError = ref(false)
    const textRef = ref<HTMLSpanElement | null>(null)
    const avatarRef = ref<HTMLSpanElement | null>(null)
    const scale = ref(1)
    const currentBreakpoint = ref<Breakpoint>('md')

    // 监听窗口大小变化以更新断点
    const updateBreakpoint = () => {
      if (typeof window !== 'undefined') {
        currentBreakpoint.value = getCurrentBreakpoint(window.innerWidth)
      }
    }

    onMounted(() => {
      updateBreakpoint()
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', updateBreakpoint)
      }
      adjustTextScale()
    })

    onBeforeUnmount(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateBreakpoint)
      }
    })

    // props 优先，其次 AvatarGroup 上下文，最后默认值
    const mergedSize = computed<AvatarSize>(() => {
      const size = props.size ?? ctx.size ?? 'default'
      // 如果是响应式配置，返回当前断点对应的尺寸
      return getResponsiveSize(size, currentBreakpoint.value)
    })
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
      imgError.value = true
      emit('error', e)
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

export const AvatarGroup = defineComponent({
  name: 'AvatarGroup',
  props: {
    maxCount: Number,
    maxStyle: Object as PropType<Record<string, string>>,
    size: {
      type: [String, Number, Object] as PropType<AvatarSize>,
      default: undefined,
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('avatar')
    const groupPrefixCls = `${prefixCls}-group`

    // 向子 Avatar 提供 size/shape
    provideAvatarContext({
      get size() {
        return props.size
      },
      get shape() {
        return props.shape
      },
    })

    return () => {
      const children = slots.default?.() ?? []
      const flatChildren = Array.isArray(children) ? children.flat() : [children]

      let visibleChildren = flatChildren
      let overflowCount = 0

      if (props.maxCount && flatChildren.length > props.maxCount) {
        visibleChildren = flatChildren.slice(0, props.maxCount)
        overflowCount = flatChildren.length - props.maxCount
      }

      return (
        <div class={groupPrefixCls}>
          {visibleChildren}
          {overflowCount > 0 && (
            <Avatar
              size={props.size}
              shape={props.shape}
              style={props.maxStyle}
              v-slots={{
                default: () => `+${overflowCount}`,
              }}
            />
          )}
        </div>
      )
    }
  },
})
