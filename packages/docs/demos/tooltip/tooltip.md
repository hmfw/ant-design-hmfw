# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

- 鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作

## 代码演示


### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="TooltipBasicSource">
  <TooltipBasic />
</DemoBlock>

### 十二个方向

位置有十二个方向。

<DemoBlock title="十二个方向" :source="TooltipPlacementSource">
  <TooltipPlacement />
</DemoBlock>

### 自定义颜色

自定义提示框颜色。

<DemoBlock title="自定义颜色" :source="TooltipCustomColorSource">
  <TooltipCustomColor />
</DemoBlock>

## API

### Tooltip Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文字 | `string \| slot` | - |
| placement | 气泡框位置 | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'top'` |
| trigger | 触发行为 | `'hover' \| 'click' \| 'focus'` | `'hover'` |
| open (v-model) | 用于手动控制浮层显隐 | `boolean` | - |
| color | 背景颜色 | `string` | - |
| arrow | 是否显示箭头 | `boolean` | `true` |

### Tooltip Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:open | 显示隐藏的回调 | `(open: boolean) => void` |
| openChange | 显示隐藏的回调 | `(open: boolean) => void` |

### Tooltip Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发提示的元素 |
| title | 提示文字 |
