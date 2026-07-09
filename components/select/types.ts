import type { CSSProperties } from 'vue'

export type SelectSize = 'small' | 'middle' | 'large'
export type SelectMode = 'multiple' | 'tags'
export type SelectStatus = 'error' | 'warning'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
  title?: string
  // OptGroup support
  options?: SelectOption[]
}

export interface LabeledValue {
  value: string | number
  label: string
  key?: string
}

export type SelectValue = string | number | (string | number)[] | LabeledValue | LabeledValue[] | undefined

/**
 * Select 各部分的语义化 className
 */
export interface SelectClassNames {
  /** 根节点 div.hmfw-select */
  root?: string
  /** 选择器容器 div.hmfw-select-selector */
  selector?: string
  /** 已选项 span.hmfw-select-selection-item（多选模式下为标签） */
  item?: string
  /** 占位符 span.hmfw-select-selection-placeholder */
  placeholder?: string
  /** 后缀箭头容器 div.hmfw-select-arrow */
  arrow?: string
  /** 清除按钮 span.hmfw-select-clear */
  clear?: string
  /** 下拉面板 div.hmfw-select-dropdown */
  dropdown?: string
  /** 选项 div.hmfw-select-item-option */
  option?: string
  /** 选项内容 div.hmfw-select-item-option-content */
  optionLabel?: string
  /** 选项选中状态图标 span.hmfw-select-item-option-state */
  optionState?: string
}

/**
 * Select 各部分的语义化 style
 */
export interface SelectStyles {
  /** 根节点 div.hmfw-select */
  root?: CSSProperties
  /** 选择器容器 div.hmfw-select-selector */
  selector?: CSSProperties
  /** 已选项 span.hmfw-select-selection-item */
  item?: CSSProperties
  /** 占位符 span.hmfw-select-selection-placeholder */
  placeholder?: CSSProperties
  /** 后缀箭头容器 div.hmfw-select-arrow */
  arrow?: CSSProperties
  /** 清除按钮 span.hmfw-select-clear */
  clear?: CSSProperties
  /** 下拉面板 div.hmfw-select-dropdown */
  dropdown?: CSSProperties
  /** 选项 div.hmfw-select-item-option */
  option?: CSSProperties
  /** 选项内容 div.hmfw-select-item-option-content */
  optionLabel?: CSSProperties
  /** 选项选中状态图标 span.hmfw-select-item-option-state */
  optionState?: CSSProperties
}

export interface SelectProps {
  value?: SelectValue
  defaultValue?: SelectValue
  options?: SelectOption[]
  mode?: SelectMode
  size?: SelectSize
  status?: SelectStatus
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  allowClear?: boolean
  showSearch?: boolean
  filterOption?: boolean | ((input: string, option: SelectOption) => boolean)
  notFoundContent?: string
  maxTagCount?: number
  maxCount?: number
  maxTagPlaceholder?: string | ((omittedValues: (string | number)[]) => string)
  open?: boolean
  dropdownMatchSelectWidth?: boolean | number
  labelInValue?: boolean
  tokenSeparators?: string[]
  optionRender?: (option: SelectOption, info: { index: number }) => any
  labelRender?: (props: LabeledValue) => any
  tagRender?: (props: { label: string; value: string | number; closable: boolean; onClose: () => void }) => any
  autoClearSearchValue?: boolean
  fieldNames?: {
    label?: string
    value?: string
    options?: string
  }
  virtual?: boolean
  listHeight?: number
  listItemHeight?: number
  /** 语义化 className */
  classNames?: SelectClassNames
  /** 语义化 style */
  styles?: SelectStyles
}
