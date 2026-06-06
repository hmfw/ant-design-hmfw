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

## API

### Pagination Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页数（v-model） | `number` | - |
| defaultCurrent | 默认的当前页数 | `number` | `1` |
| total | 数据总数 | `number` | `0` |
| pageSize | 每页条数（v-model） | `number` | - |
| defaultPageSize | 默认的每页条数 | `number` | `10` |
| pageSizeOptions | 指定每页可以显示多少条 | `number[]` | `[10, 20, 50, 100]` |
| showSizeChanger | 是否展示 pageSize 切换器 | `boolean` | `false` |
| showQuickJumper | 是否可以快速跳转至某页 | `boolean` | `false` |
| showTotal | 用于显示数据总量和当前数据顺序 | `(total: number, range: [number, number]) => string` | - |
| size | 当为 `small` 时，是小尺寸分页 | `'default' \| 'small'` | `'default'` |
| simple | 当添加该属性时，显示为简单分页 | `boolean` | `false` |
| disabled | 禁用分页 | `boolean` | `false` |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | `boolean` | `false` |
| itemRender | 自定义页码的结构，可以自定义上一页/下一页文本、页码样式等 | `(page: number, type: 'page' \| 'prev' \| 'next' \| 'jump-prev' \| 'jump-next', originalElement: VNode) => VNode` | - |
| responsive | 当屏幕尺寸小于 576px 时，自动变为 small | `boolean` | `false` |
| align | 分页器的对齐方式，可选 `start`（左对齐）、`center`（居中）、`end`（右对齐） | `'start' \| 'center' \| 'end'` | - |

### Pagination Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 页码或 pageSize 改变的回调 | `(page: number, pageSize: number) => void` |
| showSizeChange | pageSize 变化的回调 | `(current: number, size: number) => void` |
| update:current | 当前页数变化时触发（v-model） | `(page: number) => void` |
| update:pageSize | 每页条数变化时触发（v-model） | `(size: number) => void` |

### itemRender 函数参数

`itemRender` 用于自定义页码渲染，函数签名为：

```typescript
(page: number, type: ItemType, originalElement: VNode) => VNode
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


