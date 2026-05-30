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
</script>

## API

### Progress Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `'line' \| 'circle' \| 'dashboard'` | `'line'` |
| percent | 百分比 | `number` | `0` |
| status | 状态 | `'success' \| 'exception' \| 'normal' \| 'active'` | - |
| showInfo | 是否显示进度数值或状态图标 | `boolean` | `true` |
| strokeColor | 进度条的色彩，支持渐变 | `string \| ProgressGradient` | - |
| railColor | 未完成的分段的颜色 | `string` | - |
| trailColor | (已废弃) 使用 railColor 代替 | `string` | - |
| strokeWidth | 进度条线的宽度 | `number` | `6` (line), `6` (circle) |
| strokeLinecap | 进度条端点形状 | `'round' \| 'butt' \| 'square'` | `'round'` |
| size | 进度条的尺寸 | `'default' \| 'small' \| number \| { width?: number; height?: number }` | `'default'` |
| width | (已废弃) circle/dashboard 的画布宽度 | `number` | `120` |
| format | 内容的模板函数 | `(percent: number, successPercent?: number) => string` | - |
| steps | 进度条总共步数 | `number` | - |
| success | 成功进度条相关配置 | `{ percent?: number; strokeColor?: string }` | - |
| gapDegree | 圆形进度条缺口角度，dashboard 默认 75 | `number` | `0` (circle), `75` (dashboard) |
| percentPosition | 进度文字位置 | `{ align?: 'start' \| 'center' \| 'end'; type?: 'inner' \| 'outer' }` | `{ align: 'end', type: 'outer' }` |

### ProgressGradient

```ts
type ProgressGradient = {
  direction?: string  // 渐变方向，如 'to right'
  from?: string       // 起始颜色
  to?: string         // 结束颜色
  [key: string]: string | undefined  // 多色渐变，如 '0%': '#108ee9', '100%': '#87d068'
}
```
