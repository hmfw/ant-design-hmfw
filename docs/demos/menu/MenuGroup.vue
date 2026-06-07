<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'ant-design-hmfw'
import type { ItemType } from 'ant-design-hmfw'

const items: ItemType[] = [
  {
    type: 'group',
    label: '用户管理',
    children: [
      { key: '1', label: '用户列表' },
      { key: '2', label: '添加用户' },
    ],
  },
  {
    type: 'group',
    label: '系统设置',
    children: [
      { key: '3', label: '基本设置' },
      { key: '4', label: '高级设置' },
    ],
  },
]
</script>
