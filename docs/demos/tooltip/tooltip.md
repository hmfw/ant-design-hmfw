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

### 箭头居中

设置 `arrow.pointAtCenter` 可以让箭头始终指向触发元素的中心。

<DemoBlock title="箭头居中" :source="TooltipArrowCenterSource">
  <TooltipArrowCenter />
</DemoBlock>

### 强制重新计算位置

使用 `fresh` 属性可以强制重新计算浮层位置，适用于触发元素位置动态变化的场景。

<DemoBlock title="强制重新计算位置" :source="TooltipFreshSource">
  <TooltipFresh />
</DemoBlock>

### 动态内容自适应

当浮层内容动态变化时，Tooltip 会自动重新计算位置，确保浮层不会溢出视口。

<DemoBlock title="动态内容自适应" :source="TooltipDynamicContentSource">
  <TooltipDynamicContent />
</DemoBlock>

## API

### Tooltip Props

| 参数                 | 说明                                                                      | 类型                                                                                                                                                             | 默认值    |
| -------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| title                | 提示文字（空值时不渲染浮层）                                              | `string \| number \| VNode \| () => VNode \| slot`                                                                                                               | -         |
| overlay              | `title` 的别名（AntD 旧版兼容）                                           | 同 `title`                                                                                                                                                       | -         |
| placement            | 气泡框位置，溢出视口时自动翻转                                            | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'top'`   |
| trigger              | 触发行为，可设单值或数组                                                  | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`                                                                                                                 | `'hover'` |
| open (v-model)       | 用于手动控制浮层显隐                                                      | `boolean`                                                                                                                                                        | -         |
| defaultOpen          | 默认是否显示（非受控）                                                    | `boolean`                                                                                                                                                        | `false`   |
| color                | 背景颜色                                                                  | `string`                                                                                                                                                         | -         |
| arrow                | 是否显示箭头，可对象配置 `{ pointAtCenter?: boolean }` 使箭头指向元素中心 | `boolean \| { pointAtCenter?: boolean }`                                                                                                                         | `true`    |
| mouseEnterDelay      | 鼠标移入后延时显示，单位秒                                                | `number`                                                                                                                                                         | `0.1`     |
| mouseLeaveDelay      | 鼠标移出后延时隐藏，单位秒                                                | `number`                                                                                                                                                         | `0.1`     |
| disabled             | 禁用 tooltip                                                              | `boolean`                                                                                                                                                        | `false`   |
| fresh                | 强制重新计算浮层位置（变化时触发重新定位）                                | `number \| string`                                                                                                                                               | -         |
| autoAdjustOverflow   | 浮层超出视口时自动翻转方向                                                | `boolean`                                                                                                                                                        | `true`    |
| zIndex               | 自定义浮层 z-index                                                        | `number`                                                                                                                                                         | `1070`    |
| destroyOnHidden      | 隐藏时销毁浮层 DOM                                                        | `boolean`                                                                                                                                                        | `false`   |
| destroyTooltipOnHide | 同 `destroyOnHidden`（旧名，已弃用）                                      | `boolean`                                                                                                                                                        | `false`   |
| getPopupContainer    | 自定义浮层挂载容器（默认 `body`）                                         | `(triggerNode: HTMLElement) => HTMLElement`                                                                                                                      | -         |

### Tooltip Events

| 事件名          | 说明                      | 回调参数                  |
| --------------- | ------------------------- | ------------------------- |
| update:open     | 显示隐藏的回调（v-model） | `(open: boolean) => void` |
| openChange      | 显示隐藏的回调            | `(open: boolean) => void` |
| afterOpenChange | 浮层动画结束时触发        | `(open: boolean) => void` |

### Tooltip Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 触发提示的元素                     |
| title   | 提示文字（与 `title` prop 二选一） |

## 特性说明

### 自动定位更新

Tooltip 使用 ResizeObserver 监听浮层内容尺寸变化，当内容动态变化时会自动重新计算位置，确保浮层不会溢出视口边界。

### 箭头居中

设置 `arrow: { pointAtCenter: true }` 可以让箭头始终指向触发元素的中心位置，而不是跟随浮层边缘。这在触发元素较宽或使用 `topLeft`、`bottomRight` 等偏移位置时特别有用。

### 强制重新定位

通过改变 `fresh` 属性的值（通常使用递增的数字），可以强制 Tooltip 重新计算浮层位置。这在触发元素位置动态变化（如动画、拖拽）时很有用。
