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

## API

### Pagination Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页数（v-model） | `number` | - |
| defaultCurrent | 默认的当前页数 | `number` | `1` |
| total | 数据总数 | `number` | `0` |
| pageSize | 每页条数（v-model） | `number` | - |
| defaultPageSize | 默认的每页条数 | `number` | `10` |
| showSizeChanger | 是否展示 pageSize 切换器 | `boolean` | `false` |
| showQuickJumper | 是否可以快速跳转至某页 | `boolean` | `false` |
| showTotal | 用于显示数据总量和当前数据顺序 | `(total: number, range: [number, number]) => string` | - |
| size | 当为 `small` 时，是小尺寸分页 | `'default' \| 'small'` | `'default'` |
| simple | 当添加该属性时，显示为简单分页 | `boolean` | `false` |
| disabled | 禁用分页 | `boolean` | `false` |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | `boolean` | `false` |

### Pagination Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 页码或 pageSize 改变的回调 | `(page: number, pageSize: number) => void` |
| showSizeChange | pageSize 变化的回调 | `(current: number, size: number) => void` |
