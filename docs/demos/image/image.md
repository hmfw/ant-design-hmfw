# Image 图片

可预览的图片。

## 何时使用

- 需要展示图片时
- 加载大图时显示 loading 占位或加载失败容错处理
- 需要预览图片，支持缩放、旋转、翻转等操作时
- 多张图片需要组合预览（上一张/下一张）时

## 代码演示

### 基础用法

单张图片预览，支持 fallback 回退图片。第二张禁用预览，第三张加载失败时显示 fallback。

<DemoBlock title="基础用法" :source="ImageBasicSource">
  <ImageBasic />
</DemoBlock>

### 图片组预览

多张图片共享一个预览弹层，支持键盘左右键切换、Esc 关闭。

<DemoBlock title="图片组预览" :source="ImagePreviewGroupSource">
  <ImagePreviewGroup />
</DemoBlock>

### 渐进式加载

大图加载时显示占位骨架，提升用户体验。

<DemoBlock title="渐进式加载" :source="ImagePlaceholderSource">
  <ImagePlaceholder />
</DemoBlock>

### 自定义预览

自定义预览图地址、缩放范围、关闭图标等。

<DemoBlock title="自定义预览" :source="ImageCustomPreviewSource">
  <ImageCustomPreview />
</DemoBlock>

### 自定义工具栏与预览内容

通过 `toolbarRender` 自定义底部工具栏，`imageRender` 自定义预览内容容器。两者的 `info` 都会回传 `transform`、`current`、`total`、`image` 等信息。

<DemoBlock title="自定义工具栏与预览内容" :source="ImageToolbarRenderSource">
  <ImageToolbarRender />
</DemoBlock>

## API

### Image Props

| 参数          | 说明                                          | 类型                                | 默认值  |
| ------------- | --------------------------------------------- | ----------------------------------- | ------- |
| src           | 图片地址                                      | `string`                            | -       |
| alt           | 图片描述                                      | `string`                            | -       |
| width         | 宽度                                          | `number \| string`                  | -       |
| height        | 高度                                          | `number \| string`                  | -       |
| preview       | 预览配置，`false` 时禁用                      | `boolean \| PreviewConfig`          | `true`  |
| fallback      | 加载失败时的替代图片地址                      | `string`                            | -       |
| placeholder   | 加载占位：`true` 显示骨架动画，或自定义 VNode | `boolean \| VNode \| (() => VNode)` | `false` |
| rootClassName | 根节点 class                                  | `string`                            | -       |
| onError       | 加载失败回调                                  | `(e: Event) => void`                | -       |

### PreviewConfig

| 参数              | 说明                                               | 类型                                                                    | 默认值              |
| ----------------- | -------------------------------------------------- | ----------------------------------------------------------------------- | ------------------- |
| open              | 受控：是否打开预览                                 | `boolean`                                                               | -                   |
| onOpenChange      | 预览开关变化回调                                   | `(open: boolean) => void`                                               | -                   |
| src               | 自定义预览图片地址（与 thumb 不同）                | `string`                                                                | -                   |
| closeIcon         | 自定义关闭图标，`false` 隐藏                       | `VNode \| (() => VNode) \| false`                                       | `<CloseOutlined />` |
| cover             | 自定义 hover 遮罩内容                              | `VNode \| (() => VNode)`                                                | -                   |
| mask              | 遮罩配置：`false` 隐藏遮罩，对象形式可配置可点击性 | `boolean \| MaskType`                                                   | `true`              |
| scaleStep         | 缩放每步倍率（1 + scaleStep）                      | `number`                                                                | `0.5`               |
| minScale          | 最小缩放                                           | `number`                                                                | `1`                 |
| maxScale          | 最大缩放                                           | `number`                                                                | `50`                |
| movable           | 是否可拖拽移动                                     | `boolean`                                                               | `true`              |
| getContainer      | 预览挂载容器；`false` 时原地渲染                   | `string \| HTMLElement \| (() => HTMLElement) \| false`                 | `document.body`     |
| zIndex            | 预览根节点 z-index                                 | `number`                                                                | `1080`              |
| onTransform       | 预览 transform 变化回调                            | `(info: { transform: TransformType; action: TransformAction }) => void` | -                   |
| imageRender       | 自定义预览内容渲染                                 | `(originalNode: VNode, info: ImageRenderInfoType) => VNode`             | -                   |
| toolbarRender     | 自定义底部工具栏渲染（参考 AntD v6）               | `(originalNode: VNode, info: ToolbarRenderInfoType) => VNode`           | -                   |
| ~~actionsRender~~ | 已废弃，请使用 `toolbarRender`                     | `(originalNode: VNode, info: ToolbarRenderInfoType) => VNode`           | -                   |

### ImageRenderInfoType / ToolbarRenderInfoType

```typescript
interface ImageRenderInfoType {
  transform: TransformType
  current?: number // 当前索引（PreviewGroup）
  total?: number // 图片总数（PreviewGroup）
  image: ImgInfo // 当前预览图片信息
}

interface ToolbarRenderInfoType {
  transform: TransformType
  current?: number
  total?: number
  image: ImgInfo
  actions: {
    onFlipY: () => void
    onFlipX: () => void
    onRotateLeft: () => void
    onRotateRight: () => void
    onZoomOut: () => void
    onZoomIn: () => void
    onReset: () => void
    onClose: () => void
    onActive?: (offset: number) => void // -1 上一张 / 1 下一张
  }
}
```

### MaskType

| 参数     | 说明                         | 类型      | 默认值 |
| -------- | ---------------------------- | --------- | ------ |
| enabled  | 是否启用遮罩（hover 提示层） | `boolean` | `true` |
| closable | 点击遮罩是否可关闭预览       | `boolean` | `true` |

### PreviewGroup Props

| 参数     | 说明                       | 类型                                             | 默认值 |
| -------- | -------------------------- | ------------------------------------------------ | ------ |
| preview  | 预览配置，`false` 时禁用   | `boolean \| PreviewConfig`                       | `true` |
| items    | 预览图片项（无子组件时用） | `(string \| ImgInfo)[]`                          | -      |
| current  | 受控：当前预览索引         | `number`                                         | -      |
| onChange | 切换预览图片回调           | `(current: number, prevCurrent: number) => void` | -      |

### TransformType

```typescript
interface TransformType {
  x: number // 平移 X
  y: number // 平移 Y
  rotate: number // 旋转角度
  scale: number // 缩放倍数
  flipX: boolean // 水平翻转
  flipY: boolean // 垂直翻转
}
```

### TransformAction

```typescript
type TransformAction =
  | 'flipY'
  | 'flipX'
  | 'rotateLeft'
  | 'rotateRight'
  | 'zoomIn'
  | 'zoomOut'
  | 'reset'
  | 'close'
  | 'prev'
  | 'next'
  | 'wheel'
  | 'doubleClick'
  | 'move'
```

### ImgInfo

```typescript
interface ImgInfo {
  url: string
  alt?: string
  width?: number | string
  height?: number | string
}
```

### 预览操作

| 操作          | 说明                     | 快捷键 |
| ------------- | ------------------------ | ------ |
| 左右翻转      | 水平翻转图片             | -      |
| 上下翻转      | 垂直翻转图片             | -      |
| 向左/右旋转   | 旋转 90°                 | -      |
| 放大/缩小     | 缩放图片                 | 滚轮   |
| 上一张/下一张 | 切换图片（PreviewGroup） | ← / →  |
| 关闭          | 关闭预览                 | Esc    |
| 重置          | 双击图片重置/放大        | -      |
| 拖拽移动      | 按住图片拖动             | -      |

<script setup lang="ts">
import ImageBasic from './ImageBasic.vue'
import ImagePreviewGroup from './ImagePreviewGroup.vue'
import ImagePlaceholder from './ImagePlaceholder.vue'
import ImageCustomPreview from './ImageCustomPreview.vue'
import ImageToolbarRender from './ImageToolbarRender.vue'

import ImageBasicSource from './ImageBasic.vue?raw'
import ImagePreviewGroupSource from './ImagePreviewGroup.vue?raw'
import ImagePlaceholderSource from './ImagePlaceholder.vue?raw'
import ImageCustomPreviewSource from './ImageCustomPreview.vue?raw'
import ImageToolbarRenderSource from './ImageToolbarRender.vue?raw'
</script>
