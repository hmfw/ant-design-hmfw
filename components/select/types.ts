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

/** 选项过滤：false 关闭本地过滤，或自定义匹配函数 */
export type SelectFilterOption = boolean | ((input: string, option: SelectOption) => boolean)

/** 超出 maxTagCount 时的折叠标签占位内容 */
export type SelectMaxTagPlaceholder = string | ((omittedValues: (string | number)[]) => string)

/** 自定义下拉选项渲染 */
export type SelectOptionRender = (option: SelectOption, info: { index: number }) => any

/** 自定义选中项标签渲染 */
export type SelectLabelRender = (props: LabeledValue) => any

/** tagRender 回调参数 */
export interface SelectTagRenderProps {
  label: string
  value: string | number
  closable: boolean
  onClose: () => void
}

/** 自定义标签渲染（多选 / tags 模式） */
export type SelectTagRender = (props: SelectTagRenderProps) => any

/** options 数据字段映射 */
export interface SelectFieldNames {
  label?: string
  value?: string
  options?: string
  /** 分组标题字段，缺省时复用 label 字段 */
  groupLabel?: string
}

export interface SelectProps {
  // 数据与取值
  value?: SelectValue
  options?: SelectOption[]
  fieldNames?: SelectFieldNames
  labelInValue?: boolean
  // 模式与状态
  mode?: SelectMode
  size?: SelectSize
  status?: SelectStatus
  disabled?: boolean
  loading?: boolean
  // 展现与交互
  placeholder?: string
  allowClear?: boolean
  open?: boolean
  dropdownMatchSelectWidth?: boolean | number
  // 搜索
  showSearch?: boolean
  filterOption?: SelectFilterOption
  autoClearSearchValue?: boolean
  notFoundContent?: string
  // 多选 / 标签
  maxCount?: number
  maxTagCount?: number
  maxTagPlaceholder?: SelectMaxTagPlaceholder
  tokenSeparators?: string[]
  // 自定义渲染
  optionRender?: SelectOptionRender
  labelRender?: SelectLabelRender
  tagRender?: SelectTagRender
  // 虚拟滚动
  virtual?: boolean
  /** 下拉可视区高度，仅 virtual 开启时生效；普通模式由 CSS 控制 */
  listHeight?: number
  /** 每个选项固定行高，仅 virtual 开启时生效，要求所有选项等高 */
  listItemHeight?: number
  // 语义化 API
  /** 语义化 className */
  classNames?: SelectClassNames
  /** 语义化 style */
  styles?: SelectStyles
}
