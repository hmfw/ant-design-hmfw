import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export const Rate = defineComponent({
  name: 'Rate',
  props: {
    value: Number,
    defaultValue: { type: Number, default: 0 },
    count: { type: Number, default: 5 },
    allowHalf: Boolean,
    allowClear: { type: Boolean, default: true },
    disabled: Boolean,
    character: { type: String, default: '★' },
    tooltips: Array as PropType<string[]>,
  },
  emits: ['update:value', 'change', 'hoverChange', 'focus', 'blur', 'keydown'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('rate')
    const innerValue = ref(props.defaultValue ?? props.value ?? 0)
    const hoverValue = ref<number | null>(null)
    const focused = ref(false)

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => isControlled.value ? props.value! : innerValue.value)

    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    const setValue = (v: number) => {
      if (props.disabled) return
      let next = v
      if (props.allowClear && v === currentValue.value) next = 0
      innerValue.value = next
      emit('update:value', next)
      emit('change', next)
    }

    const getStarValue = (index: number, isHalf: boolean) => {
      return isHalf ? index + 0.5 : index + 1
    }

    const handleClick = (index: number, isHalf: boolean) => {
      setValue(getStarValue(index, isHalf))
    }

    const handleMouseMove = (index: number, isHalf: boolean) => {
      const v = getStarValue(index, isHalf)
      if (hoverValue.value !== v) {
        hoverValue.value = v
        emit('hoverChange', v)
      }
    }

    const handleMouseLeave = () => {
      hoverValue.value = null
      emit('hoverChange', undefined)
    }

    const displayValue = computed(() => hoverValue.value ?? currentValue.value)

    const getStarStatus = (index: number) => {
      const val = displayValue.value
      const full = index + 1
      const half = index + 0.5
      if (val >= full) return 'full'
      if (props.allowHalf && val >= half) return 'half'
      return 'zero'
    }

    return () => {
      const stars = Array.from({ length: props.count }, (_, i) => i)

      return (
        <ul
          class={cls(prefixCls, {
            [`${prefixCls}-disabled`]: props.disabled,
          })}
          onMouseleave={handleMouseLeave}
          onFocus={() => { focused.value = true; emit('focus') }}
          onBlur={() => { focused.value = false; emit('blur') }}
          tabindex={props.disabled ? -1 : 0}
          role="radiogroup"
        >
          {stars.map((i) => {
            const status = getStarStatus(i)
            const tooltip = props.tooltips?.[i]
            const char = slots.character?.({ index: i }) ?? props.character

            return (
              <li
                key={i}
                class={cls(`${prefixCls}-star`, {
                  [`${prefixCls}-star-full`]: status === 'full',
                  [`${prefixCls}-star-half`]: status === 'half',
                  [`${prefixCls}-star-zero`]: status === 'zero',
                })}
                title={tooltip}
                role="radio"
                aria-checked={status !== 'zero'}
                aria-posinset={i + 1}
                aria-setsize={props.count}
              >
                {props.allowHalf && (
                  <div
                    class={`${prefixCls}-star-first`}
                    onClick={() => !props.disabled && handleClick(i, true)}
                    onMousemove={() => !props.disabled && handleMouseMove(i, true)}
                  >
                    {char}
                  </div>
                )}
                <div
                  class={`${prefixCls}-star-second`}
                  onClick={() => !props.disabled && handleClick(i, false)}
                  onMousemove={() => !props.disabled && handleMouseMove(i, false)}
                >
                  {char}
                </div>
              </li>
            )
          })}
        </ul>
      )
    }
  },
})
