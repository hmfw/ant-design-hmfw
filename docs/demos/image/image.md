# Image 图片

可预览的图片。

## 何时使用

- 需要展示图片，并支持点击预览、缩放、旋转时
- 多张图片需要组合预览（上一张/下一张）时

## 代码演示

### 基础用法

单张图片预览，支持 fallback 回退图片。

<DemoBlock title="基础用法" :source="ImageBasicSource">
  <ImageBasic />
</DemoBlock>

### 图片组预览

多张图片共享一个预览弹层，支持切换。

<DemoBlock title="图片组预览" :source="ImagePreviewGroupSource">
  <ImagePreviewGroup />
</DemoBlock>

## API

### Image Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | `string` | - |
| alt | 图片描述 | `string` | - |
| width | 宽度 | `number \| string` | - |
| height | 高度 | `number \| string` | - |
| preview | 是否开启预览 | `boolean` | `true` |
| fallback | 加载失败时的替代图片地址 | `string` | - |
| placeholder | 是否显示加载占位 | `boolean` | `false` |

### PreviewGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| preview | 是否开启预览 | `boolean` | `true` |

### 预览操作

| 操作 | 说明 |
| --- | --- |
| ＋ | 放大 |
| － | 缩小 |
| ↻ | 顺时针旋转 |
| ⊙ | 重置 |
| ✕ | 关闭 |
