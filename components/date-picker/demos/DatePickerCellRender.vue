<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :cell-render="renderCell" placeholder="定制单元格" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { DatePicker } from '@hmfw/ant-design'

const date = ref<string>('')

// 周末日期显示星标，其余日期保持默认
const renderCell = (current: Date, { originNode }: { originNode: unknown }) => {
  const day = current.getDay()
  if (day === 0 || day === 6) {
    return h('span', { style: { position: 'relative' } }, [
      originNode as never,
      h('span', { style: { position: 'absolute', top: '2px', right: '2px', fontSize: '10px', color: '#ff4d4f' } }, '★'),
    ])
  }
  return originNode
}
</script>
