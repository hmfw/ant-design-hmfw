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

## API

### Progress Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `'line' \| 'circle' \| 'dashboard'` | `'line'` |
| percent | 百分比 | `number` | `0` |
| status | 状态 | `'success' \| 'exception' \| 'normal' \| 'active'` | - |
| showInfo | 是否显示进度数值或状态图标 | `boolean` | `true` |
| strokeColor | 进度条的色彩 | `string \| object` | - |
| trailColor | 未完成的分段的颜色 | `string` | - |
| strokeWidth | 进度条线的宽度 | `number` | `6` |
| size | 进度条的尺寸 | `'default' \| 'small'` | `'default'` |
| format | 内容的模板函数 | `(percent: number) => string` | - |
| steps | 进度条总共步数 | `number` | - |
