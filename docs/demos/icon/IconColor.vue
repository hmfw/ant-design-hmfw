<template>
  <Space :size="16">
    <Icon :component="UserOutlined" style="font-size: 24px; color: #1677ff" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #52c41a" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #faad14" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #ff4d4f" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #722ed1" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, UserOutlined } from 'ant-design-hmfw'
</script>
