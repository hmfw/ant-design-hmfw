<script setup lang="ts">
import { Avatar } from '@hmfw/ant-design'
import { UserOutlined } from '@hmfw/icons'
</script>

<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
      <template #default> 响应式 </template>
    </Avatar>
    <Avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }" :icon="UserOutlined" />
    <div style="color: #999; font-size: 12px">调整浏览器窗口宽度查看头像尺寸变化</div>
  </div>
</template>
