# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭

## 代码演示

### 四种类型

共有四种样式 success、info、warning、error。

<DemoBlock title="四种类型" :source="AlertTypesSource">
  <AlertTypes />
</DemoBlock>

### 带描述

含有辅助性文字介绍的警告提示。

<DemoBlock title="带描述" :source="AlertDescriptionSource">
  <AlertDescription />
</DemoBlock>

### 可关闭

显示关闭按钮，点击可关闭警告提示。

<DemoBlock title="可关闭" :source="AlertClosableSource">
  <AlertClosable />
</DemoBlock>

### 填充样式

通过 `variant="filled"` 使用更强的背景填充。

<DemoBlock title="填充样式" :source="AlertVariantSource">
  <AlertVariant />
</DemoBlock>

### 顶部公告

通过 `banner` 用作顶部公告，默认显示图标且类型为 warning。

<DemoBlock title="顶部公告" :source="AlertBannerSource">
  <AlertBanner />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对 root、icon、section、title、description、actions、closeIcon 等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="AlertClassNamesSource">
  <AlertClassNames />
</DemoBlock>

## API

### Alert Props

| 参数        | 说明                                                                             | 类型                                          | 默认值                                |
| ----------- | -------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------- |
| type        | 指定警告提示的样式                                                               | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'`（banner 模式为 `'warning'`） |
| variant     | 样式变体                                                                         | `'outlined' \| 'filled'`                      | `'outlined'`                          |
| title       | 警告提示内容                                                                     | `string`                                      | -                                     |
| description | 警告提示的辅助性文字介绍                                                         | `string`                                      | -                                     |
| showIcon    | 是否显示辅助图标（banner 模式默认 `true`）                                       | `boolean`                                     | `false`                               |
| icon        | 自定义图标（`showIcon` 为 `true` 时有效）                                        | `VNode \| slot`                               | -                                     |
| closable    | 是否显示关闭按钮，可传对象自定义图标与无障碍标签                                 | `boolean \| { closeIcon?, 'aria-label'? }`    | `false`                               |
| action      | 自定义操作项                                                                     | `VNode \| slot`                               | -                                     |
| role        | 根节点 `role` 属性                                                               | `string`                                      | `'alert'`                             |
| banner      | 是否用作顶部公告                                                                 | `boolean`                                     | `false`                               |
| classNames  | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `AlertClassNames`                             | -                                     |
| styles      | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `AlertStyles`                                 | -                                     |

### Alert Slots

| 名称        | 说明           |
| ----------- | -------------- |
| title       | 标题内容       |
| description | 辅助性文字介绍 |
| icon        | 自定义图标     |
| closeIcon   | 自定义关闭按钮 |
| action      | 自定义操作项   |

### Alert Events

| 事件名     | 说明                         | 回调参数                  |
| ---------- | ---------------------------- | ------------------------- |
| close      | 关闭时触发的回调函数         | `(e: MouseEvent) => void` |
| afterClose | 关闭动画结束后触发的回调函数 | `() => void`              |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对警告提示的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface AlertClassNames {
  root?: string // 警告提示根容器
  icon?: string // 状态图标容器
  section?: string // 标题与描述的内容区
  title?: string // 标题文本
  description?: string // 辅助描述文本
  actions?: string // 自定义操作项容器
  closeIcon?: string // 关闭按钮
}

interface AlertStyles {
  root?: CSSProperties
  icon?: CSSProperties
  section?: CSSProperties
  title?: CSSProperties
  description?: CSSProperties
  actions?: CSSProperties
  closeIcon?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-alert hmfw-alert-info hmfw-alert-outlined">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-alert-icon">
    <!-- ↑ classNames.icon / styles.icon 应用于此（showIcon 为 true 时渲染） -->
    <svg>...</svg>
  </span>
  <div class="hmfw-alert-section">
    <!-- ↑ classNames.section / styles.section 应用于此 -->
    <div class="hmfw-alert-title">
      <!-- ↑ classNames.title / styles.title 应用于此 -->
      标题文本
    </div>
    <div class="hmfw-alert-description">
      <!-- ↑ classNames.description / styles.description 应用于此（有 description 时渲染） -->
      辅助描述文本
    </div>
  </div>
  <div class="hmfw-alert-actions">
    <!-- ↑ classNames.actions / styles.actions 应用于此（有 action 时渲染） -->
    <button>操作</button>
  </div>
  <button class="hmfw-alert-close-icon">
    <!-- ↑ classNames.closeIcon / styles.closeIcon 应用于此（closable 时渲染） -->
    <svg>...</svg>
  </button>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <Alert type="info" title="系统通知" closable :class-names="{ root: 'my-alert-root', closeIcon: 'my-alert-close' }" />
</template>

<style scoped>
:deep(.my-alert-root) {
  background: #f0f5ff;
  border: 1px solid #adc6ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

:deep(.my-alert-close:hover) {
  transform: rotate(90deg);
  transition: transform 0.3s;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <Alert
    type="error"
    show-icon
    title="请求失败"
    description="服务暂时不可用，请稍后重试。"
    closable
    :styles="{
      root: { borderRadius: '10px', borderColor: '#ff7875' },
      title: { fontWeight: 700, color: '#cf1322' },
      icon: { fontSize: '22px' },
      closeIcon: { color: '#cf1322' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `classNames.icon` 仅在 `showIcon` 为 `true`（或 banner 模式默认开启）时生效
- `classNames.description` 仅在传入 `description` 时生效，无描述时该节点不渲染
- `classNames.actions` 仅在传入 `action` 时生效
- `classNames.closeIcon` 仅在 `closable` 为真值时生效
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-alert-error`、`.hmfw-alert-banner`）合并

## 设计 Token

Alert 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。
