<template>
  <div style="display: flex; gap: 32px;">
    <div>
      <h4>Outlined (默认)</h4>
      <Timeline :items="items" />
    </div>
    <div>
      <h4>Filled</h4>
      <Timeline :items="items" variant="filled" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { content: '成功事件', color: 'green' },
  { content: '进行中', color: 'blue' },
  { content: '失败事件', color: 'red' },
]
</script>
