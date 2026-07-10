<template>
  <Steps :current="1" status="error" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

const items = [
  { title: '已完成', content: '操作成功' },
  { title: '处理中', content: '操作失败', status: 'error' },
  { title: '待处理', content: '等待处理' },
]
</script>
