# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现
- 和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等

## 代码演示


### 基础用法

最简单的用法，鼠标移入时显示。

<DemoBlock title="基础用法" :source="PopoverBasicSource">
  <PopoverBasic />
</DemoBlock>

### 触发方式

鼠标移入、聚集、点击。

<DemoBlock title="触发方式" :source="PopoverTriggerSource">
  <PopoverTrigger />
</DemoBlock>

### 十二个方向

位置有十二个方向。

<DemoBlock title="十二个方向" :source="PopoverPlacementSource">
  <PopoverPlacement />
</DemoBlock>

## API

### Popover Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `string \| slot` | - |
| content | 卡片内容 | `string \| slot` | - |
| trigger | 触发行为 | `'hover' \| 'click' \| 'focus'` | `'hover'` |
| placement | 气泡框位置 | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'` | `'top'` |
| open (v-model) | 用于手动控制浮层显隐 | `boolean` | - |
| color | 背景颜色 | `string` | - |

### Popover Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:open | 显示隐藏的回调 | `(open: boolean) => void` |
| openChange | 显示隐藏的回调 | `(open: boolean) => void` |

### Popover Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发气泡卡片的元素 |
| content | 卡片内容 |
| title | 卡片标题 |
