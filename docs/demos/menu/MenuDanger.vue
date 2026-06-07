<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'ant-design-hmfw'
import type { ItemType } from 'ant-design-hmfw'

const items: ItemType[] = [
  { key: '1', label: '普通选项' },
  { key: '2', label: '编辑', icon: '✏️' },
  { type: 'divider' },
  { key: '3', label: '删除', danger: true, icon: '🗑️' },
]
</script>
