# TreeSelect 树形选择

树形选择控件，类似 Select 的选择控件，可选择的数据结构是一个树形结构。

## 何时使用

- 从一个树形结构中进行选择时，例如选择部门、分类等

## 代码演示

### 基础用法

<DemoBlock title="基础用法" :source="TreeSelectBasicSource">
  <TreeSelectBasic />
</DemoBlock>

### 多选

<DemoBlock title="多选" :source="TreeSelectMultipleSource">
  <TreeSelectMultiple />
</DemoBlock>

### 可勾选

<DemoBlock title="可勾选" :source="TreeSelectCheckableSource">
  <TreeSelectCheckable />
</DemoBlock>

### 搜索

<DemoBlock title="搜索" :source="TreeSelectSearchSource">
  <TreeSelectSearch />
</DemoBlock>

## API

### TreeSelect Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value (v-model) | 选中的值 | `string \| number \| (string \| number)[]` | - |
| treeData | 树形数据 | `TreeSelectNode[]` | `[]` |
| multiple | 是否多选 | `boolean` | `false` |
| treeCheckable | 是否显示 checkbox | `boolean` | `false` |
| treeCheckStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | `boolean` | `false` |
| showCheckedStrategy | checkable 时选中项回填方式 | `'SHOW_ALL' \| 'SHOW_PARENT' \| 'SHOW_CHILD'` | `'SHOW_CHILD'` |
| showSearch | 是否显示搜索框 | `boolean` | `false` |
| autoClearSearchValue | 多选模式下选中后自动清空搜索框 | `boolean` | `true` |
| allowClear | 是否允许清除 | `boolean` | `false` |
| placeholder | 占位文本 | `string` | `'请选择'` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| status | 设置校验状态 | `'error' \| 'warning' \| ''` | `''` |
| maxCount | 可选中的最多数量，仅在多选时生效 | `number` | - |
| notFoundContent | 下拉列表为空时显示的内容 | `string` | `'暂无数据'` |
| treeDefaultExpandAll | 是否默认展开所有节点 | `boolean` | `false` |
| treeDefaultExpandedKeys | 默认展开的树节点 key | `(string \| number)[]` | `[]` |
| open | 受控展开下拉菜单 | `boolean` | - |
| defaultOpen | 默认是否展开下拉菜单 | `boolean` | `false` |
| fieldNames | 自定义字段名 | `{ label?, value?, children? }` | - |

### TreeSelect Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中树节点时调用 | `(value, labels)` |
| select | 被选中时调用 | `(value, node)` |
| search | 搜索框值变化时调用 | `(value: string)` |
| treeExpand | 展开节点时调用 | `(expandedKeys)` |
| openChange | 展开下拉菜单的回调 | `(open: boolean)` |
| dropdownVisibleChange | 展开下拉菜单的回调（同 openChange） | `(visible: boolean)` |
| clear | 清除时调用 | `()` |

### TreeSelectNode

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| value | 节点值 | `string \| number` |
| label | 节点标签 | `string` |
| children | 子节点 | `TreeSelectNode[]` |
| disabled | 是否禁用 | `boolean` |
| selectable | 是否可选（单选/普通多选时生效） | `boolean` |
| disableCheckbox | treeCheckable 时禁用该节点的勾选框 | `boolean` |
| isLeaf | 是否叶子节点（仅用于标记） | `boolean` |
