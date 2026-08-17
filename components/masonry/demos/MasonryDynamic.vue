<template>
  <div>
    <Space style="margin-bottom: 16px">
      <Button @click="addItem">添加项</Button>
      <Button :disabled="items.length === 0" @click="removeItem">删除项</Button>
      <Button @click="shuffleItems">随机排序</Button>
    </Space>

    <Masonry :columns="4" :gutter="16" :items="items">
      <template #default="{ item, index }">
        <Card size="small" :style="{ height: item + 'px' }">
          {{ index + 1 }}
        </Card>
      </template>
    </Masonry>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Masonry, Card, Button, Space } from '@hmfw/ant-design'
import type { MasonryItemType } from '@hmfw/ant-design'

const initialHeights = [150, 50, 90, 70, 110, 150, 130, 80]

const items = ref<MasonryItemType<number>[]>(
  initialHeights.map((height, index) => ({
    key: `item-${index}`,
    data: height,
  })),
)

let nextId = initialHeights.length

const addItem = () => {
  const height = Math.floor(Math.random() * 100) + 50
  items.value.push({
    key: `item-${nextId++}`,
    data: height,
  })
}

const removeItem = () => {
  if (items.value.length > 0) {
    items.value.pop()
  }
}

const shuffleItems = () => {
  items.value = [...items.value].sort(() => Math.random() - 0.5)
}
</script>
