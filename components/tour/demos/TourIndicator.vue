<template>
  <div>
    <Button type="primary" @click="open = true">自定义指示器</Button>
    <Tour v-model:open="open" :steps="steps" :indicators-render="indicatorsRender" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Tour, Button } from '@hmfw/ant-design'
import type { TourProps } from '@hmfw/ant-design'

const open = ref(false)

const steps: TourProps['steps'] = [
  {
    title: '第一步',
    description: '这是引导的第一步，向您介绍产品的基本功能。',
  },
  {
    title: '第二步',
    description: '接下来我们将介绍如何使用高级功能。',
  },
  {
    title: '第三步',
    description: '最后，让我们看看如何自定义您的设置。',
  },
]

// 自定义指示器渲染函数：显示 "1/3" 格式
const indicatorsRender = (current: number, total: number) =>
  h(
    'span',
    { style: { color: 'var(--hmfw-color-primary)', fontSize: '14px', fontWeight: 600 } },
    `${current + 1} / ${total}`,
  )
</script>
