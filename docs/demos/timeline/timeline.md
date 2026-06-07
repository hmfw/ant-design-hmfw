# Timeline 时间轴

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需按时间排列时
- 需要有一条时间轴进行视觉上的串联时

## 代码演示

<script setup>
import TimelineBasic from './TimelineBasic.vue'
import TimelineBasicSource from './TimelineBasic.vue?raw'
import TimelineAlternate from './TimelineAlternate.vue'
import TimelineAlternateSource from './TimelineAlternate.vue?raw'
import TimelineCustomColor from './TimelineCustomColor.vue'
import TimelineCustomColorSource from './TimelineCustomColor.vue?raw'
import TimelinePending from './TimelinePending.vue'
import TimelinePendingSource from './TimelinePending.vue?raw'
import TimelineLoading from './TimelineLoading.vue'
import TimelineLoadingSource from './TimelineLoading.vue?raw'
import TimelineVariant from './TimelineVariant.vue'
import TimelineVariantSource from './TimelineVariant.vue?raw'
import TimelineHorizontal from './TimelineHorizontal.vue'
import TimelineHorizontalSource from './TimelineHorizontal.vue?raw'
</script>

### 基础用法

基本的时间轴。

<DemoBlock title="基础用法" :source="TimelineBasicSource">
  <TimelineBasic />
</DemoBlock>

### 交替展示

内容在时间轴两侧交替出现。

<DemoBlock title="交替展示" :source="TimelineAlternateSource">
  <TimelineAlternate />
</DemoBlock>

### 自定义颜色

可以设置为 red、green、blue、gray，或者自定义颜色。

<DemoBlock title="自定义颜色" :source="TimelineCustomColorSource">
  <TimelineCustomColor />
</DemoBlock>

### 等待中

当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点。

<DemoBlock title="等待中" :source="TimelinePendingSource">
  <TimelinePending />
</DemoBlock>

### 加载状态

设置 `loading` 属性显示加载中的图标。

<DemoBlock title="加载状态" :source="TimelineLoadingSource">
  <TimelineLoading />
</DemoBlock>

### 变体样式

可以设置为 `outlined`（默认）或 `filled` 样式。

<DemoBlock title="变体样式" :source="TimelineVariantSource">
  <TimelineVariant />
</DemoBlock>

### 水平布局

时间轴可以水平展示。

<DemoBlock title="水平布局" :source="TimelineHorizontalSource">
  <TimelineHorizontal />
</DemoBlock>

## API

### Timeline Props

| 参数        | 说明                                                                      | 类型                                                   | 默认值       |
| ----------- | ------------------------------------------------------------------------- | ------------------------------------------------------ | ------------ |
| items       | 选项配置                                                                  | `TimelineItemProps[]`                                  | -            |
| mode        | 通过设置 mode 可以改变时间轴和内容的相对位置                              | `'left' \| 'right' \| 'start' \| 'end' \| 'alternate'` | `'left'`     |
| orientation | 设置时间轴的方向                                                          | `'vertical' \| 'horizontal'`                           | `'vertical'` |
| variant     | 设置样式变体                                                              | `'outlined' \| 'filled'`                               | `'outlined'` |
| reverse     | 节点排序                                                                  | `boolean`                                              | `false`      |
| titleSpan   | 设置标题占比空间（到 dot 中心点距离）                                     | `number \| string`                                     | -            |
| pending     | 指定最后一个幽灵节点是否存在或内容（已废弃，建议使用 items 中的 loading） | `boolean \| string \| VNode`                           | -            |
| pendingDot  | 当最后一个幽灵节点存在时，指定其时间图点（已废弃）                        | `string \| VNode`                                      | -            |

### TimelineItemProps

| 参数      | 说明                                     | 类型                                             | 默认值   |
| --------- | ---------------------------------------- | ------------------------------------------------ | -------- |
| title     | 设置标题                                 | `string \| VNode`                                | -        |
| content   | 设置内容                                 | `string \| VNode`                                | -        |
| icon      | 自定义节点图标                           | `string \| VNode`                                | -        |
| placement | 自定义节点位置                           | `'start' \| 'end'`                               | -        |
| loading   | 设置加载状态                             | `boolean`                                        | `false`  |
| color     | 指定圆圈颜色                             | `'blue' \| 'red' \| 'green' \| 'gray' \| string` | `'blue'` |
| className | 自定义类名                               | `string`                                         | -        |
| style     | 自定义样式                               | `CSSProperties`                                  | -        |
| key       | 唯一标识                                 | `string \| number`                               | -        |
| label     | 设置标签（已废弃，使用 title）           | `string \| VNode`                                | -        |
| children  | 内容（已废弃，使用 content）             | `unknown`                                        | -        |
| dot       | 自定义时间轴点（已废弃，使用 icon）      | `string \| VNode`                                | -        |
| position  | 自定义节点位置（已废弃，使用 placement） | `'left' \| 'right'`                              | -        |
