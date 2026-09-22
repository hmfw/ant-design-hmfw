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

### 触发方式

支持 `hover`、`click`、`focus`、`contextMenu` 四种触发方式，也可传数组组合多种触发。

<DemoBlock title="触发方式" :source="TooltipTriggerSource">
  <TooltipTrigger />
</DemoBlock>

### 受控显隐

通过 `v-model:open` 手动控制浮层显隐，`openChange` 回调的第二个参数 `info.source` 标识本次显隐由触发器（`trigger`）还是浮层（`popup`）引起。

<DemoBlock title="受控显隐" :source="TooltipControlledSource">
  <TooltipControlled />
</DemoBlock>

### 十二个方向

位置有十二个方向。

<DemoBlock title="十二个方向" :source="TooltipPlacementSource">
  <TooltipPlacement />
</DemoBlock>

### 无箭头

设置 `arrow={false}` 可隐藏箭头。

<DemoBlock title="无箭头" :source="TooltipNoArrowSource">
  <TooltipNoArrow />
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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TooltipClassNamesSource">
  <TooltipClassNames />
</DemoBlock>

## API

### Tooltip Props

| 参数               | 说明                                                                             | 类型                                                                                                                                                             | 默认值    |
| ------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| title              | 提示文字（空值时不渲染浮层）                                                     | `string \| number \| VNode \| () => VNode \| slot`                                                                                                               | -         |
| overlay            | `title` 的别名（AntD 旧版兼容）                                                  | 同 `title`                                                                                                                                                       | -         |
| placement          | 气泡框位置，溢出视口时自动翻转                                                   | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'top'`   |
| trigger            | 触发行为，可设单值或数组                                                         | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`                                                                                                                 | `'hover'` |
| open (v-model)     | 用于手动控制浮层显隐                                                             | `boolean`                                                                                                                                                        | -         |
| defaultOpen        | 默认是否显示（非受控）                                                           | `boolean`                                                                                                                                                        | `false`   |
| color              | 背景颜色                                                                         | `string`                                                                                                                                                         | -         |
| arrow              | 是否显示箭头，可对象配置 `{ pointAtCenter?: boolean }` 使箭头指向元素中心        | `boolean \| { pointAtCenter?: boolean }`                                                                                                                         | `true`    |
| mouseEnterDelay    | 鼠标移入后延时显示，单位秒                                                       | `number`                                                                                                                                                         | `0.1`     |
| mouseLeaveDelay    | 鼠标移出后延时隐藏，单位秒                                                       | `number`                                                                                                                                                         | `0.1`     |
| disabled           | 禁用 tooltip                                                                     | `boolean`                                                                                                                                                        | `false`   |
| fresh              | 强制重新计算浮层位置（变化时触发重新定位）                                       | `number \| string`                                                                                                                                               | -         |
| autoAdjustOverflow | 浮层超出视口时自动翻转方向                                                       | `boolean`                                                                                                                                                        | `true`    |
| zIndex             | 自定义浮层 z-index                                                               | `number`                                                                                                                                                         | `1070`    |
| destroyOnHidden    | 隐藏时销毁浮层 DOM                                                               | `boolean`                                                                                                                                                        | `false`   |
| getPopupContainer  | 自定义浮层挂载容器（默认 `body`）                                                | `(triggerNode: HTMLElement) => HTMLElement`                                                                                                                      | -         |
| classNames         | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TooltipClassNames`                                                                                                                                              | -         |
| styles             | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TooltipStyles`                                                                                                                                                  | -         |

### Tooltip Events

| 事件名          | 说明                      | 回调参数                                                          |
| --------------- | ------------------------- | ----------------------------------------------------------------- |
| update:open     | 显示隐藏的回调（v-model） | `(open: boolean) => void`                                         |
| openChange      | 显示隐藏的回调            | `(open: boolean, info: { source: 'trigger' \| 'popup' }) => void` |
| afterOpenChange | 浮层动画结束时触发        | `(open: boolean) => void`                                         |

事件回调类型可从包中导入：`TooltipOpenChangeHandler`、`TooltipOpenChangeInfo`、`TooltipAfterOpenChangeHandler`。

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

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Tooltip 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface TooltipClassNames {
  root?: string // 最外层弹层容器
  content?: string // 内容包裹层
  arrow?: string // 箭头元素（当 arrow 为 true 时渲染）
  inner?: string // 内部内容区域
}

interface TooltipStyles {
  root?: CSSProperties
  content?: CSSProperties
  arrow?: CSSProperties
  inner?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<TooltipSemantic />

### DOM 结构与 className 映射

```html
<div class="hmfw-tooltip hmfw-tooltip-placement-top">
  <!-- ↑ classNames.root / styles.root -->
  <div class="hmfw-tooltip-content">
    <!-- ↑ classNames.content / styles.content -->
    <div class="hmfw-tooltip-arrow">
      <!-- ↑ classNames.arrow / styles.arrow -->
    </div>
    <div class="hmfw-tooltip-inner">
      <!-- ↑ classNames.inner / styles.inner -->
      提示文字内容
    </div>
  </div>
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Tooltip title="完整自定义" :class-names="{ root: 'custom-root', inner: 'custom-inner', arrow: 'custom-arrow' }">
    <Button>自定义样式</Button>
  </Tooltip>

  <!-- styles：内联样式，优先级高于 classNames -->
  <Tooltip
    title="内联样式"
    :styles="{
      root: { filter: 'drop-shadow(0 4px 12px rgba(102, 126, 234, 0.4))' },
      inner: { fontSize: '16px', padding: '12px 16px', borderRadius: '8px' },
    }"
  >
    <Button>内联样式</Button>
  </Tooltip>

  <!-- 组合：classNames 与 styles 混用 -->
  <Tooltip title="组合样式" :class-names="{ inner: 'custom-inner' }" :styles="{ root: { zIndex: '2000' } }">
    <Button>组合样式</Button>
  </Tooltip>
</template>

<style scoped>
/* Tooltip 是弹层组件，挂载到 body 外，需使用 :global() */
:global(.custom-inner) {
  font-size: 16px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

:global(.custom-arrow::before) {
  background-color: #52c41a !important;
}

:global(.custom-root) {
  filter: drop-shadow(0 4px 12px rgba(102, 126, 234, 0.6));
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-tooltip`）合并，不会互相覆盖
- Tooltip 是弹层组件，默认挂载到 `body`，因此在 `<style scoped>` 中需使用 `:global()` 选择器
- 如果使用 `getPopupContainer` 自定义了挂载容器，需确保该容器的样式上下文支持你的自定义类

## 设计 Token

背景色由 CSS 变量 `--tooltip-bg` 控制，默认取暗色浮层 Token `--hmfw-color-bg-spotlight`（`rgba(0, 0, 0, 0.85)`），会随主题（暗色/自定义）变化。传入 `color` prop 时由组件内联覆盖 `--tooltip-bg`。字号、文字色、圆角、阴影分别消费 `--hmfw-font-size`、`--hmfw-color-text-light-solid`、`--hmfw-border-radius`、`--hmfw-box-shadow-secondary`，均支持通过 `ConfigProvider` 主题覆盖。
