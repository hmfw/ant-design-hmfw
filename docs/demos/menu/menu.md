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

### 暗色主题

设置 `theme="dark"` 使用暗色主题。

<DemoBlock title="暗色主题" :source="MenuDarkSource">
  <MenuDark />
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

### 自定义展开图标

通过 `expandIcon` 属性自定义子菜单展开图标，支持 VNode、函数（接收 `{ isOpen }` 参数）、`null`/`false`（隐藏图标）。

<DemoBlock title="自定义展开图标" :source="MenuExpandIconSource">
  <MenuExpandIcon />
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

### 垂直弹出模式

`mode="vertical"` 时子菜单以弹出层形式展开，支持悬停或点击触发。

<DemoBlock title="垂直弹出模式" :source="MenuVerticalSource">
  <MenuVertical />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="MenuClassNamesSource">
  <MenuClassNames />
</DemoBlock>

### 声明式写法（Slots）

除了 `items` 属性，也支持直接使用 `<MenuItem>`、`<SubMenu>` 等子组件进行声明式组合。

<DemoBlock title="声明式写法" :source="MenuSlotSource">
  <MenuSlot />
</DemoBlock>

## API

### Menu Props

| 参数                 | 说明                                                                             | 类型                                               | 默认值       |
| -------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------- | ------------ |
| items                | 菜单内容                                                                         | `ItemType[]`                                       | `[]`         |
| mode                 | 菜单类型                                                                         | `'horizontal' \| 'vertical' \| 'inline'`           | `'vertical'` |
| theme                | 主题颜色                                                                         | `'light' \| 'dark'`                                | `'light'`    |
| selectedKeys         | 当前选中的菜单项 key 数组                                                        | `string[]`                                         | -            |
| defaultSelectedKeys  | 初始选中的菜单项 key 数组                                                        | `string[]`                                         | `[]`         |
| openKeys             | 当前展开的 SubMenu 菜单项 key 数组                                               | `string[]`                                         | -            |
| defaultOpenKeys      | 初始展开的 SubMenu 菜单项 key 数组                                               | `string[]`                                         | `[]`         |
| inlineCollapsed      | inline 时菜单是否收起状态，收起时会自动显示 Tooltip                              | `boolean`                                          | `false`      |
| inlineIndent         | inline 模式的菜单缩进宽度（单位：px），分组内项目会递增 depth 正确计算缩进       | `number`                                           | `24`         |
| multiple             | 是否允许多选                                                                     | `boolean`                                          | `false`      |
| selectable           | 是否允许选中                                                                     | `boolean`                                          | `true`       |
| expandIcon           | 自定义展开图标                                                                   | `VNode \| ((props: { isOpen: boolean }) => VNode)` | -            |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为，支持鼠标悬停或点击                                  | `'hover' \| 'click'`                               | `'hover'`    |
| classNames           | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `MenuClassNames`                                   | -            |
| styles               | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `MenuStyles`                                       | -            |

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

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对菜单的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface MenuClassNames {
  root?: string // 菜单根容器
  item?: string // 普通菜单项
  itemSelected?: string // 选中状态的菜单项
  itemDisabled?: string // 禁用状态的菜单项
  itemDanger?: string // 危险状态的菜单项
  itemIcon?: string // 菜单项图标容器
  itemContent?: string // 菜单项文本内容
  submenu?: string // 子菜单容器
  submenuTitle?: string // 子菜单标题
  submenuOpen?: string // 展开状态的子菜单
  submenuSelected?: string // 包含选中项的子菜单
  submenuDisabled?: string // 禁用状态的子菜单
  submenuIcon?: string // 子菜单图标
  submenuArrow?: string // 展开箭头
  sub?: string // 子菜单列表容器
  itemGroup?: string // 菜单项分组容器
  itemGroupTitle?: string // 分组标题
  itemGroupList?: string // 分组列表
  divider?: string // 分割线
}

interface MenuStyles {
  root?: CSSProperties
  item?: CSSProperties
  itemSelected?: CSSProperties
  itemDisabled?: CSSProperties
  itemDanger?: CSSProperties
  itemIcon?: CSSProperties
  itemContent?: CSSProperties
  submenu?: CSSProperties
  submenuTitle?: CSSProperties
  submenuOpen?: CSSProperties
  submenuSelected?: CSSProperties
  submenuDisabled?: CSSProperties
  submenuIcon?: CSSProperties
  submenuArrow?: CSSProperties
  sub?: CSSProperties
  itemGroup?: CSSProperties
  itemGroupTitle?: CSSProperties
  itemGroupList?: CSSProperties
  divider?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<ul class="hmfw-menu hmfw-menu-inline">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <!-- 普通菜单项 -->
  <li class="hmfw-menu-item hmfw-menu-item-selected">
    <!-- ↑ classNames.item + classNames.itemSelected / styles.item + styles.itemSelected 应用于此 -->
    <span class="hmfw-menu-item-icon">
      <!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 -->
      <svg>...</svg>
    </span>
    <span class="hmfw-menu-title-content">
      <!-- ↑ classNames.itemContent / styles.itemContent 应用于此 -->
      导航一
    </span>
  </li>

  <!-- 子菜单 -->
  <li class="hmfw-menu-submenu hmfw-menu-submenu-open hmfw-menu-submenu-selected">
    <!-- ↑ classNames.submenu + classNames.submenuOpen + classNames.submenuSelected 应用于此 -->
    <div class="hmfw-menu-submenu-title">
      <!-- ↑ classNames.submenuTitle / styles.submenuTitle 应用于此 -->
      <span class="hmfw-menu-item-icon">
        <!-- ↑ classNames.submenuIcon / styles.submenuIcon 应用于此 -->
        <svg>...</svg>
      </span>
      <span>子菜单</span>
      <span class="hmfw-menu-submenu-arrow">
        <!-- ↑ classNames.submenuArrow / styles.submenuArrow 应用于此 -->
        <svg>...</svg>
      </span>
    </div>
    <ul class="hmfw-menu-sub hmfw-menu-inline">
      <!-- ↑ classNames.sub / styles.sub 应用于此 -->
      <li class="hmfw-menu-item">选项 1</li>
      <li class="hmfw-menu-item">选项 2</li>
    </ul>
  </li>

  <!-- 菜单分组 -->
  <li class="hmfw-menu-item-group">
    <!-- ↑ classNames.itemGroup / styles.itemGroup 应用于此 -->
    <div class="hmfw-menu-item-group-title">
      <!-- ↑ classNames.itemGroupTitle / styles.itemGroupTitle 应用于此 -->
      分组标题
    </div>
    <ul class="hmfw-menu-item-group-list">
      <!-- ↑ classNames.itemGroupList / styles.itemGroupList 应用于此 -->
      <li class="hmfw-menu-item">分组项 1</li>
      <li class="hmfw-menu-item">分组项 2</li>
    </ul>
  </li>

  <!-- 分割线 -->
  <li class="hmfw-menu-item-divider">
    <!-- ↑ classNames.divider / styles.divider 应用于此 -->
  </li>
</ul>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <Menu
    mode="inline"
    :items="items"
    :class-names="{
      item: 'my-menu-item',
      itemSelected: 'my-item-selected',
      submenuTitle: 'my-submenu-title',
    }"
  />
</template>

<style scoped>
:deep(.my-menu-item) {
  border-left: 3px solid transparent;
  transition: all 0.3s;
}

:deep(.my-menu-item:hover) {
  border-left-color: #1677ff;
  transform: translateX(4px);
}

:deep(.my-item-selected) {
  background: linear-gradient(90deg, #e6f4ff 0%, transparent 100%) !important;
  border-left-color: #1677ff !important;
}

:deep(.my-submenu-title) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border-radius: 8px;
  font-weight: 600;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <Menu
    mode="inline"
    :items="items"
    :styles="{
      root: { border: '2px solid #722ed1', borderRadius: '12px' },
      item: { margin: '8px 12px' },
      itemSelected: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        fontWeight: 'bold',
      },
      itemIcon: { fontSize: '16px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 状态类（如 `itemSelected`、`itemDisabled`）会与基础类（如 `item`）**叠加**应用
- 子菜单的弹出层（`mode="vertical"` 或 `mode="horizontal"` 时）挂载到 `body`，需使用 `:global()` 而非 `:deep()` 来应用样式
- 水平菜单（`mode="horizontal"`）的选中指示器通过 `border-bottom` 实现，可通过 `itemSelected` 自定义

## 设计 Token

Menu 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称             | 说明   | 默认值    |
| ---------------------- | ------ | --------- |
| `--hmfw-color-primary` | 主题色 | `#1677ff` |

## Menu Events
