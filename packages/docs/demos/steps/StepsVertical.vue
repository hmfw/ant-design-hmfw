<template>
  <Steps
    direction="vertical"
    :current="1"
    :items="items"
  />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  {
    title: '已完成',
    description: '这是一段描述文字。',
  },
  {
    title: '进行中',
    description: '这是一段描述文字。',
  },
  {
    title: '待处理',
    description: '这是一段描述文字。',
  },
]
</script>
