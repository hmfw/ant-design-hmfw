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
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*gV1zSKqv3vYAAAAAAAAAAAAAARQnAQ',
  },
  {
    title: '强大的功能',
    description: '我们提供了丰富的功能来满足您的各种需求。',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*abGUQKUocSsAAAAAAAAAAAAAARQnAQ',
  },
  {
    title: '开始使用',
    description: '现在您已经了解了基本功能，可以开始使用了！',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*-71xRr0Z3TsAAAAAAAAAAAAAARQnAQ',
  },
]
</script>
