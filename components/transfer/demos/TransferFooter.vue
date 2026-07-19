<template>
  <Transfer
    v-model:target-keys="targetKeys"
    :data-source="dataSource"
    :titles="['待选', '已选']"
    :footer="renderFooter"
  />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem, TransferListContext } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i),
  title: `选项 ${i + 1}`,
  description: `描述 ${i + 1}`,
}))

const targetKeys = ref<string[]>(['1', '3', '5', '7', '9'])

function renderFooter(info: TransferListContext) {
  const { direction, filteredItems, selectedKeys } = info
  const isLeft = direction === 'left'

  return h(
    'div',
    {
      style: {
        padding: '8px 12px',
        fontSize: '12px',
        color: 'rgba(0, 0, 0, 0.45)',
        borderTop: '1px solid #f0f0f0',
      },
    },
    [
      h('div', {}, `${isLeft ? '源' : '目标'}列表：共 ${filteredItems.length} 项`),
      selectedKeys.length > 0 && h('div', { style: { marginTop: '4px' } }, `已选中：${selectedKeys.length} 项`),
    ],
  )
}
</script>
