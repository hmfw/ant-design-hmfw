<template>
  <div style="width: 300px">
    <AutoComplete v-model:value="value" :options="options" placeholder="请输入内容" @search="handleSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from '@hmfw/ant-design'

const value = ref('')
const options = ref([
  { value: 'vue', label: 'Vue - 渐进式 JavaScript 框架' },
  { value: 'react', label: 'React - 用于构建用户界面的 JavaScript 库' },
  { value: 'angular', label: 'Angular - 现代 Web 开发平台' },
])

const handleSearch = (searchText: string) => {
  const allOptions = [
    { value: 'vue', label: 'Vue - 渐进式 JavaScript 框架' },
    { value: 'react', label: 'React - 用于构建用户界面的 JavaScript 库' },
    { value: 'angular', label: 'Angular - 现代 Web 开发平台' },
  ]
  options.value = allOptions.filter((item) => item.value.toLowerCase().includes(searchText.toLowerCase()))
}
</script>
