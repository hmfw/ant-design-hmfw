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

### 布局模式

通过 `mode` 控制节点位置：`start`（默认左侧）、`end`（右侧）、`alternate`（交替）。

<DemoBlock title="布局模式" :source="TimelineModeSource">
  <TimelineMode />
</DemoBlock>

### 组件式用法

除 `items` 数组外，也可使用 `Timeline.Item` 子组件形式声明节点。

<DemoBlock title="组件式用法" :source="TimelineSlotSource">
  <TimelineSlot />
</DemoBlock>

### 自定义颜色

可以设置为 red、green、blue、gray，或者自定义颜色。

<DemoBlock title="自定义颜色" :source="TimelineCustomColorSource">
  <TimelineCustomColor />
</DemoBlock>

### 自定义图标

通过 `icon` 属性为每个节点设置自定义图标。

<DemoBlock title="自定义图标" :source="TimelineCustomIconSource">
  <TimelineCustomIcon />
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

### 倒序展示

设置 `reverse` 属性倒序排列节点（最新事件在顶部）。

<DemoBlock title="倒序展示" :source="TimelineReverseSource">
  <TimelineReverse />
</DemoBlock>

### 标题宽度

通过 `titleSpan` 自定义标题区域宽度，支持数值（px）与字符串（如百分比）。

<DemoBlock title="标题宽度" :source="TimelineTitleSpanSource">
  <TimelineTitleSpan />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TimelineClassNamesSource">
  <TimelineClassNames />
</DemoBlock>

## API

### Timeline Props

| 参数        | 说明                                                                             | 类型                                                   | 默认值       |
| ----------- | -------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------ |
| items       | 选项配置                                                                         | `TimelineItemProps[]`                                  | -            |
| mode        | 通过设置 mode 可以改变时间轴和内容的相对位置                                     | `'left' \| 'right' \| 'start' \| 'end' \| 'alternate'` | `'left'`     |
| orientation | 设置时间轴的方向                                                                 | `'vertical' \| 'horizontal'`                           | `'vertical'` |
| variant     | 设置样式变体                                                                     | `'outlined' \| 'filled'`                               | `'outlined'` |
| reverse     | 节点排序                                                                         | `boolean`                                              | `false`      |
| titleSpan   | 设置标题占比空间（到 dot 中心点距离）                                            | `number \| string`                                     | -            |
| classNames  | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TimelineClassNames`                                   | -            |
| styles      | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TimelineStyles`                                       | -            |

### TimelineItemProps

| 参数      | 说明           | 类型                                             | 默认值   |
| --------- | -------------- | ------------------------------------------------ | -------- |
| title     | 设置标题       | `string \| VNode`                                | -        |
| content   | 设置内容       | `string \| VNode`                                | -        |
| icon      | 自定义节点图标 | `string \| VNode`                                | -        |
| placement | 自定义节点位置 | `'start' \| 'end'`                               | -        |
| loading   | 设置加载状态   | `boolean`                                        | `false`  |
| color     | 指定圆圈颜色   | `'blue' \| 'red' \| 'green' \| 'gray' \| string` | `'blue'` |
| className | 自定义类名     | `string`                                         | -        |
| style     | 自定义样式     | `CSSProperties`                                  | -        |
| key       | 唯一标识       | `string \| number`                               | -        |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Timeline 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface TimelineClassNames {
  root?: string // 时间轴根容器 ul.hmfw-timeline
  item?: string // 时间轴项 li.hmfw-timeline-item
  itemTitle?: string // 节点标题 div.hmfw-timeline-item-title
  itemRail?: string // 连接线 div.hmfw-timeline-item-rail
  itemIcon?: string // 节点图标/圆点 div.hmfw-timeline-item-icon
  itemContent?: string // 节点内容 div.hmfw-timeline-item-content
}

interface TimelineStyles {
  root?: CSSProperties
  item?: CSSProperties
  itemTitle?: CSSProperties
  itemRail?: CSSProperties
  itemIcon?: CSSProperties
  itemContent?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<ul class="hmfw-timeline">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <li class="hmfw-timeline-item hmfw-timeline-item-placement-start">
    <!-- ↑ classNames.item / styles.item 应用于此 -->
    <div class="hmfw-timeline-item-title">
      <!-- ↑ classNames.itemTitle / styles.itemTitle 应用于此 -->
      标题
    </div>
    <div class="hmfw-timeline-item-rail">
      <!-- ↑ classNames.itemRail / styles.itemRail 应用于此 -->
    </div>
    <div class="hmfw-timeline-item-icon hmfw-timeline-item-color-blue">
      <!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 -->
      节点图标
    </div>
    <div class="hmfw-timeline-item-content">
      <!-- ↑ classNames.itemContent / styles.itemContent 应用于此 -->
      内容
    </div>
  </li>
</ul>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义连接线和节点 -->
  <Timeline
    :items="items"
    :class-names="{
      itemRail: 'custom-tail',
      itemIcon: 'custom-dot',
    }"
  />

  <!-- 自定义标题和内容 -->
  <Timeline
    mode="alternate"
    :items="labeledItems"
    :class-names="{
      itemTitle: 'custom-label',
      itemContent: 'custom-content',
    }"
  />

  <!-- 组合自定义所有子元素 -->
  <Timeline
    :items="items"
    :class-names="{
      root: 'timeline-fancy',
      item: 'timeline-fancy-item',
      itemTitle: 'timeline-fancy-label',
      itemRail: 'timeline-fancy-tail',
      itemIcon: 'timeline-fancy-dot',
      itemContent: 'timeline-fancy-content',
    }"
  />
</template>

<style scoped>
:deep(.custom-tail) {
  border-left-width: 3px;
  border-left-style: dashed;
  border-left-color: #1890ff;
}

:deep(.custom-dot) {
  border-width: 3px;
  transform: scale(1.2);
  box-shadow: 0 0 8px rgba(24, 144, 255, 0.4);
  transition: all 0.3s;
}

:deep(.custom-label) {
  font-weight: 600;
  color: #1890ff;
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  padding: 4px 12px;
  border-radius: 12px;
}

:deep(.custom-content) {
  background-color: #f0f5ff;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid #1890ff;
  transition: all 0.3s;
}

:deep(.timeline-fancy) {
  background: linear-gradient(to right, #f0f5ff, #fff);
  padding: 20px;
  border-radius: 12px;
}

:deep(.timeline-fancy-dot) {
  border: 3px solid #667eea;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制各子元素 -->
  <Timeline
    :items="items"
    :styles="{
      root: { padding: '16px', backgroundColor: '#f0f5ff', borderRadius: '8px' },
      itemIcon: { transform: 'scale(1.2)' },
      itemContent: { fontSize: '15px', fontWeight: 500 },
    }"
  />

  <!-- 自定义连接线样式 -->
  <Timeline
    :items="items"
    :styles="{
      itemRail: { borderLeftWidth: '3px', borderLeftStyle: 'dashed' },
      itemTitle: { fontWeight: 600, color: '#1890ff' },
    }"
  />

  <!-- 水平布局自定义 -->
  <Timeline
    orientation="horizontal"
    :items="items"
    :styles="{
      root: { padding: '24px', backgroundColor: '#f6ffed', borderRadius: '12px' },
      itemIcon: { transform: 'scale(1.3)', boxShadow: '0 0 12px rgba(82, 196, 26, 0.5)' },
      itemContent: { padding: '8px 16px', fontWeight: 500 },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `classNames.item` / `styles.item` 应用于每个时间轴节点，会与 `items[i].className` / `items[i].style` 合并
- `classNames.itemTitle` / `styles.itemTitle` 仅在设置了 `title` 属性的项上生效
- `classNames.itemIcon` / `styles.itemIcon` 会与 `items[i].style` 合并应用到节点圆点上
- `classNames.itemRail` 作用于连接线，可用于自定义线型（虚线、点线）、颜色、粗细
- 水平布局（`orientation="horizontal"`）和垂直布局的 DOM 结构相同，但样式应用效果不同，需分别调试

## 设计 Token

Timeline 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明         | 默认值              |
| ----------------------------- | ------------ | ------------------- |
| `--hmfw-color-bg-container`   | 容器背景色   | `#ffffff`           |
| `--hmfw-color-border`         | 边框色       | `#d9d9d9`           |
| `--hmfw-color-error`          | 错误状态色   | `#ff4d4f`           |
| `--hmfw-color-primary`        | 主题色       | `#1677ff`           |
| `--hmfw-color-success`        | 成功状态色   | `#52c41a`           |
| `--hmfw-color-text`           | 主文本色     | `rgba(0,0,0,0.88)`  |
| `--hmfw-color-text-secondary` | 次级文本色   | `rgba(0,0,0,0.65)`  |
| `--hmfw-font-size-base`       | 标准字号     | `14px`              |
| `--hmfw-timeline-title-span`  | 标题占比空间 | 根据 titleSpan 设置 |
