<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <div>
      <div style="margin-bottom: 8px">单选：{{ single ?? '无' }}</div>
      <CheckableTagGroup v-model:value="single" :options="options" />
    </div>
    <div>
      <div style="margin-bottom: 8px">多选：{{ multiple.join(', ') || '无' }}</div>
      <CheckableTagGroup v-model:value="multiple" multiple :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckableTagGroup } from '@hmfw/ant-design'

const options = ['Movies', 'Books', 'Music', 'Sports']
const single = ref<string | null>('Books')
const multiple = ref<string[]>(['Movies', 'Music'])
</script>
