<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" multiple :default-selected-keys="['1', '2']" />
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'ant-design-hmfw'
import type { ItemType } from 'ant-design-hmfw'

const items: ItemType[] = [
  { key: '1', label: '选项一' },
  { key: '2', label: '选项二' },
  { key: '3', label: '选项三' },
  { key: '4', label: '选项四' },
]
</script>
