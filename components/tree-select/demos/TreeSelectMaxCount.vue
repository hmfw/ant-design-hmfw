<template>
  <Space direction="vertical" style="width: 320px">
    <TreeSelect
      v-model:value="value"
      :tree-data="treeData"
      multiple
      :max-count="3"
      tree-default-expand-all
      placeholder="最多选择 3 项"
      style="width: 100%"
    />
    <span>已选 {{ value.length }} / 3：{{ value }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect, Space } from '@hmfw/ant-design'
import type { TreeSelectNode } from '@hmfw/ant-design'

const value = ref<(string | number)[]>([])

const treeData: TreeSelectNode[] = [
  {
    value: 'fruit',
    label: '水果',
    children: [
      { value: 'apple', label: '苹果' },
      { value: 'banana', label: '香蕉' },
      { value: 'orange', label: '橙子' },
    ],
  },
  {
    value: 'vegetable',
    label: '蔬菜',
    children: [
      { value: 'tomato', label: '番茄' },
      { value: 'potato', label: '土豆' },
      { value: 'carrot', label: '胡萝卜' },
    ],
  },
]
</script>
