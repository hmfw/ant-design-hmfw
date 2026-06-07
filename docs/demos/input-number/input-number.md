# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

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

### 前缀和后缀

使用 `prefix` 和 `suffix` 添加前缀和后缀。

<DemoBlock title="前缀和后缀" :source="InputNumberSuffixSource">
  <InputNumberSuffix />
</DemoBlock>

### 变体

支持 `outlined`、`filled`、`borderless`、`underlined` 四种变体。

<DemoBlock title="变体" :source="InputNumberVariantSource">
  <InputNumberVariant />
</DemoBlock>

### 显示模式

支持 `input` 和 `spinner` 两种模式。

<DemoBlock title="显示模式" :source="InputNumberModeSource">
  <InputNumberMode />
</DemoBlock>

### 格式化展示

通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。

<DemoBlock title="格式化展示" :source="InputNumberFormatterSource">
  <InputNumberFormatter />
</DemoBlock>

## API

### InputNumber Props

| 参数             | 说明                                | 类型                                                                      | 默认值       |
| ---------------- | ----------------------------------- | ------------------------------------------------------------------------- | ------------ |
| value(v-model)   | 当前值                              | `number \| null`                                                          | -            |
| defaultValue     | 初始值                              | `number`                                                                  | -            |
| min              | 最小值                              | `number`                                                                  | `-Infinity`  |
| max              | 最大值                              | `number`                                                                  | `Infinity`   |
| step             | 每次改变步数，可以为小数            | `number`                                                                  | `1`          |
| precision        | 数值精度                            | `number`                                                                  | -            |
| disabled         | 禁用                                | `boolean`                                                                 | `false`      |
| readOnly         | 只读                                | `boolean`                                                                 | `false`      |
| size             | 输入框大小                          | `'small' \| 'middle' \| 'large'`                                          | `'middle'`   |
| status           | 设置校验状态                        | `'error' \| 'warning'`                                                    | -            |
| variant          | 变体                                | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'`                  | `'outlined'` |
| mode             | 显示模式                            | `'input' \| 'spinner'`                                                    | `'input'`    |
| prefix           | 带有前缀图标的 input                | `string \| VNode`                                                         | -            |
| suffix           | 带有后缀图标的 input                | `string \| VNode`                                                         | -            |
| addonBefore      | 带标签的 input，设置前置标签        | `string \| VNode`                                                         | -            |
| addonAfter       | 带标签的 input，设置后置标签        | `string \| VNode`                                                         | -            |
| controls         | 是否显示增减按钮，或自定义图标      | `boolean \| { upIcon?: VNode \| string; downIcon?: VNode \| string }`     | `true`       |
| keyboard         | 是否启用键盘快捷行为                | `boolean`                                                                 | `true`       |
| placeholder      | 占位符                              | `string`                                                                  | -            |
| formatter        | 指定输入框展示值的格式              | `(value: number, info: { userTyping: boolean; input: string }) => string` | -            |
| parser           | 指定从 formatter 里转换回数字的方式 | `(value: string) => number`                                               | -            |
| changeOnBlur     | 是否在失焦时触发 change             | `boolean`                                                                 | `true`       |
| changeOnWheel    | 是否允许鼠标滚轮改变数值            | `boolean`                                                                 | `false`      |
| decimalSeparator | 小数点                              | `string`                                                                  | `'.'`        |
| stringMode       | 字符串模式，开启后支持高精度小数    | `boolean`                                                                 | `false`      |

### InputNumber Events

| 事件名       | 说明               | 回调参数                                                                                                              |
| ------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| update:value | 变化回调           | `(value: number \| null) => void`                                                                                     |
| change       | 变化回调           | `(value: number \| null) => void`                                                                                     |
| focus        | 获取焦点时的回调   | `(event: FocusEvent) => void`                                                                                         |
| blur         | 失去焦点时的回调   | `(event: FocusEvent) => void`                                                                                         |
| pressEnter   | 按下回车的回调     | `(event: KeyboardEvent) => void`                                                                                      |
| step         | 点击上下箭头的回调 | `(value: number, info: { offset: number; type: 'up' \| 'down'; emitter: 'handler' \| 'keydown' \| 'wheel' }) => void` |

### InputNumber Methods

| 方法名        | 说明              | 参数                                                                                  |
| ------------- | ----------------- | ------------------------------------------------------------------------------------- |
| focus         | 获取焦点          | `(options?: { cursor?: 'start' \| 'end' \| 'all'; preventScroll?: boolean }) => void` |
| blur          | 移除焦点          | `() => void`                                                                          |
| nativeElement | 获取原生 DOM 元素 | -                                                                                     |
