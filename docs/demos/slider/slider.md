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

## API

### Slider Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 设置当前取值。当 `range` 为 false 时，使用 number，否则用 [number, number] | `number \| [number, number]` | - |
| defaultValue | 设置初始取值 | `number \| [number, number]` | `0` |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分 | `number \| null` | `1` |
| disabled | 值为 true 时，滑块为禁用状态 | `boolean` | `false` |
| vertical | 值为 true 时，Slider 为垂直方向 | `boolean` | `false` |
| reverse | 反向坐标轴 | `boolean` | `false` |
| range | 双滑块模式 | `boolean` | `false` |
| marks | 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | `Record<number, string \| { label: string; style?: CSSProperties }>` | - |
| included | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | `boolean` | `true` |
| dots | 是否只能拖拽到刻度上 | `boolean` | `false` |
| keyboard | 支持使用键盘操作 handle | `boolean` | `true` |
| tooltip | Tooltip 相关配置 | `{ open?: boolean; formatter?: (value: number) => string \| null }` | - |

### Slider Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入 | `(value: number \| [number, number]) => void` |
| change | 当 Slider 的值发生改变时触发 | `(value: number \| [number, number]) => void` |
| afterChange | 与 mouseup 触发时机一致，把当前值作为参数传入 | `(value: number \| [number, number]) => void` |

## 键盘操作

- `←` / `↓`: 减小步长
- `→` / `↑`: 增加步长
- `Home`: 跳转到最小值
- `End`: 跳转到最大值

