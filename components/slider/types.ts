import type { CSSProperties, VNodeChild } from 'vue'

/**
 * 刻度标记值类型
 */
export type SliderMarkValue = string | { label: string | VNodeChild; style?: CSSProperties }

/**
 * 刻度标记映射类型
 */
export type SliderMarks = Record<number, SliderMarkValue>

/**
 * Tooltip 配置
 */
export interface SliderTooltipProps {
  /** 是否始终显示 Tooltip（undefined 时为 hover/drag 时显示） */
  open?: boolean
  /** 格式化 Tooltip 内容（null 则隐藏 Tooltip） */
  formatter?: ((value: number) => string) | null
  /** Tooltip 位置（未实现，保留接口） */
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

/**
 * Slider 组件属性
 */
export interface SliderProps {
  /** 当前值（受控模式） */
  value?: number | [number, number]
  /** 默认值（非受控模式） */
  defaultValue?: number | [number, number]
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长（null 时仅按 marks 吸附） */
  step?: number | null
  /** 是否禁用 */
  disabled?: boolean
  /** 是否为范围选择 */
  range?: boolean
  /** 是否垂直方向 */
  vertical?: boolean
  /** 是否反向 */
  reverse?: boolean
  /** 刻度标记 */
  marks?: SliderMarks
  /** Tooltip 配置 */
  tooltip?: SliderTooltipProps
  /** 是否填充已选区间 */
  included?: boolean
  /** 是否显示步长刻度点 */
  dots?: boolean
  /** 是否启用键盘导航 */
  keyboard?: boolean
}

/**
 * Slider 事件
 */
export interface SliderEmits {
  /** 值变化时触发（受控模式下同步更新） */
  (e: 'update:value', value: number | [number, number]): void
  /** 值变化时触发 */
  (e: 'change', value: number | [number, number]): void
  /** 拖拽结束时触发 */
  (e: 'afterChange', value: number | [number, number]): void
}
