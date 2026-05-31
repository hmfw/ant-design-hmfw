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
| title | 卡片标题（空值时不渲染浮层） | `string \| number \| VNode \| () => VNode \| slot` | - |
| content | 卡片内容（与 title 同时为空时不渲染浮层） | `string \| number \| VNode \| () => VNode \| slot` | - |
| trigger | 触发行为 | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `'hover'` |
| placement | 气泡框位置，溢出视口时自动翻转 | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'top'` |
| open (v-model) | 用于手动控制浮层显隐 | `boolean` | - |
| defaultOpen | 默认是否显示（非受控） | `boolean` | `false` |
| color | 背景颜色 | `string` | - |
| arrow | 是否显示箭头，可对象配置 | `boolean \| { pointAtCenter?: boolean }` | `true` |
| mouseEnterDelay | 鼠标移入后延时显示，单位秒 | `number` | `0.1` |
| mouseLeaveDelay | 鼠标移出后延时隐藏，单位秒 | `number` | `0.1` |
| disabled | 禁用 popover | `boolean` | `false` |
| autoAdjustOverflow | 浮层超出视口时自动翻转方向 | `boolean` | `true` |
| zIndex | 自定义浮层 z-index | `number` | `1070` |
| destroyOnHidden | 隐藏时销毁浮层 DOM | `boolean` | `false` |
| getPopupContainer | 自定义浮层挂载容器（默认 `body`） | `(triggerNode: HTMLElement) => HTMLElement` | - |
| overlayStyle | 卡片样式 | `Record<string, string>` | - |
| overlayInnerStyle | 卡片内层样式 | `Record<string, string>` | - |

### Popover Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:open | 显示隐藏的回调（v-model） | `(open: boolean) => void` |
| openChange | 显示隐藏的回调 | `(open: boolean) => void` |
| afterOpenChange | 浮层动画结束时触发 | `(open: boolean) => void` |

### Popover Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发气泡卡片的元素 |
| content | 卡片内容（与 `content` prop 二选一） |
| title | 卡片标题（与 `title` prop 二选一） |
