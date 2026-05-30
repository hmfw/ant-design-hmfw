<template>
  <List
    :data-source="data"
    :render-item="renderItem"
    :grid="{ gutter: 16, column: 4 }"
  />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Card } from 'ant-design-hmfw'

const data = [
  'Content 1',
  'Content 2',
  'Content 3',
  'Content 4',
  'Content 5',
  'Content 6',
  'Content 7',
  'Content 8',
]

const renderItem = (item: string) =>
  h(List.Item, null, () => h(Card, { title: item }, () => `Card content for ${item}`))
</script>
