<template>
  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap">
    <Tag color="blue">
      <template #icon><TwitterOutlined /></template>
      Twitter
    </Tag>
    <Tag color="cyan">
      <template #icon><YoutubeOutlined /></template>
      Youtube
    </Tag>
    <Tag closable>
      <template #closeIcon><DeleteOutlined /></template>
      自定义关闭图标
    </Tag>
    <Tag closable :close-icon="false"> 不可关闭 </Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from '@hmfw/ant-design'
import { TwitterOutlined, YoutubeOutlined, DeleteOutlined } from '@hmfw/icons'
</script>
