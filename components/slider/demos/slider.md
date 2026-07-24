# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

## 何时使用

- 当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。
- 当用户需要自定义数值范围时。
- 适合于对数值不太精确的场景。

## 代码演示

### 基础用法

基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。

<DemoBlock title="基础用法" :source="SliderBasicSource">
  <SliderBasic />
</DemoBlock>

### 范围选择

通过 `range` 属性开启范围选择。

<DemoBlock title="范围选择" :source="SliderRangeSource">
  <SliderRange />
</DemoBlock>

### 刻度标记

使用 `marks` 属性标注分段式滑块，使用 `step={null}` 时，Slider 的可选值仅有 marks 标出来的部分。

<DemoBlock title="刻度标记" :source="SliderMarksSource">
  <SliderMarks />
</DemoBlock>

### 自定义 Tooltip

使用 `tooltip.formatter` 自定义 Tooltip 内容，设置为 `null` 可隐藏 Tooltip。使用 `tooltip.open` 控制 Tooltip 显示状态。

<DemoBlock title="自定义 Tooltip" :source="SliderTooltipSource">
  <SliderTooltip />
</DemoBlock>

### 垂直方向

垂直方向的 Slider。

<DemoBlock title="垂直方向" :source="SliderVerticalSource">
  <SliderVertical />
</DemoBlock>

### 刻度点

通过 `dots` 属性显示刻度点。

<DemoBlock title="刻度点" :source="SliderDotsSource">
  <SliderDots />
</DemoBlock>

### 反向坐标轴

通过 `reverse` 属性反转坐标轴方向。

<DemoBlock title="反向" :source="SliderReverseSource">
  <SliderReverse />
</DemoBlock>

### 事件

`change` 在拖动过程中实时触发，`afterChange` 在拖拽/按键结束时触发（对齐 `mouseup` / `keyup` 时机）。

<DemoBlock title="事件" :source="SliderEventSource">
  <SliderEvent />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="SliderClassNamesSource">
  <SliderClassNames />
</DemoBlock>

## API

### Slider Props

| 参数           | 说明                                                                                                                                             | 类型                                                                 | 默认值  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ------- |
| value(v-model) | 设置当前取值。当 `range` 为 false 时，使用 number，否则用 [number, number]                                                                       | `number \| [number, number]`                                         | -       |
| defaultValue   | 设置初始取值                                                                                                                                     | `number \| [number, number]`                                         | `0`     |
| min            | 最小值                                                                                                                                           | `number`                                                             | `0`     |
| max            | 最大值                                                                                                                                           | `number`                                                             | `100`   |
| step           | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分 | `number \| null`                                                     | `1`     |
| disabled       | 值为 true 时，滑块为禁用状态                                                                                                                     | `boolean`                                                            | `false` |
| vertical       | 值为 true 时，Slider 为垂直方向                                                                                                                  | `boolean`                                                            | `false` |
| reverse        | 反向坐标轴                                                                                                                                       | `boolean`                                                            | `false` |
| range          | 双滑块模式                                                                                                                                       | `boolean`                                                            | `false` |
| marks          | 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式                                                         | `Record<number, string \| { label: string; style?: CSSProperties }>` | -       |
| included       | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列                                                                           | `boolean`                                                            | `true`  |
| dots           | 是否只能拖拽到刻度上                                                                                                                             | `boolean`                                                            | `false` |
| keyboard       | 支持使用键盘操作 handle                                                                                                                          | `boolean`                                                            | `true`  |
| tooltip        | Tooltip 相关配置                                                                                                                                 | `{ open?: boolean; formatter?: (value: number) => string \| null }`  | -       |
| classNames     | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style)                                                                 | `SliderClassNames`                                                   | -       |
| styles         | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style)                                                                 | `SliderStyles`                                                       | -       |

### Slider Events

| 事件名       | 说明                                                                     | 回调参数                                      |
| ------------ | ------------------------------------------------------------------------ | --------------------------------------------- |
| update:value | 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入 | `(value: number \| [number, number]) => void` |
| change       | 当 Slider 的值发生改变时触发                                             | `(value: number \| [number, number]) => void` |
| afterChange  | 与 mouseup 触发时机一致，把当前值作为参数传入                            | `(value: number \| [number, number]) => void` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Slider 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface SliderClassNames {
  root?: string // 根节点 div.hmfw-slider
  rail?: string // 轨道容器 div.hmfw-slider-rail
  track?: string // 已选区间填充 div.hmfw-slider-track
  handle?: string // 滑块手柄 div.hmfw-slider-handle
  dot?: string // 刻度点 span.hmfw-slider-dot
  mark?: string // 刻度标签容器 div.hmfw-slider-mark
  markText?: string // 单个刻度文本 span.hmfw-slider-mark-text
  tooltip?: string // 手柄提示框 div.hmfw-slider-tooltip
}

interface SliderStyles {
  root?: CSSProperties
  rail?: CSSProperties
  track?: CSSProperties
  handle?: CSSProperties
  dot?: CSSProperties
  mark?: CSSProperties
  markText?: CSSProperties
  tooltip?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-slider">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <div class="hmfw-slider-rail">
    <!-- ↑ classNames.rail / styles.rail 应用于此（轨道背景） -->
  </div>

  <div class="hmfw-slider-track">
    <!-- ↑ classNames.track / styles.track 应用于此（已选区间填充） -->
  </div>

  <div class="hmfw-slider-handle">
    <!-- ↑ classNames.handle / styles.handle 应用于此（滑块手柄） -->
    <div class="hmfw-slider-tooltip">
      <!-- ↑ classNames.tooltip / styles.tooltip 应用于此（手柄提示框） -->
    </div>
  </div>

  <!-- 当设置 marks 时 -->
  <div class="hmfw-slider-mark">
    <!-- ↑ classNames.mark / styles.mark 应用于此（刻度标签容器） -->
    <span class="hmfw-slider-mark-text">
      <!-- ↑ classNames.markText / styles.markText 应用于此（单个刻度文本） -->
    </span>
  </div>

  <!-- 当设置 dots 时 -->
  <span class="hmfw-slider-dot">
    <!-- ↑ classNames.dot / styles.dot 应用于此（刻度点） -->
  </span>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义轨道与填充 -->
  <Slider
    :default-value="40"
    :class-names="{
      rail: 'my-rail',
      track: 'my-track',
    }"
  />

  <!-- 自定义滑块手柄 -->
  <Slider
    :default-value="60"
    :class-names="{
      handle: 'my-handle',
    }"
  />

  <!-- 自定义刻度标记 -->
  <Slider
    :default-value="50"
    :marks="{ 0: '0°C', 50: '50°C', 100: '100°C' }"
    :class-names="{
      markText: 'my-mark-text',
      dot: 'my-dot',
    }"
    dots
  />
</template>

<style scoped>
:deep(.my-rail) {
  background: linear-gradient(to right, #f0f5ff, #d6e4ff);
  height: 6px;
}

:deep(.my-track) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  height: 6px;
}

:deep(.my-handle) {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 3px solid #ffffff;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

:deep(.my-handle:hover) {
  transform: scale(1.1);
}

:deep(.my-mark-text) {
  color: #1890ff;
  font-weight: 600;
}

:deep(.my-dot) {
  background: #1890ff;
  border: 2px solid #ffffff;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 自定义轨道高度与颜色 -->
  <Slider
    :default-value="40"
    :styles="{
      rail: { background: '#f0f0f0', height: '8px' },
      track: { background: '#52c41a', height: '8px' },
    }"
  />

  <!-- 自定义滑块手柄 -->
  <Slider
    :default-value="60"
    :styles="{
      handle: {
        width: '20px',
        height: '20px',
        borderColor: '#722ed1',
        borderWidth: '3px',
      },
    }"
  />

  <!-- 组合使用：范围选择 -->
  <Slider
    :default-value="[20, 80]"
    range
    :styles="{
      rail: { background: '#e6f7ff', height: '8px' },
      track: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '8px' },
      handle: { borderColor: '#667eea', borderWidth: '3px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 范围选择模式 (`range={true}`) 下会渲染多个 `handle`，`classNames.handle` 和 `styles.handle` 会应用到所有手柄
- 修改 `rail` 或 `track` 的高度时，需同步调整 `handle` 的 `marginTop`，以保持垂直居中（默认轨道高度 4px，手柄高度 14px，`marginTop: -5px`）
- `tooltip` 样式仅在 Tooltip 显示时生效（hover/拖拽时或设置 `tooltip.open={true}` 时）
- 垂直模式下，`rail` 和 `track` 的宽度对应水平模式的高度

## 设计 Token

Slider 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                      | 说明                       | 默认值             |
| ------------------------------- | -------------------------- | ------------------ |
| `--hmfw-color-primary`          | 轨道填充 / 手柄 / 激活刻度 | `#1677ff`          |
| `--hmfw-color-fill-secondary`   | 轨道背景 / 刻度点边框      | `rgba(0,0,0,0.06)` |
| `--hmfw-color-bg-container`     | 手柄 / 刻度点背景          | `#ffffff`          |
| `--hmfw-color-text-disabled`    | 禁用态轨道 / 手柄边框      | `rgba(0,0,0,0.25)` |
| `--hmfw-color-bg-spotlight`     | Tooltip 背景               | `rgba(0,0,0,0.85)` |
| `--hmfw-color-text-light-solid` | Tooltip 文本               | `#ffffff`          |
| `--hmfw-color-text-description` | 刻度标签文本               | `rgba(0,0,0,0.45)` |
| `--hmfw-color-text`             | 激活刻度标签文本           | `rgba(0,0,0,0.88)` |
| `--hmfw-border-radius`          | 轨道 / 填充圆角            | `6px`              |
| `--hmfw-border-radius-sm`       | Tooltip 圆角               | `4px`              |
| `--hmfw-font-size`              | 刻度标签字号               | `14px`             |
| `--hmfw-font-size-sm`           | Tooltip 字号               | `12px`             |

### 组件 Token

组件专属变量定义在 `.hmfw-slider` 上，可直接覆盖以定制单个 Slider 的尺寸与样式。

| Token 名称                            | 说明                            | 默认值                  |
| ------------------------------------- | ------------------------------- | ----------------------- |
| `--hmfw-slider-rail-size`             | 轨道厚度（对齐 AntD railSize）  | `4px`                   |
| `--hmfw-slider-handle-size`           | 滑块手柄尺寸                    | `14px`                  |
| `--hmfw-slider-dot-size`              | 刻度点尺寸（对齐 AntD dotSize） | `8px`                   |
| `--hmfw-slider-handle-active-outline` | 手柄聚焦光晕（主题色 12%）      | `rgba(22,119,255,0.12)` |

## 键盘操作

- `←` / `↓`: 减小步长
- `→` / `↑`: 增加步长
- `Home`: 跳转到最小值
- `End`: 跳转到最大值
