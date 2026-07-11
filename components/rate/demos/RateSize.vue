<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">Large:</p>
      <Rate v-model:value="value" size="large" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Middle (default):</p>
      <Rate v-model:value="value" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Small:</p>
      <Rate v-model:value="value" size="small" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
</script>
