export interface TransferItem {
  key: string
  title: string
  description?: string
  disabled?: boolean
}

export interface TransferProps {
  dataSource?: TransferItem[]
  targetKeys?: string[]
  defaultTargetKeys?: string[]
  selectedKeys?: string[]
  defaultSelectedKeys?: string[]
  titles?: [string, string]
  operations?: [string, string]
  showSearch?: boolean
  filterOption?: (inputValue: string, item: TransferItem) => boolean
  listStyle?: Record<string, string>
  disabled?: boolean
  showSelectAll?: boolean
}
