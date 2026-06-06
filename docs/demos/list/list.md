# List 列表

通用列表。

## 何时使用

- 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面

## 代码演示

### 基础用法

基础列表。

<DemoBlock title="基础用法" :source="ListBasicSource">
  <ListBasic />
</DemoBlock>

### 带操作

可以配置额外操作。

<DemoBlock title="带操作" :source="ListActionsSource">
  <ListActions />
</DemoBlock>

### 带头像

带头像的列表。

<DemoBlock title="带头像" :source="ListAvatarSource">
  <ListAvatar />
</DemoBlock>

### 栅格列表

通过设置 `grid` 属性来实现栅格列表。

<DemoBlock title="栅格列表" :source="ListGridSource">
  <ListGrid />
</DemoBlock>

### 响应式网格

通过 `grid` 的响应式属性（xs/sm/md/lg/xl）实现不同屏幕尺寸下的自适应布局。

<DemoBlock title="响应式网格" :source="ListResponsiveGridSource">
  <ListResponsiveGrid />
</DemoBlock>

### 翻页

通过设置 `pagination` 属性来实现翻页。

<DemoBlock title="翻页" :source="ListPaginationSource">
  <ListPagination />
</DemoBlock>

### 竖排列表

通过设置 `itemLayout="vertical"` 来实现竖排列表。

<DemoBlock title="竖排列表" :source="ListVerticalSource">
  <ListVertical />
</DemoBlock>

## API

### List Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 列表数据源 | `any[]` | - |
| renderItem | 自定义渲染列表项 | `(item: T, index: number) => VNode` | - |
| bordered | 是否展示边框 | `boolean` | `false` |
| size | 列表大小 | `'default' \| 'small' \| 'large'` | `'default'` |
| split | 是否展示分割线 | `boolean` | `true` |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | `boolean \| { spinning?: boolean }` | `false` |
| pagination | 对应的 pagination 配置，设置 false 不显示 | `boolean \| PaginationConfig` | `false` |
| grid | 列表栅格配置 | `{ column?: number; gutter?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }` | - |
| itemLayout | 设置 List.Item 布局 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| rowKey | 各项 key 的取值，可以是字符串或一个函数 | `string \| ((item: T) => string \| number)` | `'key'` |
| header | 列表头部 | `string \| VNode` | - |
| footer | 列表底部 | `string \| VNode` | - |
| locale | 默认文案设置，目前包括空数据文案 | `{ emptyText?: string \| VNode }` | - |
| loadMore | 加载更多 | `VNode` | - |

### PaginationConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页数 | `number` | - |
| pageSize | 每页条数 | `number` | `10` |
| total | 数据总数 | `number` | - |
| defaultCurrent | 默认的当前页数 | `number` | `1` |
| defaultPageSize | 默认的每页条数 | `number` | `10` |
| position | 指定分页显示的位置 | `'top' \| 'bottom' \| 'both'` | `'bottom'` |
| align | 指定分页对齐方式 | `'start' \| 'center' \| 'end'` | `'end'` |
| onChange | 页码改变的回调 | `(page: number, pageSize: number) => void` | - |
| onShowSizeChange | pageSize 变化的回调 | `(current: number, size: number) => void` | - |

### List.Item Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 列表操作组，根据 itemLayout 的不同，位置在卡片底部或者最右侧 | `VNode[]` | - |
| extra | 额外内容，通常用在 itemLayout 为 vertical 的情况下，展示右侧内容 | `VNode` | - |

### List.Item.Meta Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| avatar | 列表元素的图标 | `VNode` | - |
| title | 列表元素的标题 | `string \| VNode` | - |
| description | 列表元素的描述内容 | `string \| VNode` | - |

