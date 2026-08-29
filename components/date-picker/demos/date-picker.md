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

### 尺寸、状态与形态变体

通过 `size` 切换输入框大小，`status` 设置校验状态，`variant` 切换形态变体。

<DemoBlock title="尺寸、状态与形态变体" :source="DatePickerSizeSource">
  <DatePickerSize />
</DemoBlock>

### 自定义日期格式

通过 `format` 属性自定义展示的日期格式。

<DemoBlock title="自定义日期格式" :source="DatePickerFormatSource">
  <DatePickerFormat />
</DemoBlock>

### 定制单元格

通过 `cellRender` 自定义日期单元格内容。

<DemoBlock title="定制单元格" :source="DatePickerCellRenderSource">
  <DatePickerCellRender />
</DemoBlock>

### 额外的页脚

通过 `renderExtraFooter` 在面板底部添加自定义内容。

<DemoBlock title="额外的页脚" :source="DatePickerExtraFooterSource">
  <DatePickerExtraFooter />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="DatePickerClassNamesSource">
  <DatePickerClassNames />
</DemoBlock>

## API

### DatePicker Props

| 参数              | 说明                                                                             | 类型                                                                     | 默认值         |
| ----------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------- |
| value(v-model)    | 日期（week 模式为周字符串，如 `'2026-21'`）                                      | `string`                                                                 | -              |
| defaultValue      | 默认日期                                                                         | `string`                                                                 | -              |
| format            | 展示的日期格式                                                                   | `string`                                                                 | 见下方说明     |
| disabled          | 禁用                                                                             | `boolean`                                                                | `false`        |
| size              | 输入框大小                                                                       | `'small' \| 'middle' \| 'large'`                                         | `'middle'`     |
| placeholder       | 输入框提示文字                                                                   | `string`                                                                 | -              |
| allowClear        | 是否显示清除按钮                                                                 | `boolean`                                                                | `true`         |
| picker            | 设置选择器类型                                                                   | `'date' \| 'week' \| 'month' \| 'year' \| 'quarter'`                     | `'date'`       |
| showTime          | 增加时间选择功能，可配置时分秒步长                                               | `boolean \| { format?, hourStep?, minuteStep?, secondStep? }`            | `false`        |
| showToday         | 是否展示"今天"按钮                                                               | `boolean`                                                                | `true`         |
| showNow           | 是否展示"此刻"按钮（优先于 showToday）                                           | `boolean`                                                                | `false`        |
| disabledDate      | 不可选择的日期                                                                   | `(date: Date, info?: { from?: Date, type?: DatePickerMode }) => boolean` | -              |
| status            | 设置校验状态                                                                     | `'error' \| 'warning'`                                                   | -              |
| open              | 控制弹层是否展开                                                                 | `boolean`                                                                | -              |
| defaultOpen       | 默认是否展开弹层                                                                 | `boolean`                                                                | `false`        |
| presets           | 预设时间范围快捷选择                                                             | `PresetItem[]`                                                           | -              |
| minDate           | 最小可选日期                                                                     | `string`                                                                 | -              |
| maxDate           | 最大可选日期                                                                     | `string`                                                                 | -              |
| placement         | 弹层弹出位置                                                                     | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'`               | `'bottomLeft'` |
| variant           | 形态变体                                                                         | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`                 | `'outlined'`   |
| renderExtraFooter | 在面板中添加额外的页脚                                                           | `() => VNode`                                                            | -              |
| cellRender        | 自定义日期单元格内容                                                             | `(date: Date, info: CellRenderInfo) => VNode`                            | -              |
| classNames        | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `DatePickerClassNames`                                                   | -              |
| styles            | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `DatePickerStyles`                                                       | -              |

> `format` 默认值随 `picker` 变化：`year` 为 `'YYYY'`、`month` 为 `'YYYY-MM'`、`quarter` 为 `'YYYY-Qn'`、`week` 为 `'YYYY-ww'`（年内周数，周日为一周起始）、`showTime` 为 `'YYYY-MM-DD HH:mm:ss'`，其余为 `'YYYY-MM-DD'`。

### DatePicker Events

| 事件名       | 说明                     | 回调参数                                                           |
| ------------ | ------------------------ | ------------------------------------------------------------------ |
| update:value | 日期发生变化的回调       | `(value: string \| undefined) => void`                             |
| change       | 日期发生变化的回调       | `(value: string \| undefined, date: Date \| null) => void`         |
| openChange   | 弹出日历和关闭日历的回调 | `(open: boolean) => void`                                          |
| panelChange  | 日历面板切换的回调       | `(value: Date \| null, mode: 'date' \| 'month' \| 'year') => void` |
| focus        | 输入框获得焦点回调       | `() => void`                                                       |
| blur         | 输入框失去焦点回调       | `() => void`                                                       |

### PresetItem

| 参数  | 说明           | 类型                       |
| ----- | -------------- | -------------------------- |
| label | 预设项显示文本 | `string`                   |
| value | 预设值         | `string \| (() => string)` |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 DatePicker 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface DatePickerClassNames {
  root?: string // 根节点（触发器容器）
  input?: string // 输入框容器
  clear?: string // 清除按钮
  suffix?: string // 后缀图标
  popup?: string // 弹层容器
  panel?: string // 面板容器
  panelHeader?: string // 面板头部
  panelBody?: string // 面板主体
  weekdays?: string // 星期行容器
  weekday?: string // 单个星期标签
  days?: string // 日期网格容器
  day?: string // 单个日期单元格
  months?: string // 月份网格容器
  month?: string // 单个月份单元格
  years?: string // 年份网格容器
  year?: string // 单个年份单元格
  quarters?: string // 季度网格容器
  quarter?: string // 单个季度单元格
  timePanel?: string // 时间选择面板
  timeContent?: string // 时间列容器
  timeColumn?: string // 单个时间列
  timeCell?: string // 时间单元格
  panelFooter?: string // 面板底部
  panelFooterExtra?: string // 底部额外内容区
  panelFooterActions?: string // 底部操作按钮区
  presets?: string // 预设按钮容器
  presetBtn?: string // 单个预设按钮
  today?: string // 今天/此刻按钮
  ok?: string // 确定按钮（showTime 模式）
}

interface DatePickerStyles {
  root?: CSSProperties // 根节点（触发器容器）
  input?: CSSProperties // 输入框容器
  clear?: CSSProperties // 清除按钮
  suffix?: CSSProperties // 后缀图标
  popup?: CSSProperties // 弹层容器
  panel?: CSSProperties // 面板容器
  panelHeader?: CSSProperties // 面板头部
  panelBody?: CSSProperties // 面板主体
  weekdays?: CSSProperties // 星期行容器
  weekday?: CSSProperties // 单个星期标签
  days?: CSSProperties // 日期网格容器
  day?: CSSProperties // 单个日期单元格
  months?: CSSProperties // 月份网格容器
  month?: CSSProperties // 单个月份单元格
  years?: CSSProperties // 年份网格容器
  year?: CSSProperties // 单个年份单元格
  quarters?: CSSProperties // 季度网格容器
  quarter?: CSSProperties // 单个季度单元格
  timePanel?: CSSProperties // 时间选择面板
  timeContent?: CSSProperties // 时间列容器
  timeColumn?: CSSProperties // 单个时间列
  timeCell?: CSSProperties // 时间单元格
  panelFooter?: CSSProperties // 面板底部
  panelFooterExtra?: CSSProperties // 底部额外内容区
  panelFooterActions?: CSSProperties // 底部操作按钮区
  presets?: CSSProperties // 预设按钮容器
  presetBtn?: CSSProperties // 单个预设按钮
  today?: CSSProperties // 今天/此刻按钮
  ok?: CSSProperties // 确定按钮（showTime 模式）
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-date-picker">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <input class="hmfw-date-picker-input" />
  <!-- ↑ classNames.input / styles.input 应用于此 -->
  <span class="hmfw-date-picker-clear">×</span>
  <!-- ↑ classNames.clear / styles.clear 应用于此 -->
  <span class="hmfw-date-picker-suffix">📅</span>
  <!-- ↑ classNames.suffix / styles.suffix 应用于此 -->

  <!-- Teleport 到 body -->
  <div class="hmfw-date-picker-popup">
    <!-- ↑ classNames.popup / styles.popup 应用于此 -->
    <div class="hmfw-date-picker-panel">
      <!-- ↑ classNames.panel / styles.panel 应用于此 -->
      <div class="hmfw-date-picker-panel-header">
        <!-- ↑ classNames.panelHeader / styles.panelHeader 应用于此 -->
        年月切换器
      </div>
      <div class="hmfw-date-picker-panel-body">
        <!-- ↑ classNames.panelBody / styles.panelBody 应用于此 -->
        <div class="hmfw-date-picker-weekdays">
          <!-- ↑ classNames.weekdays / styles.weekdays 应用于此 -->
          <div class="hmfw-date-picker-weekday">日</div>
          <!-- ↑ classNames.weekday / styles.weekday 应用于此 -->
        </div>
        <div class="hmfw-date-picker-days">
          <!-- ↑ classNames.days / styles.days 应用于此 -->
          <div class="hmfw-date-picker-day">1</div>
          <!-- ↑ classNames.day / styles.day 应用于此 -->
        </div>
        <!-- picker="month" 时 -->
        <div class="hmfw-date-picker-months">
          <!-- ↑ classNames.months / styles.months 应用于此 -->
          <div class="hmfw-date-picker-month">一月</div>
          <!-- ↑ classNames.month / styles.month 应用于此 -->
        </div>
        <!-- picker="year" 时 -->
        <div class="hmfw-date-picker-years">
          <!-- ↑ classNames.years / styles.years 应用于此 -->
          <div class="hmfw-date-picker-year">2024</div>
          <!-- ↑ classNames.year / styles.year 应用于此 -->
        </div>
        <!-- picker="quarter" 时 -->
        <div class="hmfw-date-picker-quarters">
          <!-- ↑ classNames.quarters / styles.quarters 应用于此 -->
          <div class="hmfw-date-picker-quarter">Q1</div>
          <!-- ↑ classNames.quarter / styles.quarter 应用于此 -->
        </div>
      </div>
      <!-- showTime 时 -->
      <div class="hmfw-date-picker-time-panel">
        <!-- ↑ classNames.timePanel / styles.timePanel 应用于此 -->
        <div class="hmfw-date-picker-time-content">
          <!-- ↑ classNames.timeContent / styles.timeContent 应用于此 -->
          <div class="hmfw-date-picker-time-column">
            <!-- ↑ classNames.timeColumn / styles.timeColumn 应用于此 -->
            <div class="hmfw-date-picker-time-cell">00</div>
            <!-- ↑ classNames.timeCell / styles.timeCell 应用于此 -->
          </div>
        </div>
      </div>
      <div class="hmfw-date-picker-panel-footer">
        <!-- ↑ classNames.panelFooter / styles.panelFooter 应用于此 -->
        <div class="hmfw-date-picker-panel-footer-extra">
          <!-- ↑ classNames.panelFooterExtra / styles.panelFooterExtra 应用于此 -->
          额外内容
        </div>
        <div class="hmfw-date-picker-presets">
          <!-- ↑ classNames.presets / styles.presets 应用于此 -->
          <button class="hmfw-date-picker-preset-btn">昨天</button>
          <!-- ↑ classNames.presetBtn / styles.presetBtn 应用于此 -->
        </div>
        <div class="hmfw-date-picker-panel-footer-actions">
          <!-- ↑ classNames.panelFooterActions / styles.panelFooterActions 应用于此 -->
          <button class="hmfw-date-picker-today">今天</button>
          <!-- ↑ classNames.today / styles.today 应用于此 -->
          <button class="hmfw-date-picker-ok">确定</button>
          <!-- ↑ classNames.ok / styles.ok 应用于此 -->
        </div>
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <DatePicker
    placeholder="选择日期"
    :class-names="{
      root: 'my-date-picker-root',
      panel: 'my-date-picker-panel',
      day: 'my-date-picker-day',
    }"
  />
</template>

<style>
/* popup/panel 通过 Teleport 渲染到 body，必须使用 :global() */
:global(.my-date-picker-panel) {
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.2);
}

:global(.my-date-picker-day:hover) {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}
</style>

<style scoped>
:deep(.my-date-picker-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

:deep(.my-date-picker-root:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <DatePicker
    placeholder="选择日期"
    :styles="{
      root: { borderRadius: '20px', borderColor: '#722ed1' },
      input: { color: '#722ed1', fontWeight: 500 },
      popup: { borderRadius: '16px' },
      panel: { boxShadow: '0 8px 24px rgba(114, 46, 209, 0.15)' },
      day: { borderRadius: '8px', fontWeight: 500 },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `popup`、`panel` 及其所有子节点（如 `day`、`month`、`timeCell` 等）通过 `Teleport to="body"` 渲染，因此其样式必须使用 `:global()` 而非 `:deep()`
- `clear` 仅在 `allowClear` 启用且有选中值时显示
- `timePanel`、`timeContent`、`timeColumn`、`timeCell` 仅在 `showTime` 启用时显示
- `ok` 按钮仅在 `showTime` 模式下显示
- `today` 按钮受 `showToday` / `showNow` 控制
- 不同 `picker` 类型（date/month/year/quarter）会显示不同的单元格容器（days/months/years/quarters）

## 设计 Token

DatePicker 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                                                       | 说明                               | 默认值                    |
| ---------------------------------------------------------------- | ---------------------------------- | ------------------------- |
| `--hmfw-color-primary`                                           | 主题色（选中态、悬停、确定按钮）   | `#1677ff`                 |
| `--hmfw-color-primary-bg`                                        | 主题浅色背景（单元格悬停、周选中） | `#e8f1ff`                 |
| `--hmfw-color-primary-hover`                                     | 主题色悬停态                       | `#4592ff`                 |
| `--hmfw-color-text`                                              | 主要文本颜色                       | `rgba(0, 0, 0, 0.88)`     |
| `--hmfw-color-text-secondary`                                    | 次要文本颜色                       | `rgba(0, 0, 0, 0.65)`     |
| `--hmfw-color-text-disabled`                                     | 禁用文本颜色                       | `rgba(0, 0, 0, 0.25)`     |
| `--hmfw-color-text-light-solid`                                  | 主题色底上的文字色                 | `#ffffff`                 |
| `--hmfw-color-border`                                            | 边框颜色（预设按钮）               | `rgba(0, 0, 0, 0.15)`     |
| `--hmfw-color-border-secondary`                                  | 次要边框色（面板分隔线）           | `rgba(0, 0, 0, 0.06)`     |
| `--hmfw-color-error`                                             | 错误状态颜色                       | `#ff4d4f`                 |
| `--hmfw-color-warning`                                           | 警告状态颜色                       | `#faad14`                 |
| `--hmfw-font-size`                                               | 面板标准字号                       | `14px`                    |
| `--hmfw-font-size-sm`                                            | 预设按钮小字号                     | `12px`                    |
| `--hmfw-font-size-icon`                                          | 后缀图标字号                       | `12px`                    |
| `--hmfw-line-height`                                             | 输入文字行高                       | `1.5714285714285714`      |
| `--hmfw-border-radius`                                           | 输入框基础圆角                     | `6px`                     |
| `--hmfw-border-radius-sm`                                        | 单元格/按钮圆角                    | `4px`                     |
| `--hmfw-padding-xs` / `--hmfw-padding-sm` / `--hmfw-padding-xxs` | 面板内边距                         | `8px` / `12px` / `4px`    |
| `--hmfw-margin-xxs` / `--hmfw-margin-xs`                         | 间距                               | `4px` / `8px`             |
| `--hmfw-motion-duration-mid`                                     | 过渡动画时长                       | `0.2s`                    |
| `--hmfw-control-outline`                                         | 展开态光晕                         | `rgba(22, 119, 255, 0.1)` |

### 组件 Token

组件专属变量定义在 `.hmfw-date-picker-panel` 上，可直接覆盖以定制面板尺寸：

| Token 名称                               | 说明                | 默认值                 |
| ---------------------------------------- | ------------------- | ---------------------- |
| `--hmfw-date-picker-cell-size`           | 日期单元格尺寸      | `36px`                 |
| `--hmfw-date-picker-panel-width`         | 面板宽度            | 派生自 `cell-size × 7` |
| `--hmfw-date-picker-time-panel-width`    | showTime 时间面板宽 | `180px`                |
| `--hmfw-date-picker-time-content-height` | showTime 时间列高度 | `224px`                |

> 时间列单元格样式由共享组件 TimeColumn 提供（`--hmfw-picker-time-cell-line-height: 28px`，定义在 `.hmfw-picker-time-column` 上），TimePicker 与 DatePicker(showTime) 共用。
