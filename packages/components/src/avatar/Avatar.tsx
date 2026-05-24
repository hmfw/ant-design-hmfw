import { defineComponent, computed, ref, onMounted, onUpdated, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AvatarSize, AvatarShape } from './types'

const SIZE_MAP: Record<string, number> = {
  large: 40,
  default: 32,
  small: 24,
}

export const Avatar = defineComponent({
  name: 'Avatar',
  props: {
    size: {
      type: [String, Number] as PropType<AvatarSize>,
      default: 'default',
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'circle',
    },
    src: String,
    srcSet: String,
    alt: String,
    icon: Object,
    gap: {
      type: Number,
      default: 4,
    },
  },
  emits: ['error'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('avatar')
    const imgError = ref(false)
    const textRef = ref<HTMLSpanElement | null>(null)
    const avatarRef = ref<HTMLSpanElement | null>(null)
    const scale = ref(1)

    const sizeValue = computed(() =>
      typeof props.size === 'number' ? props.size : SIZE_MAP[props.size] ?? 32,
    )
    void sizeValue

    const sizeStyle = computed(() => {
      if (typeof props.size === 'number') {
        return {
          width: `${props.size}px`,
          height: `${props.size}px`,
          lineHeight: `${props.size}px`,
          fontSize: `${Math.round(props.size / 2)}px`,
        }
      }
      return {}
    })

    const classes = computed(() =>
      cls(prefixCls, `${prefixCls}-${props.shape}`, `${prefixCls}-${props.size}`, {
        [`${prefixCls}-image`]: !!props.src && !imgError.value,
        [`${prefixCls}-icon`]: !!props.icon,
      }),
    )

    const adjustTextScale = () => {
      if (!textRef.value || !avatarRef.value) return
      const avatarWidth = avatarRef.value.offsetWidth
      const textWidth = textRef.value.offsetWidth
      const gap = props.gap * 2
      if (avatarWidth && textWidth) {
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
      default: 'default',
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'circle',
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('avatar')
    const groupPrefixCls = `${prefixCls}-group`

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
            <Avatar size={props.size} shape={props.shape} style={props.maxStyle}>
              +{overflowCount}
            </Avatar>
          )}
        </div>
      )
    }
  },
})
