# Tree 树形控件

多层次的结构列表。

## 何时使用

- 文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构
- 使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能

## 代码演示

### 基础用法

最简单的用法，展示可选中，默认展开等功能。

<DemoBlock title="基础用法" :source="TreeBasicSource">
  <TreeBasic />
</DemoBlock>

### 可勾选

使用 `checkable` 属性可以在节点前添加 Checkbox 复选框，父子节点选中状态默认级联联动（半选态自动计算）。

<DemoBlock title="可勾选" :source="TreeCheckableSource">
  <TreeCheckable />
</DemoBlock>

### 显示连接线

使用 `showLine` 属性可以显示连接线。

<DemoBlock title="显示连接线" :source="TreeShowLineSource">
  <TreeShowLine />
</DemoBlock>

### 目录树

内置的 `Tree.DirectoryTree`，默认展示文件夹/文件图标，支持 `expandAction` 控制点击展开方式。

<DemoBlock title="目录树" :source="TreeDirectorySource">
  <TreeDirectory />
</DemoBlock>

### 可拖拽

设置 `draggable` 后节点可拖动，拖放时触发 `drop` 事件。

<DemoBlock title="可拖拽" :source="TreeDraggableSource">
  <TreeDraggable />
</DemoBlock>

### 搜索高亮

配合 `filterTreeNode` 对命中的节点做高亮处理。

<DemoBlock title="搜索高亮" :source="TreeSearchSource">
  <TreeSearch />
</DemoBlock>

### 块级节点

设置 `blockNode` 后，节点将占据整行宽度，选中样式会覆盖整行。

<DemoBlock title="块级节点" :source="TreeBlockNodeSource">
  <TreeBlockNode />
</DemoBlock>

### 自定义字段

通过 `fieldNames` 可以自定义数据字段名，适配不同的后端接口格式。

<DemoBlock title="自定义字段" :source="TreeFieldNamesSource">
  <TreeFieldNames />
</DemoBlock>

### 虚拟滚动

设置 `virtual` 和 `height` 属性支持大数据场景的虚拟滚动。

<DemoBlock title="虚拟滚动" :source="TreeVirtualSource">
  <TreeVirtual />
</DemoBlock>

## API

### Tree Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | treeNodes 数据 | `TreeDataNode[]` | `[]` |
| expandedKeys (v-model) | 展开指定的树节点 | `(string \| number)[]` | - |
| defaultExpandedKeys | 默认展开指定的树节点 | `(string \| number)[]` | `[]` |
| defaultExpandAll | 默认展开所有树节点 | `boolean` | `false` |
| defaultExpandParent | 默认展开父节点 | `boolean` | `true` |
| autoExpandParent | 展开时自动展开父节点 | `boolean` | `false` |
| selectedKeys (v-model) | 设置选中的树节点 | `(string \| number)[]` | - |
| defaultSelectedKeys | 默认选中的树节点 | `(string \| number)[]` | `[]` |
| checkedKeys (v-model) | 选中复选框的树节点；`checkStrictly` 时为 `{ checked, halfChecked }` | `(string \| number)[] \| { checked, halfChecked }` | - |
| defaultCheckedKeys | 默认勾选的树节点 | `(string \| number)[]` | `[]` |
| checkable | 节点前添加 Checkbox 复选框 | `boolean` | `false` |
| checkStrictly | 父子节点选中状态不再关联 | `boolean` | `false` |
| multiple | 支持点选多个节点 | `boolean` | `false` |
| selectable | 是否可选中 | `boolean` | `true` |
| disabled | 将树禁用 | `boolean` | `false` |
| draggable | 节点可拖拽 | `boolean \| (node) => boolean \| { icon?, nodeDraggable? }` | `false` |
| allowDrop | 是否允许拖放到目标节点，返回 `false` 阻止 | `({ dragNode, dropNode, dropPosition }) => boolean` | - |
| showLine | 是否展示连接线 | `boolean \| { showLeafIcon }` | `false` |
| showIcon | 是否展示节点图标 | `boolean` | `false` |
| blockNode | 节点是否占据一行 | `boolean` | `false` |
| indent | 每级缩进像素 | `number` | `24` |
| filterTreeNode | 按需高亮节点，返回 `true` 高亮 | `(node) => boolean` | - |
| icon | 自定义节点图标（名称或渲染函数） | `string \| (node, ctx) => VNode` | - |
| switcherIcon | 自定义展开/收起图标 | `string \| ({ expanded, isLeaf }) => VNode` | - |
| titleRender | 自定义节点标题渲染 | `(node) => VNode` | - |
| fieldNames | 自定义节点 title、key、children 的字段 | `{ title?, key?, children? }` | - |
| virtual | 是否开启虚拟滚动 | `boolean` | `false` |
| height | 虚拟滚动容器高度（开启 virtual 时必需） | `number \| string` | - |
| itemHeight | 虚拟滚动每项高度 | `number` | `28` |
| rootClassName | 根节点 className | `string` | - |
| classNames | 语义化 class（`root`/`item`/`itemIcon`/`itemTitle`/`itemSwitcher`） | `object` | - |
| styles | 语义化内联样式（同上 key） | `object` | - |

### DirectoryTree Props

继承全部 Tree Props，并新增：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| expandAction | 点击展开节点的方式，`false` 关闭 | `false \| 'click' \| 'doubleClick'` | `'click'` |
| showIcon | 是否展示图标 | `boolean` | `true` |

### TreeDataNode

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 节点唯一标识 | `string \| number` | - |
| title | 标题 | `string` | - |
| children | 子节点 | `TreeDataNode[]` | - |
| disabled | 禁掉响应 | `boolean` | `false` |
| disableCheckbox | 禁掉 checkbox | `boolean` | `false` |
| selectable | 是否可选中 | `boolean` | `true` |
| checkable | 是否可勾选 | `boolean` | - |
| isLeaf | 设置为叶子节点 | `boolean` | - |
| icon | 自定义图标 | `string \| (node) => VNode` | - |

### Tree Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:expandedKeys | 展开/收起节点时触发 | `(keys: Key[]) => void` |
| update:selectedKeys | 点击树节点触发 | `(keys: Key[]) => void` |
| update:checkedKeys | 点击复选框触发 | `(keys: Key[] \| { checked, halfChecked }) => void` |
| expand | 展开/收起节点时触发 | `(keys, { expanded, node, nativeEvent }) => void` |
| select | 点击树节点触发 | `(keys, { event, selected, node, selectedNodes, nativeEvent }) => void` |
| check | 点击复选框触发 | `(keys, { event, checked, node, checkedNodes, halfCheckedKeys, nativeEvent }) => void` |
| dblclick | 双击节点 | `(event, node) => void` |
| rightClick | 右键节点 | `({ event, node }) => void` |
| dragstart / dragenter / dragover / dragleave / dragend | 拖拽过程事件 | `({ event, node, ... }) => void` |
| drop | 拖拽释放 | `({ node, dragNode, dragNodesKeys, dropPosition, dropToGap, nativeEvent }) => void` |

### 键盘支持

聚焦节点后支持：`↑`/`↓` 移动焦点，`→` 展开（或进入子节点），`←` 收起（或回到父节点），`Enter`/`Space` 选中或勾选。

### 不支持的能力（待后补）

异步加载 `loadData`/`loadedKeys`、`TreeNode` 子组件式 JSX 声明、拖拽插入位置指示线（当前拖放仅支持放入目标节点子级，触发 `drop` 事件，并已内置循环引用边界检查与 `allowDrop` 校验）。

<script setup>
import TreeBasic from './TreeBasic.vue'
import TreeBasicSource from './TreeBasic.vue?raw'
import TreeCheckable from './TreeCheckable.vue'
import TreeCheckableSource from './TreeCheckable.vue?raw'
import TreeShowLine from './TreeShowLine.vue'
import TreeShowLineSource from './TreeShowLine.vue?raw'
import TreeDirectory from './TreeDirectory.vue'
import TreeDirectorySource from './TreeDirectory.vue?raw'
import TreeDraggable from './TreeDraggable.vue'
import TreeDraggableSource from './TreeDraggable.vue?raw'
import TreeSearch from './TreeSearch.vue'
import TreeSearchSource from './TreeSearch.vue?raw'
import TreeBlockNode from './TreeBlockNode.vue'
import TreeBlockNodeSource from './TreeBlockNode.vue?raw'
import TreeFieldNames from './TreeFieldNames.vue'
import TreeFieldNamesSource from './TreeFieldNames.vue?raw'
import TreeVirtual from './TreeVirtual.vue'
import TreeVirtualSource from './TreeVirtual.vue?raw'
</script>
