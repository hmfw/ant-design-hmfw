<template>
  <Space direction="vertical" style="width: 360px" :size="16">
    <!-- maxTagCount：最多显示 2 个标签，超出折叠 -->
    <TreeSelect
      v-model:value="value"
      :tree-data="treeData"
      multiple
      :max-tag-count="2"
      tree-default-expand-all
      placeholder="最多显示 2 个标签"
      style="width: 100%"
    />
    <!-- maxTagCount + 自定义占位 -->
    <TreeSelect
      v-model:value="value2"
      :tree-data="treeData"
      multiple
      :max-tag-count="1"
      :max-tag-placeholder="(omitted) => `还有 ${omitted.length} 项`"
      tree-default-expand-all
      placeholder="自定义折叠文案"
      style="width: 100%"
    />
    <!-- maxTagTextLength：标签文本截断 -->
    <TreeSelect
      v-model:value="value3"
      :tree-data="longData"
      multiple
      :max-tag-text-length="4"
      tree-default-expand-all
      placeholder="标签文本超 4 字截断"
      style="width: 100%"
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect, Space } from '@hmfw/ant-design'
import type { TreeSelectNode } from '@hmfw/ant-design'

const value = ref<(string | number)[]>(['a', 'b', 'c'])
const value2 = ref<(string | number)[]>(['a', 'b', 'c'])
const value3 = ref<(string | number)[]>(['long1', 'long2'])

const treeData: TreeSelectNode[] = [
  {
    value: 'group',
    label: '分组',
    children: [
      { value: 'a', label: '选项 A' },
      { value: 'b', label: '选项 B' },
      { value: 'c', label: '选项 C' },
      { value: 'd', label: '选项 D' },
    ],
  },
]

const longData: TreeSelectNode[] = [
  {
    value: 'group',
    label: '分组',
    children: [
      { value: 'long1', label: '很长的选项名称一' },
      { value: 'long2', label: '很长的选项名称二' },
    ],
  },
]
</script>
