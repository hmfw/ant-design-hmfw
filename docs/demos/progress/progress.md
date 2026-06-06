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

渐变色进度条和成功分段。

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

<script setup lang="ts">
import ProgressBasic from './ProgressBasic.vue'
import ProgressBasicSource from './ProgressBasic.vue?raw'
import ProgressCircle from './ProgressCircle.vue'
import ProgressCircleSource from './ProgressCircle.vue?raw'
import ProgressDashboard from './ProgressDashboard.vue'
import ProgressDashboardSource from './ProgressDashboard.vue?raw'
import ProgressDynamic from './ProgressDynamic.vue'
import ProgressDynamicSource from './ProgressDynamic.vue?raw'
import ProgressSteps from './ProgressSteps.vue'
import ProgressStepsSource from './ProgressSteps.vue?raw'
import ProgressGradient from './ProgressGradient.vue'
import ProgressGradientSource from './ProgressGradient.vue?raw'
import ProgressCustom from './ProgressCustom.vue'
import ProgressCustomSource from './ProgressCustom.vue?raw'
import ProgressGapPlacement from './ProgressGapPlacement.vue'
import ProgressGapPlacementSource from './ProgressGapPlacement.vue?raw'
import ProgressV6 from './ProgressV6.vue'
import ProgressV6Source from './ProgressV6.vue?raw'
</script>

## API

### Progress Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `'line' \| 'circle' \| 'dashboard'` | `'line'` |
| percent | 百分比 | `number` | `0` |
| status | 状态 | `'success' \| 'exception' \| 'normal' \| 'active'` | - |
| showInfo | 是否显示进度数值或状态图标 | `boolean` | `true` |
| strokeColor | 进度条色彩，支持字符串 / 数组 / 渐变对象 | `string \| string[] \| ProgressGradient` | - |
| railColor | 未完成分段颜色 | `string` | - |
| trailColor | (已废弃) 使用 `railColor` 代替 | `string` | - |
| strokeWidth | 进度条线宽度 | `number` | `8` (line), 自适应 (circle) |
| strokeLinecap | 进度条端点形状 | `'round' \| 'butt' \| 'square'` | `'round'` |
| size | 进度条尺寸 | `'small' \| 'medium' \| 'default' \| number \| [number, number] \| { width?, height? }` | `'medium'` |
| width | (已废弃) circle/dashboard 画布宽度，使用 `size` 代替 | `number` | `120` |
| format | 内容模板函数，可返回 VNode | `(percent?: number, successPercent?: number) => VNode \| string \| number \| null` | - |
| steps | 步骤进度条；对象形式可指定段间距 | `number \| { count: number; gap: number }` | - |
| success | 成功进度条配置 | `{ percent?: number; strokeColor?: string }` | - |
| gapDegree | 圆形进度条缺口角度，dashboard 默认 75 | `number` | `0` (circle), `75` (dashboard) |
| gapPlacement | 仪表盘缺口位置（v6 新 API） | `'top' \| 'bottom' \| 'start' \| 'end'` | `'bottom'` (dashboard) |
| gapPosition | (已废弃) 使用 `gapPlacement` 代替 | `'top' \| 'bottom' \| 'left' \| 'right'` | - |
| percentPosition | 进度文字位置 | `{ align?: 'start' \| 'center' \| 'end'; type?: 'inner' \| 'outer' }` | `{ align: 'end', type: 'outer' }` |
| rounding | 步骤进度条已激活段数舍入函数 | `(step: number) => number` | `Math.round` |
| rootClassName | 根元素类名 | `string` | - |
| classNames | 语义化类名（root/body/rail/track/indicator） | `ProgressClassNames` | - |
| styles | 语义化样式（root/body/rail/track/indicator） | `ProgressStyles` | - |

### ProgressGradient

```ts
type ProgressGradient = {
  direction?: string  // 渐变方向，如 'to right'
  from?: string       // 起始颜色
  to?: string         // 结束颜色
  [key: string]: string | undefined  // 多色渐变，如 '0%': '#108ee9', '100%': '#87d068'
}
```

### 注意事项

- `size` 默认值由 v5 的 `'default'` 改为 v6 的 `'medium'`，二者行为等价；`'default'` 会保留兼容。
- 圆形 `strokeColor` 渐变通过 `<linearGradient>` 实现，支持 `from/to` 与 `0%/50%/100%` 等百分比 stop。
- 圆形 `size <= 20` 时自动添加 `inline-circle` class，并将 indicator 包入 `Tooltip` 显示（小圆形容纳不下文字）。
- `aria-label` 默认为 `"${percent}%"`，可通过 attr 透传覆盖。
- RTL 由 `ConfigProvider direction="rtl"` 触发，渐变方向自动反转、根元素加 `rtl` class。
