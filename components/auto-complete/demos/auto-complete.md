# AutoComplete 自动完成

输入框自动完成功能。

## 何时使用

需要自动完成时。

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入。
- Select 是在限定的可选项中进行选择，关键词是选择。

## 代码演示

### 基础用法

基本使用，通过 `options` 设置自动完成的数据源。

<DemoBlock title="基础用法" :source="AutoCompleteBasicSource">
  <AutoCompleteBasic />
</DemoBlock>

### 自定义选项

通过 `options` 的 `label` 属性自定义选项内容。

<DemoBlock title="自定义选项" :source="AutoCompleteCustomSource">
  <AutoCompleteCustom />
</DemoBlock>

### 邮箱补全

邮箱输入自动补全示例。

<DemoBlock title="邮箱补全" :source="AutoCompleteEmailSource">
  <AutoCompleteEmail />
</DemoBlock>

### 不同尺寸

三种大小的输入框，提供 `small`、`middle`（默认） 和 `large` 三种尺寸。

<DemoBlock title="不同尺寸" :source="AutoCompleteSizeSource">
  <AutoCompleteSize />
</DemoBlock>

### 高级特性

演示 defaultActiveFirstOption、notFoundContent 和自定义清除图标。

<DemoBlock title="高级特性" :source="AutoCompleteAdvancedSource">
  <AutoCompleteAdvanced />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="AutoCompleteClassNamesSource">
  <AutoCompleteClassNames />
</DemoBlock>

## API

> **注意：** AutoComplete 是**纯受控组件**，必须绑定 `value` 或使用 `v-model`，否则输入/选择不会反映到显示。

### AutoComplete Props

| 参数                     | 说明                                                                                                                                     | 类型                                                                       | 默认值     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------- |
| value(v-model)           | 指定当前选中的条目（**必需**，组件为纯受控模式）                                                                                         | `string`                                                                   | -          |
| options                  | 数据源                                                                                                                                   | `AutoCompleteOption[]`                                                     | `[]`       |
| disabled                 | 是否禁用                                                                                                                                 | `boolean`                                                                  | `false`    |
| placeholder              | 输入框占位文本                                                                                                                           | `string`                                                                   | -          |
| allowClear               | 支持清除，可传入对象自定义清除图标                                                                                                       | `boolean \| { clearIcon?: VNodeChild }`                                    | `false`    |
| size                     | 输入框大小                                                                                                                               | `'small' \| 'middle' \| 'large'`                                           | `'middle'` |
| status                   | 设置校验状态                                                                                                                             | `'error' \| 'warning'`                                                     | -          |
| filterOption             | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | `boolean \| ((inputValue: string, option: AutoCompleteOption) => boolean)` | `true`     |
| optionFilterProp         | 内置筛选时依据的字段；`label` 为非字符串（VNode）时自动回退到 `value`                                                                    | `'value' \| 'label'`                                                       | `'value'`  |
| backfill                 | 使用键盘选择选项的时候把选中项回填到输入框中（仅更新显示，不触发 `change`）                                                              | `boolean`                                                                  | `false`    |
| defaultActiveFirstOption | 是否默认高亮第一个选项                                                                                                                   | `boolean`                                                                  | `true`     |
| notFoundContent          | 当下拉列表为空时显示的内容，缺省时使用本地化文案（如“无匹配结果”）                                                                       | `VNodeChild`                                                               | -          |
| open                     | 是否展开下拉菜单（受控）                                                                                                                 | `boolean`                                                                  | -          |
| autoFocus                | 组件挂载后自动获取焦点                                                                                                                   | `boolean`                                                                  | `false`    |
| id                       | 透传到内部 `input` 的 id，便于表单 `label` 关联                                                                                          | `string`                                                                   | -          |
| classNames               | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style)                                                         | `AutoCompleteClassNames`                                                   | -          |
| styles                   | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style)                                                         | `AutoCompleteStyles`                                                       | -          |

> 注：`size` 缺省时会回退到 `ConfigProvider` 的 `componentSize`。

### AutoCompleteOption

| 参数     | 说明                                               | 类型         |
| -------- | -------------------------------------------------- | ------------ |
| value    | 选项的值，同时作为选中后回填到输入框的内容         | `string`     |
| label    | 选项的展示内容，支持富文本节点；不设置则回退 value | `VNodeChild` |
| disabled | 是否禁用该选项                                     | `boolean`    |

### AutoComplete Events

| 事件名                | 说明                                              | 回调参数                                              |
| --------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| update:value          | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string) => void`                             |
| change                | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string) => void`                             |
| select                | 被选中时调用，参数为选中项的 value 值             | `(value: string, option: AutoCompleteOption) => void` |
| search                | 搜索补全项的时候调用                              | `(value: string) => void`                             |
| focus                 | 获得焦点时的回调                                  | `(event: FocusEvent) => void`                         |
| blur                  | 失去焦点时的回调                                  | `(event: FocusEvent) => void`                         |
| clear                 | 点击清除按钮时的回调                              | `() => void`                                          |
| openChange            | 下拉框展开/收起时的回调                           | `(open: boolean) => void`                             |
| dropdownVisibleChange | `openChange` 的别名，对齐 antd v6                 | `(open: boolean) => void`                             |

### AutoComplete Methods

| 方法名  | 说明     |
| ------- | -------- |
| focus() | 获取焦点 |
| blur()  | 失去焦点 |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 AutoComplete 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface AutoCompleteClassNames {
  root?: string // 根节点（输入框容器）
  prefix?: string // 前缀容器
  input?: string // 输入框
  clear?: string // 清除图标
  suffix?: string // 后缀容器
  dropdown?: string // 下拉面板
  option?: string // 选项
  empty?: string // 空状态内容
}

interface AutoCompleteStyles {
  root?: CSSProperties
  prefix?: CSSProperties
  input?: CSSProperties
  clear?: CSSProperties
  suffix?: CSSProperties
  dropdown?: CSSProperties
  option?: CSSProperties
  empty?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 输入框容器 -->
<div class="hmfw-auto-complete">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <span class="hmfw-auto-complete-prefix">
    <!-- ↑ classNames.prefix / styles.prefix 应用于此 -->
    <slot name="prefix"></slot>
  </span>

  <input class="hmfw-auto-complete-input" />
  <!-- ↑ classNames.input / styles.input 应用于此 -->

  <span class="hmfw-auto-complete-clear">
    <!-- ↑ classNames.clear / styles.clear 应用于此 -->
    <CloseCircleFilled />
  </span>

  <span class="hmfw-auto-complete-suffix">
    <!-- ↑ classNames.suffix / styles.suffix 应用于此 -->
    <slot name="suffix"></slot>
  </span>
</div>

<!-- 下拉面板（挂载到 body） -->
<div class="hmfw-auto-complete-dropdown">
  <!-- ↑ classNames.dropdown / styles.dropdown 应用于此 -->

  <div class="hmfw-auto-complete-option">
    <!-- ↑ classNames.option / styles.option 应用于此 -->
    选项内容
  </div>

  <div class="hmfw-auto-complete-empty">
    <!-- ↑ classNames.empty / styles.empty 应用于此 -->
    暂无数据
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义输入框容器 -->
  <AutoComplete v-model="value" :options="options" :class-names="{ root: 'my-input-wrapper' }" />

  <!-- 自定义下拉面板与选项 -->
  <AutoComplete
    v-model="value"
    :options="options"
    :class-names="{
      dropdown: 'my-dropdown',
      option: 'my-option',
    }"
  />

  <!-- 自定义清除按钮 -->
  <AutoComplete v-model="value" :options="options" allow-clear :class-names="{ clear: 'my-clear-icon' }" />
</template>

<style scoped>
:deep(.my-input-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.my-input-wrapper:hover) {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

:global(.my-dropdown) {
  background: linear-gradient(to bottom, #f0f5ff 0%, #ffffff 100%);
  border: 2px solid #1890ff;
  box-shadow: 0 4px 16px rgba(24, 144, 255, 0.2);
}

:global(.my-option:hover) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  transform: translateX(4px);
}

:deep(.my-clear-icon) {
  color: #ff4d4f;
  transition: transform 0.3s;
}

:deep(.my-clear-icon:hover) {
  transform: rotate(90deg);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制输入框 -->
  <AutoComplete
    v-model="value"
    :options="options"
    :styles="{
      root: { borderRadius: '20px', borderColor: '#722ed1' },
      input: { color: '#722ed1', fontWeight: 'bold' },
    }"
  />

  <!-- 自定义清除按钮颜色 -->
  <AutoComplete
    v-model="value"
    :options="options"
    allow-clear
    :styles="{
      clear: { color: '#eb2f96', fontSize: '16px' },
    }"
  />

  <!-- 组合使用 -->
  <AutoComplete
    v-model="value"
    :options="options"
    :styles="{
      root: { borderColor: '#52c41a' },
      input: { fontSize: '16px' },
      dropdown: { background: '#f6ffed' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 下拉面板（`dropdown`、`option`、`empty`）挂载到 `body` 之外，样式定义时需要使用 `:global()` 而非 `:deep()`
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-auto-complete-disabled`）合并
- 自定义 `dropdown` 样式时，注意与全局主题的协调性

## 设计 Token

AutoComplete 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                      | 说明         | 默认值             |
| ------------------------------- | ------------ | ------------------ |
| `--hmfw-color-bg-text-hover`    | 文本悬停背景 | `rgba(0,0,0,0.06)` |
| `--hmfw-color-border`           | 边框色       | `#d9d9d9`          |
| `--hmfw-color-primary`          | 主题色       | `#1677ff`          |
| `--hmfw-color-primary-bg`       | 主题背景色   | `#e6f4ff`          |
| `--hmfw-color-primary-bg-hover` | 主题背景悬停 | `#bae0ff`          |
| `--hmfw-color-text`             | 主文本色     | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-disabled`    | 禁用文本色   | `rgba(0,0,0,0.25)` |
