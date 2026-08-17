# Listy 虚拟列表

极简的虚拟滚动列表组件，专注性能和简洁性。

## 何时使用

- 需要展示大量数据（1000+ 条）时，使用虚拟滚动提升性能
- 需要简单的列表渲染，不需要 pagination、grid 等复杂功能
- 需要分组展示数据并支持粘性标题

## 代码演示

### 基础用法

最简单的列表展示。

<DemoBlock title="基础用法" :source="ListyBasicSource">
  <ListyBasic />
</DemoBlock>

### 虚拟滚动

通过 `virtual` 属性启用虚拟滚动，可流畅渲染大量数据。

<DemoBlock title="虚拟滚动" :source="ListyVirtualSource">
  <ListyVirtual />
</DemoBlock>

### 滚动控制

通过 ref 调用 `scrollTo` 方法控制滚动位置。

<DemoBlock title="滚动控制" :source="ListyScrollToSource">
  <ListyScrollTo />
</DemoBlock>

### 分组列表

使用 `groups` 属性展示分组数据，支持粘性标题。

<DemoBlock title="分组列表" :source="ListyGroupSource">
  <ListyGroup />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="ListyClassNamesSource">
  <ListyClassNames />
</DemoBlock>

## API

### Listy Props

| 参数       | 说明                                                                             | 类型                                          | 默认值         |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------------------- | -------------- |
| data       | 数据源                                                                           | `T[]`                                         | -              |
| groups     | 分组数据源（与 data 互斥）                                                       | `ListyGroupItem[]`                            | -              |
| children   | 渲染函数                                                                         | `(item: T, index: number) => VNode`           | -              |
| height     | 容器高度（必需）                                                                 | `number \| string`                            | -              |
| virtual    | 是否启用虚拟滚动                                                                 | `boolean`                                     | `false`        |
| itemHeight | 虚拟滚动模式下的项高度（px）                                                     | `number`                                      | `40`           |
| itemKey    | 数据项唯一键提取函数                                                             | `string \| ((item: T, index: number) => Key)` | -              |
| prefixCls  | 自定义前缀                                                                       | `string`                                      | `'hmfw-listy'` |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ListyClassNames`                             | -              |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ListyStyles`                                 | -              |
| onScroll   | 滚动事件                                                                         | `(event: Event) => void`                      | -              |

### ListyGroupItem

| 参数   | 说明             | 类型              | 默认值 |
| ------ | ---------------- | ----------------- | ------ |
| group  | 分组标题         | `string \| VNode` | -      |
| items  | 分组数据         | `T[]`             | -      |
| sticky | 分组是否粘性定位 | `boolean`         | `true` |

### Listy Methods

通过 ref 获取实例并调用方法：

| 方法          | 说明             | 类型                                                                      |
| ------------- | ---------------- | ------------------------------------------------------------------------- |
| scrollTo      | 滚动到指定位置   | `(config: number \| ListyScrollToConfig) => void`                         |
| getScrollInfo | 获取当前滚动信息 | `() => { scrollTop: number; scrollHeight: number; clientHeight: number }` |

### ListyScrollToConfig

| 参数   | 说明     | 类型                          | 默认值   |
| ------ | -------- | ----------------------------- | -------- |
| index  | 目标索引 | `number`                      | -        |
| align  | 对齐方式 | `'top' \| 'bottom' \| 'auto'` | `'auto'` |
| offset | 偏移量   | `number`                      | `0`      |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Listy 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface ListyClassNames {
  root?: string // 根容器
  item?: string // 列表项
  groupHeader?: string // 分组标题
}

interface ListyStyles {
  root?: CSSProperties
  item?: CSSProperties
  groupHeader?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 普通列表 -->
<div class="hmfw-listy">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <div class="hmfw-listy-item">
    <!-- ↑ classNames.item / styles.item 应用于此 -->
    列表项内容
  </div>

  <div class="hmfw-listy-item">列表项内容</div>
</div>

<!-- 分组列表 -->
<div class="hmfw-listy">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <div class="hmfw-listy-group-section">
    <!-- ↑ classNames.groupSection / styles.groupSection 应用于此 -->

    <div class="hmfw-listy-group-header hmfw-listy-group-header-sticky">
      <!-- ↑ classNames.groupHeader / styles.groupHeader 应用于此 -->
      分组标题
    </div>

    <div class="hmfw-listy-item">
      <!-- ↑ classNames.item / styles.item 应用于此 -->
      列表项内容
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <Listy
    :data="data"
    :height="400"
    :virtual="true"
    :children="renderItem"
    :class-names="{
      root: 'my-listy',
      item: 'my-item',
    }"
  />
</template>

<script setup lang="ts">
import { Listy } from '@hmfw/ant-design'

const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  title: `Item ${i}`,
}))

const renderItem = (item: any) => (
  <div>
    <div style={{ fontWeight: 500 }}>{item.title}</div>
  </div>
)
</script>

<style scoped>
:deep(.my-listy) {
  border: 2px solid #1677ff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

:deep(.my-item) {
  margin: 4px 8px;
  border-radius: 4px;
  border-left: 3px solid #1677ff;
  background: #f0f5ff;
}

:deep(.my-item:hover) {
  background: #e6f7ff;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <Listy
    :data="data"
    :height="400"
    :virtual="true"
    :children="renderItem"
    :styles="{
      root: { border: '2px solid #1677ff', borderRadius: '8px' },
      item: { background: '#f0f5ff', padding: '12px' },
    }"
  />
</template>

<script setup lang="ts">
import { Listy } from '@hmfw/ant-design'

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }))

const renderItem = (item: any) => <div>{item.title}</div>
</script>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `groupHeader` 和 `groupSection` 仅在使用 `groups` 属性时渲染
- 虚拟滚动模式下，`item` 样式仅应用于当前可见的列表项
- 使用 `children` 渲染函数时，返回的内容会被包裹在 `.hmfw-listy-item` 中

## 设计指引

### 与 List 的区别

| 特性          | Listy             | List         |
| ------------- | ----------------- | ------------ |
| 定位          | 极简虚拟滚动      | 功能丰富列表 |
| 虚拟滚动      | 核心特性          | 可选特性     |
| 分页          | ❌                | ✅           |
| 栅格布局      | ❌                | ✅           |
| Header/Footer | ❌                | ✅           |
| Loading       | ❌                | ✅           |
| 适用场景      | 大数据量（1000+） | 通用列表     |

### 选择建议

- 需要展示大量数据（1000+ 项）→ 使用 **Listy**
- 需要分页、栅格布局、复杂交互 → 使用 **List**
- 简单列表且数据量小 → 两者皆可

### 性能优化

1. **启用虚拟滚动**：数据量 > 100 时建议启用 `virtual`
2. **提供稳定的 key**：通过 `itemKey` 提供唯一键，避免重复渲染
3. **避免内联函数**：`children` 渲染函数尽量使用外部定义的函数
4. **减少嵌套层级**：保持渲染内容简洁，避免深层嵌套

### 性能对比

- **普通列表**：10000 条数据会渲染 10000 个 DOM 节点
- **Listy 虚拟滚动**：只渲染可见区域的节点（约 10-20 个），性能提升 500-1000 倍

## 设计 Token

Listy 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                      | 说明         | 默认值                                 |
| ------------------------------- | ------------ | -------------------------------------- |
| `--hmfw-color-text`             | 主文本色     | `rgba(0,0,0,0.88)`                     |
| `--hmfw-color-text-description` | 描述文本色   | `rgba(0,0,0,0.45)`                     |
| `--hmfw-color-text-secondary`   | 次要文本色   | `rgba(0,0,0,0.65)`                     |
| `--hmfw-color-split`            | 分割线色     | `rgba(5,5,5,0.06)`                     |
| `--hmfw-color-bg-container`     | 容器背景色   | `#ffffff`                              |
| `--hmfw-color-fill-alter`       | 填充色       | `rgba(0,0,0,0.02)`                     |
| `--hmfw-color-fill-quaternary`  | 四级填充色   | `rgba(0,0,0,0.02)`                     |
| `--hmfw-control-item-bg-hover`  | 悬停背景色   | `rgba(0,0,0,0.04)`                     |
| `--hmfw-font-size`              | 基础字号     | `14px`                                 |
| `--hmfw-font-weight-strong`     | 强调字重     | `600`                                  |
| `--hmfw-line-height`            | 标准行高     | `1.5714285714285714`                   |
| `--hmfw-line-width`             | 线宽         | `1px`                                  |
| `--hmfw-line-type`              | 线型         | `solid`                                |
| `--hmfw-padding`                | 标准内边距   | `16px`                                 |
| `--hmfw-padding-sm`             | 小号内边距   | `12px`                                 |
| `--hmfw-padding-xs`             | 超小内边距   | `8px`                                  |
| `--hmfw-motion-duration-mid`    | 中速动画时长 | `0.2s`                                 |
| `--hmfw-motion-ease-in-out`     | 缓动函数     | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
