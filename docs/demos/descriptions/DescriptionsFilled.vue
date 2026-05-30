<template>
  <Descriptions title="Span 填充示例" :column="3" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database', span: 2 },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
  { label: '金额', children: '$80.00', span: 'filled' as const },
  { label: '折扣', children: '$20.00', span: 'filled' as const },
  { label: '实付', children: '$60.00' },
]
</script>
