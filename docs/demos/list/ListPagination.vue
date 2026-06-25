<template>
  <List :data-source="data" :render-item="renderItem" :pagination="{ pageSize: 3 }" bordered />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from '@hmfw/ant-design'

const data = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`)

const renderItem = (item: string) => h(List.Item, null, () => item)
</script>
