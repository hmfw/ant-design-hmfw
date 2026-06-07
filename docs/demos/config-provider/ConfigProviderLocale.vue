<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px">
    <button @click="locale = zhCN">中文</button>
    <button @click="locale = enUS">English</button>
  </div>
  <ConfigProvider :locale="locale">
    <p>当前语言：{{ locale.locale }}</p>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, zhCN, enUS } from 'ant-design-hmfw'

const locale = ref(zhCN)
</script>
