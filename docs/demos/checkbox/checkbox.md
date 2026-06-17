# Checkbox 多选框

多选框。

## 何时使用

- 在一组可选项中进行多项选择时。
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础用法

简单的 checkbox。

<DemoBlock title="基础用法" :source="CheckboxBasicSource">
  <CheckboxBasic />
</DemoBlock>

### CheckboxGroup

方便的从数组生成 Checkbox 组。

<DemoBlock title="CheckboxGroup" :source="CheckboxGroupSource">
  <CheckboxGroup />
</DemoBlock>

### 全选

在实现全选效果时，你可能会用到 `indeterminate` 属性。

<DemoBlock title="全选" :source="CheckboxCheckAllSource">
  <CheckboxCheckAll />
</DemoBlock>

### skipGroup 属性

在 CheckboxGroup 中使用 `skipGroup` 可以让复选框独立控制，不受组管理。

<DemoBlock title="skipGroup" :source="CheckboxSkipGroupSource">
  <CheckboxSkipGroup />
</DemoBlock>

### id 属性绑定

id 属性会自动绑定到原生 input 元素，方便配合 label 使用。

<DemoBlock title="id 属性" :source="CheckboxIdBindingSource">
  <CheckboxIdBinding />
</DemoBlock>

## API

### Checkbox Props

| 参数             | 说明                                              | 类型                          | 默认值  |
| ---------------- | ------------------------------------------------- | ----------------------------- | ------- |
| checked(v-model) | 指定当前是否选中                                  | `boolean`                     | `false` |
| defaultChecked   | 初始是否选中                                      | `boolean`                     | `false` |
| disabled         | 失效状态                                          | `boolean`                     | `false` |
| indeterminate    | 设置 indeterminate 状态，只负责样式控制           | `boolean`                     | `false` |
| value            | checkbox 的 value，在 CheckboxGroup 中使用        | `string \| number \| boolean` | -       |
| autoFocus        | 自动获取焦点                                      | `boolean`                     | `false` |
| name             | input[type="checkbox"] 的 name 属性               | `string`                      | -       |
| id               | input[type="checkbox"] 的 id 属性                 | `string`                      | -       |
| title            | input[type="checkbox"] 的 title 属性              | `string`                      | -       |
| tabIndex         | input[type="checkbox"] 的 tabindex 属性           | `number`                      | -       |
| required         | input[type="checkbox"] 的 required 属性           | `boolean`                     | `false` |
| skipGroup        | 在 CheckboxGroup 中时，跳过组控制                 | `boolean`                     | `false` |
| classNames       | 语义化 className（[详见下方](#语义化-classname)） | `CheckboxClassNames`          | -       |
| styles           | 语义化 style（[详见下方](#语义化-style)）         | `CheckboxStyles`              | -       |

### CheckboxGroup Props

| 参数           | 说明                                                     | 类型                                            | 默认值  |
| -------------- | -------------------------------------------------------- | ----------------------------------------------- | ------- |
| value(v-model) | 指定选中的选项                                           | `(string \| number \| boolean)[]`               | `[]`    |
| defaultValue   | 默认选中的选项                                           | `(string \| number \| boolean)[]`               | `[]`    |
| options        | 指定可选项                                               | `Array<string \| number \| CheckboxOptionType>` | `[]`    |
| disabled       | 整组失效                                                 | `boolean`                                       | `false` |
| name           | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | `string`                                        | -       |
| style          | 自定义样式                                               | `CSSProperties`                                 | -       |
| className      | 自定义类名                                               | `string`                                        | -       |

### CheckboxOptionType

| 参数      | 说明          | 类型                          |
| --------- | ------------- | ----------------------------- |
| label     | 选项显示文本  | `string`                      |
| value     | 选项值        | `string \| number \| boolean` |
| disabled  | 是否禁用      | `boolean`                     |
| style     | 自定义样式    | `CSSProperties`               |
| className | 自定义类名    | `string`                      |
| title     | title 属性    | `string`                      |
| id        | id 属性       | `string`                      |
| required  | required 属性 | `boolean`                     |

### Checkbox Events

| 事件名         | 说明                       | 回调参数                               |
| -------------- | -------------------------- | -------------------------------------- |
| update:checked | 变化时回调函数（Checkbox） | `(checked: boolean) => void`           |
| change         | 变化时回调函数             | `(event: CheckboxChangeEvent) => void` |
| click          | 点击时回调函数             | `(event: MouseEvent) => void`          |
| mouseenter     | 鼠标移入时回调函数         | `(event: MouseEvent) => void`          |
| mouseleave     | 鼠标移出时回调函数         | `(event: MouseEvent) => void`          |
| focus          | 获得焦点时回调函数         | `(event: FocusEvent) => void`          |
| blur           | 失去焦点时回调函数         | `(event: FocusEvent) => void`          |
| keypress       | 按键时回调函数             | `(event: KeyboardEvent) => void`       |
| keydown        | 按键按下时回调函数         | `(event: KeyboardEvent) => void`       |

### CheckboxGroup Events

| 事件名       | 说明           | 回调参数                                           |
| ------------ | -------------- | -------------------------------------------------- |
| update:value | 变化时回调函数 | `(value: (string \| number \| boolean)[]) => void` |
| change       | 变化时回调函数 | `(value: (string \| number \| boolean)[]) => void` |

### Checkbox Slots

| 插槽名  | 说明            |
| ------- | --------------- |
| default | checkbox 的内容 |

## 语义化 className

通过 `classNames` 属性可以自定义 Checkbox 各部分的 className。

### CheckboxClassNames

| 属性名   | 说明                                        | 类型     | 版本 |
| -------- | ------------------------------------------- | -------- | ---- |
| root     | 根节点 `label.hmfw-checkbox-wrapper`        | `string` | -    |
| checkbox | 复选框容器 `span.hmfw-checkbox`             | `string` | -    |
| input    | 原生 input 元素 `input.hmfw-checkbox-input` | `string` | -    |
| inner    | 视觉勾选框 `span.hmfw-checkbox-inner`       | `string` | -    |
| label    | 文本标签 `span.hmfw-checkbox-label`         | `string` | -    |

### DOM 结构

```html
<label class="hmfw-checkbox-wrapper">
  <!-- root -->
  <span class="hmfw-checkbox">
    <!-- checkbox -->
    <input class="hmfw-checkbox-input" />
    <!-- input -->
    <span class="hmfw-checkbox-inner" />
    <!-- inner -->
  </span>
  <span class="hmfw-checkbox-label">文字</span>
  <!-- label，可选 -->
</label>
```

### 使用示例

```vue
<template>
  <Checkbox
    :classNames="{
      root: 'my-checkbox-root',
      checkbox: 'my-checkbox-box',
      inner: 'my-checkbox-inner',
      label: 'my-checkbox-label',
    }"
  >
    自定义样式
  </Checkbox>
</template>
```

**注意事项：**

- `label` 的 className 仅在有文本内容（即 default slot 有内容）时生效
- `input` 元素是原生 `<input type="checkbox">`，通常隐藏不可见，但可自定义其样式
- `inner` 是视觉上的勾选框，可以完全自定义其外观（圆形、星形等）

## 语义化 style

通过 `styles` 属性可以自定义 Checkbox 各部分的 style。

### CheckboxStyles

| 属性名   | 说明                                        | 类型            | 版本 |
| -------- | ------------------------------------------- | --------------- | ---- |
| root     | 根节点 `label.hmfw-checkbox-wrapper`        | `CSSProperties` | -    |
| checkbox | 复选框容器 `span.hmfw-checkbox`             | `CSSProperties` | -    |
| input    | 原生 input 元素 `input.hmfw-checkbox-input` | `CSSProperties` | -    |
| inner    | 视觉勾选框 `span.hmfw-checkbox-inner`       | `CSSProperties` | -    |
| label    | 文本标签 `span.hmfw-checkbox-label`         | `CSSProperties` | -    |

### 使用示例

```vue
<template>
  <Checkbox
    :styles="{
      root: { padding: '8px 16px', border: '2px solid #1890ff' },
      checkbox: { transform: 'scale(1.2)' },
      label: { fontWeight: 'bold', color: '#1890ff' },
    }"
  >
    动态样式
  </Checkbox>
</template>
```

### 语义化 className 与 style

<DemoBlock title="语义化 className 与 style" :source="CheckboxClassNamesSource">
  <CheckboxClassNames />
</DemoBlock>

<script setup lang="ts">
import CheckboxBasic from './CheckboxBasic.vue'
import CheckboxBasicSource from './CheckboxBasic.vue?raw'
import CheckboxGroup from './CheckboxGroup.vue'
import CheckboxGroupSource from './CheckboxGroup.vue?raw'
import CheckboxCheckAll from './CheckboxCheckAll.vue'
import CheckboxCheckAllSource from './CheckboxCheckAll.vue?raw'
import CheckboxSkipGroup from './CheckboxSkipGroup.vue'
import CheckboxSkipGroupSource from './CheckboxSkipGroup.vue?raw'
import CheckboxIdBinding from './CheckboxIdBinding.vue'
import CheckboxIdBindingSource from './CheckboxIdBinding.vue?raw'
import CheckboxClassNames from './CheckboxClassNames.vue'
import CheckboxClassNamesSource from './CheckboxClassNames.vue?raw'
</script>
