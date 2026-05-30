export type RadioValueType = string | number | boolean

export interface RadioChangeEvent {
  target: {
    checked: boolean
    value?: RadioValueType
  }
  nativeEvent: Event
}

export interface RadioProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  value?: RadioValueType
  name?: string
  id?: string
}

export interface RadioGroupProps {
  value?: RadioValueType
  defaultValue?: RadioValueType
  disabled?: boolean
  buttonStyle?: 'outline' | 'solid'
  optionType?: 'default' | 'button'
  size?: 'large' | 'middle' | 'small'
  name?: string
  block?: boolean
  options?: Array<RadioValueType | {
    label: string
    value: RadioValueType
    disabled?: boolean
    id?: string
  }>
}
