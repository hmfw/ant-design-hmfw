import { List as InternalList } from './List'
import { ListItem } from './ListItem'
import { ListItemMeta } from './ListItemMeta'

export type { ListProps, ListItemProps, ListItemMetaProps, ListGridType, PaginationConfig } from './types'

// Mount sub-components
const List = InternalList as typeof InternalList & {
  Item: typeof ListItem & { Meta: typeof ListItemMeta }
}

List.Item = ListItem as typeof ListItem & { Meta: typeof ListItemMeta }
List.Item.Meta = ListItemMeta

export { List, ListItem, ListItemMeta }
