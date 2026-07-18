<template>
  <div class="tree-controlled-toolbar">
    <Button size="small" @click="expandAll">展开全部</Button>
    <Button size="small" @click="collapseAll">收起全部</Button>
    <Button size="small" @click="checkAll">全选</Button>
    <Button size="small" @click="clearChecked">清空勾选</Button>
  </div>
  <Tree
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
    v-model:checked-keys="checkedKeys"
    checkable
    :tree-data="treeData"
  />
  <p class="tree-controlled-status">展开：{{ expandedKeys.join(', ') || '无' }}</p>
  <p class="tree-controlled-status">选中：{{ selectedKeys.join(', ') || '无' }}</p>
  <p class="tree-controlled-status">勾选：{{ checkedKeys.join(', ') || '无' }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree, Button } from '@hmfw/ant-design'

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      {
        title: '父节点 1-0',
        key: '0-0-0',
        children: [
          { title: '叶子节点 0-0-0-0', key: '0-0-0-0' },
          { title: '叶子节点 0-0-0-1', key: '0-0-0-1' },
        ],
      },
      {
        title: '父节点 1-1',
        key: '0-0-1',
        children: [{ title: '叶子节点 0-0-1-0', key: '0-0-1-0' }],
      },
    ],
  },
]

// 收集所有节点 key，用于展开/全选
const allKeys: string[] = []
const walk = (nodes: typeof treeData) => {
  nodes.forEach((n) => {
    allKeys.push(n.key)
    if (n.children) walk(n.children as typeof treeData)
  })
}
walk(treeData)

const expandedKeys = ref<string[]>(['0-0'])
const selectedKeys = ref<string[]>([])
const checkedKeys = ref<string[]>([])

const expandAll = () => (expandedKeys.value = [...allKeys])
const collapseAll = () => (expandedKeys.value = [])
const checkAll = () => (checkedKeys.value = [...allKeys])
const clearChecked = () => (checkedKeys.value = [])
</script>

<style scoped>
.tree-controlled-toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.tree-controlled-status {
  margin: 4px 0 0;
  color: var(--hmfw-color-text-secondary);
  font-size: 13px;
}
</style>
