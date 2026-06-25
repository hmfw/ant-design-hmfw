<template>
  <Transfer
    v-model:target-keys="targetKeys"
    :data-source="dataSource"
    :titles="['源', '目标（可拖拽排序）']"
    draggable
    @reorder="handleReorder"
  />
  <p style="margin-top: 12px; color: rgba(0, 0, 0, 0.45); font-size: 12px">
    当前顺序：{{ targetKeys.join(', ') || '（空）' }}
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem, TransferReorderInfo } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 8 }, (_, i) => ({
  key: String(i),
  title: `Item ${i + 1}`,
}))

const targetKeys = ref<(string | number)[]>(['0', '1', '2', '3'])

function handleReorder(info: TransferReorderInfo) {
  console.log('reorder', info)
}
</script>
