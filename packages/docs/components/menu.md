# Menu 导航菜单

为页面和功能提供导航的菜单列表。

<script setup>
import MenuHorizontal from '../demos/menu/MenuHorizontal.vue'
import MenuHorizontalSource from '../demos/menu/MenuHorizontal.vue?raw'
import MenuInline from '../demos/menu/MenuInline.vue'
import MenuInlineSource from '../demos/menu/MenuInline.vue?raw'
import MenuCollapsed from '../demos/menu/MenuCollapsed.vue'
import MenuCollapsedSource from '../demos/menu/MenuCollapsed.vue?raw'
</script>

## 何时使用

- 需要展示一个系统功能菜单时
- 需要展示多级导航时
- 需要顶部导航或侧边导航时

## 代码演示

### 顶部导航

水平的顶部导航菜单。

<DemoBlock title="顶部导航" :source="MenuHorizontalSource">
  <MenuHorizontal />
</DemoBlock>

### 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

<DemoBlock title="内嵌菜单" :source="MenuInlineSource">
  <MenuInline />
</DemoBlock>

### 折叠菜单

内嵌菜单可以被折叠。

<DemoBlock title="折叠菜单" :source="MenuCollapsedSource">
  <MenuCollapsed />
</DemoBlock>

## API

### Menu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 菜单内容 | `MenuItem[]` | `[]` |
| mode | 菜单类型 | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` |
| theme | 主题颜色 | `'light' \| 'dark'` | `'light'` |
| selectedKeys | 当前选中的菜单项 key 数组 | `string[]` | - |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | `string[]` | `[]` |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | `string[]` | - |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 | `string[]` | `[]` |
| collapsed | 是否折叠（仅 inline 模式） | `boolean` | `false` |
| inlineCollapsed | inline 时菜单是否收起状态 | `boolean` | `false` |

### MenuItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| label | 菜单项标题 | `string` | - |
| icon | 图标类型 | `string` | - |
| children | 子菜单项 | `MenuItem[]` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| type | 菜单项类型 | `'group' \| 'divider'` | - |

### Menu Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 被选中时调用 | `({ key: string, keyPath: string[], selectedKeys: string[] }) => void` |
| openChange | SubMenu 展开/关闭的回调 | `(openKeys: string[]) => void` |
| click | 点击菜单项触发的回调 | `({ key: string, keyPath: string[] }) => void` |
