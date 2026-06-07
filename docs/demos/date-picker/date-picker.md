# DatePicker 日期选择框

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 代码演示

### 基础用法

最简单的用法，在浮层中可以选择或者输入日期。

<DemoBlock title="基础用法" :source="DatePickerBasicSource">
  <DatePickerBasic />
</DemoBlock>

### 不同 picker 类型

通过 `picker` 属性切换不同的选择器类型。

<DemoBlock title="不同 picker 类型" :source="DatePickerPickerSource">
  <DatePickerPicker />
</DemoBlock>

### 禁用日期

可用 `disabledDate` 禁止选择某些日期。

<DemoBlock title="禁用日期" :source="DatePickerDisabledDateSource">
  <DatePickerDisabledDate />
</DemoBlock>

### 带时间的日期选择

通过 `showTime` 属性增加选择时间功能。

<DemoBlock title="带时间的日期选择" :source="DatePickerShowTimeSource">
  <DatePickerShowTime />
</DemoBlock>

### 预设范围

通过 `presets` 属性提供快捷选择。

<DemoBlock title="预设范围" :source="DatePickerPresetsSource">
  <DatePickerPresets />
</DemoBlock>

### 限制日期范围

通过 `minDate` 和 `maxDate` 限制可选日期范围。

<DemoBlock title="限制日期范围" :source="DatePickerMinMaxSource">
  <DatePickerMinMax />
</DemoBlock>

## API

### DatePicker Props

| 参数              | 说明                                   | 类型                                                          | 默认值         |
| ----------------- | -------------------------------------- | ------------------------------------------------------------- | -------------- |
| value(v-model)    | 日期                                   | `string`                                                      | -              |
| defaultValue      | 默认日期                               | `string`                                                      | -              |
| format            | 展示的日期格式                         | `string`                                                      | `'YYYY-MM-DD'` |
| disabled          | 禁用                                   | `boolean`                                                     | `false`        |
| size              | 输入框大小                             | `'small' \| 'middle' \| 'large'`                              | `'middle'`     |
| placeholder       | 输入框提示文字                         | `string`                                                      | -              |
| allowClear        | 是否显示清除按钮                       | `boolean`                                                     | `true`         |
| picker            | 设置选择器类型                         | `'date' \| 'month' \| 'year' \| 'quarter'`                    | `'date'`       |
| showTime          | 增加时间选择功能，可配置时分秒步长     | `boolean \| { format?, hourStep?, minuteStep?, secondStep? }` | `false`        |
| showToday         | 是否展示"今天"按钮                     | `boolean`                                                     | `true`         |
| showNow           | 是否展示"此刻"按钮（优先于 showToday） | `boolean`                                                     | `false`        |
| disabledDate      | 不可选择的日期                         | `(dateStr: string) => boolean`                                | -              |
| status            | 设置校验状态                           | `'error' \| 'warning'`                                        | -              |
| open              | 控制弹层是否展开                       | `boolean`                                                     | -              |
| defaultOpen       | 默认是否展开弹层                       | `boolean`                                                     | `false`        |
| presets           | 预设时间范围快捷选择                   | `PresetItem[]`                                                | -              |
| minDate           | 最小可选日期                           | `string`                                                      | -              |
| maxDate           | 最大可选日期                           | `string`                                                      | -              |
| renderExtraFooter | 在面板中添加额外的页脚                 | `() => VNode`                                                 | -              |

### DatePicker Events

| 事件名       | 说明                     | 回调参数                                      |
| ------------ | ------------------------ | --------------------------------------------- |
| update:value | 日期发生变化的回调       | `(value: string) => void`                     |
| change       | 日期发生变化的回调       | `(value: string, dateString: string) => void` |
| openChange   | 弹出日历和关闭日历的回调 | `(open: boolean) => void`                     |
| panelChange  | 日历面板切换的回调       | `(value: any, mode: string) => void`          |

### PresetItem

| 参数  | 说明           | 类型                       |
| ----- | -------------- | -------------------------- |
| label | 预设项显示文本 | `string`                   |
| value | 预设值         | `string \| (() => string)` |
