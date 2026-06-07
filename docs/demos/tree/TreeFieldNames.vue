<template>
  <div>
    <h3>使用默认字段（key/title/children）</h3>
    <Tree :tree-data="defaultTreeData" :default-expanded-keys="['1']" :default-selected-keys="['1-1']" />

    <h3 style="margin-top: 24px">自定义字段（fieldNames）</h3>
    <Tree
      :tree-data="customTreeData"
      :field-names="{ key: 'id', title: 'name', children: 'nodes' }"
      :default-expanded-keys="['node-1']"
      :default-selected-keys="['node-1-1']"
    />

    <h3 style="margin-top: 24px">API 数据格式示例</h3>
    <Tree
      :tree-data="apiTreeData"
      :field-names="{ key: 'value', title: 'label', children: 'items' }"
      :default-expanded-keys="['dept-1']"
    />
  </div>
</template>

<script setup lang="ts">
import { Tree } from 'ant-design-hmfw'

// 默认字段格式
const defaultTreeData = [
  {
    key: '1',
    title: 'Node 1',
    children: [
      {
        key: '1-1',
        title: 'Node 1-1',
      },
      {
        key: '1-2',
        title: 'Node 1-2',
      },
    ],
  },
  {
    key: '2',
    title: 'Node 2',
  },
]

// 自定义字段格式（id/name/nodes）
const customTreeData = [
  {
    id: 'node-1',
    name: 'Custom Node 1',
    nodes: [
      {
        id: 'node-1-1',
        name: 'Custom Child 1-1',
      },
      {
        id: 'node-1-2',
        name: 'Custom Child 1-2',
      },
    ],
  },
  {
    id: 'node-2',
    name: 'Custom Node 2',
  },
]

// API 返回的数据格式（value/label/items）
const apiTreeData = [
  {
    value: 'dept-1',
    label: '研发部',
    items: [
      {
        value: 'dept-1-1',
        label: '前端组',
        items: [
          {
            value: 'dept-1-1-1',
            label: 'Vue 团队',
          },
          {
            value: 'dept-1-1-2',
            label: 'React 团队',
          },
        ],
      },
      {
        value: 'dept-1-2',
        label: '后端组',
      },
    ],
  },
  {
    value: 'dept-2',
    label: '产品部',
    items: [
      {
        value: 'dept-2-1',
        label: 'B 端产品',
      },
      {
        value: 'dept-2-2',
        label: 'C 端产品',
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
