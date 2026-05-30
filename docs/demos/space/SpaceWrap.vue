<template>
  <Space :size="[8, 16]" wrap>
    <button v-for="n in 20" :key="n" class="demo-btn">按钮 {{ n }}</button>
  </Space>
</template>

<script setup lang="ts">
import { Space } from 'ant-design-hmfw'
</script>

<style scoped>
.demo-btn {
  padding: 4px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}
</style>
