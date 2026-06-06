<template>
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :titles="['源', '目标']"
    one-way
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: `Item ${i + 1}`,
}))

const targetKeys = ref<string[]>(['1', '3'])
</script>
