# TimePicker 时间选择框

输入或选择时间的控件。


## 何时使用

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 代码演示

### 基础用法

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

<DemoBlock title="基础用法" :source="TimePickerBasicSource">
  <TimePickerBasic />
</DemoBlock>

### 步进

通过 `hour-step`、`minute-step`、`second-step` 设置时间步长。

<DemoBlock title="步进" :source="TimePickerStepSource">
  <TimePickerStep />
</DemoBlock>

### 格式化

通过 `format` 属性自定义时间格式，通过 `use12Hours` 开启 12 小时制。

<DemoBlock title="格式化" :source="TimePickerFormatSource">
  <TimePickerFormat />
</DemoBlock>

### 禁用时间

通过 `disabledTime` 禁用部分时间选项，`hideDisabledOptions` 可以隐藏禁用的选项。

<DemoBlock title="禁用时间" :source="TimePickerDisabledSource">
  <TimePickerDisabled />
</DemoBlock>

### 确认模式

通过 `needConfirm` 需要点击确定按钮才生效，`changeOnScroll` 可以在滚动时立即触发变化。

<DemoBlock title="确认模式" :source="TimePickerConfirmSource">
  <TimePickerConfirm />
</DemoBlock>

### 变体

通过 `variant` 设置不同的输入框样式。

<DemoBlock title="变体" :source="TimePickerVariantSource">
  <TimePickerVariant />
</DemoBlock>

## API

### TimePicker Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 时间 | `string` | - |
| defaultValue | 默认时间 | `string` | - |
| format | 展示的时间格式 | `string` | `'HH:mm:ss'` |
| disabled | 禁用全部操作 | `boolean` | `false` |
| size | 输入框大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| placeholder | 没有值的时候显示的内容 | `string` | `'请选择时间'` |
| allowClear | 是否展示清除按钮 | `boolean` | `true` |
| hourStep | 小时选项间隔 | `number` | `1` |
| minuteStep | 分钟选项间隔 | `number` | `1` |
| secondStep | 秒选项间隔 | `number` | `1` |
| disabledTime | 禁用部分时间选项 | `() => DisabledTimeConfig` | - |
| hideDisabledOptions | 隐藏禁用的选项 | `boolean` | `false` |
| showNow | 面板是否显示"此刻"按钮 | `boolean` | `true` |
| use12Hours | 使用 12 小时制，为 true 时 format 默认为 h:mm:ss a | `boolean` | `false` |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| open | 控制浮层显隐 | `boolean` | - |
| needConfirm | 需要点击确定按钮才触发值变化 | `boolean` | `false` |
| changeOnScroll | 滚动时立即触发选择 | `boolean` | `false` |
| renderExtraFooter | 在面板底部渲染额外的内容 | `() => VNodeChild` | - |
| variant | 输入框变体 | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'` | `'outlined'` |
| placement | 浮层弹出位置 | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | `'bottomLeft'` |

### DisabledTimeConfig

```typescript
interface DisabledTimeConfig {
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
}
```

### TimePicker Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 时间发生变化的回调 | `(value: string \| undefined) => void` |
| change | 时间发生变化的回调 | `(value: string \| undefined, timeString: string) => void` |
| openChange | 面板打开/关闭时的回调 | `(open: boolean) => void` |
| focus | 获得焦点时的回调 | `() => void` |
| blur | 失去焦点时的回调 | `() => void` |

### TimePicker Methods

| 方法名 | 说明 |
|--------|------|
| focus() | 获取焦点 |
| blur() | 失去焦点 |

