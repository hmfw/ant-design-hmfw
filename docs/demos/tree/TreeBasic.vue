<template>
  <Tree v-model:expanded-keys="expandedKeys" v-model:selected-keys="selectedKeys" :tree-data="treeData" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const expandedKeys = ref(['0-0', '0-0-0'])
const selectedKeys = ref<string[]>([])

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      {
        title: '父节点 1-0',
        key: '0-0-0',
        children: [
          { title: '叶子节点', key: '0-0-0-0' },
          { title: '叶子节点', key: '0-0-0-1' },
        ],
      },
      {
        title: '父节点 1-1',
        key: '0-0-1',
        children: [{ title: '叶子节点', key: '0-0-1-0' }],
      },
    ],
  },
]
</script>
