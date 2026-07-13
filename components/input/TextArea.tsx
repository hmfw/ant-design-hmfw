import { defineComponent, ref, computed, watch, toRef, nextTick, onMounted, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { CloseOutlined } from '@hmfw/icons'
import type {
  InputStatus,
  TextAreaProps,
  AutoSizeConfig,
  ShowCountConfig,
  CountConfig,
  AllowClearConfig,
  TextAreaClassNames,
  TextAreaStyles,
} from './types'
import { calculateAutoSizeStyle } from './calculateNodeHeight'
import { useMergedValue, useFocusExpose, useAllowClear, defaultCountStrategy } from './hooks'

const textAreaProps = {
  // 值与基础状态
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: undefined },
  placeholder: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  // 通用配置
  status: { type: String as PropType<InputStatus>, default: '' },
  maxLength: { type: Number, default: undefined },
  // 组件专属
  rows: { type: Number, default: 4 },
  autoSize: { type: [Boolean, Object] as PropType<boolean | AutoSizeConfig>, default: undefined },
  showCount: { type: [Boolean, Object] as PropType<boolean | ShowCountConfig>, default: undefined },
  count: { type: Object as PropType<CountConfig>, default: undefined },
  allowClear: { type: [Boolean, Object] as PropType<boolean | AllowClearConfig>, default: undefined },
  // 语义化 API
  classNames: { type: Object as PropType<TextAreaClassNames>, default: undefined },
  styles: { type: Object as PropType<TextAreaStyles>, default: undefined },
} satisfies Record<keyof TextAreaProps, any>

export const TextArea = defineComponent({
  name: 'TextArea',
  props: textAreaProps,
  emits: ['update:value', 'change', 'input', 'focus', 'blur', 'clear', 'pressEnter', 'onPressEnter'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const innerValue = useMergedValue(props)
    const textareaRef = ref<HTMLTextAreaElement>()
    const allowClearConfig = useAllowClear(toRef(props, 'allowClear'))

    // Expose focus/blur methods
    expose({ ...useFocusExpose(textareaRef), resizableTextArea: textareaRef })

    // Auto-resize logic (参考 Ant Design v6 实现)
    const textareaStyle = ref<Record<string, any>>({})

    const updateAutoSize = () => {
      if (!props.autoSize || !textareaRef.value) return

      const minRows = typeof props.autoSize === 'object' ? (props.autoSize.minRows ?? null) : null
      const maxRows = typeof props.autoSize === 'object' ? (props.autoSize.maxRows ?? null) : null

      nextTick(() => {
        if (!textareaRef.value) return
        const style = calculateAutoSizeStyle(textareaRef.value, false, minRows, maxRows)
        textareaStyle.value = style
      })
    }

    watch(() => innerValue.value, updateAutoSize)
    watch(() => props.autoSize, updateAutoSize, { deep: true })

    // 组件挂载后初始化高度
    onMounted(() => {
      if (props.autoSize) {
        updateAutoSize()
      }
    })

    // 计数配置（对齐 Ant Design v6）
    const countConfig = computed(() => {
      const config = {
        show: !!props.showCount,
        max: props.maxLength,
        strategy: defaultCountStrategy,
        showFormatter: undefined as
          ((args: { value: string; count: number; maxLength?: number }) => VNode | string) | undefined,
      }

      if (props.count) {
        config.max = props.count.max ?? config.max
        config.strategy = props.count.strategy ?? config.strategy
        if (typeof props.count.show === 'function') {
          config.show = true
          config.showFormatter = props.count.show
        } else if (props.count.show !== undefined) {
          config.show = !!props.count.show
        }
      }

      if (typeof props.showCount === 'object' && props.showCount?.formatter) {
        config.showFormatter = props.showCount.formatter
      }

      return config
    })

    const valueLength = computed(() => countConfig.value.strategy(innerValue.value))
    const isOutOfRange = computed(() => {
      const max = countConfig.value.max
      return !!max && valueLength.value > max
    })

    const textareaCls = computed(() =>
      cls(prefixCls, `${prefixCls}-textarea`, {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-status-error`]: props.status === 'error',
        [`${prefixCls}-status-warning`]: props.status === 'warning',
      }),
    )

    const handleInput = (e: Event) => {
      // 超出 max 时不截断输入（避免破坏光标、O(n²) 逐字符裁剪），
      // 改为通过 isOutOfRange 标记 `-out-of-range` 类提示，对齐 Ant Design v6。
      const val = (e.target as HTMLTextAreaElement).value
      innerValue.value = val
      emit('update:value', val)
      emit('input', e)
      emit('change', e)
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        emit('pressEnter', e)
        emit('onPressEnter', e)
      }
    }

    const handleClear = () => {
      if (allowClearConfig.value.disabled) return
      innerValue.value = ''
      emit('update:value', '')
      emit('clear')
      textareaRef.value?.focus()
    }

    const hasWrapper = computed(() => countConfig.value.show || (props.allowClear && !allowClearConfig.value.disabled))

    return () => {
      // 合并样式：autoSize 计算的样式 + 用户自定义样式
      const mergedTextareaStyle = {
        ...textareaStyle.value,
        ...props.styles?.textarea,
      }

      const textarea = (
        <textarea
          ref={textareaRef}
          class={cls(textareaCls.value, props.classNames?.textarea)}
          style={mergedTextareaStyle}
          value={innerValue.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readOnly}
          rows={props.autoSize ? undefined : props.rows}
          maxlength={props.maxLength}
          onInput={handleInput}
          onKeydown={handleKeydown}
          onFocus={(e: FocusEvent) => emit('focus', e)}
          onBlur={(e: FocusEvent) => emit('blur', e)}
        />
      )

      if (!hasWrapper.value) return textarea

      const clearIcon = allowClearConfig.value.clearIcon || <CloseOutlined />
      const clearBtn = props.allowClear && innerValue.value && !allowClearConfig.value.disabled && (
        <span class={`${prefixCls}-clear-icon`} onClick={handleClear}>
          {clearIcon}
        </span>
      )

      // TextArea 的 countNode
      const countNode = (() => {
        if (!countConfig.value.show) return null

        const count = valueLength.value
        const max = countConfig.value.max

        // 使用自定义 formatter
        if (countConfig.value.showFormatter) {
          return (
            <span
              class={cls(`${prefixCls}-show-count-suffix`, `${prefixCls}-data-count`, props.classNames?.count)}
              style={props.styles?.count}
            >
              {countConfig.value.showFormatter({ value: innerValue.value, count, maxLength: max })}
            </span>
          )
        }

        // 默认格式
        const hasMaxLength = Number(max) > 0
        return (
          <span
            class={cls(`${prefixCls}-show-count-suffix`, `${prefixCls}-data-count`, props.classNames?.count)}
            style={props.styles?.count}
          >
            {hasMaxLength ? `${count} / ${max}` : `${count}`}
          </span>
        )
      })()

      return (
        <div
          class={cls(`${prefixCls}-textarea-show-count`, {
            // out-of-range 挂在包裹节点上，CSS 后代选择器才能命中兄弟计数节点
            [`${prefixCls}-out-of-range`]: isOutOfRange.value,
          })}
        >
          {textarea}
          {clearBtn}
          {countNode}
        </div>
      )
    }
  },
})
