<template>
  <div>
    <p style="margin-bottom: 12px">切换主题预览插画配色（暗黑模式下默认插画自动适配深色背景）：</p>
    <div :data-theme="theme" style="margin-bottom: 12px">
      <Button @click="theme = 'light'">浅色</Button>
      <Button @click="theme = 'dark'">暗黑</Button>
      <span style="margin-left: 12px">当前：{{ theme }}</span>
    </div>
    <div
      :data-theme="theme"
      :style="{
        padding: '24px',
        borderRadius: '8px',
        background: theme === 'dark' ? '#141414' : '#ffffff',
        color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'inherit',
      }"
    >
      <Empty description="暗黑模式下的空状态" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Empty, Button } from 'ant-design-hmfw'

// 通过祖先元素的 data-theme="dark" / data-theme="light" 切换插画配色
// 也可使用 .hmfw-theme-dark / .hmfw-theme-light 类，或直接跟随系统配色
const theme = ref<'light' | 'dark'>('dark')
</script>
