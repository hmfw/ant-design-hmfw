<template>
  <Transfer v-model:target-keys="targetKeys" :data-source="dataSource" :titles="['待选', '已选']" show-search />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i),
  title: `选项 ${i + 1}`,
  description: `描述 ${i + 1}`,
  disabled: i % 8 === 3,
}))

const targetKeys = ref<string[]>(['1', '3', '5'])
</script>
