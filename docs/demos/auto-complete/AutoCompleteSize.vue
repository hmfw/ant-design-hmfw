<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <AutoComplete
      v-model:value="value1"
      :options="options"
      size="large"
      placeholder="Large size"
    />
    <AutoComplete
      v-model:value="value2"
      :options="options"
      placeholder="Default size"
    />
    <AutoComplete
      v-model:value="value3"
      :options="options"
      size="small"
      placeholder="Small size"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const options = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
])
</script>
