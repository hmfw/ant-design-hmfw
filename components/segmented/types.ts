import type { VNode } from 'vue'
import type { TooltipProps } from '../tooltip'

export type SegmentedValue = string | number

export interface SegmentedOption {
  label?: string | VNode
  value: SegmentedValue
  disabled?: boolean
  icon?: VNode
  title?: string
  tooltip?: string | Omit<TooltipProps, 'title'>
  className?: string
}

export type SegmentedRawOption = SegmentedValue

export type SegmentedOptions = (SegmentedRawOption | SegmentedOption)[]

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
}
