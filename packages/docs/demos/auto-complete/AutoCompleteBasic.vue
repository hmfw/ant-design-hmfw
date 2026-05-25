<template>
  <div style="width: 300px;">
    <AutoComplete
      v-model:value="value"
      :options="options"
      placeholder="请输入内容"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value = ref('')
const options = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
  { value: 'Svelte' },
])

const handleSearch = (searchText: string) => {
  const allOptions = ['Vue', 'React', 'Angular', 'Svelte', 'Solid']
  options.value = allOptions
    .filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
    .map(item => ({ value: item }))
}
</script>
