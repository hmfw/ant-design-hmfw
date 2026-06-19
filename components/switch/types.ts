import type { CSSProperties } from 'vue'

export type SwitchSize = 'default' | 'small'

/**
 * onChange 处理器返回 void 或 Promise
 * 返回 Promise 时 Switch 自动进入 loading 状态，直到 Promise 完成
 */
export type SwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void | Promise<void>

/**
 * Switch 各部分的语义化 className
 */
export interface SwitchClassNames {
  /** 根节点 button.hmfw-switch */
  root?: string
  /** 滑动手柄 span.hmfw-switch-handle */
  handle?: string
  /** 加载图标 span.hmfw-switch-loading-icon */
  loadingIcon?: string
  /** 内部内容容器 span.hmfw-switch-inner */
  inner?: string
  /** 选中状态的子内容 span.hmfw-switch-inner-checked */
  checked?: string
  /** 未选中状态的子内容 span.hmfw-switch-inner-unchecked */
  unchecked?: string
}

/**
 * Switch 各部分的语义化 style
 */
export interface SwitchStyles {
  /** 根节点 button.hmfw-switch */
  root?: CSSProperties
  /** 滑动手柄 span.hmfw-switch-handle */
  handle?: CSSProperties
  /** 加载图标 span.hmfw-switch-loading-icon */
  loadingIcon?: CSSProperties
  /** 内部内容容器 span.hmfw-switch-inner */
  inner?: CSSProperties
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
  size?: SwitchSize
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
