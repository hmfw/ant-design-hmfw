<template>
  <Space :size="16" align="center">
    <Icon :component="HomeOutlined" style="font-size: 12px" />
    <Icon :component="HomeOutlined" style="font-size: 16px" />
    <Icon :component="HomeOutlined" style="font-size: 24px" />
    <Icon :component="HomeOutlined" style="font-size: 32px" />
    <Icon :component="HomeOutlined" style="font-size: 48px" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, HomeOutlined } from '@hmfw/ant-design'
</script>
