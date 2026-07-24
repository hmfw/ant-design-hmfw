import type { CSSProperties, VNodeChild } from 'vue'

/**
 * Slider 取值类型：单值或 [起, 止] 范围
 */
export type SliderValue = number | [number, number]

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
 * Slider 各部分的语义化 className
 */
export interface SliderClassNames {
  /** 根节点 div.hmfw-slider */
  root?: string
  /** 轨道容器 div.hmfw-slider-rail */
  rail?: string
  /** 已选区间填充 div.hmfw-slider-track */
  track?: string
  /** 滑块手柄 div.hmfw-slider-handle */
  handle?: string
  /** 刻度点 span.hmfw-slider-dot */
  dot?: string
  /** 刻度标签容器 div.hmfw-slider-mark */
  mark?: string
  /** 单个刻度文本 span.hmfw-slider-mark-text */
  markText?: string
  /** 手柄提示框 div.hmfw-slider-tooltip */
  tooltip?: string
}

/**
 * Slider 各部分的语义化 style
 */
export interface SliderStyles {
  /** 根节点 div.hmfw-slider */
  root?: CSSProperties
  /** 轨道容器 div.hmfw-slider-rail */
  rail?: CSSProperties
  /** 已选区间填充 div.hmfw-slider-track */
  track?: CSSProperties
  /** 滑块手柄 div.hmfw-slider-handle */
  handle?: CSSProperties
  /** 刻度点 span.hmfw-slider-dot */
  dot?: CSSProperties
  /** 刻度标签容器 div.hmfw-slider-mark */
  mark?: CSSProperties
  /** 单个刻度文本 span.hmfw-slider-mark-text */
  markText?: CSSProperties
  /** 手柄提示框 div.hmfw-slider-tooltip */
  tooltip?: CSSProperties
}

/**
 * Slider 组件属性
 */
export interface SliderProps {
  /** 当前值（受控模式） */
  value?: SliderValue
  /** 默认值（非受控模式） */
  defaultValue?: SliderValue
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
  /** 语义化 className */
  classNames?: SliderClassNames
  /** 语义化 style */
  styles?: SliderStyles
}

/**
 * Slider 值变化回调（change / update:value）
 */
export type SliderChangeHandler = (value: SliderValue) => void

/**
 * Slider 拖拽结束回调（afterChange）
 */
export type SliderAfterChangeHandler = (value: SliderValue) => void

/**
 * Slider 事件
 */
export interface SliderEmits {
  /** 值变化时触发（受控模式下同步更新） */
  (e: 'update:value', value: SliderValue): void
  /** 值变化时触发 */
  (e: 'change', value: SliderValue): void
  /** 拖拽结束时触发 */
  (e: 'afterChange', value: SliderValue): void
}
