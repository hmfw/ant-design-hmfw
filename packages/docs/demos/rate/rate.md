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
| character | 自定义字符 | `string \| VNode` | `'★'` |
| tooltips | 自定义每项的提示信息 | `string[]` | - |

### Rate Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选择时的回调 | `(value: number) => void` |
| change | 选择时的回调 | `(value: number) => void` |
| hoverChange | 鼠标经过时数值变化的回调 | `(value: number) => void` |
| focus | 获取焦点时的回调 | `() => void` |
| blur | 失去焦点时的回调 | `() => void` |
