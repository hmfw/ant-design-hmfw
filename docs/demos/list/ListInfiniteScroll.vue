<template>
  <div>
    <h3>无限滚动示例</h3>
    <div
      ref="scrollContainer"
      style="height: 400px; overflow: auto; border: 1px solid #d9d9d9; border-radius: 4px"
      @scroll="handleScroll"
    >
      <List :data-source="displayData" :loading="loading">
        <template #renderItem="{ item }">
          <ListItem>
            <ListItemMeta
              :avatar="`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.id}`"
              :title="`${item.name}`"
              :description="`${item.description}`"
            />
          </ListItem>
        </template>
      </List>
      <div v-if="loading" style="text-align: center; padding: 12px">
        <Spin />
      </div>
      <div v-if="noMore" style="text-align: center; padding: 12px; color: #999">已加载全部数据</div>
    </div>
    <div style="margin-top: 16px; color: #666">已加载: {{ displayData.length }} / {{ totalData.length }} 项</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { List, ListItem, ListItemMeta, Spin } from 'ant-design-hmfw'

// 模拟总数据（1000 项）
const totalData = Array.from({ length: 1000 }, (_, i) => ({
  id: `item-${i}`,
  name: `Item ${i + 1}`,
  description: `Description for item ${i + 1} - Lorem ipsum dolor sit amet`,
}))

// 当前显示的数据
const displayData = ref(totalData.slice(0, 20))
const loading = ref(false)
const scrollContainer = ref<HTMLElement>()

const noMore = computed(() => displayData.value.length >= totalData.length)

// 模拟异步加载更多数据
const loadMore = () => {
  if (loading.value || noMore.value) return

  loading.value = true

  setTimeout(() => {
    const currentLength = displayData.value.length
    const nextBatch = totalData.slice(currentLength, currentLength + 20)
    displayData.value = [...displayData.value, ...nextBatch]
    loading.value = false
  }, 1000)
}

// 滚动事件处理
const handleScroll = (e: Event) => {
  const target = e.target as HTMLElement
  const scrollTop = target.scrollTop
  const scrollHeight = target.scrollHeight
  const clientHeight = target.clientHeight

  // 当滚动到距离底部 100px 时触发加载
  if (scrollHeight - scrollTop - clientHeight < 100) {
    loadMore()
  }
}
</script>
