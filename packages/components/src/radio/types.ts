export type RadioValueType = string | number | boolean

export interface RadioProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  value?: RadioValueType
}

export interface RadioGroupProps {
  value?: RadioValueType
  defaultValue?: RadioValueType
  disabled?: boolean
  buttonStyle?: 'outline' | 'solid'
  size?: 'large' | 'middle' | 'small'
  options?: Array<RadioValueType | { label: string; value: RadioValueType; disabled?: boolean }>
}
