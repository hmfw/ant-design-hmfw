<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <InputSearch
      v-model:value="keyword"
      placeholder="请输入搜索内容"
      @search="handleSearch"
    />
    <InputSearch
      v-model:value="keyword2"
      placeholder="带按钮的搜索框"
      enter-button
      @search="handleSearch"
    />
    <InputSearch
      v-model:value="keyword3"
      placeholder="加载中"
      enter-button
      :loading="loading"
      @search="handleSearchWithLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputSearch } from 'ant-design-hmfw'

const keyword = ref('')
const keyword2 = ref('')
const keyword3 = ref('')
const loading = ref(false)

const handleSearch = (value: string) => {
  console.log('搜索：', value)
}

const handleSearchWithLoading = (value: string) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    console.log('搜索完成：', value)
  }, 1500)
}
</script>
