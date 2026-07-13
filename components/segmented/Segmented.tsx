import { defineComponent, ref, computed, watch, onMounted, onBeforeUnmount, nextTick, useId, type PropType } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Tooltip } from '../tooltip'
import type {
  SegmentedOption,
  SegmentedValue,
  SegmentedOptions,
  SegmentedProps,
  SegmentedClassNames,
  SegmentedStyles,
} from './types'
import type { ComponentSize } from '../config-provider'

// 单一类型来源：接口增删字段时，satisfies 会在此处编译报错，强制同步
const segmentedProps = {
  value: { type: [String, Number] as PropType<SegmentedValue>, default: undefined },
  defaultValue: { type: [String, Number] as PropType<SegmentedValue>, default: undefined },
  options: { type: Array as PropType<SegmentedOptions>, default: () => [] },
  disabled: { type: Boolean, default: undefined },
  block: { type: Boolean, default: undefined },
  // size 无默认值，未传时在 mergedSize 中回退到 ConfigProvider 的 componentSize
  size: { type: String as PropType<ComponentSize>, default: undefined },
  vertical: { type: Boolean, default: undefined },
  orientation: { type: String as PropType<'horizontal' | 'vertical'>, default: undefined },
  shape: { type: String as PropType<'default' | 'round'>, default: 'default' },
  name: { type: String, default: undefined },
  classNames: { type: Object as PropType<SegmentedClassNames>, default: undefined },
  styles: { type: Object as PropType<SegmentedStyles>, default: undefined },
} satisfies Record<keyof SegmentedProps, any>

export const Segmented = defineComponent({
  name: 'Segmented',
  props: segmentedProps,
  emits: {
    'update:value': (value: SegmentedValue) => value !== undefined,
    change: (value: SegmentedValue) => value !== undefined,
  },
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('segmented')
    const config = useConfig()
    const groupRef = ref<HTMLDivElement>()
    const thumbRef = ref<HTMLDivElement>()

    // Normalize options to SegmentedOption[]
    const normalizeOptions = computed((): SegmentedOption[] =>
      props.options.map((opt) => (typeof opt === 'object' ? opt : { label: String(opt), value: opt })),
    )

    // size 优先级：显式 prop > ConfigProvider 的 componentSize > 兜底 'middle'
    const mergedSize = computed<ComponentSize>(() => props.size ?? config.value.componentSize ?? 'middle')

    // 非受控内部值
    const innerValue = ref<SegmentedValue | undefined>(props.defaultValue ?? props.value)

    const isControlled = computed(() => props.value !== undefined)
    // 当前生效值：受控取 props.value，非受控取内部值；均缺省时兜底首个可用选项
    const currentValue = computed<SegmentedValue | undefined>(() => {
      const val = isControlled.value ? props.value : innerValue.value
      if (val !== undefined) return val
      return normalizeOptions.value[0]?.value
    })

    // 同步受控值到内部状态，保证由受控切回非受控时保留最后选中项
    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    // Determine vertical orientation (orientation takes priority over vertical)
    const isVertical = computed(() => {
      if (props.orientation) return props.orientation === 'vertical'
      return !!props.vertical
    })

    // 为 radio group 生成 SSR 稳定且唯一的 name
    const autoName = `segmented-${useId()}`
    const radioName = computed(() => props.name || autoName)

    // Handle selection
    const handleSelect = (opt: SegmentedOption, index: number) => {
      if (props.disabled || opt.disabled) return
      // 受控模式下不主动改内部状态，交由父级更新 value 后经 watch 驱动，避免视觉与真实值不一致
      if (!isControlled.value) {
        innerValue.value = opt.value
        nextTick(() => updateThumbPosition(index))
      }
      emit('update:value', opt.value)
      emit('change', opt.value)
    }

    // 从 startIndex 出发，按 step 方向寻找下一个未禁用选项的索引，找不到返回 -1
    const findEnabledIndex = (startIndex: number, step: number): number => {
      const options = normalizeOptions.value
      for (let i = startIndex; i >= 0 && i < options.length; i += step) {
        if (!options[i].disabled) return i
      }
      return -1
    }

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent, opt: SegmentedOption, index: number) => {
      if (props.disabled || opt.disabled) return
      const isHorizontal = !isVertical.value
      const isRtl = config.value.direction === 'rtl'

      let step = 0
      if ((isHorizontal && e.key === 'ArrowRight') || (!isHorizontal && e.key === 'ArrowDown')) {
        step = isRtl && isHorizontal ? -1 : 1
      } else if ((isHorizontal && e.key === 'ArrowLeft') || (!isHorizontal && e.key === 'ArrowUp')) {
        step = isRtl && isHorizontal ? 1 : -1
      }

      if (step === 0) return
      // 跳过连续禁用项，落到下一个可用选项
      const nextIndex = findEnabledIndex(index + step, step)
      if (nextIndex >= 0) {
        e.preventDefault()
        handleSelect(normalizeOptions.value[nextIndex], nextIndex)
        // Focus the next radio input
        const inputs = groupRef.value?.querySelectorAll('input[type="radio"]')
        const nextInput = inputs?.[nextIndex] as HTMLInputElement | undefined
        nextInput?.focus()
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

    // 隐藏滑块：当前值无匹配选项时（如选项异步替换后旧值成为孤儿值），
    // 将滑块尺寸归零，避免其停留在过时尺寸导致宽/高大于实际选项
    const hideThumb = () => {
      if (!thumbRef.value) return
      if (isVertical.value) {
        thumbRef.value.style.height = '0'
      } else {
        thumbRef.value.style.width = '0'
      }
    }

    // 重新对齐当前选中项的滑块（用于尺寸/容器变化时）
    const realignThumb = () => {
      const selectedIndex = normalizeOptions.value.findIndex((opt) => opt.value === currentValue.value)
      if (selectedIndex >= 0) {
        updateThumbPosition(selectedIndex)
      } else {
        hideThumb()
      }
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

    // 监听 value / 选项 / 方向变化以更新滑块（受控与非受控统一由 currentValue 驱动）
    watch([currentValue, normalizeOptions, isVertical], () => {
      nextTick(() => realignThumb())
    })

    // 渲染选项内容（图标 + 文本）
    const renderItemContent = (opt: SegmentedOption) => {
      const hasIcon = !!opt.icon
      // 空字符串同样视为“无文本”，使 icon-only 布局生效
      const hasLabel = opt.label !== undefined && opt.label !== null && opt.label !== ''

      return (
        <div
          class={cls(`${prefixCls}-item-label`, props.classNames?.itemLabel, {
            // 仅有图标时使用专用类，使其呈正方形并居中
            [`${prefixCls}-item-icon-only`]: hasIcon && !hasLabel,
          })}
          style={props.styles?.itemLabel}
        >
          {hasIcon && (
            <span class={cls(`${prefixCls}-item-icon`, props.classNames?.itemIcon)} style={props.styles?.itemIcon}>
              {opt.icon}
            </span>
          )}
          {hasLabel && (
            <span class={cls(`${prefixCls}-item-text`, props.classNames?.itemText)} style={props.styles?.itemText}>
              {opt.label}
            </span>
          )}
        </div>
      )
    }

    // Render item (with optional tooltip)
    const renderItem = (opt: SegmentedOption, index: number) => {
      const isSelected = opt.value === currentValue.value
      const isDisabled = props.disabled || opt.disabled
      const hasIcon = !!opt.icon
      const hasLabel = opt.label !== undefined && opt.label !== null && opt.label !== ''
      // 纯图标选项无可见文本，补 aria-label 供屏幕阅读器识别
      const ariaLabel = hasIcon && !hasLabel ? (opt.title ?? String(opt.value)) : undefined

      const itemNode = (
        <label
          key={opt.value}
          class={cls(
            `${prefixCls}-item`,
            opt.className,
            props.classNames?.item,
            {
              [`${prefixCls}-item-selected`]: isSelected,
              [`${prefixCls}-item-disabled`]: isDisabled,
            },
            isSelected && props.classNames?.itemSelected,
            isDisabled && props.classNames?.itemDisabled,
          )}
          style={{
            ...opt.style,
            ...props.styles?.item,
            ...(isSelected ? props.styles?.itemSelected : {}),
            ...(isDisabled ? props.styles?.itemDisabled : {}),
          }}
          title={opt.title}
        >
          <input
            type="radio"
            class={cls(`${prefixCls}-item-input`, props.classNames?.itemInput)}
            style={props.styles?.itemInput}
            name={radioName.value}
            value={opt.value}
            checked={isSelected}
            disabled={isDisabled}
            aria-label={ariaLabel}
            onChange={() => handleSelect(opt, index)}
            onKeydown={(e) => handleKeyDown(e, opt, index)}
          />
          {renderItemContent(opt)}
        </label>
      )

      // Wrap with tooltip if specified；key 挂在每个分支的最外层节点，避免列表 key 混用
      if (opt.tooltip) {
        const tooltipProps = typeof opt.tooltip === 'string' ? { title: opt.tooltip } : opt.tooltip
        return (
          <Tooltip key={opt.value} {...tooltipProps}>
            {itemNode}
          </Tooltip>
        )
      }

      // 非 tooltip 分支：itemNode 的 <label> 已带 key，直接返回
      return itemNode
    }

    return () => (
      <div
        role="radiogroup"
        class={cls(prefixCls, props.classNames?.root, `${prefixCls}-${mergedSize.value}`, {
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-block`]: props.block,
          [`${prefixCls}-vertical`]: isVertical.value,
          [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
          [`${prefixCls}-shape-${props.shape}`]: props.shape === 'round',
        })}
        style={props.styles?.root}
      >
        <div ref={groupRef} class={cls(`${prefixCls}-group`, props.classNames?.group)} style={props.styles?.group}>
          {/* Animated thumb */}
          <div ref={thumbRef} class={cls(`${prefixCls}-thumb`, props.classNames?.thumb)} style={props.styles?.thumb} />
          {/* Items */}
          {normalizeOptions.value.map((opt, index) => renderItem(opt, index))}
        </div>
      </div>
    )
  },
})
