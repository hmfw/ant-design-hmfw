<template>
  <Space :size="24">
    <FloatButton :icon="EditOutlined" disabled tooltip="禁用态" :style="s" />
    <FloatButton type="primary" :icon="DeleteOutlined" disabled :style="s" />
    <FloatButton
      href="https://example.com"
      target="_blank"
      disabled
      :icon="LinkOutlined"
      tooltip="禁用的链接（不跳转）"
      :style="s"
    />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { EditOutlined, DeleteOutlined, LinkOutlined } from '@hmfw/icons'

const s = { position: 'static' } as const
</script>
