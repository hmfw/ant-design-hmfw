# Table 表格

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时

## 代码演示

### 基础用法

简单的表格，最后一列是各种操作。

<DemoBlock title="基础用法" :source="TableBasicSource">
  <TableBasic />
</DemoBlock>

### 排序

对某一列数据进行排序。支持多列排序（Shift + 点击表头）。

<DemoBlock title="排序" :source="TableSorterSource">
  <TableSorter />
</DemoBlock>

### 行选择

第一列是联动的选择框，支持单选和多选。

<DemoBlock title="行选择" :source="TableRowSelectionSource">
  <TableRowSelection />
</DemoBlock>

### 筛选

对某一列数据进行筛选。

<DemoBlock title="筛选" :source="TableFilterSource">
  <TableFilter />
</DemoBlock>

### 固定列

固定左侧或右侧的列，横向滚动时保持可见。

<DemoBlock title="固定列" :source="TableFixedColumnsSource">
  <TableFixedColumns />
</DemoBlock>

### 展开行

可展开的行，显示额外信息。

<DemoBlock title="展开行" :source="TableExpandableSource">
  <TableExpandable />
</DemoBlock>

### 响应式

根据屏幕大小自动显示或隐藏列。

<DemoBlock title="响应式" :source="TableResponsiveSource">
  <TableResponsive />
</DemoBlock>

### 虚拟滚动

大数据场景下使用虚拟滚动优化性能，支持 1000+ 行数据流畅滚动。

<DemoBlock title="虚拟滚动" :source="TableVirtualScrollSource">
  <TableVirtualScroll />
</DemoBlock>

### 吸顶表头

当页面滚动时，表头会固定在页面顶部。

<DemoBlock title="吸顶表头" :source="TableStickySource">
  <TableSticky />
</DemoBlock>

### 总结栏

通过 `summary` 可以在表格尾部添加合计行。

<DemoBlock title="总结栏" :source="TableSummarySource">
  <TableSummary />
</DemoBlock>

### 可编辑单元格

通过自定义 `render` 函数实现可编辑的单元格。

<DemoBlock title="可编辑单元格" :source="TableEditableSource">
  <TableEditable />
</DemoBlock>

## API

### Table Props

| 参数         | 说明                        | 类型                                                          | 默认值      |
| ------------ | --------------------------- | ------------------------------------------------------------- | ----------- |
| dataSource   | 数据数组                    | `any[]`                                                       | -           |
| columns      | 表格列的配置描述            | `TableColumn[]`                                               | -           |
| rowKey       | 表格行 key 的取值           | `string \| ((record: any) => Key)`                            | `'key'`     |
| loading      | 页面是否加载中              | `boolean`                                                     | `false`     |
| pagination   | 分页器，设为 false 时不展示 | `TablePaginationConfig \| false`                              | -           |
| rowSelection | 列表项是否可选择            | `TableRowSelection`                                           | -           |
| expandable   | 配置展开属性                | `ExpandableConfig`                                            | -           |
| size         | 表格大小                    | `'default' \| 'middle' \| 'small'`                            | `'default'` |
| bordered     | 是否展示外边框和列边框      | `boolean`                                                     | `false`     |
| showHeader   | 是否显示表头                | `boolean`                                                     | `true`      |
| sticky       | 设置粘性头部和滚动条        | `boolean \| { offsetHeader?: number, offsetScroll?: number }` | `false`     |
| scroll       | 表格是否可滚动              | `{ x?: number \| string, y?: number \| string }`              | -           |
| summary      | 总结栏                      | `(pageData: any[]) => VNode`                                  | -           |
| title        | 表格标题                    | `string \| ((data: any[]) => VNode)`                          | -           |
| footer       | 表格页脚                    | `string \| ((data: any[]) => VNode)`                          | -           |
| locale       | 国际化配置                  | `{ emptyText?: string }`                                      | -           |
| onChange     | 分页、排序、筛选变化时触发  | `(pagination, filters, sorter, extra) => void`                | -           |
| onRow        | 设置行属性                  | `(record, index) => object`                                   | -           |
| onHeaderRow  | 设置表头行属性              | `(columns, index) => object`                                  | -           |

### TableColumn

| 参数           | 说明                       | 类型                                                    | 默认值   |
| -------------- | -------------------------- | ------------------------------------------------------- | -------- |
| key            | 列的唯一标识               | `string`                                                | -        |
| title          | 列头显示文字               | `string \| VNode`                                       | -        |
| dataIndex      | 列数据在数据项中对应的路径 | `string`                                                | -        |
| width          | 列宽度                     | `number \| string`                                      | -        |
| align          | 设置列的对齐方式           | `'left' \| 'center' \| 'right'`                         | `'left'` |
| fixed          | 列是否固定（左侧/右侧）    | `'left' \| 'right'`                                     | -        |
| ellipsis       | 超过宽度将自动省略         | `boolean`                                               | `false`  |
| sorter         | 排序函数，支持多列排序     | `CompareFn \| { compare: CompareFn, multiple: number }` | -        |
| sortOrder      | 排序的受控属性             | `'ascend' \| 'descend' \| null`                         | -        |
| filters        | 表头的筛选菜单项           | `ColumnFilterItem[]`                                    | -        |
| filteredValue  | 筛选的受控属性             | `FilterValue`                                           | -        |
| onFilter       | 筛选函数                   | `(value: any, record: any) => boolean`                  | -        |
| filterMultiple | 是否多选                   | `boolean`                                               | `true`   |
| responsive     | 响应式断点                 | `('xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl')[]`     | -        |
| render         | 自定义渲染函数             | `(text: any, record: any, index: number) => any`        | -        |

### TableRowSelection

| 参数             | 说明                              | 类型                                                         | 默认值       |
| ---------------- | --------------------------------- | ------------------------------------------------------------ | ------------ |
| type             | 选择框类型                        | `'checkbox' \| 'radio'`                                      | `'checkbox'` |
| selectedRowKeys  | 指定选中项的 key 数组             | `Key[]`                                                      | -            |
| onChange         | 选中项发生变化时的回调            | `(keys: Key[], rows: any[], info: { type: string }) => void` | -            |
| onSelect         | 用户手动选择/取消选择某行的回调   | `(record, selected, selectedRows, nativeEvent) => void`      | -            |
| onSelectAll      | 用户手动选择/取消选择所有行的回调 | `(selected, selectedRows, changeRows) => void`               | -            |
| getCheckboxProps | 选择框的默认属性配置              | `(record) => object`                                         | -            |

### ExpandableConfig

| 参数                   | 说明               | 类型                                         | 默认值 |
| ---------------------- | ------------------ | -------------------------------------------- | ------ |
| expandedRowRender      | 额外的展开行内容   | `(record, index, indent, expanded) => VNode` | -      |
| expandedRowKeys        | 展开的行，受控属性 | `Key[]`                                      | -      |
| defaultExpandedRowKeys | 默认展开的行       | `Key[]`                                      | -      |
| onExpand               | 点击展开图标时触发 | `(expanded, record) => void`                 | -      |
| onExpandedRowsChange   | 展开的行变化时触发 | `(expandedKeys: Key[]) => void`              | -      |

### TablePaginationConfig

| 参数            | 说明                           | 类型                       | 默认值              |
| --------------- | ------------------------------ | -------------------------- | ------------------- |
| current         | 当前页数                       | `number`                   | -                   |
| pageSize        | 每页条数                       | `number`                   | `10`                |
| total           | 数据总数                       | `number`                   | -                   |
| showQuickJumper | 是否可以快速跳转至某页         | `boolean`                  | `false`             |
| showSizeChanger | 是否展示 pageSize 切换器       | `boolean`                  | `false`             |
| showTotal       | 用于显示数据总量和当前数据顺序 | `(total, range) => string` | -                   |
| pageSizeOptions | 指定每页可以显示多少条         | `number[]`                 | `[10, 20, 50, 100]` |
| onChange        | 页码或 pageSize 改变的回调     | `(page, pageSize) => void` | -                   |

## 特性说明

### 多列排序

按住 Shift 键点击多个列的表头，可以实现多列排序。排序优先级按照点击顺序。

### 响应式列

通过配置 `responsive` 属性，可以根据屏幕断点自动显示或隐藏列：

- `xs`: 0px
- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px
- `xxl`: 1600px

### 固定列

设置 `fixed` 为 `'left'` 或 `'right'`，可以固定列到左侧或右侧。滚动时会自动显示阴影效果。

### 可访问性

Table 组件完全支持键盘导航和屏幕阅读器：

- 使用 `Enter` 或 `Space` 键可以触发排序
- 完整的 ARIA 标签支持
- 符合 WCAG 2.1 AA 标准
