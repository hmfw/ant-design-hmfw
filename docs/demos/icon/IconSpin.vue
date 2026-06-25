<template>
  <Space :size="16">
    <Icon :component="LoadingOutlined" style="font-size: 24px" spin />
    <Icon :component="SettingOutlined" style="font-size: 24px" spin />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, LoadingOutlined, SettingOutlined } from '@hmfw/ant-design'
</script>
