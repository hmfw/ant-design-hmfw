import { defineComponent, computed, ref, onMounted, onUpdated, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AvatarSize, AvatarShape } from './types'
import { provideAvatarContext, useAvatarContext } from './context'

export const Avatar = defineComponent({
  name: 'Avatar',
  props: {
    size: {
      type: [String, Number] as PropType<AvatarSize>,
      default: undefined,
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: undefined,
    },
    src: String,
    srcSet: String,
    alt: String,
    icon: Object,
    draggable: {
      type: [Boolean, String] as PropType<boolean | 'true' | 'false'>,
      default: undefined,
    },
    crossOrigin: String as PropType<'' | 'anonymous' | 'use-credentials'>,
    gap: {
      type: Number,
      default: 4,
    },
  },
  emits: ['error'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('avatar')
    const ctx = useAvatarContext()
    const imgError = ref(false)
    const textRef = ref<HTMLSpanElement | null>(null)
    const avatarRef = ref<HTMLSpanElement | null>(null)
    const scale = ref(1)

    // props 优先，其次 AvatarGroup 上下文，最后默认值
    const mergedSize = computed<AvatarSize>(() => props.size ?? ctx.size ?? 'default')
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
      return cls(prefixCls, `${prefixCls}-${mergedShape.value}`, {
        [`${prefixCls}-${size}`]: typeof size === 'string',
        [`${prefixCls}-image`]: !!props.src && !imgError.value,
        [`${prefixCls}-icon`]: !!props.icon,
      })
    })

    const adjustTextScale = () => {
      if (!textRef.value || !avatarRef.value) return
      const avatarWidth = avatarRef.value.offsetWidth
      const textWidth = textRef.value.offsetWidth
      const gap = props.gap * 2
      if (avatarWidth && textWidth && gap < avatarWidth) {
        scale.value = avatarWidth - gap < textWidth
          ? (avatarWidth - gap) / textWidth
          : 1
      }
    }

    onMounted(adjustTextScale)
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
            src={props.src}
            srcset={props.srcSet}
            alt={props.alt}
            draggable={props.draggable}
            crossorigin={props.crossOrigin}
            onError={handleImgError}
          />
        )
      } else if (props.icon) {
        const IconComp = props.icon as any
        children = <IconComp />
      } else if (slots.default) {
        const textStyle = scale.value !== 1
          ? { transform: `scale(${scale.value})`, position: 'absolute' as const, display: 'inline-block' }
          : { display: 'inline-block' }
        children = (
          <span ref={textRef} class={`${prefixCls}-string`} style={textStyle}>
            {slots.default()}
          </span>
        )
      }

      return (
        <span ref={avatarRef} class={classes.value} style={sizeStyle.value}>
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
      type: [String, Number] as PropType<AvatarSize>,
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
                default: () => `+${overflowCount}`
              }}
            />
          )}
        </div>
      )
    }
  },
})
