<template>
  <Steps orientation="vertical" :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

const items = [
  {
    title: '已完成',
    content: '这是一段描述文字。',
  },
  {
    title: '进行中',
    content: '这是一段描述文字。',
  },
  {
    title: '待处理',
    content: '这是一段描述文字。',
  },
]
</script>
