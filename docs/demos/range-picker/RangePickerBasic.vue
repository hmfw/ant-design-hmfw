<template>
  <Space direction="vertical">
    <RangePicker v-model:value="range" />
    <span>选择范围：{{ range[0] }} ~ {{ range[1] }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RangePicker, Space } from 'ant-design-hmfw'
import type { RangeValue } from 'ant-design-hmfw'

const range = ref<RangeValue>([null, null])
</script>
