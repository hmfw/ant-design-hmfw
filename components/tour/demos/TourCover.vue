<template>
  <div>
    <Button type="primary" @click="open = true">带封面的引导</Button>
    <Tour v-model:open="open" :steps="steps" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button } from '@hmfw/ant-design'
import type { TourProps } from '@hmfw/ant-design'

const open = ref(false)

const steps: TourProps['steps'] = [
  {
    title: '欢迎使用',
    description: '让我们开始快速入门引导，了解产品的核心功能。',
    cover: 'https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png',
  },
  {
    title: '强大的功能',
    description: '我们提供了丰富的功能来满足您的各种需求。',
    cover: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
  },
  {
    title: '开始使用',
    description: '现在您已经了解了基本功能，可以开始使用了！',
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  },
]
</script>
