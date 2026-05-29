import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export interface SegmentedOption {
  label: string
  value: string | number
  disabled?: boolean
  icon?: string
}

export const Segmented = defineComponent({
  name: 'Segmented',
  props: {
    value: [String, Number] as PropType<string | number>,
    defaultValue: [String, Number] as PropType<string | number>,
    options: {
      type: Array as PropType<(string | number | SegmentedOption)[]>,
      default: () => [],
    },
    disabled: Boolean,
    block: Boolean,
    size: { type: String as PropType<'large' | 'middle' | 'small'>, default: 'middle' },
  },
  emits: ['update:value', 'change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('segmented')

    const normalizeOptions = computed((): SegmentedOption[] =>
      props.options.map((opt) =>
        typeof opt === 'object' ? opt : { label: String(opt), value: opt },
      ),
    )

    const defaultVal = props.defaultValue ?? props.value ?? normalizeOptions.value[0]?.value
    const innerValue = ref<string | number | undefined>(defaultVal)

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => isControlled.value ? props.value : innerValue.value)

    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    const handleSelect = (opt: SegmentedOption) => {
      if (props.disabled || opt.disabled) return
      innerValue.value = opt.value
      emit('update:value', opt.value)
      emit('change', opt.value)
    }

    return () => (
      <div class={cls(prefixCls, `${prefixCls}-${props.size}`, {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-block`]: props.block,
      })}>
        <div class={`${prefixCls}-group`}>
          {normalizeOptions.value.map((opt) => (
            <div
              key={opt.value}
              class={cls(`${prefixCls}-item`, {
                [`${prefixCls}-item-selected`]: opt.value === currentValue.value,
                [`${prefixCls}-item-disabled`]: props.disabled || opt.disabled,
              })}
              onClick={() => handleSelect(opt)}
            >
              <div class={`${prefixCls}-item-label`}>
                {opt.icon && <span class={`${prefixCls}-item-icon`}>{opt.icon}</span>}
                {opt.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
})
