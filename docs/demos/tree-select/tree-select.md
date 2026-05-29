# TreeSelect 树形选择

树形选择控件，类似 Select 的选择控件，可选择的数据结构是一个树形结构。

## 何时使用

- 从一个树形结构中进行选择时，例如选择部门、分类等

## 代码演示

### 基础用法

<DemoBlock title="基础用法" :source="TreeSelectBasicSource">
  <TreeSelectBasic />
</DemoBlock>

## API

### TreeSelect Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value (v-model) | 选中的值 | `string \| number \| (string \| number)[]` | - |
| treeData | 树形数据 | `TreeSelectNode[]` | `[]` |
| multiple | 是否多选 | `boolean` | `false` |
| treeCheckable | 是否显示 checkbox | `boolean` | `false` |
| showSearch | 是否显示搜索框 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `false` |
| placeholder | 占位文本 | `string` | `'请选择'` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| treeDefaultExpandAll | 是否默认展开所有节点 | `boolean` | `false` |
| fieldNames | 自定义字段名 | `{ label?, value?, children? }` | - |

### TreeSelectNode

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| value | 节点值 | `string \| number` |
| label | 节点标签 | `string` |
| children | 子节点 | `TreeSelectNode[]` |
| disabled | 是否禁用 | `boolean` |
