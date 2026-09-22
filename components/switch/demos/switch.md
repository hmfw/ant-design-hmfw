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

### 文字

带有文字的开关。

<DemoBlock title="文字" :source="SwitchLabelSource">
  <SwitchLabel />
</DemoBlock>

### 图标

带有图标的开关，可通过插槽传入图标组件。

<DemoBlock title="图标" :source="SwitchIconSource">
  <SwitchIcon />
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

| 参数              | 说明                                                                             | 类型                  | 默认值     |
| ----------------- | -------------------------------------------------------------------------------- | --------------------- | ---------- |
| checked(v-model)  | 指定当前是否选中                                                                 | `boolean`             | `false`    |
| defaultChecked    | 初始是否选中                                                                     | `boolean`             | `false`    |
| disabled          | 是否禁用                                                                         | `boolean`             | `false`    |
| loading           | 加载中的开关                                                                     | `boolean`             | `false`    |
| size              | 开关大小                                                                         | `'small' \| 'middle'` | `'middle'` |
| checkedChildren   | 选中时的内容                                                                     | `string \| VNode`     | -          |
| unCheckedChildren | 非选中时的内容                                                                   | `string \| VNode`     | -          |
| autoFocus         | 组件自动获取焦点                                                                 | `boolean`             | `false`    |
| id                | 组件的 id                                                                        | `string`              | -          |
| title             | 组件的 title 属性                                                                | `string`              | -          |
| tabIndex          | 组件的 tab index                                                                 | `number`              | -          |
| classNames        | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SwitchClassNames`    | -          |
| styles            | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SwitchStyles`        | -          |

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
  indicator?: string // 滑动手柄 span.hmfw-switch-handle（含加载图标）
  content?: string // 内部内容容器 span.hmfw-switch-inner
  checked?: string // 选中状态的子内容 span.hmfw-switch-inner-checked
  unchecked?: string // 未选中状态的子内容 span.hmfw-switch-inner-unchecked
}

interface SwitchStyles {
  root?: CSSProperties
  indicator?: CSSProperties
  content?: CSSProperties
  checked?: CSSProperties
  unchecked?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<SwitchSemantic />

### DOM 结构与 className 映射

```html
<!-- 基础开关 -->
<button class="hmfw-switch hmfw-switch-checked">
  <!-- ↑ classNames.root / styles.root -->
  <span class="hmfw-switch-handle">
    <!-- ↑ classNames.indicator / styles.indicator -->
  </span>
  <span class="hmfw-switch-inner">
    <!-- ↑ classNames.content / styles.content -->
    <span class="hmfw-switch-inner-checked">
      <!-- ↑ classNames.checked / styles.checked -->
      开
    </span>
    <span class="hmfw-switch-inner-unchecked">
      <!-- ↑ classNames.unchecked / styles.unchecked -->
      关
    </span>
  </span>
</button>

<!-- 加载状态：加载图标渲染在 handle 内部，随 indicator 一并定制 -->
<button class="hmfw-switch hmfw-switch-loading">
  <!-- ↑ classNames.root / styles.root -->
  <span class="hmfw-switch-handle">
    <!-- ↑ classNames.indicator / styles.indicator -->
    <span class="hmfw-switch-loading-icon"></span>
  </span>
</button>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Switch
    v-model:checked="checked"
    checked-children="开"
    un-checked-children="关"
    :class-names="{
      root: 'gradient-switch',
      indicator: 'custom-handle',
      content: 'custom-inner',
      checked: 'custom-checked',
    }"
  />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Switch
    v-model:checked="checked"
    checked-children="ON"
    un-checked-children="OFF"
    :styles="{
      root: { minWidth: '60px', height: '28px' },
      indicator: { width: '24px', height: '24px' },
      content: { fontSize: '13px', fontWeight: 'bold' },
      checked: { color: '#fffb00' },
      unchecked: { color: '#ffa940' },
    }"
  />

  <!-- 组合：classNames 与 styles 混用 -->
  <Switch
    v-model:checked="checked"
    :class-names="{ root: 'gradient-switch' }"
    :styles="{ indicator: { boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }, content: { fontSize: '12px' } }"
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

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-switch`）合并，不会互相覆盖
- 自定义 `root` 的尺寸时，可能需要同步调整 `indicator`（手柄）的位置和尺寸以保持视觉协调

## 设计 Token

Switch 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                   | 说明                                         | 默认值    |
| ---------------------------- | -------------------------------------------- | --------- |
| `--hmfw-color-primary`       | 主题色，用于选中状态的背景色和加载图标边框色 | `#1677ff` |
| `--hmfw-motion-duration-mid` | 背景、内容切换的过渡动画时长                 | `0.2s`    |

### 组件 Token

组件专属变量定义在 `.hmfw-switch` 上，可直接覆盖以定制单个组件的尺寸与样式。

| Token 名称                          | 说明                                          | 默认值                             |
| ----------------------------------- | --------------------------------------------- | ---------------------------------- |
| `--hmfw-switch-handle-bg`           | 手柄背景色（派生自 `color-text-light-solid`） | `#ffffff`                          |
| `--hmfw-switch-handle-shadow`       | 手柄阴影                                      | `0 2px 4px 0 rgba(0, 35, 11, 0.2)` |
| `--hmfw-switch-handle-size`         | 默认尺寸手柄大小                              | `18px`                             |
| `--hmfw-switch-handle-size-sm`      | 小尺寸手柄大小                                | `12px`                             |
| `--hmfw-switch-inner-max-margin`    | 默认尺寸内容区较宽一侧内边距                  | `24px`                             |
| `--hmfw-switch-inner-max-margin-sm` | 小尺寸内容区较宽一侧内边距                    | `18px`                             |
| `--hmfw-switch-inner-min-margin`    | 默认尺寸内容区较窄一侧内边距                  | `9px`                              |
| `--hmfw-switch-inner-min-margin-sm` | 小尺寸内容区较窄一侧内边距                    | `6px`                              |
| `--hmfw-switch-track-height`        | 默认尺寸轨道高度                              | `22px`                             |
| `--hmfw-switch-track-height-sm`     | 小尺寸轨道高度                                | `16px`                             |
| `--hmfw-switch-track-min-width`     | 默认尺寸轨道最小宽度                          | `44px`                             |
| `--hmfw-switch-track-min-width-sm`  | 小尺寸轨道最小宽度                            | `28px`                             |
| `--hmfw-switch-track-padding`       | 轨道内边距（手柄与边缘间距）                  | `2px`                              |
| `--hmfw-switch-loading-icon-border` | 加载图标非选中态边框色                        | `rgba(0, 0, 0, 0.2)`               |
