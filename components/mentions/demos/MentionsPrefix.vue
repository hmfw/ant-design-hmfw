<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">使用 # 触发</div>
      <Mentions :options="topics" prefix="#" placeholder="输入 # 来添加话题" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">使用 @ 或 # 触发</div>
      <Mentions :options="combined" :prefix="['@', '#']" placeholder="输入 @ 提及用户或 # 添加话题" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">自定义多个前缀</div>
      <Mentions :options="customOptions" :prefix="['@', '#', '$']" placeholder="支持 @用户 #话题 $标签" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Space, Mentions } from '@hmfw/ant-design'

const topics = [
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'typescript', label: 'TypeScript' },
]

const combined = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
]

const customOptions = [
  { value: 'alice', label: 'Alice (用户)' },
  { value: 'bob', label: 'Bob (用户)' },
  { value: 'vue', label: 'Vue (话题)' },
  { value: 'frontend', label: 'Frontend (标签)' },
]
</script>
