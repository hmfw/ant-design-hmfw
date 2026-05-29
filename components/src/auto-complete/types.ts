export interface AutoCompleteOption {
  value: string
  label?: string
  disabled?: boolean
}

export interface AutoCompleteProps {
  value?: string
  defaultValue?: string
  options?: AutoCompleteOption[]
  disabled?: boolean
  placeholder?: string
  allowClear?: boolean
  size?: 'small' | 'middle' | 'large'
  status?: 'error' | 'warning' | ''
  filterOption?: boolean | ((inputValue: string, option: AutoCompleteOption) => boolean)
  backfill?: boolean
  open?: boolean
}
