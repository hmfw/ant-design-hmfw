<template>
  <Space :size="32" align="center">
    <FloatButton :badge="{ count: 5 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ count: 128, overflowCount: 99 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ dot: true }" :icon="InfoCircleOutlined" :style="s" />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { InfoCircleOutlined } from '@hmfw/icons'

const s = { position: 'static' } as const
</script>
