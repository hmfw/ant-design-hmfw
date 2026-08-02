<template>
  <div>
    <Button type="primary" @click="open = true">开始非模态引导</Button>
    <Divider />
    <Space>
      <Button ref="btn1Ref">操作 1</Button>
      <Button ref="btn2Ref" type="primary">操作 2</Button>
      <Button ref="btn3Ref" icon="ellipsis" />
    </Space>
    <Tour v-model:open="open" :mask="false" type="primary" :steps="steps" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button, Space, Divider } from '@hmfw/ant-design'
import type { TourProps } from '@hmfw/ant-design'

const open = ref(false)
const btn1Ref = ref<HTMLElement>()
const btn2Ref = ref<HTMLElement>()
const btn3Ref = ref<HTMLElement>()

const steps: TourProps['steps'] = [
  {
    title: '第一步',
    description: '这是第一个操作按钮。',
    target: () => btn1Ref.value!,
  },
  {
    title: '第二步',
    description: '这是主要操作按钮。',
    target: () => btn2Ref.value!,
  },
  {
    title: '第三步',
    description: '点击查看更多操作。',
    target: () => btn3Ref.value!,
  },
]
</script>
