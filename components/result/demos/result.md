# Result 结果

用于反馈一系列操作任务的处理结果。

## 何时使用

- 当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用

## 代码演示

### 成功结果

成功的结果。

<DemoBlock title="成功结果" :source="ResultSuccessSource">
  <ResultSuccess />
</DemoBlock>

### 错误结果

复杂的错误反馈。

<DemoBlock title="错误结果" :source="ResultErrorSource">
  <ResultError />
</DemoBlock>

### 404 页面

此页面不存在。

<DemoBlock title="404 页面" :source="Result404Source">
  <Result404 />
</DemoBlock>

### 各类状态

`info` / `warning` 普通状态与 `403` / `500` 异常插画。

<DemoBlock title="各类状态" :source="ResultStatusSource">
  <ResultStatus />
</DemoBlock>

### 自定义图标

通过 `icon` 插槽替换默认图标，或将 `icon` 设为 `false` 隐藏图标。

<DemoBlock title="自定义图标" :source="ResultCustomIconSource">
  <ResultCustomIcon />
</DemoBlock>

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对结果页的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface ResultClassNames {
  root?: string // 根节点 div.hmfw-result
  icon?: string // 图标/插画容器 div.hmfw-result-icon
  title?: string // 标题 div.hmfw-result-title
  subtitle?: string // 副标题 div.hmfw-result-subtitle
  extra?: string // 操作区 div.hmfw-result-extra
  content?: string // 内容主体 div.hmfw-result-body（default 插槽）
}

interface ResultStyles {
  root?: CSSProperties
  icon?: CSSProperties
  title?: CSSProperties
  subtitle?: CSSProperties
  extra?: CSSProperties
  content?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<ResultSemantic />

### DOM 结构与 className 映射

```html
<div class="hmfw-result hmfw-result-success">
  <!-- ↑ classNames.root / styles.root（附带 status 类，如 .hmfw-result-success） -->
  <div class="hmfw-result-icon"><svg>...</svg></div>
  <!-- ↑ classNames.icon / styles.icon（状态图标或 403/404/500 异常插画） -->
  <div class="hmfw-result-title">操作成功</div>
  <!-- ↑ classNames.title / styles.title（设置 title 时渲染） -->
  <div class="hmfw-result-subtitle">订单已提交</div>
  <!-- ↑ classNames.subtitle / styles.subtitle（设置 subTitle 时渲染） -->
  <div class="hmfw-result-extra">...</div>
  <!-- ↑ classNames.extra / styles.extra（设置 extra 时渲染） -->
  <div class="hmfw-result-body">...</div>
  <!-- ↑ classNames.content / styles.content（提供默认插槽内容时渲染） -->
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Result status="success" title="操作成功" :class-names="{ root: 'custom-root', title: 'custom-title' }" />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Result
    status="info"
    title="内联样式"
    sub-title="通过 styles 控制各节点"
    :styles="{ title: { color: '#1677ff' }, subtitle: { color: '#8c8c8c' } }"
  />

  <!-- 组合：classNames 与 styles 混用 -->
  <Result
    status="success"
    title="组合样式"
    :class-names="{ root: 'custom-root' }"
    :styles="{ content: { background: '#f6ffed' } }"
  >
    <p>补充说明内容</p>
  </Result>
</template>

<style scoped>
:deep(.custom-root) {
  border: 1px solid var(--hmfw-color-success-border);
  border-radius: 8px;
}
:deep(.custom-title) {
  letter-spacing: 1px;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-result`）合并，不会互相覆盖

## API

### Result Props

| 参数       | 说明                                                             | 类型                                                                     | 默认值   |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------ | -------- |
| status     | 结果的状态，决定图标和颜色；`404/403/500` 渲染为异常插画         | `'success' \| 'error' \| 'warning' \| 'info' \| '404' \| '403' \| '500'` | `'info'` |
| title      | 标题                                                             | `string`                                                                 | -        |
| subTitle   | 副标题                                                           | `string`                                                                 | -        |
| icon       | 自定义图标；设为 `false` 时隐藏图标（异常状态插画不受影响）      | `VNodeChild \| false`                                                    | -        |
| extra      | 操作区内容（`extra` 插槽优先级更高）                             | `VNodeChild`                                                             | -        |
| classNames | 各部分语义化 className（root/icon/title/subtitle/extra/content） | `ResultClassNames`                                                       | -        |
| styles     | 各部分语义化 style（root/icon/title/subtitle/extra/content）     | `ResultStyles`                                                           | -        |

### Result Slots

| 名称     | 说明         |
| -------- | ------------ |
| icon     | 自定义图标   |
| title    | 自定义标题   |
| subTitle | 自定义副标题 |
| extra    | 操作区       |
| default  | 补充说明内容 |

## 设计 Token

Result 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                      | 说明             | 默认值             |
| ------------------------------- | ---------------- | ------------------ |
| `--hmfw-color-text-heading`     | 标题文本色       | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-description` | 副标题文本色     | `rgba(0,0,0,0.45)` |
| `--hmfw-color-fill-alter`       | 内容主体背景色   | `rgba(0,0,0,0.02)` |
| `--hmfw-color-success`          | 成功状态图标色   | `#52c41a`          |
| `--hmfw-color-error`            | 错误状态图标色   | `#ff4d4f`          |
| `--hmfw-color-info`             | 信息状态图标色   | `#1677ff`          |
| `--hmfw-color-warning`          | 警告状态图标色   | `#faad14`          |
| `--hmfw-border-radius-lg`       | 内容主体圆角     | `8px`              |
| `--hmfw-line-height`            | 标题、副标题行高 | `1.5714`           |

### 组件 Token

组件专属变量定义在 `.hmfw-result` 上，可直接覆盖以定制单个组件的尺寸与插画配色。

| Token 名称                         | 说明                                             | 默认值      |
| ---------------------------------- | ------------------------------------------------ | ----------- |
| `--hmfw-result-icon-font-size`     | 状态图标字号（派生自 `font-size-heading-3 × 3`） | `72px`      |
| `--hmfw-result-title-font-size`    | 标题字号（派生自 `font-size-heading-3`）         | `24px`      |
| `--hmfw-result-subtitle-font-size` | 副标题字号（派生自 `font-size-base`）            | `14px`      |
| `--hmfw-result-padding`            | 根节点内边距                                     | `48px 32px` |
| `--hmfw-result-content-padding`    | 内容主体内边距                                   | `24px 40px` |
| `--hmfw-result-img-shadow`         | 异常插画阴影色                                   | `#f5f5f5`   |
| `--hmfw-result-img-text`           | 异常插画文字色                                   | `#bfbfbf`   |

**说明**：异常插画的专属配色（`--hmfw-result-img-*`）支持暗黑模式，通过媒体查询（`prefers-color-scheme: dark`）或显式主题类（`data-theme="dark"` / `.hmfw-theme-dark`）自动切换。
