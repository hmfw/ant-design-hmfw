<template>
  <Descriptions title="尺寸示例" :column="3" :items="items" />
  <br />
  <Descriptions title="中等尺寸" size="middle" :column="3" :items="items" />
  <br />
  <Descriptions title="小尺寸" size="small" :column="3" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
]
</script>
