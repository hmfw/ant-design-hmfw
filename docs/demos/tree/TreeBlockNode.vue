<template>
  <div>
    <h3>普通模式（默认）</h3>
    <Tree :tree-data="treeData" :default-expanded-keys="['0-0']" :default-selected-keys="['0-0-0']" />

    <h3 style="margin-top: 24px">块级节点模式（blockNode）</h3>
    <Tree :tree-data="treeData" :default-expanded-keys="['0-0']" :default-selected-keys="['0-0-0']" block-node />
  </div>
</template>

<script setup lang="ts">
import { Tree } from 'ant-design-hmfw'

const treeData = [
  {
    key: '0-0',
    title: 'Parent Node 0',
    children: [
      {
        key: '0-0-0',
        title: 'Child Node 0-0',
      },
      {
        key: '0-0-1',
        title: 'Child Node 0-1',
      },
      {
        key: '0-0-2',
        title: 'Child Node 0-2',
      },
    ],
  },
  {
    key: '0-1',
    title: 'Parent Node 1',
    children: [
      {
        key: '0-1-0',
        title: 'Child Node 1-0',
      },
      {
        key: '0-1-1',
        title: 'Child Node 1-1',
      },
    ],
  },
]
</script>

<style scoped>
h3 {
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
}
</style>
