<template>
  <div>
    <h3>基础虚拟滚动（10,000 项）</h3>
    <List
      :data-source="data"
      virtual
      :height="400"
      :item-height="48"
    >
      <template #renderItem="{ item, index }">
        <ListItem>
          <ListItemMeta
            :title="`Item ${index + 1}`"
            :description="`This is item ${index + 1} with ID: ${item.id}`"
          />
        </ListItem>
      </template>
    </List>

    <h3 style="margin-top: 24px">带头像的虚拟滚动（50,000 项）</h3>
    <List
      :data-source="largeData"
      virtual
      :height="400"
      :item-height="73"
    >
      <template #renderItem="{ item, index }">
        <ListItem>
          <ListItemMeta
            :avatar="`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.id}`"
            :title="`User ${index + 1}: ${item.name}`"
            :description="`Email: ${item.email} | Created: ${item.createdAt}`"
          />
        </ListItem>
      </template>
    </List>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { List, ListItem, ListItemMeta } from '../../../components'

// 生成 10,000 项数据
const data = computed(() => {
  return Array.from({ length: 10000 }, (_, i) => ({
    id: `item-${i}`,
    title: `Item ${i + 1}`,
  }))
})

// 生成 50,000 项数据
const largeData = computed(() => {
  return Array.from({ length: 50000 }, (_, i) => ({
    id: `user-${i}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    createdAt: new Date(2020, 0, 1 + (i % 365)).toLocaleDateString(),
  }))
})
</script>
