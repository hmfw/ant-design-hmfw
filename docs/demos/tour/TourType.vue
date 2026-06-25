<template>
  <div>
    <Space>
      <Button type="primary" @click="openDefault"> 默认样式 </Button>
      <Button type="primary" @click="openPrimary"> 主题样式 </Button>
    </Space>
    <Tour v-model:open="defaultOpen" :steps="defaultSteps" @finish="defaultOpen = false" />
    <Tour v-model:open="primaryOpen" type="primary" :steps="primarySteps" @finish="primaryOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button, Space } from '@hmfw/ant-design'
import type { TourStep } from '@hmfw/ant-design'

const defaultOpen = ref(false)
const primaryOpen = ref(false)

const defaultSteps: TourStep[] = [
  {
    title: '默认样式',
    description: '这是默认样式的引导，白色背景。',
  },
  {
    title: '第二步',
    description: '继续介绍功能...',
  },
]

const primarySteps: TourStep[] = [
  {
    title: '主题样式',
    description: '这是主题样式的引导，蓝色背景。',
  },
  {
    title: '第二步',
    description: '继续介绍功能...',
  },
]

function openDefault() {
  defaultOpen.value = true
}

function openPrimary() {
  primaryOpen.value = true
}
</script>
