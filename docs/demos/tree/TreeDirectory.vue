<template>
  <Tree.DirectoryTree
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
    multiple
    :tree-data="treeData"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from '@hmfw/ant-design'

const expandedKeys = ref(['0-0'])
const selectedKeys = ref<string[]>([])

const treeData = [
  {
    title: 'src',
    key: '0-0',
    children: [
      {
        title: 'components',
        key: '0-0-0',
        children: [
          { title: 'Button.tsx', key: '0-0-0-0', isLeaf: true },
          { title: 'Tree.tsx', key: '0-0-0-1', isLeaf: true },
        ],
      },
      {
        title: 'utils',
        key: '0-0-1',
        children: [{ title: 'index.ts', key: '0-0-1-0', isLeaf: true }],
      },
    ],
  },
]
</script>
