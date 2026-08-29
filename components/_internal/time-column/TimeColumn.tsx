import { defineComponent, ref, watch, nextTick, type PropType, type CSSProperties } from 'vue'
import { cls } from '../../_utils/cls'
import { pad } from '../../_utils/date'

export interface TimeColumnItem {
  value: number | string
  disabled: boolean
}

/**
 * 共享时间选择列组件
 * TimePicker 与 DatePicker(showTime) 共用：渲染一列可选值（时/分/秒/AM-PM），
 * 内置选中定位滚动（首挂载立即定位 + 值变化平滑滚动，RAF 节流 + 缓存避免重复滚动）。
 *
 * 输出「共享基础类 + 调用方前缀类」双类名：
 * - 基础类 `hmfw-picker-time-column` / `hmfw-picker-time-cell` 承载视觉样式（共享 CSS）
 * - 前缀类（colClass/cellClass）保留各组件历史类名，兼容既有自定义样式与测试断言
 */
export const TimeColumn = defineComponent({
  name: 'TimeColumn',
  props: {
    /** 调用方前缀列类名（如 `hmfw-time-picker-panel-column` / `hmfw-date-picker-time-column`） */
    colClass: { type: String, required: true },
    /** 调用方前缀单元格类名（如 `hmfw-time-picker-panel-cell` / `hmfw-date-picker-time-cell`） */
    cellClass: { type: String, required: true },
    /** 可选值列表 */
    items: { type: Array as PropType<TimeColumnItem[]>, default: () => [] },
    /** 当前选中值（用于定位滚动与选中态） */
    selectedValue: { type: [Number, String] as PropType<number | string>, default: 0 },
    /** 判断值是否选中（调用方自定义，如 12 小时制的等价判断） */
    isSelected: { type: Function as PropType<(value: number | string) => boolean>, default: undefined },
    /** 单元格点击回调 */
    onSelect: { type: Function as PropType<(value: number | string, disabled: boolean) => void>, default: undefined },
    /** 值显示格式化（默认数字补零） */
    formatValue: { type: Function as PropType<(value: number | string) => string>, default: undefined },
    /** 面板是否打开（仅打开时执行滚动定位） */
    active: { type: Boolean, default: true },
    /** 列容器自定义样式（透传调用方 styles.column） */
    style: { type: Object as PropType<CSSProperties>, default: undefined },
    /** 单元格自定义样式（透传调用方 styles.cell） */
    cellStyle: { type: Object as PropType<CSSProperties>, default: undefined },
  },
  setup(props) {
    const colRef = ref<HTMLElement>()
    // 性能优化：RAF 节流 + 值缓存避免密集重复滚动
    let rafId: number | undefined
    let lastScrolledValue: number | string | undefined

    /**
     * 将列滚动到指定值的位置（目标单元格滚动到容器顶部）
     * @param value - 目标值
     * @param immediate - true=立即跳转（无动画，首挂载用）；false=平滑滚动（值变化用）
     */
    const scrollToValue = (value: number | string, immediate = false) => {
      const col = colRef.value
      if (!col) return
      // 缓存检查：避免相同值重复滚动（immediate 模式跳过缓存，确保首挂载必滚动）
      if (!immediate && lastScrolledValue === value) return
      lastScrolledValue = value

      const doScroll = () => {
        const item = col.querySelector(`[data-value="${value}"]`) as HTMLElement
        if (item) {
          const targetScrollTop = item.offsetTop
          // 使用 scrollTo 实现平滑滚动；JSDOM 环境不支持 scrollTo，降级为直接设置 scrollTop
          if (immediate) {
            col.scrollTop = targetScrollTop
          } else if (typeof col.scrollTo === 'function') {
            col.scrollTo({ top: targetScrollTop, behavior: 'smooth' })
          } else {
            col.scrollTop = targetScrollTop
          }
        }
      }

      if (immediate) {
        doScroll()
      } else {
        // 平滑模式：RAF 节流，新请求取消上一次未执行的滚动
        if (rafId !== undefined) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          doScroll()
          rafId = undefined
        })
      }
    }

    // 首挂载：立即定位到选中项（无动画）
    watch(
      colRef,
      (el) => {
        if (el && props.active) {
          nextTick(() => scrollToValue(props.selectedValue, true))
        }
      },
      { flush: 'post' },
    )

    // 值变化：平滑滚动到新选中项（仅面板打开时）
    watch(
      () => [props.selectedValue, props.active],
      () => {
        if (props.active) {
          nextTick(() => scrollToValue(props.selectedValue, false))
        }
      },
    )

    const isItemSelected = (v: number | string) => (props.isSelected ? props.isSelected(v) : props.selectedValue === v)
    const format = props.formatValue ?? ((v: number | string) => (typeof v === 'number' ? pad(v) : String(v)))
    // 状态类前缀：取调用方 cellClass 的首个类名派生（如 hmfw-time-picker-panel-cell → -selected/-disabled），
    // 保留各组件历史状态类名，兼容既有测试断言与用户自定义样式
    const statePrefix = String(props.cellClass).split(' ')[0]

    return () => (
      <ul class={cls('hmfw-picker-time-column', props.colClass)} style={props.style} ref={colRef}>
        {props.items.map(({ value, disabled }) => {
          const selected = isItemSelected(value)
          return (
            <li
              key={value}
              data-value={value}
              class={cls('hmfw-picker-time-cell', props.cellClass, {
                'hmfw-picker-time-cell-selected': selected,
                'hmfw-picker-time-cell-disabled': disabled,
                [`${statePrefix}-selected`]: selected,
                [`${statePrefix}-disabled`]: disabled,
              })}
              style={props.cellStyle}
              onClick={() => props.onSelect?.(value, disabled)}
            >
              {format(value)}
            </li>
          )
        })}
      </ul>
    )
  },
})
