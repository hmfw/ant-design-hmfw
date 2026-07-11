<template>
  <Transfer
    v-model:target-keys="targetKeys"
    :data-source="dataSource"
    :titles="['待选', '已选']"
    :render="(item) => `[${item.title}]`"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: `选项 ${i + 1}`,
}))

const targetKeys = ref<string[]>(['1', '3'])
</script>
