# Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

- 当页面上的操作命令过多时，用此组件可以收纳操作元素
- 点击或移入触点，会出现一个下拉菜单，可从中选择操作项

## 代码演示

### 基础用法

最简单的下拉菜单。

<DemoBlock title="基础用法" :source="DropdownBasicSource">
  <DropdownBasic />
</DemoBlock>

### 触发方式

通过 `trigger` 属性设置触发方式，支持 `hover`、`click` 和 `contextMenu`。

<DemoBlock title="触发方式" :source="DropdownTriggerSource">
  <DropdownTrigger />
</DemoBlock>

### 危险选项与分割线

通过 `danger` 属性标记危险操作，通过 `type: 'divider'` 添加分割线。

<DemoBlock title="危险选项与分割线" :source="DropdownDangerSource">
  <DropdownDanger />
</DemoBlock>

### 弹出位置

通过 `placement` 属性设置弹出位置。

<DemoBlock title="弹出位置" :source="DropdownPlacementSource">
  <DropdownPlacement />
</DemoBlock>

### 箭头

通过 `arrow` 属性显示箭头。

<DemoBlock title="箭头" :source="DropdownArrowSource">
  <DropdownArrow />
</DemoBlock>

### 按钮式下拉菜单

使用 `Dropdown.Button` 组件，左边是按钮，右边是额外的相关功能菜单。

<DemoBlock title="按钮式下拉菜单" :source="DropdownButtonSource">
  <DropdownButton />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="DropdownClassNamesSource">
  <DropdownClassNames />
</DemoBlock>

## API

### Dropdown Props

| 参数               | 说明                                                                             | 类型                                                                            | 默认值                |
| ------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------- |
| menu               | 菜单配置项                                                                       | `MenuProps`                                                                     | -                     |
| trigger            | 触发方式                                                                         | `'hover' \| 'click' \| 'contextMenu' \| Array`                                  | `'hover'`             |
| placement          | 弹出位置                                                                         | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight'` | `'bottomLeft'`        |
| open               | 手动控制下拉框显示                                                               | `boolean`                                                                       | -                     |
| defaultOpen        | 默认是否显示下拉框                                                               | `boolean`                                                                       | `false`               |
| disabled           | 是否禁用                                                                         | `boolean`                                                                       | `false`               |
| arrow              | 下拉框箭头是否显示                                                               | `boolean \| { pointAtCenter?: boolean }`                                        | `false`               |
| autoFocus          | 打开后自动聚焦下拉框                                                             | `boolean`                                                                       | `false`               |
| overlayClassName   | 下拉根元素的类名称                                                               | `string`                                                                        | -                     |
| overlayStyle       | 下拉根元素的样式                                                                 | `CSSProperties`                                                                 | -                     |
| getPopupContainer  | 菜单渲染父节点                                                                   | `(triggerNode: HTMLElement) => HTMLElement`                                     | `() => document.body` |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置                                                       | `boolean`                                                                       | `true`                |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown（已废弃，请使用 destroyOnHidden）                        | `boolean`                                                                       | `false`               |
| destroyOnHidden    | 关闭后是否销毁 Dropdown                                                          | `boolean`                                                                       | `false`               |
| mouseEnterDelay    | 鼠标移入后延时多少才显示 Dropdown，单位：秒                                      | `number`                                                                        | `0.15`                |
| mouseLeaveDelay    | 鼠标移出后延时多少才隐藏 Dropdown，单位：秒                                      | `number`                                                                        | `0.1`                 |
| popupRender        | 自定义下拉框内容                                                                 | `(originNode: VNode) => VNode`                                                  | -                     |
| dropdownRender     | 自定义下拉框内容（已废弃，请使用 popupRender）                                   | `(originNode: VNode) => VNode`                                                  | -                     |
| forceRender        | 强制渲染 Dropdown                                                                | `boolean`                                                                       | `false`               |
| openClassName      | 菜单展开时给触发元素添加的类名                                                   | `string`                                                                        | -                     |
| rootClassName      | 下拉根元素的类名称                                                               | `string`                                                                        | -                     |
| classNames         | 语义化 className，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `DropdownClassNames`                                                            | -                     |
| styles             | 语义化 style，见下方 [语义化 className 与 style](#语义化-classname-与-style)     | `DropdownStyles`                                                                | -                     |

### Dropdown Events

| 事件名     | 说明                   | 回调参数                                                         |
| ---------- | ---------------------- | ---------------------------------------------------------------- |
| openChange | 菜单显示状态改变时调用 | `(open: boolean, info: { source: 'trigger' \| 'menu' }) => void` |

### Dropdown Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 触发下拉的元素                     |
| overlay | 自定义下拉内容（当不使用 menu 时） |

### Dropdown.Button Props

继承 Dropdown 的所有属性，额外支持：

| 参数          | 说明             | 类型                                                     | 默认值                 |
| ------------- | ---------------- | -------------------------------------------------------- | ---------------------- |
| type          | 按钮类型         | `'default' \| 'primary' \| 'dashed' \| 'link' \| 'text'` | `'default'`            |
| danger        | 设置危险按钮     | `boolean`                                                | `false`                |
| loading       | 设置按钮载入状态 | `boolean`                                                | `false`                |
| icon          | 右侧的 icon      | `VNode`                                                  | `<EllipsisOutlined />` |
| buttonsRender | 自定义按钮的渲染 | `(buttons: [VNode, VNode]) => [VNode, VNode]`            | -                      |

### Dropdown.Button Events

| 事件名     | 说明                   | 回调参数                                                         |
| ---------- | ---------------------- | ---------------------------------------------------------------- |
| click      | 点击左侧按钮的回调     | `(event: MouseEvent) => void`                                    |
| openChange | 菜单显示状态改变时调用 | `(open: boolean, info: { source: 'trigger' \| 'menu' }) => void` |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对Dropdown的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface DropdownClassNames {
  trigger?: string // 触发器容器 div（包裹 default slot）
  dropdown?: string // 下拉浮层根节点 div.hmfw-dropdown
  arrow?: string // 箭头 div.hmfw-dropdown-arrow（需开启 arrow）
  content?: string // 浮层内容容器 div.hmfw-dropdown-content
}

interface DropdownStyles {
  trigger?: CSSProperties // 触发器容器 div
  dropdown?: CSSProperties // 下拉浮层根节点 div.hmfw-dropdown
  arrow?: CSSProperties // 箭头 div.hmfw-dropdown-arrow
  content?: CSSProperties // 浮层内容容器 div.hmfw-dropdown-content
}
```

### DOM 结构与 className 映射

```html
<div class="custom-trigger">触发元素</div>
<!-- ↑ classNames.trigger / styles.trigger 应用于此 -->

<!-- Teleport 到 body -->
<div class="hmfw-dropdown">
  <!-- ↑ classNames.dropdown / styles.dropdown 应用于此 -->
  <div class="hmfw-dropdown-arrow" />
  <!-- ↑ classNames.arrow / styles.arrow 应用于此（需开启 arrow） -->
  <div class="hmfw-dropdown-content">
    <!-- ↑ classNames.content / styles.content 应用于此 -->
    <!-- 菜单内容（由 menu prop 或 overlay slot 提供） -->
  </div>
</div>
```

### 使用 classNames

```vue
<template>
  <Dropdown
    :menu="menu"
    :arrow="true"
    :classNames="{
      trigger: 'my-trigger',
      dropdown: 'my-dropdown',
      content: 'my-content',
      arrow: 'my-arrow',
    }"
  >
    <Button>下拉菜单</Button>
  </Dropdown>
</template>

<style>
/* 全局样式（非 scoped）：dropdown/content/arrow 需要全局样式 */
.my-dropdown {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.my-content {
  border-radius: 8px;
}

.my-arrow {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
</style>

<style scoped>
/* trigger 可以使用 scoped 样式 */
:deep(.my-trigger) {
  display: inline-block;
}
</style>
```

### 使用 styles

```vue
<template>
  <Dropdown
    :menu="menu"
    :styles="{
      dropdown: { borderRadius: '16px' },
      content: { background: '#667eea', padding: '4px' },
    }"
  >
    <Button>动态样式</Button>
  </Dropdown>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `dropdown`、`content`、`arrow` 通过 `Teleport` 渲染到 body（或 `getPopupContainer` 指定的容器），其样式必须使用**全局样式**（非 scoped）
- `arrow` 仅在开启 `arrow` 属性时渲染
- 菜单项（menu/item）由 `menu` prop 传入的 [Menu](/components/menu) 组件控制，请使用 Menu 的语义化 API 定制
- `classNames.trigger` 与组件的 `class` attr、`openClassName` 会合并应用到触发器容器
- `styles.dropdown` 会与 `overlayStyle` 合并；`styles.trigger` 会与组件的 `style` attr 合并

## 设计 Token

| Token 名称                     | 说明             | 默认值                                                                                            |
| ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `--hmfw-color-bg-elevated`     | 浮层背景色       | `#ffffff`                                                                                         |
| `--hmfw-color-error`           | 错误状态色       | `#ff4d4f`                                                                                         |
| `--hmfw-color-error-bg`        | 错误色背景       | `#fff2f0`                                                                                         |
| `--hmfw-color-error-hover`     | 错误色悬停态     | `#ff7875`                                                                                         |
| `--hmfw-color-split`           | 分割线颜色       | `rgba(5, 5, 5, 0.06)`                                                                             |
| `--hmfw-color-text`            | 主文本色         | `rgba(0,0,0,0.88)`                                                                                |
| `--hmfw-color-text-disabled`   | 禁用文本色       | `rgba(0,0,0,0.25)`                                                                                |
| `--hmfw-color-text-secondary`  | 次要文本色       | `rgba(0,0,0,0.65)`                                                                                |
| `--hmfw-control-item-bg-hover` | 控件项悬停背景色 | `rgba(0, 0, 0, 0.04)`                                                                             |
| `--hmfw-font-size-base`        | 基础字号         | `14px`                                                                                            |
| `--hmfw-control-height-sm`     | 小号控件高度     | `24px`                                                                                            |
| `--hmfw-margin-xs`             | 超小外边距       | `4px`                                                                                             |
| `--hmfw-margin-xxs`            | 超超小外边距     | `2px`                                                                                             |
| `--hmfw-padding-sm`            | 小号内边距       | `8px`                                                                                             |
| `--hmfw-padding-xs`            | 超小内边距       | `4px`                                                                                             |
| `--hmfw-padding-xxs`           | 超超小内边距     | `2px`                                                                                             |
| `--hmfw-border-radius-lg`      | 大号圆角         | `8px`                                                                                             |
| `--hmfw-border-radius-sm`      | 小号圆角         | `4px`                                                                                             |
| `--hmfw-box-shadow-secondary`  | 次级阴影         | `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)` |
| `--hmfw-motion-duration-mid`   | 中速动画时长     | `0.2s`                                                                                            |
| `--hmfw-motion-ease-in-out`    | 缓入缓出曲线     | `cubic-bezier(0.645, 0.045, 0.355, 1)`                                                            |
| `--hmfw-z-index-popup`         | 弹出层层级       | `1050`                                                                                            |
