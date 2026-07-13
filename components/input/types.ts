import type { VNode, CSSProperties } from 'vue'
import type { IconComponent } from '@hmfw/icons'

export type InputSize = 'large' | 'middle' | 'small'
export type InputStatus = 'error' | 'warning' | ''

/** 前后缀可接受字符串、VNode 或图标组件 */
export type InputAffix = string | VNode | IconComponent

/** 计数配置：可简化为布尔，或自定义格式化函数 / 计数策略 */
export interface ShowCountConfig {
  formatter?: (info: { value: string; count: number; maxLength?: number }) => VNode | string
  /** 自定义计数策略，默认按字素计数（正确处理 emoji / 代理对） */
  strategy?: (text: string) => number
}

/** TextArea 计数配置（对齐 Ant Design v6），优先级高于 maxLength/showCount */
export interface CountConfig {
  show?: boolean | ((args: { value: string; count: number; maxLength?: number }) => VNode | string)
  max?: number
  strategy?: (text: string) => number
  exceedFormatter?: (value: string, config: { max: number }) => string
}

/** 清除按钮配置 */
export interface AllowClearConfig {
  clearIcon?: VNode
  disabled?: boolean
}

/** 可见性切换配置（Password 组件） */
export interface VisibilityToggleConfig {
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
}

/** Input 语义化类名 */
export interface InputClassNames {
  affixWrapper?: string
  prefix?: string
  suffix?: string
  input?: string
  count?: string
}

/** Input 语义化样式 */
export interface InputStyles {
  affixWrapper?: CSSProperties
  prefix?: CSSProperties
  suffix?: CSSProperties
  input?: CSSProperties
  count?: CSSProperties
}

/** TextArea 语义化类名 */
export interface TextAreaClassNames {
  textarea?: string
  count?: string
}

/** TextArea 语义化样式 */
export interface TextAreaStyles {
  textarea?: CSSProperties
  count?: CSSProperties
}

/** TextArea 自适应高度配置 */
export interface AutoSizeConfig {
  minRows?: number
  maxRows?: number
}

export interface InputProps {
  value?: string
  /** 非受控模式下的初始值（未传 value 时生效） */
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  size?: InputSize
  status?: InputStatus
  prefix?: InputAffix
  suffix?: InputAffix
  allowClear?: boolean | AllowClearConfig
  maxLength?: number
  showCount?: boolean | ShowCountConfig
  type?: string
  id?: string
  classNames?: InputClassNames
  styles?: InputStyles
}

export interface TextAreaProps {
  value?: string
  /** 非受控模式下的初始值（未传 value 时生效） */
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  rows?: number
  autoSize?: boolean | AutoSizeConfig
  maxLength?: number
  showCount?: boolean | ShowCountConfig
  /** 计数配置（对齐 Ant Design v6），优先级高于 maxLength/showCount */
  count?: CountConfig
  status?: InputStatus
  allowClear?: boolean | AllowClearConfig
  classNames?: TextAreaClassNames
  styles?: TextAreaStyles
}

export interface InputPasswordProps {
  value?: string
  /** 非受控模式下的初始值（未传 value 时生效） */
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  size?: InputSize
  status?: InputStatus
  maxLength?: number
  id?: string
  visibilityToggle?: boolean | VisibilityToggleConfig
  iconRender?: (visible: boolean) => VNode | string
  action?: 'click' | 'hover'
}

export interface InputSearchProps {
  value?: string
  /** 非受控模式下的初始值（未传 value 时生效） */
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  size?: InputSize
  status?: InputStatus
  loading?: boolean
  enterButton?: boolean | string
  searchIcon?: InputAffix
  id?: string
}
