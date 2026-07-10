/**
 * ItemType → VNode 渲染 composable
 *
 * 将 ItemType[] 递归转换为对应的子组件 VNode 数组。
 * Menu.tsx 和 SubMenu.tsx 各自调用，避免循环依赖。
 */
import type { VNode } from 'vue'
import { isSubMenuType, isGroupType, isDividerType, isItemType } from '../types'
import type { ItemType } from '../types'
import { MenuItem } from '../MenuItem'
import { SubMenu } from '../SubMenu'
import { MenuDivider } from '../MenuDivider'
import { MenuItemGroup } from '../MenuItemGroup'

export function useMenuRender() {
  const renderItems = (items: ItemType[], depth = 0): (VNode | null)[] => {
    return items
      .filter((item) => item !== null)
      .map((item) => {
        if (isDividerType(item)) {
          return <MenuDivider key={item.key} item={item} />
        }

        if (isGroupType(item)) {
          return (
            <MenuItemGroup key={item.key} item={item}>
              {{ default: () => renderItems(item.children || [], depth) }}
            </MenuItemGroup>
          )
        }

        if (isSubMenuType(item)) {
          return (
            <SubMenu key={item.key} item={item} depth={depth}>
              {{ default: () => renderItems(item.children || [], depth + 1) }}
            </SubMenu>
          )
        }

        if (isItemType(item)) {
          return <MenuItem key={item.key} item={item} depth={depth} isFirstLevel={depth === 0} />
        }

        return null
      })
  }

  return { renderItems }
}
