# Tree 树形控件

多层次的结构列表。

## 何时使用

- 文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构
- 使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能

## 代码演示

<script setup>
import TreeBasic from '../demos/tree/TreeBasic.vue'
import TreeBasicSource from '../demos/tree/TreeBasic.vue?raw'
import TreeCheckable from '../demos/tree/TreeCheckable.vue'
import TreeCheckableSource from '../demos/tree/TreeCheckable.vue?raw'
import TreeShowLine from '../demos/tree/TreeShowLine.vue'
import TreeShowLineSource from '../demos/tree/TreeShowLine.vue?raw'
</script>

### 基础用法

最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。

<DemoBlock title="基础用法" :source="TreeBasicSource">
  <TreeBasic />
</DemoBlock>

### 可勾选

使用 checkable 属性可以节点前添加 Checkbox 复选框。

<DemoBlock title="可勾选" :source="TreeCheckableSource">
  <TreeCheckable />
</DemoBlock>

### 显示连接线

使用 showLine 属性可以显示连接线。

<DemoBlock title="显示连接线" :source="TreeShowLineSource">
  <TreeShowLine />
</DemoBlock>

## API

### Tree Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | treeNodes 数据 | `TreeDataNode[]` | - |
| expandedKeys (v-model) | 展开指定的树节点 | `string[]` | - |
| defaultExpandedKeys | 默认展开指定的树节点 | `string[]` | `[]` |
| defaultExpandAll | 默认展开所有树节点 | `boolean` | `false` |
| selectedKeys (v-model) | 设置选中的树节点 | `string[]` | - |
| checkedKeys (v-model) | 选中复选框的树节点 | `string[]` | - |
| checkable | 节点前添加 Checkbox 复选框 | `boolean` | `false` |
| multiple | 支持点选多个节点 | `boolean` | `false` |
| selectable | 是否可选中 | `boolean` | `true` |
| disabled | 将树禁用 | `boolean` | `false` |
| showLine | 是否展示连接线 | `boolean` | `false` |
| blockNode | 是否节点占据一行 | `boolean` | `false` |
| fieldNames | 自定义节点 title、key、children 的字段 | `{ title?: string, key?: string, children?: string }` | - |

### TreeDataNode

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 节点唯一标识 | `string` | - |
| title | 标题 | `string` | - |
| children | 子节点 | `TreeDataNode[]` | - |
| disabled | 禁掉响应 | `boolean` | `false` |
| disableCheckbox | 禁掉 checkbox | `boolean` | `false` |
| isLeaf | 设置为叶子节点 | `boolean` | - |

### Tree Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:expandedKeys | 展开/收起节点时触发 | `(keys: string[]) => void` |
| update:selectedKeys | 点击树节点触发 | `(keys: string[]) => void` |
| update:checkedKeys | 点击复选框触发 | `(keys: string[]) => void` |
| expand | 展开/收起节点时触发 | `(expandedKeys: string[], info: object) => void` |
| select | 点击树节点触发 | `(selectedKeys: string[], info: object) => void` |
| check | 点击复选框触发 | `(checkedKeys: string[], info: object) => void` |
