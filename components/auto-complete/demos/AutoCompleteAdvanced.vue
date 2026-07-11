<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <AutoComplete
      v-model:value="value1"
      :options="options1"
      placeholder="默认高亮第一项"
      :default-active-first-option="true"
    />
    <AutoComplete
      v-model:value="value2"
      :options="options2"
      placeholder="不高亮第一项"
      :default-active-first-option="false"
    />
    <AutoComplete
      v-model:value="value3"
      :options="options3"
      placeholder="自定义清除图标"
      :allow-clear="{ clearIcon: '🗑️' }"
    />
    <AutoComplete
      v-model:value="value4"
      :options="filteredOptions"
      placeholder="无匹配时显示提示"
      not-found-content="无匹配结果"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from '@hmfw/ant-design'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('Vue')
const value4 = ref('')

const options1 = ref([{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }])

const options2 = ref([{ value: 'TypeScript' }, { value: 'JavaScript' }, { value: 'Python' }])

const options3 = ref([{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }])

const filteredOptions = ref([{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }])

const handleSearch = (searchText: string) => {
  const allOptions = ['Vue', 'React', 'Angular']
  filteredOptions.value = allOptions
    .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
    .map((item) => ({ value: item }))
}
</script>
