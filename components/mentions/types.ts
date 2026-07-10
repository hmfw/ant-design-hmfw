import type { CSSProperties, VNode } from 'vue'

/** 选项数据 */
export interface MentionOption {
  value: string
  label?: string | VNode
  disabled?: boolean
  [key: string]: any
}

/** 语义化 class */
export interface MentionSemanticClassNames {
  root?: string
  textarea?: string
  popup?: string
  option?: string
  empty?: string
}

/** 语义化 style */
export interface MentionSemanticStyles {
  root?: CSSProperties
  textarea?: CSSProperties
  popup?: CSSProperties
  option?: CSSProperties
  empty?: CSSProperties
}

/** 选项渲染函数参数 */
export interface MentionOptionRenderInfo {
  index: number
}

export interface MentionProps {
  /** v-model 双向绑定文本值 */
  value?: string
  defaultValue?: string

  /** 选项数据源 */
  options?: MentionOption[]

  /** 触发前缀，默认 ['@', '#'] */
  prefix?: string | string[]

  /** 分隔符，用于识别 mentions 的边界 */
  split?: string

  /** placeholder */
  placeholder?: string

  /** 是否禁用 */
  disabled?: boolean

  /** 是否只读 */
  readOnly?: boolean

  /** 自动调整行数 */
  autoSize?: boolean | { minRows?: number; maxRows?: number }

  /** textarea 行数 */
  rows?: number

  /** 加载中 */
  loading?: boolean

  /** 未找到内容时的显示文案 */
  notFoundContent?: string | VNode

  /** 自定义筛选函数 */
  filterOption?: false | ((input: string, option: MentionOption) => boolean)

  /** 校验状态 */
  status?: 'error' | 'warning' | ''

  /** 尺寸 */
  size?: 'small' | 'middle' | 'large'

  /** 下拉菜单放置方向 */
  placement?: 'top' | 'bottom'

  // ----------------------------------------------------------------
  // 虚拟滚动
  // ----------------------------------------------------------------

  /** 是否启用虚拟滚动（默认 true，大数据量时自动优化） */
  virtual?: boolean

  /** 下拉列表容器高度（px），默认 256 */
  listHeight?: number

  /** 下拉列表每项高度（px），默认 32 */
  listItemHeight?: number

  // ----------------------------------------------------------------
  // 语义化
  // ----------------------------------------------------------------

  classNames?: MentionSemanticClassNames
  styles?: MentionSemanticStyles

  // ----------------------------------------------------------------
  // 回调
  // ----------------------------------------------------------------

  /** 选中选项时触发 */
  onSelect?: (option: MentionOption, prefix: string) => void

  /** 搜索文本变化时触发 */
  onSearch?: (text: string, prefix: string) => void

  /** 文本值变化时触发 */
  onChange?: (value: string) => void

  /** 下拉打开/关闭时触发 */
  onOpenChange?: (open: boolean) => void

  /** 获得焦点 */
  onFocus?: (e: FocusEvent) => void

  /** 失去焦点 */
  onBlur?: (e: FocusEvent) => void
}

/** 暴露的方法 */
export interface MentionInstance {
  focus: () => void
  blur: () => void
}
