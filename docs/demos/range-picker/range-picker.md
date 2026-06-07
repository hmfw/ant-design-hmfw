# RangePicker 日期范围选择框

日期范围选择器。

## 何时使用

- 需要选择一段时间范围时，如查询时间区间、预订日期等

## 代码演示

### 基础用法

<DemoBlock title="基础用法" :source="RangePickerBasicSource">
  <RangePickerBasic />
</DemoBlock>

### 预设范围

通过 `presets` 提供快捷选项，`value` 支持直接传范围或返回范围的函数。

<DemoBlock title="预设范围" :source="RangePickerPresetsSource">
  <RangePickerPresets />
</DemoBlock>

### 禁用

`disabled` 传布尔值禁用整个控件，传 `[boolean, boolean]` 可分别禁用起止输入框。

<DemoBlock title="禁用" :source="RangePickerDisabledSource">
  <RangePickerDisabled />
</DemoBlock>

## API

### RangePicker Props

| 参数            | 说明                           | 类型                                                             | 默认值                  |
| --------------- | ------------------------------ | ---------------------------------------------------------------- | ----------------------- |
| value (v-model) | 日期范围                       | `[string \| null, string \| null]`                               | -                       |
| defaultValue    | 默认日期范围                   | `[string \| null, string \| null]`                               | -                       |
| format          | 日期格式                       | `string`                                                         | `'YYYY-MM-DD'`          |
| disabled        | 是否禁用，可分别禁用起止       | `boolean \| [boolean, boolean]`                                  | `false`                 |
| placeholder     | 占位文本，缺省时使用当前语言包 | `[string, string]`                                               | locale.rangePlaceholder |
| allowClear      | 是否允许清除                   | `boolean`                                                        | `true`                  |
| allowEmpty      | 允许起止留空                   | `[boolean, boolean]`                                             | -                       |
| order           | 自动排序起止日期               | `boolean`                                                        | `true`                  |
| separator       | 起止输入框之间的分隔符         | `string`                                                         | `'→'`                   |
| presets         | 预设范围快捷选项               | `{ label: string, value: RangeValue \| (() => RangeValue) }[]`   | -                       |
| size            | 尺寸                           | `'small' \| 'middle' \| 'large'`                                 | `'middle'`              |
| disabledDate    | 不可选日期                     | `(date: Date, info?: { from?: Date, type?: string }) => boolean` | -                       |
| status          | 校验状态                       | `'error' \| 'warning' \| ''`                                     | `''`                    |
| open            | 受控的弹层显隐                 | `boolean`                                                        | -                       |

### RangePicker Events

| 事件名         | 说明               | 回调参数                                                                                              |
| -------------- | ------------------ | ----------------------------------------------------------------------------------------------------- |
| change         | 日期范围变化时     | `(value: RangeValue, dates: [Date \| null, Date \| null]) => void`                                    |
| calendarChange | 面板选择起止日期时 | `(value: RangeValue, dates: [Date \| null, Date \| null], info: { range: 'start' \| 'end' }) => void` |
| openChange     | 弹出/关闭时        | `(open: boolean) => void`                                                                             |
