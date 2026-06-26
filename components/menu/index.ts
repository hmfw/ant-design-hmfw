import { Menu as MenuComp } from './Menu'
import { MenuItem } from './MenuItem'
import { SubMenu } from './SubMenu'
import { MenuDivider } from './MenuDivider'
import { MenuItemGroup } from './MenuItemGroup'

// 将子组件附加为 Menu 的静态属性（支持 JSX 声明式写法）
const Menu = MenuComp as typeof MenuComp & {
  Item: typeof MenuItem
  SubMenu: typeof SubMenu
  Divider: typeof MenuDivider
  ItemGroup: typeof MenuItemGroup
}

Menu.Item = MenuItem
Menu.SubMenu = SubMenu
Menu.Divider = MenuDivider
Menu.ItemGroup = MenuItemGroup

export { Menu, MenuItem, SubMenu, MenuDivider, MenuItemGroup }
export type {
  MenuItemType,
  SubMenuType,
  MenuItemGroupType,
  MenuDividerType,
  ItemType,
  MenuMode,
  MenuTheme,
  MenuProps,
  MenuClassNames,
  MenuStyles,
} from './types'
