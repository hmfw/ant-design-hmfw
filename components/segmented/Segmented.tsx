import { defineComponent, ref, computed, watch, onMounted, onBeforeUnmount, nextTick, type PropType } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Tooltip } from '../tooltip'
import type { SegmentedOption, SegmentedValue, SegmentedOptions } from './types'

export const Segmented = defineComponent({
  name: 'Segmented',
  props: {
    value: [String, Number] as PropType<SegmentedValue>,
    defaultValue: [String, Number] as PropType<SegmentedValue>,
    options: {
      type: Array as PropType<SegmentedOptions>,
      default: () => [],
    },
    disabled: Boolean,
    block: Boolean,
    size: { type: String as PropType<'large' | 'middle' | 'small'>, default: 'middle' },
    vertical: Boolean,
    orientation: String as PropType<'horizontal' | 'vertical'>,
    shape: { type: String as PropType<'default' | 'round'>, default: 'default' },
    name: String,
  },
  emits: ['update:value', 'change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('segmented')
    const config = useConfig()
    const groupRef = ref<HTMLDivElement>()
    const thumbRef = ref<HTMLDivElement>()

    // Normalize options to SegmentedOption[]
    const normalizeOptions = computed((): SegmentedOption[] =>
      props.options.map((opt) => (typeof opt === 'object' ? opt : { label: String(opt), value: opt })),
    )

    // Determine initial value
    const defaultVal = props.defaultValue ?? props.value ?? normalizeOptions.value[0]?.value
    const innerValue = ref<SegmentedValue | undefined>(defaultVal)

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => (isControlled.value ? props.value : innerValue.value))

    // Sync controlled value
    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    // Determine vertical orientation (orientation takes priority over vertical)
    const isVertical = computed(() => {
      if (props.orientation) return props.orientation === 'vertical'
      return props.vertical
    })

    // Generate unique name for radio group
    const radioName = computed(() => props.name || `segmented-${Math.random().toString(36).slice(2, 9)}`)

    // Handle selection
    const handleSelect = (opt: SegmentedOption, index: number) => {
      if (props.disabled || opt.disabled) return
      innerValue.value = opt.value
      emit('update:value', opt.value)
      emit('change', opt.value)
      nextTick(() => updateThumbPosition(index))
    }

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent, opt: SegmentedOption, index: number) => {
      if (props.disabled || opt.disabled) return
      const options = normalizeOptions.value
      const isHorizontal = !isVertical.value
      const isRtl = config.value.direction === 'rtl'

      let nextIndex = -1
      if ((isHorizontal && e.key === 'ArrowRight') || (!isHorizontal && e.key === 'ArrowDown')) {
        nextIndex = isRtl && isHorizontal ? index - 1 : index + 1
      } else if ((isHorizontal && e.key === 'ArrowLeft') || (!isHorizontal && e.key === 'ArrowUp')) {
        nextIndex = isRtl && isHorizontal ? index + 1 : index - 1
      }

      if (nextIndex >= 0 && nextIndex < options.length) {
        e.preventDefault()
        const nextOpt = options[nextIndex]
        if (!nextOpt.disabled) {
          handleSelect(nextOpt, nextIndex)
          // Focus the next radio input
          const inputs = groupRef.value?.querySelectorAll('input[type="radio"]')
          if (inputs?.[nextIndex]) {
            ;(inputs[nextIndex] as HTMLInputElement).focus()
          }
        }
      }
    }

    // 更新滑块位置与尺寸
    // 使用 getBoundingClientRect 而非 offsetLeft/offsetWidth：
    // 1. 提供亚像素精度，避免整数取整带来的位置偏差
    // 2. 当选项被 Tooltip 触发节点包裹时，offsetParent 可能不是 group，
    //    导致 offsetLeft 计算错位；相对 group 的 rect 计算可消除该偏差
    const updateThumbPosition = (selectedIndex: number) => {
      if (!thumbRef.value || !groupRef.value) return
      const items = groupRef.value.querySelectorAll(`.${prefixCls}-item`)
      const selectedItem = items[selectedIndex] as HTMLElement
      if (!selectedItem) return

      const groupRect = groupRef.value.getBoundingClientRect()
      const itemRect = selectedItem.getBoundingClientRect()

      if (isVertical.value) {
        // 相对 group 顶部的偏移，扣除 group 自身可能的滚动
        const offsetTop = itemRect.top - groupRect.top + groupRef.value.scrollTop
        thumbRef.value.style.transform = `translateY(${offsetTop}px)`
        thumbRef.value.style.height = `${itemRect.height}px`
        thumbRef.value.style.width = '100%'
      } else {
        const offsetLeft = itemRect.left - groupRect.left + groupRef.value.scrollLeft
        thumbRef.value.style.transform = `translateX(${offsetLeft}px)`
        thumbRef.value.style.width = `${itemRect.width}px`
        thumbRef.value.style.height = '100%'
      }
    }

    // 重新对齐当前选中项的滑块（用于尺寸/容器变化时）
    const realignThumb = () => {
      const selectedIndex = normalizeOptions.value.findIndex((opt) => opt.value === currentValue.value)
      if (selectedIndex >= 0) updateThumbPosition(selectedIndex)
    }

    // 监听容器尺寸变化，自动重新计算滑块（block 模式 / 窗口缩放 / 字体加载）
    let resizeObserver: ResizeObserver | null = null

    // 初始化滑块位置
    onMounted(() => {
      realignThumb()
      if (groupRef.value && typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          // 在下一帧重新对齐，避免与布局阶段冲突
          nextTick(() => realignThumb())
        })
        resizeObserver.observe(groupRef.value)
      }
    })

    onBeforeUnmount(() => {
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
    })

    // 监听 value / 选项 / 方向变化以更新滑块
    watch([currentValue, normalizeOptions, isVertical], () => {
      nextTick(() => realignThumb())
    })

    // 渲染选项内容（图标 + 文本）
    const renderItemContent = (opt: SegmentedOption) => {
      const hasIcon = !!opt.icon
      const hasLabel = opt.label !== undefined && opt.label !== null

      return (
        <div
          class={cls(`${prefixCls}-item-label`, {
            // 仅有图标时使用专用类，使其呈正方形并居中
            [`${prefixCls}-item-icon-only`]: hasIcon && !hasLabel,
          })}
        >
          {hasIcon && <span class={`${prefixCls}-item-icon`}>{opt.icon}</span>}
          {hasLabel && <span class={`${prefixCls}-item-text`}>{opt.label}</span>}
        </div>
      )
    }

    // Render item (with optional tooltip)
    const renderItem = (opt: SegmentedOption, index: number) => {
      const isSelected = opt.value === currentValue.value
      const isDisabled = props.disabled || opt.disabled

      const itemNode = (
        <label
          key={opt.value}
          class={cls(`${prefixCls}-item`, opt.className, {
            [`${prefixCls}-item-selected`]: isSelected,
            [`${prefixCls}-item-disabled`]: isDisabled,
          })}
          style={opt.style}
          title={opt.title}
        >
          <input
            type="radio"
            class={`${prefixCls}-item-input`}
            name={radioName.value}
            value={opt.value}
            checked={isSelected}
            disabled={isDisabled}
            onChange={() => handleSelect(opt, index)}
            onKeydown={(e) => handleKeyDown(e, opt, index)}
          />
          {renderItemContent(opt)}
        </label>
      )

      // Wrap with tooltip if specified
      if (opt.tooltip) {
        const tooltipProps = typeof opt.tooltip === 'string' ? { title: opt.tooltip } : opt.tooltip
        return <Tooltip {...tooltipProps}>{itemNode}</Tooltip>
      }

      return itemNode
    }

    return () => (
      <div
        class={cls(prefixCls, `${prefixCls}-${props.size}`, {
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-block`]: props.block,
          [`${prefixCls}-vertical`]: isVertical.value,
          [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
          [`${prefixCls}-shape-${props.shape}`]: props.shape === 'round',
        })}
      >
        <div ref={groupRef} class={`${prefixCls}-group`}>
          {/* Animated thumb */}
          <div ref={thumbRef} class={`${prefixCls}-thumb`} />
          {/* Items */}
          {normalizeOptions.value.map((opt, index) => renderItem(opt, index))}
        </div>
      </div>
    )
  },
})
