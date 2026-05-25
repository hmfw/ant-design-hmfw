# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

<script setup>
import SliderBasic from '../demos/slider/SliderBasic.vue'
import SliderBasicSource from '../demos/slider/SliderBasic.vue?raw'
import SliderRange from '../demos/slider/SliderRange.vue'
import SliderRangeSource from '../demos/slider/SliderRange.vue?raw'
import SliderMarks from '../demos/slider/SliderMarks.vue'
import SliderMarksSource from '../demos/slider/SliderMarks.vue?raw'
</script>

## 何时使用

- 当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。
- 当用户需要自定义数值范围时。
- 适合于对数值不太精确的场景。

## 代码演示

### 基础用法

基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。

<DemoBlock title="基础用法" :source="SliderBasicSource">
  <SliderBasic />
</DemoBlock>

### 范围选择

通过 `range` 属性开启范围选择。

<DemoBlock title="范围选择" :source="SliderRangeSource">
  <SliderRange />
</DemoBlock>

### 刻度标记

使用 `marks` 属性标注分段式滑块，使用 `step="null"` 时，Slider 的可选值仅有 marks 标出来的部分。

<DemoBlock title="刻度标记" :source="SliderMarksSource">
  <SliderMarks />
</DemoBlock>

## API

### Slider Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 设置当前取值。当 `range` 为 false 时，使用 number，否则用 [number, number] | `number \| [number, number]` | - |
| defaultValue | 设置初始取值 | `number \| [number, number]` | `0` |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | `number \| null` | `1` |
| disabled | 值为 true 时，滑块为禁用状态 | `boolean` | `false` |
| vertical | 值为 true 时，Slider 为垂直方向 | `boolean` | `false` |
| range | 双滑块模式 | `boolean` | `false` |
| marks | 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | `Record<number, string \| { label: string; style?: object }>` | - |
| tooltip | Tooltip 相关配置 | `{ open?: boolean; formatter?: (value: number) => string }` | - |

### Slider Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入 | `(value: number \| [number, number]) => void` |
| change | 当 Slider 的值发生改变时触发 | `(value: number \| [number, number]) => void` |
| afterChange | 与 mouseup 触发时机一致，把当前值作为参数传入 | `(value: number \| [number, number]) => void` |
