# Empty 空状态

空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示
- 初始化场景时的引导创建流程

## 代码演示

### 基础用法

简单的空状态展示。

<DemoBlock title="基础用法" :source="EmptyBasicSource">
  <EmptyBasic />
</DemoBlock>

### 自定义描述

自定义描述文字。

<DemoBlock title="自定义描述" :source="EmptyCustomDescriptionSource">
  <EmptyCustomDescription />
</DemoBlock>

### 底部操作

带有操作按钮的空状态。

<DemoBlock title="底部操作" :source="EmptyActionSource">
  <EmptyAction />
</DemoBlock>

### 自定义图片

通过 `image` 传入图片 URL，或使用 `#image` 插槽自定义任意节点；`image={false}` 可隐藏图片。

<DemoBlock title="自定义图片" :source="EmptyCustomImageSource">
  <EmptyCustomImage />
</DemoBlock>

### 描述控制

`description={false}` 隐藏描述，`#description` 插槽可自定义富文本描述；插槽优先级高于 `description={false}`。

<DemoBlock title="描述控制" :source="EmptyDescriptionSource">
  <EmptyDescription />
</DemoBlock>

### 简约模式

通过 `image="simple"`（或 `PRESENTED_IMAGE_SIMPLE`）使用更紧凑的简约空状态。

<DemoBlock title="简约模式" :source="EmptySimpleSource">
  <EmptySimple />
</DemoBlock>

### 自定义图片尺寸

通过 `imageWidth` / `imageHeight`（数字按 px 处理，也可传带单位字符串）或 `imageStyle` 控制默认插画的尺寸。

<DemoBlock title="自定义图片尺寸" :source="EmptyImageSizeSource">
  <EmptyImageSize />
</DemoBlock>

### 暗黑模式

默认插画的配色通过 CSS 变量驱动，会自动跟随系统配色（`prefers-color-scheme: dark`）。也可在祖先元素上设置 `data-theme="dark"`（或 `.hmfw-theme-dark` 类）强制使用暗色插画。

<DemoBlock title="暗黑模式" :source="EmptyDarkSource">
  <EmptyDark />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="EmptyClassNamesSource">
  <EmptyClassNames />
</DemoBlock>

## API

### Empty Props

| 参数        | 说明                                                                               | 类型               | 默认值       |
| ----------- | ---------------------------------------------------------------------------------- | ------------------ | ------------ |
| description | 自定义描述内容，为 `false` 时不显示                                                | `string \| false`  | `'暂无数据'` |
| image       | 显示图片：图片地址字符串，或预设标识 `'default'` / `'simple'`，为 `false` 时不显示 | `string \| false`  | `'default'`  |
| imageStyle  | 图片样式（优先级高于 imageWidth/imageHeight）                                      | `CSSProperties`    | -            |
| imageWidth  | 图片宽度，数字按 px 处理，亦可传带单位字符串                                       | `number \| string` | -            |
| imageHeight | 图片高度，数字按 px 处理，亦可传带单位字符串                                       | `number \| string` | -            |
| classNames  | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style)   | `EmptyClassNames`  | -            |
| styles      | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style)   | `EmptyStyles`      | -            |

预设常量：`PRESENTED_IMAGE_DEFAULT`（`'default'`）、`PRESENTED_IMAGE_SIMPLE`（`'simple'`）。

### Empty Slots

| 名称        | 说明           |
| ----------- | -------------- |
| default     | 底部内容       |
| description | 自定义描述内容 |
| image       | 自定义图片     |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Empty 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface EmptyClassNames {
  root?: string // 根容器
  image?: string // 图片容器
  description?: string // 描述文本
  footer?: string // 底部操作区
}

interface EmptyStyles {
  root?: CSSProperties
  image?: CSSProperties
  description?: CSSProperties
  footer?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 基础结构 -->
<div class="hmfw-empty">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-empty-image">
    <!-- ↑ classNames.image / styles.image 应用于此 -->
    <svg>...</svg>
  </div>
  <div class="hmfw-empty-description">
    <!-- ↑ classNames.description / styles.description 应用于此 -->
    暂无数据
  </div>
  <div class="hmfw-empty-footer">
    <!-- ↑ classNames.footer / styles.footer 应用于此 -->
    <button>立即创建</button>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根容器背景 -->
  <Empty :class-names="{ root: 'my-empty-root' }" description="精美卡片样式" />

  <!-- 自定义图片容器 -->
  <Empty :class-names="{ image: 'my-image-wrapper' }" description="图片增强效果" />

  <!-- 组合使用 -->
  <Empty
    :class-names="{
      root: 'my-root',
      description: 'my-description',
      footer: 'my-footer',
    }"
    description="完整定制"
  >
    <Button type="primary">立即创建</Button>
  </Empty>
</template>

<style scoped>
:deep(.my-empty-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px 32px;
  border-radius: 16px;
}

:deep(.my-image-wrapper) {
  padding: 24px;
  background: #ffecd2;
  border-radius: 50%;
  transition: transform 0.3s;
}

:deep(.my-image-wrapper:hover) {
  transform: scale(1.1);
}

:deep(.my-description) {
  font-size: 18px;
  font-weight: 600;
  color: #ff4d4f;
}

:deep(.my-footer) {
  margin-top: 24px;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制根容器 -->
  <Empty
    :styles="{
      root: { padding: '48px 24px', background: '#f0f5ff', borderRadius: '12px' },
    }"
    description="自定义背景"
  />

  <!-- 内联样式控制图片尺寸 -->
  <Empty
    :styles="{
      image: { height: '120px', opacity: '0.8' },
    }"
    description="调整图片透明度"
  />

  <!-- 组合使用 -->
  <Empty
    :styles="{
      root: { background: '#fff7e6', borderRadius: '8px' },
      description: { fontSize: '16px', color: '#fa8c16', fontWeight: '500' },
      footer: { marginTop: '20px' },
    }"
    description="组合内联样式"
  >
    <Button>创建</Button>
  </Empty>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-empty-normal`）合并
- `description` 和 `footer` 节点仅在有内容时渲染，但 `classNames` / `styles` 会正确应用
- `styles.image` 与已有的 `imageStyle` prop 会合并，优先级：`sizeStyle` < `imageStyle` < `styles.image`
- `description` 为 `false` 时不渲染描述节点；但若提供了 `#description` 插槽，则以插槽内容为准（插槽优先级高于 `description=false`）
- 当 `image` 为图片 URL 时，`img` 的 `alt` 会取字符串 `description`（无字符串描述时回退为 `'empty'`），利于无障碍访问

## 设计 Token

Empty 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 颜色类

| Token 名称                    | 说明           | 默认值             |
| ----------------------------- | -------------- | ------------------ |
| `--hmfw-color-text-disabled`  | 禁用文本色     | `rgba(0,0,0,0.25)` |
| `--hmfw-color-text-secondary` | 次要文本色     | `rgba(0,0,0,0.65)` |
| `--hmfw-empty-img-shadow`     | 插画阴影色     | `#f5f5f5`          |
| `--hmfw-empty-img-outline`    | 插画轮廓色     | `#d9d9d9`          |
| `--hmfw-empty-img-bg`         | 插画背景填充色 | `#fafafa`          |

### 字体类

| Token 名称              | 说明     | 默认值 |
| ----------------------- | -------- | ------ |
| `--hmfw-font-size-base` | 基础字号 | `14px` |

**说明**：Empty 组件的插画配色（`--hmfw-empty-img-*`）支持暗黑模式，通过媒体查询（`prefers-color-scheme: dark`）或显式主题类（`data-theme="dark"` / `.hmfw-theme-dark`）自动切换配色方案。
