<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <InputPassword v-model:value="password" placeholder="请输入密码" />
    <InputPassword v-model:value="password2" placeholder="不可切换可见性" :visibility-toggle="false" />
    <p>密码：{{ password }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputPassword } from '@hmfw/ant-design'

const password = ref('')
const password2 = ref('')
</script>
