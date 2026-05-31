import type { VNodeChild } from 'vue'

export interface AutoCompleteOption {
  value: string
  label?: string
  disabled?: boolean
}

export type AutoCompleteAllowClear = boolean | { clearIcon?: VNodeChild }

export interface AutoCompleteProps {
  value?: string
  defaultValue?: string
  options?: AutoCompleteOption[]
  disabled?: boolean
  placeholder?: string
  allowClear?: AutoCompleteAllowClear
  size?: 'small' | 'middle' | 'large'
  status?: 'error' | 'warning' | ''
  filterOption?: boolean | ((inputValue: string, option: AutoCompleteOption) => boolean)
  backfill?: boolean
  /** Whether the first option is highlighted by default. @default true */
  defaultActiveFirstOption?: boolean
  /** Initial open state of dropdown. */
  defaultOpen?: boolean
  open?: boolean
}
