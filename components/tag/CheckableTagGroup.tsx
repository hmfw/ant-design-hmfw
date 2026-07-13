import { defineComponent, computed, ref, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { CheckableTag } from './Tag'
import type {
  CheckableTagOption,
  CheckableTagGroupClassNames,
  CheckableTagGroupStyles,
  CheckableTagGroupProps,
} from './types'

type TagValue = string | number

const checkableTagGroupProps = {
  options: { type: Array as PropType<CheckableTagGroupProps['options']>, default: undefined },
  value: { type: [String, Number, Array, null] as PropType<CheckableTagGroupProps['value']>, default: undefined },
  defaultValue: {
    type: [String, Number, Array, null] as PropType<CheckableTagGroupProps['defaultValue']>,
    default: undefined,
  },
  multiple: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  classNames: { type: Object as PropType<CheckableTagGroupClassNames>, default: undefined },
  styles: { type: Object as PropType<CheckableTagGroupStyles>, default: undefined },
} satisfies Record<keyof CheckableTagGroupProps, any>

export const CheckableTagGroup = defineComponent({
  name: 'CheckableTagGroup',
  props: checkableTagGroupProps,
  emits: ['change', 'update:value'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tag')
    const groupPrefixCls = `${prefixCls}-checkable-group`

    // 半受控：value 存在时受控，否则内部维护
    const innerValue = ref<CheckableTagGroupProps['value']>(props.defaultValue ?? (props.multiple ? [] : null))
    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
      { immediate: true },
    )

    const parsedOptions = computed<CheckableTagOption[]>(() => {
      if (!Array.isArray(props.options)) return []
      return props.options.map((opt) => (typeof opt === 'object' && opt !== null ? opt : { value: opt, label: opt }))
    })

    const isChecked = (val: TagValue): boolean => {
      const current = innerValue.value
      if (props.multiple) return Array.isArray(current) && current.includes(val)
      return current === val
    }

    const handleChange = (checked: boolean, option: CheckableTagOption) => {
      let next: CheckableTagGroupProps['value']
      if (props.multiple) {
        const list = (Array.isArray(innerValue.value) ? innerValue.value : []) as TagValue[]
        next = checked ? [...list, option.value] : list.filter((v) => v !== option.value)
      } else {
        next = checked ? option.value : null
      }
      // 非受控时更新内部状态
      if (props.value === undefined) innerValue.value = next
      emit('update:value', next)
      emit('change', next)
    }

    return () => (
      <div
        class={cls(groupPrefixCls, { [`${groupPrefixCls}-disabled`]: props.disabled }, props.classNames?.root)}
        style={props.styles?.root}
      >
        {parsedOptions.value.map((option) => (
          <CheckableTag
            key={option.value}
            class={cls(`${groupPrefixCls}-item`, props.classNames?.item, option.className)}
            style={{ ...props.styles?.item, ...option.style }}
            checked={isChecked(option.value)}
            disabled={props.disabled || option.disabled}
            onChange={(checked: boolean) => handleChange(checked, option)}
          >
            {option.label}
          </CheckableTag>
        ))}
      </div>
    )
  },
})
