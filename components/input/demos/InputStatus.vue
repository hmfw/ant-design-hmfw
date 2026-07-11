<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Input v-model:value="value1" placeholder="error 状态" status="error" />
    <Input v-model:value="value2" placeholder="warning 状态" status="warning" />
    <Input v-model:value="value3" placeholder="带前缀的 error" prefix="¥" status="error" />

    <TextArea v-model:value="text1" placeholder="TextArea error" status="error" :rows="3" />
    <TextArea v-model:value="text2" placeholder="TextArea warning" status="warning" :rows="3" />

    <InputSearch v-model:value="search1" placeholder="Search error" status="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, TextArea, InputSearch } from '@hmfw/ant-design'

const value1 = ref('格式错误的内容')
const value2 = ref('')
const value3 = ref('')

const text1 = ref('')
const text2 = ref('')

const search1 = ref('')
</script>
