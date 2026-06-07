# Transfer 穿梭框

双栏穿梭选择框，用于将元素从一列移入另一列。

## 何时使用

- 需要在两个集合之间进行选择，且需要直观展示两个集合的内容时
- 用于将可选项在两个列表之间移动

## 代码演示

### 基础用法

最简单的用法，展示了数据在左右两栏之间的移动。

<DemoBlock title="基础用法" :source="TransferBasicSource">
  <TransferBasic />
</DemoBlock>

### 带搜索框

支持搜索功能，可以快速找到目标项。

<DemoBlock title="带搜索框" :source="TransferSearchSource">
  <TransferSearch />
</DemoBlock>

### 自定义渲染

可以自定义每项的渲染内容。

<DemoBlock title="自定义渲染" :source="TransferCustomSource">
  <TransferCustom />
</DemoBlock>

### 分页

数据较多时，可以使用分页。

<DemoBlock title="分页" :source="TransferPaginationSource">
  <TransferPagination />
</DemoBlock>

### 单向模式

单向模式下，只能从左往右移动，右侧项可单独删除。

<DemoBlock title="单向模式" :source="TransferOneWaySource">
  <TransferOneWay />
</DemoBlock>

### 拖拽排序

设置 `draggable` 后，右侧列表项可通过 HTML5 拖拽调整顺序。

<DemoBlock title="拖拽排序" :source="TransferDraggableSource">
  <TransferDraggable />
</DemoBlock>

## API

### Transfer Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据源 | `TransferItem[]` | `[]` |
| targetKeys (v-model) | 右侧列表的 key 集合 | `TransferKey[]` | `[]` |
| selectedKeys (v-model) | 选中项的 key 集合 | `TransferKey[]` | `[]` |
| titles | 标题集合 | `(VNode \| string)[]` | `['', '']` |
| operations | 操作按钮文案（已废弃） | `string[]` | `[]` |
| render | 自定义渲染函数 | `(item: TransferItem) => RenderResult` | - |
| rowKey | 自定义提取 key | `(record: TransferItem) => TransferKey` | - |
| showSearch | 显示搜索框 | `boolean \| TransferSearchOption` | `false` |
| filterOption | 自定义搜索函数 | `(input: string, item: TransferItem, direction: TransferDirection) => boolean` | - |
| footer | 列表底部渲染 | `(info: TransferListContext) => VNode \| string \| null` | - |
| listStyle | 列表样式 | `CSSProperties \| ((info: { direction: TransferDirection }) => CSSProperties)` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| showSelectAll | 是否展示全选勾选框 | `boolean` | `true` |
| selectAllLabels | 自定义全选文案 | `SelectAllLabel[]` | - |
| oneWay | 单向模式 | `boolean` | `false` |
| draggable | 是否允许通过拖拽对右侧列表项排序 | `boolean` | `false` |
| pagination | 分页配置 | `boolean \| PaginationType` | - |
| status | 校验状态 | `'error' \| 'warning'` | - |
| locale | 文案配置 | `Partial<TransferLocale>` | - |
| rootClassName | 根元素 class | `string` | - |
| classNames | 语义化 class | `TransferSemanticClassNames` | - |
| styles | 语义化 style | `TransferSemanticStyles` | - |

### Transfer Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 右侧列表变化时触发 | `(targetKeys: TransferKey[], direction: TransferDirection, moveKeys: TransferKey[])` |
| selectChange | 选中项变化时触发 | `(sourceSelectedKeys: TransferKey[], targetSelectedKeys: TransferKey[])` |
| search | 搜索框内容变化时触发 | `(direction: TransferDirection, value: string)` |
| scroll | 列表滚动时触发 | `(direction: TransferDirection, e: Event)` |
| reorder | 右侧列表通过拖拽重新排序后触发 | `(info: TransferReorderInfo)` |

### TransferItem

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| key | 唯一标识 | `string \| number` |
| title | 标题 | `string` |
| description | 描述 | `string` |
| disabled | 是否禁用 | `boolean` |

### PaginationType

```ts
type PaginationType = boolean | {
  pageSize?: number
  simple?: boolean
  showSizeChanger?: boolean
  showLessItems?: boolean
}
```

### TransferLocale

```ts
interface TransferLocale {
  titles?: (VNode | string)[]
  notFoundContent?: VNode | string | (VNode | string)[]
  searchPlaceholder?: string
  itemUnit?: string
  itemsUnit?: string
  remove?: string
  selectAll?: string
  deselectAll?: string
  selectCurrent?: string
  selectInvert?: string
  removeAll?: string
  removeCurrent?: string
}
```

### TransferSemanticClassNames

```ts
interface TransferSemanticClassNames {
  root?: string
  section?: string
  header?: string
  title?: string
  body?: string
  list?: string
  item?: string
  itemIcon?: string
  itemContent?: string
  footer?: string
  actions?: string
}
```

### TransferReorderInfo

```ts
interface TransferReorderInfo {
  direction: TransferDirection
  oldTargetKeys: TransferKey[]
  newTargetKeys: TransferKey[]
  activeKey: TransferKey
  fromIndex: number
  toIndex: number
}
```

## 特性说明

### 搜索

设置 `showSearch` 为 `true` 启用搜索功能，也可传对象 `{ placeholder, defaultValue }` 自定义搜索框。默认搜索匹配 `title` 字段，可通过 `filterOption` 自定义匹配逻辑。

### 分页

数据量大时，可以设置 `pagination` 为 `true` 或配置对象启用分页。分页后全选操作仅影响当前页，可通过 selections 下拉菜单操作所有项。

### 单向模式

设置 `oneWay` 后，只显示右箭头按钮，右侧列表每项显示删除按钮，用于"添加到列表"的场景。

### 拖拽排序

设置 `draggable` 后，右侧目标列表的每一项变为可拖拽元素（基于 HTML5 Drag and Drop）。拖拽并释放后会触发 `update:targetKeys` 与 `reorder` 事件，`reorder` 回调携带旧/新 `targetKeys` 顺序、被拖拽项 `activeKey` 以及 `fromIndex` / `toIndex`。禁用项不可拖拽。

### Shift 多选

按住 Shift 键点击可进行范围多选。

### 键盘操作

暂不支持键盘导航（与 AntD 一致）。
