<template>
  <List :data-source="data" :render-item="renderItem" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from 'ant-design-hmfw'

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
  {
    title: '用户名称 3',
    description: '这是一段描述信息',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
  },
]

const renderItem = (item: any) =>
  h(List.Item, null, () =>
    h(List.Item.Meta, {
      avatar: h(Avatar, { src: item.avatar }),
      title: item.title,
      description: item.description,
    }),
  )
</script>
