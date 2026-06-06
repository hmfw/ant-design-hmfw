<template>
  <Tree
    draggable
    block-node
    :tree-data="treeData"
    :default-expand-all="true"
    @drop="onDrop"
  />
  <p>提示：拖动节点查看 drop 事件（本示例仅打印，不改变数据）。</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      { title: '子节点 1-1', key: '0-0-0' },
      { title: '子节点 1-2', key: '0-0-1' },
    ],
  },
  {
    title: '父节点 2',
    key: '0-1',
    children: [
      { title: '子节点 2-1', key: '0-1-0' },
    ],
  },
]

const onDrop = (info: any) => {
  // eslint-disable-next-line no-console
  console.log('drop', info.dragNode?.key, '->', info.node?.key)
}
</script>
