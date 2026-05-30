import { defineComponent, computed, ref, onMounted, onBeforeUnmount, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { LoadingOutlined } from '../icon/icons'
import type { ButtonType, ButtonSize, ButtonHTMLType, ButtonShape, LoadingConfig } from './types'
import type { IconComponent } from '../icon/types'

// Check if string contains exactly two Chinese characters
const isTwoCNChar = (str: string): boolean => {
  return /^[一-龥]{2}$/.test(str)
}

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'middle',
    },
    shape: {
      type: String as PropType<ButtonShape>,
      default: 'default',
    },
    htmlType: {
      type: String as PropType<ButtonHTMLType>,
      default: 'button',
    },
    loading: {
      type: [Boolean, Object] as PropType<boolean | LoadingConfig>,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Function as PropType<IconComponent>,
      default: undefined,
    },
    iconPosition: {
      type: String as PropType<'start' | 'end'>,
      default: 'start',
    },
    href: {
      type: String,
      default: undefined,
    },
    target: {
      type: String,
      default: undefined,
    },
    autoInsertSpace: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['click'],
  setup(props, { emit, slots, attrs }) {
    const prefixCls = usePrefixCls('btn')
    const buttonRef = ref<HTMLElement | null>(null)
    const innerLoading = ref(false)
    const delayTimer = ref<ReturnType<typeof setTimeout> | null>(null)
    const hasTwoCNChar = ref(false)

    // Parse loading config
    const loadingConfig = computed(() => {
      if (typeof props.loading === 'object' && props.loading !== null) {
        return {
          loading: true,
          delay: props.loading.delay || 0,
        }
      }
      return {
        loading: !!props.loading,
        delay: 0,
      }
    })

    // Handle loading delay
    watch(
      () => loadingConfig.value,
      (config) => {
        if (delayTimer.value) {
          clearTimeout(delayTimer.value)
          delayTimer.value = null
        }

        if (config.loading) {
          if (config.delay > 0) {
            delayTimer.value = setTimeout(() => {
              innerLoading.value = true
              delayTimer.value = null
            }, config.delay)
          } else {
            innerLoading.value = true
          }
        } else {
          innerLoading.value = false
        }
      },
      { immediate: true }
    )

    onBeforeUnmount(() => {
      if (delayTimer.value) {
        clearTimeout(delayTimer.value)
      }
    })

    // Check for two Chinese characters
    const checkTwoCNChar = () => {
      if (!buttonRef.value || !props.autoInsertSpace) {
        return
      }
      const text = buttonRef.value.textContent || ''
      const needInserted = !props.icon && !innerLoading.value
      hasTwoCNChar.value = needInserted && isTwoCNChar(text.trim())
    }

    onMounted(() => {
      checkTwoCNChar()
    })

    watch([() => slots.default, innerLoading], () => {
      checkTwoCNChar()
    })

    const isDisabled = computed(() => props.disabled || innerLoading.value)

    const classes = computed(() =>
      cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        `${prefixCls}-${props.size}`,
        {
          [`${prefixCls}-${props.shape}`]: props.shape !== 'default',
          [`${prefixCls}-loading`]: innerLoading.value,
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-dangerous`]: props.danger,
          [`${prefixCls}-block`]: props.block,
          [`${prefixCls}-background-ghost`]: props.ghost,
          [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar.value,
          [`${prefixCls}-icon-end`]: props.iconPosition === 'end',
        }
      )
    )

    const handleClick = (e: MouseEvent) => {
      if (isDisabled.value) {
        e.preventDefault()
        return
      }
      emit('click', e)
    }

    return () => {
      const iconNode = innerLoading.value ? (
        <Icon component={LoadingOutlined} spin />
      ) : props.icon ? (
        <Icon component={props.icon} />
      ) : null

      const slotContent = slots.default?.()
      const hasSlotContent = !!slotContent?.length
      const hasIcon = !hasSlotContent && !!(props.icon || innerLoading.value)

      // Insert space between two Chinese characters
      let children = slotContent
      if (hasSlotContent && hasTwoCNChar.value && props.autoInsertSpace) {
        const text = buttonRef.value?.textContent || ''
        if (isTwoCNChar(text.trim())) {
          children = [<span class={`${prefixCls}-two-chinese-chars-content`}>{slotContent}</span>]
        }
      }

      const content = (
        <>
          {props.iconPosition === 'start' && iconNode}
          {hasSlotContent && <span>{children}</span>}
          {props.iconPosition === 'end' && iconNode}
        </>
      )

      const buttonClasses = cls(classes.value, { [`${prefixCls}-icon-only`]: hasIcon })

      // Render as anchor if href is provided
      if (props.href !== undefined) {
        return (
          <a
            ref={buttonRef}
            class={buttonClasses}
            href={isDisabled.value ? undefined : props.href}
            target={props.target}
            aria-disabled={isDisabled.value || undefined}
            tabindex={isDisabled.value ? -1 : 0}
            onClick={handleClick}
            {...attrs}
          >
            {content}
          </a>
        )
      }

      return (
        <button
          ref={buttonRef}
          type={props.htmlType}
          class={buttonClasses}
          disabled={isDisabled.value}
          aria-busy={innerLoading.value || undefined}
          aria-disabled={isDisabled.value || undefined}
          onClick={handleClick}
          {...attrs}
        >
          {content}
        </button>
      )
    }
  },
})

