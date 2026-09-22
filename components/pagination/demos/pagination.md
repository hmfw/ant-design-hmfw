# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时
- 可切换页码浏览数据

## 代码演示

### 基础用法

基础分页。

<DemoBlock title="基础用法" :source="PaginationBasicSource">
  <PaginationBasic />
</DemoBlock>

### 更多功能

展示总数、切换每页条数、快速跳转。

<DemoBlock title="更多功能" :source="PaginationMoreSource">
  <PaginationMore />
</DemoBlock>

### 简洁模式

通过 `simple` 属性设置简洁模式。

<DemoBlock title="简洁模式" :source="PaginationSimpleSource">
  <PaginationSimple />
</DemoBlock>

### 小型分页

通过 `size="small"` 设置小型分页。

<DemoBlock title="小型分页" :source="PaginationSmallSource">
  <PaginationSmall />
</DemoBlock>

### 响应式

开启 `responsive` 后，在未显式指定 `size` 的情况下，分页器会在屏幕宽度小于 576px（`xs` 断点）时自动切换为小尺寸。显式设置的 `size` 优先级更高，会覆盖响应式行为。

<DemoBlock title="响应式" :source="PaginationResponsiveSource">
  <PaginationResponsive />
</DemoBlock>

### 自定义渲染

通过 `itemRender` 自定义页码的结构，可以自定义上一页/下一页文本、页码样式或渲染为链接等。

<DemoBlock title="自定义渲染" :source="PaginationItemRenderSource">
  <PaginationItemRender />
</DemoBlock>

### 对齐方式

通过 `align` 属性设置分页器的对齐方式，支持左对齐（默认）、居中对齐和右对齐。

<DemoBlock title="对齐方式" :source="PaginationAlignSource">
  <PaginationAlign />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="PaginationClassNamesSource">
  <PaginationClassNames />
</DemoBlock>

## API

### Pagination Props

| 参数             | 说明                                                                             | 类型                                                                                                              | 默认值              |
| ---------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------- |
| current          | 当前页数（v-model）                                                              | `number`                                                                                                          | `1`                 |
| total            | 数据总数                                                                         | `number`                                                                                                          | `0`                 |
| pageSize         | 每页条数（v-model）                                                              | `number`                                                                                                          | `10`                |
| pageSizeOptions  | 指定每页可以显示多少条                                                           | `number[]`                                                                                                        | `[10, 20, 50, 100]` |
| showSizeChanger  | 是否展示 pageSize 切换器                                                         | `boolean`                                                                                                         | `false`             |
| showQuickJumper  | 是否可以快速跳转至某页                                                           | `boolean`                                                                                                         | `false`             |
| showTotal        | 用于显示数据总量和当前数据顺序                                                   | `(total: number, range: [number, number]) => string`                                                              | -                   |
| size             | 当为 `small` 时，是小尺寸分页                                                    | `'default' \| 'small'`                                                                                            | `'default'`         |
| simple           | 当添加该属性时，显示为简单分页                                                   | `boolean`                                                                                                         | `false`             |
| disabled         | 禁用分页                                                                         | `boolean`                                                                                                         | `false`             |
| hideOnSinglePage | 只有一页时是否隐藏分页器                                                         | `boolean`                                                                                                         | `false`             |
| itemRender       | 自定义页码的结构，可以自定义上一页/下一页文本、页码样式等                        | `(page: number, type: 'page' \| 'prev' \| 'next' \| 'jump-prev' \| 'jump-next', originalElement: VNode) => VNode` | -                   |
| responsive       | 未指定 `size` 时，屏幕宽度小于 576px 自动变为 small                              | `boolean`                                                                                                         | `false`             |
| align            | 分页器的对齐方式，可选 `start`（左对齐）、`center`（居中）、`end`（右对齐）      | `'start' \| 'center' \| 'end'`                                                                                    | -                   |
| classNames       | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `PaginationClassNames`                                                                                            | -                   |
| styles           | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `PaginationStyles`                                                                                                | -                   |

### Pagination Events

| 事件名          | 说明                          | 回调参数                                   |
| --------------- | ----------------------------- | ------------------------------------------ |
| change          | 页码或 pageSize 改变的回调    | `(page: number, pageSize: number) => void` |
| showSizeChange  | pageSize 变化的回调           | `(current: number, size: number) => void`  |
| update:current  | 当前页数变化时触发（v-model） | `(page: number) => void`                   |
| update:pageSize | 每页条数变化时触发（v-model） | `(size: number) => void`                   |

### itemRender 函数参数

`itemRender` 用于自定义页码渲染，函数签名为：

```typescript
;(page: number, type: ItemType, originalElement: VNode) => VNode
```

**参数说明**：

- `page`：目标页码
  - 对于 `type: 'page'` —— 当前页码数字
  - 对于 `type: 'prev'` —— 上一页的页码（current - 1）
  - 对于 `type: 'next'` —— 下一页的页码（current + 1）
  - 对于 `type: 'jump-prev'` —— 向前跳转 5 页的目标页码
  - 对于 `type: 'jump-next'` —— 向后跳转 5 页的目标页码

- `type`：渲染项的类型
  - `'page'` —— 普通页码按钮
  - `'prev'` —— 上一页按钮
  - `'next'` —— 下一页按钮
  - `'jump-prev'` —— 向前快速跳转（显示为省略号 `•••`）
  - `'jump-next'` —— 向后快速跳转（显示为省略号 `•••`）

- `originalElement`：原始渲染的 VNode，可以直接返回或基于此进行修改

**使用示例**：

```vue
<script setup>
import { h } from 'vue'

const itemRender = (page, type, originalElement) => {
  if (type === 'prev') {
    return h('a', '上一页')
  }
  if (type === 'next') {
    return h('a', '下一页')
  }
  // 其他情况返回原始元素
  return originalElement
}
</script>
```

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对分页器的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface PaginationClassNames {
  root?: string // 根容器 ul.hmfw-pagination
  total?: string // 总数显示区域 li.hmfw-pagination-total-text
  prev?: string // 上一页按钮 li.hmfw-pagination-prev
  next?: string // 下一页按钮 li.hmfw-pagination-next
  item?: string // 页码项 li.hmfw-pagination-item
  itemActive?: string // 当前激活的页码项 li.hmfw-pagination-item-active
  jumpPrev?: string // 向前跳转按钮 li.hmfw-pagination-jump-prev
  jumpNext?: string // 向后跳转按钮 li.hmfw-pagination-jump-next
  options?: string // 选项容器 li.hmfw-pagination-options
  sizeChanger?: string // 页码尺寸切换器（Select 组件容器）
  quickJumper?: string // 快速跳转输入框容器 li.hmfw-pagination-options-quick-jumper
}

interface PaginationStyles {
  root?: CSSProperties
  total?: CSSProperties
  prev?: CSSProperties
  next?: CSSProperties
  item?: CSSProperties
  itemActive?: CSSProperties
  jumpPrev?: CSSProperties
  jumpNext?: CSSProperties
  options?: CSSProperties
  sizeChanger?: CSSProperties
  quickJumper?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<PaginationSemantic />

### DOM 结构与 className 映射

```html
<ul class="hmfw-pagination">
  <!-- ↑ classNames.root / styles.root -->
  <li class="hmfw-pagination-total-text">共 100 条</li>
  <!-- ↑ 仅在设置 showTotal 时渲染；classNames.total / styles.total -->
  <li class="hmfw-pagination-prev"><button>&lt;</button></li>
  <!-- ↑ classNames.prev / styles.prev -->
  <li class="hmfw-pagination-item"><a>1</a></li>
  <!-- ↑ 每个页码渲染一个，classNames.item / styles.item -->
  <li class="hmfw-pagination-item hmfw-pagination-item-active"><a>2</a></li>
  <!-- ↑ 激活项叠加 -active 类；classNames.item + classNames.itemActive、styles.item + styles.itemActive -->

  <!-- 跳转按钮（页数超阈值折叠时渲染，默认省略号 hover 显示双箭头） -->
  <li class="hmfw-pagination-jump-prev"><button class="hmfw-pagination-item-link">•••</button></li>
  <!-- ↑ classNames.jumpPrev / styles.jumpPrev -->
  <li class="hmfw-pagination-jump-next"><button class="hmfw-pagination-item-link">•••</button></li>
  <!-- ↑ classNames.jumpNext / styles.jumpNext -->

  <li class="hmfw-pagination-next"><button>&gt;</button></li>
  <!-- ↑ classNames.next / styles.next -->

  <!-- 选项容器（showSizeChanger 时渲染） -->
  <li class="hmfw-pagination-options">
    <!-- ↑ classNames.options / styles.options -->
    <div class="hmfw-pagination-options-size-changer">
      <select>
        ...
      </select>
    </div>
    <!-- ↑ showSizeChanger 时渲染；classNames.sizeChanger / styles.sizeChanger -->
    <div class="hmfw-pagination-options-quick-jumper">跳至 <input /> 页</div>
    <!-- ↑ showQuickJumper 时渲染；classNames.quickJumper / styles.quickJumper -->
  </li>
</ul>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Pagination
    :total="200"
    show-size-changer
    :show-total="(total) => `共 ${total} 条`"
    :class-names="{
      root: 'custom-pagination',
      item: 'custom-item',
      itemActive: 'custom-active',
      prev: 'custom-prev',
      next: 'custom-next',
      total: 'custom-total',
    }"
  />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Pagination
    :total="80"
    :styles="{
      root: { padding: '16px', background: '#f0f5ff', borderRadius: '8px' },
      item: { fontWeight: 'bold' },
      itemActive: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' },
    }"
  />

  <!-- 组合：classNames 与 styles 混用 -->
  <Pagination
    :total="100"
    :class-names="{ root: 'custom-pagination', item: 'custom-item' }"
    :styles="{
      prev: { background: '#52c41a', color: 'white', border: 'none' },
      next: { background: '#52c41a', color: 'white', border: 'none' },
    }"
  />
</template>

<style scoped>
:deep(.custom-pagination) {
  padding: 12px;
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border-radius: 8px;
}

:deep(.custom-item:hover) {
  transform: scale(1.1);
  transition: all 0.3s;
}

:deep(.custom-active) {
  background: linear-gradient(135deg, #1677ff 0%, #096dd9 100%) !important;
  border: none !important;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.4);
}

:deep(.custom-prev),
:deep(.custom-next) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  color: white;
  font-weight: bold;
}

:deep(.custom-total) {
  color: #d46b08;
  font-weight: bold;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-pagination-item`）合并，不会互相覆盖
- 当使用 `simple` 模式时，只有 `root`、`prev`、`next` 等基础 key 生效，跳转按钮和选项容器不会渲染

## 设计 Token

Pagination 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 颜色

| Token 名称                   | 说明       | 默认值             |
| ---------------------------- | ---------- | ------------------ |
| `--hmfw-color-primary`       | 主题色     | `#1677ff`          |
| `--hmfw-color-text`          | 主文本色   | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-disabled` | 禁用文本色 | `rgba(0,0,0,0.25)` |
| `--hmfw-color-bg-container`  | 容器背景色 | `#ffffff`          |
| `--hmfw-color-border`        | 边框色     | `#d9d9d9`          |

### 字体

| Token 名称              | 说明     | 默认值 |
| ----------------------- | -------- | ------ |
| `--hmfw-font-size-base` | 基础字号 | `14px` |
| `--hmfw-font-size-sm`   | 小号字号 | `12px` |

### 边框

| Token 名称             | 说明     | 默认值 |
| ---------------------- | -------- | ------ |
| `--hmfw-border-radius` | 基础圆角 | `6px`  |

### 动效

| Token 名称                   | 说明         | 默认值 |
| ---------------------------- | ------------ | ------ |
| `--hmfw-motion-duration-mid` | 中速动画时长 | `0.2s` |
