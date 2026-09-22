<template>
  <SemanticPreview component="Tree" :semantics="semantics" :height="320">
    <template #default="{ classNames }">
      <!-- 透传 classNames；展开全部节点并开启 checkable/showIcon，让 itemSwitcher / itemIcon 均渲染 -->
      <Tree
        :tree-data="treeData"
        default-expand-all
        checkable
        show-icon
        :default-selected-keys="['0-0-0']"
        :class-names="classNames"
        style="min-width: 260px"
      />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { FolderOutlined, FileOutlined } from '@hmfw/icons'
import { Tree } from '@hmfw/ant-design'

// 带图标的树数据：父节点用文件夹图标、叶子节点用文件图标，保证 itemIcon 节点渲染
const treeData = [
  {
    title: '父节点',
    key: '0-0',
    icon: FolderOutlined,
    children: [
      { title: '子节点一', key: '0-0-0', icon: FileOutlined },
      { title: '子节点二', key: '0-0-1', icon: FileOutlined },
    ],
  },
]

// 与 TreeSemanticClassNames / TreeSemanticStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '树的根容器（div.hmfw-tree，role="tree"）。承载整体布局、缩进变量 --hmfw-tree-indent-size，以及 show-line / block-node / disabled 等状态类，始终渲染。',
  },
  {
    name: 'item',
    desc: '单个树节点行（div.hmfw-treenode，role="treeitem"）。承载每行的选中、禁用、叶子、激活、拖拽等状态样式，每个节点渲染一个（因此会框出多个）。',
  },
  {
    name: 'itemIcon',
    desc: '节点图标容器（span.hmfw-tree-iconEle）。承载节点前置图标的样式，仅在 show-icon 且该节点存在图标（node.icon / props.icon，或 showLine 的叶子图标）时渲染。',
  },
  {
    name: 'itemTitle',
    desc: '节点标题包裹（span.hmfw-tree-node-content-wrapper）。承载标题区的点击热区、hover/选中背景与内边距，是节点文字的容器，始终随节点渲染。',
  },
  {
    name: 'itemSwitcher',
    desc: '展开/收起开关（span.hmfw-tree-switcher）。承载展开箭头的样式，含 switcher_open / switcher_close / switcher-noop 状态类；叶子节点为占位（noop），始终随节点渲染。',
  },
]
</script>
