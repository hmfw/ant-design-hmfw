<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect v-model:value="value" :tree-data="treeData" tree-checkable placeholder="请选择" style="width: 100%" />
    <span>选中：{{ value }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect, Space } from '@hmfw/ant-design'
import type { TreeSelectNode } from '@hmfw/ant-design'

const value = ref<(string | number)[]>([])

const treeData: TreeSelectNode[] = [
  {
    value: 'parent1',
    label: '父节点 1',
    children: [
      { value: 'child1-1', label: '子节点 1-1' },
      { value: 'child1-2', label: '子节点 1-2' },
    ],
  },
  {
    value: 'parent2',
    label: '父节点 2',
    children: [{ value: 'child2-1', label: '子节点 2-1' }],
  },
]
</script>
