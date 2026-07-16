<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Timeline } from '@hmfw/ant-design'
import { CheckCircleOutlined, CloseCircleOutlined, ClockCircleOutlined, SyncOutlined } from '@hmfw/icons'

const items = [
  {
    content: '创建成功',
    color: 'green',
    icon: h(CheckCircleOutlined, { style: { fontSize: '16px' } }),
  },
  {
    content: '处理中',
    color: 'blue',
    icon: h(SyncOutlined, { spin: true, style: { fontSize: '16px' } }),
  },
  {
    content: '等待中',
    color: 'gray',
    icon: h(ClockCircleOutlined, { style: { fontSize: '16px' } }),
  },
  {
    content: '失败',
    color: 'red',
    icon: h(CloseCircleOutlined, { style: { fontSize: '16px' } }),
  },
]
</script>
