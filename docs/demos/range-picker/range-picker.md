# RangePicker 日期范围选择框

日期范围选择器。

## 何时使用

- 需要选择一段时间范围时，如查询时间区间、预订日期等

## 代码演示

### 基础用法

<DemoBlock title="基础用法" :source="RangePickerBasicSource">
  <RangePickerBasic />
</DemoBlock>

## API

### RangePicker Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value (v-model) | 日期范围 | `[string, string] \| [null, null]` | - |
| format | 日期格式 | `string` | `'YYYY-MM-DD'` |
| disabled | 是否禁用 | `boolean` | `false` |
| placeholder | 占位文本 | `[string, string]` | `['开始日期', '结束日期']` |
| allowClear | 是否允许清除 | `boolean` | `true` |
| size | 尺寸 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| status | 校验状态 | `'error' \| 'warning' \| ''` | `''` |

### RangePicker Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 日期范围变化时 | `(value: RangeValue, dates: [Date, Date]) => void` |
| calendarChange | 面板选择日期时 | `(value: RangeValue) => void` |
| openChange | 弹出/关闭时 | `(open: boolean) => void` |
