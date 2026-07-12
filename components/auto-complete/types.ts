import type { VNodeChild, CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export interface AutoCompleteOption {
  value: string
  label?: string
  disabled?: boolean
}

export type AutoCompleteAllowClear = boolean | { clearIcon?: VNodeChild }

/**
 * AutoComplete 各部分的语义化 className
 */
export interface AutoCompleteClassNames {
  /** 根节点（输入框容器） */
  root?: string
  /** 前缀容器 */
  prefix?: string
  /** 输入框 */
  input?: string
  /** 清除图标 */
  clear?: string
  /** 后缀容器 */
  suffix?: string
  /** 下拉面板 */
  dropdown?: string
  /** 选项 */
  option?: string
  /** 空状态内容 */
  empty?: string
}

/**
 * AutoComplete 各部分的语义化 style
 */
export interface AutoCompleteStyles {
  /** 根节点（输入框容器） */
  root?: CSSProperties
  /** 前缀容器 */
  prefix?: CSSProperties
  /** 输入框 */
  input?: CSSProperties
  /** 清除图标 */
  clear?: CSSProperties
  /** 后缀容器 */
  suffix?: CSSProperties
  /** 下拉面板 */
  dropdown?: CSSProperties
  /** 选项 */
  option?: CSSProperties
  /** 空状态内容 */
  empty?: CSSProperties
}

export interface AutoCompleteProps {
  value?: string
  defaultValue?: string
  options?: AutoCompleteOption[]
  disabled?: boolean
  placeholder?: string
  allowClear?: AutoCompleteAllowClear
  size?: ComponentSize
  status?: 'error' | 'warning' | ''
  filterOption?: boolean | ((inputValue: string, option: AutoCompleteOption) => boolean)
  backfill?: boolean
  /** Whether the first option is highlighted by default. @default true */
  defaultActiveFirstOption?: boolean
  /** Initial open state of dropdown. */
  defaultOpen?: boolean
  open?: boolean
  /** 语义化 className */
  classNames?: AutoCompleteClassNames
  /** 语义化 style */
  styles?: AutoCompleteStyles

  // ----------------------------------------------------------------
  // 虚拟滚动
  // ----------------------------------------------------------------

  /** 是否启用虚拟滚动（默认 false，大数据量时开启） */
  virtual?: boolean
  /** 下拉列表容器高度（px），默认 256 */
  listHeight?: number
  /** 下拉列表项高度（px），默认 32 */
  listItemHeight?: number
}
