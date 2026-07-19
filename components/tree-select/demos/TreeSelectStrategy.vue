<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px; color: #666">SHOW_CHILD（默认，仅回填子节点）：</div>
      <TreeSelect
        v-model:value="v1"
        :tree-data="treeData"
        tree-checkable
        show-checked-strategy="SHOW_CHILD"
        tree-default-expand-all
        placeholder="SHOW_CHILD"
        style="width: 320px"
      />
      <div style="margin-top: 4px; color: #999">值：{{ v1 }}</div>
    </div>
    <div>
      <div style="margin-bottom: 8px; color: #666">SHOW_PARENT（子节点全选时仅回填父节点）：</div>
      <TreeSelect
        v-model:value="v2"
        :tree-data="treeData"
        tree-checkable
        show-checked-strategy="SHOW_PARENT"
        tree-default-expand-all
        placeholder="SHOW_PARENT"
        style="width: 320px"
      />
      <div style="margin-top: 4px; color: #999">值：{{ v2 }}</div>
    </div>
    <div>
      <div style="margin-bottom: 8px; color: #666">SHOW_ALL（回填所有选中节点，含父节点）：</div>
      <TreeSelect
        v-model:value="v3"
        :tree-data="treeData"
        tree-checkable
        show-checked-strategy="SHOW_ALL"
        tree-default-expand-all
        placeholder="SHOW_ALL"
        style="width: 320px"
      />
      <div style="margin-top: 4px; color: #999">值：{{ v3 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect } from '@hmfw/ant-design'
import type { TreeSelectNode } from '@hmfw/ant-design'

const v1 = ref<(string | number)[]>([])
const v2 = ref<(string | number)[]>([])
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
]
</script>
