<template>
  <ConfigProvider :theme="theme">
    <RouterView />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from '@hmfw/ant-design'
import { provideTheme } from './composables/useTheme'

const { currentTheme: theme } = provideTheme()
</script>
