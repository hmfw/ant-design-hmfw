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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TooltipClassNamesSource">
  <TooltipClassNames />
</DemoBlock>

## API

### Tooltip Props

| 参数                 | 说明                                                                             | 类型                                                                                                                                                             | 默认值    |
| -------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| title                | 提示文字（空值时不渲染浮层）                                                     | `string \| number \| VNode \| () => VNode \| slot`                                                                                                               | -         |
| overlay              | `title` 的别名（AntD 旧版兼容）                                                  | 同 `title`                                                                                                                                                       | -         |
| placement            | 气泡框位置，溢出视口时自动翻转                                                   | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'top'`   |
| trigger              | 触发行为，可设单值或数组                                                         | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`                                                                                                                 | `'hover'` |
| open (v-model)       | 用于手动控制浮层显隐                                                             | `boolean`                                                                                                                                                        | -         |
| defaultOpen          | 默认是否显示（非受控）                                                           | `boolean`                                                                                                                                                        | `false`   |
| color                | 背景颜色                                                                         | `string`                                                                                                                                                         | -         |
| arrow                | 是否显示箭头，可对象配置 `{ pointAtCenter?: boolean }` 使箭头指向元素中心        | `boolean \| { pointAtCenter?: boolean }`                                                                                                                         | `true`    |
| mouseEnterDelay      | 鼠标移入后延时显示，单位秒                                                       | `number`                                                                                                                                                         | `0.1`     |
| mouseLeaveDelay      | 鼠标移出后延时隐藏，单位秒                                                       | `number`                                                                                                                                                         | `0.1`     |
| disabled             | 禁用 tooltip                                                                     | `boolean`                                                                                                                                                        | `false`   |
| fresh                | 强制重新计算浮层位置（变化时触发重新定位）                                       | `number \| string`                                                                                                                                               | -         |
| autoAdjustOverflow   | 浮层超出视口时自动翻转方向                                                       | `boolean`                                                                                                                                                        | `true`    |
| zIndex               | 自定义浮层 z-index                                                               | `number`                                                                                                                                                         | `1070`    |
| destroyOnHidden      | 隐藏时销毁浮层 DOM                                                               | `boolean`                                                                                                                                                        | `false`   |
| destroyTooltipOnHide | 同 `destroyOnHidden`（旧名，已弃用）                                             | `boolean`                                                                                                                                                        | `false`   |
| getPopupContainer    | 自定义浮层挂载容器（默认 `body`）                                                | `(triggerNode: HTMLElement) => HTMLElement`                                                                                                                      | -         |
| classNames           | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TooltipClassNames`                                                                                                                                              | -         |
| styles               | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TooltipStyles`                                                                                                                                                  | -         |

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

### DOM 结构与 className 映射

```html
<div class="hmfw-tooltip hmfw-tooltip-placement-top">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-tooltip-content">
    <!-- ↑ classNames.content / styles.content 应用于此 -->
    <div class="hmfw-tooltip-arrow">
      <!-- ↑ classNames.arrow / styles.arrow 应用于此 -->
    </div>
    <div class="hmfw-tooltip-inner">
      <!-- ↑ classNames.inner / styles.inner 应用于此 -->
      提示文字内容
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义内容区域样式 -->
  <Tooltip title="大号字体提示" :class-names="{ inner: 'custom-inner' }">
    <Button>悬停查看</Button>
  </Tooltip>

  <!-- 自定义箭头样式 -->
  <Tooltip title="自定义箭头" :class-names="{ arrow: 'custom-arrow' }">
    <Button>自定义箭头</Button>
  </Tooltip>

  <!-- 组合使用 -->
  <Tooltip
    title="完整自定义"
    :class-names="{
      root: 'custom-root',
      inner: 'custom-inner',
      arrow: 'custom-arrow',
    }"
  >
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

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制内容区域 -->
  <Tooltip
    title="内联样式"
    :styles="{
      inner: { fontSize: '16px', padding: '12px 16px', borderRadius: '8px' },
    }"
  >
    <Button>内联样式</Button>
  </Tooltip>

  <!-- 自定义根容器阴影 -->
  <Tooltip
    title="自定义阴影"
    :styles="{
      root: { filter: 'drop-shadow(0 4px 12px rgba(102, 126, 234, 0.4))' },
    }"
  >
    <Button>自定义阴影</Button>
  </Tooltip>

  <!-- 组合使用 -->
  <Tooltip
    title="组合样式"
    :styles="{
      root: { zIndex: '2000' },
      inner: { fontSize: '15px', fontWeight: '600' },
    }"
  >
    <Button>组合样式</Button>
  </Tooltip>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- Tooltip 是弹层组件，默认挂载到 `body`，因此在 `<style scoped>` 中需使用 `:global()` 选择器
- `arrow` 节点仅在 `arrow` prop 不为 `false` 时渲染
- 自定义 `root` 样式会与内置的位置类（如 `.hmfw-tooltip-placement-top`）和状态类（如 `.hmfw-tooltip-hidden`）合并
- 如果使用 `getPopupContainer` 自定义了挂载容器，需确保该容器的样式上下文支持你的自定义类

## 设计 Token

Tooltip 组件目前未直接消费 Design Token，样式以硬编码方式实现。背景色通过 `color` prop 或 CSS 变量 `--tooltip-bg` 控制（默认 `rgba(0, 0, 0, 0.85)`）。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量或 `classNames`/`styles` 实现。
