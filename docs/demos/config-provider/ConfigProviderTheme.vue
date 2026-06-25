<template>
  <ConfigProvider :theme="theme">
    <div style="display: flex; flex-direction: column; gap: 12px">
      <Button
        style="
          background: var(--hmfw-color-primary);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
        "
      >
        主色按钮
      </Button>
      <p style="color: var(--hmfw-color-primary)">主色文字</p>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider, Button } from '@hmfw/ant-design'

const theme = {
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 2,
  },
}
</script>
