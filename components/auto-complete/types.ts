import type { VNodeChild, CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export interface AutoCompleteOption {
  /** 选项的值，同时作为选中后回填到输入框的内容 */
  value: string
  /** 选项的展示内容，支持富文本节点；缺省时回退展示 value */
  label?: VNodeChild
  /** 是否禁用该选项 */
  disabled?: boolean
}

export type AutoCompleteAllowClear = boolean | { clearIcon?: VNodeChild }

/** 默认过滤时依据的字段：value（默认）或 label（label 非字符串时自动回退到 value） */
export type AutoCompleteFilterProp = 'value' | 'label'

/**
 * 自定义过滤函数：接收输入值与选项，返回该选项是否匹配。
 */
export type AutoCompleteFilterFn = (inputValue: string, option: AutoCompleteOption) => boolean

/**
 * filterOption 取值：
 * - `true`（默认）：使用内置过滤（依据 optionFilterProp）
 * - `false`：不过滤，展示全部选项
 * - 函数：自定义过滤逻辑
 */
export type AutoCompleteFilterOption = boolean | AutoCompleteFilterFn

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
  /** 受控值 */
  value?: string
  /** 数据源 */
  options?: AutoCompleteOption[]
  /** 是否禁用 */
  disabled?: boolean
  /** 输入框占位符 */
  placeholder?: string
  /** 支持清除 */
  allowClear?: AutoCompleteAllowClear
  /** 尺寸；缺省时回退到 ConfigProvider 的 componentSize */
  size?: ComponentSize
  /** 校验状态 */
  status?: 'error' | 'warning' | ''
  /**
   * 是否根据输入过滤选项。
   * - `true`（默认）：使用内置过滤（依据 optionFilterProp）
   * - `false`：不过滤，展示全部选项
   * - `function`：自定义过滤函数
   */
  filterOption?: AutoCompleteFilterOption
  /** 内置过滤依据的字段，默认 'value' */
  optionFilterProp?: AutoCompleteFilterProp
  /** 使用键盘选择选项时把值回填到输入框（不触发 change） */
  backfill?: boolean
  /** 是否默认高亮第一个选项 @default true */
  defaultActiveFirstOption?: boolean
  /** 下拉菜单为空时的展示内容，默认使用本地化文案 */
  notFoundContent?: VNodeChild
  /** 受控的展开状态 */
  open?: boolean
  /** 自动聚焦 */
  autoFocus?: boolean
  /** 透传到 input 的 id，便于表单 label 关联 */
  id?: string
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
