<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px">
    <Button @click="locale = zhCN">中文</Button>
    <Button @click="locale = enUS">English</Button>
  </div>
  <ConfigProvider :locale="locale">
    <p>当前语言：{{ locale.locale }}</p>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Button, zhCN, enUS } from '@hmfw/ant-design'

const locale = ref(zhCN)
</script>
