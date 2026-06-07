import type { CSSProperties } from 'vue'

export type SwitchSize = 'default' | 'small'

/**
 * onChange 处理器返回 void 或 Promise
 * 返回 Promise 时 Switch 自动进入 loading 状态，直到 Promise 完成
 */
export type SwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void | Promise<void>

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
}
