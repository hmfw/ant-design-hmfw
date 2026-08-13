# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割
- 对行内文字/链接进行分割，例如表格的操作列

## 代码演示

### 水平分割线

默认为水平分割线，可在中间加入文字。

<DemoBlock title="水平分割线" :source="DividerBasicSource">
  <DividerBasic />
</DemoBlock>

### 带文字的分割线

通过 `orientation` 属性设置文字位置。

<DemoBlock title="带文字的分割线" :source="DividerWithTextSource">
  <DividerWithText />
</DemoBlock>

### 正文样式文字

`plain` 属性使分割线中的文字以正文样式（普通字重、基础字号）显示，而非默认的标题样式（500 字重、大字号）。

<DemoBlock title="正文样式文字" :source="DividerPlainSource">
  <DividerPlain />
</DemoBlock>

### 带边距的文字分割线

通过 `orientationMargin` 配合 `orientation="left" | "right"` 控制文字与分割线边框的距离。

<DemoBlock title="带边距的文字分割线" :source="DividerOrientationMarginSource">
  <DividerOrientationMargin />
</DemoBlock>

### 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

<DemoBlock title="垂直分割线" :source="DividerVerticalSource">
  <DividerVertical />
</DemoBlock>

### 分割线样式

通过 `variant` 设置分割线为实线、虚线或点线。`dashed` 为 `variant="dashed"` 的简写。

<DemoBlock title="分割线样式" :source="DividerVariantSource">
  <DividerVariant />
</DemoBlock>

### 不同间距

通过 `size` 设置水平分割线的上下间距，可选 `small`、`middle`、`large`（默认）。

<DemoBlock title="不同间距" :source="DividerSizeSource">
  <DividerSize />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="DividerClassNamesSource">
  <DividerClassNames />
</DemoBlock>

## API

### Divider Props

| 参数              | 说明                                                                                          | 类型                              | 默认值         |
| ----------------- | --------------------------------------------------------------------------------------------- | --------------------------------- | -------------- |
| type              | 水平还是垂直类型                                                                              | `'horizontal' \| 'vertical'`      | `'horizontal'` |
| orientation       | 分割线标题的位置                                                                              | `'left' \| 'center' \| 'right'`   | `'center'`     |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除分割线，同时 `orientation` 必须为 `left` 或 `right` | `string \| number`                | -              |
| dashed            | 是否虚线，等价于 `variant="dashed"`                                                           | `boolean`                         | `false`        |
| variant           | 分割线样式，优先级高于 `dashed`                                                               | `'solid' \| 'dashed' \| 'dotted'` | `'solid'`      |
| plain             | 文字是否显示为普通正文样式                                                                    | `boolean`                         | `false`        |
| size              | 分割线间距大小（仅水平分割线生效）                                                            | `'small' \| 'middle' \| 'large'`  | `'large'`      |
| classNames        | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style)              | `DividerClassNames`               | -              |
| styles            | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style)              | `DividerStyles`                   | -              |

### Divider Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 嵌入分割线中的内容 |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface DividerClassNames {
  root?: string // 分割线根容器
  rail?: string // 文字两侧的线条
  content?: string // 分割线中的文字容器
}

interface DividerStyles {
  root?: CSSProperties
  rail?: CSSProperties
  content?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-divider">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-divider-rail hmfw-divider-rail-start">
    <!-- ↑ classNames.rail / styles.rail 应用于此 -->
  </div>
  <span class="hmfw-divider-inner-text">
    <!-- ↑ classNames.content / styles.content 应用于此 -->
    文字内容
  </span>
  <div class="hmfw-divider-rail hmfw-divider-rail-end">
    <!-- ↑ classNames.rail / styles.rail 应用于此 -->
  </div>
</div>
```

### 使用 classNames

```vue
<template>
  <div>
    <p>内容上方</p>
    <Divider :class-names="{ root: 'custom-divider', rail: 'custom-rail', content: 'custom-text' }">
      自定义文字
    </Divider>
    <p>内容下方</p>
  </div>
</template>

<style scoped>
:deep(.custom-divider) {
  border-top: 2px solid transparent;
  border-image: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-image-slice: 1;
}

:deep(.custom-rail) {
  border-block-start-color: #764ba2;
}

:deep(.custom-text) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}
</style>
```

### 使用 styles

```vue
<template>
  <div>
    <p>内容上方</p>
    <Divider
      :styles="{
        root: { borderColor: '#1890ff', borderWidth: '2px', margin: '32px 0' },
        rail: { opacity: 0.6 },
        content: { fontSize: '16px', color: '#1890ff', fontWeight: 'bold' },
      }"
    >
      动态样式文字
    </Divider>
    <p>内容下方</p>
  </div>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `rail` 和 `content` 只在分割线有文字内容（通过默认插槽传入）时生效
- `rail` 会同时作用于文字左右两侧的线条
- 垂直分割线（`type="vertical"`）不支持文字内容，因此仅 `root` 生效

---

## 设计 Token

Divider 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                    | 说明                        | 默认值             |
| ----------------------------- | --------------------------- | ------------------ |
| `--hmfw-color-text`           | 分割线文字颜色              | `rgba(0,0,0,0.88)` |
| `--hmfw-color-fill-secondary` | 分割线边框颜色              | `rgba(0,0,0,0.06)` |
| `--hmfw-font-size`            | 基础文字大小                | `14px`             |
| `--hmfw-font-size-lg`         | 带文字分割线的文字大小      | `16px`             |
| `--hmfw-font-family`          | 字体                        | 系统字体栈         |
| `--hmfw-line-height`          | 行高                        | `1.5714`           |
| `--hmfw-margin-lg`            | 默认水平分割线上下间距      | `24px`             |
| `--hmfw-margin`               | 中间距 / 带文字分割线间距   | `16px`             |
| `--hmfw-margin-xs`            | 小间距 / 垂直分割线水平间距 | `8px`              |

自定义示例：

```vue
<ConfigProvider :theme="{ colorFillSecondary: 'rgba(0,0,0,0.15)', marginLG: 32 }">
  <Divider>分割线</Divider>
</ConfigProvider>
```
