# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 何时使用

- 需要展示用户头像或事物图标时
- 需要展示一组用户或事物时

## 代码演示

### 基本用法

支持三种类型：图片、图标和字符。

<DemoBlock title="基本用法" :source="AvatarBasicSource">
  <AvatarBasic />
</DemoBlock>

### 不同尺寸

支持三种预设尺寸和自定义尺寸。

<DemoBlock title="不同尺寸" :source="AvatarSizeSource">
  <AvatarSize />
</DemoBlock>

### 响应式尺寸

支持响应式尺寸配置，根据屏幕断点自动调整头像大小。

<DemoBlock title="响应式尺寸" :source="AvatarResponsiveSource">
  <AvatarResponsive />
</DemoBlock>

### 头像组

使用 AvatarGroup 可以展示一组头像。

<DemoBlock title="头像组" :source="AvatarGroupDemoSource">
  <AvatarGroupDemo />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="AvatarClassNamesSource">
  <AvatarClassNames />
</DemoBlock>

## API

### Avatar Props

| 参数           | 说明                                                                             | 类型                                                                                                                                                                               | 默认值      |
| -------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| size           | 头像大小，支持响应式配置                                                         | `number \| 'small' \| 'default' \| 'large' \| { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }`                                                   | `'default'` |
| shape          | 头像形状                                                                         | `'circle' \| 'square'`                                                                                                                                                             | `'circle'`  |
| src            | 图片地址                                                                         | `string`                                                                                                                                                                           | -           |
| srcSet         | 图片响应式资源地址                                                               | `string`                                                                                                                                                                           | -           |
| alt            | 图片无法显示时的替代文本                                                         | `string`                                                                                                                                                                           | -           |
| icon           | 自定义图标组件                                                                   | `Component`                                                                                                                                                                        | -           |
| draggable      | 图片是否允许拖拽                                                                 | `boolean \| 'true' \| 'false'`                                                                                                                                                     | -           |
| crossOrigin    | CORS 属性设置                                                                    | `'' \| 'anonymous' \| 'use-credentials'`                                                                                                                                           | -           |
| referrerPolicy | referrer 策略                                                                    | `'no-referrer' \| 'no-referrer-when-downgrade' \| 'origin' \| 'origin-when-cross-origin' \| 'same-origin' \| 'strict-origin' \| 'strict-origin-when-cross-origin' \| 'unsafe-url'` | -           |
| gap            | 字符类型距离左右两侧边界单位像素                                                 | `number`                                                                                                                                                                           | `4`         |
| classNames     | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `AvatarClassNames`                                                                                                                                                                 | -           |
| styles         | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `AvatarStyles`                                                                                                                                                                     | -           |

### AvatarGroup Props

设置后会自动下发 `size`/`shape` 给子 Avatar（子 Avatar 显式设置可覆盖）。

| 参数     | 说明                                        | 类型                                                                                                                             | 默认值      |
| -------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| maxCount | 最多显示的头像数量                          | `number`                                                                                                                         | -           |
| maxStyle | 多余头像样式                                | `CSSProperties`                                                                                                                  | -           |
| size     | 头像大小（下发给子 Avatar），支持响应式配置 | `number \| 'small' \| 'default' \| 'large' \| { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }` | `'default'` |
| shape    | 头像形状（下发给子 Avatar）                 | `'circle' \| 'square'`                                                                                                           | `'circle'`  |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对头像的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface AvatarClassNames {
  root?: string // 头像根容器 <span>
  img?: string // 图片元素（src 模式）
  string?: string // 文本容器（字符/slot 模式）
}

interface AvatarStyles {
  root?: CSSProperties
  img?: CSSProperties
  string?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 图片模式 -->
<span class="hmfw-avatar hmfw-avatar-circle hmfw-avatar-image">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <img src="..." />
  <!-- ↑ classNames.img / styles.img 应用于此 -->
</span>

<!-- 图标模式（无包裹层，icon 直接渲染） -->
<span class="hmfw-avatar hmfw-avatar-circle hmfw-avatar-icon">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <IconComponent />
  <!-- ↑ 图标组件无包裹层，不支持 classNames.icon -->
</span>

<!-- 字符/slot 模式 -->
<span class="hmfw-avatar hmfw-avatar-circle">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-avatar-string" style="transform: translateX(-50%)">
    <!-- ↑ classNames.string / styles.string 应用于此 -->
    文本内容
  </span>
</span>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根容器样式 -->
  <Avatar :class-names="{ root: 'gradient-avatar' }">U</Avatar>

  <!-- 自定义图片样式 -->
  <Avatar src="https://example.com/avatar.jpg" :class-names="{ root: 'custom-root', img: 'custom-img' }" />

  <!-- 自定义文本容器 -->
  <Avatar :class-names="{ string: 'text-glow' }">李</Avatar>
</template>

<style scoped>
:deep(.gradient-avatar) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: 2px solid #fff;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-img) {
  filter: saturate(1.5) contrast(1.1);
  transition: filter 0.3s;
}

:deep(.text-glow) {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制根容器 -->
  <Avatar
    :styles="{
      root: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
      },
    }"
  >
    JS
  </Avatar>

  <!-- 内联样式控制图片 -->
  <Avatar
    src="https://example.com/avatar.jpg"
    :styles="{
      root: { borderRadius: '12px' },
      img: { filter: 'grayscale(50%)' },
    }"
  />

  <!-- 组合使用 -->
  <Avatar
    :styles="{
      root: { background: '#1677ff' },
      string: { color: '#fff', fontWeight: 'bold' },
    }"
  >
    Vue
  </Avatar>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 图标模式（`icon` prop）下，图标组件直接渲染无包裹层，无法应用 `classNames.icon` 或 `styles.icon`
- `classNames.string` 仅在字符/slot 模式下生效，`classNames.img` 仅在图片模式下生效
- `styles.string` 会与内置的 `transform` 样式合并，`styles.root` 会与内置的 `sizeStyle` 合并

## 设计 Token

Avatar 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                      | 说明         | 默认值             |
| ------------------------------- | ------------ | ------------------ |
| `--hmfw-border-radius-lg`       | 大号圆角     | `8px`              |
| `--hmfw-color-text-placeholder` | 占位符文本色 | `rgba(0,0,0,0.25)` |
