<template>
  <Space :size="24">
    <FloatButton :icon="QuestionCircleOutlined" tooltip="字符串提示" :style="s" />
    <FloatButton :icon="InfoCircleOutlined" :tooltip="{ title: '自定义位置', placement: 'top' }" :style="s" />
    <FloatButton
      type="primary"
      :icon="BulbOutlined"
      :tooltip="{ title: '带颜色的提示', color: '#108ee9' }"
      :style="s"
    />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { QuestionCircleOutlined, InfoCircleOutlined, BulbOutlined } from '@hmfw/icons'

const s = { position: 'static' } as const
</script>
