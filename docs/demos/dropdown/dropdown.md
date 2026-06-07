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

## API

### Dropdown Props

| 参数               | 说明                                                      | 类型                                                                            | 默认值                |
| ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------- |
| menu               | 菜单配置项                                                | `MenuProps`                                                                     | -                     |
| trigger            | 触发方式                                                  | `'hover' \| 'click' \| 'contextMenu' \| Array`                                  | `'hover'`             |
| placement          | 弹出位置                                                  | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight'` | `'bottomLeft'`        |
| open               | 手动控制下拉框显示                                        | `boolean`                                                                       | -                     |
| defaultOpen        | 默认是否显示下拉框                                        | `boolean`                                                                       | `false`               |
| disabled           | 是否禁用                                                  | `boolean`                                                                       | `false`               |
| arrow              | 下拉框箭头是否显示                                        | `boolean \| { pointAtCenter?: boolean }`                                        | `false`               |
| autoFocus          | 打开后自动聚焦下拉框                                      | `boolean`                                                                       | `false`               |
| overlayClassName   | 下拉根元素的类名称                                        | `string`                                                                        | -                     |
| overlayStyle       | 下拉根元素的样式                                          | `CSSProperties`                                                                 | -                     |
| getPopupContainer  | 菜单渲染父节点                                            | `(triggerNode: HTMLElement) => HTMLElement`                                     | `() => document.body` |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置                                | `boolean`                                                                       | `true`                |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown（已废弃，请使用 destroyOnHidden） | `boolean`                                                                       | `false`               |
| destroyOnHidden    | 关闭后是否销毁 Dropdown                                   | `boolean`                                                                       | `false`               |
| mouseEnterDelay    | 鼠标移入后延时多少才显示 Dropdown，单位：秒               | `number`                                                                        | `0.15`                |
| mouseLeaveDelay    | 鼠标移出后延时多少才隐藏 Dropdown，单位：秒               | `number`                                                                        | `0.1`                 |
| popupRender        | 自定义下拉框内容                                          | `(originNode: VNode) => VNode`                                                  | -                     |
| dropdownRender     | 自定义下拉框内容（已废弃，请使用 popupRender）            | `(originNode: VNode) => VNode`                                                  | -                     |
| forceRender        | 强制渲染 Dropdown                                         | `boolean`                                                                       | `false`               |
| openClassName      | 菜单展开时给触发元素添加的类名                            | `string`                                                                        | -                     |
| rootClassName      | 下拉根元素的类名称                                        | `string`                                                                        | -                     |

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
