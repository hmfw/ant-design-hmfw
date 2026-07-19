<template>
  <Space direction="vertical" style="width: 320px">
    <TreeSelect
      v-model:value="value"
      :tree-data="treeData"
      allow-clear
      show-search
      tree-default-expand-all
      placeholder="操作后查看事件日志"
      style="width: 100%"
      @change="onChange"
      @select="onSelect"
      @search="onSearch"
      @tree-expand="onTreeExpand"
      @open-change="onOpenChange"
      @clear="onClear"
    />
    <div
      style="max-height: 160px; overflow: auto; padding: 8px; background: #fafafa; border-radius: 6px; font-size: 12px"
    >
      <div v-for="(log, i) in logs" :key="i">{{ log }}</div>
      <div v-if="logs.length === 0" style="color: #999">暂无事件</div>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { TreeSelect, Space } from '@hmfw/ant-design'
import type { TreeSelectNode, TreeSelectValue } from '@hmfw/ant-design'

const value = shallowRef<string>()
const logs = ref<string[]>([])

const log = (msg: string) => {
  logs.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`)
  if (logs.value.length > 20) logs.value.pop()
}

const onChange = (val: TreeSelectValue | undefined, labels: string[]) =>
  log(`change: value=${JSON.stringify(val)}, labels=${JSON.stringify(labels)}`)
const onSelect = (val: string | number, node: TreeSelectNode) => log(`select: ${val} (${node.label})`)
const onSearch = (text: string) => log(`search: "${text}"`)
const onTreeExpand = (keys: (string | number)[]) => log(`treeExpand: ${JSON.stringify(keys)}`)
const onOpenChange = (open: boolean) => log(`openChange: ${open}`)
const onClear = () => log('clear')

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
