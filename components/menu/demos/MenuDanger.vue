<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import type { ItemType } from '@hmfw/ant-design'
import { EditOutlined, DeleteOutlined } from '@hmfw/icons'

const items: ItemType[] = [
  { key: '1', label: '普通选项' },
  { key: '2', label: '编辑', icon: h(EditOutlined) },
  { type: 'divider' },
  { key: '3', label: '删除', danger: true, icon: h(DeleteOutlined) },
]
</script>
