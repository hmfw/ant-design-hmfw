# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下
- 图文信息内容较多的列表/卡片中
- 只在第一次加载数据的时候使用

## 代码演示

### 基础用法

最简单的占位效果。

<DemoBlock title="基础用法" :source="SkeletonBasicSource">
  <SkeletonBasic />
</DemoBlock>

### 动画效果

显示动画效果。

<DemoBlock title="动画效果" :source="SkeletonActiveSource">
  <SkeletonActive />
</DemoBlock>

### 包含子组件

加载占位图包含子组件。

<DemoBlock title="包含子组件" :source="SkeletonWithChildrenSource">
  <SkeletonWithChildren />
</DemoBlock>

### 按钮/输入框骨架

独立的按钮和输入框骨架。

<DemoBlock title="按钮/输入框骨架" :source="SkeletonButtonInputSource">
  <SkeletonButtonInput />
</DemoBlock>

### 头像骨架

独立的头像骨架。

<DemoBlock title="头像骨架" :source="SkeletonAvatarSource">
  <SkeletonAvatar />
</DemoBlock>

### 图片/节点骨架

独立的图片和自定义节点骨架。

<DemoBlock title="图片/节点骨架" :source="SkeletonImageNodeSource">
  <SkeletonImageNode />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对主组件及各子组件的元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="SkeletonClassNamesSource">
  <SkeletonClassNames />
</DemoBlock>

## API

### Skeleton Props

| 参数       | 说明                                                                             | 类型                                | 默认值  |
| ---------- | -------------------------------------------------------------------------------- | ----------------------------------- | ------- |
| active     | 是否展示动画效果                                                                 | `boolean`                           | `false` |
| avatar     | 是否显示头像占位图                                                               | `boolean \| SkeletonAvatarProps`    | `false` |
| paragraph  | 是否显示段落占位图                                                               | `boolean \| SkeletonParagraphProps` | `true`  |
| title      | 是否显示标题占位图                                                               | `boolean \| SkeletonTitleProps`     | `true`  |
| loading    | 为 true 时，显示占位图，反之则直接展示子组件                                     | `boolean`                           | `true`  |
| round      | 为 true 时，段落和标题显示圆角                                                   | `boolean`                           | `false` |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonClassNames`                | -       |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonStyles`                    | -       |

### SkeletonAvatarProps

| 参数  | 说明 | 类型                                        | 默认值     |
| ----- | ---- | ------------------------------------------- | ---------- |
| size  | 大小 | `'large' \| 'default' \| 'small' \| number` | `'large'`  |
| shape | 形状 | `'circle' \| 'square'`                      | `'circle'` |

### SkeletonTitleProps

| 参数  | 说明     | 类型               | 默认值 |
| ----- | -------- | ------------------ | ------ |
| width | 标题宽度 | `string \| number` | -      |

### SkeletonParagraphProps

| 参数  | 说明                               | 类型                                          | 默认值                          |
| ----- | ---------------------------------- | --------------------------------------------- | ------------------------------- |
| rows  | 段落行数                           | `number`                                      | `3` (无头像时) / `2` (有头像时) |
| width | 段落宽度，可传数组分别指定每行宽度 | `string \| number \| Array<string \| number>` | -                               |

### Skeleton.Button Props

| 参数       | 说明                                                                             | 类型                                           | 默认值      |
| ---------- | -------------------------------------------------------------------------------- | ---------------------------------------------- | ----------- |
| active     | 是否展示动画效果                                                                 | `boolean`                                      | `false`     |
| size       | 大小                                                                             | `'large' \| 'default' \| 'small'`              | `'default'` |
| shape      | 形状                                                                             | `'default' \| 'circle' \| 'round' \| 'square'` | `'default'` |
| block      | 将按钮宽度调整为其父宽度                                                         | `boolean`                                      | `false`     |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonButtonClassNames`                     | -           |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonButtonStyles`                         | -           |

### Skeleton.Input Props

| 参数       | 说明                                                                             | 类型                              | 默认值      |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| active     | 是否展示动画效果                                                                 | `boolean`                         | `false`     |
| size       | 大小                                                                             | `'large' \| 'default' \| 'small'` | `'default'` |
| block      | 将输入框宽度调整为其父宽度                                                       | `boolean`                         | `false`     |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonInputClassNames`         | -           |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonInputStyles`             | -           |

### Skeleton.Avatar Props

| 参数       | 说明                                                                             | 类型                                        | 默认值      |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------- | ----------- |
| active     | 是否展示动画效果                                                                 | `boolean`                                   | `false`     |
| size       | 大小                                                                             | `'large' \| 'default' \| 'small' \| number` | `'default'` |
| shape      | 形状                                                                             | `'circle' \| 'square'`                      | `'circle'`  |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonAvatarClassNames`                  | -           |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonAvatarStyles`                      | -           |

### Skeleton.Image Props

| 参数       | 说明                                                                             | 类型                      | 默认值  |
| ---------- | -------------------------------------------------------------------------------- | ------------------------- | ------- |
| active     | 是否展示动画效果                                                                 | `boolean`                 | `false` |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonImageClassNames` | -       |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonImageStyles`     | -       |

### Skeleton.Node Props

| 参数       | 说明                                                                             | 类型                     | 默认值  |
| ---------- | -------------------------------------------------------------------------------- | ------------------------ | ------- |
| active     | 是否展示动画效果                                                                 | `boolean`                | `false` |
| nodeStyle  | 作用于内部占位节点的内联样式（常用于设定占位尺寸）                               | `CSSProperties`          | -       |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonNodeClassNames` | -       |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SkeletonNodeStyles`     | -       |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Skeleton 主组件及其子组件（Button/Input/Avatar/Image/Node）的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

// Skeleton 主组件
interface SkeletonClassNames {
  root?: string // 根节点
  header?: string // 头部区域（包含 avatar）
  avatar?: string // Avatar 元素
  section?: string // 内容区域
  title?: string // 标题元素
  paragraph?: string // 段落容器
  row?: string // 段落行项
}

interface SkeletonStyles {
  root?: CSSProperties
  header?: CSSProperties
  avatar?: CSSProperties
  section?: CSSProperties
  title?: CSSProperties
  paragraph?: CSSProperties
  row?: CSSProperties
}

// SkeletonButton
interface SkeletonButtonClassNames {
  root?: string // 根节点
  button?: string // Button 元素
}

interface SkeletonButtonStyles {
  root?: CSSProperties
  button?: CSSProperties
}

// SkeletonInput
interface SkeletonInputClassNames {
  root?: string // 根节点
  input?: string // Input 元素
}

interface SkeletonInputStyles {
  root?: CSSProperties
  input?: CSSProperties
}

// SkeletonAvatar
interface SkeletonAvatarClassNames {
  root?: string // 根节点
  avatar?: string // Avatar 元素
}

interface SkeletonAvatarStyles {
  root?: CSSProperties
  avatar?: CSSProperties
}

// SkeletonImage
interface SkeletonImageClassNames {
  root?: string // 根节点
  image?: string // Image 容器
  svg?: string // SVG 图标
  path?: string // SVG 路径
}

interface SkeletonImageStyles {
  root?: CSSProperties
  image?: CSSProperties
  svg?: CSSProperties
  path?: CSSProperties
}

// SkeletonNode
interface SkeletonNodeClassNames {
  root?: string // 根节点
  node?: string // Node 容器
}

interface SkeletonNodeStyles {
  root?: CSSProperties
  node?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- Skeleton 主组件 -->
<div class="hmfw-skeleton">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-skeleton-header">
    <!-- ↑ classNames.header / styles.header 应用于此 -->
    <span class="hmfw-skeleton-avatar">
      <!-- ↑ classNames.avatar / styles.avatar 应用于此 -->
    </span>
  </div>
  <div class="hmfw-skeleton-section">
    <!-- ↑ classNames.section / styles.section 应用于此 -->
    <h3 class="hmfw-skeleton-title">
      <!-- ↑ classNames.title / styles.title 应用于此 -->
    </h3>
    <ul class="hmfw-skeleton-paragraph">
      <!-- ↑ classNames.paragraph / styles.paragraph 应用于此 -->
      <li><!-- ↑ classNames.row / styles.row 应用于此 --></li>
      <li><!-- ↑ classNames.row / styles.row 应用于此 --></li>
    </ul>
  </div>
</div>

<!-- SkeletonButton -->
<div class="hmfw-skeleton hmfw-skeleton-element">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-skeleton-button">
    <!-- ↑ classNames.button / styles.button 应用于此 -->
  </span>
</div>

<!-- SkeletonInput -->
<div class="hmfw-skeleton hmfw-skeleton-element">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-skeleton-input">
    <!-- ↑ classNames.input / styles.input 应用于此 -->
  </span>
</div>

<!-- SkeletonAvatar -->
<div class="hmfw-skeleton hmfw-skeleton-element">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-skeleton-avatar">
    <!-- ↑ classNames.avatar / styles.avatar 应用于此 -->
  </span>
</div>

<!-- SkeletonImage -->
<div class="hmfw-skeleton hmfw-skeleton-element">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-skeleton-image">
    <!-- ↑ classNames.image / styles.image 应用于此 -->
    <svg class="hmfw-skeleton-image-svg">
      <!-- ↑ classNames.svg / styles.svg 应用于此 -->
      <path class="hmfw-skeleton-image-path">
        <!-- ↑ classNames.path / styles.path 应用于此 -->
      </path>
    </svg>
  </div>
</div>

<!-- SkeletonNode -->
<div class="hmfw-skeleton hmfw-skeleton-element">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-skeleton-node">
    <!-- ↑ classNames.node / styles.node 应用于此 -->
    <!-- 插槽内容 -->
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- Skeleton 主组件 -->
  <Skeleton
    avatar
    :paragraph="{ rows: 3 }"
    :class-names="{
      root: 'my-skeleton',
      avatar: 'my-avatar',
      title: 'my-title',
      row: 'my-row',
    }"
  />

  <!-- SkeletonButton -->
  <SkeletonButton
    active
    :class-names="{
      button: 'my-button',
    }"
  />

  <!-- SkeletonImage -->
  <SkeletonImage
    active
    :class-names="{
      image: 'my-image',
      path: 'my-path',
    }"
  />
</template>

<style scoped>
:deep(.my-skeleton) {
  padding: 16px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 8px;
}

:deep(.my-avatar) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.my-title) {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  opacity: 0.3;
}

:deep(.my-row) {
  background: linear-gradient(90deg, #52c41a 0%, #389e0d 100%);
  opacity: 0.25;
}

:deep(.my-button) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border-radius: 8px;
}

:deep(.my-image) {
  background: linear-gradient(135deg, #faad14 0%, #d48806 100%);
  border-radius: 12px;
}

:deep(.my-path) {
  fill: #ffffff;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- Skeleton 主组件 -->
  <Skeleton
    avatar
    :paragraph="{ rows: 2 }"
    :styles="{
      root: { padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px' },
      avatar: { borderRadius: '12px' },
      title: { height: '20px', backgroundColor: '#1890ff20' },
      row: { backgroundColor: '#52c41a20' },
    }"
  />

  <!-- SkeletonButton -->
  <SkeletonButton
    :styles="{
      button: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    }"
  />

  <!-- SkeletonInput -->
  <SkeletonInput
    block
    :styles="{
      input: { backgroundColor: '#ff4d4f20', borderRadius: '6px' },
    }"
  />

  <!-- SkeletonAvatar -->
  <SkeletonAvatar
    :size="64"
    :styles="{
      avatar: { borderRadius: '16px', background: 'linear-gradient(135deg, #722ed1 0%, #531dab 100%)' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- Skeleton 主组件与子组件（Button/Input/Avatar/Image/Node）各自独立拥有 `classNames` 和 `styles` props
- 主组件的 `classNames.row` 会应用于段落的每一行 `<li>` 元素
- 子组件的 `root` key 对应 `.hmfw-skeleton.hmfw-skeleton-element` 根节点
- SkeletonImage 的 `path` key 可用于自定义占位图标的填充色
- 动画效果由 `.hmfw-skeleton-active` 类控制，`classNames` 不会覆盖动画行为
- 响应 `prefers-reduced-motion` 和 `prefers-color-scheme: dark` 的样式由组件内置处理

## 设计 Token

Skeleton 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                        | 说明         | 默认值                |
| --------------------------------- | ------------ | --------------------- |
| `--hmfw-skeleton-color-base`      | 骨架基础色   | `rgba(0,0,0,0.06)`    |
| `--hmfw-skeleton-color-highlight` | 动画高亮色   | `rgba(0,0,0,0.15)`    |
| `--hmfw-color-fill`               | 填充色       | `rgba(0,0,0,0.15)`    |
| `--hmfw-color-fill-secondary`     | 次级填充色   | `rgba(0,0,0,0.06)`    |
| `--hmfw-border-radius`            | 基础圆角     | `6px`                 |
| `--hmfw-border-radius-sm`         | 小号圆角     | `4px`                 |
| `--hmfw-control-height`           | 标准控件高度 | `32px`                |
| `--hmfw-control-height-lg`        | 大号控件高度 | `40px`                |
| `--hmfw-control-height-sm`        | 小号控件高度 | `24px`                |
| `--hmfw-control-height-xs`        | 超小控件高度 | `16px`                |
| `--hmfw-padding`                  | 标准内边距   | `12px` (sizeStep × 3) |
| `--hmfw-margin-sm`                | 小号外边距   | `8px` (sizeStep × 2)  |
