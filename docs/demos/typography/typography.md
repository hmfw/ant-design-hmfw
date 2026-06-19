# Typography 排版

文本的基本格式。

## 何时使用

- 当需要展示标题、段落、列表内容时
- 当需要对文字进行强调、标记、删除线等操作时
- 当需要展示代码片段时

## 代码演示

### 标题

通过 `level` 属性设置标题级别。

<DemoBlock title="标题" :source="TypographyTitleSource">
  <TypographyTitle />
</DemoBlock>

### 文本类型

通过 `type` 属性设置文本类型。

<DemoBlock title="文本类型" :source="TypographyTextSource">
  <TypographyText />
</DemoBlock>

### 文本修饰

支持多种文本修饰样式。

<DemoBlock title="文本修饰" :source="TypographyDecorationsSource">
  <TypographyDecorations />
</DemoBlock>

### 段落

段落组件以 `<p>` 渲染。

<DemoBlock title="段落" :source="TypographyParagraphSource">
  <TypographyParagraph />
</DemoBlock>

### 链接

使用 `Link` 渲染超链接，支持 `disabled`。

<DemoBlock title="链接" :source="TypographyLinkSource">
  <TypographyLink />
</DemoBlock>

### 可复制

通过 `copyable` 添加复制按钮，对象形式可自定义复制内容与回调。

<DemoBlock title="可复制" :source="TypographyCopyableSource">
  <TypographyCopyable />
</DemoBlock>

### 省略

通过 `ellipsis` 设置单行省略。

<DemoBlock title="省略" :source="TypographyEllipsisSource">
  <TypographyEllipsis />
</DemoBlock>

### 省略 Tooltip 与回调

通过 `ellipsis.tooltip` 在省略时显示完整内容（支持自定义 Tooltip 配置），通过 `ellipsis.onEllipsis` 监听省略状态。

<DemoBlock title="省略 Tooltip 与回调" :source="TypographyEllipsisTooltipSource">
  <TypographyEllipsisTooltip />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TypographyClassNamesSource">
  <TypographyClassNames />
</DemoBlock>

## API

### 通用 Props（Text / Title / Paragraph / Link 共享）

| 参数      | 说明                                                                                    | 类型                                                | 默认值  |
| --------- | --------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| type      | 文本类型                                                                                | `'secondary' \| 'success' \| 'warning' \| 'danger'` | -       |
| disabled  | 禁用状态                                                                                | `boolean`                                           | `false` |
| mark      | 标记样式                                                                                | `boolean`                                           | `false` |
| code      | 代码样式                                                                                | `boolean`                                           | `false` |
| keyboard  | 键盘样式                                                                                | `boolean`                                           | `false` |
| underline | 下划线                                                                                  | `boolean`                                           | `false` |
| delete    | 删除线                                                                                  | `boolean`                                           | `false` |
| strong    | 加粗                                                                                    | `boolean`                                           | `false` |
| italic    | 斜体                                                                                    | `boolean`                                           | `false` |
| copyable  | 是否可复制，对象形式 `{ text?, onCopy?, tooltips?, icon? }`                             | `boolean \| CopyableConfig`                         | `false` |
| ellipsis  | 单行省略；对象形式 `{ rows?, tooltip?, onEllipsis? }` 支持多行省略、悬停 Tooltip 与回调 | `boolean \| EllipsisConfig`                         | `false` |

### Text Props

继承通用 Props，额外：

| 参数       | 说明                                                                             | 类型             | 默认值 |
| ---------- | -------------------------------------------------------------------------------- | ---------------- | ------ |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TextClassNames` | -      |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TextStyles`     | -      |

### Title Props

继承通用 Props，额外：

| 参数       | 说明                                                                             | 类型                    | 默认值 |
| ---------- | -------------------------------------------------------------------------------- | ----------------------- | ------ |
| level      | 标题级别                                                                         | `1 \| 2 \| 3 \| 4 \| 5` | `1`    |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TitleClassNames`       | -      |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TitleStyles`           | -      |

### Paragraph Props

继承通用 Props，额外：

| 参数       | 说明                                                                             | 类型                  | 默认值 |
| ---------- | -------------------------------------------------------------------------------- | --------------------- | ------ |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ParagraphClassNames` | -      |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ParagraphStyles`     | -      |

### Link Props

继承通用 Props，额外：

| 参数       | 说明                                                                             | 类型             | 默认值 |
| ---------- | -------------------------------------------------------------------------------- | ---------------- | ------ |
| href       | 链接地址                                                                         | `string`         | -      |
| target     | 链接打开方式                                                                     | `string`         | -      |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `LinkClassNames` | -      |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `LinkStyles`     | -      |

### CopyableConfig

| 参数     | 说明                                                     | 类型                        | 默认值      |
| -------- | -------------------------------------------------------- | --------------------------- | ----------- |
| text     | 自定义复制内容                                           | `string`                    | 节点文本    |
| onCopy   | 复制回调                                                 | `(e: MouseEvent) => void`   | -           |
| tooltips | Tooltip 文案 `[复制前, 复制后]`，传 `false` 关闭 Tooltip | `false \| [string, string]` | 跟随 locale |
| icon     | 自定义图标 `[复制前, 复制后]`                            | `[VNode, VNode]`            | -           |

### EllipsisConfig

| 参数       | 说明                                                                                    | 类型                                          | 默认值 |
| ---------- | --------------------------------------------------------------------------------------- | --------------------------------------------- | ------ |
| rows       | 最多显示行数                                                                            | `number`                                      | `1`    |
| tooltip    | 省略时显示 Tooltip：`true` 用纯文本，字符串/数字自定义文案，对象传入完整 `TooltipProps` | `boolean \| string \| number \| TooltipProps` | -      |
| onEllipsis | 省略状态变化回调                                                                        | `(ellipsis: boolean) => void`                 | -      |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Typography 组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

// Text
interface TextClassNames {
  root?: string // 根节点 span.hmfw-typography
  copy?: string // 复制按钮 button.hmfw-typography-copy
}

interface TextStyles {
  root?: CSSProperties
  copy?: CSSProperties
}

// Title
interface TitleClassNames {
  root?: string // 根节点 h1-h5.hmfw-typography
  copy?: string // 复制按钮 button.hmfw-typography-copy
}

interface TitleStyles {
  root?: CSSProperties
  copy?: CSSProperties
}

// Paragraph
interface ParagraphClassNames {
  root?: string // 根节点 p.hmfw-typography
  copy?: string // 复制按钮 button.hmfw-typography-copy
}

interface ParagraphStyles {
  root?: CSSProperties
  copy?: CSSProperties
}

// Link
interface LinkClassNames {
  root?: string // 根节点 a.hmfw-typography-link
  copy?: string // 复制按钮 button.hmfw-typography-copy
}

interface LinkStyles {
  root?: CSSProperties
  copy?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- Text -->
<span class="hmfw-typography">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  文本内容
  <button class="hmfw-typography-copy">
    <!-- ↑ classNames.copy / styles.copy 应用于此 -->
    <svg>...</svg>
  </button>
</span>

<!-- Title -->
<h1 class="hmfw-typography hmfw-typography-h1">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  标题内容
  <button class="hmfw-typography-copy">
    <!-- ↑ classNames.copy / styles.copy 应用于此 -->
    <svg>...</svg>
  </button>
</h1>

<!-- Paragraph -->
<p class="hmfw-typography">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  段落内容
  <button class="hmfw-typography-copy">
    <!-- ↑ classNames.copy / styles.copy 应用于此 -->
    <svg>...</svg>
  </button>
</p>

<!-- Link -->
<a class="hmfw-typography-link" href="...">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  链接内容
  <button class="hmfw-typography-copy">
    <!-- ↑ classNames.copy / styles.copy 应用于此 -->
    <svg>...</svg>
  </button>
</a>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- Text 自定义根节点 -->
  <Text :class-names="{ root: 'custom-text' }"> 渐变文字效果 </Text>

  <!-- Title 自定义复制按钮 -->
  <Title :level="3" copyable :class-names="{ copy: 'custom-copy-btn' }"> 可复制的标题 </Title>

  <!-- Paragraph 组合使用 -->
  <Paragraph copyable :class-names="{ root: 'custom-paragraph', copy: 'custom-copy' }">
    这是一段自定义样式的段落。
  </Paragraph>
</template>

<style scoped>
:deep(.custom-text) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-weight: 600;
}

:deep(.custom-copy-btn) {
  padding: 4px 8px;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white !important;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.custom-copy-btn:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

:deep(.custom-paragraph) {
  padding: 16px;
  background: linear-gradient(to right, #f0f5ff, #fff);
  border-left: 4px solid #1677ff;
  border-radius: 4px;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制文字 -->
  <Text
    :styles="{
      root: {
        fontSize: '18px',
        fontWeight: 600,
        color: '#722ed1',
      },
    }"
  >
    紫色加粗文字
  </Text>

  <!-- 内联样式控制复制按钮 -->
  <Paragraph
    copyable
    :styles="{
      copy: { fontSize: '18px', color: '#faad14' },
    }"
  >
    自定义复制按钮样式
  </Paragraph>

  <!-- 组合使用 -->
  <Link
    href="https://github.com"
    :styles="{
      root: {
        fontSize: '16px',
        textDecoration: 'underline',
        textDecorationColor: '#52c41a',
        textDecorationThickness: '2px',
      },
    }"
  >
    GitHub 官网
  </Link>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `copy` 仅在 `copyable` 为 `true` 时渲染，否则该 key 不生效
- Text、Title、Paragraph、Link 各自有独立的 ClassNames/Styles 接口，类型不通用
- 四个子组件的语义化 API keys 完全相同（`root` 和 `copy`），但应用的 DOM 元素不同（Text 是 `<span>`，Title 是 `<h1-h5>`，Paragraph 是 `<p>`，Link 是 `<a>`）
- 使用 `background-clip: text` 实现渐变文字时，需要配合 `-webkit-text-fill-color: transparent` 和 `-webkit-background-clip: text`

## 设计 Token

Typography 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。
