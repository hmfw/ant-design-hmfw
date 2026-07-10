# Space 间距

设置组件之间的间距。

## 何时使用

- 避免组件紧贴在一起，拉开统一的空间
- 适合行内元素的水平间距
- 可以设置各种水平对齐方式

## 代码演示

### 基础用法

相邻组件水平间距。

<DemoBlock title="基础用法" :source="SpaceBasicSource">
  <SpaceBasic />
</DemoBlock>

### 垂直间距

通过 `direction` 属性设置垂直方向间距。

<DemoBlock title="垂直间距" :source="SpaceVerticalSource">
  <SpaceVertical />
</DemoBlock>

### 自定义大小

通过 `size` 属性设置间距大小，支持预设值和数字。

<DemoBlock title="自定义大小" :source="SpaceSizeSource">
  <SpaceSize />
</DemoBlock>

### 分隔符

通过 `separator` 属性设置分隔符。

<DemoBlock title="分隔符" :source="SpaceSplitSource">
  <SpaceSplit />
</DemoBlock>

### 自动换行

通过 `wrap` 属性允许子元素换行，换行后行间距由 `size` 的垂直分量控制。

<DemoBlock title="自动换行" :source="SpaceWrapSource">
  <SpaceWrap />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="SpaceClassNamesSource">
  <SpaceClassNames />
</DemoBlock>

## API

### Space Props

| 参数       | 说明                                                                             | 类型                                                           | 默认值         |
| ---------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------- |
| size       | 间距大小，数组形式表示 `[水平, 垂直]`                                            | `'small' \| 'middle' \| 'large' \| number \| [number, number]` | `'small'`      |
| direction  | 间距方向                                                                         | `'horizontal' \| 'vertical'`                                   | `'horizontal'` |
| vertical   | `direction="vertical"` 的简写                                                    | `boolean`                                                      | `false`        |
| align      | 对齐方式                                                                         | `'start' \| 'end' \| 'center' \| 'baseline'`                   | -              |
| wrap       | 是否自动换行，仅水平方向有效                                                     | `boolean`                                                      | `false`        |
| separator  | 设置分隔符                                                                       | `VNode \| string`                                              | -              |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SpaceClassNames`                                              | -              |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `SpaceStyles`                                                  | -              |

### Space Slots

| 名称    | 说明                                        |
| ------- | ------------------------------------------- |
| default | 子元素内容                                  |
| split   | 自定义分隔符（优先级高于 `separator` prop） |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Space 组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface SpaceClassNames {
  root?: string // 根容器
  item?: string // 子元素容器
  split?: string // 分隔符容器
}

interface SpaceStyles {
  root?: CSSProperties
  item?: CSSProperties
  split?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-space hmfw-space-horizontal">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-space-item">
    <!-- ↑ classNames.item / styles.item 应用于此 -->
    <button>按钮 1</button>
  </div>
  <span class="hmfw-space-item-split">
    <!-- ↑ classNames.split / styles.split 应用于此 -->
    |
  </span>
  <div class="hmfw-space-item">
    <button>按钮 2</button>
  </div>
</div>
```

### 使用 classNames

```vue
<template>
  <Space
    separator="|"
    :class-names="{
      root: 'custom-root',
      item: 'custom-item',
      split: 'custom-split',
    }"
  >
    <span>选项 1</span>
    <span>选项 2</span>
    <span>选项 3</span>
  </Space>
</template>

<style scoped>
:deep(.custom-root) {
  padding: 16px;
  background: linear-gradient(to right, #f6ffed, #d9f7be);
  border-radius: 8px;
}

:deep(.custom-item) {
  padding: 6px 12px;
  background: white;
  border-radius: 4px;
  transition: all 0.3s ease;
}

:deep(.custom-item:hover) {
  background: #52c41a;
  color: white;
  transform: scale(1.05);
}

:deep(.custom-split) {
  color: #52c41a;
  font-size: 18px;
  font-weight: bold;
}
</style>
```

### 使用 styles

```vue
<template>
  <Space
    separator="|"
    :styles="{
      root: { padding: '12px', background: '#f0f5ff', borderRadius: '8px' },
      item: { padding: '4px 8px', background: '#e6f7ff', borderRadius: '4px' },
      split: { color: '#1890ff', fontWeight: 'bold', margin: '0 4px' },
    }"
  >
    <span>项目 A</span>
    <span>项目 B</span>
    <span>项目 C</span>
  </Space>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `split` 节点仅在设置了 `separator` prop 或 `split` 插槽时才会渲染
- 当使用 `wrap` 属性时，子元素容器会自动换行，可通过 `classNames.item` 自定义换行后的样式

## 设计 Token

Space 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。
