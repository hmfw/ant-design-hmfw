# Menu 导航菜单

为页面和功能提供导航的菜单列表。

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

### 危险选项

危险操作使用 danger 属性标记。

<DemoBlock title="危险选项" :source="MenuDangerSource">
  <MenuDanger />
</DemoBlock>

### 分组菜单

使用 type: 'group' 对菜单项进行分组。

<DemoBlock title="分组菜单" :source="MenuGroupSource">
  <MenuGroup />
</DemoBlock>

### 多选菜单

设置 multiple 属性支持多选。

<DemoBlock title="多选菜单" :source="MenuMultipleSource">
  <MenuMultiple />
</DemoBlock>

### 全局图标配置

为菜单项配置图标，支持 VNode 和函数两种形式。

<DemoBlock title="全局图标配置" :source="MenuGlobalIconSource">
  <MenuGlobalIcon />
</DemoBlock>

### 收起状态提示

inlineCollapsed 为 true 时，鼠标悬停会自动显示 Tooltip 提示。

<DemoBlock title="收起状态提示" :source="MenuTooltipSource">
  <MenuTooltip />
</DemoBlock>

### 自定义缩进

使用 inlineIndent 属性自定义菜单项缩进宽度，分组内项目会正确计算层级缩进。

<DemoBlock title="自定义缩进" :source="MenuIndentSource">
  <MenuIndent />
</DemoBlock>

### 子菜单触发方式

使用 triggerSubMenuAction 属性控制子菜单的展开方式（hover 或 click）。

<DemoBlock title="子菜单触发方式" :source="MenuTriggerSource">
  <MenuTrigger />
</DemoBlock>

## API

### Menu Props

| 参数                 | 说明                                                                       | 类型                                               | 默认值       |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------------------- | ------------ |
| items                | 菜单内容                                                                   | `ItemType[]`                                       | `[]`         |
| mode                 | 菜单类型                                                                   | `'horizontal' \| 'vertical' \| 'inline'`           | `'vertical'` |
| theme                | 主题颜色                                                                   | `'light' \| 'dark'`                                | `'light'`    |
| selectedKeys         | 当前选中的菜单项 key 数组                                                  | `string[]`                                         | -            |
| defaultSelectedKeys  | 初始选中的菜单项 key 数组                                                  | `string[]`                                         | `[]`         |
| openKeys             | 当前展开的 SubMenu 菜单项 key 数组                                         | `string[]`                                         | -            |
| defaultOpenKeys      | 初始展开的 SubMenu 菜单项 key 数组                                         | `string[]`                                         | `[]`         |
| inlineCollapsed      | inline 时菜单是否收起状态，收起时会自动显示 Tooltip                        | `boolean`                                          | `false`      |
| inlineIndent         | inline 模式的菜单缩进宽度（单位：px），分组内项目会递增 depth 正确计算缩进 | `number`                                           | `24`         |
| multiple             | 是否允许多选                                                               | `boolean`                                          | `false`      |
| selectable           | 是否允许选中                                                               | `boolean`                                          | `true`       |
| expandIcon           | 自定义展开图标                                                             | `VNode \| ((props: { isOpen: boolean }) => VNode)` | -            |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为，支持鼠标悬停或点击                            | `'hover' \| 'click'`                               | `'hover'`    |

### ItemType

菜单项类型，可以是以下之一：

#### MenuItemType (普通菜单项)

| 参数     | 说明                                                       | 类型                     | 默认值  |
| -------- | ---------------------------------------------------------- | ------------------------ | ------- |
| key      | 唯一标识                                                   | `string`                 | -       |
| label    | 菜单项标题                                                 | `string`                 | -       |
| icon     | 图标，支持 VNode 或返回 VNode 的函数                       | `VNode \| (() => VNode)` | -       |
| disabled | 是否禁用                                                   | `boolean`                | `false` |
| danger   | 是否为危险选项，用于删除等操作                             | `boolean`                | `false` |
| title    | 设置收缩时展示的悬浮标题，inlineCollapsed 时显示为 Tooltip | `string`                 | -       |

#### SubMenuType (子菜单)

| 参数     | 说明       | 类型                     | 默认值  |
| -------- | ---------- | ------------------------ | ------- |
| key      | 唯一标识   | `string`                 | -       |
| label    | 子菜单标题 | `string`                 | -       |
| icon     | 图标       | `VNode \| (() => VNode)` | -       |
| disabled | 是否禁用   | `boolean`                | `false` |
| children | 子菜单项   | `ItemType[]`             | -       |
| theme    | 子菜单主题 | `'light' \| 'dark'`      | -       |

#### MenuDividerType (分割线)

| 参数   | 说明     | 类型        | 默认值  |
| ------ | -------- | ----------- | ------- |
| type   | 类型标识 | `'divider'` | -       |
| key    | 唯一标识 | `string`    | -       |
| dashed | 是否虚线 | `boolean`   | `false` |

#### MenuItemGroupType (菜单分组)

| 参数     | 说明                                                 | 类型         | 默认值 |
| -------- | ---------------------------------------------------- | ------------ | ------ |
| type     | 类型标识                                             | `'group'`    | -      |
| key      | 唯一标识                                             | `string`     | -      |
| label    | 分组标题                                             | `string`     | -      |
| children | 分组内的菜单项，深度会递增以正确计算 inline 模式缩进 | `ItemType[]` | -      |

### Menu Events

| 事件名     | 说明                               | 回调参数                                            |
| ---------- | ---------------------------------- | --------------------------------------------------- |
| select     | 被选中时调用                       | `({ key: string, selectedKeys: string[] }) => void` |
| deselect   | 取消选中时调用（仅 multiple 模式） | `({ key: string, selectedKeys: string[] }) => void` |
| openChange | SubMenu 展开/关闭的回调            | `(openKeys: string[]) => void`                      |
| click      | 点击菜单项触发的回调               | `({ key: string }) => void`                         |

<script setup lang="ts">
import MenuHorizontal from './MenuHorizontal.vue'
import MenuHorizontalSource from './MenuHorizontal.vue?raw'
import MenuInline from './MenuInline.vue'
import MenuInlineSource from './MenuInline.vue?raw'
import MenuCollapsed from './MenuCollapsed.vue'
import MenuCollapsedSource from './MenuCollapsed.vue?raw'
import MenuDanger from './MenuDanger.vue'
import MenuDangerSource from './MenuDanger.vue?raw'
import MenuGroup from './MenuGroup.vue'
import MenuGroupSource from './MenuGroup.vue?raw'
import MenuMultiple from './MenuMultiple.vue'
import MenuMultipleSource from './MenuMultiple.vue?raw'
import MenuGlobalIcon from './MenuGlobalIcon.vue'
import MenuGlobalIconSource from './MenuGlobalIcon.vue?raw'
import MenuTooltip from './MenuTooltip.vue'
import MenuTooltipSource from './MenuTooltip.vue?raw'
import MenuIndent from './MenuIndent.vue'
import MenuIndentSource from './MenuIndent.vue?raw'
import MenuTrigger from './MenuTrigger.vue'
import MenuTriggerSource from './MenuTrigger.vue?raw'
</script>
