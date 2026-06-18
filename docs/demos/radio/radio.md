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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="RadioClassNamesSource">
  <RadioClassNames />
</DemoBlock>

## API

### Radio Props

| 参数             | 说明                                                       | 类型               | 默认值  |
| ---------------- | ---------------------------------------------------------- | ------------------ | ------- |
| checked(v-model) | 指定当前是否选中                                           | `boolean`          | `false` |
| defaultChecked   | 初始是否选中                                               | `boolean`          | `false` |
| disabled         | 禁用 Radio                                                 | `boolean`          | `false` |
| value            | 根据 value 进行比较，判断是否选中                          | `string \| number` | -       |
| classNames       | 语义化 className（[详见下方](#语义化-classname-与-style)） | `RadioClassNames`  | -       |
| styles           | 语义化 style（[详见下方](#语义化-classname-与-style)）     | `RadioStyles`      | -       |

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

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对Radio的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
interface RadioClassNames {
  root?: string // 根节点 label.hmfw-radio-wrapper
  radio?: string // 单选框容器 span.hmfw-radio
  input?: string // 原生 input 元素 input.hmfw-radio-input
  inner?: string // 视觉圆形选择框 span.hmfw-radio-inner
  label?: string // 文本标签 span.hmfw-radio-label
}

interface RadioStyles {
  root?: CSSProperties // 根节点 label.hmfw-radio-wrapper
  radio?: CSSProperties // 单选框容器 span.hmfw-radio
  input?: CSSProperties // 原生 input 元素 input.hmfw-radio-input
  inner?: CSSProperties // 视觉圆形选择框 span.hmfw-radio-inner
  label?: CSSProperties // 文本标签 span.hmfw-radio-label
}
```

### DOM 结构与 className 映射

```html
<label class="hmfw-radio-wrapper">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-radio">
    <!-- ↑ classNames.radio / styles.radio 应用于此 -->
    <input class="hmfw-radio-input" />
    <!-- ↑ classNames.input / styles.input 应用于此 -->
    <span class="hmfw-radio-inner" />
    <!-- ↑ classNames.inner / styles.inner 应用于此 -->
  </span>
  <span class="hmfw-radio-label">文字</span>
  <!-- ↑ classNames.label / styles.label 应用于此，可选 -->
</label>
```

### 使用 classNames

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

<style scoped>
:deep(.my-radio-root) {
  padding: 8px 16px;
}

:deep(.my-radio-inner) {
  border-color: #1890ff;
}

:deep(.my-radio-label) {
  font-weight: bold;
}
</style>
```

### 使用 styles

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

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `label` 的 className 仅在有文本内容（即 default slot 有内容）时生效
- `input` 元素是原生 `<input type="radio">`，通常隐藏不可见
- `inner` 是视觉上的圆形选择框，可以完全自定义其外观（方形、心形等）

## 设计 Token

| Token 名称                           | 说明           | 默认值             |
| ------------------------------------ | -------------- | ------------------ |
| `--hmfw-color-bg-container`          | 容器背景色     | `#ffffff`          |
| `--hmfw-color-bg-container-disabled` | 禁用容器背景色 | `rgba(0,0,0,0.04)` |
| `--hmfw-color-border`                | 边框色         | `#d9d9d9`          |
| `--hmfw-color-fill-secondary`        | 次级填充色     | `rgba(0,0,0,0.06)` |
| `--hmfw-color-primary`               | 主题色         | `#1677ff`          |
| `--hmfw-color-primary-active`        | 主题色激活态   | `#0958d9`          |
| `--hmfw-color-primary-hover`         | 主题色悬停态   | `#4096ff`          |
| `--hmfw-color-text`                  | 主文本色       | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-disabled`         | 禁用文本色     | `rgba(0,0,0,0.25)` |
| `--hmfw-color-text-light-solid`      | 亮色实心文本   | `#ffffff`          |
| `--hmfw-font-size-base`              | 基础字号       | `14px`             |
| `--hmfw-font-size-lg`                | 大号字号       | `16px`             |
| `--hmfw-control-height`              | 控件高度       | `32px`             |
| `--hmfw-control-height-lg`           | 大号控件高度   | `40px`             |
| `--hmfw-control-height-sm`           | 小号控件高度   | `24px`             |
| `--hmfw-border-radius`               | 基础圆角       | `6px`              |
| `--hmfw-border-radius-lg`            | 大号圆角       | `8px`              |
| `--hmfw-border-radius-sm`            | 小号圆角       | `4px`              |
