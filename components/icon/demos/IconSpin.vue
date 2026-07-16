<template>
  <Space :size="16">
    <LoadingOutlined spin style="font-size: 24px" />
    <SettingOutlined spin style="font-size: 24px" />
    <SmileOutlined style="font-size: 24px" />
    <SmileOutlined :rotate="180" style="font-size: 24px" />
  </Space>
</template>

<script setup lang="ts">
import { LoadingOutlined, SettingOutlined, SmileOutlined } from '@hmfw/icons'
import { Space } from '@hmfw/ant-design'
</script>
