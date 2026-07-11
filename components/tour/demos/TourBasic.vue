<template>
  <div>
    <Space>
      <Button ref="btnRef" type="primary" @click="open = true"> 开始引导 </Button>
    </Space>
    <Tour v-model:open="open" :steps="steps" @finish="open = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button, Space } from '@hmfw/ant-design'
import type { TourStep } from '@hmfw/ant-design'

const open = ref(false)

const steps: TourStep[] = [
  {
    title: '第一步',
    description: '这是漫游引导的第一步，介绍页面的主要功能。',
  },
  {
    title: '第二步',
    description: '这是第二步，继续介绍其他功能。',
  },
  {
    title: '完成',
    description: '引导完成！现在你已经了解了所有功能。',
  },
]
</script>
