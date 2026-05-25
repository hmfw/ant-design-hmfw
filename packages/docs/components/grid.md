# Grid 栅格

24 栅格系统。

<script setup>
import GridBasic from '../demos/grid/GridBasic.vue'
import GridBasicSource from '../demos/grid/GridBasic.vue?raw'
import GridGutter from '../demos/grid/GridGutter.vue'
import GridGutterSource from '../demos/grid/GridGutter.vue?raw'
import GridOffset from '../demos/grid/GridOffset.vue'
import GridOffsetSource from '../demos/grid/GridOffset.vue?raw'
import GridResponsive from '../demos/grid/GridResponsive.vue'
import GridResponsiveSource from '../demos/grid/GridResponsive.vue?raw'
</script>

## 何时使用

- 需要对页面进行栅格化布局时
- 需要响应式布局时
- 需要等分或按比例分配空间时

## 代码演示

### 基础栅格

使用 `span` 属性设置列宽，总宽度为 24。

<DemoBlock title="基础栅格" :source="GridBasicSource">
  <GridBasic />
</DemoBlock>

### 区块间隔

通过 `gutter` 属性设置列间距，支持水平和垂直间距。

<DemoBlock title="区块间隔" :source="GridGutterSource">
  <GridGutter />
</DemoBlock>

### 偏移

通过 `offset` 属性设置列偏移量。

<DemoBlock title="偏移" :source="GridOffsetSource">
  <GridOffset />
</DemoBlock>

### 响应式布局

通过 `xs`、`sm`、`md`、`lg`、`xl`、`xxl` 属性设置不同断点下的列宽。

<DemoBlock title="响应式布局" :source="GridResponsiveSource">
  <GridResponsive />
</DemoBlock>

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间距，支持 `[水平, 垂直]` | `number \| [number, number]` | `0` |
| justify | 水平排列方式 | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between'` | `'start'` |
| align | 垂直对齐方式 | `'top' \| 'middle' \| 'bottom'` | `'top'` |
| wrap | 是否自动换行 | `boolean` | `true` |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格占位格数，0 时隐藏 | `number` | - |
| offset | 栅格左侧的间隔格数 | `number` | `0` |
| push | 栅格向右移动格数 | `number` | `0` |
| pull | 栅格向左移动格数 | `number` | `0` |
| xs | `<576px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| sm | `≥576px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| md | `≥768px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| lg | `≥992px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| xl | `≥1200px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| xxl | `≥1600px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
