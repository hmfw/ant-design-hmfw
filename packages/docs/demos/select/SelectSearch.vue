<template>
  <div style="max-width: 300px;">
    <Select
      v-model:value="value"
      :options="options"
      :show-search="true"
      placeholder="请搜索并选择"
      style="width: 100%;"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref('')

const allOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' },
  { label: '成都', value: 'chengdu' },
]

const options = ref(allOptions)

const handleSearch = (searchText: string) => {
  options.value = allOptions.filter(item =>
    item.label.includes(searchText)
  )
}
</script>
