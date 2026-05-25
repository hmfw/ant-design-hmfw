# Watermark 水印

给页面的某个区域加上水印。

## 何时使用

- 页面需要添加水印标识版权时使用

## 代码演示

<script setup>
import WatermarkBasic from '../demos/watermark/WatermarkBasic.vue'
import WatermarkBasicSource from '../demos/watermark/WatermarkBasic.vue?raw'
import WatermarkMultiline from '../demos/watermark/WatermarkMultiline.vue'
import WatermarkMultilineSource from '../demos/watermark/WatermarkMultiline.vue?raw'
import WatermarkCustomStyle from '../demos/watermark/WatermarkCustomStyle.vue'
import WatermarkCustomStyleSource from '../demos/watermark/WatermarkCustomStyle.vue?raw'
</script>

### 文字水印

使用 content 设置文字水印。

<DemoBlock title="文字水印" :source="WatermarkBasicSource">
  <WatermarkBasic />
</DemoBlock>

### 多行水印

使用 content 数组设置多行文字水印。

<DemoBlock title="多行水印" :source="WatermarkMultilineSource">
  <WatermarkMultiline />
</DemoBlock>

### 自定义样式

自定义水印字体样式。

<DemoBlock title="自定义样式" :source="WatermarkCustomStyleSource">
  <WatermarkCustomStyle />
</DemoBlock>

## API

### Watermark Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 水印文字内容 | `string \| string[]` | - |
| font | 文字样式 | `{ color?: string, fontSize?: number, fontWeight?: string \| number, fontFamily?: string }` | - |
| rotate | 水印绘制时，旋转的角度 | `number` | `-22` |
| gap | 水印之间的间距 | `[number, number]` | `[100, 100]` |
| offset | 水印距离容器左上角的偏移量 | `[number, number]` | - |
| zIndex | 追加的水印元素的 z-index | `number` | `9` |
| image | 图片源，建议使用 2x 或 3x 图，优先级高于文字 | `string` | - |
| width | 水印的宽度 | `number` | `120` |
| height | 水印的高度 | `number` | `64` |

### Watermark Slots

| 名称 | 说明 |
| --- | --- |
| default | 被水印覆盖的内容 |
