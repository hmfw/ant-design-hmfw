<template>
  <div>
    <Mentions
      v-model:value="value"
      :options="options"
      :loading="loading"
      placeholder="输入 @ 搜索用户（支持异步加载）"
      @search="handleSearch"
    />
    <div style="margin-top: 16px; color: rgba(0, 0, 0, 0.45); font-size: 14px">提示：输入 @ 后输入用户名进行搜索</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mentions } from '@hmfw/ant-design'

const value = ref('')
const options = ref<Array<{ value: string; label: string }>>([])
const loading = ref(false)

// 模拟后端数据
const allUsers = [
  { value: 'alice', label: 'Alice Wang' },
  { value: 'bob', label: 'Bob Chen' },
  { value: 'charlie', label: 'Charlie Li' },
  { value: 'dave', label: 'Dave Zhang' },
  { value: 'eve', label: 'Eve Liu' },
  { value: 'frank', label: 'Frank Wu' },
]

const handleSearch = (text: string) => {
  loading.value = true

  // 模拟异步搜索
  setTimeout(() => {
    const searchText = text.toLowerCase()
    options.value = allUsers.filter(
      (user) => user.value.toLowerCase().includes(searchText) || user.label.toLowerCase().includes(searchText),
    )
    loading.value = false
  }, 500)
}

// 初始化时加载所有选项
handleSearch('', '@')
</script>
