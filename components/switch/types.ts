import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

/**
 * onChange 处理器返回 void 或 Promise
 * 返回 Promise 时 Switch 自动进入 loading 状态，直到 Promise 完成
 */
export type SwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void | Promise<void>

/**
 * Switch 各部分的语义化 className
 * 对齐 Ant Design v6 的语义化命名
 */
export interface SwitchClassNames {
  /** 根节点 button.hmfw-switch */
  root?: string
  /** 内容容器 span.hmfw-switch-inner */
  content?: string
  /** 指示器/手柄 span.hmfw-switch-handle */
  indicator?: string
  /** 选中状态的子内容 span.hmfw-switch-inner-checked */
  checked?: string
  /** 未选中状态的子内容 span.hmfw-switch-inner-unchecked */
  unchecked?: string
}

/**
 * Switch 各部分的语义化 style
 * 对齐 Ant Design v6 的语义化命名
 */
export interface SwitchStyles {
  /** 根节点 button.hmfw-switch */
  root?: CSSProperties
  /** 内容容器 span.hmfw-switch-inner */
  content?: CSSProperties
  /** 指示器/手柄 span.hmfw-switch-handle */
  indicator?: CSSProperties
  /** 选中状态的子内容 span.hmfw-switch-inner-checked */
  checked?: CSSProperties
  /** 未选中状态的子内容 span.hmfw-switch-inner-unchecked */
  unchecked?: CSSProperties
}

export interface SwitchProps {
  checked?: boolean
  /** value 是 checked 的别名，用于兼容表单库 */
  value?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  loading?: boolean
  size?: ComponentSize
  checkedChildren?: any
  unCheckedChildren?: any
  autoFocus?: boolean
  id?: string
  title?: string
  tabIndex?: number
  className?: string
  style?: string | CSSProperties
  onChange?: SwitchChangeEventHandler
  /** 语义化 className */
  classNames?: SwitchClassNames
  /** 语义化 style */
  styles?: SwitchStyles
}
