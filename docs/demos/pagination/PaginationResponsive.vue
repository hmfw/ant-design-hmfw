<template>
  <Space direction="vertical">
    <p class="tip">缩小浏览器窗口至 576px 以下，分页器会自动切换为小尺寸。</p>
    <Pagination v-model:current="current" :total="500" responsive show-size-changer show-quick-jumper />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from '@hmfw/ant-design'

const current = ref(1)
</script>

<style scoped>
.tip {
  margin: 0;
  color: var(--hmfw-color-text-secondary, rgba(0, 0, 0, 0.45));
  font-size: 13px;
}
</style>
