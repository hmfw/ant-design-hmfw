<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <div>
      <h4>Start（默认 - 左侧）</h4>
      <Timeline :items="items" mode="start" />
    </div>
    <div>
      <h4>End（右侧）</h4>
      <Timeline :items="items" mode="end" />
    </div>
    <div>
      <h4>Alternate（交替）</h4>
      <Timeline :items="items" mode="alternate" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { content: '创建服务现场 2015-09-01' },
  { content: '初步排除网络异常 2015-09-01' },
  { content: '技术测试异常 2015-09-01' },
  { content: '网络异常正在修复 2015-09-01' },
]
</script>
