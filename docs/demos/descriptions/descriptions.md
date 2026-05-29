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

## API

### Descriptions Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 描述列表的标题 | `string` | - |
| extra | 描述列表的操作区域 | `string \| slot` | - |
| bordered | 是否展示边框 | `boolean` | `false` |
| column | 一行的 DescriptionItems 数量 | `number` | `3` |
| size | 设置列表的大小 | `'default' \| 'middle' \| 'small'` | `'default'` |
| layout | 描述布局 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| items | 描述列表的数据项 | `DescriptionsItem[]` | - |

### DescriptionsItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 内容的描述 | `string` | - |
| children | 内容 | `string` | - |
| span | 包含列的数量 | `number` | `1` |
| labelStyle | 自定义标签样式 | `CSSProperties` | - |
| contentStyle | 自定义内容样式 | `CSSProperties` | - |
