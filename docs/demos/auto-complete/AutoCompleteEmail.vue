<template>
  <div style="width: 300px">
    <AutoComplete v-model:value="email" :options="emailOptions" placeholder="请输入邮箱" @search="handleEmailSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const email = ref('')
const emailOptions = ref<Array<{ value: string }>>([])

const emailSuffixes = ['@gmail.com', '@qq.com', '@163.com', '@outlook.com', '@hotmail.com']

const handleEmailSearch = (searchText: string) => {
  if (!searchText || searchText.includes('@')) {
    emailOptions.value = []
    return
  }

  emailOptions.value = emailSuffixes.map((suffix) => ({
    value: searchText + suffix,
  }))
}
</script>
