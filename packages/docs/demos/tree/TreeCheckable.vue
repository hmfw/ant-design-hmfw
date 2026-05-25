<template>
  <Tree
    checkable
    :tree-data="treeData"
    v-model:checked-keys="checkedKeys"
    v-model:expanded-keys="expandedKeys"
  />
  <p>已勾选：{{ checkedKeys.join(', ') }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const expandedKeys = ref(['0-0'])
const checkedKeys = ref<string[]>([])

const treeData = [
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
    children: [
      { title: '子节点 2-1', key: '0-1-0' },
    ],
  },
]
</script>
