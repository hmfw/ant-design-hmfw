import { defineComponent, ref, computed, watch, onMounted, type PropType } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Tooltip } from '../tooltip'
import type { RateCharacterRenderContext, RateClassNames, RateStyles } from './types'
import type { ComponentSize } from '../config-provider'
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
    character: {
      type: [String, Function] as PropType<string | ((ctx: RateCharacterRenderContext) => any)>,
      default: '★',
    },
    tooltips: Array as PropType<(string | TooltipProps)[]>,
    size: String as PropType<ComponentSize>,
    keyboard: { type: Boolean, default: true },
    autoFocus: Boolean,
    classNames: Object as PropType<RateClassNames>,
    styles: Object as PropType<RateStyles>,
  },
  emits: ['update:value', 'change', 'hoverChange', 'focus', 'blur', 'keydown'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('rate')
    const config = useConfig()
    const containerRef = ref<HTMLUListElement>()
    const starRefs = ref<(HTMLElement | null)[]>([])
    const innerValue = ref(props.defaultValue ?? props.value ?? 0)
    const hoverValue = ref<number | null>(null)
    const cleanedValue = ref<number | null>(null)
    const focused = ref(false)

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => (isControlled.value ? props.value! : innerValue.value))

    // 从 ConfigProvider 合并默认尺寸
    const mergedSize = computed(() => props.size ?? config.value.componentSize)
    // RTL 支持：rtl 下方向键语义反向
    const isRTL = computed(() => config.value.direction === 'rtl')

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    onMounted(() => {
      if (props.autoFocus) {
        containerRef.value?.focus()
      }
    })

    expose({
      focus: () => containerRef.value?.focus(),
      blur: () => containerRef.value?.blur(),
    })

    // 获取星星元素的引用
    const setStarRef = (index: number) => (el: any) => {
      if (el) {
        starRefs.value[index] = el
      }
    }

    // 根据鼠标位置精确计算星星值（支持半星）
    const getStarValue = (index: number, pageX: number): number => {
      const reverse = isRTL.value
      let starValue = index + 1

      if (props.allowHalf) {
        const starEle = starRefs.value[index]
        if (starEle) {
          const rect = starEle.getBoundingClientRect()
          const leftDis = rect.left + window.scrollX
          const width = starEle.clientWidth
          const offsetX = pageX - leftDis

          if (reverse && offsetX > width / 2) {
            starValue -= 0.5
          } else if (!reverse && offsetX < width / 2) {
            starValue -= 0.5
          }
        }
      }

      return starValue
    }

    const setValue = (v: number) => {
      if (props.disabled) return
      innerValue.value = v
      emit('update:value', v)
      emit('change', v)
    }

    const handleClick = (event: MouseEvent, index: number) => {
      if (props.disabled) return

      const newValue = getStarValue(index, event.pageX)
      let isReset = false

      if (props.allowClear) {
        isReset = newValue === currentValue.value
      }

      // 清除 hover 状态
      hoverValue.value = null
      emit('hoverChange', undefined)

      // 设置新值或重置
      setValue(isReset ? 0 : newValue)
      cleanedValue.value = isReset ? newValue : null
    }

    const handleMouseMove = (event: MouseEvent, index: number) => {
      if (props.disabled) return

      const v = getStarValue(index, event.pageX)
      if (v !== cleanedValue.value) {
        if (hoverValue.value !== v) {
          hoverValue.value = v
          emit('hoverChange', v)
        }
        cleanedValue.value = null
      }
    }

    const handleMouseLeave = () => {
      if (props.disabled) return
      hoverValue.value = null
      cleanedValue.value = null
      emit('hoverChange', undefined)
    }

    const displayValue = computed(() => hoverValue.value ?? currentValue.value)

    const getStarStatus = (index: number) => {
      const val = displayValue.value
      const full = index + 1
      const half = index + 0.5

      // 焦点状态：value=0 时第一颗星获得焦点，或当前值对应的星获得焦点
      const isFocused = focused.value && (val === 0 ? index === 0 : full === val)

      let status: 'full' | 'half' | 'zero' = 'zero'
      if (val >= full) {
        status = 'full'
      } else if (props.allowHalf && val >= half) {
        status = 'half'
      }

      return { status, isFocused }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!props.keyboard || props.disabled) return
      emit('keydown', e)

      const { key } = e
      const val = currentValue.value
      const step = props.allowHalf ? 0.5 : 1
      const reverse = isRTL.value

      let shouldPrevent = false
      let nextValue = val

      // RTL 下左右方向键语义反转
      if (key === 'ArrowRight' && !reverse && val < props.count) {
        nextValue = val + step
        shouldPrevent = true
      } else if (key === 'ArrowLeft' && !reverse && val > 0) {
        nextValue = val - step
        shouldPrevent = true
      } else if (key === 'ArrowRight' && reverse && val > 0) {
        nextValue = val - step
        shouldPrevent = true
      } else if (key === 'ArrowLeft' && reverse && val < props.count) {
        nextValue = val + step
        shouldPrevent = true
      } else if (key === 'ArrowUp' && val < props.count) {
        nextValue = val + step
        shouldPrevent = true
      } else if (key === 'ArrowDown' && val > 0) {
        nextValue = val - step
        shouldPrevent = true
      }

      if (shouldPrevent && nextValue !== val) {
        e.preventDefault()
        setValue(nextValue)
      }
    }

    const renderCharacter = (index: number, isHalf: boolean) => {
      const ctx: RateCharacterRenderContext = { index, value: currentValue.value, isHalf }
      if (typeof props.character === 'function') {
        return props.character(ctx)
      }
      if (slots.character) {
        return slots.character(ctx)
      }
      return props.character
    }

    const renderStar = (index: number) => {
      const { status, isFocused } = getStarStatus(index)
      const tooltipItem = props.tooltips?.[index]
      // const starValue = index + 1
      const isActive = status === 'half' || status === 'full'

      const starNode = (
        <li
          ref={setStarRef(index)}
          key={index}
          class={cls(
            `${prefixCls}-star`,
            {
              [`${prefixCls}-star-full`]: status === 'full',
              [`${prefixCls}-star-half`]: status === 'half',
              [`${prefixCls}-star-zero`]: status === 'zero',
              [`${prefixCls}-star-active`]: isActive,
              [`${prefixCls}-star-focused`]: isFocused,
            },
            props.classNames?.star,
          )}
          style={props.styles?.star}
        >
          <div
            onClick={(e) => handleClick(e as any, index)}
            onMousemove={(e) => handleMouseMove(e as any, index)}
            role="radio"
            aria-checked={displayValue.value > index ? 'true' : 'false'}
            aria-posinset={index + 1}
            aria-setsize={props.count}
            tabindex={props.disabled ? -1 : 0}
          >
            <div class={cls(`${prefixCls}-star-first`, props.classNames?.starFirst)} style={props.styles?.starFirst}>
              {renderCharacter(index, true)}
            </div>
            <div class={cls(`${prefixCls}-star-second`, props.classNames?.starSecond)} style={props.styles?.starSecond}>
              {renderCharacter(index, false)}
            </div>
          </div>
        </li>
      )

      if (!tooltipItem) return starNode

      // tooltips 支持 string 与 TooltipProps 两种形式
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
          class={cls(
            prefixCls,
            {
              [`${prefixCls}-disabled`]: props.disabled,
              [`${prefixCls}-small`]: mergedSize.value === 'small',
              [`${prefixCls}-large`]: mergedSize.value === 'large',
              [`${prefixCls}-rtl`]: isRTL.value,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
          onMouseleave={handleMouseLeave}
          onFocus={() => {
            focused.value = true
            emit('focus')
          }}
          onBlur={() => {
            focused.value = false
            emit('blur')
          }}
          onKeydown={handleKeyDown}
          tabindex={props.disabled ? -1 : 0}
          role="radiogroup"
          dir={isRTL.value ? 'rtl' : undefined}
          aria-disabled={props.disabled || undefined}
        >
          {stars.map(renderStar)}
        </ul>
      )
    }
  },
})
