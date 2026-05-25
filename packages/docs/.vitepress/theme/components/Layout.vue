<template>
  <ConfigProvider>
    <DefaultLayout />
  </ConfigProvider>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { ConfigProvider } from 'ant-design-hmfw'

const DefaultLayout = DefaultTheme.Layout
</script>
