# Space 间距

设置组件之间的间距。


## 何时使用

- 避免组件紧贴在一起，拉开统一的空间
- 适合行内元素的水平间距
- 可以设置各种水平对齐方式

## 代码演示

### 基础用法

相邻组件水平间距。

<DemoBlock title="基础用法" :source="SpaceBasicSource">
  <SpaceBasic />
</DemoBlock>

### 垂直间距

通过 `direction` 属性设置垂直方向间距。

<DemoBlock title="垂直间距" :source="SpaceVerticalSource">
  <SpaceVertical />
</DemoBlock>

### 自定义大小

通过 `size` 属性设置间距大小，支持预设值和数字。

<DemoBlock title="自定义大小" :source="SpaceSizeSource">
  <SpaceSize />
</DemoBlock>

### 分隔符

通过 `split` 插槽设置分隔符。

<DemoBlock title="分隔符" :source="SpaceSplitSource">
  <SpaceSplit />
</DemoBlock>

## API

### Space Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 间距大小，数组形式表示 `[水平, 垂直]` | `'small' \| 'middle' \| 'large' \| number \| [number, number]` | `'small'` |
| direction | 间距方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| align | 对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline'` | - |
| wrap | 是否自动换行，仅水平方向有效 | `boolean` | `false` |

### Space Slots

| 名称 | 说明 |
| --- | --- |
| default | 子元素内容 |
| split | 设置拆分 |
