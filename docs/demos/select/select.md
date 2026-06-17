# Select 选择器

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示

### 基础用法

基本使用。

<DemoBlock title="基础用法" :source="SelectBasicSource">
  <SelectBasic />
</DemoBlock>

### 多选

通过 `mode="multiple"` 开启多选模式。

<DemoBlock title="多选" :source="SelectMultipleSource">
  <SelectMultiple />
</DemoBlock>

### 搜索

通过 `show-search` 开启搜索功能。

<DemoBlock title="搜索" :source="SelectSearchSource">
  <SelectSearch />
</DemoBlock>

### 标签模式

通过 `mode="tags"` 开启标签模式，可以自由输入标签。配合 `token-separators` 可以自动分词。

<DemoBlock title="标签模式" :source="SelectTagsSource">
  <SelectTags />
</DemoBlock>

### 获取选项对象

通过 `label-in-value` 可以获取选项的完整对象（包含 value 和 label）。

<DemoBlock title="获取选项对象" :source="SelectLabelInValueSource">
  <SelectLabelInValue />
</DemoBlock>

### 选项分组

使用 `options` 的嵌套结构实现选项分组。

<DemoBlock title="选项分组" :source="SelectOptGroupSource">
  <SelectOptGroup />
</DemoBlock>

### 限制选择数量

通过 `max-count` 限制多选模式下的最大选择数量。

<DemoBlock title="限制选择数量" :source="SelectMaxCountSource">
  <SelectMaxCount />
</DemoBlock>

### 虚拟滚动

使用 `virtual` 属性开启虚拟滚动，适用于大数据量场景（推荐选项数超过 100 时使用）。

<DemoBlock title="虚拟滚动" :source="SelectVirtualSource">
  <SelectVirtual />
</DemoBlock>

## API

### Select Props

| 参数                     | 说明                                              | 类型                                                                         | 默认值                                                   |
| ------------------------ | ------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| value(v-model)           | 指定当前选中的条目                                | `string \| number \| (string \| number)[] \| LabeledValue \| LabeledValue[]` | -                                                        |
| defaultValue             | 指定默认选中的条目                                | `string \| number \| (string \| number)[] \| LabeledValue \| LabeledValue[]` | -                                                        |
| options                  | 数据化配置选项内容，支持嵌套（OptGroup）          | `SelectOption[]`                                                             | `[]`                                                     |
| disabled                 | 是否禁用                                          | `boolean`                                                                    | `false`                                                  |
| placeholder              | 选择框默认文字                                    | `string`                                                                     | -                                                        |
| allowClear               | 支持清除                                          | `boolean`                                                                    | `false`                                                  |
| size                     | 选择框大小                                        | `'small' \| 'middle' \| 'large'`                                             | `'middle'`                                               |
| mode                     | 设置 Select 的模式为多选或标签                    | `'multiple' \| 'tags'`                                                       | -                                                        |
| showSearch               | 使单选模式可搜索                                  | `boolean`                                                                    | `false`                                                  |
| maxTagCount              | 最多显示多少个 tag                                | `number`                                                                     | -                                                        |
| maxCount                 | 最多选择多少个选项（multiple/tags 模式）          | `number`                                                                     | -                                                        |
| maxTagPlaceholder        | 隐藏 tag 时显示的内容                             | `string \| ((omittedValues) => string)`                                      | -                                                        |
| status                   | 设置校验状态                                      | `'error' \| 'warning'`                                                       | -                                                        |
| open                     | 是否展开下拉菜单                                  | `boolean`                                                                    | -                                                        |
| loading                  | 加载中状态                                        | `boolean`                                                                    | `false`                                                  |
| labelInValue             | 是否把每个选项的 label 包装到 value 中            | `boolean`                                                                    | `false`                                                  |
| tokenSeparators          | 自动分词的分隔符（tags 模式）                     | `string[]`                                                                   | -                                                        |
| filterOption             | 是否根据输入项进行筛选                            | `boolean \| ((input: string, option: SelectOption) => boolean)`              | `true`                                                   |
| notFoundContent          | 当下拉列表为空时显示的内容                        | `string`                                                                     | -                                                        |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽                              | `boolean`                                                                    | `true`                                                   |
| autoClearSearchValue     | 选中后是否清空搜索框（multiple/tags 模式）        | `boolean`                                                                    | `true`                                                   |
| optionRender             | 自定义下拉选项渲染                                | `(option: SelectOption, info: { index: number }) => VNode`                   | -                                                        |
| labelRender              | 自定义选中项渲染                                  | `(props: LabeledValue) => VNode`                                             | -                                                        |
| tagRender                | 自定义 tag 渲染（multiple/tags 模式）             | `(props: { label, value, closable, onClose }) => VNode`                      | -                                                        |
| fieldNames               | 自定义字段名                                      | `{ label?: string; value?: string; options?: string }`                       | `{ label: 'label', value: 'value', options: 'options' }` |
| virtual                  | 启用虚拟滚动（推荐选项数 > 100 时使用）           | `boolean`                                                                    | `false`                                                  |
| listHeight               | 下拉列表高度（启用虚拟滚动时）                    | `number`                                                                     | `256`                                                    |
| listItemHeight           | 下拉列表每项高度（启用虚拟滚动时）                | `number`                                                                     | `32`                                                     |
| classNames               | 语义化 className（[详见下方](#语义化-classname)） | `SelectClassNames`                                                           | -                                                        |
| styles                   | 语义化 style（[详见下方](#语义化-style)）         | `SelectStyles`                                                               | -                                                        |

### SelectOption

| 参数     | 说明                    | 类型               |
| -------- | ----------------------- | ------------------ |
| value    | 选项的值                | `string \| number` |
| label    | 选项的标签              | `string`           |
| disabled | 是否禁用该选项          | `boolean`          |
| title    | 选项的 title 属性       | `string`           |
| options  | 子选项（用于 OptGroup） | `SelectOption[]`   |

### LabeledValue

| 参数  | 说明       | 类型               |
| ----- | ---------- | ------------------ |
| value | 选项的值   | `string \| number` |
| label | 选项的标签 | `string`           |
| key   | 选项的 key | `string`           |

### Select Events

| 事件名                | 说明                                              | 回调参数                                                               |
| --------------------- | ------------------------------------------------- | ---------------------------------------------------------------------- |
| update:value          | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: SelectValue) => void`                                         |
| change                | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: SelectValue, option: SelectOption \| SelectOption[]) => void` |
| search                | 文本框值变化时回调                                | `(value: string) => void`                                              |
| select                | 选中选项时回调                                    | `(value: string \| number, option: SelectOption) => void`              |
| deselect              | 取消选中选项时回调                                | `(value: string \| number) => void`                                    |
| focus                 | 获得焦点时回调                                    | `() => void`                                                           |
| blur                  | 失去焦点时回调                                    | `() => void`                                                           |
| clear                 | 清除内容时回调                                    | `() => void`                                                           |
| dropdownVisibleChange | 下拉菜单显示/隐藏时回调                           | `(visible: boolean) => void`                                           |

### Select Methods

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| focus  | 获取焦点 | -    |
| blur   | 失去焦点 | -    |

## 语义化 className

通过 `classNames` 属性可以自定义 Select 各部分的 className。

### SelectClassNames

| 属性名      | 说明                                                         | 类型     | 版本 |
| ----------- | ------------------------------------------------------------ | -------- | ---- |
| root        | 根节点 `div.hmfw-select`                                     | `string` | -    |
| selector    | 选择器容器 `div.hmfw-select-selector`                        | `string` | -    |
| item        | 已选项 `span.hmfw-select-selection-item`（多选模式下为标签） | `string` | -    |
| placeholder | 占位符 `span.hmfw-select-selection-placeholder`              | `string` | -    |
| arrow       | 后缀箭头容器 `div.hmfw-select-arrow`                         | `string` | -    |
| clear       | 清除按钮 `span.hmfw-select-clear`                            | `string` | -    |
| dropdown    | 下拉面板 `div.hmfw-select-dropdown`                          | `string` | -    |
| option      | 选项 `div.hmfw-select-item-option`                           | `string` | -    |
| optionLabel | 选项内容 `div.hmfw-select-item-option-content`               | `string` | -    |
| optionState | 选项选中状态图标 `span.hmfw-select-item-option-state`        | `string` | -    |

### DOM 结构

```html
<div class="hmfw-select">
  <!-- root -->
  <div class="hmfw-select-selector">
    <!-- selector -->
    <span class="hmfw-select-selection-item">已选项</span>
    <!-- item -->
    <span class="hmfw-select-selection-placeholder">占位符</span>
    <!-- placeholder -->
  </div>
  <div class="hmfw-select-arrow">▾</div>
  <!-- arrow -->
  <span class="hmfw-select-clear">×</span>
  <!-- clear -->
  <!-- Teleport 到 body -->
  <div class="hmfw-select-dropdown">
    <!-- dropdown -->
    <div class="hmfw-select-item-option">
      <!-- option -->
      <div class="hmfw-select-item-option-content">选项</div>
      <!-- optionLabel -->
      <span class="hmfw-select-item-option-state">✓</span>
      <!-- optionState -->
    </div>
  </div>
</div>
```

### 使用示例

```vue
<template>
  <Select
    :options="options"
    :classNames="{
      root: 'my-select-root',
      selector: 'my-select-selector',
      dropdown: 'my-select-dropdown',
      option: 'my-select-option',
    }"
  />
</template>
```

**注意事项：**

- `dropdown` 通过 `Teleport to="body"` 渲染，因此其样式必须使用**全局样式**（非 scoped），或在 scoped 中使用 `:deep()` 仍无效，需要单独的 `<style>` 块
- `clear` 仅在 `allowClear` 启用且有选中值时显示
- `placeholder` 仅在无选中值时显示
- `item` 在多选模式下对应每个标签

## 语义化 style

通过 `styles` 属性可以自定义 Select 各部分的 style。

### SelectStyles

| 属性名      | 说明                                                  | 类型            | 版本 |
| ----------- | ----------------------------------------------------- | --------------- | ---- |
| root        | 根节点 `div.hmfw-select`                              | `CSSProperties` | -    |
| selector    | 选择器容器 `div.hmfw-select-selector`                 | `CSSProperties` | -    |
| item        | 已选项 `span.hmfw-select-selection-item`              | `CSSProperties` | -    |
| placeholder | 占位符 `span.hmfw-select-selection-placeholder`       | `CSSProperties` | -    |
| arrow       | 后缀箭头容器 `div.hmfw-select-arrow`                  | `CSSProperties` | -    |
| clear       | 清除按钮 `span.hmfw-select-clear`                     | `CSSProperties` | -    |
| dropdown    | 下拉面板 `div.hmfw-select-dropdown`                   | `CSSProperties` | -    |
| option      | 选项 `div.hmfw-select-item-option`                    | `CSSProperties` | -    |
| optionLabel | 选项内容 `div.hmfw-select-item-option-content`        | `CSSProperties` | -    |
| optionState | 选项选中状态图标 `span.hmfw-select-item-option-state` | `CSSProperties` | -    |

### 使用示例

```vue
<template>
  <Select
    :options="options"
    :styles="{
      root: { borderRadius: '20px' },
      selector: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      dropdown: { borderRadius: '12px' },
    }"
  />
</template>
```

### 语义化 className 与 style

<DemoBlock title="语义化 className 与 style" :source="SelectClassNamesSource">
  <SelectClassNames />
</DemoBlock>
