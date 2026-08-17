<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">大尺寸</div>
      <Mentions :options="options" size="large" placeholder="大尺寸" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">中等尺寸（默认）</div>
      <Mentions :options="options" size="middle" placeholder="中等尺寸（默认）" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">小尺寸</div>
      <Mentions :options="options" size="small" placeholder="小尺寸" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Space, Mentions } from '@hmfw/ant-design'

const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie' },
  { value: 'dave', label: 'Dave' },
]
</script>
