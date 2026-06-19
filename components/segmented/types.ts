import type { VNode, CSSProperties } from 'vue'
import type { TooltipProps } from '../tooltip'

export type SegmentedValue = string | number

export interface SegmentedOption {
  label?: string | VNode
  value: SegmentedValue
  disabled?: boolean
  icon?: VNode
  title?: string
  tooltip?: string | Omit<TooltipProps, 'title'>
  /** 单个选项的自定义类名 */
  className?: string
  /** 单个选项的自定义内联样式 */
  style?: CSSProperties
}

export type SegmentedRawOption = SegmentedValue

export type SegmentedOptions = (SegmentedRawOption | SegmentedOption)[]

/**
 * Segmented 组件语义化 classNames
 */
export interface SegmentedClassNames {
  /** 根节点 */
  root?: string
  /** 选项组容器 */
  group?: string
  /** 动画滑块 */
  thumb?: string
  /** 选项（label 元素） */
  item?: string
  /** 选中状态的选项 */
  itemSelected?: string
  /** 禁用状态的选项 */
  itemDisabled?: string
  /** 隐藏的 radio input */
  itemInput?: string
  /** 选项内容包裹层 */
  itemLabel?: string
  /** 选项图标 */
  itemIcon?: string
  /** 选项文本 */
  itemText?: string
}

/**
 * Segmented 组件语义化 styles
 */
export interface SegmentedStyles {
  /** 根节点 */
  root?: CSSProperties
  /** 选项组容器 */
  group?: CSSProperties
  /** 动画滑块 */
  thumb?: CSSProperties
  /** 选项（label 元素） */
  item?: CSSProperties
  /** 选中状态的选项 */
  itemSelected?: CSSProperties
  /** 禁用状态的选项 */
  itemDisabled?: CSSProperties
  /** 隐藏的 radio input */
  itemInput?: CSSProperties
  /** 选项内容包裹层 */
  itemLabel?: CSSProperties
  /** 选项图标 */
  itemIcon?: CSSProperties
  /** 选项文本 */
  itemText?: CSSProperties
}

export interface SegmentedProps {
  value?: SegmentedValue
  defaultValue?: SegmentedValue
  options?: SegmentedOptions
  disabled?: boolean
  block?: boolean
  size?: 'large' | 'middle' | 'small'
  vertical?: boolean
  orientation?: 'horizontal' | 'vertical'
  shape?: 'default' | 'round'
  name?: string
  /** 语义化结构 className */
  classNames?: SegmentedClassNames
  /** 语义化结构 style */
  styles?: SegmentedStyles
}
