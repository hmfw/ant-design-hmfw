# Splitter 分割面板

分割面板用于将页面或容器分成多个可调整大小的区域。

## 何时使用

- 需要将页面或容器分成多个可调整的区域。
- 需要提供可折叠的侧边栏或面板。
- 需要指定区域的最大最小宽高时。

## 代码演示

### 基本用法

基本的分割面板，支持通过 `defaultSize`、`min`、`max` 控制面板尺寸。

<DemoBlock title="基本用法" :source="SplitterBasicSource">
  <SplitterBasic />
</DemoBlock>

### 垂直方向

设置 `orientation="vertical"` 可以垂直分割面板。

<DemoBlock title="垂直方向" :source="SplitterVerticalSource">
  <SplitterVertical />
</DemoBlock>

### 可折叠面板

通过设置 `collapsible` 属性支持面板折叠功能。`collapsible` 可以是布尔值（两侧都可折叠），也可以是对象精确控制折叠方向。

<DemoBlock title="可折叠面板" :source="SplitterCollapsibleSource">
  <SplitterCollapsible />
</DemoBlock>

### 懒加载模式

设置 `lazy` 属性启用懒加载模式。在此模式下，拖拽时仅显示预览线，松开鼠标后才应用新的尺寸，适合包含大量内容或复杂渲染的场景。

<DemoBlock title="懒加载模式" :source="SplitterLazySource">
  <SplitterLazy />
</DemoBlock>

### 受控模式

通过 `size` 和 `onResize` 实现受控组件模式，可以通过外部状态控制面板尺寸。

<DemoBlock title="受控模式" :source="SplitterControlSource">
  <SplitterControl />
</DemoBlock>

### 折叠图标显示

通过 `showCollapsibleIcon` 控制折叠图标的显示时机：`true` 始终显示、`false` 始终隐藏、`'auto'` 悬停时显示（默认）。

<DemoBlock title="折叠图标显示" :source="SplitterCollapsibleIconSource">
  <SplitterCollapsibleIcon />
</DemoBlock>

### 复杂组合

通过嵌套 `Splitter` 组件可以构建复杂的布局，如 IDE 风格的多区域界面。

<DemoBlock title="复杂组合" :source="SplitterGroupSource">
  <SplitterGroup />
</DemoBlock>

### 自定义样式

可以通过 `draggerIcon` 和 `collapsible.icon` 自定义拖拽图标和折叠图标。

<DemoBlock title="自定义样式" :source="SplitterCustomizeSource">
  <SplitterCustomize />
</DemoBlock>

### 双击重置

监听 `onDraggerDoubleClick` 事件，实现双击拖拽条重置为默认尺寸的功能。

<DemoBlock title="双击重置" :source="SplitterResetSource">
  <SplitterReset />
</DemoBlock>

### 语义化样式

通过 `classNames` 和 `styles` 属性自定义根节点、拖拽条、面板等语义化结构的类名与样式，`dragger` 支持字符串（同时应用于默认与激活状态）或对象（分别指定 `default` 和 `active`）。

<DemoBlock title="语义化样式" :source="SplitterStyleClassSource">
  <SplitterStyleClass />
</DemoBlock>

## API

### Splitter Props

| 参数                 | 说明                                                                             | 类型                                                          | 默认值         |
| -------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------- |
| orientation          | 分割方向                                                                         | `'horizontal' \| 'vertical'`                                  | `'horizontal'` |
| vertical             | 垂直布局（简写），与 `orientation` 共存时 `orientation` 优先                     | `boolean`                                                     | `false`        |
| rootClassName        | 根节点额外类名                                                                   | `string`                                                      | -              |
| collapsible          | 折叠配置，`motion` 控制是否开启折叠动画，`icon` 自定义折叠图标                   | `{ motion?: boolean; icon?: { start?: VNode; end?: VNode } }` | -              |
| destroyOnHidden      | 折叠时（size 为 0）销毁面板内容，应用于所有面板，可在单个面板上覆盖              | `boolean`                                                     | `false`        |
| draggerIcon          | 自定义拖拽图标                                                                   | `VNode`                                                       | -              |
| lazy                 | 懒加载模式，拖拽时仅显示预览，松开后才应用更改                                   | `boolean`                                                     | `false`        |
| classNames           | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SplitterClassNames`                                          | -              |
| styles               | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SplitterStyles`                                              | -              |
| onDraggerDoubleClick | 双击拖拽条回调                                                                   | `(index: number) => void`                                     | -              |
| onResizeStart        | 开始调整大小回调                                                                 | `(sizes: number[]) => void`                                   | -              |
| onResize             | 调整大小回调                                                                     | `(sizes: number[]) => void`                                   | -              |
| onResizeEnd          | 结束调整大小回调                                                                 | `(sizes: number[]) => void`                                   | -              |
| onCollapse           | 折叠/展开回调，返回所有面板的折叠状态和尺寸                                      | `(collapsed: boolean[], sizes: number[]) => void`             | -              |

### Splitter.Panel Props

| 参数            | 说明                                                            | 类型                                                                                     | 默认值  |
| --------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| className       | 面板自定义类名                                                  | `string`                                                                                 | -       |
| style           | 面板自定义样式                                                  | `CSSProperties`                                                                          | -       |
| min             | 最小尺寸，支持像素值或百分比                                    | `number \| string`                                                                       | -       |
| max             | 最大尺寸，支持像素值或百分比                                    | `number \| string`                                                                       | -       |
| size            | 受控尺寸，支持像素值或百分比                                    | `number \| string`                                                                       | -       |
| defaultSize     | 默认尺寸，支持像素值或百分比                                    | `number \| string`                                                                       | -       |
| resizable       | 是否可调整大小                                                  | `boolean`                                                                                | `true`  |
| collapsible     | 折叠配置，`true` 表示两侧都可折叠，对象可精确控制折叠方向和图标 | `boolean \| { start?: boolean; end?: boolean; showCollapsibleIcon?: boolean \| 'auto' }` | `false` |
| destroyOnHidden | 折叠时（size 为 0）销毁面板内容，覆盖 Splitter 的配置           | `boolean`                                                                                | -       |

### Splitter Slots

| 插槽名  | 说明                            |
| ------- | ------------------------------- |
| default | 面板内容，只支持 Splitter.Panel |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对分割面板的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface SplitterClassNames {
  root?: string // 分割面板根节点
  panel?: string // 面板节点
  dragger?: string | { default?: string; active?: string } // 拖拽条（支持区分默认和激活状态）
}

interface SplitterStyles {
  root?: CSSProperties
  panel?: CSSProperties
  dragger?: { default?: CSSProperties; active?: CSSProperties }
}
```

### DOM 结构与 className 映射

```html
<!-- 水平分割面板 -->
<div class="hmfw-splitter hmfw-splitter-horizontal">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <!-- 第一个面板 -->
  <div class="hmfw-splitter-panel" style="flex-basis: 40%; flex-grow: 0;">
    <!-- ↑ classNames.panel / styles.panel 应用于此 -->
    第一个面板内容
  </div>

  <!-- 分隔栏 -->
  <div class="hmfw-splitter-bar">
    <!-- 拖拽条 -->
    <div class="hmfw-splitter-bar-dragger">
      <!-- ↑ classNames.dragger.default / styles.dragger.default 应用于此 -->
      <!-- 激活时追加 hmfw-splitter-bar-dragger-active -->
      <!-- ↑ classNames.dragger.active / styles.dragger.active 应用于此 -->
    </div>

    <!-- 折叠按钮（如果启用） -->
    <div class="hmfw-splitter-bar-collapse-bar hmfw-splitter-bar-collapse-bar-start">
      <span class="hmfw-splitter-bar-collapse-icon">
        <!-- 折叠图标 -->
      </span>
    </div>
  </div>

  <!-- 第二个面板 -->
  <div class="hmfw-splitter-panel" style="flex-basis: 60%; flex-grow: 0;">第二个面板内容</div>
</div>

<!-- 垂直分割面板 -->
<div class="hmfw-splitter hmfw-splitter-vertical">
  <!-- 结构同上，方向改为垂直 -->
</div>

<!-- 懒加载模式：拖拽时显示预览线 -->
<div class="hmfw-splitter hmfw-splitter-horizontal">
  <div class="hmfw-splitter-panel">...</div>
  <div class="hmfw-splitter-bar">
    <!-- 预览线 -->
    <div
      class="hmfw-splitter-bar-preview hmfw-splitter-bar-preview-active"
      style="--hmfw-splitter-bar-preview-offset: 50px;"
    ></div>
    <div class="hmfw-splitter-bar-dragger hmfw-splitter-bar-dragger-active">
      <!-- 拖拽中 -->
    </div>
  </div>
  <div class="hmfw-splitter-panel">...</div>
</div>

<!-- 面板隐藏状态 -->
<div class="hmfw-splitter-panel hmfw-splitter-panel-hidden" style="flex-basis: 0; flex-grow: 0;">
  <!-- 面板被折叠时，添加 hmfw-splitter-panel-hidden 类 -->
</div>

<!-- 折叠动画 -->
<div class="hmfw-splitter-panel hmfw-splitter-panel-transition" style="flex-basis: 0; flex-grow: 0;">
  <!-- collapsible.motion 为 true 时，添加 hmfw-splitter-panel-transition 类 -->
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根节点样式 -->
  <Splitter :class-names="{ root: 'my-splitter' }" style="height: 300px">
    <Splitter.Panel>左侧</Splitter.Panel>
    <Splitter.Panel>右侧</Splitter.Panel>
  </Splitter>

  <!-- 自定义拖拽条样式 -->
  <Splitter :class-names="{ dragger: 'my-dragger' }" style="height: 300px">
    <Splitter.Panel>左侧</Splitter.Panel>
    <Splitter.Panel>右侧</Splitter.Panel>
  </Splitter>

  <!-- 区分拖拽条默认和激活状态 -->
  <Splitter
    :class-names="{
      dragger: {
        default: 'my-dragger-default',
        active: 'my-dragger-active',
      },
    }"
    style="height: 300px"
  >
    <Splitter.Panel>左侧</Splitter.Panel>
    <Splitter.Panel>右侧</Splitter.Panel>
  </Splitter>

  <!-- 自定义面板样式 -->
  <Splitter :class-names="{ panel: 'my-panel' }" style="height: 300px">
    <Splitter.Panel>左侧</Splitter.Panel>
    <Splitter.Panel>右侧</Splitter.Panel>
  </Splitter>
</template>

<style scoped>
:deep(.my-splitter) {
  border: 2px solid var(--hmfw-color-primary);
  border-radius: 8px;
}

:deep(.my-dragger) {
  background: var(--hmfw-color-primary);
}

:deep(.my-dragger-default) {
  background: var(--hmfw-color-border);
}

:deep(.my-dragger-active) {
  background: var(--hmfw-color-primary);
}

:deep(.my-panel) {
  padding: 16px;
  background: var(--hmfw-color-fill-quaternary);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制根节点 -->
  <Splitter
    :styles="{
      root: { border: '2px solid #1677ff', borderRadius: '8px' },
    }"
    style="height: 300px"
  >
    <Splitter.Panel>左侧</Splitter.Panel>
    <Splitter.Panel>右侧</Splitter.Panel>
  </Splitter>

  <!-- 自定义拖拽条样式 -->
  <Splitter
    :styles="{
      dragger: {
        default: { background: '#d9d9d9' },
        active: { background: '#1677ff' },
      },
    }"
    style="height: 300px"
  >
    <Splitter.Panel>左侧</Splitter.Panel>
    <Splitter.Panel>右侧</Splitter.Panel>
  </Splitter>

  <!-- 组合使用 -->
  <Splitter
    :styles="{
      root: { border: '1px solid #d9d9d9' },
      panel: { padding: '16px', background: '#f5f5f5' },
      dragger: { default: { background: '#ff4d4f' } },
    }"
    style="height: 300px"
  >
    <Splitter.Panel>左侧</Splitter.Panel>
    <Splitter.Panel>右侧</Splitter.Panel>
  </Splitter>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 语义节点包括 `root`（容器）、`panel`（面板）、`dragger`（拖拽条）
- `dragger` 支持字符串（同时应用于默认和激活状态）或对象（分别指定 `default` 和 `active`）
- `classNames.root` 会与组件内置的方向类名（如 `.hmfw-splitter-horizontal`）合并
- 拖拽时，拖拽条会自动添加 `.hmfw-splitter-bar-dragger-active` 类名
- 面板折叠时会自动添加 `.hmfw-splitter-panel-hidden` 类名
- 启用折叠动画时会自动添加 `.hmfw-splitter-panel-transition` 类名

## 设计 Token

Splitter 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                     | 说明           | 默认值                                 |
| ------------------------------ | -------------- | -------------------------------------- |
| `--hmfw-color-primary`         | 主题色         | `#1677ff`                              |
| `--hmfw-color-border`          | 边框色         | `#d9d9d9`                              |
| `--hmfw-color-fill-secondary`  | 次级填充色     | `rgba(0,0,0,0.06)`                     |
| `--hmfw-color-fill-tertiary`   | 三级填充色     | `rgba(0,0,0,0.04)`                     |
| `--hmfw-color-fill-quaternary` | 四级填充色     | `rgba(0,0,0,0.02)`                     |
| `--hmfw-color-text`            | 主文本色       | `rgba(0,0,0,0.88)`                     |
| `--hmfw-font-size-sm`          | 小号字号       | `12px`                                 |
| `--hmfw-control-height-sm`     | 小尺寸控件高度 | `24px`                                 |
| `--hmfw-border-radius-xs`      | 超小圆角       | `4px`                                  |
| `--hmfw-motion-duration-mid`   | 中速动画时长   | `0.2s`                                 |
| `--hmfw-motion-duration-slow`  | 慢速动画时长   | `0.3s`                                 |
| `--hmfw-motion-ease-in-out`    | 缓入缓出曲线   | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| `--hmfw-z-index-popup`         | 弹层层级       | `1050`                                 |

### 组件 Token

组件专属变量定义在 `.hmfw-splitter` 上，派生规则对齐 AntD `prepareComponentToken`，可直接覆盖以定制分隔条尺寸。

| Token 名称                           | 说明                                 | 默认值                           |
| ------------------------------------ | ------------------------------------ | -------------------------------- |
| `--hmfw-splitter-bar-size`           | 分隔线宽度（splitBarSize）           | `2px`                            |
| `--hmfw-splitter-trigger-size`       | 拖拽触发区域宽度（splitTriggerSize） | `6px`                            |
| `--hmfw-splitter-bar-draggable-size` | 拖拽标识长度（resizeSpinnerSize）    | `20px`                           |
| `--hmfw-splitter-bar-preview-offset` | 懒加载预览线偏移量                   | 动态计算（仅在懒加载模式下使用） |
