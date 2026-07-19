<template>
  <Space direction="vertical" style="width: 300px" :size="16">
    <TreeSelect v-model:value="v1" :tree-data="treeData" status="error" placeholder="错误状态" style="width: 100%" />
    <TreeSelect v-model:value="v2" :tree-data="treeData" status="warning" placeholder="警告状态" style="width: 100%" />
    <TreeSelect
      v-model:value="v3"
      :tree-data="treeData"
      status="error"
      multiple
      placeholder="多选错误状态"
      style="width: 100%"
    />
  </Space>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { TreeSelect, Space } from '@hmfw/ant-design'
import type { TreeSelectNode } from '@hmfw/ant-design'

const v1 = shallowRef<string>()
const v2 = shallowRef<string>()
const v3 = ref<(string | number)[]>([])

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
