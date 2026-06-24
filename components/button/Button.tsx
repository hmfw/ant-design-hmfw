import { defineComponent, computed, ref, onMounted, onBeforeUnmount, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { LoadingOutlined } from '@hmfw/icons'
import type {
  ButtonType,
  ButtonSize,
  ButtonHTMLType,
  ButtonShape,
  LoadingConfig,
  ButtonClassNames,
  ButtonStyles,
} from './types'
import type { IconComponent } from '@hmfw/icons'

// 判断是否恰好为两个中文字符
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
    // 语义化结构 className（细粒度控制图标、loading 等子元素）
    classNames: {
      type: Object as PropType<ButtonClassNames>,
      default: undefined,
    },
    // 语义化结构 style
    styles: {
      type: Object as PropType<ButtonStyles>,
      default: undefined,
    },
  },
  emits: ['click'],
  setup(props, { emit, slots, attrs }) {
    const prefixCls = usePrefixCls('btn')
    const buttonRef = ref<HTMLElement | null>(null)
    const innerLoading = ref(false)
    const delayTimer = ref<ReturnType<typeof setTimeout> | null>(null)
    const hasTwoCNChar = ref(false)

    // 解析 loading 配置
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

    // 处理 loading 延迟
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
      { immediate: true },
    )

    onBeforeUnmount(() => {
      if (delayTimer.value) {
        clearTimeout(delayTimer.value)
      }
    })

    // 检查两个中文字符
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
        },
        props.classNames?.root,
      ),
    )

    const handleClick = (e: MouseEvent) => {
      if (isDisabled.value) {
        e.preventDefault()
        return
      }
      emit('click', e)
    }

    return () => {
      // 图标节点：包一层 span，便于通过 classNames.icon / classNames.loading 注入样式
      let iconNode: any = null
      if (innerLoading.value) {
        iconNode = (
          <span
            class={cls(
              `${prefixCls}-icon`,
              `${prefixCls}-loading-icon`,
              props.classNames?.icon,
              props.classNames?.loading,
            )}
            style={{ ...(props.styles?.icon || {}), ...(props.styles?.loading || {}) }}
          >
            <LoadingOutlined class="hmfw-icon hmfw-icon-spin" />
          </span>
        )
      } else if (props.icon) {
        const IconComp = props.icon
        iconNode = (
          <span class={cls(`${prefixCls}-icon`, props.classNames?.icon)} style={props.styles?.icon}>
            <IconComp class="hmfw-icon" />
          </span>
        )
      }

      const slotContent = slots.default?.()
      const hasSlotContent = !!slotContent?.length
      const hasIcon = !hasSlotContent && !!(props.icon || innerLoading.value)

      // 在两个中文字符之间插入空格
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
      const rootStyle = props.styles?.root

      // href 存在时渲染为 a 标签
      if (props.href !== undefined) {
        return (
          <a
            ref={buttonRef}
            class={buttonClasses}
            style={rootStyle}
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
          style={rootStyle}
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
