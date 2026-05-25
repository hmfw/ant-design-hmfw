# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

<script setup>
import InputNumberBasic from '../demos/input-number/InputNumberBasic.vue'
import InputNumberBasicSource from '../demos/input-number/InputNumberBasic.vue?raw'
import InputNumberMinMax from '../demos/input-number/InputNumberMinMax.vue'
import InputNumberMinMaxSource from '../demos/input-number/InputNumberMinMax.vue?raw'
import InputNumberAddon from '../demos/input-number/InputNumberAddon.vue'
import InputNumberAddonSource from '../demos/input-number/InputNumberAddon.vue?raw'
</script>

## 何时使用

当需要获取标准数值时。

## 代码演示

### 基础用法

数字输入框。

<DemoBlock title="基础用法" :source="InputNumberBasicSource">
  <InputNumberBasic />
</DemoBlock>

### 最大最小值

通过 `min` 和 `max` 限制输入范围，通过 `step` 设置步长。

<DemoBlock title="最大最小值" :source="InputNumberMinMaxSource">
  <InputNumberMinMax />
</DemoBlock>

### 前后缀

带有前缀或后缀的数字输入框。

<DemoBlock title="前后缀" :source="InputNumberAddonSource">
  <InputNumberAddon />
</DemoBlock>

## API

### InputNumber Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 当前值 | `number \| null` | - |
| defaultValue | 初始值 | `number` | - |
| min | 最小值 | `number` | `-Infinity` |
| max | 最大值 | `number` | `Infinity` |
| step | 每次改变步数，可以为小数 | `number` | `1` |
| precision | 数值精度 | `number` | - |
| disabled | 禁用 | `boolean` | `false` |
| size | 输入框大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| prefix | 带有前缀图标的 input | `string \| VNode` | - |
| addonBefore | 带标签的 input，设置前置标签 | `string \| VNode` | - |
| addonAfter | 带标签的 input，设置后置标签 | `string \| VNode` | - |
| controls | 是否显示增减按钮 | `boolean` | `true` |
| keyboard | 是否启用键盘快捷行为 | `boolean` | `true` |
| placeholder | 占位符 | `string` | - |

### InputNumber Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 变化回调 | `(value: number \| null) => void` |
| change | 变化回调 | `(value: number \| null) => void` |
| focus | 获取焦点时的回调 | `(event: FocusEvent) => void` |
| blur | 失去焦点时的回调 | `(event: FocusEvent) => void` |
| pressEnter | 按下回车的回调 | `(event: KeyboardEvent) => void` |
| step | 点击上下箭头的回调 | `(value: number, info: { offset: number; type: 'up' \| 'down' }) => void` |
