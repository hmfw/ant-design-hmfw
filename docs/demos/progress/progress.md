# Progress 进度条

展示操作的当前进度。

## 何时使用

- 在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态
- 当操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时
- 当需要显示一个操作完成的百分比时

## 代码演示

### 进度条

标准的进度条。

<DemoBlock title="进度条" :source="ProgressBasicSource">
  <ProgressBasic />
</DemoBlock>

### 圆形进度

圆形进度条。

<DemoBlock title="圆形进度" :source="ProgressCircleSource">
  <ProgressCircle />
</DemoBlock>

### 仪表盘

仪表盘样式的进度条。

<DemoBlock title="仪表盘" :source="ProgressDashboardSource">
  <ProgressDashboard />
</DemoBlock>

### 动态展示

会动的进度条才是好进度条。

<DemoBlock title="动态展示" :source="ProgressDynamicSource">
  <ProgressDynamic />
</DemoBlock>

### 步骤进度条

步骤进度条。

<DemoBlock title="步骤进度条" :source="ProgressStepsSource">
  <ProgressSteps />
</DemoBlock>

### 渐变色

渐变色进度条、成功分段，以及圆形 / 仪表盘渐变。圆形与仪表盘的渐变在屏幕空间内始终保持水平方向，不受缺口旋转影响。

<DemoBlock title="渐变色" :source="ProgressGradientSource">
  <ProgressGradient />
</DemoBlock>

### 自定义

自定义尺寸、间隙角度和线帽样式。

<DemoBlock title="自定义" :source="ProgressCustomSource">
  <ProgressCustom />
</DemoBlock>

### 仪表盘缺口位置

通过 `gapPlacement` 控制仪表盘缺口位置（v6 替代 `gapPosition`）。

<DemoBlock title="仪表盘缺口位置" :source="ProgressGapPlacementSource">
  <ProgressGapPlacement />
</DemoBlock>

### v6 新特性

`size` 数组形式、`steps` 对象形式、`rounding` 自定义舍入、小圆形（≤20px）自动套 Tooltip 等。

<DemoBlock title="v6 新特性" :source="ProgressV6Source">
  <ProgressV6 />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对轨道、进度条、指示器等子元素做细粒度样式控制，支持线形、圆形、仪表盘三种类型。

<DemoBlock title="语义化 className 与 style" :source="ProgressClassNamesSource">
  <ProgressClassNames />
</DemoBlock>

## API

### Progress Props

| 参数            | 说明                                                                             | 类型                                                                                    | 默认值                            |
| --------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------- |
| type            | 类型                                                                             | `'line' \| 'circle' \| 'dashboard'`                                                     | `'line'`                          |
| percent         | 百分比                                                                           | `number`                                                                                | `0`                               |
| status          | 状态                                                                             | `'success' \| 'exception' \| 'normal' \| 'active'`                                      | -                                 |
| showInfo        | 是否显示进度数值或状态图标                                                       | `boolean`                                                                               | `true`                            |
| strokeColor     | 进度条色彩，支持字符串 / 数组 / 渐变对象                                         | `string \| string[] \| ProgressGradient`                                                | -                                 |
| railColor       | 未完成分段颜色                                                                   | `string`                                                                                | -                                 |
| trailColor      | (已废弃) 使用 `railColor` 代替                                                   | `string`                                                                                | -                                 |
| strokeWidth     | 进度条线宽度                                                                     | `number`                                                                                | `8` (line), 自适应 (circle)       |
| strokeLinecap   | 进度条端点形状                                                                   | `'round' \| 'butt' \| 'square'`                                                         | `'round'`                         |
| size            | 进度条尺寸                                                                       | `'small' \| 'medium' \| 'default' \| number \| [number, number] \| { width?, height? }` | `'medium'`                        |
| width           | (已废弃) circle/dashboard 画布宽度，使用 `size` 代替                             | `number`                                                                                | `120`                             |
| format          | 内容模板函数，可返回 VNode                                                       | `(percent?: number, successPercent?: number) => VNode \| string \| number \| null`      | -                                 |
| steps           | 步骤进度条；对象形式可指定段间距                                                 | `number \| { count: number; gap: number }`                                              | -                                 |
| success         | 成功进度条配置                                                                   | `{ percent?: number; strokeColor?: string }`                                            | -                                 |
| gapDegree       | 圆形进度条缺口角度，dashboard 默认 75                                            | `number`                                                                                | `0` (circle), `75` (dashboard)    |
| gapPlacement    | 仪表盘缺口位置（v6 新 API）                                                      | `'top' \| 'bottom' \| 'start' \| 'end'`                                                 | `'bottom'` (dashboard)            |
| gapPosition     | (已废弃) 使用 `gapPlacement` 代替                                                | `'top' \| 'bottom' \| 'left' \| 'right'`                                                | -                                 |
| percentPosition | 进度文字位置                                                                     | `{ align?: 'start' \| 'center' \| 'end'; type?: 'inner' \| 'outer' }`                   | `{ align: 'end', type: 'outer' }` |
| rounding        | 步骤进度条已激活段数舍入函数                                                     | `(step: number) => number`                                                              | `Math.round`                      |
| rootClassName   | 根元素类名                                                                       | `string`                                                                                | -                                 |
| classNames      | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ProgressClassNames`                                                                    | -                                 |
| styles          | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ProgressStyles`                                                                        | -                                 |

### ProgressGradient

```ts
type ProgressGradient = {
  direction?: string // 渐变方向，如 'to right'
  from?: string // 起始颜色
  to?: string // 结束颜色
  [key: string]: string | undefined // 多色渐变，如 '0%': '#108ee9', '100%': '#87d068'
}
```

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对进度条的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
interface ProgressClassNames {
  root?: string // 进度条根容器
  body?: string // 进度条主体容器
  rail?: string // 背景轨道（未完成部分）
  track?: string // 已完成轨道
  indicator?: string // 百分比文本
}

import type { CSSProperties } from 'vue'

interface ProgressStyles {
  root?: CSSProperties // 进度条根容器
  body?: CSSProperties // 进度条主体容器
  rail?: CSSProperties // 背景轨道
  track?: CSSProperties // 已完成轨道
  indicator?: CSSProperties // 百分比文本
}
```

### DOM 结构与 className 映射

**线形进度条 (type="line")**

```html
<div class="hmfw-progress hmfw-progress-line">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-progress-body">
    <!-- ↑ classNames.body / styles.body 应用于此 -->
    <div class="hmfw-progress-rail">
      <!-- ↑ classNames.rail / styles.rail 应用于此 -->
      <div class="hmfw-progress-track" style="width: 50%">
        <!-- ↑ classNames.track / styles.track 应用于此 -->
      </div>
    </div>
  </div>
  <span class="hmfw-progress-indicator">50%</span>
  <!-- ↑ classNames.indicator / styles.indicator 应用于此 -->
</div>
```

**圆形进度条 (type="circle" 或 "dashboard")**

```html
<div class="hmfw-progress hmfw-progress-circle">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-progress-body">
    <!-- ↑ classNames.body / styles.body 应用于此 -->
    <svg viewBox="-50 -50 100 100">
      <circle class="hmfw-progress-rail" />
      <!-- ↑ classNames.rail / styles.rail 应用于此 -->
      <circle class="hmfw-progress-track" />
      <!-- ↑ classNames.track / styles.track 应用于此 -->
    </svg>
  </div>
  <span class="hmfw-progress-indicator">50%</span>
  <!-- ↑ classNames.indicator / styles.indicator 应用于此 -->
</div>
```

### 使用 classNames

```vue
<template>
  <!-- 自定义轨道样式 -->
  <Progress
    :percent="60"
    :class-names="{
      rail: 'my-rail',
      track: 'my-track',
    }"
  />

  <!-- 自定义百分比文本 -->
  <Progress :percent="75" :class-names="{ indicator: 'my-indicator' }" />

  <!-- 圆形进度条自定义 -->
  <Progress
    type="circle"
    :percent="80"
    :class-names="{
      body: 'my-circle-body',
      indicator: 'my-circle-text',
    }"
  />
</template>

<style scoped>
:deep(.my-rail) {
  background: linear-gradient(to right, #f0f0f0, #e0e0e0);
}

:deep(.my-track) {
  background: linear-gradient(to right, #1890ff, #52c41a);
}

:deep(.my-indicator) {
  font-weight: bold;
  color: #722ed1;
}

:deep(.my-circle-body) {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
}

:deep(.my-circle-text) {
  font-size: 20px;
  font-weight: 600;
}
</style>
```

### 使用 styles

```vue
<template>
  <!-- 内联样式控制颜色 -->
  <Progress
    :percent="60"
    :styles="{
      rail: { background: '#f0f0f0' },
      track: { background: 'linear-gradient(to right, #1890ff, #52c41a)' },
    }"
  />

  <!-- 自定义指示器样式 -->
  <Progress
    :percent="75"
    :styles="{
      indicator: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#ff4d4f',
      },
    }"
  />

  <!-- 圆形进度条容器样式 -->
  <Progress
    type="circle"
    :percent="80"
    :styles="{
      body: { filter: 'drop-shadow(0 4px 12px rgba(24, 144, 255, 0.3))' },
      indicator: { fontSize: '24px', color: '#1890ff' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 对于 `strokeColor` / `railColor` 等 props，建议优先使用组件提供的属性；`styles.track` / `styles.rail` 适合做细微调整
- 圆形进度条的 `rail` / `track` 对应 SVG `<circle>` 元素，部分 CSS 属性（如 `stroke`）需使用 SVG 属性

---

## 设计 Token

| Token 名称                    | 说明         | 默认值                                 |
| ----------------------------- | ------------ | -------------------------------------- |
| `--hmfw-color-primary`        | 主题色       | `#1677ff`                              |
| `--hmfw-color-success`        | 成功状态色   | `#52c41a`                              |
| `--hmfw-color-error`          | 错误状态色   | `#ff4d4f`                              |
| `--hmfw-color-text`           | 主文本色     | `rgba(0,0,0,0.88)`                     |
| `--hmfw-color-white`          | 纯白色       | `#ffffff`                              |
| `--hmfw-color-bg-container`   | 容器背景色   | `#ffffff`                              |
| `--hmfw-color-fill-secondary` | 次级填充色   | `rgba(0,0,0,0.06)`                     |
| `--hmfw-font-size-base`       | 基础字号     | `14px`                                 |
| `--hmfw-font-size-sm`         | 小号字号     | `12px`                                 |
| `--hmfw-padding-xxs`          | 超超小内边距 | `2px`                                  |
| `--hmfw-margin-xxs`           | 超超小外边距 | `2px`                                  |
| `--hmfw-margin-xs`            | 超小外边距   | `4px`                                  |
| `--hmfw-motion-duration-slow` | 慢速动画时长 | `0.3s`                                 |
| `--hmfw-motion-ease-in-out`   | 缓入缓出曲线 | `cubic-bezier(0.645, 0.045, 0.355, 1)` |

---

### 注意事项

- `size` 默认值由 v5 的 `'default'` 改为 v6 的 `'medium'`，二者行为等价；`'default'` 会保留兼容。
- 圆形 `strokeColor` 渐变通过 `<linearGradient>` 实现，支持 `from/to` 与 `0%/50%/100%` 等百分比 stop；百分比 stop 会按数值升序排序。圆形/仪表盘使用 `userSpaceOnUse` + `gradientTransform` 抵消缺口旋转，渐变方向在屏幕空间内保持水平（RTL 下自动反向）。
- 圆形 `size <= 20` 时自动添加 `inline-circle` class，并将 indicator 包入 `Tooltip` 显示（小圆形容纳不下文字）。
- `aria-label` 默认为 `"${percent}%"`，可通过 attr 透传覆盖。
- RTL 由 `ConfigProvider direction="rtl"` 触发，渐变方向自动反转、根元素加 `rtl` class。
