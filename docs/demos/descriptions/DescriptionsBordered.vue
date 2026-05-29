<template>
  <Descriptions title="用户信息" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费模式', children: '按量付费' },
  { label: '自动续费', children: '否' },
  { label: '订单时间', children: '2018-04-24 18:00:00' },
  { label: '使用时间', children: '2019-04-24 18:00:00', span: 2 },
  { label: '状态', children: '运行中' },
  { label: '协商速度', children: '100Mbps' },
  { label: '配置信息', children: 'Data disk type: MongoDB' },
]
</script>
