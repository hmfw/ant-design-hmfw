<template>
  <Tree show-line :tree-data="treeData" :default-expand-all="true" />
</template>

<script setup lang="ts">
import { Tree } from 'ant-design-hmfw'

const treeData = [
  {
    title: '父节点',
    key: '0-0',
    children: [
      { title: '子节点 1', key: '0-0-0' },
      { title: '子节点 2', key: '0-0-1' },
      { title: '子节点 3', key: '0-0-2' },
    ],
  },
]
</script>
