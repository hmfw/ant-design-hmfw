# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割
- 对行内文字/链接进行分割，例如表格的操作列

## 代码演示

### 水平分割线

默认为水平分割线，可在中间加入文字。

<DemoBlock title="水平分割线" :source="DividerBasicSource">
  <DividerBasic />
</DemoBlock>

### 带文字的分割线

通过 `orientation` 属性设置文字位置。

<DemoBlock title="带文字的分割线" :source="DividerWithTextSource">
  <DividerWithText />
</DemoBlock>

### 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

<DemoBlock title="垂直分割线" :source="DividerVerticalSource">
  <DividerVertical />
</DemoBlock>

### 分割线样式

通过 `variant` 设置分割线为实线、虚线或点线。`dashed` 为 `variant="dashed"` 的简写。

<DemoBlock title="分割线样式" :source="DividerVariantSource">
  <DividerVariant />
</DemoBlock>

### 不同间距

通过 `size` 设置水平分割线的上下间距，可选 `small`、`middle`、`large`（默认）。

<DemoBlock title="不同间距" :source="DividerSizeSource">
  <DividerSize />
</DemoBlock>

## API

### Divider Props

| 参数              | 说明                                                                                          | 类型                              | 默认值         |
| ----------------- | --------------------------------------------------------------------------------------------- | --------------------------------- | -------------- |
| type              | 水平还是垂直类型                                                                              | `'horizontal' \| 'vertical'`      | `'horizontal'` |
| orientation       | 分割线标题的位置                                                                              | `'left' \| 'center' \| 'right'`   | `'center'`     |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除分割线，同时 `orientation` 必须为 `left` 或 `right` | `string \| number`                | -              |
| dashed            | 是否虚线，等价于 `variant="dashed"`                                                           | `boolean`                         | `false`        |
| variant           | 分割线样式，优先级高于 `dashed`                                                               | `'solid' \| 'dashed' \| 'dotted'` | `'solid'`      |
| plain             | 文字是否显示为普通正文样式                                                                    | `boolean`                         | `false`        |
| size              | 分割线间距大小（仅水平分割线生效）                                                            | `'small' \| 'middle' \| 'large'`  | `'large'`      |

### Divider Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 嵌入分割线中的内容 |
