# Timeline 时间轴

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需按时间排列时
- 需要有一条时间轴进行视觉上的串联时

## 代码演示


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

## API

### Timeline Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 选项配置 | `TimelineItem[]` | - |
| pending | 指定最后一个幽灵节点是否存在或内容 | `boolean \| string` | `false` |
| pendingDot | 当最后一个幽灵节点存在时，指定其时间图点 | `string \| slot` | - |
| reverse | 节点排序 | `boolean` | `false` |
| mode | 通过设置 mode 可以改变时间轴和内容的相对位置 | `'left' \| 'alternate' \| 'right'` | `'left'` |

### TimelineItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 设置标签 | `string` | - |
| children | 内容 | `string` | - |
| color | 指定圆圈颜色 | `'blue' \| 'red' \| 'green' \| 'gray' \| string` | `'blue'` |
| dot | 自定义时间轴点 | `string \| slot` | - |
| position | 自定义节点位置 | `'left' \| 'right'` | - |
