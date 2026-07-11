# Badge 徽标数

图标右上角的圆形徽标数字。

## 何时使用

- 当需要在图标或文字旁边展示数字或状态时
- 用于消息提醒、待办事项等场景

## 代码演示

### 基本用法

简单的徽章展示，当 count 为 0 时，默认不显示。

<DemoBlock title="基本用法" :source="BadgeBasicSource">
  <BadgeBasic />
</DemoBlock>

### 状态点

用于表示状态的小圆点。

<DemoBlock title="状态点" :source="BadgeStatusSource">
  <BadgeStatus />
</DemoBlock>

### 自定义颜色

可以自定义徽标的颜色。

<DemoBlock title="自定义颜色" :source="BadgeCustomColorSource">
  <BadgeCustomColor />
</DemoBlock>

### 缎带

使用 `Badge.Ribbon` 展示缎带样式标记。

<DemoBlock title="缎带" :source="BadgeRibbonSource">
  <BadgeRibbon />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对 root、indicator、dot、text 等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="BadgeClassNamesSource">
  <BadgeClassNames />
</DemoBlock>

## API

### Badge Props

| 参数          | 说明                                                                             | 类型                                                             | 默认值      |
| ------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| count         | 展示的数字                                                                       | `number \| string`                                               | -           |
| dot           | 不展示数字，只有一个小红点                                                       | `boolean`                                                        | `false`     |
| overflowCount | 展示封顶的数字值                                                                 | `number`                                                         | `99`        |
| showZero      | 当数值为 0 时，是否展示 Badge                                                    | `boolean`                                                        | `false`     |
| status        | 设置 Badge 为状态点                                                              | `'success' \| 'processing' \| 'default' \| 'error' \| 'warning'` | -           |
| color         | 自定义小圆点的颜色                                                               | `string`                                                         | -           |
| offset        | 设置状态点的位置偏移                                                             | `[number, number]`                                               | -           |
| size          | 徽标大小                                                                         | `'default' \| 'small'`                                           | `'default'` |
| text          | 在设置了 status 的前提下有效，设置状态点的文本                                   | `string`                                                         | -           |
| title         | 鼠标悬停时的提示文字                                                             | `string`                                                         | -           |
| classNames    | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `BadgeClassNames`                                                | -           |
| styles        | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `BadgeStyles`                                                    | -           |

### Badge.Ribbon Props

| 参数      | 说明                           | 类型               | 默认值  |
| --------- | ------------------------------ | ------------------ | ------- |
| text      | 缎带内容                       | `string`           | -       |
| color     | 缎带颜色（预设色或自定义色值） | `string`           | -       |
| placement | 缎带位置                       | `'start' \| 'end'` | `'end'` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对徽标的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface BadgeClassNames {
  root?: string // 徽标根容器
  indicator?: string // 数字/点标记容器（count/dot 模式的 sup 元素）
  dot?: string // 状态点（status/color 独立模式的圆点）
  text?: string // 状态文本（status/color 独立模式的文字）
}

interface BadgeStyles {
  root?: CSSProperties
  indicator?: CSSProperties
  dot?: CSSProperties
  text?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- count/dot 模式：带包裹元素 -->
<span class="hmfw-badge">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div>包裹内容</div>
  <sup class="hmfw-badge-count">
    <!-- ↑ classNames.indicator / styles.indicator 应用于此 -->
    5
  </sup>
</span>

<!-- status/color 独立模式：无包裹元素 -->
<span class="hmfw-badge hmfw-badge-status">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-badge-status-dot">
    <!-- ↑ classNames.dot / styles.dot 应用于此 -->
  </span>
  <span class="hmfw-badge-status-text">
    <!-- ↑ classNames.text / styles.text 应用于此 -->
    状态文本
  </span>
</span>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义数字徽标 -->
  <Badge :count="5" :class-names="{ indicator: 'my-indicator' }">
    <Avatar shape="square" />
  </Badge>

  <!-- 自定义状态点 -->
  <Badge status="success" text="成功" :class-names="{ dot: 'my-dot', text: 'my-text' }" />

  <!-- 自定义根容器 -->
  <Badge :count="99" :class-names="{ root: 'my-badge-root' }">
    <Avatar shape="square" />
  </Badge>
</template>

<style scoped>
:deep(.my-indicator) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  font-weight: bold;
}

:deep(.my-dot) {
  width: 12px;
  height: 12px;
  box-shadow: 0 0 8px rgba(82, 196, 26, 0.6);
  animation: pulse 1.5s ease-in-out infinite;
}

:deep(.my-text) {
  font-weight: 600;
  font-size: 14px;
}

:deep(.my-badge-root) {
  padding: 4px;
  border-radius: 8px;
  background: #f0f5ff;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 8px rgba(82, 196, 26, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(82, 196, 26, 1);
  }
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制数字徽标 -->
  <Badge
    :count="12"
    :styles="{
      indicator: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '14px' },
    }"
  >
    <Avatar shape="square" />
  </Badge>

  <!-- 自定义状态点颜色 -->
  <Badge
    status="success"
    text="成功"
    :styles="{
      dot: { width: '12px', height: '12px', boxShadow: '0 0 8px rgba(82, 196, 26, 0.6)' },
      text: { fontWeight: 600, fontSize: '14px' },
    }"
  />

  <!-- 组合使用 -->
  <Badge
    :count="5"
    :styles="{
      root: { padding: '4px', borderRadius: '8px', background: '#f0f5ff' },
      indicator: { fontSize: '16px' },
    }"
  >
    <Avatar shape="square" />
  </Badge>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- Badge 有两种渲染模式：
  - **count/dot 模式**：`indicator` 应用于 `<sup class="hmfw-badge-count">` 元素
  - **status/color 独立模式**：`dot` 和 `text` 分别应用于状态点和文本
- `styles.indicator` 会与组件内部计算的 offset/color 样式合并，用户样式优先
- `styles.dot` 会与组件内部计算的 color 样式合并，用户样式优先
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-badge-status`）合并

## 设计 Token

Badge 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                      | 说明       | 默认值             |
| ------------------------------- | ---------- | ------------------ |
| `--hmfw-color-error`            | 错误状态色 | `#ff4d4f`          |
| `--hmfw-color-primary`          | 主题色     | `#1677ff`          |
| `--hmfw-color-success`          | 成功状态色 | `#52c41a`          |
| `--hmfw-color-text`             | 主文本色   | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-placeholder` | 占位文本色 | `rgba(0,0,0,0.25)` |
| `--hmfw-color-warning`          | 警告状态色 | `#faad14`          |
| `--hmfw-font-size-base`         | 基础字号   | `14px`             |
