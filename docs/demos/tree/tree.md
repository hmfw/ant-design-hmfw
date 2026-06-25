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

### 细粒度样式控制

通过 `classNames` / `styles` 对树节点、图标、标题、展开开关等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TreeClassNamesSource">
  <TreeClassNames />
</DemoBlock>

## API

### Tree Props

| 参数                   | 说明                                                                             | 类型                                                        | 默认值  |
| ---------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------- |
| treeData               | treeNodes 数据                                                                   | `TreeDataNode[]`                                            | `[]`    |
| expandedKeys (v-model) | 展开指定的树节点                                                                 | `(string \| number)[]`                                      | -       |
| defaultExpandedKeys    | 默认展开指定的树节点                                                             | `(string \| number)[]`                                      | `[]`    |
| defaultExpandAll       | 默认展开所有树节点                                                               | `boolean`                                                   | `false` |
| defaultExpandParent    | 默认展开父节点                                                                   | `boolean`                                                   | `true`  |
| autoExpandParent       | 展开时自动展开父节点                                                             | `boolean`                                                   | `false` |
| selectedKeys (v-model) | 设置选中的树节点                                                                 | `(string \| number)[]`                                      | -       |
| defaultSelectedKeys    | 默认选中的树节点                                                                 | `(string \| number)[]`                                      | `[]`    |
| checkedKeys (v-model)  | 选中复选框的树节点；`checkStrictly` 时为 `{ checked, halfChecked }`              | `(string \| number)[] \| { checked, halfChecked }`          | -       |
| defaultCheckedKeys     | 默认勾选的树节点                                                                 | `(string \| number)[]`                                      | `[]`    |
| checkable              | 节点前添加 Checkbox 复选框                                                       | `boolean`                                                   | `false` |
| checkStrictly          | 父子节点选中状态不再关联                                                         | `boolean`                                                   | `false` |
| multiple               | 支持点选多个节点                                                                 | `boolean`                                                   | `false` |
| selectable             | 是否可选中                                                                       | `boolean`                                                   | `true`  |
| disabled               | 将树禁用                                                                         | `boolean`                                                   | `false` |
| draggable              | 节点可拖拽                                                                       | `boolean \| (node) => boolean \| { icon?, nodeDraggable? }` | `false` |
| allowDrop              | 是否允许拖放到目标节点，返回 `false` 阻止                                        | `({ dragNode, dropNode, dropPosition }) => boolean`         | -       |
| showLine               | 是否展示连接线                                                                   | `boolean \| { showLeafIcon }`                               | `false` |
| showIcon               | 是否展示节点图标                                                                 | `boolean`                                                   | `false` |
| blockNode              | 节点是否占据一行                                                                 | `boolean`                                                   | `false` |
| indent                 | 每级缩进像素                                                                     | `number`                                                    | `24`    |
| filterTreeNode         | 按需高亮节点，返回 `true` 高亮                                                   | `(node) => boolean`                                         | -       |
| icon                   | 自定义节点图标（名称或渲染函数）                                                 | `string \| (node, ctx) => VNode`                            | -       |
| switcherIcon           | 自定义展开/收起图标                                                              | `string \| ({ expanded, isLeaf }) => VNode`                 | -       |
| titleRender            | 自定义节点标题渲染                                                               | `(node) => VNode`                                           | -       |
| fieldNames             | 自定义节点 title、key、children 的字段                                           | `{ title?, key?, children? }`                               | -       |
| virtual                | 是否开启虚拟滚动                                                                 | `boolean`                                                   | `false` |
| height                 | 虚拟滚动容器高度（开启 virtual 时必需）                                          | `number \| string`                                          | -       |
| itemHeight             | 虚拟滚动每项高度                                                                 | `number`                                                    | `28`    |
| rootClassName          | 根节点 className                                                                 | `string`                                                    | -       |
| classNames             | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `object`                                                    | -       |
| styles                 | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `object`                                                    | -       |

### DirectoryTree Props

继承全部 Tree Props，并新增：

| 参数         | 说明                             | 类型                                | 默认值    |
| ------------ | -------------------------------- | ----------------------------------- | --------- |
| expandAction | 点击展开节点的方式，`false` 关闭 | `false \| 'click' \| 'doubleClick'` | `'click'` |
| showIcon     | 是否展示图标                     | `boolean`                           | `true`    |

### TreeDataNode

| 参数            | 说明           | 类型                        | 默认值  |
| --------------- | -------------- | --------------------------- | ------- |
| key             | 节点唯一标识   | `string \| number`          | -       |
| title           | 标题           | `string`                    | -       |
| children        | 子节点         | `TreeDataNode[]`            | -       |
| disabled        | 禁掉响应       | `boolean`                   | `false` |
| disableCheckbox | 禁掉 checkbox  | `boolean`                   | `false` |
| selectable      | 是否可选中     | `boolean`                   | `true`  |
| checkable       | 是否可勾选     | `boolean`                   | -       |
| isLeaf          | 设置为叶子节点 | `boolean`                   | -       |
| icon            | 自定义图标     | `string \| (node) => VNode` | -       |

### Tree Events

| 事件名                                                 | 说明                | 回调参数                                                                               |
| ------------------------------------------------------ | ------------------- | -------------------------------------------------------------------------------------- |
| update:expandedKeys                                    | 展开/收起节点时触发 | `(keys: Key[]) => void`                                                                |
| update:selectedKeys                                    | 点击树节点触发      | `(keys: Key[]) => void`                                                                |
| update:checkedKeys                                     | 点击复选框触发      | `(keys: Key[] \| { checked, halfChecked }) => void`                                    |
| expand                                                 | 展开/收起节点时触发 | `(keys, { expanded, node, nativeEvent }) => void`                                      |
| select                                                 | 点击树节点触发      | `(keys, { event, selected, node, selectedNodes, nativeEvent }) => void`                |
| check                                                  | 点击复选框触发      | `(keys, { event, checked, node, checkedNodes, halfCheckedKeys, nativeEvent }) => void` |
| dblclick                                               | 双击节点            | `(event, node) => void`                                                                |
| rightClick                                             | 右键节点            | `({ event, node }) => void`                                                            |
| dragstart / dragenter / dragover / dragleave / dragend | 拖拽过程事件        | `({ event, node, ... }) => void`                                                       |
| drop                                                   | 拖拽释放            | `({ node, dragNode, dragNodesKeys, dropPosition, dropToGap, nativeEvent }) => void`    |

### 键盘支持

聚焦节点后支持：`↑`/`↓` 移动焦点，`→` 展开（或进入子节点），`←` 收起（或回到父节点），`Enter`/`Space` 选中或勾选。

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对树形控件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
interface TreeSemanticClassNames {
  root?: string // 树根容器
  item?: string // 树节点项
  itemIcon?: string // 节点图标
  itemTitle?: string // 节点标题
  itemSwitcher?: string // 展开/收起开关
}

interface TreeSemanticStyles {
  root?: Record<string, string | number> // 树根容器
  item?: Record<string, string | number> // 树节点项
  itemIcon?: Record<string, string | number> // 节点图标
  itemTitle?: Record<string, string | number> // 节点标题
  itemSwitcher?: Record<string, string | number> // 展开/收起开关
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-tree">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <!-- 树节点（每个节点一个） -->
  <div class="hmfw-tree-treenode">
    <!-- ↑ classNames.item / styles.item 应用于此 -->

    <!-- 展开/收起开关 -->
    <span class="hmfw-tree-switcher">
      <!-- ↑ classNames.itemSwitcher / styles.itemSwitcher 应用于此 -->
      <svg>展开/收起图标</svg>
    </span>

    <!-- 复选框（checkable 时） -->
    <span class="hmfw-tree-checkbox">
      <input type="checkbox" />
    </span>

    <!-- 节点图标（showIcon 时） -->
    <span class="hmfw-tree-iconEle">
      <!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 -->
      <svg>节点图标</svg>
    </span>

    <!-- 节点标题 -->
    <span class="hmfw-tree-title">
      <!-- ↑ classNames.itemTitle / styles.itemTitle 应用于此 -->
      节点文字
    </span>
  </div>

  <!-- 子节点（嵌套结构） -->
  <div class="hmfw-tree-treenode">...</div>
</div>
```

### 使用 classNames

```vue
<template>
  <!-- 自定义节点样式 -->
  <Tree
    :tree-data="treeData"
    :class-names="{
      item: 'my-tree-item',
    }"
  />

  <!-- 自定义图标和标题 -->
  <Tree
    :tree-data="treeData"
    show-icon
    :class-names="{
      itemIcon: 'my-tree-icon',
      itemTitle: 'my-tree-title',
    }"
  />

  <!-- 自定义展开/收起开关 -->
  <Tree
    :tree-data="treeData"
    :class-names="{
      itemSwitcher: 'my-tree-switcher',
    }"
  />

  <!-- 完整自定义 -->
  <Tree
    :tree-data="treeData"
    show-icon
    checkable
    :class-names="{
      root: 'my-tree-root',
      item: 'my-tree-item',
      itemIcon: 'my-tree-icon',
      itemTitle: 'my-tree-title',
      itemSwitcher: 'my-tree-switcher',
    }"
  />
</template>

<script setup lang="ts">
import { Tree } from '@hmfw/ant-design'

const treeData = [
  {
    key: '1',
    title: '父节点 1',
    children: [
      { key: '1-1', title: '子节点 1-1' },
      { key: '1-2', title: '子节点 1-2' },
    ],
  },
  {
    key: '2',
    title: '父节点 2',
    children: [{ key: '2-1', title: '子节点 2-1' }],
  },
]
</script>

<style scoped>
:deep(.my-tree-root) {
  background: #fafafa;
  padding: 16px;
  border-radius: 8px;
}

:deep(.my-tree-item) {
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.my-tree-item:hover) {
  background: #e6f7ff;
  transform: translateX(4px);
}

:deep(.my-tree-icon) {
  color: #1890ff;
  font-size: 18px;
  margin-right: 8px;
}

:deep(.my-tree-title) {
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

:deep(.my-tree-switcher) {
  color: #722ed1;
  font-size: 16px;
}

:deep(.my-tree-switcher svg) {
  transition: transform 0.3s;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制节点 -->
  <Tree
    :tree-data="treeData"
    :styles="{
      item: {
        padding: '8px 12px',
        borderRadius: '4px',
      },
    }"
  />

  <!-- 自定义图标和标题 -->
  <Tree
    :tree-data="treeData"
    show-icon
    :styles="{
      itemIcon: {
        color: '#1890ff',
        fontSize: '18px',
        marginRight: '8px',
      },
      itemTitle: {
        fontWeight: '500',
        color: '#333',
        fontSize: '14px',
      },
    }"
  />

  <!-- 自定义开关 -->
  <Tree
    :tree-data="treeData"
    :styles="{
      itemSwitcher: {
        color: '#722ed1',
        fontSize: '16px',
      },
    }"
  />

  <!-- 完整自定义 -->
  <Tree
    :tree-data="treeData"
    show-icon
    :styles="{
      root: {
        background: '#fafafa',
        padding: '16px',
        borderRadius: '8px',
      },
      item: {
        padding: '8px 12px',
        borderRadius: '4px',
      },
      itemIcon: {
        color: '#1890ff',
        fontSize: '18px',
      },
      itemTitle: {
        fontWeight: '500',
        fontSize: '14px',
      },
      itemSwitcher: {
        color: '#722ed1',
      },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `item` / `itemIcon` / `itemTitle` / `itemSwitcher` 会应用到**所有节点**，无法针对单个节点定制（如需单节点样式，请使用 `titleRender` 自定义渲染）
- `itemIcon` 仅在 `showIcon={true}` 或节点有自定义 `icon` 时生效
- `itemSwitcher` 对所有节点生效，包括叶子节点（叶子节点的 switcher 默认显示为占位符）
- 虚拟滚动模式（`virtual={true}`）下，样式应用方式相同，但需注意性能影响
- 拖拽过程中的视觉反馈（如拖拽占位符）不受 `classNames` / `styles` 控制，由内置样式决定

### 不支持的能力（待后补）

异步加载 `loadData`/`loadedKeys`、`TreeNode` 子组件式 JSX 声明、拖拽插入位置指示线（当前拖放仅支持放入目标节点子级，触发 `drop` 事件，并已内置循环引用边界检查与 `allowDrop` 校验）。

---

## 设计 Token

| Token 名称                     | 说明           | 默认值             |
| ------------------------------ | -------------- | ------------------ |
| `--hmfw-color-text`            | 主文本色       | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary`  | 次要文本色     | `rgba(0,0,0,0.65)` |
| `--hmfw-color-text-disabled`   | 禁用文本色     | `rgba(0,0,0,0.25)` |
| `--hmfw-color-text-quaternary` | 四级文本色     | `rgba(0,0,0,0.25)` |
| `--hmfw-color-primary`         | 主题色         | `#1677ff`          |
| `--hmfw-color-primary-bg`      | 主题色背景     | `#e6f4ff`          |
| `--hmfw-color-primary-border`  | 主题色边框     | `#91caff`          |
| `--hmfw-color-bg-text-hover`   | 文本悬停背景色 | `rgba(0,0,0,0.06)` |
| `--hmfw-color-border`          | 边框色         | `#d9d9d9`          |
