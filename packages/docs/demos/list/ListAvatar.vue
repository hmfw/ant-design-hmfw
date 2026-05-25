<template>
  <List :data-source="data">
    <template #renderItem="{ item }">
      <ListItem>
        <ListItemMeta
          :avatar="item.avatar"
          :title="item.title"
          :description="item.description"
        />
      </ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem, ListItemMeta } from 'ant-design-hmfw'

const data = [
  {
    title: '用户名称 1',
    description: '这是一段描述信息',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  },
  {
    title: '用户名称 2',
    description: '这是一段描述信息',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
  },
]
</script>
