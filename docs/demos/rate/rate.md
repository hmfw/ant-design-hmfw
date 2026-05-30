# Rate 评分

评分组件。


## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="RateBasicSource">
  <RateBasic />
</DemoBlock>

### 半星

通过 `allow-half` 属性支持选择半星。

<DemoBlock title="半星" :source="RateHalfStarSource">
  <RateHalfStar />
</DemoBlock>

### 自定义字符

可以将星星替换为其他字符，比如字母、数字、汉字等。

<DemoBlock title="自定义字符" :source="RateCustomSource">
  <RateCustom />
</DemoBlock>

### 提示信息

通过 `tooltips` 属性为每个星星设置提示信息。

<DemoBlock title="提示信息" :source="RateTooltipSource">
  <RateTooltip />
</DemoBlock>

### 尺寸

通过 `size` 属性设置评分组件的尺寸，支持 `small`、`middle`（默认）、`large` 三种尺寸。

<DemoBlock title="尺寸" :source="RateSizeSource">
  <RateSize />
</DemoBlock>

### 清除评分

通过 `allow-clear` 属性控制是否允许清除评分。

<DemoBlock title="清除评分" :source="RateClearSource">
  <RateClear />
</DemoBlock>

### 自定义字符函数

`character` 属性支持传入函数，可以根据索引动态渲染不同的字符。

<DemoBlock title="自定义字符函数" :source="RateCharacterFunctionSource">
  <RateCharacterFunction />
</DemoBlock>

### 键盘操作

通过 `keyboard` 属性控制是否支持键盘操作（方向键调整评分）。

<DemoBlock title="键盘操作" :source="RateKeyboardSource">
  <RateKeyboard />
</DemoBlock>

## API

### Rate Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 当前数，受控值 | `number` | - |
| defaultValue | 默认值 | `number` | `0` |
| count | star 总数 | `number` | `5` |
| allowHalf | 是否允许半选 | `boolean` | `false` |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| disabled | 只读，无法进行交互 | `boolean` | `false` |
| character | 自定义字符 | `string \| ((ctx: RateCharacterRenderContext) => any)` | `'★'` |
| tooltips | 自定义每项的提示信息 | `(string \| TooltipProps)[]` | - |
| size | 组件尺寸 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| keyboard | 是否支持键盘操作 | `boolean` | `true` |
| autoFocus | 自动获取焦点 | `boolean` | `false` |

### Rate Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选择时的回调 | `(value: number) => void` |
| change | 选择时的回调 | `(value: number) => void` |
| hoverChange | 鼠标经过时数值变化的回调 | `(value: number \| undefined) => void` |
| focus | 获取焦点时的回调 | `() => void` |
| blur | 失去焦点时的回调 | `() => void` |
| keydown | 键盘按下时的回调 | `(event: KeyboardEvent) => void` |

### Rate Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| focus | 获取焦点 | - |
| blur | 失去焦点 | - |

### RateCharacterRenderContext

| 属性 | 说明 | 类型 |
|------|------|------|
| index | 当前星星的索引（从 0 开始） | `number` |
| value | 当前评分值 | `number` |

<script setup>
import RateBasic from './RateBasic.vue'
import RateBasicSource from './RateBasic.vue?raw'
import RateHalfStar from './RateHalfStar.vue'
import RateHalfStarSource from './RateHalfStar.vue?raw'
import RateCustom from './RateCustom.vue'
import RateCustomSource from './RateCustom.vue?raw'
import RateTooltip from './RateTooltip.vue'
import RateTooltipSource from './RateTooltip.vue?raw'
import RateSize from './RateSize.vue'
import RateSizeSource from './RateSize.vue?raw'
import RateClear from './RateClear.vue'
import RateClearSource from './RateClear.vue?raw'
import RateCharacterFunction from './RateCharacterFunction.vue'
import RateCharacterFunctionSource from './RateCharacterFunction.vue?raw'
import RateKeyboard from './RateKeyboard.vue'
import RateKeyboardSource from './RateKeyboard.vue?raw'
</script>
