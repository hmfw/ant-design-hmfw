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

### 显示图标

通过 `show-icon` 显示辅助图标，帮助用户快速识别警告提示的类型。

<DemoBlock title="显示图标" :source="AlertShowIconSource">
  <AlertShowIcon />
</DemoBlock>

### 自定义图标

通过 `icon` 插槽可以自定义图标，替换默认的状态图标。

<DemoBlock title="自定义图标" :source="AlertCustomIconSource">
  <AlertCustomIcon />
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

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<AlertSemantic />

### DOM 结构与 className 映射

```html
<div class="hmfw-alert hmfw-alert-info hmfw-alert-outlined">
  <!-- ↑ classNames.root / styles.root -->
  <span class="hmfw-alert-icon">
    <!-- ↑ showIcon 为 true 时渲染，classNames.icon / styles.icon -->
    <svg>...</svg>
  </span>
  <div class="hmfw-alert-section">
    <!-- ↑ classNames.section / styles.section -->
    <div class="hmfw-alert-title">
      <!-- ↑ classNames.title / styles.title -->
      标题文本
    </div>
    <div class="hmfw-alert-description">
      <!-- ↑ 有 description 时渲染，classNames.description / styles.description -->
      辅助描述文本
    </div>
  </div>
  <div class="hmfw-alert-actions">
    <!-- ↑ 有 action 时渲染，classNames.actions / styles.actions -->
    <button>操作</button>
  </div>
  <button class="hmfw-alert-close-icon">
    <!-- ↑ closable 时渲染，classNames.closeIcon / styles.closeIcon -->
    <svg>...</svg>
  </button>
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Alert type="info" title="系统通知" closable :class-names="{ root: 'my-alert-root', closeIcon: 'my-alert-close' }" />

  <!-- styles：内联样式，优先级高于 classNames -->
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

  <!-- 组合：classNames 与 styles 混用 -->
  <Alert
    type="warning"
    show-icon
    title="配置即将过期"
    :class-names="{ root: 'my-alert-root' }"
    :styles="{ title: { fontWeight: 700 }, icon: { fontSize: '20px' } }"
  />
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

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-alert-error`）合并，不会互相覆盖

## 设计 Token

Alert 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                      | 说明           | 默认值             |
| ------------------------------- | -------------- | ------------------ |
| `--hmfw-color-success`          | 成功状态主色   | `#52c41a`          |
| `--hmfw-color-success-bg`       | 成功状态背景色 | `#eef9e8`          |
| `--hmfw-color-success-bg-hover` | 成功填充背景色 | `#dcf3d1`          |
| `--hmfw-color-success-border`   | 成功状态边框色 | `#a9e28d`          |
| `--hmfw-color-info`             | 信息状态主色   | `#1677ff`          |
| `--hmfw-color-info-bg`          | 信息状态背景色 | `#e8f1ff`          |
| `--hmfw-color-info-bg-hover`    | 信息填充背景色 | `#d0e4ff`          |
| `--hmfw-color-info-border`      | 信息状态边框色 | `#8bbbff`          |
| `--hmfw-color-warning`          | 警告状态主色   | `#faad14`          |
| `--hmfw-color-warning-bg`       | 警告状态背景色 | `#fff7e8`          |
| `--hmfw-color-warning-bg-hover` | 警告填充背景色 | `#feefd0`          |
| `--hmfw-color-warning-border`   | 警告状态边框色 | `#fdd68a`          |
| `--hmfw-color-error`            | 错误状态主色   | `#ff4d4f`          |
| `--hmfw-color-error-bg`         | 错误状态背景色 | `#ffeded`          |
| `--hmfw-color-error-bg-hover`   | 错误填充背景色 | `#ffdbdc`          |
| `--hmfw-color-error-border`     | 错误状态边框色 | `#ffa6a7`          |
| `--hmfw-color-text-heading`     | 标题文本颜色   | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary`   | 次要文本颜色   | `rgba(0,0,0,0.65)` |
| `--hmfw-color-text-tertiary`    | 三级文本颜色   | `rgba(0,0,0,0.45)` |
| `--hmfw-padding-xs`             | 极小内边距     | `8px`              |
| `--hmfw-padding`                | 标准内边距     | `12px`             |
| `--hmfw-padding-md`             | 中等内边距     | `16px`             |
| `--hmfw-padding-lg`             | 大内边距       | `24px`             |
| `--hmfw-margin-xs`              | 极小外边距     | `8px`              |
| `--hmfw-margin-sm`              | 小外边距       | `12px`             |
| `--hmfw-border-radius`          | 圆角大小       | `6px`              |
| `--hmfw-font-size`              | 标准字号       | `14px`             |
| `--hmfw-font-size-lg`           | 大字号         | `16px`             |
| `--hmfw-font-size-heading-3`    | 三级标题字号   | `24px`             |
| `--hmfw-line-height`            | 行高           | `1.5714`           |
| `--hmfw-motion-duration-mid`    | 中等动画时长   | `0.2s`             |
| `--hmfw-motion-duration-slow`   | 慢速动画时长   | `0.3s`             |

### 组件 Token

组件专属变量定义在 `.hmfw-alert` 上，可直接覆盖以定制单个组件的尺寸。

| Token 名称                         | 说明               | 默认值                                   |
| ---------------------------------- | ------------------ | ---------------------------------------- |
| `--hmfw-alert-icon-size`           | 默认图标尺寸       | `16px`                                   |
| `--hmfw-alert-icon-size-with-desc` | 带描述时的图标尺寸 | `var(--hmfw-font-size-heading-3)` (24px) |

**说明**：

- **outlined 变体**（默认）：使用 `colorXxxBg` 作为背景色，`colorXxxBorder` 作为边框色
- **filled 变体**：使用 `colorXxxBgHover` 作为更深的背景色，边框透明
- **图标颜色**：直接使用状态主色（`colorSuccess` / `colorInfo` / `colorWarning` / `colorError`）
- **组件级 Token**：带描述时的图标尺寸派生自 `fontSizeHeading3`，与 AntD v6 的 `prepareComponentToken` 规则一致
