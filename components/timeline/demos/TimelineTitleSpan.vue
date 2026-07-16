<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <div>
      <h4>默认标题宽度</h4>
      <Timeline :items="items" />
    </div>
    <div>
      <h4>固定宽度 120px</h4>
      <Timeline :items="items" :title-span="120" />
    </div>
    <div>
      <h4>百分比宽度 20%</h4>
      <Timeline :items="items" title-span="20%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { title: '2024-01-15', content: '项目正式启动' },
  { title: '2024-02', content: '需求分析完成' },
  { title: '2024-03-28', content: '开发测试进行中' },
]
</script>
