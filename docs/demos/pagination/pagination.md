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
| current          | 当前页数（v-model）                                                              | `number`                                                                                                          | -                   |
| defaultCurrent   | 默认的当前页数                                                                   | `number`                                                                                                          | `1`                 |
| total            | 数据总数                                                                         | `number`                                                                                                          | `0`                 |
| pageSize         | 每页条数（v-model）                                                              | `number`                                                                                                          | -                   |
| defaultPageSize  | 默认的每页条数                                                                   | `number`                                                                                                          | `10`                |
| pageSizeOptions  | 指定每页可以显示多少条                                                           | `number[]`                                                                                                        | `[10, 20, 50, 100]` |
| showSizeChanger  | 是否展示 pageSize 切换器                                                         | `boolean`                                                                                                         | `false`             |
| showQuickJumper  | 是否可以快速跳转至某页                                                           | `boolean`                                                                                                         | `false`             |
| showTotal        | 用于显示数据总量和当前数据顺序                                                   | `(total: number, range: [number, number]) => string`                                                              | -                   |
| size             | 当为 `small` 时，是小尺寸分页                                                    | `'default' \| 'small'`                                                                                            | `'default'`         |
| simple           | 当添加该属性时，显示为简单分页                                                   | `boolean`                                                                                                         | `false`             |
| disabled         | 禁用分页                                                                         | `boolean`                                                                                                         | `false`             |
| hideOnSinglePage | 只有一页时是否隐藏分页器                                                         | `boolean`                                                                                                         | `false`             |
| itemRender       | 自定义页码的结构，可以自定义上一页/下一页文本、页码样式等                        | `(page: number, type: 'page' \| 'prev' \| 'next' \| 'jump-prev' \| 'jump-next', originalElement: VNode) => VNode` | -                   |
| responsive       | 当屏幕尺寸小于 576px 时，自动变为 small                                          | `boolean`                                                                                                         | `false`             |
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

### DOM 结构与 className 映射

```html
<ul class="hmfw-pagination">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <!-- 总数显示（当 showTotal 存在时） -->
  <li class="hmfw-pagination-total-text">
    <!-- ↑ classNames.total / styles.total 应用于此 -->
    共 100 条
  </li>

  <!-- 上一页按钮 -->
  <li class="hmfw-pagination-prev">
    <!-- ↑ classNames.prev / styles.prev 应用于此 -->
    <button>&lt;</button>
  </li>

  <!-- 页码项 -->
  <li class="hmfw-pagination-item">
    <!-- ↑ classNames.item / styles.item 应用于此 -->
    <a>1</a>
  </li>

  <!-- 当前激活的页码项 -->
  <li class="hmfw-pagination-item hmfw-pagination-item-active">
    <!-- ↑ classNames.item + classNames.itemActive 叠加应用 -->
    <!-- ↑ styles.item + styles.itemActive 合并应用 -->
    <a>2</a>
  </li>

  <!-- 向前跳转按钮（显示为省略号 •••） -->
  <li class="hmfw-pagination-jump-prev">
    <!-- ↑ classNames.jumpPrev / styles.jumpPrev 应用于此 -->
    <a>•••</a>
  </li>

  <!-- 向后跳转按钮（显示为省略号 •••） -->
  <li class="hmfw-pagination-jump-next">
    <!-- ↑ classNames.jumpNext / styles.jumpNext 应用于此 -->
    <a>•••</a>
  </li>

  <!-- 下一页按钮 -->
  <li class="hmfw-pagination-next">
    <!-- ↑ classNames.next / styles.next 应用于此 -->
    <button>&gt;</button>
  </li>

  <!-- 选项容器（包含尺寸切换器和快速跳转） -->
  <li class="hmfw-pagination-options">
    <!-- ↑ classNames.options / styles.options 应用于此 -->

    <!-- 页码尺寸切换器（当 showSizeChanger 为 true 时） -->
    <div class="hmfw-pagination-options-size-changer">
      <!-- ↑ classNames.sizeChanger / styles.sizeChanger 应用于此 -->
      <select>
        ...
      </select>
    </div>

    <!-- 快速跳转输入框（当 showQuickJumper 为 true 时） -->
    <div class="hmfw-pagination-options-quick-jumper">
      <!-- ↑ classNames.quickJumper / styles.quickJumper 应用于此 -->
      跳至 <input /> 页
    </div>
  </li>
</ul>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根容器和页码项 -->
  <Pagination
    :total="100"
    :class-names="{
      root: 'custom-pagination',
      item: 'custom-item',
      itemActive: 'custom-active',
    }"
  />

  <!-- 自定义上一页/下一页按钮 -->
  <Pagination
    :total="100"
    :class-names="{
      prev: 'custom-prev',
      next: 'custom-next',
    }"
  />

  <!-- 自定义完整功能 -->
  <Pagination
    :total="200"
    show-size-changer
    show-quick-jumper
    :show-total="(total) => `共 ${total} 条`"
    :class-names="{
      total: 'custom-total',
      sizeChanger: 'custom-size-changer',
      quickJumper: 'custom-quick-jumper',
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

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制根容器和页码项 -->
  <Pagination
    :total="80"
    :styles="{
      root: { padding: '16px', background: '#f0f5ff', borderRadius: '8px' },
      item: { fontWeight: 'bold' },
      itemActive: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
      },
    }"
  />

  <!-- 自定义上一页/下一页按钮样式 -->
  <Pagination
    :total="100"
    :styles="{
      prev: { background: '#52c41a', color: 'white', border: 'none' },
      next: { background: '#52c41a', color: 'white', border: 'none' },
    }"
  />

  <!-- 自定义总数和选项样式 -->
  <Pagination
    :total="200"
    show-size-changer
    :show-total="(total) => `共 ${total} 条`"
    :styles="{
      total: { color: '#d46b08', fontWeight: 'bold', fontSize: '15px' },
      sizeChanger: { background: '#fffbe6', padding: '4px 8px', borderRadius: '6px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 激活状态的页码项时，`classNames.itemActive` 与 `classNames.item` 会**叠加**应用在同一个 `<li>` 上
- 激活状态的页码项时，`styles.itemActive` 与 `styles.item` 会**合并**应用，`styles.itemActive` 优先
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-pagination-disabled`、`.hmfw-pagination-simple`）合并
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
