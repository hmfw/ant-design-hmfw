<template>
  <Space direction="vertical">
    <Pagination v-model:current="current" :total="50" />
    <p>当前页：{{ current }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
</script>
