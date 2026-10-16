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

### 受控排序

通过列的 `sortOrder` 控制排序状态，点击表头仅触发 `onChange`，在回调中更新状态才会改变排序。

<DemoBlock title="受控排序" :source="TableSortControlledSource">
  <TableSortControlled />
</DemoBlock>

### 默认排序与排序方向

通过 `defaultSortOrder` 设置首次渲染的排序方向；`sortDirections` 限制点击时可选的方向序列。

<DemoBlock title="默认排序与排序方向" :source="TableSortDefaultSource">
  <TableSortDefault />
</DemoBlock>

### 行选择

第一列是联动的选择框，支持单选和多选。第二张表演示 `defaultSelectedRowKeys` 默认选中、`hideSelectAll` 隐藏全选框、`columnTitle` 自定义列表头。

<DemoBlock title="行选择" :source="TableRowSelectionSource">
  <TableRowSelection />
</DemoBlock>

### 筛选

对某一列数据进行筛选。

<DemoBlock title="筛选" :source="TableFilterSource">
  <TableFilter />
</DemoBlock>

### 自定义筛选

通过 `defaultFilteredValue` 设置默认筛选值，`filterDropdown` 自定义筛选面板（提供 `setSelectedKeys` / `confirm` / `clearFilters`），`filterIcon` 自定义筛选图标。

<DemoBlock title="自定义筛选" :source="TableFilterCustomSource">
  <TableFilterCustom />
</DemoBlock>

### 分页

分页位置（`position`）、每页条数切换（`showSizeChanger`）、总数文案（`showTotal`）、默认页码（`defaultCurrent`）与简洁模式（`simple`）。

<DemoBlock title="分页配置" :source="TablePaginationSource">
  <TablePagination />
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

### 树形数据

通过给数据项设置 `children` 字段（可用 `childrenColumnName` 自定义），展示层级结构。展开图标内嵌在首列，支持 `indentSize` 缩进、`defaultExpandAllRows` 默认全展开、`rowExpandable` 控制可展开性。开启 `rowSelection` 后默认父子联动勾选（`checkStrictly: true` 可切换为各自独立）。

<DemoBlock title="树形数据" :source="TableTreeSource">
  <TableTree />
</DemoBlock>

### 单元格合并

通过列的 `onCell` / `onHeaderCell` 返回 `{ colSpan, rowSpan }` 实现单元格合并；返回 `0` 表示该单元格已被相邻单元格合并、不渲染。

<DemoBlock title="单元格合并" :source="TableMergeCellsSource">
  <TableMergeCells />
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

当页面滚动时，表头会固定在页面顶部。表格存在横向滚动时，还会在视口底部吸附一个横向滚动条（真实滚动条滚出视口后显示，可用 `offsetScroll` 调整距底部距离，`getContainer` 指定作为基准的滚动容器）。

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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TableClassNamesSource">
  <TableClassNames />
</DemoBlock>

## API

### Table Props

| 参数         | 说明                                                                                  | 类型                                                                                            | 默认值      |
| ------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------- |
| dataSource   | 数据数组                                                                              | `any[]`                                                                                         | -           |
| columns      | 表格列的配置描述                                                                      | `TableColumn[]`                                                                                 | -           |
| rowKey       | 表格行 key 的取值                                                                     | `string \| ((record: any) => Key)`                                                              | `'key'`     |
| loading      | 页面是否加载中                                                                        | `boolean`                                                                                       | `false`     |
| pagination   | 分页器，设为 false 时不展示                                                           | `TablePaginationConfig \| false`                                                                | -           |
| rowSelection | 列表项是否可选择                                                                      | `TableRowSelection`                                                                             | -           |
| expandable   | 配置展开属性                                                                          | `ExpandableConfig`                                                                              | -           |
| size         | 表格大小                                                                              | `'default' \| 'middle' \| 'small'`                                                              | `'default'` |
| bordered     | 是否展示外边框和列边框                                                                | `boolean`                                                                                       | `false`     |
| showHeader   | 是否显示表头                                                                          | `boolean`                                                                                       | `true`      |
| sticky       | 设置粘性表头与吸底横向滚动条；`getContainer` 指定判断基准的滚动容器（默认 window）    | `boolean \| { offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement }` | `false`     |
| scroll       | 表格是否可滚动                                                                        | `{ x?: number \| string, y?: number \| string }`                                                | -           |
| summary      | 总结栏                                                                                | `(pageData: any[]) => VNode`                                                                    | -           |
| title        | 表格标题                                                                              | `string \| ((data: any[]) => VNode)`                                                            | -           |
| footer       | 表格页脚                                                                              | `string \| ((data: any[]) => VNode)`                                                            | -           |
| rowClassName | 表格行的类名                                                                          | `string \| ((record: any, index: number) => string)`                                            | -           |
| locale       | 组件级语言包，覆盖全局 Table 命名空间文案（含 `emptyText`/`filterTitle`/`expand` 等） | `TableLocale`                                                                                   | -           |
| onChange     | 分页、排序、筛选变化时触发                                                            | `(pagination, filters, sorter, extra) => void`                                                  | -           |
| onRow        | 设置行属性                                                                            | `(record, index) => object`                                                                     | -           |
| onHeaderRow  | 设置表头行属性                                                                        | `(columns, index) => object`                                                                    | -           |
| classNames   | 语义化 className（[详见下方](#语义化-classname-与-style)）                            | `TableSemanticClassNames`                                                                       | -           |
| styles       | 语义化 style（[详见下方](#语义化-classname-与-style)）                                | `TableSemanticStyles`                                                                           | -           |

### TableColumn

| 参数                 | 说明                                                                                                                            | 类型                                                                 | 默认值                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------- |
| key                  | 列的唯一标识                                                                                                                    | `string`                                                             | -                             |
| title                | 列头显示文字                                                                                                                    | `string \| VNode`                                                    | -                             |
| dataIndex            | 列数据在数据项中对应的路径                                                                                                      | `string`                                                             | -                             |
| width                | 列宽度                                                                                                                          | `number \| string`                                                   | -                             |
| align                | 设置列的对齐方式                                                                                                                | `'left' \| 'center' \| 'right'`                                      | `'left'`                      |
| fixed                | 列是否固定（左侧/右侧）                                                                                                         | `'left' \| 'right'`                                                  | -                             |
| ellipsis             | 超过宽度将自动省略                                                                                                              | `boolean`                                                            | `false`                       |
| className            | 列单元格的自定义类名                                                                                                            | `string`                                                             | -                             |
| colSpan              | 表头横向合并列数，为 `0` 时该表头不渲染；数据单元格合并请用 `onCell`                                                            | `number`                                                             | -                             |
| onCell               | 设置数据单元格属性（动态合并/自定义），返回 `{ colSpan?, rowSpan?, className?, style?, ...事件 }`，span 为 `0` 时不渲染该单元格 | `(record, index) => object`                                          | -                             |
| onHeaderCell         | 设置表头单元格属性（如表头合并 `colSpan`）                                                                                      | `(column) => object`                                                 | -                             |
| sorter               | 排序函数；对象形式支持 `multiple` 声明多列排序优先级                                                                            | `boolean \| CompareFn \| { compare?: CompareFn, multiple?: number }` | -                             |
| sortOrder            | 排序的受控属性，设置后该列排序状态完全由它决定                                                                                  | `'ascend' \| 'descend' \| null`                                      | -                             |
| defaultSortOrder     | 默认排序状态（仅在首次渲染生效）                                                                                                | `'ascend' \| 'descend' \| null`                                      | -                             |
| sortDirections       | 支持的排序方向序列，点击按此循环                                                                                                | `SortOrder[]`                                                        | `['ascend', 'descend', null]` |
| showSorterTooltip    | 是否展示表头排序提示（以原生 title 呈现）                                                                                       | `boolean`                                                            | `true`                        |
| filters              | 表头的筛选菜单项                                                                                                                | `ColumnFilterItem[]`                                                 | -                             |
| filteredValue        | 筛选的受控属性（优先级高于 defaultFilteredValue）                                                                               | `FilterValue`                                                        | -                             |
| defaultFilteredValue | 默认筛选值（仅在首次渲染生效）                                                                                                  | `FilterValue`                                                        | -                             |
| onFilter             | 筛选函数                                                                                                                        | `(value: any, record: any) => boolean`                               | -                             |
| filterMultiple       | 是否多选                                                                                                                        | `boolean`                                                            | `true`                        |
| filterDropdown       | 自定义筛选面板（函数形式提供 setSelectedKeys/confirm/clearFilters）                                                             | `VNode \| ((props) => VNode)`                                        | -                             |
| filterIcon           | 自定义筛选图标                                                                                                                  | `VNode \| ((filtered: boolean) => VNode)`                            | -                             |
| responsive           | 响应式断点                                                                                                                      | `('xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl')[]`                  | -                             |
| render               | 自定义渲染函数                                                                                                                  | `(text: any, record: any, index: number) => any`                     | -                             |

### TableRowSelection

| 参数                    | 说明                                                       | 类型                                                         | 默认值       |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ------------ |
| type                    | 选择框类型                                                 | `'checkbox' \| 'radio'`                                      | `'checkbox'` |
| selectedRowKeys         | 指定选中项的 key 数组（受控）                              | `Key[]`                                                      | -            |
| defaultSelectedRowKeys  | 默认选中项的 key 数组                                      | `Key[]`                                                      | -            |
| onChange                | 选中项发生变化时的回调                                     | `(keys: Key[], rows: any[], info: { type: string }) => void` | -            |
| onSelect                | 用户手动选择/取消选择某行的回调                            | `(record, selected, selectedRows, nativeEvent) => void`      | -            |
| onSelectAll             | 用户手动选择/取消选择所有行的回调                          | `(selected, selectedRows, changeRows) => void`               | -            |
| getCheckboxProps        | 选择框的默认属性配置                                       | `(record) => object`                                         | -            |
| columnWidth             | 选择列宽度                                                 | `string \| number`                                           | -            |
| columnTitle             | 自定义选择列表头（替代全选框）                             | `string \| VNode`                                            | -            |
| fixed                   | 将选择列固定在左侧                                         | `boolean`                                                    | -            |
| hideSelectAll           | 隐藏表头全选框                                             | `boolean`                                                    | `false`      |
| preserveSelectedRowKeys | 行移出 dataSource 后仍保留其选中状态                       | `boolean`                                                    | `false`      |
| checkStrictly           | 树形数据下关闭父子选择联动（`false` 时勾选父节点联动后代） | `boolean`                                                    | `false`      |

### ExpandableConfig

| 参数                   | 说明                                                                                         | 类型                                               | 默认值       |
| ---------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------ |
| expandedRowRender      | 额外的展开行内容                                                                             | `(record, index, indent, expanded) => VNode`       | -            |
| expandedRowKeys        | 展开的行，受控属性                                                                           | `Key[]`                                            | -            |
| defaultExpandedRowKeys | 默认展开的行                                                                                 | `Key[]`                                            | -            |
| defaultExpandAllRows   | 初始时是否展开所有行                                                                         | `boolean`                                          | `false`      |
| childrenColumnName     | 树形数据中子节点字段名                                                                       | `string`                                           | `'children'` |
| indentSize             | 树形数据每一层级的缩进宽度（px）                                                             | `number`                                           | `15`         |
| rowExpandable          | 控制某行是否可展开（树形数据下为是否可展开子级）                                             | `(record) => boolean`                              | -            |
| expandRowByClick       | 点击整行时触发展开                                                                           | `boolean`                                          | `false`      |
| expandIconColumnIndex  | 展开图标在最终列序中的位置（含选择列，默认 0；树形数据下为图标内嵌的数据列，默认紧随选择列） | `number`                                           | `0`          |
| expandIcon             | 自定义展开图标                                                                               | `(props: { expanded, record, onExpand }) => VNode` | -            |
| onExpand               | 点击展开图标时触发                                                                           | `(expanded, record) => void`                       | -            |
| onExpandedRowsChange   | 展开的行变化时触发                                                                           | `(expandedKeys: Key[]) => void`                    | -            |

> 树形数据：当 `dataSource` 中的记录带有 `children`（或 `childrenColumnName` 指定的字段）时，Table 自动进入树形模式——展开图标内嵌在首个数据列，不再使用独立的展开列（与 `expandedRowRender` 互斥）。

### TablePaginationConfig

| 参数             | 说明                             | 类型                                                                                            | 默认值              |
| ---------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------- |
| current          | 当前页数                         | `number`                                                                                        | -                   |
| defaultCurrent   | 默认当前页数                     | `number`                                                                                        | `1`                 |
| pageSize         | 每页条数                         | `number`                                                                                        | `10`                |
| defaultPageSize  | 默认每页条数                     | `number`                                                                                        | `10`                |
| total            | 数据总数                         | `number`                                                                                        | -                   |
| showQuickJumper  | 是否可以快速跳转至某页           | `boolean`                                                                                       | `false`             |
| showSizeChanger  | 是否展示 pageSize 切换器         | `boolean`                                                                                       | `false`             |
| showTotal        | 用于显示数据总量和当前数据顺序   | `(total, range) => string`                                                                      | -                   |
| pageSizeOptions  | 指定每页可以显示多少条           | `number[]`                                                                                      | `[10, 20, 50, 100]` |
| size             | 分页器大小                       | `'small' \| 'middle' \| 'large'`                                                                | -                   |
| simple           | 简洁模式                         | `boolean`                                                                                       | `false`             |
| disabled         | 禁用分页                         | `boolean`                                                                                       | `false`             |
| hideOnSinglePage | 只有一页时隐藏分页               | `boolean`                                                                                       | `false`             |
| position         | 分页位置，首项决定上下与水平对齐 | `('topLeft' \| 'topCenter' \| 'topRight' \| 'bottomLeft' \| 'bottomCenter' \| 'bottomRight')[]` | `['bottomRight']`   |
| onChange         | 页码或 pageSize 改变的回调       | `(page, pageSize) => void`                                                                      | -                   |
| onShowSizeChange | pageSize 变化时的回调            | `(page, pageSize) => void`                                                                      | -                   |

## 特性说明

### 多列排序

按住 Shift 键点击多个列的表头，可以实现多列排序。排序优先级按照点击顺序。也可通过 `sorter: { compare, multiple }` 对象形式声明该列参与多列排序。

### 排序受控与默认排序

- `defaultSortOrder`：首次渲染时的默认排序方向。
- `sortOrder`：排序受控属性。任一列设置了 `sortOrder` 后，该列排序状态完全由 props 决定，点击仅触发 `onChange`，需在回调中更新 `sortOrder` 才会改变排序。
- `sortDirections`：自定义点击时的方向循环序列，默认 `['ascend', 'descend', null]`（第三次点击取消排序）。

### 单元格合并

通过列的 `onCell` / `onHeaderCell` 返回 `{ colSpan, rowSpan }` 实现动态合并（返回 `0` 表示该单元格已被相邻单元格合并、不渲染）；列级 `colSpan` 是表头合并的静态写法。

### 树形数据的选择联动

树形模式下 `rowSelection` 默认父子联动：勾选父节点会勾选全部后代，取消任一子节点会取消其祖先。设置 `rowSelection.checkStrictly: true` 可关闭联动，各节点独立勾选。

### 响应式列

通过配置 `responsive` 属性，可以根据屏幕断点自动显示或隐藏列：

- `xs`: 0px
- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px
- `xxl`: 1600px

### 固定列

设置 `fixed` 为 `'left'` 或 `'right'`，可以固定列到左侧或右侧。横向滚动时会自动显示阴影效果（滚到边缘时对应侧阴影消失）。

### 可访问性

Table 组件完全支持键盘导航和屏幕阅读器：

- 使用 `Enter` 或 `Space` 键可以触发排序
- 完整的 ARIA 标签支持
- 符合 WCAG 2.1 AA 标准

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对Table的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface TableSemanticClassNames {
  root?: string // 根节点 div.hmfw-table
  header?: string // 表头 thead.hmfw-table-thead
  body?: string // 表体 tbody.hmfw-table-tbody
  row?: string // 数据行 tr.hmfw-table-row
  cell?: string // 数据单元格 td.hmfw-table-cell
  footer?: string // 表格页脚 div.hmfw-table-footer
  pagination?: string // 分页容器 div.hmfw-table-pagination
}

interface TableSemanticStyles {
  root?: CSSProperties
  header?: CSSProperties
  body?: CSSProperties
  row?: CSSProperties
  cell?: CSSProperties
  footer?: CSSProperties
  pagination?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-table">
  <!-- ↑ classNames.root / styles.root -->
  <div class="hmfw-table-title">标题</div>
  <div class="hmfw-table-container">
    <div class="hmfw-table-content">
      <table>
        <thead class="hmfw-table-thead">
          <!-- ↑ classNames.header / styles.header -->
          <tr>
            <th class="hmfw-table-cell">列头</th>
            <!-- ↑ 表头单元格 <th> 不应用 classNames.cell -->
          </tr>
        </thead>
        <tbody class="hmfw-table-tbody">
          <!-- ↑ classNames.body / styles.body -->
          <tr class="hmfw-table-row">
            <!-- ↑ classNames.row / styles.row -->
            <td class="hmfw-table-cell">单元格</td>
            <!-- ↑ classNames.cell / styles.cell（仅数据单元格 <td>） -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="hmfw-table-footer">页脚</div>
  <!-- ↑ classNames.footer / styles.footer；仅设置 footer 时渲染 -->
  <div class="hmfw-table-pagination">分页</div>
  <!-- ↑ classNames.pagination / styles.pagination；仅分页启用且有数据时渲染 -->
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Table
    :data-source="data"
    :columns="columns"
    :class-names="{ root: 'my-table', header: 'my-header', row: 'my-row', cell: 'my-cell' }"
  />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Table
    :data-source="data"
    :columns="columns"
    :styles="{
      root: { border: '2px solid #1890ff', borderRadius: '12px' },
      header: { background: '#667eea' },
      cell: { fontSize: '14px' },
    }"
  />

  <!-- 组合：classNames 与 styles 混用 -->
  <Table
    :data-source="data"
    :columns="columns"
    :class-names="{ root: 'my-table', header: 'my-header' }"
    :styles="{ row: { cursor: 'pointer' }, cell: { fontSize: '14px' } }"
  />
</template>

<style scoped>
:deep(.my-table) {
  border-radius: 12px;
}

:deep(.my-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

:deep(.my-row:hover) {
  background: #f0f5ff;
}

:deep(.my-cell) {
  font-size: 14px;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-table`）合并，不会互相覆盖
- `cell` 仅应用于数据单元格（`<td>`），表头单元格（`<th>`）不应用；如需定制表头单元格请通过 `header` 的后代选择器（如 `.my-header th`）
- `row` 应用于所有数据行，包括虚拟滚动模式下的行
- `styles.header` 作用于 `thead`；sticky 模式下表头会拆分为独立 table 渲染，定位由外层容器承担。`styles.cell` 会与列的 `align` 对齐样式合并

## 设计 Token

| Token 名称                   | 说明         | 默认值    |
| ---------------------------- | ------------ | --------- |
| `--hmfw-color-primary`       | 主题色       | `#1677ff` |
| `--hmfw-color-primary-hover` | 主题色悬停态 | `#4096ff` |
