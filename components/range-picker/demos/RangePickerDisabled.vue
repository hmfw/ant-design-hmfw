<template>
  <Space direction="vertical">
    <RangePicker :disabled="[true, false]" />
    <RangePicker disabled :value="['2024-01-01', '2024-01-31']" />
  </Space>
</template>

<script setup lang="ts">
import { RangePicker, Space } from '@hmfw/ant-design'
</script>
