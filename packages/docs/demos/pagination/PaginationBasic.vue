<template>
  <Space direction="vertical">
    <Pagination :total="50" v-model:current="current" />
    <p>当前页：{{ current }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
</script>
