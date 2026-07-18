# Watermark 水印

给页面的某个区域加上水印。

## 何时使用

- 页面需要添加水印标识版权时使用
- 适用于防止信息盗用

## 代码演示

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

### 图片水印

使用 image 设置图片水印。当图片加载失败时，会回退到 content 文字水印。

<DemoBlock title="图片水印" :source="WatermarkImageSource">
  <WatermarkImage />
</DemoBlock>

### 偏移量

通过 offset 设置水印的偏移量。

<DemoBlock title="偏移量" :source="WatermarkOffsetSource">
  <WatermarkOffset />
</DemoBlock>

### Modal 与 Drawer

通过 inherit 属性控制水印是否传导到弹出组件（如 Modal、Drawer）。

<DemoBlock title="Modal 与 Drawer" :source="WatermarkPortalSource">
  <WatermarkPortal />
</DemoBlock>

### 层级控制

通过 zIndex 设置水印元素的 z-index，控制与其他定位元素的层叠关系。

<DemoBlock title="层级控制" :source="WatermarkZIndexSource">
  <WatermarkZIndex />
</DemoBlock>

## API

### Watermark Props

| 参数     | 说明                                                             | 类型                 | 默认值                 |
| -------- | ---------------------------------------------------------------- | -------------------- | ---------------------- |
| content  | 水印文字内容                                                     | `string \| string[]` | -                      |
| font     | 文字样式                                                         | `WatermarkFont`      | -                      |
| rotate   | 水印绘制时，旋转的角度，单位 `°`                                 | `number`             | `-22`                  |
| gap      | 水印之间的间距                                                   | `[number, number]`   | `[100, 100]`           |
| offset   | 水印距离容器左上角的偏移量，默认为 `gap/2`                       | `[number, number]`   | `[gap[0]/2, gap[1]/2]` |
| zIndex   | 追加的水印元素的 z-index                                         | `number`             | `999`                  |
| image    | 图片源，建议使用 2x 或 3x 图，优先级高于文字（支持 base64 格式） | `string`             | -                      |
| width    | 水印的宽度，`content` 的默认值为自身的宽度                       | `number`             | `120`                  |
| height   | 水印的高度，`content` 的默认值为自身的高度                       | `number`             | `64`                   |
| inherit  | 是否将水印传导给弹出组件如 Modal、Drawer                         | `boolean`            | `true`                 |
| onRemove | 水印节点被外部移除后重建时触发                                   | `() => void`         | -                      |

### WatermarkFont

| 参数       | 说明         | 类型                                                    | 默认值                |
| ---------- | ------------ | ------------------------------------------------------- | --------------------- |
| color      | 字体颜色     | `string`                                                | `rgba(0, 0, 0, 0.15)` |
| fontSize   | 字体大小     | `number \| string`                                      | `16`                  |
| fontWeight | 字体粗细     | `'normal' \| 'lighter' \| 'bold' \| 'bolder' \| number` | `'normal'`            |
| fontStyle  | 字体样式     | `'none' \| 'normal' \| 'italic' \| 'oblique'`           | `'normal'`            |
| fontFamily | 字体类型     | `string`                                                | `'sans-serif'`        |
| textAlign  | 文本对齐方向 | `CanvasTextAlign`                                       | `'center'`            |

### Watermark Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 被水印覆盖的内容 |

## 设计 Token

Watermark 组件的水印样式通过 Canvas 动态生成，不依赖 CSS 设计 Token。

组件容器仅使用固定的结构样式（`position: relative`、`overflow: hidden`），无可定制的设计变量。

水印外观通过以下 props 控制：

- `font` - 文字样式（颜色、字号、字重等）
- `rotate` - 旋转角度
- `gap` - 水印之间的间距
- `offset` - 水印距离容器左上角的偏移量
- `image` - 图片源（优先级高于文字）
- `width`/`height` - 水印尺寸
