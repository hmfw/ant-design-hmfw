# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时。
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="SwitchBasicSource">
  <SwitchBasic />
</DemoBlock>

### 文字和图标

带有文字和图标的开关。

<DemoBlock title="文字和图标" :source="SwitchLabelSource">
  <SwitchLabel />
</DemoBlock>

### 加载中

标识开关操作仍在执行中。

<DemoBlock title="加载中" :source="SwitchLoadingSource">
  <SwitchLoading />
</DemoBlock>

### 不同尺寸

`size="small"` 表示小号开关。

<DemoBlock title="不同尺寸" :source="SwitchSizeSource">
  <SwitchSize />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对根容器、手柄、加载图标、内部文字等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="SwitchClassNamesSource">
  <SwitchClassNames />
</DemoBlock>

## API

### Switch Props

| 参数              | 说明                                                                             | 类型                   | 默认值      |
| ----------------- | -------------------------------------------------------------------------------- | ---------------------- | ----------- |
| checked(v-model)  | 指定当前是否选中                                                                 | `boolean`              | `false`     |
| defaultChecked    | 初始是否选中                                                                     | `boolean`              | `false`     |
| disabled          | 是否禁用                                                                         | `boolean`              | `false`     |
| loading           | 加载中的开关                                                                     | `boolean`              | `false`     |
| size              | 开关大小                                                                         | `'default' \| 'small'` | `'default'` |
| checkedChildren   | 选中时的内容                                                                     | `string \| VNode`      | -           |
| unCheckedChildren | 非选中时的内容                                                                   | `string \| VNode`      | -           |
| autoFocus         | 组件自动获取焦点                                                                 | `boolean`              | `false`     |
| id                | 组件的 id                                                                        | `string`               | -           |
| title             | 组件的 title 属性                                                                | `string`               | -           |
| tabIndex          | 组件的 tab index                                                                 | `number`               | -           |
| classNames        | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SwitchClassNames`     | -           |
| styles            | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SwitchStyles`         | -           |

### Switch Events

| 事件名         | 说明             | 回调参数                                        |
| -------------- | ---------------- | ----------------------------------------------- |
| update:checked | 变化时回调函数   | `(checked: boolean) => void`                    |
| change         | 变化时回调函数   | `(checked: boolean, event: MouseEvent) => void` |
| click          | 点击时回调函数   | `(checked: boolean, event: MouseEvent) => void` |
| focus          | 获取焦点时的回调 | `(event: FocusEvent) => void`                   |
| blur           | 失去焦点时的回调 | `(event: FocusEvent) => void`                   |

### Switch Slots

| 插槽名            | 说明           |
| ----------------- | -------------- |
| checkedChildren   | 选中时的内容   |
| unCheckedChildren | 非选中时的内容 |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Switch 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface SwitchClassNames {
  root?: string // 根节点 button.hmfw-switch
  handle?: string // 滑动手柄 span.hmfw-switch-handle
  loadingIcon?: string // 加载图标 span.hmfw-switch-loading-icon
  inner?: string // 内部内容容器 span.hmfw-switch-inner
  checked?: string // 选中状态的子内容 span.hmfw-switch-inner-checked
  unchecked?: string // 未选中状态的子内容 span.hmfw-switch-inner-unchecked
}

interface SwitchStyles {
  root?: CSSProperties
  handle?: CSSProperties
  loadingIcon?: CSSProperties
  inner?: CSSProperties
  checked?: CSSProperties
  unchecked?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 基础开关 -->
<button class="hmfw-switch hmfw-switch-checked">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-switch-handle">
    <!-- ↑ classNames.handle / styles.handle 应用于此 -->
  </span>
  <span class="hmfw-switch-inner">
    <!-- ↑ classNames.inner / styles.inner 应用于此 -->
    <span class="hmfw-switch-inner-checked">
      <!-- ↑ classNames.checked / styles.checked 应用于此 -->
      开
    </span>
    <span class="hmfw-switch-inner-unchecked">
      <!-- ↑ classNames.unchecked / styles.unchecked 应用于此 -->
      关
    </span>
  </span>
</button>

<!-- 加载状态 -->
<button class="hmfw-switch hmfw-switch-loading">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-switch-handle">
    <!-- ↑ classNames.handle / styles.handle 应用于此 -->
    <span class="hmfw-switch-loading-icon">
      <!-- ↑ classNames.loadingIcon / styles.loadingIcon 应用于此 -->
    </span>
  </span>
</button>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根容器渐变背景 -->
  <Switch v-model:checked="checked" :class-names="{ root: 'gradient-switch' }" />

  <!-- 自定义手柄样式 -->
  <Switch
    v-model:checked="checked"
    :class-names="{
      root: 'custom-root',
      handle: 'custom-handle',
    }"
  />

  <!-- 自定义内部文字样式 -->
  <Switch
    v-model:checked="checked"
    checked-children="开"
    un-checked-children="关"
    :class-names="{
      inner: 'custom-inner',
      checked: 'custom-checked',
      unchecked: 'custom-unchecked',
    }"
  />
</template>

<style scoped>
:deep(.gradient-switch) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.3s;
}

:deep(.custom-handle) {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.6);
}

:deep(.custom-inner) {
  font-weight: bold;
}

:deep(.custom-checked) {
  color: #fffb00;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制尺寸和颜色 -->
  <Switch
    v-model:checked="checked"
    :styles="{
      root: { minWidth: '60px', height: '28px' },
      handle: { width: '24px', height: '24px' },
    }"
  />

  <!-- 自定义文字样式 -->
  <Switch
    v-model:checked="checked"
    checked-children="ON"
    un-checked-children="OFF"
    :styles="{
      inner: { fontSize: '13px', fontWeight: 'bold' },
      checked: { color: '#fffb00' },
      unchecked: { color: '#ffa940' },
    }"
  />

  <!-- 组合使用 -->
  <Switch
    v-model:checked="checked"
    :styles="{
      root: { borderRadius: '14px' },
      handle: { boxShadow: '0 2px 8px rgba(0,0,0,0.3)' },
      inner: { fontSize: '12px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-switch-checked`、`.hmfw-switch-loading`）合并
- `checked` 和 `unchecked` 对应开关内部的两个子内容节点，仅在设置 `checkedChildren` / `unCheckedChildren` 时渲染
- `loadingIcon` 仅在 `loading` 状态时渲染在 `handle` 内部
- 自定义 `root` 的尺寸时，可能需要同步调整 `handle` 的位置和尺寸以保持视觉协调

## 设计 Token

Switch 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                   | 说明                                         | 默认值    |
| ---------------------------- | -------------------------------------------- | --------- |
| `--hmfw-color-primary`       | 主题色，用于选中状态的背景色和加载图标边框色 | `#1677ff` |
| `--hmfw-motion-duration-mid` | 背景、内容切换的过渡动画时长                 | `0.2s`    |

### 组件 Token

组件专属变量定义在 `.hmfw-switch` 上，可直接覆盖以定制单个组件的尺寸与样式。

| Token 名称                          | 说明                         | 默认值                             |
| ----------------------------------- | ---------------------------- | ---------------------------------- |
| `--hmfw-switch-handle-bg`           | 手柄背景色                   | `#fff`                             |
| `--hmfw-switch-handle-shadow`       | 手柄阴影                     | `0 2px 4px 0 rgba(0, 35, 11, 0.2)` |
| `--hmfw-switch-handle-size`         | 默认尺寸手柄大小             | `18px`                             |
| `--hmfw-switch-handle-size-sm`      | 小尺寸手柄大小               | `12px`                             |
| `--hmfw-switch-inner-max-margin`    | 默认尺寸内容区较宽一侧内边距 | `24px`                             |
| `--hmfw-switch-inner-max-margin-sm` | 小尺寸内容区较宽一侧内边距   | `18px`                             |
| `--hmfw-switch-inner-min-margin`    | 默认尺寸内容区较窄一侧内边距 | `9px`                              |
| `--hmfw-switch-inner-min-margin-sm` | 小尺寸内容区较窄一侧内边距   | `6px`                              |
| `--hmfw-switch-track-height`        | 默认尺寸轨道高度             | `22px`                             |
| `--hmfw-switch-track-height-sm`     | 小尺寸轨道高度               | `16px`                             |
| `--hmfw-switch-track-min-width`     | 默认尺寸轨道最小宽度         | `44px`                             |
| `--hmfw-switch-track-min-width-sm`  | 小尺寸轨道最小宽度           | `28px`                             |
| `--hmfw-switch-track-padding`       | 轨道内边距（手柄与边缘间距） | `2px`                              |
