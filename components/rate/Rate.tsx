import { defineComponent, ref, computed, watch, onMounted, type PropType } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Tooltip } from '../tooltip'
import type { RateProps, RateSize, RateCharacterRenderContext } from './types'
import type { TooltipProps } from '../tooltip'

export const Rate = defineComponent({
  name: 'Rate',
  props: {
    value: Number,
    defaultValue: { type: Number, default: 0 },
    count: { type: Number, default: 5 },
    allowHalf: Boolean,
    allowClear: { type: Boolean, default: true },
    disabled: Boolean,
    character: { type: [String, Function] as PropType<string | ((ctx: RateCharacterRenderContext) => any)>, default: '★' },
    tooltips: Array as PropType<(string | TooltipProps)[]>,
    size: String as PropType<RateSize>,
    keyboard: { type: Boolean, default: true },
    autoFocus: Boolean,
  },
  emits: ['update:value', 'change', 'hoverChange', 'focus', 'blur', 'keydown'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('rate')
    const config = useConfig()
    const containerRef = ref<HTMLUListElement>()
    const innerValue = ref(props.defaultValue ?? props.value ?? 0)
    const hoverValue = ref<number | null>(null)
    const focused = ref(false)

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => isControlled.value ? props.value! : innerValue.value)

    // Merge size from config
    const mergedSize = computed(() => props.size ?? config.value.componentSize)

    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    onMounted(() => {
      if (props.autoFocus) {
        containerRef.value?.focus()
      }
    })

    // Expose focus/blur methods
    expose({
      focus: () => containerRef.value?.focus(),
      blur: () => containerRef.value?.blur(),
    })

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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!props.keyboard || props.disabled) return
      emit('keydown', e)

      const { key } = e
      const val = currentValue.value

      if (key === 'ArrowRight' || key === 'ArrowUp') {
        e.preventDefault()
        const step = props.allowHalf ? 0.5 : 1
        const next = Math.min(val + step, props.count)
        setValue(next)
      } else if (key === 'ArrowLeft' || key === 'ArrowDown') {
        e.preventDefault()
        const step = props.allowHalf ? 0.5 : 1
        const next = Math.max(val - step, 0)
        setValue(next)
      }
    }

    const renderCharacter = (index: number) => {
      if (typeof props.character === 'function') {
        return props.character({ index, value: currentValue.value })
      }
      if (slots.character) {
        return slots.character({ index, value: currentValue.value })
      }
      return props.character
    }

    const renderStar = (index: number) => {
      const status = getStarStatus(index)
      const tooltipItem = props.tooltips?.[index]
      const char = renderCharacter(index)

      const starNode = (
        <li
          key={index}
          class={cls(`${prefixCls}-star`, {
            [`${prefixCls}-star-full`]: status === 'full',
            [`${prefixCls}-star-half`]: status === 'half',
            [`${prefixCls}-star-zero`]: status === 'zero',
          })}
          role="radio"
          aria-checked={status !== 'zero'}
          aria-posinset={index + 1}
          aria-setsize={props.count}
        >
          {props.allowHalf && (
            <div
              class={`${prefixCls}-star-first`}
              onClick={() => !props.disabled && handleClick(index, true)}
              onMousemove={() => !props.disabled && handleMouseMove(index, true)}
            >
              {char}
            </div>
          )}
          <div
            class={`${prefixCls}-star-second`}
            onClick={() => !props.disabled && handleClick(index, false)}
            onMousemove={() => !props.disabled && handleMouseMove(index, false)}
          >
            {char}
          </div>
        </li>
      )

      if (!tooltipItem) return starNode

      // Support both string and TooltipProps
      if (typeof tooltipItem === 'string') {
        return <Tooltip title={tooltipItem}>{starNode}</Tooltip>
      } else {
        return <Tooltip {...tooltipItem}>{starNode}</Tooltip>
      }
    }

    return () => {
      const stars = Array.from({ length: props.count }, (_, i) => i)

      return (
        <ul
          ref={containerRef}
          class={cls(prefixCls, {
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-small`]: mergedSize.value === 'small',
            [`${prefixCls}-large`]: mergedSize.value === 'large',
          })}
          onMouseleave={handleMouseLeave}
          onFocus={() => { focused.value = true; emit('focus') }}
          onBlur={() => { focused.value = false; emit('blur') }}
          onKeydown={handleKeyDown}
          tabindex={props.disabled ? -1 : 0}
          role="radiogroup"
        >
          {stars.map(renderStar)}
        </ul>
      )
    }
  },
})
