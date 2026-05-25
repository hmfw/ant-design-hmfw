<template>
  <ConfigProvider :theme="theme">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <button style="background: var(--hmfw-color-primary); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
        主色按钮
      </button>
      <p style="color: var(--hmfw-color-primary);">主色文字</p>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-hmfw'

const theme = {
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 2,
  },
}
</script>
