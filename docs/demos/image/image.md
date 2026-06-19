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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="ImageClassNamesSource">
  <ImageClassNames />
</DemoBlock>

## API

### Image Props

| 参数          | 说明                                                                             | 类型                                | 默认值  |
| ------------- | -------------------------------------------------------------------------------- | ----------------------------------- | ------- |
| src           | 图片地址                                                                         | `string`                            | -       |
| alt           | 图片描述                                                                         | `string`                            | -       |
| width         | 宽度                                                                             | `number \| string`                  | -       |
| height        | 高度                                                                             | `number \| string`                  | -       |
| preview       | 预览配置，`false` 时禁用                                                         | `boolean \| PreviewConfig`          | `true`  |
| fallback      | 加载失败时的替代图片地址                                                         | `string`                            | -       |
| placeholder   | 加载占位：`true` 显示骨架动画，或自定义 VNode                                    | `boolean \| VNode \| (() => VNode)` | `false` |
| rootClassName | 根节点 class                                                                     | `string`                            | -       |
| classNames    | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ImageClassNames`                   | -       |
| styles        | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ImageStyles`                       | -       |
| onError       | 加载失败回调                                                                     | `(e: Event) => void`                | -       |

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

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface ImageClassNames {
  root?: string // 图片根容器
  img?: string // img 元素
  mask?: string // hover 遮罩层
  maskInfo?: string // 遮罩内容（预览文本）
  preview?: string // 预览弹层根容器
  previewMask?: string // 预览遮罩层
  previewWrap?: string // 预览图片包裹容器
  previewImg?: string // 预览图片元素
  operations?: string // 预览操作栏
  operationBtn?: string // 预览操作按钮
  closeBtn?: string // 预览关闭按钮
  switchBtn?: string // 预览切换按钮（左右箭头）
  count?: string // 预览图片计数
  placeholder?: string // 加载占位容器
  error?: string // 错误占位容器
}

interface ImageStyles {
  root?: CSSProperties
  img?: CSSProperties
  mask?: CSSProperties
  maskInfo?: CSSProperties
  preview?: CSSProperties
  previewMask?: CSSProperties
  previewWrap?: CSSProperties
  previewImg?: CSSProperties
  operations?: CSSProperties
  operationBtn?: CSSProperties
  closeBtn?: CSSProperties
  switchBtn?: CSSProperties
  count?: CSSProperties
  placeholder?: CSSProperties
  error?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 图片主体 -->
<div class="hmfw-image">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <img class="hmfw-image-img" />
  <!-- ↑ classNames.img / styles.img 应用于此 -->

  <!-- hover 遮罩（preview !== false 时） -->
  <div class="hmfw-image-mask">
    <!-- ↑ classNames.mask / styles.mask 应用于此 -->
    <div class="hmfw-image-mask-info">
      <!-- ↑ classNames.maskInfo / styles.maskInfo 应用于此 -->
      预览
    </div>
  </div>
</div>

<!-- 加载占位状态 -->
<div class="hmfw-image hmfw-image-placeholder">
  <!-- ↑ classNames.root 应用于此 -->
  <div class="hmfw-image-placeholder-content">
    <!-- ↑ classNames.placeholder / styles.placeholder 应用于此 -->
    骨架动画或自定义内容
  </div>
</div>

<!-- 错误状态 -->
<div class="hmfw-image hmfw-image-error">
  <!-- ↑ classNames.root 应用于此 -->
  <div class="hmfw-image-error-content">
    <!-- ↑ classNames.error / styles.error 应用于此 -->
    <span class="hmfw-image-error-icon">图标</span>
  </div>
</div>

<!-- 预览弹层（挂载到 body 或 getContainer 指定容器） -->
<div class="hmfw-image-preview">
  <!-- ↑ classNames.preview / styles.preview 应用于此 -->
  <div class="hmfw-image-preview-mask">
    <!-- ↑ classNames.previewMask / styles.previewMask 应用于此 -->
  </div>

  <div class="hmfw-image-preview-wrap">
    <!-- ↑ classNames.previewWrap / styles.previewWrap 应用于此 -->
    <img class="hmfw-image-preview-img" />
    <!-- ↑ classNames.previewImg / styles.previewImg 应用于此 -->
  </div>

  <div class="hmfw-image-preview-operations">
    <!-- ↑ classNames.operations / styles.operations 应用于此 -->
    <button class="hmfw-image-preview-operation-btn">
      <!-- ↑ classNames.operationBtn / styles.operationBtn 应用于此 -->
      翻转/旋转/缩放等
    </button>
  </div>

  <button class="hmfw-image-preview-close-btn">
    <!-- ↑ classNames.closeBtn / styles.closeBtn 应用于此 -->
    关闭
  </button>

  <!-- PreviewGroup 场景 -->
  <button class="hmfw-image-preview-switch-btn hmfw-image-preview-switch-left">
    <!-- ↑ classNames.switchBtn / styles.switchBtn 应用于此 -->
    左箭头
  </button>
  <button class="hmfw-image-preview-switch-btn hmfw-image-preview-switch-right">
    <!-- ↑ classNames.switchBtn / styles.switchBtn 应用于此 -->
    右箭头
  </button>

  <div class="hmfw-image-preview-count">
    <!-- ↑ classNames.count / styles.count 应用于此 -->
    1 / 3
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义 hover 遮罩 -->
  <Image
    src="https://example.com/image.jpg"
    :class-names="{
      mask: 'my-mask',
      maskInfo: 'my-mask-info',
    }"
  />

  <!-- 自定义预览弹层（注意使用 :global() 因为预览挂载到 body） -->
  <Image
    src="https://example.com/image.jpg"
    :class-names="{
      preview: 'my-preview',
      operations: 'my-operations',
      operationBtn: 'my-btn',
    }"
  />
</template>

<style scoped>
:deep(.my-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
  backdrop-filter: blur(4px);
}

:deep(.my-mask-info) {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 预览弹层需要使用 :global() */
:global(.my-preview) {
  background: rgba(0, 0, 0, 0.92);
}

:global(.my-operations) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  backdrop-filter: blur(10px);
  border-radius: 24px;
}

:global(.my-btn:hover) {
  transform: scale(1.2);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 自定义图片容器 -->
  <Image
    src="https://example.com/image.jpg"
    :styles="{
      root: { borderRadius: '16px', overflow: 'hidden' },
      img: { transition: 'transform 0.3s' },
    }"
  />

  <!-- 自定义预览操作栏 -->
  <Image
    src="https://example.com/image.jpg"
    :styles="{
      operations: { background: 'rgba(0, 0, 0, 0.8)', borderRadius: '12px' },
      operationBtn: { fontSize: '20px', color: '#fff' },
    }"
  />

  <!-- 组合使用 -->
  <Image
    src="https://example.com/image.jpg"
    :styles="{
      root: { border: '2px solid #1677ff' },
      mask: { background: 'rgba(22, 119, 255, 0.7)' },
      maskInfo: { fontSize: '18px', fontWeight: 'bold' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 预览弹层（`preview`、`previewMask`、`previewWrap`、`previewImg`、`operations`、`operationBtn`、`closeBtn`、`switchBtn`、`count`）默认挂载到 `document.body`，需要使用 `:global()` 选择器
- 如果通过 `preview.getContainer` 指定了容器，则预览相关样式的作用域取决于该容器位置
- `placeholder` 和 `error` 仅在对应状态时渲染
- PreviewGroup 场景下，`switchBtn` 和 `count` 才会显示

## 设计 Token

Image 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                     | 说明       | 默认值             |
| ------------------------------ | ---------- | ------------------ |
| `--hmfw-color-border`          | 边框色     | `#d9d9d9`          |
| `--hmfw-color-fill-quaternary` | 四级填充色 | `rgba(0,0,0,0.02)` |
| `--hmfw-color-fill-tertiary`   | 三级填充色 | `rgba(0,0,0,0.04)` |
| `--hmfw-color-text-quaternary` | 四级文本色 | `rgba(0,0,0,0.25)` |
| `--hmfw-z-index-popup`         | 弹层层级   | `1080`             |

<script setup lang="ts">
import ImageBasic from './ImageBasic.vue'
import ImagePreviewGroup from './ImagePreviewGroup.vue'
import ImagePlaceholder from './ImagePlaceholder.vue'
import ImageCustomPreview from './ImageCustomPreview.vue'
import ImageToolbarRender from './ImageToolbarRender.vue'
import ImageClassNames from './ImageClassNames.vue'

import ImageBasicSource from './ImageBasic.vue?raw'
import ImagePreviewGroupSource from './ImagePreviewGroup.vue?raw'
import ImagePlaceholderSource from './ImagePlaceholder.vue?raw'
import ImageCustomPreviewSource from './ImageCustomPreview.vue?raw'
import ImageToolbarRenderSource from './ImageToolbarRender.vue?raw'
import ImageClassNamesSource from './ImageClassNames.vue?raw'
</script>
