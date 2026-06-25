<template>
  <Descriptions title="用户信息" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费方式', children: '预付费' },
  { label: '自动续费', children: '已开通' },
  { label: '订单时间', children: '2018-04-24 18:00:00' },
  { label: '使用时长', children: '2年' },
  { label: '到期时间', children: '2020-04-24 18:00:00' },
  { label: '配置信息', children: '2核 4GB 80GB SSD', span: 3 },
]
</script>
