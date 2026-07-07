import {
  defineComponent,
  computed,
  ref,
  onBeforeUnmount,
  watchEffect,
  nextTick,
  type PropType,
  type VNode,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type Ref,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { LoadingOutlined } from '@hmfw/icons'
import type { IconComponent } from '@hmfw/icons'
import type {
  ButtonProps,
  ButtonType,
  ButtonSize,
  ButtonHTMLType,
  ButtonShape,
  LoadingConfig,
  ButtonClassNames,
  ButtonStyles,
} from './types'

// 类型别名
type ButtonAttrs = ButtonHTMLAttributes & { ref: Ref<HTMLElement | null> }
type LinkAttrs = AnchorHTMLAttributes & { ref: Ref<HTMLElement | null> }

// 判断是否恰好为两个中文字符（包含基本汉字和扩展A区）
const isTwoCNChar = (str: string): boolean => {
  return /^[一-鿿㐀-䶿]{2}$/.test(str)
}

// Props 定义（使用 satisfies 确保与 ButtonProps 类型一致）
const buttonProps = {
  type: { type: String as PropType<ButtonType>, default: 'default' },
  size: { type: String as PropType<ButtonSize>, default: 'middle' },
  shape: { type: String as PropType<ButtonShape>, default: 'default' },
  htmlType: { type: String as PropType<ButtonHTMLType>, default: 'button' },
  loading: { type: [Boolean, Object] as PropType<boolean | LoadingConfig>, default: false },
  disabled: { type: Boolean, default: false },
  danger: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  ghost: { type: Boolean, default: false },
  icon: { type: Function as PropType<IconComponent>, default: undefined },
  iconPosition: { type: String as PropType<'start' | 'end'>, default: 'start' },
  href: { type: String, default: undefined },
  target: { type: String, default: undefined },
  autoInsertSpace: { type: Boolean, default: true },
  classNames: { type: Object as PropType<ButtonClassNames>, default: undefined },
  styles: { type: Object as PropType<ButtonStyles>, default: undefined },
} satisfies Record<keyof ButtonProps, any>

export default defineComponent({
  name: 'Button',
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit, slots, attrs }) {
    const prefixCls = usePrefixCls('btn')
    const buttonRef = ref<HTMLElement | null>(null)
    const innerLoading = ref(false)
    const delayTimer = ref<ReturnType<typeof setTimeout> | null>(null)

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
    watchEffect((onCleanup) => {
      const config = loadingConfig.value

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

      onCleanup(() => {
        if (delayTimer.value) {
          clearTimeout(delayTimer.value)
          delayTimer.value = null
        }
      })
    })

    onBeforeUnmount(() => {
      if (delayTimer.value) {
        clearTimeout(delayTimer.value)
      }
    })

    // 计算是否为两个中文字符（响应式计算，避免 watch 过度触发）
    const hasTwoCNChar = computed(() => {
      if (!buttonRef.value || !props.autoInsertSpace) {
        return false
      }
      const text = buttonRef.value.textContent || ''
      const needInserted = !props.icon && !innerLoading.value
      return needInserted && isTwoCNChar(text.trim())
    })

    // 在 DOM 更新后重新计算（确保 textContent 最新）
    watchEffect(() => {
      if (buttonRef.value) {
        nextTick(() => {
          // 触发 hasTwoCNChar 重新计算
          void buttonRef.value?.textContent
        })
      }
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

    // 渲染图标节点（提取函数，减少重复逻辑）
    const renderIcon = (): VNode | null => {
      if (!innerLoading.value && !props.icon) {
        return null
      }

      const IconComp = innerLoading.value ? LoadingOutlined : props.icon!
      const iconClasses = cls(
        `${prefixCls}-icon`,
        innerLoading.value && `${prefixCls}-loading-icon`,
        props.classNames?.icon,
        innerLoading.value && props.classNames?.loading,
      )
      const iconStyles = {
        ...(props.styles?.icon || {}),
        ...(innerLoading.value ? props.styles?.loading || {} : {}),
      }

      return (
        <span class={iconClasses} style={iconStyles}>
          <IconComp class={cls('hmfw-icon', innerLoading.value && 'hmfw-icon-spin')} />
        </span>
      )
    }

    return () => {
      const iconNode = renderIcon()

      const slotContent = slots.default?.()
      const hasSlotContent = !!slotContent?.length
      const hasIcon = !hasSlotContent && !!(props.icon || innerLoading.value)

      // 在两个中文字符之间插入空格
      let children = slotContent
      if (hasTwoCNChar.value) {
        children = [<span class={`${prefixCls}-two-chinese-chars-content`}>{slotContent}</span>]
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
        const linkAttrs: LinkAttrs = {
          ref: buttonRef,
          role: 'button',
          class: buttonClasses,
          style: rootStyle,
          href: isDisabled.value ? undefined : props.href,
          target: props.target,
          'aria-disabled': isDisabled.value || undefined,
          tabindex: isDisabled.value ? -1 : undefined,
          onClick: handleClick,
          ...attrs,
        }
        return <a {...linkAttrs}>{content}</a>
      }

      const buttonAttrs: ButtonAttrs = {
        ref: buttonRef,
        type: props.htmlType,
        class: buttonClasses,
        style: rootStyle,
        disabled: isDisabled.value,
        'aria-busy': innerLoading.value || undefined,
        'aria-disabled': isDisabled.value || undefined,
        onClick: handleClick,
        ...attrs,
      }
      return <button {...buttonAttrs}>{content}</button>
    }
  },
})
