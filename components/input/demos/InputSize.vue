<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Input v-model:value="value" size="large" placeholder="大号 Large" />
    <Input v-model:value="value" placeholder="默认 Middle" />
    <Input v-model:value="value" size="small" placeholder="小号 Small" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@hmfw/ant-design'

const value = ref('')
</script>
