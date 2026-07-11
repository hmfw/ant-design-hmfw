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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="RangePickerClassNamesSource">
  <RangePickerClassNames />
</DemoBlock>

## API

### RangePicker Props

| 参数            | 说明                                                                             | 类型                                                             | 默认值                  |
| --------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------- |
| value (v-model) | 日期范围                                                                         | `[string \| null, string \| null]`                               | -                       |
| defaultValue    | 默认日期范围                                                                     | `[string \| null, string \| null]`                               | -                       |
| format          | 日期格式                                                                         | `string`                                                         | `'YYYY-MM-DD'`          |
| disabled        | 是否禁用，可分别禁用起止                                                         | `boolean \| [boolean, boolean]`                                  | `false`                 |
| placeholder     | 占位文本，缺省时使用当前语言包                                                   | `[string, string]`                                               | locale.rangePlaceholder |
| allowClear      | 是否允许清除                                                                     | `boolean`                                                        | `true`                  |
| allowEmpty      | 允许起止留空                                                                     | `[boolean, boolean]`                                             | -                       |
| order           | 自动排序起止日期                                                                 | `boolean`                                                        | `true`                  |
| separator       | 起止输入框之间的分隔符                                                           | `string`                                                         | `'→'`                   |
| presets         | 预设范围快捷选项                                                                 | `{ label: string, value: RangeValue \| (() => RangeValue) }[]`   | -                       |
| size            | 尺寸                                                                             | `'small' \| 'middle' \| 'large'`                                 | `'middle'`              |
| disabledDate    | 不可选日期                                                                       | `(date: Date, info?: { from?: Date, type?: string }) => boolean` | -                       |
| status          | 校验状态                                                                         | `'error' \| 'warning' \| ''`                                     | `''`                    |
| open            | 受控的弹层显隐                                                                   | `boolean`                                                        | -                       |
| classNames      | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `RangePickerClassNames`                                          | -                       |
| styles          | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `RangePickerStyles`                                              | -                       |

### RangePicker Events

| 事件名         | 说明               | 回调参数                                                                                              |
| -------------- | ------------------ | ----------------------------------------------------------------------------------------------------- |
| change         | 日期范围变化时     | `(value: RangeValue, dates: [Date \| null, Date \| null]) => void`                                    |
| calendarChange | 面板选择起止日期时 | `(value: RangeValue, dates: [Date \| null, Date \| null], info: { range: 'start' \| 'end' }) => void` |
| openChange     | 弹出/关闭时        | `(open: boolean) => void`                                                                             |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 RangePicker 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface RangePickerClassNames {
  root?: string // 根节点 div.hmfw-date-picker
  input?: string // 输入框容器 span.hmfw-date-picker-input
  startInput?: string // 开始日期输入框 input.hmfw-date-picker-input-inner
  endInput?: string // 结束日期输入框 input.hmfw-date-picker-input-inner
  separator?: string // 分隔符 span.hmfw-date-picker-range-separator
  clear?: string // 清除按钮 span.hmfw-date-picker-clear
  suffix?: string // 后缀图标 span.hmfw-date-picker-suffix
  popup?: string // 弹出层容器 div.hmfw-date-picker-popup
  rangeWrapper?: string // 范围选择器包裹容器 div.hmfw-date-picker-range-wrapper
  presets?: string // 预设范围容器 div.hmfw-date-picker-presets
  preset?: string // 单个预设项 li.hmfw-date-picker-preset
  rangePanels?: string // 面板容器（左右各一个） div.hmfw-date-picker-range-panels
  panel?: string // 单个日历面板 div.hmfw-date-picker-panel
  panelHeader?: string // 面板头部 div.hmfw-date-picker-panel-header
  panelHeaderBtn?: string // 头部按钮 button.hmfw-date-picker-panel-header-btn
  panelHeaderTitle?: string // 头部标题 span.hmfw-date-picker-panel-header-title
  panelBody?: string // 面板主体 div.hmfw-date-picker-panel-body
  weekdays?: string // 星期标题行 div.hmfw-date-picker-weekdays
  weekday?: string // 单个星期标题 span.hmfw-date-picker-weekday
  days?: string // 日期网格容器 div.hmfw-date-picker-days
  day?: string // 单个日期单元格 button.hmfw-date-picker-day
  dayToday?: string // 今天的日期单元格 button.hmfw-date-picker-day-today
  daySelected?: string // 选中的日期单元格 button.hmfw-date-picker-day-selected
  dayInRange?: string // 范围内的日期单元格 button.hmfw-date-picker-day-in-range
  dayRangeStart?: string // 范围起始日期 button.hmfw-date-picker-day-range-start
  dayRangeEnd?: string // 范围结束日期 button.hmfw-date-picker-day-range-end
  dayDisabled?: string // 禁用的日期单元格 button.hmfw-date-picker-day-disabled
}

interface RangePickerStyles {
  root?: CSSProperties
  input?: CSSProperties
  startInput?: CSSProperties
  endInput?: CSSProperties
  separator?: CSSProperties
  clear?: CSSProperties
  suffix?: CSSProperties
  popup?: CSSProperties
  rangeWrapper?: CSSProperties
  presets?: CSSProperties
  preset?: CSSProperties
  rangePanels?: CSSProperties
  panel?: CSSProperties
  panelHeader?: CSSProperties
  panelHeaderBtn?: CSSProperties
  panelHeaderTitle?: CSSProperties
  panelBody?: CSSProperties
  weekdays?: CSSProperties
  weekday?: CSSProperties
  days?: CSSProperties
  day?: CSSProperties
  dayToday?: CSSProperties
  daySelected?: CSSProperties
  dayInRange?: CSSProperties
  dayRangeStart?: CSSProperties
  dayRangeEnd?: CSSProperties
  dayDisabled?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-date-picker">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-date-picker-input">
    <!-- ↑ classNames.input / styles.input 应用于此 -->
    <input class="hmfw-date-picker-input-inner" placeholder="开始日期" />
    <!-- ↑ classNames.startInput / styles.startInput 应用于此 -->
    <span class="hmfw-date-picker-range-separator">→</span>
    <!-- ↑ classNames.separator / styles.separator 应用于此 -->
    <input class="hmfw-date-picker-input-inner" placeholder="结束日期" />
    <!-- ↑ classNames.endInput / styles.endInput 应用于此 -->
  </span>
  <span class="hmfw-date-picker-clear">×</span>
  <!-- ↑ classNames.clear / styles.clear 应用于此 -->
  <span class="hmfw-date-picker-suffix">📅</span>
  <!-- ↑ classNames.suffix / styles.suffix 应用于此 -->

  <!-- Teleport 到 body -->
  <div class="hmfw-date-picker-popup">
    <!-- ↑ classNames.popup / styles.popup 应用于此 -->
    <div class="hmfw-date-picker-range-wrapper">
      <!-- ↑ classNames.rangeWrapper / styles.rangeWrapper 应用于此 -->
      <div class="hmfw-date-picker-presets">
        <!-- ↑ classNames.presets / styles.presets 应用于此 -->
        <ul>
          <li class="hmfw-date-picker-preset">最近 7 天</li>
          <!-- ↑ classNames.preset / styles.preset 应用于此 -->
        </ul>
      </div>
      <div class="hmfw-date-picker-range-panels">
        <!-- ↑ classNames.rangePanels / styles.rangePanels 应用于此 -->
        <div class="hmfw-date-picker-panel">
          <!-- ↑ classNames.panel / styles.panel 应用于此 -->
          <div class="hmfw-date-picker-panel-header">
            <!-- ↑ classNames.panelHeader / styles.panelHeader 应用于此 -->
            <button class="hmfw-date-picker-panel-header-btn">‹</button>
            <!-- ↑ classNames.panelHeaderBtn / styles.panelHeaderBtn 应用于此 -->
            <span class="hmfw-date-picker-panel-header-title">2024 年 1 月</span>
            <!-- ↑ classNames.panelHeaderTitle / styles.panelHeaderTitle 应用于此 -->
          </div>
          <div class="hmfw-date-picker-panel-body">
            <!-- ↑ classNames.panelBody / styles.panelBody 应用于此 -->
            <div class="hmfw-date-picker-weekdays">
              <!-- ↑ classNames.weekdays / styles.weekdays 应用于此 -->
              <span class="hmfw-date-picker-weekday">日</span>
              <!-- ↑ classNames.weekday / styles.weekday 应用于此 -->
            </div>
            <div class="hmfw-date-picker-days">
              <!-- ↑ classNames.days / styles.days 应用于此 -->
              <button class="hmfw-date-picker-day">1</button>
              <!-- ↑ classNames.day / styles.day 应用于此 -->
              <button class="hmfw-date-picker-day hmfw-date-picker-day-today">15</button>
              <!-- ↑ classNames.dayToday / styles.dayToday 应用于此 -->
              <button class="hmfw-date-picker-day hmfw-date-picker-day-in-range">20</button>
              <!-- ↑ classNames.dayInRange / styles.dayInRange 应用于此 -->
              <button class="hmfw-date-picker-day hmfw-date-picker-day-range-start">18</button>
              <!-- ↑ classNames.dayRangeStart / styles.dayRangeStart 应用于此 -->
              <button class="hmfw-date-picker-day hmfw-date-picker-day-range-end">25</button>
              <!-- ↑ classNames.dayRangeEnd / styles.dayRangeEnd 应用于此 -->
            </div>
          </div>
        </div>
        <!-- 右侧面板结构同左侧 -->
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <RangePicker
    :class-names="{
      root: 'my-range-picker-root',
      input: 'my-input',
      separator: 'my-separator',
      popup: 'my-popup',
      dayInRange: 'my-day-in-range',
      dayRangeStart: 'my-day-range-start',
      dayRangeEnd: 'my-day-range-end',
    }"
  />
</template>

<style>
/* popup 通过 Teleport 渲染到 body，必须使用 :global() */
:global(.my-popup) {
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}
</style>

<style scoped>
:deep(.my-range-picker-root) {
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 8px;
}

:deep(.my-input) {
  background: linear-gradient(135deg, #e6f4ff 0%, #f0f5ff 100%);
}

:deep(.my-separator) {
  color: #1890ff;
  font-weight: bold;
  font-size: 16px;
}

:deep(.my-day-in-range) {
  background: linear-gradient(135deg, #e6f4ff 0%, #bae0ff 100%) !important;
}

:deep(.my-day-range-start),
:deep(.my-day-range-end) {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%) !important;
  color: white !important;
  font-weight: bold;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <RangePicker
    :styles="{
      root: { borderRadius: '12px' },
      input: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' },
      separator: { color: 'white', fontWeight: 'bold' },
      popup: { borderRadius: '12px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `popup`、`presets`、`preset`、`rangePanels`、`panel` 等弹层相关节点通过 `Teleport to="body"` 渲染，因此其样式必须使用 `:global()` 包裹（在 scoped 样式中），或在独立的非 scoped `<style>` 块中定义
- `clear` 仅在 `allowClear` 启用且有选中值时显示
- `dayToday`、`daySelected`、`dayInRange`、`dayRangeStart`、`dayRangeEnd` 是状态类 className，会与 `day` 同时应用
- 左右两个日历面板共享 `panel`、`panelHeader`、`panelBody` 等样式
- 预设范围仅在传入 `presets` 属性时显示

## 设计 Token

| Token 名称                | 说明         | 默认值               |
| ------------------------- | ------------ | -------------------- |
| `--hmfw-color-border`     | 边框颜色     | `#d9d9d9`            |
| `--hmfw-color-primary-bg` | 主色浅背景色 | 由主色计算（浅 90%） |
