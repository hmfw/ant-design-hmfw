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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TimePickerClassNamesSource">
  <TimePickerClassNames />
</DemoBlock>

## API

### TimePicker Props

| 参数                | 说明                                                                             | 类型                                                       | 默认值         |
| ------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------- |
| value(v-model)      | 时间                                                                             | `string`                                                   | -              |
| defaultValue        | 默认时间                                                                         | `string`                                                   | -              |
| format              | 展示的时间格式                                                                   | `string`                                                   | `'HH:mm:ss'`   |
| disabled            | 禁用全部操作                                                                     | `boolean`                                                  | `false`        |
| size                | 输入框大小                                                                       | `'small' \| 'middle' \| 'large'`                           | `'middle'`     |
| placeholder         | 没有值的时候显示的内容                                                           | `string`                                                   | `'请选择时间'` |
| allowClear          | 是否展示清除按钮                                                                 | `boolean`                                                  | `true`         |
| hourStep            | 小时选项间隔                                                                     | `number`                                                   | `1`            |
| minuteStep          | 分钟选项间隔                                                                     | `number`                                                   | `1`            |
| secondStep          | 秒选项间隔                                                                       | `number`                                                   | `1`            |
| disabledTime        | 禁用部分时间选项                                                                 | `() => DisabledTimeConfig`                                 | -              |
| hideDisabledOptions | 隐藏禁用的选项                                                                   | `boolean`                                                  | `false`        |
| showNow             | 面板是否显示"此刻"按钮                                                           | `boolean`                                                  | `true`         |
| use12Hours          | 使用 12 小时制，为 true 时 format 默认为 h:mm:ss a                               | `boolean`                                                  | `false`        |
| status              | 设置校验状态                                                                     | `'error' \| 'warning'`                                     | -              |
| open                | 控制浮层显隐                                                                     | `boolean`                                                  | -              |
| needConfirm         | 需要点击确定按钮才触发值变化                                                     | `boolean`                                                  | `false`        |
| changeOnScroll      | 滚动时立即触发选择                                                               | `boolean`                                                  | `false`        |
| renderExtraFooter   | 在面板底部渲染额外的内容                                                         | `() => VNodeChild`                                         | -              |
| variant             | 输入框变体                                                                       | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`   | `'outlined'`   |
| placement           | 浮层弹出位置                                                                     | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | `'bottomLeft'` |
| classNames          | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TimePickerClassNames`                                     | -              |
| styles              | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TimePickerStyles`                                         | -              |

### DisabledTimeConfig

```typescript
interface DisabledTimeConfig {
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
}
```

### TimePicker Events

| 事件名       | 说明                  | 回调参数                                                   |
| ------------ | --------------------- | ---------------------------------------------------------- |
| update:value | 时间发生变化的回调    | `(value: string \| undefined) => void`                     |
| change       | 时间发生变化的回调    | `(value: string \| undefined, timeString: string) => void` |
| openChange   | 面板打开/关闭时的回调 | `(open: boolean) => void`                                  |
| focus        | 获得焦点时的回调      | `() => void`                                               |
| blur         | 失去焦点时的回调      | `() => void`                                               |

### TimePicker Methods

| 方法名  | 说明     |
| ------- | -------- |
| focus() | 获取焦点 |
| blur()  | 失去焦点 |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface TimePickerClassNames {
  root?: string // 根容器
  input?: string // 输入区域
  clear?: string // 清除按钮
  suffix?: string // 后缀图标
  popup?: string // 弹层容器
  panel?: string // 面板
  panelInner?: string // 面板内部容器
  column?: string // 时间列（小时/分钟/秒共用）
  cell?: string // 时间单元格（所有列共用）
  footer?: string // 底部区域
  footerExtra?: string // 额外底部内容
  footerActions?: string // 底部按钮区域
  now?: string // "此刻"按钮
  ok?: string // "确定"按钮
}

interface TimePickerStyles {
  root?: CSSProperties
  input?: CSSProperties
  clear?: CSSProperties
  suffix?: CSSProperties
  popup?: CSSProperties
  panel?: CSSProperties
  panelInner?: CSSProperties
  column?: CSSProperties
  cell?: CSSProperties
  footer?: CSSProperties
  footerExtra?: CSSProperties
  footerActions?: CSSProperties
  now?: CSSProperties
  ok?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 触发器部分 -->
<div class="hmfw-time-picker">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-time-picker-input">12:00:00</span>
  <!-- ↑ classNames.input / styles.input 应用于此 -->
  <span class="hmfw-time-picker-clear">×</span>
  <!-- ↑ classNames.clear / styles.clear 应用于此 -->
  <span class="hmfw-time-picker-suffix">🕐</span>
  <!-- ↑ classNames.suffix / styles.suffix 应用于此 -->
</div>

<!-- 弹层部分（Teleport 到 body） -->
<div class="hmfw-time-picker-popup">
  <!-- ↑ classNames.popup / styles.popup 应用于此 -->
  <div class="hmfw-time-picker-panel">
    <!-- ↑ classNames.panel / styles.panel 应用于此 -->
    <div class="hmfw-time-picker-panel-inner">
      <!-- ↑ classNames.panelInner / styles.panelInner 应用于此 -->
      <ul class="hmfw-time-picker-panel-column">
        <!-- ↑ classNames.column / styles.column 应用于此（小时/分钟/秒/AM-PM 共用） -->
        <li class="hmfw-time-picker-panel-cell">00</li>
        <!-- ↑ classNames.cell / styles.cell 应用于此（所有列的单元格共用） -->
      </ul>
    </div>
    <div class="hmfw-time-picker-panel-footer">
      <!-- ↑ classNames.footer / styles.footer 应用于此 -->
      <div class="hmfw-time-picker-panel-footer-extra">额外内容</div>
      <!-- ↑ classNames.footerExtra / styles.footerExtra 应用于此 -->
      <div class="hmfw-time-picker-panel-footer-actions">
        <!-- ↑ classNames.footerActions / styles.footerActions 应用于此 -->
        <button class="hmfw-time-picker-panel-footer-btn">此刻</button>
        <!-- ↑ classNames.now / styles.now 应用于此 -->
        <button class="hmfw-time-picker-panel-footer-ok">确定</button>
        <!-- ↑ classNames.ok / styles.ok 应用于此 -->
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <TimePicker
    :classNames="{
      root: 'my-trigger',
      input: 'my-input',
      popup: 'my-popup',
      cell: 'my-cell',
      ok: 'my-ok-btn',
    }"
  />
</template>

<style>
/* popup 通过 Teleport 渲染到 body，必须使用全局样式 */
.my-popup {
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2) !important;
}

.my-cell:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
}
</style>

<style scoped>
:deep(.my-trigger) {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
}

:deep(.my-input) {
  color: #667eea;
  font-weight: 500;
}

:deep(.my-ok-btn) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%) !important;
  color: white !important;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <TimePicker
    :styles="{
      root: { borderRadius: '20px', borderColor: '#722ed1' },
      input: { color: '#722ed1', fontWeight: 500 },
      suffix: { color: '#722ed1', fontSize: '18px' },
      panel: { borderRadius: '12px' },
      cell: { fontWeight: 500 },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `popup`、`panel`、`column`、`cell`、`footer` 等弹层元素通过 `Teleport to="body"` 渲染，其样式必须使用 `:global()` 或非 scoped 的全局样式，使用 `:deep()` 无法穿透
- `clear` 仅在 `allowClear` 启用且有选中值时显示
- `column` 应用于所有时间列（小时/分钟/秒/AM-PM），`cell` 应用于所有列的单元格
- `footer` 包含 `footerExtra`（`renderExtraFooter` 渲染的内容）和 `footerActions`（"此刻"/"确定"按钮区域）
- `now` 按钮仅在 `showNow` 为 `true` 时显示，`ok` 按钮仅在 `needConfirm` 为 `true` 时显示

## 设计 Token

| Token 名称                           | 说明           | 默认值             |
| ------------------------------------ | -------------- | ------------------ |
| `--hmfw-color-primary`               | 主题色         | `#1677ff`          |
| `--hmfw-color-primary-bg`            | 主题色背景     | `#e6f4ff`          |
| `--hmfw-color-primary-hover`         | 主题色悬停     | `#4096ff`          |
| `--hmfw-color-error`                 | 错误状态颜色   | `#ff4d4f`          |
| `--hmfw-color-warning`               | 警告状态颜色   | `#faad14`          |
| `--hmfw-color-text`                  | 主文本颜色     | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary`        | 次要文本颜色   | `rgba(0,0,0,0.65)` |
| `--hmfw-color-text-disabled`         | 禁用文本颜色   | `rgba(0,0,0,0.25)` |
| `--hmfw-color-text-placeholder`      | 占位符文本颜色 | `rgba(0,0,0,0.25)` |
| `--hmfw-color-border`                | 边框颜色       | `#d9d9d9`          |
| `--hmfw-color-border-secondary`      | 次要边框颜色   | `#f0f0f0`          |
| `--hmfw-color-fill-secondary`        | 次要填充颜色   | `rgba(0,0,0,0.06)` |
| `--hmfw-color-fill-tertiary`         | 三级填充颜色   | `rgba(0,0,0,0.04)` |
| `--hmfw-color-bg-container-disabled` | 禁用容器背景   | `rgba(0,0,0,0.04)` |
| `--hmfw-color-bg-text-hover`         | 文本悬停背景   | `rgba(0,0,0,0.06)` |
| `--hmfw-border-radius`               | 基础圆角       | `6px`              |
