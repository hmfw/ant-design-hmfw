# Descriptions 描述列表

成组展示多个只读字段。

## 何时使用

- 常见于详情页的信息展示

## 代码演示

### 基础用法

简单的展示。

<DemoBlock title="基础用法" :source="DescriptionsBasicSource">
  <DescriptionsBasic />
</DemoBlock>

### 带边框

带边框和背景颜色列表。

<DemoBlock title="带边框" :source="DescriptionsBorderedSource">
  <DescriptionsBordered />
</DemoBlock>

### 垂直布局

垂直的列表。

<DemoBlock title="垂直布局" :source="DescriptionsVerticalSource">
  <DescriptionsVertical />
</DemoBlock>

### 响应式列数

支持响应式的列数配置。

<DemoBlock title="响应式列数" :source="DescriptionsResponsiveSource">
  <DescriptionsResponsive />
</DemoBlock>

### 不同尺寸

支持 default、middle、small 三种尺寸。

<DemoBlock title="不同尺寸" :source="DescriptionsSizesSource">
  <DescriptionsSizes />
</DemoBlock>

### Span 填充

使用 `span="filled"` 填充剩余列。

<DemoBlock title="Span 填充" :source="DescriptionsFilledSource">
  <DescriptionsFilled />
</DemoBlock>

## API

### Descriptions Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 描述列表的标题 | `string \| VNode` | - |
| extra | 描述列表的操作区域 | `string \| VNode \| slot` | - |
| bordered | 是否展示边框 | `boolean` | `false` |
| column | 一行的 DescriptionItems 数量,可以是响应式对象 | `number \| Record<Breakpoint, number>` | `3` |
| size | 设置列表的大小 | `'default' \| 'middle' \| 'small' \| 'medium'` | `'default'` |
| layout | 描述布局 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| colon | 配置 Descriptions.Item 的 colon 的默认值 | `boolean` | `true` |
| items | 描述列表的数据项 | `DescriptionsItem[]` | - |
| labelStyle | 自定义标签样式(全局) | `CSSProperties` | - |
| contentStyle | 自定义内容样式(全局) | `CSSProperties` | - |

### DescriptionsItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 内容的描述 | `string` | - |
| children | 内容 | `any` | - |
| span | 包含列的数量,可以是响应式对象或 'filled' | `number \| 'filled' \| Record<Breakpoint, number>` | `1` |
| labelStyle | 自定义标签样式 | `CSSProperties` | - |
| contentStyle | 自定义内容样式 | `CSSProperties` | - |

### Breakpoint

```ts
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
```

响应式断点:
- xs: `>= 0px`
- sm: `>= 576px`
- md: `>= 768px`
- lg: `>= 992px`
- xl: `>= 1200px`
- xxl: `>= 1600px`

