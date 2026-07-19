<template>
  <Space direction="vertical" style="width: 300px" :size="16">
    <!-- 整体禁用 -->
    <TreeSelect :tree-data="treeData" disabled :default-value="'child1-1'" placeholder="整体禁用" style="width: 100%" />
    <!-- 节点级禁用 / 不可选 / 复选框禁用 -->
    <TreeSelect v-model:value="value" :tree-data="disabledData" placeholder="部分节点禁用" style="width: 100%" />
    <TreeSelect
      v-model:value="checkedValue"
      :tree-data="disabledData"
      tree-checkable
      placeholder="勾选模式下禁用复选框"
      style="width: 100%"
    />
  </Space>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { TreeSelect, Space } from '@hmfw/ant-design'
import type { TreeSelectNode } from '@hmfw/ant-design'

const value = shallowRef<string>()
const checkedValue = ref<(string | number)[]>([])

const treeData: TreeSelectNode[] = [
  {
    value: 'parent1',
    label: '父节点 1',
    children: [
      { value: 'child1-1', label: '子节点 1-1' },
      { value: 'child1-2', label: '子节点 1-2' },
    ],
  },
]

const disabledData: TreeSelectNode[] = [
  {
    value: 'parent1',
    label: '父节点 1（不可选）',
    selectable: false,
    children: [
      { value: 'child1-1', label: '子节点 1-1' },
      { value: 'child1-2', label: '子节点 1-2（禁用）', disabled: true },
      { value: 'child1-3', label: '子节点 1-3（禁用勾选框）', disableCheckbox: true },
    ],
  },
]
</script>
