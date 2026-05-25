# Radio 单选框

单选框。

<script setup>
import RadioBasic from '../demos/radio/RadioBasic.vue'
import RadioBasicSource from '../demos/radio/RadioBasic.vue?raw'
import RadioGroup from '../demos/radio/RadioGroup.vue'
import RadioGroupSource from '../demos/radio/RadioGroup.vue?raw'
import RadioButton from '../demos/radio/RadioButton.vue'
import RadioButtonSource from '../demos/radio/RadioButton.vue?raw'
</script>

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

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked(v-model) | 指定当前是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 禁用 Radio | `boolean` | `false` |
| value | 根据 value 进行比较，判断是否选中 | `string \| number` | - |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 用于设置当前选中的值 | `string \| number` | - |
| defaultValue | 默认选中的值 | `string \| number` | - |
| options | 以配置形式设置子元素 | `Array<{ label: string; value: string \| number; disabled?: boolean }>` | `[]` |
| disabled | 禁选所有子单选器 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| optionType | 用于设置 Radio options 类型 | `'default' \| 'button'` | `'default'` |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `'outline' \| 'solid'` | `'outline'` |
| size | 大小，只对按钮样式生效 | `'small' \| 'middle' \| 'large'` | `'middle'` |

### Radio Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:checked | 变化时回调函数 | `(checked: boolean) => void` |
| change | 变化时回调函数 | `(event: Event) => void` |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选项变化时的回调函数 | `(value: string \| number) => void` |
| change | 选项变化时的回调函数 | `(event: Event) => void` |

### Radio Slots

| 插槽名 | 说明 |
|--------|------|
| default | Radio 的内容 |
