<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <TextArea v-model:value="text1" placeholder="固定行数" :rows="4" />
    <TextArea v-model:value="text2" placeholder="自适应高度" :auto-size="{ minRows: 2, maxRows: 6 }" />
    <TextArea v-model:value="text3" placeholder="显示字数" :maxlength="100" :show-count="true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from '@hmfw/ant-design'

const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
</script>
