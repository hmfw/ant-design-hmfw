<template>
  <List :data-source="data" :render-item="renderItem" bordered />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from 'ant-design-hmfw'

const data = [
  { title: '列表项 1' },
  { title: '列表项 2' },
  { title: '列表项 3' },
]

function onEdit(item: any) {
  console.log('编辑', item)
}

function onDelete(item: any) {
  console.log('删除', item)
}

const renderItem = (item: any) =>
  h(
    List.Item,
    {
      actions: [
        h('a', { onClick: () => onEdit(item) }, '编辑'),
        h('a', { onClick: () => onDelete(item) }, '删除'),
      ],
    },
    () => item.title
  )
</script>
