<template>
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :titles="['源', '目标']"
    :pagination="{ pageSize: 5 }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i),
  title: `选项 ${i + 1}`,
}))

const targetKeys = ref<string[]>(['2', '5', '8'])
</script>
