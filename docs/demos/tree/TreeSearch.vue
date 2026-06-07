<template>
  <input
    v-model="searchValue"
    placeholder="输入关键字高亮匹配节点"
    style="margin-bottom: 8px; padding: 4px 8px; width: 240px"
  />
  <Tree :tree-data="treeData" :default-expand-all="true" :filter-tree-node="filterNode" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const searchValue = ref('')

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      { title: '子节点 apple', key: '0-0-0' },
      { title: '子节点 banana', key: '0-0-1' },
    ],
  },
  {
    title: '父节点 2',
    key: '0-1',
    children: [{ title: '子节点 cherry', key: '0-1-0' }],
  },
]

const filterNode = (node: any) => {
  if (!searchValue.value) return false
  return String(node.title).toLowerCase().includes(searchValue.value.toLowerCase())
}
</script>
