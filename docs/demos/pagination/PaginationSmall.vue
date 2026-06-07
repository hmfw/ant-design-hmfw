<template>
  <Space direction="vertical">
    <Pagination v-model:current="current" size="small" :total="50" />
    <Pagination v-model:current="current" size="small" :total="50" show-size-changer show-quick-jumper />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
</script>
