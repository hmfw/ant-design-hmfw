<template>
  <Space :size="24">
    <FloatButton :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" :icon="SettingOutlined" :style="s" />
    <FloatButton shape="square" :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" shape="square" :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" shape="square" content="文档" :style="s" />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { SettingOutlined } from '@hmfw/icons'

// Render inline within the demo box instead of fixed to the viewport
const s = { position: 'static' } as const
</script>
