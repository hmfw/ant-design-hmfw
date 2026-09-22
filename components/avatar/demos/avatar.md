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

### Avatar 事件

| 事件  | 说明                                                                           | 回调参数                        |
| ----- | ------------------------------------------------------------------------------ | ------------------------------- |
| error | 图片加载失败时触发。回调返回 `false` 可阻止默认 fallback，由使用者自行处理降级 | `(e: Event) => boolean \| void` |

### AvatarGroup Props

设置后会自动下发 `size`/`shape` 给子 Avatar（子 Avatar 显式设置可覆盖）。

| 参数     | 说明                                                                                      | 类型                                                                                                                             | 默认值      |
| -------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| max      | 溢出配置：`count` 最大显示数、`style` 溢出头像样式、`popover` 溢出头像收纳到 Popover 展示 | `{ count?: number; style?: CSSProperties; popover?: PopoverProps }`                                                              | -           |
| maxCount | 最多显示的头像数量（已废弃，请用 `max.count`）                                            | `number`                                                                                                                         | -           |
| maxStyle | 多余头像样式（已废弃，请用 `max.style`）                                                  | `CSSProperties`                                                                                                                  | -           |
| size     | 头像大小（下发给子 Avatar），支持响应式配置                                               | `number \| 'small' \| 'default' \| 'large' \| { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }` | `'default'` |
| shape    | 头像形状（下发给子 Avatar）                                                               | `'circle' \| 'square'`                                                                                                           | `'circle'`  |

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

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<AvatarSemantic />

### DOM 结构与 className 映射

```html
<!-- 图片模式 -->
<span class="hmfw-avatar hmfw-avatar-circle hmfw-avatar-image">
  <!-- ↑ classNames.root / styles.root -->
  <img src="..." />
  <!-- ↑ 设置 src 且加载成功时渲染，classNames.img / styles.img -->
</span>

<!-- 图标模式：icon 直接渲染，无包裹层 -->
<span class="hmfw-avatar hmfw-avatar-circle hmfw-avatar-icon">
  <!-- ↑ classNames.root / styles.root -->
  <IconComponent />
  <!-- ↑ 图标组件无包裹层，不支持 classNames.icon -->
</span>

<!-- 字符/slot 模式 -->
<span class="hmfw-avatar hmfw-avatar-circle">
  <!-- ↑ classNames.root / styles.root -->
  <span class="hmfw-avatar-string" style="transform: translateX(-50%)">
    <!-- ↑ classNames.string / styles.string -->
    文本内容
  </span>
</span>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Avatar :class-names="{ root: 'gradient-avatar', string: 'text-glow' }">U</Avatar>

  <!-- styles：内联样式，优先级高于 classNames -->
  <Avatar
    :styles="{
      root: { background: '#1677ff' },
      string: { color: '#fff', fontWeight: 'bold' },
    }"
  >
    Vue
  </Avatar>

  <!-- 组合：classNames 与 styles 混用 -->
  <Avatar
    src="https://example.com/avatar.jpg"
    :class-names="{ img: 'custom-img' }"
    :styles="{ root: { borderRadius: '12px' } }"
  />
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

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-avatar-circle`）合并，不会互相覆盖
- 图标模式（`icon`）下图标组件直接渲染、无包裹层，不支持 `classNames.icon` / `styles.icon`
- `styles.string` 会与内置的 `transform` 合并，`styles.root` 会与内置的尺寸样式合并

## 设计 Token

Avatar 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                      | 说明         | 默认值             |
| ------------------------------- | ------------ | ------------------ |
| `--hmfw-border-radius-lg`       | 大号圆角     | `8px`              |
| `--hmfw-color-text-placeholder` | 占位符文本色 | `rgba(0,0,0,0.25)` |
