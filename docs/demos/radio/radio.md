# Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="RadioBasicSource">
  <RadioBasic />
</DemoBlock>

### RadioGroup

一组互斥的 Radio 配合使用。

<DemoBlock title="RadioGroup" :source="RadioGroupSource">
  <RadioGroup />
</DemoBlock>

### 按钮样式

按钮样式的单选组合。

<DemoBlock title="按钮样式" :source="RadioButtonSource">
  <RadioButton />
</DemoBlock>

### id 属性绑定

id 属性会自动绑定到原生 input 元素，方便配合 label 使用。

<DemoBlock title="id 属性" :source="RadioIdBindingSource">
  <RadioIdBinding />
</DemoBlock>

## API

### Radio Props

| 参数             | 说明                                              | 类型               | 默认值  |
| ---------------- | ------------------------------------------------- | ------------------ | ------- |
| checked(v-model) | 指定当前是否选中                                  | `boolean`          | `false` |
| defaultChecked   | 初始是否选中                                      | `boolean`          | `false` |
| disabled         | 禁用 Radio                                        | `boolean`          | `false` |
| value            | 根据 value 进行比较，判断是否选中                 | `string \| number` | -       |
| classNames       | 语义化 className（[详见下方](#语义化-classname)） | `RadioClassNames`  | -       |
| styles           | 语义化 style（[详见下方](#语义化-style)）         | `RadioStyles`      | -       |

### RadioGroup Props

| 参数           | 说明                                             | 类型                                                                    | 默认值         |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------- | -------------- |
| value(v-model) | 用于设置当前选中的值                             | `string \| number`                                                      | -              |
| defaultValue   | 默认选中的值                                     | `string \| number`                                                      | -              |
| options        | 以配置形式设置子元素                             | `Array<{ label: string; value: string \| number; disabled?: boolean }>` | `[]`           |
| disabled       | 禁选所有子单选器                                 | `boolean`                                                               | `false`        |
| direction      | 排列方向                                         | `'horizontal' \| 'vertical'`                                            | `'horizontal'` |
| optionType     | 用于设置 Radio options 类型                      | `'default' \| 'button'`                                                 | `'default'`    |
| buttonStyle    | RadioButton 的风格样式，目前有描边和填色两种风格 | `'outline' \| 'solid'`                                                  | `'outline'`    |
| size           | 大小，只对按钮样式生效                           | `'small' \| 'middle' \| 'large'`                                        | `'middle'`     |

### Radio Events

| 事件名         | 说明           | 回调参数                     |
| -------------- | -------------- | ---------------------------- |
| update:checked | 变化时回调函数 | `(checked: boolean) => void` |
| change         | 变化时回调函数 | `(event: Event) => void`     |

### RadioGroup Events

| 事件名       | 说明                 | 回调参数                            |
| ------------ | -------------------- | ----------------------------------- |
| update:value | 选项变化时的回调函数 | `(value: string \| number) => void` |
| change       | 选项变化时的回调函数 | `(event: Event) => void`            |

### Radio Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | Radio 的内容 |

## 语义化 className

通过 `classNames` 属性可以自定义 Radio 各部分的 className。

### RadioClassNames

| 属性名 | 说明                                     | 类型     | 版本 |
| ------ | ---------------------------------------- | -------- | ---- |
| root   | 根节点 `label.hmfw-radio-wrapper`        | `string` | -    |
| radio  | 单选框容器 `span.hmfw-radio`             | `string` | -    |
| input  | 原生 input 元素 `input.hmfw-radio-input` | `string` | -    |
| inner  | 视觉圆形选择框 `span.hmfw-radio-inner`   | `string` | -    |
| label  | 文本标签 `span.hmfw-radio-label`         | `string` | -    |

### DOM 结构

```html
<label class="hmfw-radio-wrapper">
  <!-- root -->
  <span class="hmfw-radio">
    <!-- radio -->
    <input class="hmfw-radio-input" />
    <!-- input -->
    <span class="hmfw-radio-inner" />
    <!-- inner -->
  </span>
  <span class="hmfw-radio-label">文字</span>
  <!-- label，可选 -->
</label>
```

### 使用示例

```vue
<template>
  <Radio
    :classNames="{
      root: 'my-radio-root',
      radio: 'my-radio-box',
      inner: 'my-radio-inner',
      label: 'my-radio-label',
    }"
  >
    自定义样式
  </Radio>
</template>
```

**注意事项：**

- `label` 的 className 仅在有文本内容（即 default slot 有内容）时生效
- `input` 元素是原生 `<input type="radio">`，通常隐藏不可见
- `inner` 是视觉上的圆形选择框，可以完全自定义其外观（方形、心形等）

## 语义化 style

通过 `styles` 属性可以自定义 Radio 各部分的 style。

### RadioStyles

| 属性名 | 说明                                     | 类型            | 版本 |
| ------ | ---------------------------------------- | --------------- | ---- |
| root   | 根节点 `label.hmfw-radio-wrapper`        | `CSSProperties` | -    |
| radio  | 单选框容器 `span.hmfw-radio`             | `CSSProperties` | -    |
| input  | 原生 input 元素 `input.hmfw-radio-input` | `CSSProperties` | -    |
| inner  | 视觉圆形选择框 `span.hmfw-radio-inner`   | `CSSProperties` | -    |
| label  | 文本标签 `span.hmfw-radio-label`         | `CSSProperties` | -    |

### 使用示例

```vue
<template>
  <Radio
    :styles="{
      root: { padding: '8px 16px', border: '2px solid #1890ff' },
      radio: { transform: 'scale(1.2)' },
      label: { fontWeight: 'bold', color: '#1890ff' },
    }"
  >
    动态样式
  </Radio>
</template>
```

### 语义化 className 与 style

<DemoBlock title="语义化 className 与 style" :source="RadioClassNamesSource">
  <RadioClassNames />
</DemoBlock>

<script setup lang="ts">
import RadioBasic from './RadioBasic.vue'
import RadioBasicSource from './RadioBasic.vue?raw'
import RadioGroup from './RadioGroup.vue'
import RadioGroupSource from './RadioGroup.vue?raw'
import RadioButton from './RadioButton.vue'
import RadioButtonSource from './RadioButton.vue?raw'
import RadioIdBinding from './RadioIdBinding.vue'
import RadioIdBindingSource from './RadioIdBinding.vue?raw'
import RadioClassNames from './RadioClassNames.vue'
import RadioClassNamesSource from './RadioClassNames.vue?raw'
</script>
