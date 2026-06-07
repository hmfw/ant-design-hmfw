<template>
  <Steps :current="1" status="error" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '已完成', description: '操作成功' },
  { title: '处理中', description: '操作失败', status: 'error' },
  { title: '待处理', description: '等待处理' },
]
</script>
