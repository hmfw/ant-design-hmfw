<template>
  <List :data-source="data" bordered>
    <template #renderItem="{ item }">
      <ListItem>
        <template #actions>
          <a @click="onEdit(item)">编辑</a>
          <a @click="onDelete(item)">删除</a>
        </template>
        {{ item.title }}
      </ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem } from 'ant-design-hmfw'

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
</script>
