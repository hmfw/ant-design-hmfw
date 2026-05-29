export type ColorFormat = 'hex' | 'rgb' | 'hsb'

export interface ColorPickerProps {
  value?: string
  defaultValue?: string
  format?: ColorFormat
  disabled?: boolean
  size?: 'small' | 'middle' | 'large'
  showText?: boolean
  allowClear?: boolean
  presets?: Array<{ label: string; colors: string[] }>
}
