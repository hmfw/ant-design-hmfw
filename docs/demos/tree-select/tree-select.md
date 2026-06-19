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

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TreeSelectClassNamesSource">
  <TreeSelectClassNames />
</DemoBlock>

## API

### TreeSelect Props

| 参数                    | 说明                                                                             | 类型                                          | 默认值         |
| ----------------------- | -------------------------------------------------------------------------------- | --------------------------------------------- | -------------- |
| value (v-model)         | 选中的值                                                                         | `string \| number \| (string \| number)[]`    | -              |
| treeData                | 树形数据                                                                         | `TreeSelectNode[]`                            | `[]`           |
| multiple                | 是否多选                                                                         | `boolean`                                     | `false`        |
| treeCheckable           | 是否显示 checkbox                                                                | `boolean`                                     | `false`        |
| treeCheckStrictly       | checkable 状态下节点选择完全受控（父子节点选中状态不再关联）                     | `boolean`                                     | `false`        |
| showCheckedStrategy     | checkable 时选中项回填方式                                                       | `'SHOW_ALL' \| 'SHOW_PARENT' \| 'SHOW_CHILD'` | `'SHOW_CHILD'` |
| showSearch              | 是否显示搜索框                                                                   | `boolean`                                     | `false`        |
| autoClearSearchValue    | 多选模式下选中后自动清空搜索框                                                   | `boolean`                                     | `true`         |
| allowClear              | 是否允许清除                                                                     | `boolean`                                     | `false`        |
| placeholder             | 占位文本                                                                         | `string`                                      | `'请选择'`     |
| disabled                | 是否禁用                                                                         | `boolean`                                     | `false`        |
| size                    | 尺寸                                                                             | `'small' \| 'middle' \| 'large'`              | `'middle'`     |
| status                  | 设置校验状态                                                                     | `'error' \| 'warning' \| ''`                  | `''`           |
| maxCount                | 可选中的最多数量，仅在多选时生效                                                 | `number`                                      | -              |
| notFoundContent         | 下拉列表为空时显示的内容                                                         | `string`                                      | `'暂无数据'`   |
| treeDefaultExpandAll    | 是否默认展开所有节点                                                             | `boolean`                                     | `false`        |
| treeDefaultExpandedKeys | 默认展开的树节点 key                                                             | `(string \| number)[]`                        | `[]`           |
| open                    | 受控展开下拉菜单                                                                 | `boolean`                                     | -              |
| defaultOpen             | 默认是否展开下拉菜单                                                             | `boolean`                                     | `false`        |
| fieldNames              | 自定义字段名                                                                     | `{ label?, value?, children? }`               | -              |
| classNames              | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TreeSelectClassNames`                        | -              |
| styles                  | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TreeSelectStyles`                            | -              |

### TreeSelect Events

| 事件名                | 说明                                | 回调参数             |
| --------------------- | ----------------------------------- | -------------------- |
| change                | 选中树节点时调用                    | `(value, labels)`    |
| select                | 被选中时调用                        | `(value, node)`      |
| search                | 搜索框值变化时调用                  | `(value: string)`    |
| treeExpand            | 展开节点时调用                      | `(expandedKeys)`     |
| openChange            | 展开下拉菜单的回调                  | `(open: boolean)`    |
| dropdownVisibleChange | 展开下拉菜单的回调（同 openChange） | `(visible: boolean)` |
| clear                 | 清除时调用                          | `()`                 |

### TreeSelectNode

| 参数            | 说明                               | 类型               |
| --------------- | ---------------------------------- | ------------------ |
| value           | 节点值                             | `string \| number` |
| label           | 节点标签                           | `string`           |
| children        | 子节点                             | `TreeSelectNode[]` |
| disabled        | 是否禁用                           | `boolean`          |
| selectable      | 是否可选（单选/普通多选时生效）    | `boolean`          |
| disableCheckbox | treeCheckable 时禁用该节点的勾选框 | `boolean`          |
| isLeaf          | 是否叶子节点（仅用于标记）         | `boolean`          |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 TreeSelect 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface TreeSelectClassNames {
  root?: string // 根节点 div.hmfw-tree-select
  selector?: string // 选择器容器 div.hmfw-tree-select-selector
  item?: string // 已选项 span.hmfw-tree-select-selection-item（多选模式下为标签）
  placeholder?: string // 占位符 span.hmfw-tree-select-selection-placeholder
  search?: string // 搜索输入框 input.hmfw-tree-select-selection-search
  arrow?: string // 后缀箭头容器 div.hmfw-tree-select-arrow
  clear?: string // 清除按钮 span.hmfw-tree-select-clear
  dropdown?: string // 下拉面板 div.hmfw-tree-select-dropdown
  dropdownEmpty?: string // 空状态 div.hmfw-tree-select-dropdown-empty
  treeNode?: string // 树节点 div.hmfw-tree-select-tree-node
  treeNodeContent?: string // 树节点内容 span.hmfw-tree-select-tree-node-content
  treeSwitcher?: string // 展开/收起按钮 span.hmfw-tree-select-tree-switcher
  treeCheckbox?: string // 复选框 span.hmfw-tree-select-tree-checkbox
  treeIcon?: string // 节点图标 span.hmfw-tree-select-tree-icon
}

interface TreeSelectStyles {
  root?: CSSProperties // 根节点 div.hmfw-tree-select
  selector?: CSSProperties // 选择器容器 div.hmfw-tree-select-selector
  item?: CSSProperties // 已选项 span.hmfw-tree-select-selection-item
  placeholder?: CSSProperties // 占位符 span.hmfw-tree-select-selection-placeholder
  search?: CSSProperties // 搜索输入框 input.hmfw-tree-select-selection-search
  arrow?: CSSProperties // 后缀箭头容器 div.hmfw-tree-select-arrow
  clear?: CSSProperties // 清除按钮 span.hmfw-tree-select-clear
  dropdown?: CSSProperties // 下拉面板 div.hmfw-tree-select-dropdown
  dropdownEmpty?: CSSProperties // 空状态 div.hmfw-tree-select-dropdown-empty
  treeNode?: CSSProperties // 树节点 div.hmfw-tree-select-tree-node
  treeNodeContent?: CSSProperties // 树节点内容 span.hmfw-tree-select-tree-node-content
  treeSwitcher?: CSSProperties // 展开/收起按钮 span.hmfw-tree-select-tree-switcher
  treeCheckbox?: CSSProperties // 复选框 span.hmfw-tree-select-tree-checkbox
  treeIcon?: CSSProperties // 节点图标 span.hmfw-tree-select-tree-icon
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-tree-select">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-tree-select-selector">
    <!-- ↑ classNames.selector / styles.selector 应用于此 -->
    <span class="hmfw-tree-select-selection-item">已选项</span>
    <!-- ↑ classNames.item / styles.item 应用于此 -->
    <span class="hmfw-tree-select-selection-placeholder">请选择</span>
    <!-- ↑ classNames.placeholder / styles.placeholder 应用于此 -->
    <input class="hmfw-tree-select-selection-search" />
    <!-- ↑ classNames.search / styles.search 应用于此 -->
  </div>
  <div class="hmfw-tree-select-arrow">▾</div>
  <!-- ↑ classNames.arrow / styles.arrow 应用于此 -->
  <span class="hmfw-tree-select-clear">×</span>
  <!-- ↑ classNames.clear / styles.clear 应用于此 -->

  <!-- Teleport 到 body -->
  <div class="hmfw-tree-select-dropdown">
    <!-- ↑ classNames.dropdown / styles.dropdown 应用于此 -->
    <div class="hmfw-tree-select-dropdown-empty">暂无数据</div>
    <!-- ↑ classNames.dropdownEmpty / styles.dropdownEmpty 应用于此 -->
    <div class="hmfw-tree-select-tree-node">
      <!-- ↑ classNames.treeNode / styles.treeNode 应用于此 -->
      <span class="hmfw-tree-select-tree-switcher">+</span>
      <!-- ↑ classNames.treeSwitcher / styles.treeSwitcher 应用于此 -->
      <span class="hmfw-tree-select-tree-checkbox">☑</span>
      <!-- ↑ classNames.treeCheckbox / styles.treeCheckbox 应用于此 -->
      <span class="hmfw-tree-select-tree-icon">📁</span>
      <!-- ↑ classNames.treeIcon / styles.treeIcon 应用于此 -->
      <span class="hmfw-tree-select-tree-node-content">节点内容</span>
      <!-- ↑ classNames.treeNodeContent / styles.treeNodeContent 应用于此 -->
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <TreeSelect
    :tree-data="treeData"
    :classNames="{
      root: 'my-tree-select-root',
      selector: 'my-selector',
      dropdown: 'my-dropdown',
      treeNode: 'my-tree-node',
    }"
  />
</template>

<style>
/* dropdown 通过 Teleport 渲染到 body，必须使用 :global() */
:global(.my-dropdown) {
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

:global(.my-tree-node:hover) {
  background: linear-gradient(90deg, #e6f4ff 0%, #bae0ff 100%);
  transform: translateX(4px);
}
</style>

<style scoped>
:deep(.my-tree-select-root) {
  border-color: #722ed1;
}

:deep(.my-selector) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <TreeSelect
    :tree-data="treeData"
    :styles="{
      root: { borderRadius: '12px', borderColor: '#52c41a' },
      selector: { background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)' },
      dropdown: { borderRadius: '12px', boxShadow: '0 6px 20px rgba(82, 196, 26, 0.2)' },
      treeNode: { padding: '6px 8px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `dropdown`、`dropdownEmpty`、`treeNode`、`treeNodeContent`、`treeSwitcher`、`treeCheckbox`、`treeIcon` 通过 `Teleport to="body"` 渲染，因此其样式必须使用 `:global()` 而非 `:deep()`（scoped 样式无法穿透 Teleport）
- `clear` 仅在 `allowClear` 启用且有选中值时显示
- `placeholder` 仅在无选中值时显示
- `treeCheckbox` 仅在 `treeCheckable` 模式下显示
- `item` 在多选模式下对应每个标签

## 设计 Token

| Token 名称             | 说明     | 默认值    |
| ---------------------- | -------- | --------- |
| `--hmfw-color-primary` | 主题色   | `#1677ff` |
| `--hmfw-color-error`   | 错误色   | `#ff4d4f` |
| `--hmfw-color-warning` | 警告色   | `#faad14` |
| `--hmfw-color-border`  | 边框颜色 | `#d9d9d9` |
