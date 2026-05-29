<template>
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :titles="['待选', '已选']"
    show-search
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: `选项 ${i + 1}`,
  description: `描述 ${i + 1}`,
  disabled: i === 3,
}))

const targetKeys = ref(['1', '3', '5'])
</script>
