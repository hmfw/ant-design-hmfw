# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

- 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑

## 代码演示

### 基础用法

一个简单的 loading 状态。

<DemoBlock title="基础用法" :source="SpinBasicSource">
  <SpinBasic />
</DemoBlock>

### 各种大小

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

<DemoBlock title="各种大小" :source="SpinSizeSource">
  <SpinSize />
</DemoBlock>

### 嵌套内容

可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

<DemoBlock title="嵌套内容" :source="SpinNestedSource">
  <SpinNested />
</DemoBlock>

### 延迟加载

延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。

<DemoBlock title="延迟加载" :source="SpinDelaySource">
  <SpinDelay />
</DemoBlock>

### 自定义指示符

使用 `indicator` 插槽自定义加载指示符，例如替换为旋转的图标。

<DemoBlock title="自定义指示符" :source="SpinIndicatorSource">
  <SpinIndicator />
</DemoBlock>

### 全屏加载

使用 `fullscreen` 展示覆盖整个视口的加载遮罩，适合页面级异步操作。

<DemoBlock title="全屏加载" :source="SpinFullscreenSource">
  <SpinFullscreen />
</DemoBlock>

### 进度

通过 `percent` 展示环形进度指示器。传入 `number` 为受控进度，传入 `'auto'` 时在 `spinning` 期间自动模拟递增。

<DemoBlock title="进度" :source="SpinPercentSource">
  <SpinPercent />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对 root、dot、container、description 等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="SpinClassNamesSource">
  <SpinClassNames />
</DemoBlock>

## API

### Spin Props

| 参数        | 说明                                                                             | 类型                             | 默认值     |
| ----------- | -------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| spinning    | 是否为加载中状态                                                                 | `boolean`                        | `true`     |
| size        | 组件大小                                                                         | `'small' \| 'middle' \| 'large'` | `'middle'` |
| tip         | 当作为包裹元素时，可以自定义描述文案                                             | `string`                         | -          |
| description | tip 的新名（与 AntD v6 对齐），优先级高于 tip                                    | `string`                         | -          |
| delay       | 延迟显示加载效果的时间（防止闪烁），单位：毫秒                                   | `number`                         | `0`        |
| fullscreen  | 是否为全屏加载，展示背景遮罩覆盖整个视口                                         | `boolean`                        | `false`    |
| percent     | 进度百分比；为 `'auto'` 时在 `spinning` 期间自动模拟递增                         | `number \| 'auto'`               | -          |
| classNames  | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SpinClassNames`                 | -          |
| styles      | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SpinStyles`                     | -          |

### Spin Slots

| 名称      | 说明                                               |
| --------- | -------------------------------------------------- |
| default   | 被遮罩的内容                                       |
| indicator | 加载指示符（自定义指示器时，插槽参数含 `percent`） |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Spin 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface SpinClassNames {
  root?: string // 加载组件根节点（<span> 或 fullscreen 模式下的遮罩 <div>）
  dot?: string // 加载指示符容器（四点动画 / 自定义 indicator）
  container?: string // 嵌套加载时浮层容器（覆盖在内容之上）
  description?: string // 描述文案（tip / description）
}

interface SpinStyles {
  root?: CSSProperties
  dot?: CSSProperties
  container?: CSSProperties
  description?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 基础用法 -->
<span class="hmfw-spin hmfw-spin-spinning">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-spin-dot-holder">
    <span class="hmfw-spin-dot hmfw-spin-dot-spin">
      <!-- ↑ classNames.dot / styles.dot 应用于此 -->
      <i class="hmfw-spin-dot-item"></i>
      <!-- ...共 4 个点 -->
    </span>
  </span>
  <div class="hmfw-spin-description">
    <!-- ↑ classNames.description / styles.description 应用于此 -->
    加载中...
  </div>
</span>

<!-- 嵌套加载（含 default 插槽） -->
<div class="hmfw-spin-nested-loading">
  <div class="hmfw-spin-container">
    <!-- ↑ classNames.container / styles.container 应用于此（浮层） -->
    <span class="hmfw-spin hmfw-spin-spinning">
      <!-- ↑ classNames.root / styles.root 应用于此 -->
    </span>
  </div>
  <div class="hmfw-spin-blur-container">
    <!-- 被遮罩的内容 -->
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义指示符与描述 -->
  <Spin tip="数据加载中..." :class-names="{ dot: 'my-dot', description: 'my-desc' }" />

  <!-- 自定义嵌套浮层 -->
  <Spin spinning :class-names="{ container: 'my-container' }">
    <div>内容区域</div>
  </Spin>
</template>

<style scoped>
:deep(.my-dot .hmfw-spin-dot-item) {
  background: #722ed1;
}

:deep(.my-desc) {
  color: #722ed1;
  font-weight: 600;
}

:deep(.my-container) {
  background: rgba(114, 46, 209, 0.12);
  backdrop-filter: blur(2px);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制根节点与描述 -->
  <Spin
    tip="上传中"
    :styles="{
      root: { padding: '16px', background: '#f6ffed', borderRadius: '8px' },
      description: { color: '#52c41a', fontWeight: 600 },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `classNames.dot` 应用于指示符容器 `.hmfw-spin-dot`，若要修改四个圆点颜色需用 `:deep(.my-dot .hmfw-spin-dot-item)` 这类后代选择器
- `classNames.container` 仅在使用 `default` 插槽的嵌套加载模式且 `spinning` 为 `true` 时渲染
- `fullscreen` 模式下根节点为遮罩 `<div>`，`classNames.root` / `styles.root` 应用在该遮罩上
- 自定义 `indicator` 插槽时，`classNames.dot` / `styles.dot` 仍应用于其外层容器 `.hmfw-spin-dot`

## 设计 Token

Spin 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明       | 默认值             |
| ----------------------------- | ---------- | ------------------ |
| `--hmfw-color-primary`        | 主题色     | `#1677ff`          |
| `--hmfw-color-fill-secondary` | 次级填充色 | `rgba(0,0,0,0.06)` |
| `--hmfw-font-size-base`       | 基础字号   | `14px`             |
