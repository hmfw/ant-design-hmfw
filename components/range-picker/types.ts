export type RangeValue = [string | null, string | null]

export interface RangePreset {
  label: string
  /** Preset range value, or a factory returning one (evaluated on click). */
  value: RangeValue | (() => RangeValue)
}

export interface RangePickerProps {
  value?: RangeValue
  defaultValue?: RangeValue
  format?: string
  /** Disable the whole picker, or each input individually as `[start, end]`. */
  disabled?: boolean | [boolean, boolean]
  placeholder?: [string, string]
  allowClear?: boolean
  /** Allow start or end input to be left empty, as `[start, end]`. */
  allowEmpty?: [boolean, boolean]
  /** Auto order the two selected dates. Defaults to `true`. */
  order?: boolean
  /** Custom separator between the two inputs. */
  separator?: string
  /** Preset ranges for quick selection. */
  presets?: RangePreset[]
  size?: 'small' | 'middle' | 'large'
  disabledDate?: (date: Date, info?: { from?: Date; type?: string }) => boolean
  status?: 'error' | 'warning' | ''
  /** Controlled open state. */
  open?: boolean
}
