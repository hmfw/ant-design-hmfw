<template>
  <div style="display: flex; gap: 32px">
    <div style="flex: 1">
      <h4>正序（默认）</h4>
      <Timeline :items="items" />
    </div>
    <div style="flex: 1">
      <h4>倒序（reverse）</h4>
      <Timeline :items="items" :reverse="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { title: '2024-01', content: '项目启动' },
  { title: '2024-02', content: '需求分析' },
  { title: '2024-03', content: '开发测试', color: 'blue' },
  { title: '2024-04', content: '上线部署', color: 'green' },
]
</script>
