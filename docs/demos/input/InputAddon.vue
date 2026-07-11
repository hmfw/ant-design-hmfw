<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Input v-model:value="value1" placeholder="请输入用户名" :prefix="UserOutlined" />
    <Input v-model:value="value2" placeholder="请输入金额" prefix="¥" suffix="元" />
    <!-- addon-before/addon-after are deprecated, use Space.Compact instead -->
    <Input v-model:value="value4" placeholder="支持清除" allow-clear />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@hmfw/ant-design'
import { UserOutlined } from '@hmfw/icons'

const value1 = ref('')
const value2 = ref('')
const value4 = ref('')
</script>
