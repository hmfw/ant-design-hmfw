export type SwitchSize = 'default' | 'small'

export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  loading?: boolean
  size?: SwitchSize
  checkedChildren?: string
  unCheckedChildren?: string
}
