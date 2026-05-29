<template>
  <Space direction="vertical">
    <Pagination size="small" :total="50" v-model:current="current" />
    <Pagination
      size="small"
      :total="50"
      v-model:current="current"
      show-size-changer
      show-quick-jumper
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
</script>
