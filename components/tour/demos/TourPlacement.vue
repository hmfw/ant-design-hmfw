<template>
  <div>
    <Space>
      <Button ref="uploadRef" type="primary">上传</Button>
      <Button ref="saveRef">保存</Button>
      <Button ref="moreRef" icon="ellipsis">更多</Button>
    </Space>
    <Divider />
    <Button type="primary" @click="open = true">开始引导</Button>
    <Tour v-model:open="open" :steps="steps" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button, Space, Divider } from '@hmfw/ant-design'
import type { TourProps } from '@hmfw/ant-design'

const open = ref(false)
const uploadRef = ref<HTMLElement>()
const saveRef = ref<HTMLElement>()
const moreRef = ref<HTMLElement>()

const steps: TourProps['steps'] = [
  {
    title: '上传文件',
    description: '点击此处上传您的文件。支持拖拽上传和批量上传。',
    target: () => uploadRef.value!,
    placement: 'bottom',
  },
  {
    title: '保存修改',
    description: '完成编辑后，点击保存按钮保存您的修改。',
    target: () => saveRef.value!,
    placement: 'bottom',
  },
  {
    title: '更多操作',
    description: '点击查看更多功能选项，包括导出、分享等。',
    target: () => moreRef.value!,
    placement: 'right',
  },
]
</script>
