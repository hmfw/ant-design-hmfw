<template>
  <div>
    <p style="margin-bottom: 12px; color: #666">
      拖动节点可重新排列。已内置边界检查：节点不能拖到自身或自己的后代上（防止循环引用）。
    </p>
    <Tree
      draggable
      block-node
      :tree-data="treeData"
      :default-expand-all="true"
      :allow-drop="allowDrop"
      @drop="onDrop"
    />
    <p style="margin-top: 12px; color: #999; font-size: 12px">
      本示例通过 allowDrop 额外限制：叶子节点不能作为放置目标。
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from '@hmfw/ant-design'

const treeData = ref([
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      { title: '子节点 1-1', key: '0-0-0' },
      { title: '子节点 1-2', key: '0-0-1' },
    ],
  },
  {
    title: '父节点 2',
    key: '0-1',
    children: [{ title: '子节点 2-1', key: '0-1-0' }],
  },
])

// 额外限制：不允许放到叶子节点上（仅容器节点可接收）
const allowDrop = ({ dropNode }: any) => {
  return Array.isArray(dropNode.children) && dropNode.children.length > 0
}

// 在树中查找并移除某个 key 的节点，返回被移除的节点
const findAndRemove = (nodes: any[], key: string): any => {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].key === key) {
      return nodes.splice(i, 1)[0]
    }
    if (nodes[i].children) {
      const found = findAndRemove(nodes[i].children, key)
      if (found) return found
    }
  }
  return null
}

// 将节点插入到目标节点的子级
const insertInto = (nodes: any[], targetKey: string, dragNode: any): boolean => {
  for (const node of nodes) {
    if (node.key === targetKey) {
      if (!node.children) node.children = []
      node.children.push(dragNode)
      return true
    }
    if (node.children && insertInto(node.children, targetKey, dragNode)) {
      return true
    }
  }
  return false
}

const onDrop = (info: any) => {
  const data = JSON.parse(JSON.stringify(treeData.value))
  const dragNode = findAndRemove(data, info.dragNode.key)
  if (dragNode) {
    insertInto(data, info.node.key, dragNode)
    treeData.value = data
  }
}
</script>
